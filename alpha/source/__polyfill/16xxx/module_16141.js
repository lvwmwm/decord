// Module ID: 16141
// Function ID: 16142
// Dependencies: [16142, 16090, 16086, 16087, 16106, 16143, 16144, 16109]

// Module 16141
import _mod16086 from "module_16086" /* 16086 */;
import _mod16087 from "module_16087" /* 16087 */;
import _mod16090 from "module_16090" /* 16090 */;
import _mod16106 from "module_16106" /* 16106 */;
import _mod16109 from "module_16109" /* 16109 */;
import _mod16143 from "module_16143" /* 16143 */;
import _mod16144 from "module_16144" /* 16144 */;
import prop from "module_16142" /* 16142 */;

let closure_5 = _mod16090("".slice);
let closure_6 = _mod16090("".replace);
let closure_7 = _mod16090([].join);
let tmp = _mod16086 && !_mod16087(() => 8 !== defineProperty(() => {

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
  const tmp10 = _mod16106(toString, "name");
  let tmp11 = !tmp10;
  if (tmp10) {
    tmp11 = _mod16143.CONFIGURABLE && toString.name !== text2;
    _mod16143.CONFIGURABLE && toString.name !== text2;
  }
  if (tmp11) {
    if (_mod16086) {
      const obj = { value: text2, configurable: true };
      defineProperty(toString, "name", obj);
    } else {
      toString.name = text2;
    }
  }
  const tmp15 = closure_8 && arg2 && tmp8(16106)(arg2, "arity") && toString.length !== arg2.arity;
  if (tmp15) {
    const obj2 = { value: arg2.arity };
    defineProperty(toString, "length", obj2);
  }
  try {
    if (arg2) {
      if (_mod16106(arg2, "constructor")) {
        if (arg2.constructor) {
          if (_mod16086) {
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
  const tmp8Result = _mod16144;
  const enforceResult = tmp8Result.enforce(toString);
  if (!_mod16106(enforceResult, "source")) {
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
  let source = _mod16109(this);
  if (source) {
    const tmpResult = _mod16144;
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
