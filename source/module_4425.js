// Module ID: 4425
// Function ID: 4426
// Dependencies: [796, 794, 795, 4421]

// Module 4425
if (Object.getOwnPropertySymbols) {
  let fn = (arg0) => {
    let tmp = arg0;
    const items = [];
    if (arg0) {
      do {
        let tmp2 = require;
        let tmp3 = dependencyMap;
        let tmp4 = require(794) /* arrayPush */;
        let tmp4Result = tmp4(items, require(795) /* getOwnPropertySymbols */(tmp));
        tmp = require(4421) /* overArg */(tmp);
      } while (tmp);
    }
    return items;
  };
} else {
  fn = require("stubArray");
}

export default fn;
