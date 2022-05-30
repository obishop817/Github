function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6Qm2RSC1rym":
        Script1();
        break;
  }
}

function Script1()
{
  var player = GetPlayer();

var uname = player.GetVar("studentName");

var cname = player.GetVar("courseName");

var score = player.GetVar("score");

var urlstring = ("Github/story_content/external_files/certificate.html?uname="+ uname +"&cname=" + cname + " &score="+score);

window.open(urlstring,"certificate.html");
}

