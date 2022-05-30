function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5zVa7AtgBHW":
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

var urlstring = ("story_content/external_files/certificate.html?uname="+ uname +"&cname=" + cname + " &score="+score);

window.open(urlstring,"certificate.html");
}

