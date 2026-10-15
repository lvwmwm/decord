// Module ID: 15240
// Function ID: 15241
// Dependencies: [15232, 15231, 15239]

// Module 15240
import _mod15231 from "module_15231" /* 15231 */;
import _mod15232 from "module_15232" /* 15232 */;
import _mod15239 from "module_15239" /* 15239 */;


export default (arg0, arg1) => {
  if ("string" === arg1) {
    const toString = arg0.toString;
    if (_mod15232(toString)) {
      const tmpResult = _mod15231;
      const tmp4 = _mod15239(toString, arg0);
      if (!tmpResult(tmp4)) {
        return tmp4;
      }
    }
  }
  const valueOf = arg0.valueOf;
  if (_mod15232(valueOf)) {
    const tmp5Result = _mod15231;
    const tmp8 = _mod15239(valueOf, arg0);
    if (!tmp5Result(tmp8)) {
      return tmp8;
    }
  }
  if ("string" !== arg1) {
    const toString2 = arg0.toString;
    if (_mod15232(toString2)) {
      const tmp5Result2 = _mod15231;
      const tmp10 = _mod15239(toString2, arg0);
      if (!tmp5Result2(tmp10)) {
        return tmp10;
      }
    }
  }
  const tmp11 = new TypeError("Can't convert object to primitive value");
  throw tmp11;
};
