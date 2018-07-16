$(function(){
  var svgContainer1 = $("#svgContainer1");
  var svgUrl1       = "../imagenes/portada-1.svg";


  $.get(svgUrl1)
  .then(injectSvg)
  .always(startAnimation)

  function injectSvg(xmlDoc) {
    var svg1 = $(xmlDoc).find("svg");
    svgContainer1.append(svg1);
  }
  function startAnimation() {    
    TweenMax.fromTo('#gato', 1, {
      rotation: 1, 
      transformOrigin: "center",
      },{
      rotation: -1,
      delay: 1,
      repeat: -1,
      repeatDelay: 1,
      yoyo: true,
      immediateRender:false,
      transformOrigin: "center",
    });
    TweenMax.from("#gato", 4, { 
      x: 500, 
      repeat:0 ,
    });

    TweenMax.from("#gato", 3, { 
      delay: 5, 
      y: "+=13px", 
      yoyo:true, 
      repeat:-1, 
      ease: Power0.easeNone
    });

    TweenMax.from(".forma-1", 1.8, { 
      delay:0, 
      y: "+=13px", 
      yoyo:true, 
      repeat:-1, 
      ease: Power0.easeNone
    });
    TweenMax.from(".forma-2", 1.6, { 
      delay:0, 
      y: "-=10px",  
      yoyo:true, 
      repeat:-1, 
      ease: Power0.easeNone 
    });
      TweenMax.from(".forma-3", 35, { 
      rotation:360, 
      ease:Linear.easeNone, 
      repeat:-1, 
      transformOrigin:"center", 
    });
    TweenMax.from(".forma-3", 7, { 
      y: 40, 
      repeat:-1, 
      yoyo:true, 
    })
    TweenMax.from(".forma-4", 1.9, { 
      delay:0, 
      y: "-=10px",
      x: "-=6px" , 
      yoyo:true, 
      repeat:-1, 
      ease: Power0.easeNone 
    });
  }
});

$(function(){

  var svgContainer2 = $("#svgContainer2");
  var svgUrl2    = "../imagenes/portada-2.svg";
  
  $.get(svgUrl2)
  .then(injectSvg)


  function injectSvg(xmlDoc) {

    var svg2 = $(xmlDoc).find("svg");
    svgContainer2.append(svg2);
  }


});

	

