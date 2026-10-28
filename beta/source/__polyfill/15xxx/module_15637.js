// Module ID: 15637
// Function ID: 15638
// Dependencies: [15638, 15586, 15582, 15583, 15602, 15639, 15640, 15605]

// Module 15637
import _mod15582 from "module_15582" /* 15582 */;
import _mod15583 from "module_15583" /* 15583 */;
import _mod15586 from "module_15586" /* 15586 */;
import _mod15602 from "module_15602" /* 15602 */;
import _mod15605 from "module_15605" /* 15605 */;
import _mod15639 from "module_15639" /* 15639 */;
import _mod15640 from "module_15640" /* 15640 */;
import prop from "module_15638" /* 15638 */;

let closure_5 = _mod15586("".slice);
let closure_6 = _mod15586("".replace);
let closure_7 = _mod15586([].join);
let tmp = _mod15582 && !_mod15583(() => 8 !== defineProperty(() => {

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
  const tmp10 = _mod15602(toString, "name");
  let tmp11 = !tmp10;
  if (tmp10) {
    tmp11 = _mod15639.CONFIGURABLE && toString.name !== text2;
    _mod15639.CONFIGURABLE && toString.name !== text2;
  }
  if (tmp11) {
    if (_mod15582) {
      const obj = { value: text2, configurable: true };
      defineProperty(toString, "name", obj);
    } else {
      toString.name = text2;
    }
  }
  const tmp15 = closure_8 && arg2 && tmp8(15602)(arg2, "arity") && toString.length !== arg2.arity;
  if (tmp15) {
    const obj2 = { value: arg2.arity };
    defineProperty(toString, "length", obj2);
  }
  try {
    if (arg2) {
      if (_mod15602(arg2, "constructor")) {
        if (arg2.constructor) {
          if (_mod15582) {
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
  const tmp8Result = _mod15640;
  const enforceResult = tmp8Result.enforce(toString);
  if (!_mod15602(enforceResult, "source")) {
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
  let source = _mod15605(this);
  if (source) {
    const tmpResult = _mod15640;
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
