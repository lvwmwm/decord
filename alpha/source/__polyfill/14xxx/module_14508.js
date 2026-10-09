// Module ID: 14508
// Function ID: 14509
// Dependencies: [14500, 14499, 14507]

// Module 14508
import _mod14499 from "module_14499" /* 14499 */;
import _mod14500 from "module_14500" /* 14500 */;
import _mod14507 from "module_14507" /* 14507 */;


export default (arg0, arg1) => {
  if ("string" === arg1) {
    const toString = arg0.toString;
    if (_mod14500(toString)) {
      const tmpResult = _mod14499;
      const tmp4 = _mod14507(toString, arg0);
      if (!tmpResult(tmp4)) {
        return tmp4;
      }
    }
  }
  const valueOf = arg0.valueOf;
  if (_mod14500(valueOf)) {
    const tmp5Result = _mod14499;
    const tmp8 = _mod14507(valueOf, arg0);
    if (!tmp5Result(tmp8)) {
      return tmp8;
    }
  }
  if ("string" !== arg1) {
    const toString2 = arg0.toString;
    if (_mod14500(toString2)) {
      const tmp5Result2 = _mod14499;
      const tmp10 = _mod14507(toString2, arg0);
      if (!tmp5Result2(tmp10)) {
        return tmp10;
      }
    }
  }
  const tmp11 = new TypeError("Can't convert object to primitive value");
  throw tmp11;
};
