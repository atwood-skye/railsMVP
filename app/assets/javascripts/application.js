// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
// = require jquery.waypoints.min.js
//= require_tree .

$(document).ready(function() {

  $(function() {
    $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });
  /* animations on scroll */
  $('.js--welcome1').waypoint(function(direction) {
    $('.js--welcome1').addClass('animated slideInLeft');
  }, {
    offset: '70%'
  });

  $('.js--welcome2').waypoint(function(direction) {
    $('.js--welcome2').addClass('animated slideInRight');
  }, {
    offset: '60%'
  });

  $('.js--wp-1').waypoint(function(direction) {
    $('.js--wp-1').addClass('animated zoomIn');
  }, {
    offset: '80%'
  });

  $('.js--wp-2').waypoint(function(direction) {
    $('.js--wp-2').addClass('animated zoomIn');
  }, {
    offset: '70%'
  });

  $('.js--wp-3').waypoint(function(direction) {
    $('.js--wp-3').addClass('animated zoomIn');
  }, {
    offset: '60%'
  });

  var modals='hello';
  var modalExit = '';

  $('.modal-button').click(function() {
    console.log(modals)
    modals = document.getElementsByClassName($(this)[0].id);
    modals[0].style.display = "block";
    modalExit = modals[1];
    console.log(modalExit)
  });

  $('.close').click(function() {
    modals[0].style.display = "none";
  });


  // var modal = document.getElementById('projectModal');
  // var btn = document.getElementById("projectBtn");
  // var span = document.getElementsByClassName("close")[0];
  // btn.onclick = function() {
  //   modal.style.display = "block";
  // }
  // window.onclick = function(event) {
  //   if (event.target == modal) {
  //     modal.style.display = "none";
  //   }
  // }

});
