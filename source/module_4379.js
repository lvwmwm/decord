// Module ID: 4379
// Function ID: 4380
// Dependencies: [796, 794, 795, 4375]

// Module 4379
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
        tmp = require(4375) /* overArg */(tmp);
      } while (tmp);
    }
    return items;
  };
} else {
  fn = require("stubArray");
}

export default fn;
