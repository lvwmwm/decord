// Module ID: 15499
// Function ID: 15500
// Dependencies: [15491, 15490, 15498]

// Module 15499
import _mod15490 from "module_15490" /* 15490 */;
import _mod15491 from "module_15491" /* 15491 */;
import _mod15498 from "module_15498" /* 15498 */;


export default (arg0, arg1) => {
  if ("string" === arg1) {
    const toString = arg0.toString;
    if (_mod15491(toString)) {
      const tmpResult = _mod15490;
      const tmp4 = _mod15498(toString, arg0);
      if (!tmpResult(tmp4)) {
        return tmp4;
      }
    }
  }
  const valueOf = arg0.valueOf;
  if (_mod15491(valueOf)) {
    const tmp5Result = _mod15490;
    const tmp8 = _mod15498(valueOf, arg0);
    if (!tmp5Result(tmp8)) {
      return tmp8;
    }
  }
  if ("string" !== arg1) {
    const toString2 = arg0.toString;
    if (_mod15491(toString2)) {
      const tmp5Result2 = _mod15490;
      const tmp10 = _mod15498(toString2, arg0);
      if (!tmp5Result2(tmp10)) {
        return tmp10;
      }
    }
  }
  const tmp11 = new TypeError("Can't convert object to primitive value");
  throw tmp11;
};
