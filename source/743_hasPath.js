// Module ID: 743
// Function ID: 8785
// Name: hasPath
// Dependencies: []

// Module 743 (hasPath)

export default function hasPath(arg0, arg1, arg2) {
  let tmp2;
  const arr = require(dependencyMap[0])(arg1, arg0);
  let tmp = arg0;
  let num = 0;
  let arr2 = arg0;
  let num2 = 0;
  let flag = false;
  if (0 < arr.length) {
    while (true) {
      let tmp3 = require;
      let tmp4 = dependencyMap;
      let tmp5 = require(dependencyMap[1])(arr[num]);
      let tmp6 = null != tmp && arg2(tmp, tmp5);
      arr2 = tmp;
      num2 = num;
      tmp2 = tmp5;
      flag = tmp6;
      if (!tmp6) {
        break;
      } else {
        tmp = tmp[tmp5];
        num = num + 1;
        arr2 = tmp;
        flag = tmp6;
        tmp2 = tmp5;
        num2 = num;
        if (num >= length) {
          break;
        }
      }
    }
  }
  let tmp7 = flag;
  if (!flag) {
    tmp7 = flag;
    if (num2 + 1 == length) {
      let num3 = 0;
      if (null != arr2) {
        num3 = arr2.length;
      }
      let tmp9 = !tmp8;
      if (!!num3) {
        tmp9 = require(dependencyMap[2])(num3);
      }
      if (tmp9) {
        tmp9 = require(dependencyMap[3])(tmp2, num3);
      }
      if (tmp9) {
        let tmp16 = require(dependencyMap[4])(arr2);
        if (!tmp16) {
          tmp16 = require(dependencyMap[5])(arr2);
        }
        tmp9 = tmp16;
      }
      tmp7 = tmp9;
    }
  }
  return tmp7;
};
