// Module ID: 15382
// Function ID: 15383
// Dependencies: [15383, 15331, 15327, 15328, 15347, 15384, 15385, 15350]

// Module 15382
import _mod15327 from "module_15327" /* 15327 */;
import _mod15328 from "module_15328" /* 15328 */;
import _mod15331 from "module_15331" /* 15331 */;
import _mod15347 from "module_15347" /* 15347 */;
import _mod15350 from "module_15350" /* 15350 */;
import _mod15384 from "module_15384" /* 15384 */;
import _mod15385 from "module_15385" /* 15385 */;
import prop from "module_15383" /* 15383 */;

let closure_5 = _mod15331("".slice);
let closure_6 = _mod15331("".replace);
let closure_7 = _mod15331([].join);
let tmp = _mod15327 && !_mod15328(() => 8 !== defineProperty(() => {

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
  const tmp10 = _mod15347(toString, "name");
  let tmp11 = !tmp10;
  if (tmp10) {
    tmp11 = _mod15384.CONFIGURABLE && toString.name !== text2;
    _mod15384.CONFIGURABLE && toString.name !== text2;
  }
  if (tmp11) {
    if (_mod15327) {
      const obj = { value: text2, configurable: true };
      defineProperty(toString, "name", obj);
    } else {
      toString.name = text2;
    }
  }
  const tmp15 = closure_8 && arg2 && tmp8(15347)(arg2, "arity") && toString.length !== arg2.arity;
  if (tmp15) {
    const obj2 = { value: arg2.arity };
    defineProperty(toString, "length", obj2);
  }
  try {
    if (arg2) {
      if (_mod15347(arg2, "constructor")) {
        if (arg2.constructor) {
          if (_mod15327) {
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
  const tmp8Result = _mod15385;
  const enforceResult = tmp8Result.enforce(toString);
  if (!_mod15347(enforceResult, "source")) {
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
  let source = _mod15350(this);
  if (source) {
    const tmpResult = _mod15385;
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
