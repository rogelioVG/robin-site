$(document).ready(function() {

    $('.one').on("click", function(){
      amount += "1";
      $('.amount').html("$"+amount);
    });

    $('.two').on("click", function(){
      amount += "2";
      $('.amount').html("$"+amount);
    });

    $('.three').on("click", function(){
      amount += "3";
      $('.amount').html("$"+amount);
    });

    $('.four').on("click", function(){
      amount += "4";
      $('.amount').html("$"+amount);
    });

    $('.five').on("click", function(){
      amount += "5";
      $('.amount').html("$"+amount);
    });

    $('.six').on("click", function(){
      amount += "6";
      $('.amount').html("$"+amount);
    });

    $('.seven').on("click", function(){
      amount += "7";
      $('.amount').html("$"+amount);
    });

    $('.eight').on("click", function(){
      amount += "8";
      $('.amount').html("$"+amount);
    });

    $('.nine').on("click", function(){
      amount += "9";
      $('.amount').html("$"+amount);
    });

    $('.dot').on("click", function(){
      if (amount.includes(".")){
      }
      else{
        amount += ".";
        $('.amount').html("$"+amount);
      }
    });

    $('.zero').on("click", function(){
      if (amount.length > 0) {
        amount += "0";
        $('.amount').html("$"+amount);
      }
    });

    $('.del').on("click", function(){
      amount = 0;
      $('.amount').html("$0.0");
      // if (amount.length > 1){
      //   amount = amount.slice(0, -1);
      //   $('.amount').html("$"+amount);
      // }
      // else {
      //   amount = amount.slice(0, -1);
      //   $('.amount').html("$0.0");
      // }

    });



    $('.charge').on("click", function(){

      //const $amount = $('.amount').val();

      // const $amount = 0

      $('.charge').prop('disabled', true);

      ////////////////////////////////////
      // SEND ORDER POST TO ROBIN TERMINAL
      ////////////////////////////////////
      $.ajax({
        url: "http://192.168.1.71:5000/charge",
        method: "POST",
        data: {amount: amount},
        dataType: "json",
        success:function(response) {
          console.log(response);
          alert(response);
          $('.charge').prop('disabled', false);
        },
        error: function(){
          alert("Connection Failed :(");
          $('.charge').prop('disabled', false);
        }
      });
    });
  });