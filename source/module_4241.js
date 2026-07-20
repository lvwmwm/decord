// Module ID: 4241
// Function ID: 37247
// Dependencies: [0, 0, 0, 4294967295]

// Module 4241
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
  fn = require("result");
}

export default fn;
