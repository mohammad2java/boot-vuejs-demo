##Boot-VueJs-demo##  (its combination of angularjs+reactivejs in simple-way)
----------------------------------------------------------------------------
Link for documentation:
<a href="https://vuejs.org/v2/guide/">here</a>


structure notes:
-----------------
	vuejs can be apply on any section of html using selector:

example:

html section:
------------

	<div id="app">
		{{message}}
		
	</div>


vuejs section
------------

	var app = new Vue({
	  el: '#app',
	  data: {
	    message: 'Hello Vue!'
	  }
	});	

	here we have to create object of Vue with el property to link the section of html.
	id="app"   -->> el: '#app',
	
	if selector is id then use el: '#app' if selector is class then use el: '.app'
	<br>data: property use to share/binding the data from js to view .






Observation in RND
---------------------------
	if you put js script in head section or above associated html section--it is not working saying..[Vue warn]: 	Cannot find element: #app
	but when we put js script after associated html section or in footer of page..then it is working fine.




following things how to do in VueJs 
------------------------------------
	1-two way binding
	2-condition and looping 
	3-event handling
	4-http-request/response (please use jquery ajax api)
	5-dynamic attribute value



1-two way binding using v-model <br> 
------------------------
v-model="propertyname" that property must be in vue-data-property

2-condition and looping<br>
--------------------------------

		<h1>vue conditional example:</h1>
	
		<h1 v-if="awesome">Vue is awesome!</h1>
		<h1 v-else>Oh no 😢</h1>
		<h1 v-show="awesome">Vue is awesome! using v-show directive</h1>	
	
	v-show and v-if working with same logic except performance point of view..
	if true/false is changing very frequently then v-show is recommended for initial page load v-if is 	recommended.

	##############################################
	<h1>##loop example:</h1>		
	<ul id="example-1">
	  <li v-for="item in items">
	    {{ item }}
	  </li>
	</ul>
 	
 	v-for is used for iterating the list element

	items list in js side:
	---------------------
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
3-event handling using v-on:(shorthand is @)<br>
------------------------------------

example :

	<h2 v-on:click="helloGet">click here</h2>
	
	in shorthand form
	
	<h2 @click="helloGet">click here</h2>




5-dynamic attribute value -using v-bind: (shorthand is :)
---------------------------------------------------------

example: in html section

	<a v-bind:href="myurl">google</a>
	<br>
	<a :href="myurl">google-shorthand</a>
	

in js section<br>

	var app = new Vue({
	  el: '#app',
	  data: {
	    message: 'Hello Vue!',
		myname:'',
		myurl:'https:/google.co.uk'
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

  