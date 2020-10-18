from flask import Flask, session, render_template, jsonify, request
from Analyze import score as score_text
from Analyze import topTags
from base64 import b64decode as b64d
import requests as r
import json
from Utils.sentiment import Sentiment
app = Flask(__name__)

app.secret_key = b'_5#y2gyhsghyttryrthgfjkjutrtqtregdfgdL"F4Q8z\n\asdasdasdas]/'

with open('config.json') as f:
    config = json.load(f)
    
@app.route('/')
def index():
    if session.get('text') is None:
        session['text'] = ""
        session['last_response']=""
    return render_template('index.html')

@app.route('/score', methods=["GET","POST"])
def score():
    if request.method == "POST":

        content = request.json['content']
        avg, good, bad = score_text(content)

        return jsonify({
            'score': avg,
            'good': good,
            'bad': bad,
            'top_tags': topTags(good, bad, 3)
        })
    return False

@app.route('/finalScore', methods=["GET","POST"])
def finalScore():
    if request.method == "POST":
        print(request.json)
        text = request.json['content']
        if(text == session.get('text')):
           return jsonify(Sentiment(session.get('last_response')).getData())
        subscription_key = config['subscription_key']
        endpoint = config['endpoint']
        sentiment_url = endpoint + "/text/analytics/v3.1-preview.1/sentiment?opinionMining=true" #now on 3.1
        documents = {"documents": [
        {"id": "1", "language": "en",
        "text": text},]}
        headers = {"Ocp-Apim-Subscription-Key": subscription_key}
        response = r.post(sentiment_url, headers=headers, json=documents)
        sentiments = response.json()
        session['text'] = text
        session['last_response'] = sentiments
        return jsonify(Sentiment(sentiments).getData())
        
    return ""

app.run(host='0.0.0.0', port=8000)
