window.onload = function () {
  document.getElementsByClassName('md')[0].innerHTML = parse(document.getElementById('mdu').innerHTML);
  //document.getElementsByClassName('md')[0].innerHTML = parse("<a href=\"#\" class=\"md-a\">Nach oben</a> # MD");
};
