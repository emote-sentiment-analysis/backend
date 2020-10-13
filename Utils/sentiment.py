
class Sentiment:
  response = {}
  sentences = []
  confidenceScores = {}
  sentiment = ""

  def __init__(self, response):
    self.response = response
    self.sentences = response['documents'][0]['sentences']
    self.confidenceScores= response['documents'][0]['confidenceScores']
    self.sentiment = response['documents'][0]['sentiment']
  
  def getSentence(self, n):
    return Sentence(self.sentences[n])
  
  def getData(self):
    sentences = []
    for s in self.sentences:
      sentences.append(Sentence(s).getData())
    
    return {
            'rating': self.sentiment,
            'scores': self.confidenceScores,
            'sentences': sentences
        }

class Sentence:
  response = {}
  sentiment = ""
  confidenceScores = {}
  offset = ""
  length = 0
  text = ""
  def __init__(self, response):
    self.response=response
    self.sentiment = response['sentiment']
    self.confidenceScores=response['confidenceScores']
    self.offset=response['offset']
    self.length = response['length']
    self.text = response['text']
    self.aspects = response['aspects']
    self.opinions = response['opinions']

  def __str__(self):
     return str(self.response)
  
  def getData(self):
    return {
      'sentiment':self.sentiment,
      'scores':self.confidenceScores,
      'text':self.text,
      'aspects':self.aspects,
      'opinions':self.opinions
    }


  



    
