// Module ID: 16687
// Function ID: 16688
// Dependencies: [16688, 16636, 16632, 16633, 16652, 16689, 16690, 16655]

// Module 16687
import _mod16632 from "module_16632" /* 16632 */;
import _mod16633 from "module_16633" /* 16633 */;
import _mod16636 from "module_16636" /* 16636 */;
import _mod16652 from "module_16652" /* 16652 */;
import _mod16655 from "module_16655" /* 16655 */;
import _mod16689 from "module_16689" /* 16689 */;
import _mod16690 from "module_16690" /* 16690 */;
import prop from "module_16688" /* 16688 */;

let closure_5 = _mod16636("".slice);
let closure_6 = _mod16636("".replace);
let closure_7 = _mod16636([].join);
let tmp = _mod16632 && !_mod16633(() => 8 !== defineProperty(() => {

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
  const tmp10 = _mod16652(toString, "name");
  let tmp11 = !tmp10;
  if (tmp10) {
    tmp11 = _mod16689.CONFIGURABLE && toString.name !== text2;
    _mod16689.CONFIGURABLE && toString.name !== text2;
  }
  if (tmp11) {
    if (_mod16632) {
      const obj = { value: text2, configurable: true };
      defineProperty(toString, "name", obj);
    } else {
      toString.name = text2;
    }
  }
  const tmp15 = closure_8 && arg2 && tmp8(16652)(arg2, "arity") && toString.length !== arg2.arity;
  if (tmp15) {
    const obj2 = { value: arg2.arity };
    defineProperty(toString, "length", obj2);
  }
  try {
    if (arg2) {
      if (_mod16652(arg2, "constructor")) {
        if (arg2.constructor) {
          if (_mod16632) {
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
  const tmp8Result = _mod16690;
  const enforceResult = tmp8Result.enforce(toString);
  if (!_mod16652(enforceResult, "source")) {
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
  let source = _mod16655(this);
  if (source) {
    const tmpResult = _mod16690;
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
