// Module ID: 16816
// Function ID: 16817
// Dependencies: [16808, 16807, 16815]

// Module 16816
import _mod16807 from "module_16807" /* 16807 */;
import _mod16808 from "module_16808" /* 16808 */;
import _mod16815 from "module_16815" /* 16815 */;


export default (arg0, arg1) => {
  if ("string" === arg1) {
    const toString = arg0.toString;
    if (_mod16808(toString)) {
      const tmpResult = _mod16807;
      const tmp4 = _mod16815(toString, arg0);
      if (!tmpResult(tmp4)) {
        return tmp4;
      }
    }
  }
  const valueOf = arg0.valueOf;
  if (_mod16808(valueOf)) {
    const tmp5Result = _mod16807;
    const tmp8 = _mod16815(valueOf, arg0);
    if (!tmp5Result(tmp8)) {
      return tmp8;
    }
  }
  if ("string" !== arg1) {
    const toString2 = arg0.toString;
    if (_mod16808(toString2)) {
      const tmp5Result2 = _mod16807;
      const tmp10 = _mod16815(toString2, arg0);
      if (!tmp5Result2(tmp10)) {
        return tmp10;
      }
    }
  }
  const tmp11 = new TypeError("Can't convert object to primitive value");
  throw tmp11;
};
