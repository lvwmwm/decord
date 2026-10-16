// Module ID: 15285
// Function ID: 15286
// Dependencies: [15277, 15276, 15284]

// Module 15285
import _mod15276 from "module_15276" /* 15276 */;
import _mod15277 from "module_15277" /* 15277 */;
import _mod15284 from "module_15284" /* 15284 */;


export default (arg0, arg1) => {
  if ("string" === arg1) {
    const toString = arg0.toString;
    if (_mod15277(toString)) {
      const tmpResult = _mod15276;
      const tmp4 = _mod15284(toString, arg0);
      if (!tmpResult(tmp4)) {
        return tmp4;
      }
    }
  }
  const valueOf = arg0.valueOf;
  if (_mod15277(valueOf)) {
    const tmp5Result = _mod15276;
    const tmp8 = _mod15284(valueOf, arg0);
    if (!tmp5Result(tmp8)) {
      return tmp8;
    }
  }
  if ("string" !== arg1) {
    const toString2 = arg0.toString;
    if (_mod15277(toString2)) {
      const tmp5Result2 = _mod15276;
      const tmp10 = _mod15284(toString2, arg0);
      if (!tmp5Result2(tmp10)) {
        return tmp10;
      }
    }
  }
  const tmp11 = new TypeError("Can't convert object to primitive value");
  throw tmp11;
};
