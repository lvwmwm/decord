// Module ID: 13127
// Function ID: 99473
// Dependencies: []

// Module 13127

export default require(dependencyMap[0]) ? (arg0) => "symbol" === typeof arg0 : (arg0) => {
  const tmp = require(dependencyMap[1])("Symbol");
  let tmp5Result = require(dependencyMap[2])(tmp);
  if (tmp5Result) {
    tmp5Result = require(dependencyMap[3])(tmp.prototype, Object(arg0));
    const tmp5 = require(dependencyMap[3]);
  }
  return tmp5Result;
};
