// Module ID: 3624
// Function ID: 27869
// Name: setDefaultOptions
// Dependencies: []
// Exports: default

// Module 3624 (setDefaultOptions)
const _module = require(dependencyMap[0]);
if (!_module) {
  const obj = { default: _module };
  let tmp3 = obj;
} else {
  tmp3 = _module;
}

export default function setDefaultOptions(obj) {
  tmp3.default(1, arguments);
  obj = {};
  const defaultOptions = require(dependencyMap[1]).getDefaultOptions();
  for (const key10018 in defaultOptions) {
    let tmp4 = key10018;
    let _Object = Object;
    if (!hasOwnProperty.call(defaultOptions, key10018)) {
      continue;
    } else {
      obj[key10018] = defaultOptions[key10018];
      // continue
    }
    continue;
  }
  for (const key10022 in arg0) {
    let tmp5 = key10022;
    let _Object2 = Object;
    if (!hasOwnProperty2.call(arg0, key10022)) {
      continue;
    } else {
      if (undefined === arg0[key10022]) {
        delete r2[r11];
        // continue
      } else {
        obj[key10022] = arg0[key10022];
        // continue
      }
      continue;
    }
    continue;
  }
  require(dependencyMap[1]).setDefaultOptions(obj);
};
export default exports.default;
