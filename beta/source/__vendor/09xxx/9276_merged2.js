// Module ID: 9276
// Function ID: 9277
// Name: merged2
// Dependencies: [4954]

// Module 9276 (merged2)
import module_4954_mod from "module_4954" /* 4954 */;

let arrayOf;
let items;
let oneOfType;
function validate(arg0, arg1, arg2) {
  const substr = [...arguments].slice();
  if (undefined !== arg0[arg1]) {
    const _console = console;
    const _HermesInternal = HermesInternal;
    console.warn("`" + arg1 + "` supplied to `" + arg2 + "` has been deprecated. " + "Use the transform prop instead.");
  }
  return number(arg1, arg2, ...substr);
}
const obj = {
  transform: arrayOf(oneOfType(items)),
  transformMatrix(arg0, arg1, arg2) {
    if (arg0[arg1]) {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error = new Error("The transformMatrix style property is deprecated. Use `transform: [{ matrix: ... }]` instead.");
      return error;
    }
  },
  decomposedMatrix(arg0, arg1, arg2) {
    if (arg0[arg1]) {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error = new Error("The decomposedMatrix style property is deprecated. Use `transform: [...]` instead.");
      return error;
    }
  },
  scaleX: validate,
  scaleY: validate,
  rotation: validate,
  translateX: validate,
  translateY: validate
};
let module_4954 = module_4954_mod;
arrayOf = module_4954.arrayOf;
module_4954 = module_4954_mod;
oneOfType = module_4954.oneOfType;
module_4954 = module_4954_mod;
items = [, , , , , , , , , , , ];
const obj2 = { perspective: module_4954.number };
items[0] = module_4954.shape(obj2);
module_4954 = module_4954_mod;
const obj3 = { rotate: module_4954.string };
items[1] = module_4954.shape(obj3);
module_4954 = module_4954_mod;
const obj4 = { rotateX: module_4954.string };
items[2] = module_4954.shape(obj4);
module_4954 = module_4954_mod;
const obj5 = { rotateY: module_4954.string };
items[3] = module_4954.shape(obj5);
module_4954 = module_4954_mod;
const obj6 = { rotateZ: module_4954.string };
items[4] = module_4954.shape(obj6);
module_4954 = module_4954_mod;
const obj7 = { scale: module_4954.number };
items[5] = module_4954.shape(obj7);
module_4954 = module_4954_mod;
const obj8 = { scaleX: module_4954.number };
items[6] = module_4954.shape(obj8);
module_4954 = module_4954_mod;
const obj9 = { scaleY: module_4954.number };
items[7] = module_4954.shape(obj9);
module_4954 = module_4954_mod;
const obj10 = { translateX: module_4954.number };
items[8] = module_4954.shape(obj10);
module_4954 = module_4954_mod;
const obj11 = { translateY: module_4954.number };
items[9] = module_4954.shape(obj11);
module_4954 = module_4954_mod;
const obj12 = { skewX: module_4954.string };
items[10] = module_4954.shape(obj12);
module_4954 = module_4954_mod;
const obj13 = { skewY: module_4954.string };
items[11] = module_4954.shape(obj13);
const number = module_4954.number;

export default obj;
