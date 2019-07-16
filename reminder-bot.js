var chatbot = new BotUI('Ujjal-chat-bot');

var name,email,messageForUjjal;


/*chatbot.message
.bot ("Hi , I am a chat bot \n working on behalf of Legend Ujjal Das")
/*.then(function(){
 return delay : 5,
});
chatbot.message.add({
        content: 'Hello World from bot!'
      }).then(function () { // wait till previous message has been shown.

        chatbot.message.add({
          delay: 1000,
          human: true,
          content: 'Hello World from human!'
        });
      });

//youtube video message
chatbot.message.add({
  type: 'embed', // this is 'text' by default
  content: 'https://www.youtube.com/embed/ZRBH5vHhm4c'
});*/








//three loading dots
/*chatbot.message.add({
  delay: 500,
  loading: true,

}).then(function (index) {
  // do some stuff like ajax, etc.

  chatbot.message.update(index, {
    //delay:0,
    loading: false,
    content: 'Hello, I am a chat bot.'
  })
})/*.then(function (index) {
  // do some stuff like ajax, etc.

  chatbot.message.update(index, {
    loading: false,
    content: 'I am working on behalf of Ujjal Das.'
  });
})


chatbot.message.add({
  delay:500,
  loading: true,
}).then(function (index) {
  // do some stuff like ajax, etc.

  chatbot.message.update(index, {
    loading: true,
    content: 'I am working on behalf of Ujjal Das.'
  });
})
*/




var delay_time=500;
var i=1
chatbot.message.add({
  delay: i*delay_time,
  //i=i+1,
  loading: true,
  human: false,
  content: 'Hello, I am a chat bot.'
});

chatbot.message.add({
  delay: 2*delay_time,
  //i=i+1,
  //loading: true,
  human: false,
  content: ' I work on behalf of Ujjal Das.'
});

chatbot.message.add({
  delay: 3*delay_time,
  //i=i+1,
  //loading: true,
  human: false,
  content: 'please enter your name'
});


chatbot.action.text({
  delay: 3*delay_time,
  action: {

    placeholder: 'Enter your name here'
  }
}).then(function (res) { 
delay: 3*delay_time,
name=res.value,// will be called when it is submitted.
  console.log(res.value ); // will print whatever was typed in the field.

chatbot.message
        .bot({
          delay: 3*delay_time,
          content: 'Hello  ' + res.value + "  nice to hear from you!"
        })

}).then(function(){

chatbot.message.add({
  delay: 3*delay_time,
  //i=i+1,
  //loading: true,
  human: false,
  content: 'please enter your email'
});


chatbot.action.text({
  delay : 3*delay_time,
  action: {
    sub_type: 'email',
    placeholder: 'Enter your Email here',

  }
}).then(function(res){email=res.value})


.then (function(){


  chatbot.message.add({
    human:false,
    content: 'enter your message for Ujjal das'
  })

  chatbot.action.text({
  //delay : 4*delay_time,
  action: {
    //sub_type: 'email',
    placeholder: 'Enter your meesage here',

  }

}).then(function(res){messageForUjjal=res.value})

.then(function(){

  chatbot.message.add({
    human: false,
    content:  ' thanks for contacting <br/> Ujjal Das will directly contact you '
  })
})





})



})





















//auto hidden
/*chatbot.action.button({
  autoHide: false,
  action: [
    {
      text: 'One',
      value: 'one'
    }
  ]
}).then(function (res) { // will be called when a button is clicked.
  chatbot.action.hide(); // hide the button whenever you want.
});*/


/*.then(function (res) {
      chatbot.message
        .bot({
          delay: 500,
          content: 'reminder added: ' + res.value
        })*/

/*chatbot.message
    .bot({
      delay: 500,
      content: 'Write your reminder below:'
    })
    .then(function () {
      return botui.action.text({
        delay: 1000,
        action: {
          placeholder: 'Buy some milk'
        }
      })
    })
    .then(function (res) {
      chatbot.message
        .bot({
          delay: 500,
          content: 'Hello: ' + res.value
        })*/




















/*chatbot.message
  .bot('Would you like to add a reminder?')
  .then(function () {
    return chatbot.action.button({
      delay: 1000,
      action: [{
        text: 'Yep',
        value: 'yes'
      }, {
        text: 'Nope!',
        value: 'no'
      }]
    })
}).then(function (res) {
  if(res.value == 'yes') {
    showReminderInput();
  } else {
    chatbot.message.bot('Okay.');
  }
});

var showReminderInput = function () {
  chatbot.message
    .bot({
      delay: 500,
      content: 'Write your reminder below:'
    })
    .then(function () {
      return botui.action.text({
        delay: 1000,
        action: {
          placeholder: 'Buy some milk'
        }
      })
    })
    .then(function (res) {
      chatbot.message
        .bot({
          delay: 500,
          content: 'reminder added: ' + res.value
        })
      botui.message
        .bot({
          delay: 500,
          content: 'Hello'
        })

      return botui.action.button({
        delay: 1000,
        action: [{
          icon: 'plus',
          text: 'add another',
          value: 'yes'
        }]
      })

    }).then(showReminderInput);
}*/