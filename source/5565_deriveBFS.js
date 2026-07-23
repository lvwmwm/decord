// Module ID: 5565
// Function ID: 47321
// Name: deriveBFS
// Dependencies: [5563]

// Module 5565 (deriveBFS)
function deriveBFS(arg0) {
  const obj = {};
  const keys = Object.keys(require(5563) /* keys */);
  for (let num = 0; num < length; num = num + 1) {
    obj[keys[num]] = { distance: -1, parent: null };
  }
  const items = [arg0];
  obj[arg0].distance = 0;
  while (items.length) {
    let arr = items.pop();
    let _Object = Object;
    let tmp2 = require;
    let tmp3 = dependencyMap;
    let keys1 = Object.keys(require(5563) /* keys */[arr]);
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
  let closure_0 = arg0;
  let closure_1 = arg1;
  return (arg0) => callback2(callback(arg0));
}
function wrapConversion(arg0, arg1) {
  let parent2;
  const items = [arg1[arg0].parent, arg0];
  let tmp = require(5563) /* keys */[arg1[arg0].parent][arg0];
  let parent = arg1[arg0].parent;
  let tmp2 = tmp;
  if (arg1[parent].parent) {
    do {
      let arr = items.unshift(arg1[parent].parent);
      let tmp4 = link;
      let tmp5 = require;
      let tmp6 = dependencyMap;
      tmp = link(require(5563) /* keys */[arg1[parent].parent][parent], tmp);
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
