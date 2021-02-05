# Backend
SentimentAnalysis analyzes the sentiment (positivity or negativity) of a message. For instance, "I love you" is very positive, while "I hate you" is very negative. A statement like "I eat burgers" carries no significant connotation, so it is neutral.

The sentiment of a message is estimated as you type by using the Senticnet5 database. The sentiment is displayed on the bar at the bottom of the screen.

However, Senticnet5 is limited because it does not understand context, merely individual words and phrases. So, a better solution is currently being implemented: Azure SentimentAPI. Users will be able to submit their message for analysis (this cannot be conducted in real time because it would rapidly max out allowable API calls to Azure). Particularly positive and negative words will be noted so the user can understand where their score is coming from.

## Frontend - React App

``/src``: Contains flask app, entry point is ``index.js``.

``/static``: Contains all static site content.

## Backend - Flask App

``Main.py``: the backend of the website, built on Flask

``Analyze.py``: Sentiment analysis functions

``Senticnet5.py``: The Senticnet database stored as a python dictionary
