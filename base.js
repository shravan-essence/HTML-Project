$('.slider').slick({
	dots: true,
	infinite: true,
	speed: 300,
	arrows:false,
	slidesToShow: 3,
	responsive: [
	{
 		breakpoint: 1024,
				settings: {
 				slidesToShow: 1,
 				slidesToScroll: 1,
 				infinite: true,
 				dots: true
			}
	},
	{
			breakpoint: 600,
			settings: {
 				slidesToShow: 1,
 				slidesToScroll: 1
			}
		},
	{
		breakpoint: 480,
			settings: {
 				slidesToShow: 1,
 				slidesToScroll: 1,
 				dots:false
				}
		}
	]
});


	if ($(window).width() <=700){
		$('.slider-plan').slick({
			dots: false,
			infinite: true,
			speed: 300,
			arrows:false,
			slidesToShow: 3,
			responsive: [
			{
		 		breakpoint: 1024,
						settings: {
		 				slidesToShow: 1,
		 				slidesToScroll: 1,
		 				infinite: true,
		 				dots: true
					}
			},
			{
					breakpoint: 600,
					settings: {
		 				slidesToShow: 1,
		 				slidesToScroll: 1
					}
				},
			{
				breakpoint: 480,
					settings: {
		 				slidesToShow: 1,
		 				slidesToScroll: 1,
		 				dots:false
						}
				}
			]
		});
	}

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "nav") {
    x.className += " responsive";
  } else {
    x.className = "nav";
  }
}

$(document).ready(function(){
  $("#registerForm").validate({
    rules :{
      username:{
        required: true,
        minlength: 4,
        pattern: /^[a-zA-Z\s]+$/ 
      },
      email:{
        required: true,
        email:true
      },
      pass1: {
        required: true,
        minlength:6
      },
      pass2: {
        required: true,
        minlength:6,
        equalTo: "#pass1"
      }
    },
    messages: {
      username: {
        required: "Please enter username",
        minlength: "Please enter minimum 4 letters",
        pattern: "Please enter only letters"
      },
      email: {
        required: "Please enter email address",
        email: "Please enter valid email"
      },
      pass1: {
        required: "Please enter password",
        minlength:"Please enter minimum 6 characters"
      },
      pass2: {
        required: "Please confirm your password",
        minlength: "Please enter minimum 6 characters",
        equalTo: "Please enter same password as above"
      },
    }
  });
  $("#loginForm").validate({
    rules :{
      username:{
        required: true,
        minlength: 4,
        pattern: /^[a-zA-Z\s]+$/ 
      },
      pass: {
        required: true,
        minlength:6
      }
    },
    messages: {
      username: {
        required: "Please enter username",
        minlength: "Please enter minimum 4 letters",
        pattern: "Please enter only letters"
      },
      pass: {
        required: "Please enter password",
        minlength:"Please enter minimum 6 characters"
      }
    }
  });
  var userInfo = []
  $("#registerBtn").click(function(){
  	var userInfo = JSON.parse(localStorage.getItem("userInfo"));
  	console.log(userInfo)
  	if($("#registerForm").valid()){
      var username = $("#registerForm #username").val()
      var email = $("#registerForm #email").val()
      var password = $("#registerForm #pass1").val()
      console.log(username);
      console.log(email);
      console.log(password);
      var valid = 0
      userInfo.forEach(function (obj) {
	      if (obj.Username == username) {
	      	alert("Username already taken");
	      	valid = 1
	      }else if (obj.Email == email){
	      	alert("Email is already taken");
	      	valid = 1
	      }
      });
      if (valid ==0){
		      userInfo.push({
		        Username: username,
		        Email: email,
		        Password: password
      		});
		      localStorage.removeItem("userInfo");
      		localStorage.setItem("userInfo", JSON.stringify(userInfo));
		      alert("Registered successfully")
		      location.reload()
		      var url = $("#loginModal").data('target')
        	location.replace(url);
      	}
    }
  });
	var user = []
  var user
  var email
  var pass
  $("#loginBtn").click(function(){
  	var userInfo = JSON.parse(localStorage.getItem("userInfo"));
  	var valid = 0
  	if($("#loginForm").valid()){
  		var username = $("#loginForm #username").val()
      var password = $("#loginForm #pass").val()
      console.log(username);
      console.log(password);
      console.log(userInfo)
      userInfo.forEach(function (obj) {
	      if (obj.Username == username && obj.Password == password) {
	        valid = 1
          name = obj.Username
          email = obj.Email
          pass = obj.Password

	      }
    	})
      if (valid==1){
    		alert("Logged In successfully");
        user.push({
          Username: name,
          Email: email,
          Password: pass
        });
	      localStorage.removeItem("count");
	      localStorage.setItem("count","1");
        localStorage.removeItem("user")
	      localStorage.setItem("user", JSON.stringify(user));
        $("#profilebtn").replaceWith('<a href="#" class="dropbtn dropdown-toggle" data-bs-toggle="dropdown" id="profilebtn">'+name+'</a>')
    	  alert("Hello"+name) 
      }
			else{
	 			alert("Please enter valid credentials")
	 		}
  	}
  });});