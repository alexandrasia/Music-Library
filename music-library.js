var Library = function(name, creator) {
  this.name = name;
  this.creator = creator;
  this.playlists = [];
};

var Playlist = function(name) {
  this.name = name;
  this.tracks = [];
};

var Track = function(title, rating, length) {
  this.title = title;
  this.rating = rating;
  this.length = length;
};

Playlist.prototype.overallRating = function() {
  var ratings = this.tracks.map(track => track.rating);
  return (
    ratings.reduce(function(a, b) {
      return a + b;
    }) / ratings.length
  );
};

Playlist.prototype.totalDuration = function() {
  var lengths = this.tracks.map(track => track.length);
  return lengths.reduce(function(a, b) {
    return a + b;
  });
};

var library = new Library("MyLibrary", "Alex");
var playlist1 = new Playlist("MyFavouriteSongs");

library.playlists.push(playlist1);

playlist1.tracks.push(new Track("Song1", 5, 300));
playlist1.tracks.push(new Track("Song2", 3, 400));
playlist1.tracks.push(new Track("Song3", 2, 200));

var duration = playlist1.totalDuration();
var avgRating = playlist1.overallRating();
