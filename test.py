import sched, time
import pdb
import json
import datetime

data = []
with open('addresses.json') as f:
    for line in f:
        data.append(json.loads(line))
print data

s = sched.scheduler(time.time, time.sleep)

def do_something(sc): 
  print "Doing stuff..."
  print datetime.datetime.now().time()
  # do your stuff
  sc.enter(10, 1, do_something, (sc,))

s.enter(10, 1, do_something, (s,))
s.run()