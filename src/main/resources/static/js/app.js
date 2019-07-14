


var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
	myname:'',
	myurl:'https:/google.co.uk',
	awesome:true,
	items:['amir',"meer","fema","poo","suraj"]
	  
  },
	methods:
	{
		helloGet: function(event) {
			console.log(app.myname);
			console.log(app.message);
			app.message=app.message.concat(app.myname);
			
		}
	}
});		
	

