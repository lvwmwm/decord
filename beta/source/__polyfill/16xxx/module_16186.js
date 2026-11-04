// Module ID: 16186
// Function ID: 16187
// Dependencies: [16187, 16135, 16131, 16132, 16151, 16188, 16189, 16154]

// Module 16186
import _mod16131 from "module_16131" /* 16131 */;
import _mod16132 from "module_16132" /* 16132 */;
import _mod16135 from "module_16135" /* 16135 */;
import _mod16151 from "module_16151" /* 16151 */;
import _mod16154 from "module_16154" /* 16154 */;
import _mod16188 from "module_16188" /* 16188 */;
import _mod16189 from "module_16189" /* 16189 */;
import prop from "module_16187" /* 16187 */;

let closure_5 = _mod16135("".slice);
let closure_6 = _mod16135("".replace);
let closure_7 = _mod16135([].join);
let tmp = _mod16131 && !_mod16132(() => 8 !== defineProperty(() => {

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
  const tmp10 = _mod16151(toString, "name");
  let tmp11 = !tmp10;
  if (tmp10) {
    tmp11 = _mod16188.CONFIGURABLE && toString.name !== text2;
    _mod16188.CONFIGURABLE && toString.name !== text2;
  }
  if (tmp11) {
    if (_mod16131) {
      const obj = { value: text2, configurable: true };
      defineProperty(toString, "name", obj);
    } else {
      toString.name = text2;
    }
  }
  const tmp15 = closure_8 && arg2 && tmp8(16151)(arg2, "arity") && toString.length !== arg2.arity;
  if (tmp15) {
    const obj2 = { value: arg2.arity };
    defineProperty(toString, "length", obj2);
  }
  try {
    if (arg2) {
      if (_mod16151(arg2, "constructor")) {
        if (arg2.constructor) {
          if (_mod16131) {
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
  const tmp8Result = _mod16189;
  const enforceResult = tmp8Result.enforce(toString);
  if (!_mod16151(enforceResult, "source")) {
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
  let source = _mod16154(this);
  if (source) {
    const tmpResult = _mod16189;
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
