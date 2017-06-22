const hi = function(name) {
  return 'Hi ' + name;
};

// const greeting = function(name) {
//   return hi(name);
// };
// console.log(hi)
// console.log(hi('tom'))
// const greeting = hi
// console.log(greeting('f'))

let getServerStuff = function(callback) {
  return ajaxCall(function(json) {
    return callback(json);
  });
};

// this line
return ajaxCall(function(json) {
  return callback(json)
})
//equivalent to this
ajaxCall(callback)

// refactoring
 getServerStuff = function(callback) {
  return ajaxCall(callback)
}
// this is result code
 getServerStuff = ajaxCall 

// one more example
let BlogController = (function() {
  let index = function(posts) {
    return Views.index(posts);
  };

  let show = function(post) {
    return Views.show(post);
  };

  let create = function(attrs) {
    return Db.create(attrs);
  };

  let update = function(post, attrs) {
    return Db.update(post, attrs);
  };

  let destroy = function(post) {
    return Db.destroy(post);
  };

  return {
    index: index,
    show: show,
    create: create,
    update: update,
    destroy: destroy,
  };
})();
// absolunly equivalen to simle
BlogController = {
  index: View.index,
  show: View.show,
  create: Db.create,
  update: Db.update,
  destroy: Db.destroy
}