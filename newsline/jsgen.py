#! /usr/bin/python
import feedparser
import simplejson as json
import dateutil.parser
import sys
import re

re_rem = []
rem = ["<strong>", "</strong>","<b>", "</b>", "<i>", "</i>", "<u>",
       "</u>", "</font>", "</size>", "</bgcolor>", "<p>", "</p>"]
def removeTags(s):
    if s:
        s = u"" + s
        for r in re_rem:
            s = re.sub(r, "", s)
        for r in rem:
            s = s.replace(r,"")
    return s

class NewsItem():
	def __init__(self, title, time, content, link):
		self.time = dateutil.parser.parse(time).strftime('%d %h')
		self.title = removeTags(title)
		self.content = removeTags(content)
		self.link = link

try:
    feedfile = sys.argv[1]
    keyword = sys.argv[2]
except:
	print "wrong usage. try ./thisfile <feed.rss> <keyword>"
	sys.exit(0)

feed = feedparser.parse(feedfile)

num_items = len(feed.entries)


our_items = []
print num_items
for i in range(num_items):
	try:
		n = NewsItem(feed.entries[i].title,
				feed.entries[i].published,
				feed.entries[i].summary_detail['value'],
				feed.entries[i].link,
				)
		our_items.append(n)
	except:
		continue

print len(our_items)
l = []
for n in our_items:
	if keyword == "all" or (keyword in  n.title):
		j = {
			"title" : n.title,
			"time" : n.time,
			"link" : n.link,
			"content" : n.content
		}
		l.append(j)

name = feedfile.split(".")[0]
print name + "_items=" + json.dumps(l, indent = 2) + ";"