// Module ID: 4284
// Function ID: 37468
// Dependencies: [773, 771, 772, 4280]

// Module 4284
if (Object.getOwnPropertySymbols) {
  let fn = (arg0) => {
    let tmp = arg0;
    const items = [];
    if (arg0) {
      do {
        let tmp2 = require;
        let tmp3 = dependencyMap;
        let tmp4 = require(771) /* arrayPush */;
        let tmp4Result = tmp4(items, require(772) /* getOwnPropertySymbols */(tmp));
        tmp = require(4280) /* overArg */(tmp);
      } while (tmp);
    }
    return items;
  };
} else {
  fn = require("stubArray");
}

export default fn;
