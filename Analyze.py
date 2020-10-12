from senticnet5 import word
import math

def hashtags(inp):
  tags = []
  for i in inp:
    w = word(i)
    tags.append(w.primary_mood())
  return tags

def topTags(pos, neg, n):
  tag_count = {}
  tags = hashtags(pos) + hashtags(neg)
  for tag in tags:
    if tag in tag_count:
      tag_count[tag] +=1
    else:
      tag_count[tag] = 1

  return sorted(tag_count, key=tag_count.get, reverse=True)[:n]

def score(inp):
  bad_words = []
  good_words = []
  total=0 #the number of all negative and positive words
  sum=0 #the sum of all negative and positive words
  sanitized_input=[]
  POSITIVE_THRESHOLD=.3 #positive threshold is higher to reduce positive bias 
  NEGATIVE_THRESHOLD=-.1


  for i in inp.split():
    i=i.split(",")
    i=i[0].split("!")
    i=i[0].split(".")
    i=i[0].split("?")
    sanitized_input.append(i[0])



  for v, i in enumerate(sanitized_input):

    if i[len(i)-3:] == "ing":
      i=i[:len(i)-3]
    if i[len(i)-2:] == "\'s":
      i=i[:len(i)-2]
    
    if scoreOne(i) >  POSITIVE_THRESHOLD:
      good_words.append(i)
      total+=1
      sum+=scoreOne(i)**1.5
    elif scoreOne(i) < NEGATIVE_THRESHOLD:
      bad_words.append(i)
      total+=1
      sum+=negWeighter(scoreOne(i))
    try: 
      
      if scoreTwo(i,sanitized_input[v+1]) >  POSITIVE_THRESHOLD:
        good_words.append(i+"_"+sanitized_input[v])
        total+=1
        sum+= scoreTwo(i,sanitized_input[v+1])**1.5
        
      elif scoreTwo(i,sanitized_input[v+1]) < NEGATIVE_THRESHOLD:
        
        bad_words.append(i+"_"+sanitized_input[v+1])
        total+=1
        sum+= negWeighter(scoreTwo(i,sanitized_input[v+1]))
        
    except:
      pass
    try:
      if scoreThree(i,sanitized_input[v+1], sanitized_input[v+2]) > POSITIVE_THRESHOLD:
        good_words.append(i+"_"+sanitized_input[v+1]+"_"+sanitized_input[v+2])
        total+=1
        sum+= scoreThree(i,sanitized_input[v+1], sanitized_input[v+2])**1.5
      elif  scoreThree(i,sanitized_input[v+1], sanitized_input[v+2]) < NEGATIVE_THRESHOLD:
        bad_words.append(i+"_"+sanitized_input[v+1]+"_"+sanitized_input[v+2])
        total+=1
        sum+= negWeighter(scoreThree(i,sanitized_input[v+1], sanitized_input[v+2]))
    except:
      pass
    try:
      if scoreFour(i,sanitized_input[v+1], sanitized_input[v+2], sanitized_input[v+3]) >  POSITIVE_THRESHOLD:
        good_words.append(i+"_"+sanitized_input[v+1]+"_"+sanitized_input[v+2]+"_"+sanitized_input[v+3])
        total+=1
        sum+= scoreFour(i,sanitized_input[v+1], sanitized_input[v+2], sanitized_input[v+3])**1.5
      elif  scoreFour(i,sanitized_input[v+1], sanitized_input[v+2], sanitized_input[v+3]) < NEGATIVE_THRESHOLD:
        bad_words.append(i+"_"+sanitized_input[v+1]+"_"+sanitized_input[v+2]+"_"+sanitized_input[v+3])
        total+=1
        sum+= negWeighter(scoreFour(i,sanitized_input[v+1], sanitized_input[v+2], sanitized_input[v+3]))
    except:
      pass
   
  try:
    
    avg=sum/total
    if avg<-1:
      avg=avg/2
  except:
    avg=0
  return [avg, good_words, bad_words]

def scoreOne(x):
  x=x.lower()

  try:

    return float(word(x).polarity_value())
   
  except:
    return 0

def scoreTwo(x,y):
  x=x.lower()+"_"+y.lower()
  try:

    return float(word(x).polarity_value())
  
  except:
    return 0


def scoreThree(x,y,z):
  x=x.lower()+"_"+y.lower()+"_"+z.lower()
  try:

    return float(word(x).polarity_value())
    
  except:
    return 0

def scoreFour(x,y,z,a):
  x=x.lower()+"_"+y.lower()+"_"+z.lower()+"_"+a.lower()
  try:

    return float(word(x).polarity_value())
  
  except:
    return 0

def negWeighter(x):
  if x<0:
    return 2*-math.sqrt(abs(x))
  return math.sqrt(x)
