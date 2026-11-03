// Module ID: 5635
// Function ID: 5636
// Name: _objectWithoutPropertiesLoose
// Dependencies: []

// Module 5635 (_objectWithoutPropertiesLoose)
let hasOwnProperty;


export default function _objectWithoutPropertiesLoose(obj, arr) {
  if (null == obj) {
    return {};
  } else {
    obj = {};
    for (const key10007 in obj) {
      hasOwnProperty = {}.hasOwnProperty;
      if (!hasOwnProperty.call(obj, key10007)) {
        continue;
      } else {
        if (-1 !== arr.indexOf(key10007)) {
          continue;
        } else {
          obj[key10007] = obj[key10007];
          continue;
        }
        continue;
      }
      continue;
    }
    return obj;
  }
};
