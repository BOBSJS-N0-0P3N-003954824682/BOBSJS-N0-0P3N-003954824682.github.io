/*
Hey, if you're reading this, you've probably found the js file hosting Bob's Game Shack.

Most of the base website is hosted on here, with the exception of game files.

I'm able to keep multiple pages on a single JavaScript file by using links that aren't actually links, but instead hide certain peices of the page to give the effect as if there are multiple HTML files. 

I place code into the HTML through JavaScript by using document.body.innerHTML and document.head.innerHTML.



IMPORTANT!
You are allowed to copy any CSS or JavaScript in this file, but copying the entire website is strictly forbidden. If you end up using any part of my code, please credit me somewhere on the website.

00.05.29
*/




//JAVASCRIPT P1
var loadpage = function(page){
	document.getElementById("home").style.display = "none"
	document.getElementById("about").style.display = "none"
	document.getElementById("other").style.display = "none"
	document.getElementById("gamepage").style.display = "none"
	document.getElementById("games").style.display = "none"
	document.getElementById("settings").style.display = "none"
	document.getElementById("credits").style.display = "none"
	
	document.getElementById(page).style.display = "block"
	
	var iFrame = document.getElementById("gameIframe")
if (iFrame != null) {
	if (page == "gamepage") {
		loadGame()
	} else {
		iFrame.src = ""
		document.getElementById("likeFrame").src = ""
	}
}
}
function loadGame(){
	
	var game = localStorage.getItem("currentGame");
	var url = "https://000687715.codepen.website/#"+game;
	document.getElementById("gameIframe").src = url;
	document.getElementById("likeFrame").src="https://cdpn.io/pen/debug/KKQaRYQ/#"+game
	
	setTheme();
	
	if (window.location != window.parent.location) {
		var fs = document.getElementById("fullScreenBtn")
		if (fs == null) {} else { 
			fs.innerHTML = "Open in full screen tab"
		}
	}
	
	var themeSelect = document.getElementById("themeSelect")
	themeSelect.addEventListener("change",function(event){
	if (localStorage.getItem('theme')===null) {localStorage.setItem('theme', "Classic");}
 localStorage.setItem('theme', event.target.value);
 console.log(localStorage.getItem('theme'))
 setTheme()
}
)
}

function search() {
    let input = document.getElementById('searchbar').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('game');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].id.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="inline-table";                 
        }
    }
}
var loct = localStorage.getItem("dm")
if (loct==null){
	var dem = false
} else {
	dem = loct
	if (dem==true){
		alert("_devmodeactive")
	}
}
function dmt() {
	var pr = prompt("...")
	var st = "1$4#94%B26"
	if (pr==st.replace("$","").replace("#","").replace("4","").replace("4","").replace("B2","").replace("%","")){alert("confirmed");localStorage.setItem("dm",true);dem=true}
}
function showEmbed() {
	var embedCode = document.getElementById("embedCodeDiv")
	if (embedCode.style.display == "none") {
		var code = '<iframe style="width:1000px;height:600px;border-radius:5px;" src="https://bgembed.netlify.app/'
 	code = code + 
localStorage.getItem("currentGame");
 	code = code + '">'
 	document.getElementById("embedCode").value = code
 	embedCode.style.display = "block"
	} else {embedCode.style.display = "none";}
}
function fullscreen() {
	if (window.location == window.parent.location) {
		//not iframe
			var elem = document.getElementById("gameIframe");
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) {
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    elem.msRequestFullscreen();
  }
	}
}

//HEAD
//The head contains the page title, favicon, and all the CSS.
document.head.innerHTML = `
<title>Bob's Game Shack</title>
<link rel="icon" href="https://assets.codepen.io/2104921/bgs-logo.png">
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Radio+Canada:400,400i,700">
<style>
body {
background-color:#000000;
color:white;
text-align:center;
line-height:150%;
font-family: "Radio Canada";
}
.wr {
color:#ffb429;
}
.wr::before {
content:"👑 "
}
select {
font-family: "Radio Canada";
}
textarea {
width:40%;
height:55px;
resize:none;
font-size:13px;
padding-left:5px;
}
button {
background:transparent;
border:none;
padding:0px;
font-family: "Radio Canada";
}
ol {
	list-style-type: none;
	display: inline-table;
	padding:0px;
}
li {
	text-align:center;
	display: inline-table;
}

.container {
	text-align:center;
  position: relative;
  max-idth: 200px;
	border-radius:5px;
		line-height:0%;
	text-decoration:hidden;
	background-color:#141414;
	padding:10px;
	padding-bottom:0%;
	margin-top:7px;
	margin-left:3px;
}

.gameIframe {
	background:url('https://assets.codepen.io/2104921/bgs-loading.png') center center no-repeat;
	overflow: hidden;
	width:80%;
	height:600px;
	border-color:white;
	border-radius:5px;
	margin-bottom:0;
}

.gameIframeFull {
	background:url('/g/bgs-loading.png') center center no-repeat;
	overflow: hidden;
	border-color:white;
	margin-bottom:0;
	border:hidden;
	overflow:hidden;
	position:absolute;
	top:0;
	left:0%;
	bottom:0%;
	right:0%;
	width:100%;
	height:100%;
}

.gameBottom {
	background-color:#7a7a7a;
	text-align:center;
	color:black;
	padding:10px;
	line-height:120%;
	font-size:20px;
	width:60%;
	margin-top:0;
}

.fullScreenBtn {
	background-color:#141414;
	border-radius:5px;
	color:white;
	padding:5px;
	padding-left:10px;
	padding-right:10px;
}

.game-img {
	border-radius:5px;
  display: block;
  width: 200px;
 	height: 200px;
  height: auto;
}

#searchbar{
	text-align:center;
 padd:5px;
 border-radius: 5px;
	border:none;
	margin:0px;
}

input {
	font-family:"Radio Canada";
	font-size:15px;
}
input[type="text"], textarea {
  background-color : #262626; 
	color:#ffffff;
}
input:focus {
    outline:none;
}
 
input[type=text] {
	height:25px;
      width: 30%;
      -webkit-transition: width 0.1s ease-in-out;
      transition: width 0.1s ease-in-out;
   }
   input[type=text]:focus {
     width: 33%;
}

.c-a{
	text-align:left;
	padding-left:20px;
}

.scrolling-wrapper{
	text-align:left;
	overflow-x: auto;
	background-color:#1f1f1f;
	padding-left:22px;
	padding-bottom:5px;
	margin-left:10px;
	margin-right:10px;
	border-radius:5px;
}

hr {
width:95%;
}
a {
color:white;
text-decoration:none;
font-size:20px;
}
a:hover {
color:grey;
}
font {
font-size:20px;
}
.banner {
background-color:#7a7a7a;
text-align:center;
border-radius:5px;
color:black;
padding:10px;
line-height:120%;
font-size:20px;
}
table {
margin-left: auto;
margin-right: auto;
font-family:"Radio Canada";
border-collapse: collapse;
width: 50%;
color:white;
}
.lt {
margin-left: auto;
margin-right: auto;
font-family:"Radio Canada";
border-collapse: collapse; 
width: 90%;
color:white;
}
td, th {
border: 1px solid #dddddd;
text-align: left;
padding: 8px;
}
.gameIframeFull {
background:url('/g/bgs-loading.png') center center no-repeat;
overflow: hidden;
border-color:white;
margin-bottom:0;
border:hidden;
overflow:hidden;
position:absolute;
top:0;
left:0%;
bottom:0%;
right:0%;
width:100%;
height:100%;
}
tr:nth-child(even) {
background-color: #1f1f1f;
}
tr:nth-child(odd) {
background-color: #363636;
}
::-webkit-scrollbar {
width:5px;
}
::-webkit-scrollbar-track {
background:black;
}
::-webkit-scrollbar-thumb {
background: #888;
}
::-webkit-scrollbar-thumb:hover {
background: #555;
}
::-webkit-scrollbar-corner {
border=radius:5px;
}
.settingsButton{
width:40px;
height:40px;
float:right;
}
.likeFrame{
	text-align:center;
	width:50%;
	margin-left:25%;
	margin-right:25%;
	height:29px;
	border:none;
}
</style>
`;

//BODY
//The body contains all the page's actual code.
document.body.innerHTML = `
<a href="#" onclick="loadpage('settings')"><img class="settingsButton" src="https://icon-library.com/images/white-settings-icon/white-settings-icon-0.jpg"></img></a><br>
<div style="line-height:200%;">
<a href="#" onclick="location.reload()"><font style="font-size:50px;color:#000000;" id="title"><b>Bob's Game Shack</b></font></a><br>
<font style="font-size:35px;color:#000000;" id="title2">v3.1.7</font><br>
</div>
<hr>
<a href="#" onclick="loadpage('home')">Home • </a>
<a href="#" onclick="loadpage('games')">Games • </a>
<a href="#" onclick="loadpage('about')">About • </a>
<a href="https://bit.ly/bobs-games"target="_blank">Alt links • </a>
<a href="https://bgs.peerboard.com/"target="_blank">Forums • </a>
<a href="#" onclick="loadpage('other')">Other • </a>
<a href="https://forms.gle/tgmjeycJWa5eVHLS6"target="_blank">Game suggestion</a>
<hr>

<!--HOME PAGE-->
<span id="home" style="display:block;">
<div style="line-height:50%;">
<h2>View count</h2>
<img src="https://hitwebcounter.com/counter/counter.php?page=7982716&style=0009&nbdigits=6&type=page&initCount=200000"border="0"></div>

<h3 class="banner">Bob's Game Shack is the best unblocked games website, with 50+ quality games of various genres.</h3>

<h3 class="banner" id="updatebanner" style="background-color:#000000">
<b>UPDATE v3.1.7 (5/16/22)</b><br>
• Bob's Game Shack is now contained in a single file and can be deployed by anyone to their own link<br>
</h3>
</span>

<!--ABOUT PAGE-->
<span id="about" style="display:none;">
<h1>ABOUT</h1>
<h2 style="line-height:120%;">Bob's Game Shack is a constantly updated unblocked games website, great for freetime during school or work.<br><br>Contact: bob@bobs-shack.xyz</h2>
</span>

<!--OTHER PAGE-->
<span id="other" style="display:none;">
<div style="line-height:100%;">
	
<h2>Unblocked websites</h2>
<a style="font-size:20px;" href="https://llk.github.io/scratch-gui/develop/" target="_blank">Unblocked Scratch</a><br><br>
	
<h2>Interesting games</h2>
<a style="font-size:20px;" href="https://helenkellersimulator.org/" target="_blank">Hellen Keller Simulator</a><br>
<a style="font-size:20px;" href="https://bbc-luv.github.io/abortion-simulator/" target="_blank">Abortion Simulator</a><br><br>
	
<h2>Site stuff</h2>
<a style="font-size:20px;" href="#" onclick="loadpage('credits')">Credits</a><br>
</div>
</span>

<!--CREDITS-->
<span id="credits" style="display:none;">
<p>
**CREDITS<br>
*Github Credits<br><br>

Some games forked from 3kh0<br>
Some games forked from theclashman2<br>
FNF forked from 28klotlucas<br>
Incredibox forked from DarkReaper231<br><br>

*Other Credits<br><br>

Getting Over It compiled to javascript through turbowarp<br>
Some games forked from theadvancedmethod<br>
</p>
</span>

<!--SETTINGS-->
<span id="settings" style="display:none;">
<h1>SETTINGS</h1>
<div style="line-height:50%;">
	<h3>Choose theme</h3>
	<select style="border-radius:5px; background-color:black; color:white; padding:5px;" id="themeSelect">
 <option>Classic</option>
	<option>Gold</option>
 <option>Blue</option>
 <option>Green</option>
</select>
</div>
</span>

<span id="gamepage" style="display:none;">
<!--GAME-->
	<iframe class="gameIframe" src="" id="gameIframe"></iframe>
	
	<!--LIKES-->
	<iframe scrolling="no" id="likeFrame" src="" class="likeFrame"></iframe>

	<br><button class="fullScreenBtn" onclick="fullscreen()">Fullscreen</button>
	<button class="fullScreenBtn" onclick="showEmbed()">Embed</button><br>
	
	<div id="embedCodeDiv" style="line-height:30%;display:none;">
		<h3>Copy this code and place it on your website:</h3>
		<textarea id="embedCode" disabled="disabled">...</textarea>
	<br>
</div>
</span>

<!--GAMES-->
<span id="games" style="display:none;">
<div style="line-height:50%">
	<br>
<input id="searchbar" onkeyup="search()" type="text"
        name="search" placeholder="Enter a game...">
</div>
	
<div style="line-height:200%; font-size:20px">
<ol id='list'>
	
	<li id="elastic man" class="game"><button onclick="play('elasticman','Elastic Man')">
	<div class="container" style="color:white; display: inline-block;">
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnxniW7K2pZmxzu1x9kE1jlWhpzX5YNMEixk2j0y0oKPwZ7pLoQIpL9AT9Y6Du0ALQ9CA:https://aking.io/wp-content/uploads/2021/03/elasticman.png&usqp=CAU" class="game-img">
	 <h2>Elastic Man</h2>
 <h3>Misc</h3>
		</div>
		</button>
</li>
	
	<li id="tetris" class="game"><button onclick="play('tetris')">
	<div class="container" style="color:white; display: inline-block;">
<img src="https://irate4x4.com/media/classic-tetris-logo-png.31125/full" class="game-img">
	 <h2>Tetris</h2>
 <h3>Puzzle</h3>
		</div>
		</button>
</li>
	
	<li id="tanuki sunset" class="game"><button onclick="play('tanuki-sunset')">
	<div class="container" style="color:white; display: inline-block;">
<img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/34e2cad0-8326-4a17-8d9f-f37832154061/dejyyx3-09639d42-5db7-4c5e-8c89-ee71694533c2.png" class="game-img">
	 <h2>Tanuki Sunset</h2>
 <h3>Drifting</h3>
		</div>
		</button>
</li>
	
	<li id="worlds world's hardest game" class="game"><button onclick="play('worlds-hardest-game')">
	<div class="container" style="color:white; display: inline-block;">
<img src="https://store-images.microsoft.com/image/apps.17710.13510798885956294.63a83af1-649d-4866-930d-e41e6726284a.59da368e-f058-4860-91bd-069d1c2b6cdf?mode=scale&q=90&h=200&w=200&background=%23464646" class="game-img">
	 <h2>Hardest Game</h2>
 <h3>Misc</h3>
		</div>
		</button>
</li>
	
	<li id="ice age baby" class="game"><button onclick="play('iceagebaby')">
	<div class="container" style="color:white; display: inline-block;">
<img src="https://assets.codepen.io/2104921/killtheiceagy.PNG" class="game-img">
	 <h2>Ice Age Baby</h2>
 <h3>Adventure</h3>
		</div>
		</button>
</li>
	
	<li id="turbo moto racer" class="game"><button onclick="play('turbomotoracer')">
	<div class="container" style="color:white; display: inline-block;">
<img src="https://afreegame.net/wp-content/uploads/2021/04/256x256bb.jpg" class="game-img">
	 <h2>Turbo Moto Racer</h2>
 <h3>Driving</h3>
		</div>
		</button>
</li>
	
	<li id="time shooter 2" class="game"><button onclick="play('timeshooter2')">
	<div class="container" style="color:white; display: inline-block;">
<img src="https://images-na.ssl-images-amazon.com/images/I/61nPRvzJw5L.png" class="game-img">
	 <h2>Time Shooter 2</h2>
 <h3>FPS</h3>
		</div>
		</button>
</li>
	
	<li id="time shooter 3" class="game"><button onclick="play('timeshooter3')">
	<div class="container" style="color:white; display: inline-block;">
<img src="https://assets.codepen.io/2104921/ts3.PNG" class="game-img">
	 <h2>Time Shooter 3</h2>
 <h3>FPS</h3>
		</div>
		</button>
</li>
	
	<li id="cookie clicker" class="game"><button onclick="play('cookieclicker')">
	<div class="container" style="color:white; display: inline-block;">
<img src="https://gamificationplus.uk/wp-content/uploads/2016/03/Capture1.png" class="game-img">
	 <h2>Cookie Clicker</h2>
 <h3>Clicker</h3>
		</div>
		</button>
</li>
	
	<li id="champion island" class="game"><button onclick="play('championisland')">
	<div class="container" style="color:white; display: inline-block;">
<img src="https://assets.codepen.io/2104921/championisland.PNG" class="game-img">
	 <h2>Champion Island</h2>
 <h3>Adventure</h3>
		</div>
		</button>
</li>
	
	<li id="tunnel rush" class="game"><button onclick="play('tunnel-rush')">
	<div class="container" style="color:white; display: inline-block;">
<img src="http://images.hellokids.com/_uploads/_tiny_galerie/20180415/vign-tunnel-rush-hk-w8v_u89.jpg" class="game-img">
	 <h2>Tunnel Rush</h2>
 <h3>Misc</h3>
		</div>
		</button>
</li>
	
	<li id="townscaper" class="game"><button onclick="play('townscaper')">
	<div class="container" style="color:white; display: inline-block;">
<img src="https://rawfury.com/games/townscaper/townscaper-217033606/" class="game-img">
	 <h2>Townscaper</h2>
 <h3>Building</h3>
		</div>
		</button>
</li>
	
	<li id="incredibox" class="game"><button onclick="play('incredibox')">
	<div class="container" style="color:white; display: inline-block;">
<img src="https://upload.wikimedia.org/wikipedia/en/8/82/Incredibox-logo.png" class="game-img">
	 <h2>Incredibox</h2>
 <h3>Rhythm</h3>
		</div>
		</button>
</li>
	
	<li id="super smash flash ssf" class="game"><button onclick="play('ssf')">
	<div class="container" style="color:white; display: inline-block;">
<img src="https://cdn2.steamgriddb.com/file/sgdb-cdn/icon/f83630579d055dc5843ae693e7cdafe0/32/256x256.png" class="game-img">
	 <h2>Super Smash Flash</h2>
 <h3>Fighting</h3>
		</div>
		</button>
</li>
	
	<li id="cat trap" class="game"><button onclick="play('cattrap')">
	<div class="container" style="color:white; display: inline-block;">
<img src="https://www.virlan.co/game/wp-content/uploads/2022/03/Cat-Trap-Game.jpg" class="game-img">
	 <h2>Cat Trap</h2>
 <h3>Puzzle</h3>
		</div>
		</button>
</li>

	<li id="snow battle io" class="game"><button onclick="play('snowbattle')">
	<div class="container" style="color:white; display: inline-block;">
<img src="https://connect-prd-cdn.unity.com/20200827/udp/images/647e8f6b-ecfa-4e5b-ac40-7867d790efd5_ic.png" class="game-img">
	 <h2>SnowBattle.io</h2>
 <h3>Adventure</h3>
		</div>
		</button>
</li>
	
	<li id="slope" class="game"><button onclick="play('slope')">
	<div class="container" style="color:white; display: inline-block;">
<img src="https://play-lh.googleusercontent.com/uJn2i9h7KxYQarC_c3K4qH6o7gLtflFnhD_dN14MNkzHJ1NeNFzCL69jpB5mT0vCoQs" class="game-img">
	 <h2>Slope</h2>
 <h3>Misc</h3>
		</div>
		</button>
</li>
	
	<li id="shell shockers io" class="game"><button onclick="play('shellshockers')">
	<div class="container" style="color:white; display: inline-block;">
<img src="https://cdn-images.threadless.com/threadless-media/artist_shops/shops/bluewizard/products/1617669/original-1621960642-2ac607f273a319bd81ac2f36de28fac5.png?v=3&d=eyJvbmx5X21ldGEiOiBmYWxzZSwgImZvcmNlIjogZmFsc2UsICJvcHMiOiBbWyJ0cmltIiwgW2ZhbHNlLCBmYWxzZV0sIHt9XSwgWyJyZXNpemUiLCBbXSwgeyJ3aWR0aCI6IDk5Ni4wLCAiYWxsb3dfdXAiOiBmYWxzZSwgImhlaWdodCI6IDk5Ni4wfV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzEyMDAsIDEyMDBdLCB7ImJhY2tncm91bmQiOiAiZmZmZmZmIn1dLCBbInJlc2l6ZSIsIFs4MDBdLCB7fV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzgwMCwgODAwLCAiI2ZmZmZmZiJdLCB7fV0sIFsiZW5jb2RlIiwgWyJqcGciLCA4NV0sIHt9XV19" class="game-img">
	 <h2>Shell Shockers</h2>
 <h3>FPS</h3>
		</div>
		</button>
</li>
	
	<li id="run 3" class="game"><button onclick="play('run3')">
	<div class="container" style="color:white; display: inline-block;">
<img src="https://assets1.ignimgs.com/2018/06/18/run-3-0-button-1529363477468.jpg" class="game-img">
	 <h2>Run 3</h2>
 <h3>Adventure</h3>
		</div>
		</button>
</li>
	
	<li id="rooftop snipers" class="game"><button onclick="play('rooftop-snipers')">
	<div class="container" style="color:white; display: inline-block;">
<img src="https://lh6.googleusercontent.com/UMcHjLGtbsgt3gl3mWT8LN8Hp9A_x343Chm3as08TgTxmJCgfU_nMJ__9WpAP-yq1g9Fhy0wQfhVVWRNCd-0xJ33nFPgoI6pTS32iIiff0jOtxMih8Z9NGtp6CLL5V0YY8tLKaKc" class="game-img">
	 <h2>Rooftop Snipers</h2>
 <h3>2 player</h3>
		</div>
		</button>
</li>
	
	<li id="getaway shootout" class="game"><button onclick="play('getaway-shootout')">
	<div class="container" style="color:white; display: inline-block;">
<img src="https://img.appsrankings.com/1410580697/getaway-shootout-logo.jpg" class="game-img">
	 <h2>Getaway Shootout</h2>
 <h3>2 player</h3>
		</div>
		</button>
</li>
	
	<li id="retro bowl" class="game"><button onclick="play('retro-bowl')">
	<div class="container" style="color:white; display: inline-block;">
<img src="https://pbs.twimg.com/profile_images/1217942835527409665/swRMqEkK_400x400.jpg" class="game-img">
	 <h2>Retro Bowl</h2>
 <h3>Sports</h3>
		</div>
		</button>
</li>
	
	<li id="burrito bison launcha libre" class="game"><button onclick="window.open('https://tybsi.com/games/burrito-bison-launcha-libre/index.html','_blank')">
	<div class="container" style="color:white; display: inline-block;">
<img src="https://play-lh.googleusercontent.com/vpTgm9u7-GzZP_MceTWpDi0HbinXd_4phCoTwf4ZspFL-115FtNRdo_SU1p-khLDnLA" class="game-img">
	 <h2>Burrito Bison</h2>
 <h3>Adventure</h3>
		</div>
		</button>
</li>
	
	<li id="my friend pedro flash" class="game"><button onclick="play('myfriendpedro')">
	<div class="container" style="color:white; display: inline-block;">
<img src="https://cdn.80.lv/api/upload/post/6909/images/5d2dbe15ba787/widen_2440x0.png" class="game-img">
	 <h2>My Friend Pedro</h2>
 <h3>Shooter</h3>
		</div>
		</button>
</li>
	
	<li id="moto3xm motorcycle" class="game"><button onclick="play('motox3m')">
	<div class="container" style="color:white; display: inline-block;">
<img src="https://img.utdstc.com/icon/404/aeb/404aeb2ec5c64c096c3e7b77ece99dc3f977a4d60034299665ef17a23dbccd5d:200" class="game-img">
	 <h2>Moto3xm</h2>
 <h3>Driving</h3>
		</div>
		</button>
</li>
	
	<li id="idle breakout" class="game"><button onclick="play('idle-breakout')">
	<div class="container" style="color:white; display: inline-block;">
<img src="https://play-lh.googleusercontent.com/e5jzYTn7Mjh9Ghn-DFpVedkOlRfSOyCS2AFgXdTrADIuuUbjx6vP6r_YOM2j5m7uLQ" class="game-img">
	 <h2>Idle Breakout</h2>
 <h3>Idle</h3>
		</div>
		</button>
</li>
	
	<li id="getting over it" class="game"><button onclick="play('gettingoverit')">
	<div class="container" style="color:white; display: inline-block;">
<img src="https://play-lh.googleusercontent.com/AmzHCh6UEelYfh9AfWXh1WIOC0Z_Z69N9bTvEi-hbRhDe7XL04xuuQfvQXCKLHSHcgVk" class="game-img">
	 <h2>Getting Over It</h2>
 <h3>Scratch Remake</h3>
		</div>
		</button>
</li>
	
	<li id="fnf friday night funkin" class="game"><button onclick="play('fnf')">
	<div class="container" style="color:white; display: inline-block;">
<img src="https://i1.sndcdn.com/artworks-ZpznP0W5HRj16UR8-2CRmGg-t500x500.jpg" class="game-img">
	 <h2>Friday Night Funkin</h2>
 <h3>Rhythm</h3>
		</div>
		</button>
</li>
	
	<li id="fireboy and watergirl" class="game"><button onclick="play('fireboyandwatergirl1')">
	<div class="container" style="color:white; display: inline-block;">
<img src="https://kizicdn.com/system/static/thumbs/big_tile_thumb/1035/thumb300_FBWG4_300x300.jpg?1556201209" class="game-img">
	 <h2>Fireboy & Watergirl</h2>
 <h3>2 player / Adventure</h3>
		</div>
		</button>
</li>
	
	<li id="duck life 3" class="game"><button onclick="play('ducklife3')">
	<div class="container" style="color:white; display: inline-block;">
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEj6LwhwgZkjHq_AghTfYlnX0AQmS8p2rAFGh1EoMruNtwk8QM9XQW7JC-Dl1R6-IJhYM:https://lookaside.fbsbx.com/lookaside/crawler/media/%3Fmedia_id%3D3264229280306316&usqp=CAU" class="game-img">
	 <h2>Duck Life 3</h2>
 <h3>Adventure</h3>
		</div>
		</button>
</li>
	
	<li id="duck life 4" class="game"><button onclick="play('ducklife4')">
	<div class="container" style="color:white; display: inline-block;">
<img src="https://4ts097296.netlify.app/projects/ducklife4/splash.jpg" class="game-img">
	 <h2>Duck Life 4</h2>
 <h3>Adventure</h3>
		</div>
		</button>
</li>
	
	<li id="drift hunters" class="game"><button onclick="play('drifthunters')">
	<div class="container" style="color:white; display: inline-block;">
<img src="https://play-lh.googleusercontent.com/BTNEh2Z3EYM6CRPSNV4vXDFaMhVSaZdcZlbE4Fv_If_Ad-TcJzpAjAbCpioXmgcrIS63" class="game-img">
	 <h2>Drift Hunters</h2>
 <h3>Driving / Drifting</h3>
		</div>
		</button>
</li>
	
	<li id="vex 3" class="game"><button onclick="play('vex3')">
	<div class="container" style="color:white; display: inline-block;">
<img src="https://is2-ssl.mzstatic.com/image/thumb/Purple128/v4/23/cc/ea/23ccea49-28e1-2327-8b95-5d05a00a312e/source/512x512bb.jpg" class="game-img">
	 <h2>Vex 3</h2>
 <h3>Platformer</h3>
		</div>
		</button>
</li>
	
	<li id="vex 4" class="game"><button onclick="play('vex4')">
	<div class="container" style="color:white; display: inline-block;">
<img src="https://store-images.s-microsoft.com/image/apps.16029.14622517353732960.576abfa8-e499-4dbe-adc4-750c6ba65c7f.72a18063-f8b6-41b6-a6ca-8d549bd33d53?mode=scale&q=90&h=200&w=200&background=%23FFFFFF" class="game-img">
	 <h2>Vex 4</h2>
 <h3>Platformer</h3>
		</div>
		</button>
</li>
	
	<li id="draw the hill" class="game"><button onclick="play('draw-the-hill')">
	<div class="container" style="color:white; display: inline-block;">
<img src="https://assets.codepen.io/2104921/dth.png" class="game-img">
	 <h2>Draw the Hill</h2>
 <h3>Arcade</h3>
		</div>
		</button>
</li>
	
	<li id="death run 3d" class="game"><button onclick="play('death-run-3d')">
	<div class="container" style="color:white; display: inline-block;">
<img src="https://lh3.googleusercontent.com/2CaFy0wR5FxDRggPWEM8Esywg7mcwCgXmY57mg9DP97-RcF9Qb0vNmr2Bf3mqKDBwFEalY4iGU1tmOr4v_OaWkYEQzU4bCpbFyMYUF2vLYO4FfC1GEjbSszDfnnf81AnGDZPmHHo" class="game-img">
	 <h2>Death Run 3d</h2>
 <h3>Misc</h3>
		</div>
		</button>
</li>
	
	<li id="cut the rope" class="game"><button onclick="play('ctr')">
	<div class="container" style="color:white; display: inline-block;">
<img src="https://coolwebsiteorsure.netlify.app/projects/ctr/logo.png" class="game-img">
	 <h2>Cut the Rope</h2>
 <h3>Puzzle</h3>
		</div>
		</button>
</li>
	
	<li id="cut the rope holiday" class="game"><button onclick="play('ctr-holiday')">
	<div class="container" style="color:white; display: inline-block;">
<img src="https://coolwebsiteorsure.netlify.app/projects/ctr-holiday/Holiday_Gift.webp" class="game-img">
	 <h2>CTR Holiday</h2>
 <h3>Puzzle</h3>
		</div>
		</button>
</li>
	
	<li id="cut the rope time travel" class="game"><button onclick="play('ctr-tr')">
	<div class="container" style="color:white; display: inline-block;">
<img src="https://coolwebsiteorsure.netlify.app/projects/ctr-tr/logo.png" class="game-img">
	 <h2>CTR Time Travel</h2>
 <h3>Puzzle</h3>
		</div>
		</button>
</li>
	
	<li id="cannon basketball 4" class="game"><button onclick="play('cannon-basketball-4')">
	<div class="container" style="color:white; display: inline-block;">
<img src="https://4ts097296.netlify.app/projects/cannon-basketball-4/img/splash.png" class="game-img">
	 <h2>Cannon Basketball</h2>
 <h3>Sports / Puzzle</h3>
		</div>
		</button>
</li>
	
	<li id="bloxors" class="game"><button onclick="play('bloxors')">
	<div class="container" style="color:white; display: inline-block;">
<img src="https://4ts097296.netlify.app/projects/bloxors/block.png" class="game-img">
	 <h2>Bloxors</h2>
 <h3>Puzzle</h3>
		</div>
		</button>
</li>
	
	<li id="stack" class="game"><button onclick="play('stack')">
	<div class="container" style="color:white; display: inline-block;">
<img src="https://play-lh.googleusercontent.com/WRlGQXa9Pav7YZPW-P5X8PAga0lF2T1BAzmasxB9qV_1_om5DgmMbxOFo2SK8ZN5K5k" class="game-img">
	 <h2>Stack</h2>
 <h3>Arcade</h3>
		</div>
		</button>
</li>
	
	<li id="binding of issac isaac" class="game"><button onclick="play('bindingofissac')">
	<div class="container" style="color:white; display: inline-block;">
<img src="https://assets-prd.ignimgs.com/2021/12/21/bindingofisaac-1640047506280.jpg?width=300&crop=1%3A1%2Csmart" class="game-img">
	 <h2>Binding of Isaac</h2>
 <h3>Rougelike</h3>
		</div>
		</button>
</li>
	
	<li id="basket bros basketball" class="game"><button onclick="play('basketbros')">
	<div class="container" style="color:white; display: inline-block;">
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmVBWWs5bLUMrteI34FcfTW49WHUGhw6cAg8XTWqLd5s215CD0JqolH89iTRhjJnMK-bY:https://www.basketballlegends.club/upload/images-big/basketbros.jpg&usqp=CAU" class="game-img">
	 <h2>Basketbros.io</h2>
 <h3>Sports</h3>
		</div>
		</button>
</li>
	
	<li id="basketball stars" class="game"><button onclick="play('basketball-stars')">
	<div class="container" style="color:white; display: inline-block;">
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx126jEipbBonERmwE2BPfs-acTkTSTNrU2rYQdH68aN6issftoWN3c0AH7tFyAtlU5P8:https://aking.io/wp-content/uploads/2021/03/basketball-stars-1.png&usqp=CAU" class="game-img">
	 <h2>Basketball Stars</h2>
 <h3>Sports</h3>
		</div>
		</button>
</li>
	
	<li id="appel" class="game"><button onclick="play('appel')">
	<div class="container" style="color:white; display: inline-block;">
<img src="https://assets.codepen.io/2104921/appel.png" class="game-img">
	 <h2>Appel</h2>
 <h3>Platformer</h3>
		</div>
		</button>
</li>
	
	<li id="2048" class="game"><button onclick="play('2048')">
	<div class="container" style="color:white; display: inline-block;">
<img src="http://gabrielecirulli.github.io/2048/meta/og_image.png" class="game-img">
	 <h2>2048</h2>
 <h3>Puzzle / Math</h3>
		</div>
		</button>
</li>
	
	<li id="pokemon sapphire" class="game"><button onclick="play('pokemon-s')">
	<div class="container" style="color:white; display: inline-block;">
<img src="https://m.media-amazon.com/images/I/61RDD36KWPL.jpg" class="game-img">
	 <h2>Pokemon Sapphire</h2>
 <h3>Adventure</h3>
		</div>
		</button>
</li>
	
	<li id="pokemon emerald" class="game"><button onclick="play('pokemon-e')">
	<div class="container" style="color:white; display: inline-block;">
<img src="https://assets-prd.ignimgs.com/2022/02/08/pokemonemerald-sq-1644346782465.jpg?width=300&crop=1%3A1%2Csmart" class="game-img">
	 <h2>Pokemon Emerald</h2>
 <h3>Adventure</h3>
		</div>
		</button>
</li>
	
	<li id="99 balls 99balls" class="game"><button onclick="play('99balls')">
	<div class="container" style="color:white; display: inline-block;">
<img src="https://ik.imagekit.io/sjyfpsp1n/portal/html5games/images/tmp/99BallsTeaser.jpg" class="game-img">
	 <h2>99balls</h2>
 <h3>Puzzle / Arcade</h3>
		</div>
		</button>
</li>
	
	<li id="1v1.lol" class="game"><button onclick="play('1v1lol')">
	<div class="container" style="color:white; display: inline-block;">
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmn5P9dwwjznGj_zycSk-g6RP3Hj_4bXyJdpzw_cSdL4QtZi3TTidM3ERIwEC_TrdP_rE:https://img.utdstc.com/icon/660/8a5/6608a5864ddc359596747a4d2d5167ee26e1d052156bafbc84605cbb4574b5e4:200&usqp=CAU" class="game-img">
	 <h2>1v1.lol</h2>
 <h3>Shooter</h3>
		</div>
		</button>
</li>
	
	
</ol>
</div>
</span>



<!--FOOTER-->
<hr>
<h4>©Copyright 2021-2022 Bob's Game Shack<br>Contact: bob@bobs-shack.xyz</h4>
<a href="#"onclick="dmt()"><h5>Developer mode</h5></a>
`;

//JAVASCRIPT P2
function play(game,gameName){
	localStorage.setItem("currentGame",game)
	loadpage("gamepage")
}
setInterval(function() {
	var col = document.getElementById("title")
	var ban = document.getElementById("updatebanner")
	ban.style["background-color"] = col.style.color
	}, 10);
function setTheme() {
	var sel = document.getElementById("themeSelect")
	var theme
	if (sel === null) {
		if (localStorage.getItem('theme')===null) {localStorage.setItem('theme', "Classic");}
		theme = localStorage.getItem('theme')
	} else {theme = document.getElementById("themeSelect").value}
 
 if (theme==="Classic") {
   document.getElementById("title").style.color="#fc033d";
	 	document.getElementById("title2").style.color="#fc033d";
 }
 if (theme==="Gold") {
   document.getElementById("title").style.color="#ffbb00";
		document.getElementById("title2").style.color="#ffbb00";
 }
 if (theme==="Blue") {
   document.getElementById("title").style.color="#0073ff";
		document.getElementById("title2").style.color="#0073ff";
 }
 if (theme==="Green") {
   document.getElementById("title").style.color="#0be600";
		document.getElementById("title2").style.color="#0be600";
 }
}
window.addEventListener("load",function(){
	var themeSelect = document.getElementById("themeSelect")
 if (localStorage.getItem('theme')===null) {localStorage.setItem('theme', "Classic");}
 var ddl = document.getElementById('themeSelect');
	if (ddl == null) {} else	{
var opts = ddl.options.length;
for (var i=0; i<opts; i++){
    if (ddl.options[i].value == localStorage.getItem('theme')){
        ddl.options[i].selected = true;
        break;
    }
} }
})
window.onload = (event) => {	
 setTheme()
		var themeSelect = document.getElementById("themeSelect")
		if (themeSelect != null) {
		themeSelect.addEventListener("change",function(event){
	if (localStorage.getItem('theme')===null) {localStorage.setItem('theme', "Classic");}
 localStorage.setItem('theme', event.target.value);
 setTheme()
}
)}
};
document.onkeydown = function(e) {
  if(event.keyCode == 123) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
     return false;
  }
}
document.addEventListener('contextmenu', event => {if (dem==false){event.preventDefault()}}
);
var threshold = 160;
var devtools = {
open: false,
orientation: null
};
setInterval(function(){
		var widthThreshold = window.outerWidth - window.innerWidth > threshold;
		var heightThreshold = window.outerHeight - window.innerHeight > threshold;
		var orientation = widthThreshold ? 'vertical' : 'horizontal';
if (!(heightThreshold && widthThreshold) &&
      ((window.Firebug && window.Firebug.chrome && window.Firebug.chrome.isInitialized) || widthThreshold || heightThreshold)) {
if (!devtools.open || devtools.orientation !== orientation) {
	if (dem==false){
		window.open("about:blank","_self")
	}
}
} else {}
}, 100);
if (typeof module !== 'undefined' && module.exports) {
module.exports = devtools;
} else {
window.devtools = devtools;
}
