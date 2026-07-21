// Module ID: 13136
// Function ID: 99518
// Dependencies: [13168, 13116, 13112, 13113]

// Module 13136

export default require("module_13168") ? (arg0) => "symbol" === typeof arg0 : (arg0) => {
  const tmp = require(dependencyMap[1])("Symbol");
  let tmp5Result = require(dependencyMap[2])(tmp);
  if (tmp5Result) {
    tmp5Result = require(dependencyMap[3])(tmp.prototype, Object(arg0));
    const tmp5 = require(dependencyMap[3]);
  }
  return tmp5Result;
};
