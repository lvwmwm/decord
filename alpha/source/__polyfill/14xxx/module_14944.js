// Module ID: 14944
// Function ID: 14945
// Dependencies: [14936, 14935, 14943]

// Module 14944
import _mod14935 from "module_14935" /* 14935 */;
import _mod14936 from "module_14936" /* 14936 */;
import _mod14943 from "module_14943" /* 14943 */;


export default (arg0, arg1) => {
  if ("string" === arg1) {
    const toString = arg0.toString;
    if (_mod14936(toString)) {
      const tmpResult = _mod14935;
      const tmp4 = _mod14943(toString, arg0);
      if (!tmpResult(tmp4)) {
        return tmp4;
      }
    }
  }
  const valueOf = arg0.valueOf;
  if (_mod14936(valueOf)) {
    const tmp5Result = _mod14935;
    const tmp8 = _mod14943(valueOf, arg0);
    if (!tmp5Result(tmp8)) {
      return tmp8;
    }
  }
  if ("string" !== arg1) {
    const toString2 = arg0.toString;
    if (_mod14936(toString2)) {
      const tmp5Result2 = _mod14935;
      const tmp10 = _mod14943(toString2, arg0);
      if (!tmp5Result2(tmp10)) {
        return tmp10;
      }
    }
  }
  const tmp11 = new TypeError("Can't convert object to primitive value");
  throw tmp11;
};
