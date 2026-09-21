// Module ID: 14614
// Function ID: 14615
// Dependencies: [14606, 14605, 14613]

// Module 14614
import _mod14606 from "module_14606" /* 14606 */;


export default (arg0, arg1) => {
  if ("string" === arg1) {
    const toString = arg0.toString;
    if (_mod14606(toString)) {
      const tmp4 = tmp(14613)(toString, arg0);
      if (!tmpResult(tmp4)) {
        return tmp4;
      }
      tmpResult = tmp(14605);
    }
  }
  const valueOf = arg0.valueOf;
  if (_mod14606(valueOf)) {
    const tmp8 = tmp5(14613)(valueOf, arg0);
    if (!tmp5Result(tmp8)) {
      return tmp8;
    }
    tmp5Result = tmp5(14605);
  }
  if ("string" !== arg1) {
    const toString2 = arg0.toString;
    if (tmp5(14606)(toString2)) {
      const tmp10 = tmp5(14613)(toString2, arg0);
      if (!tmp5Result2(tmp10)) {
        return tmp10;
      }
      tmp5Result2 = tmp5(14605);
    }
  }
  throw new TypeError("Can't convert object to primitive value");
};
