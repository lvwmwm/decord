// Module ID: 14585
// Function ID: 14586
// Dependencies: [14577, 14576, 14584]

// Module 14585
import _mod14576 from "module_14576" /* 14576 */;
import _mod14577 from "module_14577" /* 14577 */;
import _mod14584 from "module_14584" /* 14584 */;


export default (arg0, arg1) => {
  if ("string" === arg1) {
    const toString = arg0.toString;
    if (_mod14577(toString)) {
      const tmpResult = _mod14576;
      const tmp4 = _mod14584(toString, arg0);
      if (!tmpResult(tmp4)) {
        return tmp4;
      }
    }
  }
  const valueOf = arg0.valueOf;
  if (_mod14577(valueOf)) {
    const tmp5Result = _mod14576;
    const tmp8 = _mod14584(valueOf, arg0);
    if (!tmp5Result(tmp8)) {
      return tmp8;
    }
  }
  if ("string" !== arg1) {
    const toString2 = arg0.toString;
    if (_mod14577(toString2)) {
      const tmp5Result2 = _mod14576;
      const tmp10 = _mod14584(toString2, arg0);
      if (!tmp5Result2(tmp10)) {
        return tmp10;
      }
    }
  }
  const tmp11 = new TypeError("Can't convert object to primitive value");
  throw tmp11;
};
