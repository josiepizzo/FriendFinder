// ===============================================================================
// DATA
// Below data will hold all of the friends.
// Initially we just set it equal to a "dummy" customer. 
// But you could have it be an empty array as well.
// ===============================================================================
var friends = [
  {
    name: "David Pizzo",
    photo: "https://s19.postimg.org/s2idtfwk3/david_pizzo.jpg",
    scores: ["5", "1", "4", "4", "5", "1", "2", "5", "4", "1"]
  },
    {
    name: "Albert Smith",
    photo: "https://s19.postimg.org/jvqe1v6hf/albert_smith.jpg",
    scores: ["4", "2", "5", "1", "3", "2", "2", "1", "3", "2"]
  },
    {
    name: "Frank Green",
    photo: "https://s19.postimg.org/6u4pc0i37/frank_green.jpg",
    scores: ["5", "2", "2", "2", "4", "1", "3", "2", "5", "5"]
  },
      {
    name: "Mario Amore",
    photo: "https://s19.postimg.org/nj657xeoj/mario_amore.jpg",
    scores: ["5", "2", "1", "2", "4", "1", "3", "2", "4", "5"]
  },
    {
    name: "Tom Hardy",
    photo: "https://s19.postimg.org/5hn0a4knn/tom_hardy.jpg",
    scores: ["3", "3", "4", "2", "2", "1", "3", "2", "2", "3"]
  }
]


// Note how we export the array. This makes it accessible to other files using require. 
module.exports = friends; 