// Module ID: 4245
// Function ID: 37311
// Dependencies: []

// Module 4245
if (Object.getOwnPropertySymbols) {
  let fn = (arg0) => {
    let tmp = arg0;
    const items = [];
    if (arg0) {
      do {
        let tmp2 = closure_0;
        let tmp3 = closure_1;
        let tmp4 = closure_0(closure_1[1]);
        let tmp4Result = tmp4(items, closure_0(closure_1[2])(tmp));
        tmp = closure_0(closure_1[3])(tmp);
      } while (tmp);
    }
    return items;
  };
} else {
  fn = require(dependencyMap[0]);
}

export default fn;
