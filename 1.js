const Flock = function(n) {
  this.seagulls = n;
};

Flock.prototype.conjoin = function(other) {
  this.seagulls += other.seagulls;
  return this;
};

Flock.prototype.breed = function(other) {
  this.seagulls = this.seagulls * other.seagulls;
  return this;
};

// const flock_a = new Flock(4);
// const flock_b = new Flock(2);
// const flock_c = new Flock(0);
const flock_a = 4,
      flock_b = 2,
      flock_c = 0

// const result = flock_a
//   .conjoin(flock_c)
//   .breed(flock_b)
//   .conjoin(flock_a.breed(flock_b)).seagulls;
// console.log(result);
const add = function(flock_x, flock_y) {
  return flock_x+flock_y
}
const multiply = function(flock_x, flock_y) {
  return flock_x*flock_y
}
const funcResult = add(multiply(flock_b, add(flock_a, flock_c)), multiply(flock_a, flock_b))
console.log(funcResult)
/// refactor ;)
funcResult = add(multiply(flock_b, flock_a), multiply(flock_b, flock_a))
funcResult = multiply(flock_b, add(flock_a, flock_a))