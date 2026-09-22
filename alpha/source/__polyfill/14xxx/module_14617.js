// Module ID: 14617
// Function ID: 14618
// Dependencies: [14609, 14608, 14616]

// Module 14617
import _mod14609 from "module_14609" /* 14609 */;


export default (arg0, arg1) => {
  if ("string" === arg1) {
    const toString = arg0.toString;
    if (_mod14609(toString)) {
      const tmp4 = tmp(14616)(toString, arg0);
      if (!tmpResult(tmp4)) {
        return tmp4;
      }
      tmpResult = tmp(14608);
    }
  }
  const valueOf = arg0.valueOf;
  if (_mod14609(valueOf)) {
    const tmp8 = tmp5(14616)(valueOf, arg0);
    if (!tmp5Result(tmp8)) {
      return tmp8;
    }
    tmp5Result = tmp5(14608);
  }
  if ("string" !== arg1) {
    const toString2 = arg0.toString;
    if (tmp5(14609)(toString2)) {
      const tmp10 = tmp5(14616)(toString2, arg0);
      if (!tmp5Result2(tmp10)) {
        return tmp10;
      }
      tmp5Result2 = tmp5(14608);
    }
  }
  throw new TypeError("Can't convert object to primitive value");
};
