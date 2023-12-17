var typed = new Typed(".text", {
    strings:["Computer Engineer", "FrontEnd Developer", "Programmer", "Full-Stack Developer"],
    loop: true
});

let constrain = 20;
let mouseOverContainer = document.getElementsByClassName("home")[0];
let ex1Layer = document.getElementsByClassName("photo-sec")[0];

function transforms(x, y, el) {

  let box = el.getBoundingClientRect();
  let calcX = -(y - box.y - (box.height / 2)) / constrain;
  let calcY = (x - box.x - (box.width / 2)) / constrain;
  
  return "perspective(800px) " + " rotateX("+ calcX +"deg) " + " rotateY("+ calcY +"deg) ";

};

mouseOverContainer.onmousemove = function(e) {
    ex1Layer.style.transform = transforms(e.clientX > 500 ? e.clientX : 500, e.clientY, ex1Layer);
};

// $('.header a').html(window.innerWidth);

// Mobile Menu bar

function toggle_menu(){
    $('.header').toggleClass('menu-active');
}


// Active Navbar

$('.navbar a').each(function() {
    $(this).click(function() {
        $('.navbar a').removeClass("active");
        $(this).addClass("active");
    });
});

function active_navbar(act){
    $('.navbar a').removeClass("active");
    act.addClass("active");
}

// Scroll Event for navbar color change

const navbar = document.getElementsByClassName('header')[0];
window.onscroll = () => {
    if (window.scrollY > 20) {
        navbar.classList.add('header-active');
    } else {
        navbar.classList.remove('header-active');
    }
};

// document.querySelector(".header .logo").innerHTML = screen.width;

// Skills Section Animation

let prof_skills = document.querySelectorAll('.bar');

prof_skills.forEach((e) =>{
    percent = e.dataset.percent;

    e.querySelector('span').style.setProperty("--mes", percent + "%");
});

let tech_skills = document.querySelectorAll('.percent');



// Home Target

ScrollTrigger.create({
    trigger: "#home",
    start: "top top+=100",
    end: "bottom center-=100",
    toggleClass: {
        targets: [document.getElementById("home"), document.getElementById("home_nav")], 
        className: "active"
    },
});

// About Target

ScrollTrigger.create({
    trigger: "#about",
    start: "top center-=100",
    end: "bottom center",
    toggleClass: {
        targets: [document.getElementById("about"), document.getElementById("about_nav")], 
        className: "active"
    },
    
});


// Projects Target

ScrollTrigger.create({
    trigger: "#projects",
    start: "top bottom-=300",
    end: "bottom center",
    toggleClass: {
        targets: [document.getElementById("projects"), document.getElementById("projects_nav")], 
        className: "active"
    },
});

// Skills Target

ScrollTrigger.create({
    trigger: "#skills",
    start: "top center",
    end: "bottom center",
    toggleClass: {
      targets: [prof_skills, tech_skills, document.getElementById("skills"), document.getElementById("skills_nav")], 
      className: "active"
    },
    onEnter: () => tryt(),
    onEnterBack: () => tryt(),
    onLeave: () => tryt(true),
    onLeaveBack: () => tryt(true),
});

function tryt(leaving=false) {
    let tech = $('.number h2');
    let prof = $('.bar');

    tech.each(function() {
        var max = $(this).data('percent');
        leaving ? animate($(this), max, true) : animate($(this), max);
    });
    
    prof.each(function() {
        var max = $(this).data('percent');
        var element = $(this).children("span").children("label")
            leaving ? animate(element, max, true) : animate(element, max);
        });
}

function animate(element, maxval, reverse = false){

    var strt = 0;
    var end = maxval;
    if(reverse){
        strt = maxval;
        end = 0;
    }

    $({countNum: strt}).animate({
            countNum: end
        }, {
            duration: Math.abs(strt - end) * 20,
        step: function() {
            element.html(Math.floor(this.countNum) + "%");
        },
        complete: function() {
            element.html(this.countNum + "%");
        }
    });
}



// Contact Svg Animation

$(document).ready(function () {

    $(".svg-animate").load("Images/All-mail.svg");
    ScrollTrigger.create({  
        trigger: "#contact",
        start: "top center",
        end: "bottom center-=200px",
        toggleClass: {
            targets: [document.getElementById("contact"), document.getElementById("contact_nav")], 
            className: "active"
        },
        onEnter: () => contact(),
        onEnterBack: () => contact(),
        onLeave: () => contact_leave(),
        onLeaveBack: () => contact_leave(),
    });
});

function contact_leave() {
    var tl = gsap.timeline();
    tl.to(".contact-form", 0.5, {opacity: 0});
}


function contact() {
    var tl = gsap.timeline();

    tl.to(".svg-animate", 0, {display: "flex"});
    tl.fromTo(".svg-animate", 0.5, {y : 50, opacity: 0}, {y:0, opacity: 1});
    var t = Email_svg_animate();
    
    setTimeout(() => {
        t.revert();
        tl.fromTo(".svg-animate", 0.5, {y : 0, opacity: 1}, {y:50, opacity: 0});
        tl.to(".svg-animate", 0, {display: "none"});
        tl.to(".contact-form", 0.5, {opacity: 1});
    }, (t.duration()) * 1000);
}


function Email_svg_animate(){
    var timelinegsap = gsap.timeline({yoyo : true}) ;
    $('#Plane-path-mask').css("stroke-dasharray" , 210);
    
    timelinegsap
        .from("#Email-open" , 0.6, {x : -60 , skewX : 10 , opacity : 0})
        .to("#Email-open" , 0.2 , {ease : "ease.out" , transformOrigin : "50% 50%" ,rotation : 4})
        .to("#Email-open" , 0.1 , {y : -5 , ease : "ease.out"} , "-=0.1")
        .to("#Email-open" , 0.2 , {ease : "ease.out" , transformOrigin : "50% 50%" ,rotation : -4})
        .to("#Email-open" , 0.1 , {y : 0 , ease : "ease.out"} , "-=0.1")
        .to("#Email-open" , 0.4 , {ease : "ease.out" , transformOrigin : "50% 50%" ,rotation : 4})
        .to("#Email-open" , 0.2 , {y : -10 , ease : "ease.out"} , "-=0.2")
        .to("#Email-open" , 0.2 , {ease : "ease.out" , transformOrigin : "50% 50%" ,rotation : 0})
        .to("#Email-open" , 0.2 , {y : 0 , ease : "ease.out"} , "-=0.2")
        .from("#Email-Card" , 0.5 , {x : 30 , opacity : 0})
        .to("#Upper-lid-bf" , 0 , {display : "block"})
        .to("#Sparkles" , 0.3 , { ease : "power.out" , x : 0 , y : 0 ,opacity : 1} , "<")
        .fromTo(".bg-ball", 0.3, {opacity: 0}, {ease : "power.out", opacity: 1})
        .to("#Sparkles rect" , 0.3 , {ease : "power1.out" , width : 12} , "-=0.2")
        .to("#Letter" , 0.5 , { ease : "power4.out"  , y : -1 } , "-=0.2")
        .to("#Plane" , 1.5 ,{ease : "power1" ,motionPath : {path : "#Plane-path" , align : "#Plane-path" ,autoRotate : true + 140, alignOrigin : [0.5 , 0.75]}})
        .to("#Plane" , 0 , {display : "block"} , "<")
        .fromTo("#Plane-path-mask" , 1.5 ,{strokeDashoffset : 210},{strokeDashoffset : 0 ,ease : "power1"} , "<" );

        return timelinegsap;

}



function validate() {
    var name = $('#name');
    var email = $('#email');
    var phone = $('#phoneno');
    var desc = $('#desc');

    if(name.val() == ""){
        show_msg("Please Enter Your Name ");
        name.focus();
    }
    else if(email.val() == ''){
        show_msg("Please Enter Your E-Mail ");
        email.focus();
    }
    else if(phone.val() == ''){
        show_msg("Please Enter Your Phone Number ");
        phone.focus();
    }
    else if(desc.val() == ''){
        show_msg("Please Enter Your Message ");
        desc.focus();
    }
    else{
        emailjs.send("service_e5m3j1m","template_bpmfp5c",{
            from_name: name.val(),
            from_email: email.val(),
            from_mobile: phone.val(),
            message: desc.val(),
        }).then(function (res) {
            if(res == 200){
                show_msg("Thank You For Your Response.");
                name.clear();
            }
            else{
                show_msg("There is an Error!! Try Again." + res);
            }
        });
    }
}

function show_msg(msg) {
    var cross = '<i class="fa-regular fa-circle-xmark" onclick="msg_fade()"></i>';
    var msg_box = $('#message');   
    msg_box.html(msg + cross);
    msg_box.fadeIn();
    setTimeout(() => {
        msg_box.fadeOut();
    }, 5000);
}

function msg_fade() {
    console.log(this);
    $('#message').fadeOut();
}





// Contact Form Css

function copy_no() {
    navigator.clipboard.writeText(9156091149);

    popup("Copied To Clipboard");
}

function popup(msg) {
    $('#popup').text(msg).fadeIn();
    
    setTimeout(() => {
        $('#popup').text(msg).fadeOut();
    }, 1200);
}

document.querySelectorAll('input').forEach(input => {
    input.addEventListener('focus', () => {
      input.labels.forEach(label => {
        label.classList.add('focused');
      })
    })
  
    input.addEventListener('blur', () => {
        if(input.value == ""){
            input.labels.forEach(label => {
              label.classList.remove('focused');
            });
        }
    })
});

document.querySelector('textarea').addEventListener('focus', function() {
    this.labels[0].classList.add('focused');
});

document.querySelector('textarea').addEventListener('blur', function(e) {
    if(this.value == ""){
        this.labels[0].classList.remove('focused');
    }
});