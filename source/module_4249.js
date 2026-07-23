// Module ID: 4249
// Function ID: 37343
// Dependencies: [773, 771, 772, 4245]

// Module 4249
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
        tmp = require(4245) /* overArg */(tmp);
      } while (tmp);
    }
    return items;
  };
} else {
  fn = require("stubArray");
}

export default fn;
