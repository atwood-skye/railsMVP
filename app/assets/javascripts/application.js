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

  $('.js--section-features').waypoint(function(direction) {
  if (direction == "down") {
    $('nav').addClass('sticky');
  } else {
    $('nav').removeClass('sticky');
  }
}, {
  offset: '60px;'
});

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

  $('.js--wp-contact').waypoint(function(direction) {
    $('.js--wp-contact').addClass('animated bounceInUp');
  }, {
    offset: '90%'
  });

  var modals='hello';
  var modalExit = '';

  $('.modal-button').click(function() {
    modals = document.getElementsByClassName($(this)[0].id);
    modals[0].style.display = "block";
    modalExit = modals[1];
  });

  $('.close').click(function() {
    modals[0].style.display = "none";
  });

  $('#serviceBtn').click(function(event) {
    $('html, body').animate({
      scrollTop: $('#services').offset().top
    }, 1500);
    });

    $('#projectsBtn').click(function(event) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: $('#projects').offset().top
      }, 1500);
      });

      $('#contactBtn').click(function(event) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: $('#contact').offset().top
        }, 1500);
        });

});
