// Module ID: 15580
// Function ID: 15581
// Dependencies: [15572, 15571, 15579]

// Module 15580
import _mod15571 from "module_15571" /* 15571 */;
import _mod15572 from "module_15572" /* 15572 */;
import _mod15579 from "module_15579" /* 15579 */;


export default (arg0, arg1) => {
  if ("string" === arg1) {
    const toString = arg0.toString;
    if (_mod15572(toString)) {
      const tmpResult = _mod15571;
      const tmp4 = _mod15579(toString, arg0);
      if (!tmpResult(tmp4)) {
        return tmp4;
      }
    }
  }
  const valueOf = arg0.valueOf;
  if (_mod15572(valueOf)) {
    const tmp5Result = _mod15571;
    const tmp8 = _mod15579(valueOf, arg0);
    if (!tmp5Result(tmp8)) {
      return tmp8;
    }
  }
  if ("string" !== arg1) {
    const toString2 = arg0.toString;
    if (_mod15572(toString2)) {
      const tmp5Result2 = _mod15571;
      const tmp10 = _mod15579(toString2, arg0);
      if (!tmp5Result2(tmp10)) {
        return tmp10;
      }
    }
  }
  const tmp11 = new TypeError("Can't convert object to primitive value");
  throw tmp11;
};
