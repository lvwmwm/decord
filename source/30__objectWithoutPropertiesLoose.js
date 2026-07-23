// Module ID: 30
// Function ID: 1199
// Name: _objectWithoutPropertiesLoose
// Dependencies: []

// Module 30 (_objectWithoutPropertiesLoose)

export default function _objectWithoutPropertiesLoose(obj, arr) {
  if (null == obj) {
    return {};
  } else {
    obj = {};
    for (const key10007 in arg0) {
      let tmp2 = key10007;
      let hasOwnProperty = {}.hasOwnProperty;
      if (!hasOwnProperty.call(arg0, key10007)) {
        continue;
      } else {
        if (-1 !== arg1.indexOf(key10007)) {
          continue;
        } else {
          obj[key10007] = arg0[key10007];
          continue;
        }
        continue;
      }
      continue;
    }
    return obj;
  }
};
