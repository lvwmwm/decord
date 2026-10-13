// Module ID: 14906
// Function ID: 14907
// Dependencies: [14898, 14897, 14905]

// Module 14906
import _mod14897 from "module_14897" /* 14897 */;
import _mod14898 from "module_14898" /* 14898 */;
import _mod14905 from "module_14905" /* 14905 */;


export default (arg0, arg1) => {
  if ("string" === arg1) {
    const toString = arg0.toString;
    if (_mod14898(toString)) {
      const tmpResult = _mod14897;
      const tmp4 = _mod14905(toString, arg0);
      if (!tmpResult(tmp4)) {
        return tmp4;
      }
    }
  }
  const valueOf = arg0.valueOf;
  if (_mod14898(valueOf)) {
    const tmp5Result = _mod14897;
    const tmp8 = _mod14905(valueOf, arg0);
    if (!tmp5Result(tmp8)) {
      return tmp8;
    }
  }
  if ("string" !== arg1) {
    const toString2 = arg0.toString;
    if (_mod14898(toString2)) {
      const tmp5Result2 = _mod14897;
      const tmp10 = _mod14905(toString2, arg0);
      if (!tmp5Result2(tmp10)) {
        return tmp10;
      }
    }
  }
  const tmp11 = new TypeError("Can't convert object to primitive value");
  throw tmp11;
};
