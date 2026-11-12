// Module ID: 16536
// Function ID: 16537
// Dependencies: [16488, 16495]

// Module 16536
import _mod16488 from "module_16488" /* 16488 */;
import _mod16495 from "module_16495" /* 16495 */;

let closure_2 = _mod16488("keys");

export default (arg0) => {
  let tmp2 = closure_2[arg0];
  if (!tmp2) {
    const tmp5 = _mod16495(arg0);
    tmp[arg0] = tmp5;
    tmp2 = tmp5;
  }
  return tmp2;
};
