// Module ID: 13824
// Function ID: 13825
// Dependencies: [13816, 13815, 13823]

// Module 13824
import _mod13815 from "module_13815" /* 13815 */;
import _mod13816 from "module_13816" /* 13816 */;
import _mod13823 from "module_13823" /* 13823 */;


export default (arg0, arg1) => {
  if ("string" === arg1) {
    const toString = arg0.toString;
    if (_mod13816(toString)) {
      const tmpResult = _mod13815;
      const tmp4 = _mod13823(toString, arg0);
      if (!tmpResult(tmp4)) {
        return tmp4;
      }
    }
  }
  const valueOf = arg0.valueOf;
  if (_mod13816(valueOf)) {
    const tmp5Result = _mod13815;
    const tmp8 = _mod13823(valueOf, arg0);
    if (!tmp5Result(tmp8)) {
      return tmp8;
    }
  }
  if ("string" !== arg1) {
    const toString2 = arg0.toString;
    if (_mod13816(toString2)) {
      const tmp5Result2 = _mod13815;
      const tmp10 = _mod13823(toString2, arg0);
      if (!tmp5Result2(tmp10)) {
        return tmp10;
      }
    }
  }
  const tmp11 = new TypeError("Can't convert object to primitive value");
  throw tmp11;
};
