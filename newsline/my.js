
function finditems(list, k)
{
  r = {};
  k = k.toLowerCase();
for(var i = 0; i < list.length; i++)
{
  var b = list[i].time;
  if(list[i].title.toLowerCase().match(k))
  {
      if (list[i].time in r){
          r[list[i].time].push(list[i]);}
      else{
          r[list[i].time] = [];
          r[list[i].time].push(list[i]);}
  }
 
}
 return r;
}

String.prototype.format = function() {
  var args = arguments;
  return this.replace(/{(\d+)}/g, function(match, number) { 
    return typeof args[number] != 'undefined'
      ? args[number]
      : match
    ;
  });
};


function createCollapsible(item, id)
{
    return ('<div class="accordion-group"> <div class="accordion-heading"><a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="#col_{0}">{1}</a> </div> <div id="col_{0}" class="accordion-body collapse"> <div class="accordion-inner">{2}</div></div></div>'.format(id,item.title, item.content));
}

function createUncollapsible(s)
{
  return ('<div class="accordion-group"> <div class="accordion-heading"><div class="accordion-toggle left-mark" data-toggle="collapse" data-parent="#accordion2">{0}</div> </div> </div>'.format(s));
}

function  myacc(g)
{
  s ="";
  c = 0;
  for (var key in g){
   if (g.hasOwnProperty(key)){
    ss = createUncollapsible(key);
    s = s+ss;
    for (var i = 0; i < g[key].length; i++){
      s = s +  createCollapsible(g[key][i], c+"");
      c +=1;
    }
   }
  }
  if (s != "")
    return('<div class="accordion" id="accordion2">{0}</div>').format(s);
  else
    return s
}
/*
<div class="accordion-group"> <div class="accordion-heading"><a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="#collapseOne">Collapsible Group Item #1</a> </div> <div id="collapseOne" class="accordion-body collapse in"> <div class="accordion-inner">Anim pariatur cliche...</div></div></div>*/

function headText(s)
{
  return('<div class="row-fluid"><div class = "span6"><h3 id="mainheading">Newsline for "{0}"</h3></div><div class= "pull-right"><img src="fork.png"/>&nbspFork &nbsp&nbsp<img src="watch.png"/>&nbspWatch</div></div><p class="lead">A newsline made up of recent things about {0}</p>'.format(s))
}

aboutText = "<h2>About</h2><p>Newsline is a powerful service with a very simple idea at it's core: <i>View anything as a timeline.</i></p><p>In this proof-of-concept demo, simply search for any news in the past fortnight, and watch the <i>Newsline</i> being built.</p> <br/><br/><p><img src='ad.png'/></p>"

homeText = "<h2>Startup weekend demo</h2><p>Search for a recent news to the left.</p><p>Try searching for <i>coal</i> or <i>cartoon</i> or <i>Kudankulam</i>."
/*<div class="row-fluid"><div class = "span6"><h3 id="mainheading">Kudankulam</h3></div><div class= "pull-right"><img src="fork.png"/>&nbspFork &nbsp&nbsp<img src="watch.png"/>&nbspWatch</div></div>/*/

/*            <div class="row-fluid">
               <div class = "span6"><h3 id="mainheading">Kudankulam</h3></div>
               <div class= "pull-right">
               <img src="fork.png"/>&nbspFork &nbsp&nbsp<img src="watch.png"/>&nbspWatch
             </div>
            </div>
            <p class="lead">A newsline made up of recent events a Kudankulam</p>*/