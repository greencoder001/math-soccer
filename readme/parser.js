/*
* Markdown Parser by Green_Lab
*/


function parse(md) {
  var html = "<div class=\"md-container md-text\">";
  var lines = md.split("\n");
  lines.forEach((line, i) => {
    if (line.startsWith("# ")) {
      // h1
      html += line.replace("# ", "<h1 class=\"md-h md-h1\">") + "</h1>";
    }
    else if (line.startsWith("## ")) {
      // h1
      html += line.replace("# ", "<h2 class=\"md-h md-h2\">") + "</h2>";
    }
    else if (line.startsWith("### ")) {
      // h1
      html += line.replace("### ", "<h3 class=\"md-h md-h3\">") + "</h3>";
    }
    else if (line.startsWith("#### ")) {
      // h1
      html += line.replace("#### ", "<h4 class=\"md-h md-h4\">") + "</h4>";
    }
    else if (line.startsWith("##### ")) {
      // h1
      html += line.replace("##### ", "<h5 class=\"md-h md-h5\">") + "</h5>";
    }
    else if (line.startsWith("###### ")) {
      // h1
      html += line.replace("###### ", "<h6 class=\"md-h md-h6\">") + "</h6>";
    }
    else {
      html += line;
    }
  });

  html += "</div><br><span class=\"md-italic\">parsed with <span style=\"font-style: normal; color: #ff0000;\" class=\"md-color\">❤</span> by the Green_Lab Markdown Parser</span>"
  return html;
}
