// Module ID: 15386
// Function ID: 15387
// Dependencies: [15378, 15377, 15385]

// Module 15386
import _mod15377 from "module_15377" /* 15377 */;
import _mod15378 from "module_15378" /* 15378 */;
import _mod15385 from "module_15385" /* 15385 */;


export default (arg0, arg1) => {
  if ("string" === arg1) {
    const toString = arg0.toString;
    if (_mod15378(toString)) {
      const tmpResult = _mod15377;
      const tmp4 = _mod15385(toString, arg0);
      if (!tmpResult(tmp4)) {
        return tmp4;
      }
    }
  }
  const valueOf = arg0.valueOf;
  if (_mod15378(valueOf)) {
    const tmp5Result = _mod15377;
    const tmp8 = _mod15385(valueOf, arg0);
    if (!tmp5Result(tmp8)) {
      return tmp8;
    }
  }
  if ("string" !== arg1) {
    const toString2 = arg0.toString;
    if (_mod15378(toString2)) {
      const tmp5Result2 = _mod15377;
      const tmp10 = _mod15385(toString2, arg0);
      if (!tmp5Result2(tmp10)) {
        return tmp10;
      }
    }
  }
  const tmp11 = new TypeError("Can't convert object to primitive value");
  throw tmp11;
};
