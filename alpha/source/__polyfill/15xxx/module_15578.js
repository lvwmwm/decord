// Module ID: 15578
// Function ID: 15579
// Dependencies: [15579, 15527, 15523, 15524, 15543, 15580, 15581, 15546]

// Module 15578
import _mod15523 from "module_15523" /* 15523 */;
import _mod15524 from "module_15524" /* 15524 */;
import _mod15527 from "module_15527" /* 15527 */;
import _mod15543 from "module_15543" /* 15543 */;
import _mod15546 from "module_15546" /* 15546 */;
import _mod15580 from "module_15580" /* 15580 */;
import _mod15581 from "module_15581" /* 15581 */;
import prop from "module_15579" /* 15579 */;

let closure_5 = _mod15527("".slice);
let closure_6 = _mod15527("".replace);
let closure_7 = _mod15527([].join);
let tmp = _mod15523 && !_mod15524(() => 8 !== defineProperty(() => {

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
  const tmp10 = _mod15543(toString, "name");
  let tmp11 = !tmp10;
  if (tmp10) {
    tmp11 = _mod15580.CONFIGURABLE && toString.name !== text2;
    _mod15580.CONFIGURABLE && toString.name !== text2;
  }
  if (tmp11) {
    if (_mod15523) {
      const obj = { value: text2, configurable: true };
      defineProperty(toString, "name", obj);
    } else {
      toString.name = text2;
    }
  }
  const tmp15 = closure_8 && arg2 && tmp8(15543)(arg2, "arity") && toString.length !== arg2.arity;
  if (tmp15) {
    const obj2 = { value: arg2.arity };
    defineProperty(toString, "length", obj2);
  }
  try {
    if (arg2) {
      if (_mod15543(arg2, "constructor")) {
        if (arg2.constructor) {
          if (_mod15523) {
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
  const tmp8Result = _mod15581;
  const enforceResult = tmp8Result.enforce(toString);
  if (!_mod15543(enforceResult, "source")) {
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
  let source = _mod15546(this);
  if (source) {
    const tmpResult = _mod15581;
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
