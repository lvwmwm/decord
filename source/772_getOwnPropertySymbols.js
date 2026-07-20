// Module ID: 772
// Function ID: 8841
// Name: getOwnPropertySymbols
// Dependencies: []

// Module 772 (getOwnPropertySymbols)
if (getOwnPropertySymbols) {
  let fn = (arg0) => {
    let require = arg0;
    if (null == arg0) {
      let items = [];
    } else {
      const _Object = Object;
      const ObjectResult = Object(arg0);
      require = ObjectResult;
      items = require(dependencyMap[1])(getOwnPropertySymbols(ObjectResult), (arg0) => callback.call(ObjectResult, arg0));
      const tmp5 = require(dependencyMap[1]);
    }
    return items;
  };
} else {
  fn = require(dependencyMap[0]);
}

export default fn;
