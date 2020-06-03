/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/application.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/application.js":
/*!*********************************************!*\
  !*** ./app/javascript/packs/application.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
// require("@rails/ujs").start()
// require("turbolinks").start()
// require("@rails/activestorage").start()
// require("channels")
__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module 'packs/vendors.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

__webpack_require__(/*! packs/plugins.js */ "./app/javascript/packs/plugins.js");

__webpack_require__(/*! packs/custom-script.js */ "./app/javascript/packs/custom-script.js"); // Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)
//

/***/ }),

/***/ "./app/javascript/packs/custom-script.js":
/*!***********************************************!*\
  !*** ./app/javascript/packs/custom-script.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*================================================================================
	Item Name: Materialize - Material Design Admin Template
	Version: 5.0
	Author: PIXINVENT
	Author URL: https://themeforest.net/user/pixinvent/portfolio
================================================================================

NOTE:
------
PLACE HERE YOUR OWN JS CODES AND IF NEEDED.
WE WILL RELEASE FUTURE UPDATES SO IN ORDER TO NOT OVERWRITE YOUR CUSTOM SCRIPT IT'S BETTER LIKE THIS. */
//= require vendors.min
//= require plugins

/***/ }),

/***/ "./app/javascript/packs/plugins.js":
/*!*****************************************!*\
  !*** ./app/javascript/packs/plugins.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*================================================================================
  Item Name: Materialize - Material Design Admin Template
  Version: 5.0
  Author: PIXINVENT
  Author URL: https://themeforest.net/user/pixinvent/portfolio
================================================================================*/
$(function () {
  "use strict"; // Init collapsible

  $(".collapsible").collapsible({
    accordion: true,
    onOpenStart: function onOpenStart() {
      // Removed open class first and add open at collapsible active
      $(".collapsible > li.open").removeClass("open");
      setTimeout(function () {
        $("#slide-out > li.active > a").parent().addClass("open");
      }, 10);
    }
  }); // Add open class on init

  $("#slide-out > li.active > a").parent().addClass("open"); // Open active menu for multi level

  if ($("li.active .collapsible-sub .collapsible").find("a.active").length > 0) {
    $("li.active .collapsible-sub .collapsible").find("a.active").closest("div.collapsible-body").show();
    $("li.active .collapsible-sub .collapsible").find("a.active").closest("div.collapsible-body").closest("li").addClass("active");
  } // Auto Scroll menu to the active item


  var position;

  if ($(".sidenav-main li a.active").parent("li.active").parent("ul.collapsible-sub").length > 0) {
    position = $(".sidenav-main li a.active").parent("li.active").parent("ul.collapsible-sub").position();
  } else {
    position = $(".sidenav-main li a.active").parent("li.active").position();
  }

  setTimeout(function () {
    if (position !== undefined) {
      $(".sidenav-main ul").stop().animate({
        scrollTop: position.top - 300
      }, 300);
    }
  }, 300); // Collapsible navigation menu

  $(".nav-collapsible .navbar-toggler").click(function () {
    // Toggle navigation expan and collapse on radio click
    if ($(".sidenav-main").hasClass("nav-expanded") && !$(".sidenav-main").hasClass("nav-lock")) {
      $(".sidenav-main").toggleClass("nav-expanded");
      $("#main").toggleClass("main-full");
    } else {
      $("#main").toggleClass("main-full");
    } // Set navigation lock / unlock with radio icon


    if ($(this).children().text() == "radio_button_unchecked") {
      $(this).children().text("radio_button_checked");
      $(".sidenav-main").addClass("nav-lock");
      $(".navbar .nav-collapsible").addClass("sideNav-lock");
    } else {
      $(this).children().text("radio_button_unchecked");
      $(".sidenav-main").removeClass("nav-lock");
      $(".navbar .nav-collapsible").removeClass("sideNav-lock");
    }
  }); // Expand navigation on mouseenter event

  $(".sidenav-main.nav-collapsible, .navbar .brand-sidebar").mouseenter(function () {
    if (!$(".sidenav-main.nav-collapsible").hasClass("nav-lock")) {
      $(".sidenav-main.nav-collapsible, .navbar .nav-collapsible").addClass("nav-expanded").removeClass("nav-collapsed");
      $("#slide-out > li.close > a").parent().addClass("open").removeClass("close");
      setTimeout(function () {
        // Open only if collapsible have the children
        if ($(".collapsible .open").children().length > 1) {
          $(".collapsible").collapsible("open", $(".collapsible .open").index());
        }
      }, 100);
    }
  }); // Collapse navigation on mouseleave event

  $(".sidenav-main.nav-collapsible, .navbar .brand-sidebar").mouseleave(function () {
    if (!$(".sidenav-main.nav-collapsible").hasClass("nav-lock")) {
      var openLength = $(".collapsible .open").children().length;
      $(".sidenav-main.nav-collapsible, .navbar .nav-collapsible").addClass("nav-collapsed").removeClass("nav-expanded");
      $("#slide-out > li.open > a").parent().addClass("close").removeClass("open");
      setTimeout(function () {
        // Open only if collapsible have the children
        if (openLength > 1) {
          $(".collapsible").collapsible("close", $(".collapsible .close").index());
        }
      }, 100);
    }
  }); // Search class for focus

  $(".header-search-input").focus(function () {
    $(this).parent("div").addClass("header-search-wrapper-focus");
  }).blur(function () {
    $(this).parent("div").removeClass("header-search-wrapper-focus");
  }); //Search box form small screen

  $(".search-button").click(function (e) {
    if ($(".search-sm").is(":hidden")) {
      $(".search-sm").show();
      $(".search-box-sm").focus();
    } else {
      $(".search-sm").hide();
      $(".search-box-sm").val("");
    }
  });
  $(".search-sm-close").click(function (e) {
    $(".search-sm").hide();
    $(".search-box-sm").val("");
  }); //Breadcrumbs with image

  if ($("#breadcrumbs-wrapper").attr("data-image")) {
    var imageUrl = $("#breadcrumbs-wrapper").attr("data-image");
    $("#breadcrumbs-wrapper").addClass("breadcrumbs-bg-image");
    $("#breadcrumbs-wrapper").css("background-image", "url(" + imageUrl + ")");
  } // Check first if any of the task is checked


  $("#task-card input:checkbox").each(function () {
    checkbox_check(this);
  }); // Task check box

  $("#task-card input:checkbox").change(function () {
    checkbox_check(this);
  }); // Check Uncheck function

  function checkbox_check(el) {
    if (!$(el).is(":checked")) {
      $(el).next().css("text-decoration", "none"); // or addClass
    } else {
      $(el).next().css("text-decoration", "line-through"); //or addClass
    }
  } //Init tabs


  $(".tabs").tabs(); // Swipeable Tabs Demo Init

  if ($("#tabs-swipe-demo").length) {
    $("#tabs-swipe-demo").tabs({
      swipeable: true
    });
  } // Plugin initialization


  $("select").formSelect(); // Set checkbox on forms.html to indeterminate

  var indeterminateCheckbox = document.getElementById("indeterminate-checkbox");
  if (indeterminateCheckbox !== null) indeterminateCheckbox.indeterminate = true; // Materialize Slider

  $(".slider").slider({
    full_width: true
  }); // Commom, Translation & Horizontal Dropdown

  $(".dropdown-trigger").dropdown(); // Commom, Translation

  $(".dropdown-button").dropdown({
    inDuration: 300,
    outDuration: 225,
    constrainWidth: false,
    hover: true,
    gutter: 0,
    coverTrigger: true,
    alignment: "left" // stopPropagation: false

  }); // Notification, Profile, Translation, Settings Dropdown & Horizontal Dropdown

  $(".notification-button, .profile-button, .translation-button, .dropdown-settings, .dropdown-menu").dropdown({
    inDuration: 300,
    outDuration: 225,
    constrainWidth: false,
    hover: false,
    gutter: 0,
    coverTrigger: false,
    alignment: "right" // stopPropagation: false

  }); // Fab

  $(".fixed-action-btn").floatingActionButton();
  $(".fixed-action-btn.horizontal").floatingActionButton({
    direction: "left"
  });
  $(".fixed-action-btn.click-to-toggle").floatingActionButton({
    direction: "left",
    hoverEnabled: false
  });
  $(".fixed-action-btn.toolbar").floatingActionButton({
    toolbarEnabled: true
  }); // Materialize Tabs

  $(".tab-demo").show().tabs();
  $(".tab-demo-active").show().tabs(); // Materialize scrollSpy

  $(".scrollspy").scrollSpy(); // Materialize tooltip

  $(".tooltipped").tooltip({
    delay: 50
  }); //Main Left Sidebar Menu // sidebar-collapse

  $(".sidenav").sidenav({
    edge: "left" // Choose the horizontal origin

  }); //Main Right Sidebar

  $(".slide-out-right-sidenav").sidenav({
    edge: "right"
  }); //Main Right Sidebar Chat

  $(".slide-out-right-sidenav-chat").sidenav({
    edge: "right"
  }); // Perfect Scrollbar

  $("select").not(".disabled").select();
  var leftnav = $(".page-topbar").height();
  var leftnavHeight = window.innerHeight - leftnav;
  var righttnav = $("#slide-out-right").height();

  if ($("#slide-out.leftside-navigation").length > 0) {
    if (!$("#slide-out.leftside-navigation").hasClass("native-scroll")) {
      var ps_leftside_nav = new PerfectScrollbar(".leftside-navigation", {
        wheelSpeed: 2,
        wheelPropagation: false,
        minScrollbarLength: 20
      });
    }
  }

  if ($(".slide-out-right-body").length > 0) {
    var ps_slideout_right = new PerfectScrollbar(".slide-out-right-body, .chat-body .collection", {
      suppressScrollX: true
    });
  }

  if ($(".chat-body .collection").length > 0) {
    var ps_slideout_chat = new PerfectScrollbar(".chat-body .collection", {
      suppressScrollX: true
    });
  } // Char scroll till bottom of the char content area


  var chatScrollAuto = $("#right-sidebar-nav #slide-out-chat .chat-body .collection");

  if (chatScrollAuto.length > 0) {
    chatScrollAuto[0].scrollTop = chatScrollAuto[0].scrollHeight;
  } // Fullscreen


  function toggleFullScreen() {
    if (document.fullScreenElement && document.fullScreenElement !== null || !document.mozFullScreen && !document.webkitIsFullScreen) {
      if (document.documentElement.requestFullScreen) {
        document.documentElement.requestFullScreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullScreen) {
        document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
      } else if (document.documentElement.msRequestFullscreen) {
        if (document.msFullscreenElement) {
          document.msExitFullscreen();
        } else {
          document.documentElement.msRequestFullscreen();
        }
      }
    } else {
      if (document.cancelFullScreen) {
        document.cancelFullScreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
      }
    }
  }

  $(".toggle-fullscreen").click(function () {
    toggleFullScreen();
  }); // Detect touch screen and enable scrollbar if necessary

  function is_touch_device() {
    try {
      document.createEvent("TouchEvent");
      return true;
    } catch (e) {
      return false;
    }
  }

  if (is_touch_device()) {
    $("#nav-mobile").css({
      overflow: "auto"
    });
  }

  resizetable();
});
$(window).on("resize", function () {
  resizetable();
});

function resizetable() {
  if ($(window).width() < 976) {
    if ($('.vertical-layout.vertical-gradient-menu .sidenav-dark .brand-logo').length > 0) {
      $('.vertical-layout.vertical-gradient-menu .sidenav-dark .brand-logo img').attr('src', '../../../app-assets/images/logo/materialize-logo-color.png');
    }

    if ($('.vertical-layout.vertical-dark-menu .sidenav-dark .brand-logo').length > 0) {
      $('.vertical-layout.vertical-dark-menu .sidenav-dark .brand-logo img').attr('src', '../../../app-assets/images/logo/materialize-logo-color.png');
    }

    if ($('.vertical-layout.vertical-modern-menu .sidenav-light .brand-logo').length > 0) {
      $('.vertical-layout.vertical-modern-menu .sidenav-light .brand-logo img').attr('src', '../../../app-assets/images/logo/materialize-logo.png');
    }
  } else {
    if ($('.vertical-layout.vertical-gradient-menu .sidenav-dark .brand-logo').length > 0) {
      $('.vertical-layout.vertical-gradient-menu .sidenav-dark .brand-logo img').attr('src', '../../../app-assets/images/logo/materialize-logo.png');
    }

    if ($('.vertical-layout.vertical-dark-menu .sidenav-dark .brand-logo').length > 0) {
      $('.vertical-layout.vertical-dark-menu .sidenav-dark .brand-logo img').attr('src', '../../../app-assets/images/logo/materialize-logo.png');
    }

    if ($('.vertical-layout.vertical-modern-menu .sidenav-light .brand-logo').length > 0) {
      $('.vertical-layout.vertical-modern-menu .sidenav-light .brand-logo img').attr('src', '../../../app-assets/images/logo/materialize-logo-color.png');
    }
  }
}

resizetable(); // Add message to chat

function slide_out_chat() {
  var message = $(".search").val();

  if (message != "") {
    var html = '<li class="collection-item display-flex avatar justify-content-end pl-5 pb-0" data-target="slide-out-chat"><div class="user-content speech-bubble-right">' + '<p class="medium-small">' + message + "</p>" + "</div></li>";
    $("#right-sidebar-nav #slide-out-chat .chat-body .collection").append(html);
    $(".search").val("");
    var charScroll = $("#right-sidebar-nav #slide-out-chat .chat-body .collection");

    if (charScroll.length > 0) {
      charScroll[0].scrollTop = charScroll[0].scrollHeight;
    }
  }
}

/***/ })

/******/ });
//# sourceMappingURL=application-f9875a8aea2fe6cf3018.js.map