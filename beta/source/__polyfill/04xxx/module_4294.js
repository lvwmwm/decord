// Module ID: 4294
// Function ID: 4295
// Dependencies: [3878, 3882]
// Exports: default

// Module 4294
import _mod3882 from "module_3882" /* 3882 */;
import requiredArgs_mod from "requiredArgs" /* 3878 */;

let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  let obj = { default: requiredArgs };
  let tmp3 = obj;
} else {
  tmp3 = requiredArgs;
}
requiredArgs = tmp3;

export default function setDefaultOptions(obj) {
  requiredArgs.default(1, arguments);
  obj = {};
  const defaultOptions = _mod3882.getDefaultOptions();
  for (const key10017 in defaultOptions) {
    let _Object = Object;
    hasOwnProperty = Object.prototype.hasOwnProperty;
    let call = hasOwnProperty.call;
    if (typeof call === "unknown") {
      let hasOwnPropertyResult = hasOwnProperty(key10017);
    } else {
      hasOwnPropertyResult = call(defaultOptions, key10017);
    }
    if (!hasOwnPropertyResult) {
      continue;
    } else {
      obj[key10017] = defaultOptions[key10017];
      continue;
    }
    continue;
  }
  for (const key10023 in arg0) {
    let _Object2 = Object;
    let call2 = hasOwnProperty2.call;
    if (typeof call2 === "unknown") {
      let hasOwnProperty2Result = hasOwnProperty2(key10023);
    } else {
      hasOwnProperty2Result = call2(arg0, key10023);
    }
    if (!hasOwnProperty2Result) {
      continue;
    } else {
      if (undefined === arg0[key10023]) {
        delete tmp[tmp2];
        continue;
      } else {
        obj[key10023] = arg0[key10023];
        continue;
      }
      continue;
    }
    continue;
  }
  _mod3882.setDefaultOptions(obj);
};
export default exports.default;
