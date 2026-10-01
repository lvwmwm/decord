// Module ID: 13846
// Function ID: 13847
// Dependencies: [13847, 13795, 13791, 13792, 13811, 13848, 13849, 13814]

// Module 13846
import _mod13791 from "module_13791" /* 13791 */;
import _mod13792 from "module_13792" /* 13792 */;
import _mod13795 from "module_13795" /* 13795 */;
import _mod13811 from "module_13811" /* 13811 */;
import _mod13814 from "module_13814" /* 13814 */;
import _mod13848 from "module_13848" /* 13848 */;
import _mod13849 from "module_13849" /* 13849 */;
import prop from "module_13847" /* 13847 */;

let closure_5 = _mod13795("".slice);
let closure_6 = _mod13795("".replace);
let closure_7 = _mod13795([].join);
let tmp = _mod13791 && !_mod13792(() => 8 !== defineProperty(() => {

}, "length", { value: 8 }).length);
let closure_8 = tmp;
const str = String(String);
let closure_9 = str.split("String");
const fn = (toString, toString2, arg2) => {
  let text = toString2;
  const tmp = String;
  if ("Symbol(" === closure_5(String(toString2), 0, 7)) {
    text = `${"[" + closure_6(tmp(toString2), /^Symbol\(([^)]*)\).*$/, "$1")}]`;
  }
  let text1 = text;
  const tmp4 = arg2 && arg2.getter;
  if (tmp4) {
    text1 = `get ${tmp2}`;
  }
  let text2 = text1;
  const tmp6 = arg2 && arg2.setter;
  if (tmp6) {
    text2 = `set ${tmp5}`;
  }
  const tmp10 = _mod13811(toString, "name");
  let tmp11 = !tmp10;
  if (tmp10) {
    tmp11 = _mod13848.CONFIGURABLE && toString.name !== text2;
    _mod13848.CONFIGURABLE && toString.name !== text2;
  }
  if (tmp11) {
    if (_mod13791) {
      const obj = { value: text2, configurable: true };
      defineProperty(toString, "name", obj);
    } else {
      toString.name = text2;
    }
  }
  const tmp15 = closure_8 && arg2 && tmp8(13811)(arg2, "arity") && toString.length !== arg2.arity;
  if (tmp15) {
    const obj2 = { value: arg2.arity };
    defineProperty(toString, "length", obj2);
  }
  try {
    if (arg2) {
      if (_mod13811(arg2, "constructor")) {
        if (arg2.constructor) {
          if (_mod13791) {
            defineProperty(toString, "prototype", { writable: false });
          }
        }
      }
    }
    if (toString.prototype) {
      toString.prototype = undefined;
    }
  } catch (err) {
  }
  const tmp8Result = _mod13849;
  const enforceResult = tmp8Result.enforce(toString);
  if (!_mod13811(enforceResult, "source")) {
    let str10 = "";
    const tmp21 = closure_7;
    const tmp22 = closure_9;
    if (typeof text2 === "string") {
      str10 = text2;
    }
    enforceResult.source = tmp21(tmp22, str10);
  }
  return toString;
};
function toString() {
  const self = this;
  let source = _mod13814(this);
  if (source) {
    const tmpResult = _mod13849;
    source = tmpResult.get(self).source;
  }
  if (!source) {
    source = prop(self);
  }
  return source;
}
fn(toString, "toString");
prototype.toString = toString;

export default fn;
