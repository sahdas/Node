//This code will print 'Hello World' in every second for 5 seconds and then print 'Done' and close
var interval = setInterval(function(){ 
  console.log('Hello World'); 
}, 1000);

setTimeout(function() { 
  clearInterval(interval); 
  console.log('Done');
}, 5000);


