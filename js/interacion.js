$(document).ready(function(){
      $("img").hide();
      $("li:first-child a").click(function(){
          $("li:first-child img").fadeIn();
      });
      $("li:first-child a").dblclick(function(){
          $("li:first-child img").fadeOut();
      });
      $("li:nth-child(2) a").click(function(){
          $("li:first-child img").fadeIn();
      });
      $("li:nth-child(2) a").dblclick(function(){
          $("li:first-child img").fadeOut();
      });
      $("li:nth-child(3) a").click(function(){
          $("li:first-child img").fadeIn();
      });
      $("li:nth-child(3) a").dblclick(function(){
          $("li:first-child img").fadeOut();
      });
});