// Module ID: 13848
// Function ID: 13849
// Dependencies: [13849, 13797, 13793, 13794, 13813, 13850, 13851, 13816]

// Module 13848
import _mod13793 from "module_13793" /* 13793 */;
import _mod13794 from "module_13794" /* 13794 */;
import _mod13797 from "module_13797" /* 13797 */;
import _mod13813 from "module_13813" /* 13813 */;
import _mod13816 from "module_13816" /* 13816 */;
import _mod13850 from "module_13850" /* 13850 */;
import _mod13851 from "module_13851" /* 13851 */;
import prop from "module_13849" /* 13849 */;

let closure_5 = _mod13797("".slice);
let closure_6 = _mod13797("".replace);
let closure_7 = _mod13797([].join);
let tmp = _mod13793 && !_mod13794(() => 8 !== defineProperty(() => {

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
  const tmp10 = _mod13813(toString, "name");
  let tmp11 = !tmp10;
  if (tmp10) {
    tmp11 = _mod13850.CONFIGURABLE && toString.name !== text2;
    _mod13850.CONFIGURABLE && toString.name !== text2;
  }
  if (tmp11) {
    if (_mod13793) {
      const obj = { value: text2, configurable: true };
      defineProperty(toString, "name", obj);
    } else {
      toString.name = text2;
    }
  }
  const tmp15 = closure_8 && arg2 && tmp8(13813)(arg2, "arity") && toString.length !== arg2.arity;
  if (tmp15) {
    const obj2 = { value: arg2.arity };
    defineProperty(toString, "length", obj2);
  }
  try {
    if (arg2) {
      if (_mod13813(arg2, "constructor")) {
        if (arg2.constructor) {
          if (_mod13793) {
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
  const tmp8Result = _mod13851;
  const enforceResult = tmp8Result.enforce(toString);
  if (!_mod13813(enforceResult, "source")) {
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
  let source = _mod13816(this);
  if (source) {
    const tmpResult = _mod13851;
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
