var videos = ['6gJMit2ZojM'];

var video = videos[Math.floor(Math.random()*videos.length)];
var frame = '<iframe width="100%" height="100%" src="https://www.youtube-nocookie.com/embed/'+video+'?autoplay=1&amp;controls=0&amp;showinfo=0&amp;rel=0&amp;iv_load_policy=3&amp;modestbranding=1" frameborder="0" allowfullscreen></iframe>';

document.body.innerHTML += frame;
