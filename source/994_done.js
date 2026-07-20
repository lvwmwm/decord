// Module ID: 994
// Function ID: 10668
// Name: done
// Dependencies: []

// Module 994 (done)
require(dependencyMap[0]).prototype.done = function(arg0, arg1) {
  const self = this;
  let self2 = this;
  if (arguments.length) {
    const then = self.then;
    self2 = then(...arguments);
  }
  self2.then(null, (arg0) => {
    const timerId = setTimeout(() => {
      throw arg0;
    }, 0);
  });
};

export default require(dependencyMap[0]);
