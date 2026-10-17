// Module ID: 15378
// Function ID: 15379
// Dependencies: [15379, 15327, 15323, 15324, 15343, 15380, 15381, 15346]

// Module 15378
import _mod15323 from "module_15323" /* 15323 */;
import _mod15324 from "module_15324" /* 15324 */;
import _mod15327 from "module_15327" /* 15327 */;
import _mod15343 from "module_15343" /* 15343 */;
import _mod15346 from "module_15346" /* 15346 */;
import _mod15380 from "module_15380" /* 15380 */;
import _mod15381 from "module_15381" /* 15381 */;
import prop from "module_15379" /* 15379 */;

let closure_5 = _mod15327("".slice);
let closure_6 = _mod15327("".replace);
let closure_7 = _mod15327([].join);
let tmp = _mod15323 && !_mod15324(() => 8 !== defineProperty(() => {

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
  const tmp10 = _mod15343(toString, "name");
  let tmp11 = !tmp10;
  if (tmp10) {
    tmp11 = _mod15380.CONFIGURABLE && toString.name !== text2;
    _mod15380.CONFIGURABLE && toString.name !== text2;
  }
  if (tmp11) {
    if (_mod15323) {
      const obj = { value: text2, configurable: true };
      defineProperty(toString, "name", obj);
    } else {
      toString.name = text2;
    }
  }
  const tmp15 = closure_8 && arg2 && tmp8(15343)(arg2, "arity") && toString.length !== arg2.arity;
  if (tmp15) {
    const obj2 = { value: arg2.arity };
    defineProperty(toString, "length", obj2);
  }
  try {
    if (arg2) {
      if (_mod15343(arg2, "constructor")) {
        if (arg2.constructor) {
          if (_mod15323) {
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
  const tmp8Result = _mod15381;
  const enforceResult = tmp8Result.enforce(toString);
  if (!_mod15343(enforceResult, "source")) {
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
  let source = _mod15346(this);
  if (source) {
    const tmpResult = _mod15381;
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
