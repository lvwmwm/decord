// Module ID: 4838
// Function ID: 4839
// Name: setDefaultOptions
// Dependencies: [4422, 4426]
// Exports: default

// Module 4838 (setDefaultOptions)
import _mod4426 from "module_4426" /* 4426 */;
import requiredArgs_mod from "requiredArgs" /* 4422 */;

let hasOwnProperty;

let tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  let obj = { default: requiredArgs };
  tmp3 = obj;
} else {
  tmp3 = requiredArgs;
}
requiredArgs = tmp3;

export default function setDefaultOptions(obj) {
  requiredArgs.default(1, arguments);
  obj = {};
  const defaultOptions = _mod4426.getDefaultOptions();
  for (const key10017 in defaultOptions) {
    let _Object = Object;
    hasOwnProperty = Object.prototype.hasOwnProperty;
    if (!hasOwnProperty.call(defaultOptions, key10017)) {
      continue;
    } else {
      obj[key10017] = defaultOptions[key10017];
      continue;
    }
    continue;
  }
  for (const key10023 in obj) {
    let _Object2 = Object;
    let hasOwnProperty2 = Object.prototype.hasOwnProperty;
    let tmp5 = key10023;
    if (!hasOwnProperty2.call(obj, key10023)) {
      continue;
    } else {
      if (undefined === obj[key10023]) {
        delete obj[tmp5];
        continue;
      } else {
        obj[key10023] = obj[key10023];
        continue;
      }
      continue;
    }
    continue;
  }
  _mod4426.setDefaultOptions(obj);
};
