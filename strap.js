Router.map(function(){
	this.route('home',{
		path: '/'
	});
	this.route('about');
	this.route('contact');
});


if (Meteor.isClient) {

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
