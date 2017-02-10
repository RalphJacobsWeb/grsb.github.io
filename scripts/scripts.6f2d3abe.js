"use strict";function ContactCtrl(a,b,c,d){a.submit=function(e){if(a.submitted=!0,!e.$invalid){var f={params:{callback:"JSON_CALLBACK",name:a.name,email:a.email,subjectList:a.subjectList,url:a.url,comments:a.comments}},g=b.jsonp("response.json",f).success(function(b,d,e,f){"OK"===b.status?(a.name=null,a.email=null,a.subjectList=null,a.url=null,a.comments=null,a.messages="Your form has been sent!",a.submitted=!1):(a.messages="Oops, we received your request, but there was an error processing it.",c.error(b))}).error(function(b,d,e,f){a.progress=b,a.messages="There was a network error. Try again later.",c.error(b)})["finally"](function(){d(function(){a.messages=null},3e3)});a.progress.addPromise(g)}}}angular.module("ralphApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/home.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).when("/contact",{templateUrl:"views/contactUs.html",controller:"ContactCtrl",controllerAs:"contact"}).when("/songs",{templateUrl:"views/songs.html",controller:"AboutCtrl",controllerAs:"about"}).when("/comments",{templateUrl:"views/comments.html",controller:"AboutCtrl",controllerAs:"about"}).otherwise({redirectTo:"/"})}]),angular.module("ralphApp").controller("MainCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("ralphApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("ralphApp").controller("ContactCtrl",["$scope","$http","$log","$timeout",ContactCtrl]),angular.module("ralphApp").run(["$templateCache",function(a){a.put("views/about.html",'<div class="container" id="artists"> <!-- About Section --> <div class="container" id="about"> <h3 class="w3-border-bottom w3-border-light-grey w3-padding-12">Artists</h3> <p>George has many fine talent which still needs to be unlocked and many that have established themselfs in the music industry but is yet to do big things. This is a call out on all artist to join the network and explore your talent even further. Good music is made, but better music is yet to come. Lets strive in helping each other grow and support all upcoming talent to the best of our abilities... </p> </div> <!--<div >--> <!--<div>--> <!--<img src="images/major4.8f4c85fb.jpg" alt="MajorWipz" style="width:40%" hspace="20">--> <!--<h3>Major Wipz</h3>--> <!--<p class="opacity">CEO & Founder & Artist</p>--> <!--&lt;!&ndash;<p>This man is the main atraction. From Dj to Photography to making good music.</p>&ndash;&gt;--> <!--&lt;!&ndash;<p><button class="w3-btn-block">Contact</button></p>&ndash;&gt;--> <!--</div>--> <!--<div>--> <!--<img src="images/smash7.852889d6.jpg" alt="IAmSmash" style="width:30%" >--> <!--<h3>IAmSmash</h3>--> <!--<p>Artist</p>--> <!--&lt;!&ndash;<p>The artist of the year with hit singles.</p>&ndash;&gt;--> <!--&lt;!&ndash;<p><button class="w3-btn-block">Contact</button></p>&ndash;&gt;--> <!--</div>--> <!--<div class="col-sm-8">--> <!--<img src="images/kae3.1709d20d.jpg" alt="KaedeHeyns" style="width:40%">--> <!--<h3>Kaede Heyns</h3>--> <!--<p>Artist</p>--> <!--&lt;!&ndash;<p>The lady with the sweet voice that always makes you want more.</p>&ndash;&gt;--> <!--&lt;!&ndash;<p><button class="w3-btn-block">Contact</button></p>&ndash;&gt;--> <!--</div>--> <!--<div class="col-sm-4">--> <!--<img src="images/gedagte1.jpg" alt="Gedagte" style="width:100%">--> <!--<h3>Gedagte</h3>--> <!--<p>Artist</p>--> <!--&lt;!&ndash;<p>The artist of the year with hit singles.</p>&ndash;&gt;--> <!--&lt;!&ndash;<p><button class="w3-btn-block">Contact</button></p>&ndash;&gt;--> <!--</div>--> <!--</div>--> <div class="container"> <div class="row"> <div class="col-md-6"> <div class="thumbnail"> <a href="/images/lights.jpg" target="_blank"> <img src="images/major4.8f4c85fb.jpg" alt="Lights" style="width:100%"> <div class="caption"> <h3>Major Wipz</h3> <p class="opacity">CEO & Founder & Artist</p> </div> </a> </div> </div> <div class="col-md-6"> <div class="thumbnail"> <a href="/w3images/nature.jpg" target="_blank"> <img src="images/smash7.852889d6.jpg" alt="Nature" style="width:100%"> <div class="caption"> <h3>IAmSmash</h3> <p>Artist</p> </div> </a> </div> </div> </div> <div class="row"> <div class="col-md-6"> <div class="thumbnail"> <a href="/w3images/fjords.jpg" target="_blank"> <img src="images/kae3.1709d20d.jpg" alt="Fjords" style="width:100%"> <div class="caption"> <h3>Kaede Heyns</h3> <p>Artist</p> </div> </a> </div> </div> <div class="col-md-6"> <div class="thumbnail"> <a href="/w3images/fjords.jpg" target="_blank"> <img src="images/killa2.d39509a5.jpg" alt="Fjords" style="width:100%"> <div class="caption"> <h3>Lil Killa</h3> <p>Artist</p> </div> </a> </div> </div> </div> </div> </div>'),a.put("views/comments.html",'<!--<div class="container-fluid" id="contact">--><!--&lt;!&ndash; Contact Section &ndash;&gt;--><!--<h2>Contact Us</h2>--><!--<form id="contact_form" action="#" method="POST" enctype="multipart/form-data">--><!--<div class="row">--><!--<label for="name">Your name:</label><br />--><!--<input id="name" class="input" name="name" type="text" value="" size="30" /><br />--><!--</div>--><!--<div class="row">--><!--<label for="email">Your email:</label><br />--><!--<input id="email" class="input" name="email" type="text" value="" size="30" /><br />--><!--</div>--><!--<div class="row">--><!--<label for="message">Your message:</label><br />--><!--<textarea id="message" class="input" name="message" rows="7" cols="30"></textarea><br />--><!--</div>--><!--<input id="submit_button" type="submit" value="Send email" />--><!--</form>--><!--&lt;!&ndash; End page content &ndash;&gt;--><!--</div>--> <div class="container" id="comments"> <h2>Post Comments here!</h2><h6>(Refresh page if not loading)</h6></div> <div class="container-fluid fb-comments col-md-3" data-href="https://ralphjacobsweb.github.io/GSB.github.io" data-width="50px" data-numposts="10" style="background-color: #cccccc; background-position: left bottom"></div> <div id="fb-root"></div> <script>(function(d, s, id) {\n  var js, fjs = d.getElementsByTagName(s)[0];\n  if (d.getElementById(id)) return;\n  js = d.createElement(s); js.id = id;\n  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.8";\n  fjs.parentNode.insertBefore(js, fjs);\n'+"}(document, 'script', 'facebook-jssdk'));</script>"),a.put("views/contactUs.html",'<div class="container-fluid jumbotron" id="gallery" style="width:70%"> <h2>Gallery</h2> <div class="content" id="pics"> <img class="mySlides" src="images/mtv.bb71d1fb.png" style="width:75%"> <img class="mySlides" src="images/major1.afefd7a0.jpg" style="width:100%"> <img class="mySlides" src="images/smash1.e7d10759.jpeg" style="width:100%"> <img class="mySlides" src="images/kae1.45b09609.jpg" style="width:100%"> <img class="mySlides" src="images/killa1.6336ba47.jpg" style="width:100%"> <img class="mySlides" src="images/m.d04281a4.png" style="width:100%"> <img class="mySlides" src="images/major2.f4bf08de.jpg" style="width:100%"> <img class="mySlides" src="images/smash2.5b91702c.jpeg" style="width:100%"> <img class="mySlides" src="images/kae2.2793b437.jpg" style="width:100%"> <img class="mySlides" src="images/killa2.d39509a5.jpg" style="width:100%"> <img class="mySlides" src="images/major3.28be588e.jpg" style="width:100%"> <img class="mySlides" src="images/smash3.f8f8d45e.jpeg" style="width:100%"> <img class="mySlides" src="images/kae3.1709d20d.jpg" style="width:100%"> <img class="mySlides" src="images/killa3.ba6fab08.jpg" style="width:100%"> <img class="mySlides" src="images/major4.8f4c85fb.jpg" style="width:100%"> <img class="mySlides" src="images/smash4.a29ab11e.jpeg" style="width:100%"> <img class="mySlides" src="images/kae4.9fab4b8b.jpg" style="width:100%"> <img class="mySlides" src="images/majorkae1.d9d6844d.jpg" style="width:100%"> <img class="mySlides" src="images/smash5.b5ee078f.jpg" style="width:100%"> <img class="mySlides" src="images/kae5.2c8d176e.jpg" style="width:100%"> <div class="container-fluid col-sm-8" align="center"> <div class="w3-section"> <button class="w3-btn glyphicon glyphicon-chevron-left" onclick="plusDivs(-1)">Previous</button> <button class="w3-btn glyphicon glyphicon-chevron-right" onclick="plusDivs(1)">Next</button> </div> </div> </div> <script>var slideIndex = 1;\nshowDivs(slideIndex);\n\nfunction plusDivs(n) {\n  showDivs(slideIndex += n);\n}\n\nfunction showDivs(n) {\n  var i;\n  var x = document.getElementsByClassName("mySlides");\n  if (n > x.length) {slideIndex = 1}\n  if (n < 1) {slideIndex = x.length}\n  for (i = 0; i < x.length; i++) {\n     x[i].style.display = "none";\n  }\n  x[slideIndex-1].style.display = "block";\n}</script> </div>'),a.put("views/gallery.html",'<div class="container-fluid" id="gallery" style="width:70%"> <div class="content" id="pics"> <img class="mySlides" src="images/mtv.bb71d1fb.png" style="width:75%"> <img class="mySlides" src="images/major1.afefd7a0.jpg" style="width:100%"> <img class="mySlides" src="images/smash1.e7d10759.jpeg" style="width:100%"> <img class="mySlides" src="images/kae1.45b09609.jpg" style="width:100%"> <img class="mySlides" src="images/gedagte1.jpg" style="width:100%"> <img class="mySlides" src="images/m.d04281a4.png" style="width:100%"> <img class="mySlides" src="images/major2.f4bf08de.jpg" style="width:100%"> <img class="mySlides" src="images/smash2.5b91702c.jpeg" style="width:100%"> <img class="mySlides" src="images/kae2.2793b437.jpg" style="width:100%"> <img class="mySlides" src="images/gedagte2.jpg" style="width:100%"> <img class="mySlides" src="images/major3.28be588e.jpg" style="width:100%"> <img class="mySlides" src="images/smash3.f8f8d45e.jpeg" style="width:100%"> <img class="mySlides" src="images/kae3.1709d20d.jpg" style="width:100%"> <img class="mySlides" src="images/major4.8f4c85fb.jpg" style="width:100%"> <img class="mySlides" src="images/smash4.a29ab11e.jpeg" style="width:100%"> <img class="mySlides" src="images/kae4.9fab4b8b.jpg" style="width:100%"> <img class="mySlides" src="images/majorkae1.d9d6844d.jpg" style="width:100%"> <img class="mySlides" src="images/smash5.b5ee078f.jpg" style="width:100%"> <img class="mySlides" src="images/kae5.2c8d176e.jpg" style="width:100%"> <div class="container-fluid col-sm-8" align="center"> <div class="w3-section"> <button class="w3-btn glyphicon glyphicon-chevron-left" onclick="plusDivs(-1)">Previous</button> <button class="w3-btn glyphicon glyphicon-chevron-right" onclick="plusDivs(1)">Next</button> </div> </div> </div> <script>var slideIndex = 1;\nshowDivs(slideIndex);\n\nfunction plusDivs(n) {\n  showDivs(slideIndex += n);\n}\n\nfunction showDivs(n) {\n  var i;\n  var x = document.getElementsByClassName("mySlides");\n  if (n > x.length) {slideIndex = 1}\n  if (n < 1) {slideIndex = x.length}\n  for (i = 0; i < x.length; i++) {\n     x[i].style.display = "none";\n  }\n  x[slideIndex-1].style.display = "block";\n}</script> </div>'),a.put("views/home.html",'<div class="img" id="home"> <img src="images/grsb1.f736ba58.png" alt=" G E O R G E SOUND BLAST " width="80%" align="middle"> </div>'),a.put("views/songs.html",'<div class="container" id="songs"> <head> <meta name="viewport" content="width=device-width,initial-scale=1"> <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"> <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script> <link href="https://afeld.github.io/emoji-css/emoji.css" rel="stylesheet"> <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script> </head> <body> <h2>Released Songs</h2> <p>Download or Listen to songs from artists</p> <pre>Please note!\n    Post a comment before you can download <i class="em em-blush"></i></pre> <div class="container col-sm-5" style="padding:20px"> <div class="dropdown"> <button class="btn btn-default btn-group btn-group-justified dropdown-toggle" type="button" id="menu1" data-toggle="dropdown">Major Wipz <span class="caret"></span><span class="glyphicon glyphicon-download"></span></button> <ul class="dropdown-menu dropdown-content" role="menu" aria-labelledby="menu1"> <li role="presentation"><a role="menuitem" tabindex="-1" href="https://drive.google.com/uc?export=download&id=0B_dhF7eqA3s9TmY4d2JJMUhuVjg">White Noise</a></li> <li role="presentation"><a role="menuitem" tabindex="-1" href="https://drive.google.com/uc?export=download&id=0B_dhF7eqA3s9aERIenBsUmM2Mjg">MajestiMix</a></li> <li role="presentation"><a role="menuitem" tabindex="-1" href="https://drive.google.com/uc?export=download&id=0B_dhF7eqA3s9a1FOVmd0UkhaR1U">DeepSax</a></li> <li role="presentation"><a role="menuitem" tabindex="-1" href="https://drive.google.com/uc?export=download&id=0B_dhF7eqA3s9dGtsMjJpbjA0V1k">Jackin House Mix 2K16</a></li> <li role="presentation"><a role="menuitem" tabindex="-1" href="https://drive.google.com/uc?export=download&id=0B_dhF7eqA3s9U1AwQl83aU4xbDg">January Majestimix 2k17</a></li> <li role="presentation"><a role="menuitem" tabindex="-1" href="https://drive.google.com/uc?export=download&id=0B_dhF7eqA3s9QnVDRlJpMWtreUE">Milla Falls-Oh my</a></li> <li role="presentation"><a role="menuitem" tabindex="-1" href="https://drive.google.com/uc?export=download&id=0B_dhF7eqA3s9anJrT1A0Yl82b0E">Kinda Perfect ft YSK</a></li> <li role="presentation"><a role="menuitem" tabindex="-1" href="https://drive.google.com/uc?export=download&id=0B_dhF7eqA3s9TDdBdlVUUW5NZ0U">Omi-Cheerleader</a></li> <li role="presentation"><a role="menuitem" tabindex="-1" href="https://drive.google.com/uc?export=download&id=0B_dhF7eqA3s9MGZacUMzZVQzRHc">Ms EdenFM LivePromoMix</a></li> <li role="presentation"><a role="menuitem" tabindex="-1" href="https://drive.google.com/uc?export=download&id=0B_dhF7eqA3s9YVdOb2Z0aElJTEU">Brady-baby</a></li> <li role="presentation"><a role="menuitem" tabindex="-1" href="https://drive.google.com/uc?export=download&id=0B_dhF7eqA3s9SkdUVDNNZmJyeWc" download>Festive Experience2</a></li> </ul> </div> <div> <iframe width="250" height="250" src="//www.cincopa.com/media-platform/iframe.aspx?fid=AgKAV49AQsd0" frameborder="0" allowfullscreen scrolling="no"></iframe> <noscript><span>Major Wipz</span></noscript> </div> </div> <div class="container col-sm-6" style="padding:20px"> <div class="dropdown"> <button class="btn btn-default btn-group btn-group-justified dropdown-toggle" type="button" id="menu2" data-toggle="dropdown">IAmSmash <span class="caret"></span><span class="glyphicon glyphicon-download"></span></button> <ul class="dropdown-menu dropdown-content" role="menu" aria-labelledby="menu2"> <li role="presentation"><a role="menuitem" tabindex="-1" href="https://drive.google.com/uc?export=download&id=0B_dhF7eqA3s9Sjh1QXU3UU1nV2c">1Hunnid</a></li> <li role="presentation"><a role="menuitem" tabindex="-1" href="https://drive.google.com/uc?export=download&id=0B_dhF7eqA3s9dldhRjkxWkpDZ3c">Waves</a></li> <li role="presentation"><a role="menuitem" tabindex="-1" href="https://drive.google.com/uc?export=download&id=0B_dhF7eqA3s9S1JCOGVtU2FIUk0">Feelin\'You</a></li> <li role="presentation"><a role="menuitem" tabindex="-1" href="https://drive.google.com/uc=export=download&?id=0B_dhF7eqA3s9T2pPU0xlbF9JUzA">Tsunami</a></li> <li role="presentation"><a role="menuitem" tabindex="-1" href="https://drive.google.com/uc?export=download&id=0B_dhF7eqA3s9NzZJVjJ4Tm9pdUE">West-Side</a></li> <li role="presentation"><a role="menuitem" tabindex="-1" href="https://drive.google.com/uc?export=download&id=0B_dhF7eqA3s9Z1Zuam1yWjFIbmM">Look at Em</a></li> </ul> </div> <div> <iframe width="250" height="250" src="//www.cincopa.com/media-platform/iframe.aspx?fid=AIPAh5tlQIx3" frameborder="0" allowfullscreen scrolling="no"></iframe> <noscript><span>IAmSmash</span></noscript> </div> </div> <div class="container col-sm-5" style="padding:20px"> <div class="dropdown"> <button class="btn btn-default btn-group btn-group-justified dropdown-toggle" type="button" id="menu3" data-toggle="dropdown">Kaede Heyns <span class="caret"></span><span class="glyphicon glyphicon-download"></span></button> <ul class="dropdown-menu dropdown-content" role="menu" aria-labelledby="menu3"> <li role="presentation"><a role="menuitem" tabindex="-1" href="https://drive.google.com/uc?export=download&id=0B_dhF7eqA3s9bVo5WVItUXBaNXM">Letting Go</a></li> <li role="presentation"><a role="menuitem" tabindex="-1" href="https://drive.google.com/uc??export=download&id=0B_dhF7eqA3s9TDF2czlwUFRvLUk">No Rebound</a></li> <li role="presentation"><a role="menuitem" tabindex="-1" href="https://drive.google.com/uc?export=download&id=0B_dhF7eqA3s9QWJxV2Y4SnVrbEE">Take me away</a></li> </ul> </div> <div> <iframe width="250" height="250" src="//www.cincopa.com/media-platform/iframe.aspx?fid=AYBAg7dpQcb3" frameborder="0" allowfullscreen scrolling="no"></iframe> <noscript><span>Kaede Heyns</span></noscript> </div> </div> <div class="container col-sm-5" style="padding:20px"> <div class="dropdown"> <button class="btn btn-default btn-group btn-group-justified dropdown-toggle" type="button" id="menu4" data-toggle="dropdown">Lil Killa <span class="caret"></span><span class="glyphicon glyphicon-download"></span></button> <ul class="dropdown-menu dropdown-content" role="menu" aria-labelledby="menu4"> <li role="presentation"><a role="menuitem" tabindex="-1" href="https://drive.google.com/uc?export=download&id=0B_dhF7eqA3s9QUl1VGU4YVpadjQ">And I Freestyle</a></li> <li role="presentation"><a role="menuitem" tabindex="-1" href="https://drive.google.com/uc?export=download&id=0B_dhF7eqA3s9alJtQVBjQ1ZPRGs">Backstabber</a></li> <li role="presentation"><a role="menuitem" tabindex="-1" href="https://drive.google.com/uc?export=download&id=0B_dhF7eqA3s9U1RramtCNGhVUXM">Bad Dreams</a></li> <li role="presentation"><a role="menuitem" tabindex="-1" href="https://drive.google.com/uc?export=download&id=0B_dhF7eqA3s9VXd6cS1uNkM5Z0k">Can I Murder You</a></li> <li role="presentation"><a role="menuitem" tabindex="-1" href="https://drive.google.com/uc?export=download&id=0B_dhF7eqA3s9ZmpxLXhnMXR1ZmM">Cookie Jar</a></li> <li role="presentation"><a role="menuitem" tabindex="-1" href="https://drive.google.com/uc?export=download&id=0B_dhF7eqA3s9TGR5XzlJRmpZLVk">Dont Back Down</a></li> <li role="presentation"><a role="menuitem" tabindex="-1" href="https://drive.google.com/uc?export=download&id=0B_dhF7eqA3s9Q2RzdW51ek9Sdm8">Dont Get Jealous</a></li> <li role="presentation"><a role="menuitem" tabindex="-1" href="https://drive.google.com/uc?export=download&id=0B_dhF7eqA3s9REczZklCd3hIczQ">Dont Give A Fuck</a></li> <li role="presentation"><a role="menuitem" tabindex="-1" href="https://drive.google.com/uc?export=download&id=0B_dhF7eqA3s9TWN1eXprZ3hiVGc">Faded</a></li> <li role="presentation"><a role="menuitem" tabindex="-1" href="https://drive.google.com/uc?export=download&id=0B_dhF7eqA3s9RkVFRzQyNllDc3c">First Dance</a></li> <li role="presentation"><a role="menuitem" tabindex="-1" href="https://drive.google.com/uc?export=download&id=0B_dhF7eqA3s9ZExOeXBNd3NSN2c">Freeflow</a></li> <li role="presentation"><a role="menuitem" tabindex="-1" href="https://drive.google.com/uc?export=download&id=0B_dhF7eqA3s9dG5FN2l0cHhBSWs">Friend or Foe</a></li> <li role="presentation"><a role="menuitem" tabindex="-1" href="https://drive.google.com/uc?export=download&id=0B_dhF7eqA3s9S3prZ1psSnFhejQ">Hey Dad Tribute</a></li> <li role="presentation"><a role="menuitem" tabindex="-1" href="https://drive.google.com/uc?export=download&id=0B_dhF7eqA3s9M0dKWldVREREa2c">Hip Hop\'s Dying</a></li> <li role="presentation"><a role="menuitem" tabindex="-1" href="https://drive.google.com/uc?export=download&id=0B_dhF7eqA3s9Q0NYSEZqTHQxbTA">I Fear</a></li> <li role="presentation"><a role="menuitem" tabindex="-1" href="https://drive.google.com/uc?export=download&id=0B_dhF7eqA3s9VmdhWW5uczMteUE">Im Not Your Scapecoat</a></li> <li role="presentation"><a role="menuitem" tabindex="-1" href="https://drive.google.com/uc?export=download&id=0B_dhF7eqA3s9dG15VUI2Mk1zdjQ">I Think I Love You</a></li> <li role="presentation"><a role="menuitem" tabindex="-1" href="https://drive.google.com/uc?export=download&id=0B_dhF7eqA3s9MFhFMTZiOEhJUDg">Insanity</a></li> <li role="presentation"><a role="menuitem" tabindex="-1" href="https://drive.google.com/uc?export=download&id=0B_dhF7eqA3s9cklCcmlQTlRxUTQ">Just Blazing</a></li> <li role="presentation"><a role="menuitem" tabindex="-1" href="https://drive.google.com/uc?export=download&id=0B_dhF7eqA3s9eVk2bnR6YVJtRkU">Live Forever</a></li> <li role="presentation"><a role="menuitem" tabindex="-1" href="https://drive.google.com/uc?export=download&id=0B_dhF7eqA3s9M2xSX0VYT2cyUGc">Making Girls Say</a></li> <li role="presentation"><a role="menuitem" tabindex="-1" href="https://drive.google.com/uc?export=download&id=0B_dhF7eqA3s9RHFHczhsWnhNdW8">Regrets</a></li> <li role="presentation"><a role="menuitem" tabindex="-1" href="https://drive.google.com/uc?export=download&id=0B_dhF7eqA3s9RWx2ZkpWbUVuTFE">The Anger</a></li> <li role="presentation"><a role="menuitem" tabindex="-1" href="https://drive.google.com/uc?export=download&id=0B_dhF7eqA3s9ZXBlOEhQaDFKNzA">The Club</a></li> <li role="presentation"><a role="menuitem" tabindex="-1" href="https://drive.google.com/uc?export=download&id=0B_dhF7eqA3s9dUl5empoWTA4bUU">The Fury</a></li> <li role="presentation"><a role="menuitem" tabindex="-1" href="https://drive.google.com/uc?export=download&id=0B_dhF7eqA3s9M3JYNVdyVDFXdDA">The Same Bitch</a></li> <li role="presentation"><a role="menuitem" tabindex="-1" href="https://drive.google.com/uc?export=download&id=0B_dhF7eqA3s9V0RGdm5NclREWkE">Venom</a></li> <li role="presentation"><a role="menuitem" tabindex="-1" href="https://drive.google.com/ouc?export=download&id=0B_dhF7eqA3s9NzctaDNmSGtZNjA">Wanna Be</a></li> <li role="presentation"><a role="menuitem" tabindex="-1" href="https://drive.google.com/uc?export=download&id=0B_dhF7eqA3s9NG9aRXBDbHp1blE">We Run This Town</a></li> <li role="presentation"><a role="menuitem" tabindex="-1" href="https://drive.google.com/uc?export=download&id=0B_dhF7eqA3s9djg3OHl5WHFLc2c">What If</a></li> <li role="presentation"><a role="menuitem" tabindex="-1" href="https://drive.google.com/uc?export=download&id=0B_dhF7eqA3s9VzdqcFdHU2NuQ28">Who Says</a></li> <li role="presentation"><a role="menuitem" tabindex="-1" href="https://drive.google.com/uc?export=download&id=0B_dhF7eqA3s9NndqMWJZU0V4LWM">You or Her</a></li> </ul> </div> <div> <iframe width="250" height="250" src="//www.cincopa.com/media-platform/iframe.aspx?fid=AMBAi5toZ0VG" frameborder="0" allowfullscreen scrolling="no"></iframe> <noscript><span>Killa</span></noscript> </div> </div> </body> </div>')}]);