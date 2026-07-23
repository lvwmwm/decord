// Module ID: 758
// Function ID: 8816
// Name: equalArrays
// Dependencies: [759, 762, 763]

// Module 758 (equalArrays)

export default function equalArrays(arg0, arg1, arg2, arg3, arg4, get) {
  const _require = arg2;
  const dependencyMap = arg3;
  let closure_2 = arg4;
  let closure_3 = get;
  if (arg0.length != arg1.length) {
    return false;
  }
  let value = get.get(arg0);
  value = get.get(arg1);
  if (value) {
    if (value) {
      return value == arg1 && value == arg0;
    }
  }
  let tmp7;
  if (2 & arg2) {
    tmp7 = _require(759);
    const prototype = tmp7.prototype;
    tmp7 = new tmp7();
  }
  let closure_4 = tmp7;
  const result = get.set(arg0, arg1);
  const result1 = get.set(arg1, arg0);
  let num2 = 0;
  let flag2 = true;
  if (0 < arg0.length) {
    let closure_5 = tmp12;
    while (!arg3) {
      if (tmp7) {
        let tmp33 = _require;
        let tmp34 = dependencyMap;
        flag2 = false;
      } else if (tmp12 !== tmp13) {
        let tmp28 = tmp12;
        let tmp29 = tmp13;
        let tmp30 = arg2;
        let tmp31 = arg3;
        let tmp32 = get;
        flag2 = false;
      }
      num2 = num2 + 1;
      flag2 = true;
    }
    if (tmp) {
      let tmp20 = arg3(tmp13, tmp12, num2, arg1, arg0, get);
    } else {
      tmp20 = arg3(tmp12, tmp13, num2, arg0, arg1, get);
    }
  }
  get.delete(arg0);
  get.delete(arg1);
  return flag2;
};
