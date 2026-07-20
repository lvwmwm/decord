// Module ID: 996
// Function ID: 10688
// Name: finally
// Dependencies: []

// Module 996 (finally)
require(dependencyMap[0]).prototype.finally = function(arg0) {
  const require = arg0;
  return this.then((arg0) => {
    const obj = arg0(closure_1[0]);
    return arg0(closure_1[0]).resolve(arg0()).then(() => arg0);
  }, (arg0) => {
    const obj = arg0(closure_1[0]);
    return arg0(closure_1[0]).resolve(arg0()).then(() => {
      throw arg0;
    });
  });
};

export default require(dependencyMap[0]);
