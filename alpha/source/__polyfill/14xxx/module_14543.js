// Module ID: 14543
// Function ID: 14544
// Dependencies: [14544]

// Module 14543
import _mod14544 from "module_14544" /* 14544 */;


export default (arg0, arg1) => {
  let tmp3 = _mod14544[arg0];
  if (!tmp3) {
    let obj = arg1;
    const tmpResult = _mod14544;
    if (!arg1) {
      obj = {};
    }
    tmpResult[arg0] = obj;
    tmp3 = obj;
  }
  return tmp3;
};
