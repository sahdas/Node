//This code will print 'Hello World' in every second for 5 seconds and then print 'Done' and close
//Set Interval for every second and print 'Hello World'
var interval = setInterval(function(){ 
  console.log('Hello World'); 
}, 1000);
//After 5 sec, set timeout and print 'Done'
setTimeout(function() { 
  clearInterval(interval); 
  console.log('Done');
}, 5000);


