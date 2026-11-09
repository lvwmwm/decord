// Module ID: 16475
// Function ID: 16476
// Dependencies: [16467, 16466, 16474]

// Module 16475
import _mod16466 from "module_16466" /* 16466 */;
import _mod16467 from "module_16467" /* 16467 */;
import _mod16474 from "module_16474" /* 16474 */;


export default (arg0, arg1) => {
  if ("string" === arg1) {
    const toString = arg0.toString;
    if (_mod16467(toString)) {
      const tmpResult = _mod16466;
      const tmp4 = _mod16474(toString, arg0);
      if (!tmpResult(tmp4)) {
        return tmp4;
      }
    }
  }
  const valueOf = arg0.valueOf;
  if (_mod16467(valueOf)) {
    const tmp5Result = _mod16466;
    const tmp8 = _mod16474(valueOf, arg0);
    if (!tmp5Result(tmp8)) {
      return tmp8;
    }
  }
  if ("string" !== arg1) {
    const toString2 = arg0.toString;
    if (_mod16467(toString2)) {
      const tmp5Result2 = _mod16466;
      const tmp10 = _mod16474(toString2, arg0);
      if (!tmp5Result2(tmp10)) {
        return tmp10;
      }
    }
  }
  const tmp11 = new TypeError("Can't convert object to primitive value");
  throw tmp11;
};
