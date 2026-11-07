// Module ID: 16489
// Function ID: 16490
// Dependencies: [16490, 16438, 16434, 16435, 16454, 16491, 16492, 16457]

// Module 16489
import _mod16434 from "module_16434" /* 16434 */;
import _mod16435 from "module_16435" /* 16435 */;
import _mod16438 from "module_16438" /* 16438 */;
import _mod16454 from "module_16454" /* 16454 */;
import _mod16457 from "module_16457" /* 16457 */;
import _mod16491 from "module_16491" /* 16491 */;
import _mod16492 from "module_16492" /* 16492 */;
import prop from "module_16490" /* 16490 */;

let closure_5 = _mod16438("".slice);
let closure_6 = _mod16438("".replace);
let closure_7 = _mod16438([].join);
let tmp = _mod16434 && !_mod16435(() => 8 !== defineProperty(() => {

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
  const tmp10 = _mod16454(toString, "name");
  let tmp11 = !tmp10;
  if (tmp10) {
    tmp11 = _mod16491.CONFIGURABLE && toString.name !== text2;
    _mod16491.CONFIGURABLE && toString.name !== text2;
  }
  if (tmp11) {
    if (_mod16434) {
      const obj = { value: text2, configurable: true };
      defineProperty(toString, "name", obj);
    } else {
      toString.name = text2;
    }
  }
  const tmp15 = closure_8 && arg2 && tmp8(16454)(arg2, "arity") && toString.length !== arg2.arity;
  if (tmp15) {
    const obj2 = { value: arg2.arity };
    defineProperty(toString, "length", obj2);
  }
  try {
    if (arg2) {
      if (_mod16454(arg2, "constructor")) {
        if (arg2.constructor) {
          if (_mod16434) {
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
  const tmp8Result = _mod16492;
  const enforceResult = tmp8Result.enforce(toString);
  if (!_mod16454(enforceResult, "source")) {
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
  let source = _mod16457(this);
  if (source) {
    const tmpResult = _mod16492;
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
