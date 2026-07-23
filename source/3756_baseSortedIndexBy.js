// Module ID: 3756
// Function ID: 28682
// Name: baseSortedIndexBy
// Dependencies: [576]

// Module 3756 (baseSortedIndexBy)

export default function baseSortedIndexBy(arg0, arg1, arg2, arg3) {
  let num = 0;
  if (null != arg0) {
    num = arg0.length;
  }
  if (0 === num) {
    return 0;
  } else {
    const tmp24 = arg2(arg1);
    let num2 = 0;
    let tmp20 = num;
    let tmp21 = num;
    if (0 < num) {
      while (true) {
        let tmp = floor;
        let tmp2 = floor((num2 + tmp20) / 2);
        let tmp3 = arg2(arg0[tmp2]);
        let tmp4 = undefined !== tmp3;
        let tmp5 = null === tmp3;
        let tmp6 = tmp3 == tmp3;
        let tmp7 = require;
        let tmp8 = dependencyMap;
        let tmp9 = require(576) /* isSymbol */(tmp3);
        if (tmp25) {
          let tmp18 = arg3;
          if (!arg3) {
            tmp18 = tmp6;
          }
          let tmp10 = tmp18;
        } else if (undefined === tmp24) {
          let tmp16 = tmp6;
          if (tmp6) {
            let tmp17 = arg3;
            if (!arg3) {
              tmp17 = tmp4;
            }
            tmp16 = tmp17;
          }
          tmp10 = tmp16;
        } else if (null === tmp24) {
          let tmp14 = tmp6;
          if (tmp6) {
            tmp14 = tmp4;
          }
          if (tmp14) {
            let tmp15 = arg3;
            if (!arg3) {
              tmp15 = !tmp5;
            }
            tmp14 = tmp15;
          }
          tmp10 = tmp14;
        } else if (tmp28) {
          let tmp12 = tmp6;
          if (tmp6) {
            tmp12 = tmp4;
          }
          if (tmp12) {
            tmp12 = !tmp5;
          }
          if (tmp12) {
            let tmp13 = arg3;
            if (!arg3) {
              tmp13 = !tmp9;
            }
            tmp12 = tmp13;
          }
          tmp10 = tmp12;
        } else {
          tmp10 = !tmp5;
          if (!tmp5) {
            tmp10 = !tmp9;
          }
          if (tmp10) {
            break;
          }
        }
        let tmp19 = tmp2;
        if (tmp10) {
          num2 = tmp2 + 1;
          tmp19 = tmp20;
        }
        tmp20 = tmp19;
        tmp21 = tmp19;
      }
    }
    return min(tmp21, 4294967294);
  }
};
