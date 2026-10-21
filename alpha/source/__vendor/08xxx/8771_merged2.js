// Module ID: 8771
// Function ID: 8772
// Name: merged2
// Dependencies: [5000]

// Module 8771 (merged2)
import module_5000_mod from "module_5000" /* 5000 */;

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
let module_5000 = module_5000_mod;
arrayOf = module_5000.arrayOf;
module_5000 = module_5000_mod;
oneOfType = module_5000.oneOfType;
module_5000 = module_5000_mod;
items = [, , , , , , , , , , , ];
const obj2 = { perspective: module_5000.number };
items[0] = module_5000.shape(obj2);
module_5000 = module_5000_mod;
const obj3 = { rotate: module_5000.string };
items[1] = module_5000.shape(obj3);
module_5000 = module_5000_mod;
const obj4 = { rotateX: module_5000.string };
items[2] = module_5000.shape(obj4);
module_5000 = module_5000_mod;
const obj5 = { rotateY: module_5000.string };
items[3] = module_5000.shape(obj5);
module_5000 = module_5000_mod;
const obj6 = { rotateZ: module_5000.string };
items[4] = module_5000.shape(obj6);
module_5000 = module_5000_mod;
const obj7 = { scale: module_5000.number };
items[5] = module_5000.shape(obj7);
module_5000 = module_5000_mod;
const obj8 = { scaleX: module_5000.number };
items[6] = module_5000.shape(obj8);
module_5000 = module_5000_mod;
const obj9 = { scaleY: module_5000.number };
items[7] = module_5000.shape(obj9);
module_5000 = module_5000_mod;
const obj10 = { translateX: module_5000.number };
items[8] = module_5000.shape(obj10);
module_5000 = module_5000_mod;
const obj11 = { translateY: module_5000.number };
items[9] = module_5000.shape(obj11);
module_5000 = module_5000_mod;
const obj12 = { skewX: module_5000.string };
items[10] = module_5000.shape(obj12);
module_5000 = module_5000_mod;
const obj13 = { skewY: module_5000.string };
items[11] = module_5000.shape(obj13);
const number = module_5000.number;

export default obj;
