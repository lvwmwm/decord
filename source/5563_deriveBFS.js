// Module ID: 5563
// Function ID: 47282
// Name: deriveBFS
// Dependencies: []

// Module 5563 (deriveBFS)
function deriveBFS(arg0) {
  const obj = {};
  const keys = Object.keys(require(dependencyMap[0]));
  for (let num = 0; num < length; num = num + 1) {
    obj[keys[num]] = {};
  }
  const items = [arg0];
  obj[arg0].distance = 0;
  while (items.length) {
    let arr = items.pop();
    let _Object = Object;
    let tmp2 = require;
    let tmp3 = dependencyMap;
    let keys1 = Object.keys(require(dependencyMap[0])[arr]);
    let length2 = keys1.length;
    let num2 = 0;
    if (0 < length2) {
      do {
        let tmp4 = keys1[num2];
        let tmp5 = obj[tmp4];
        if (-1 === tmp5.distance) {
          tmp5.distance = obj[arr].distance + 1;
          tmp5.parent = arr;
          arr = items.unshift(tmp4);
        }
        num2 = num2 + 1;
        let tmp7 = tmp4;
        let tmp8 = tmp5;
      } while (num2 < length2);
    }
  }
  return obj;
}
function link(arg0, arg1) {
  const require = arg0;
  const dependencyMap = arg1;
  return (arg0) => arg1(arg0(arg0));
}
function wrapConversion(arg0, arg1) {
  let parent2;
  const items = [arg1[arg0].parent, arg0];
  let tmp = require(dependencyMap[0])[arg1[arg0].parent][arg0];
  let parent = arg1[arg0].parent;
  let tmp2 = tmp;
  if (arg1[parent].parent) {
    do {
      let arr = items.unshift(arg1[parent].parent);
      let tmp4 = closure_3;
      let tmp5 = closure_0;
      let tmp6 = closure_1;
      tmp = closure_3(closure_0(closure_1[0])[arg1[parent].parent][parent], tmp);
      parent = arg1[parent].parent;
      tmp2 = tmp;
      parent2 = arg1[parent].parent;
    } while (parent2);
  }
  tmp2.conversion = items;
  return tmp2;
}

export default (arg0) => {
  const tmp = deriveBFS(arg0);
  const obj = {};
  const keys = Object.keys(tmp);
  for (let num = 0; num < length; num = num + 1) {
    let tmp2 = keys[num];
    if (null !== tmp[tmp2].parent) {
      let tmp3 = wrapConversion;
      obj[tmp2] = wrapConversion(tmp2, tmp);
    }
  }
  return obj;
};
