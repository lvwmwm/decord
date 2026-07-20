// Module ID: 10348
// Function ID: 79895
// Name: getChildMapping
// Dependencies: []
// Exports: getChildMapping, mergeChildMappings

// Module 10348 (getChildMapping)
let closure_0 = importAll(dependencyMap[0]);
const result = arg1(dependencyMap[1]).fileFinishedImporting("../discord_common/js/packages/transition-group/TransitionChildMapping.tsx");

export const getChildMapping = function getChildMapping(children) {
  const obj = {};
  const React = obj;
  if (children) {
    const Children = React.Children;
    const mapped = Children.map(children, (arg0) => arg0);
    if (null != mapped) {
      const item = mapped.forEach((key) => {
        if (null != key.key) {
          obj[key] = key;
        }
      });
    }
  }
  return obj;
};
export const mergeChildMappings = function mergeChildMappings(children, childMapping) {
  let length2;
  let obj = children;
  obj = childMapping;
  if (children === undefined) {
    obj = {};
  }
  let closure_0 = obj;
  if (obj === undefined) {
    obj = {};
  }
  function getValueForKey(key10020) {
    if (obj.hasOwnProperty(key10020)) {
      let tmp2 = obj[key10020];
    } else {
      tmp2 = obj[key10020];
    }
    return tmp2;
  }
  obj = {};
  const items = [];
  let items1 = items;
  let arr3 = items;
  const keys = Object.keys();
  if (keys !== undefined) {
    arr3 = items1;
    while (keys[tmp] !== undefined) {
      let tmp7 = tmp4;
      if (obj.hasOwnProperty(tmp4)) {
        if (items1.length <= 0) {
          continue;
        } else {
          obj[tmp4] = tmp3;
          items1 = [];
          // continue
        }
        continue;
      } else {
        let arr = items1.push(tmp4);
        // continue
      }
      continue;
    }
  }
  const obj1 = {};
  for (const key10020 in obj) {
    let tmp8 = key10020;
    if (obj.hasOwnProperty(key10020)) {
      let num = 0;
      let num2 = 0;
      if (0 < obj[key10020].length) {
        do {
          obj1[obj[key10020][num]] = getValueForKey(obj[key10020][num]);
          num = num + 1;
          let tmp6 = num;
          let length = obj[key10020].length;
        } while (num < length);
      }
    }
    obj1[key10020] = getValueForKey(key10020);
  }
  let num3 = 0;
  if (0 < arr3.length) {
    do {
      obj1[arr3[num3]] = getValueForKey(arr3[num3]);
      num3 = num3 + 1;
      length2 = arr3.length;
    } while (num3 < length2);
  }
  return obj1;
};
