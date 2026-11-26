// Module ID: 15790
// Function ID: 15791
// Dependencies: [15791, 15739, 15735, 15736, 15755, 15792, 15793, 15758]

// Module 15790
import _mod15735 from "module_15735" /* 15735 */;
import _mod15736 from "module_15736" /* 15736 */;
import _mod15739 from "module_15739" /* 15739 */;
import _mod15755 from "module_15755" /* 15755 */;
import _mod15758 from "module_15758" /* 15758 */;
import _mod15792 from "module_15792" /* 15792 */;
import _mod15793 from "module_15793" /* 15793 */;
import prop from "module_15791" /* 15791 */;

let closure_5 = _mod15739("".slice);
let closure_6 = _mod15739("".replace);
let closure_7 = _mod15739([].join);
let tmp = _mod15735 && !_mod15736(() => 8 !== defineProperty(() => {

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
  const tmp10 = _mod15755(toString, "name");
  let tmp11 = !tmp10;
  if (tmp10) {
    tmp11 = _mod15792.CONFIGURABLE && toString.name !== text2;
    _mod15792.CONFIGURABLE && toString.name !== text2;
  }
  if (tmp11) {
    if (_mod15735) {
      const obj = { value: text2, configurable: true };
      defineProperty(toString, "name", obj);
    } else {
      toString.name = text2;
    }
  }
  const tmp15 = closure_8 && arg2 && tmp8(15755)(arg2, "arity") && toString.length !== arg2.arity;
  if (tmp15) {
    const obj2 = { value: arg2.arity };
    defineProperty(toString, "length", obj2);
  }
  try {
    if (arg2) {
      if (_mod15755(arg2, "constructor")) {
        if (arg2.constructor) {
          if (_mod15735) {
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
  const tmp8Result = _mod15793;
  const enforceResult = tmp8Result.enforce(toString);
  if (!_mod15755(enforceResult, "source")) {
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
  let source = _mod15758(this);
  if (source) {
    const tmpResult = _mod15793;
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
