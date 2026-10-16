// Module ID: 14590
// Function ID: 14591
// Dependencies: [14582, 14581, 14589]

// Module 14590
import _mod14581 from "module_14581" /* 14581 */;
import _mod14582 from "module_14582" /* 14582 */;
import _mod14589 from "module_14589" /* 14589 */;


export default (arg0, arg1) => {
  if ("string" === arg1) {
    const toString = arg0.toString;
    if (_mod14582(toString)) {
      const tmpResult = _mod14581;
      const tmp4 = _mod14589(toString, arg0);
      if (!tmpResult(tmp4)) {
        return tmp4;
      }
    }
  }
  const valueOf = arg0.valueOf;
  if (_mod14582(valueOf)) {
    const tmp5Result = _mod14581;
    const tmp8 = _mod14589(valueOf, arg0);
    if (!tmp5Result(tmp8)) {
      return tmp8;
    }
  }
  if ("string" !== arg1) {
    const toString2 = arg0.toString;
    if (_mod14582(toString2)) {
      const tmp5Result2 = _mod14581;
      const tmp10 = _mod14589(toString2, arg0);
      if (!tmp5Result2(tmp10)) {
        return tmp10;
      }
    }
  }
  const tmp11 = new TypeError("Can't convert object to primitive value");
  throw tmp11;
};
