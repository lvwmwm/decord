// Module ID: 602
// Function ID: 7033
// Name: arrayLikeKeys
// Dependencies: []

// Module 602 (arrayLikeKeys)

export default function arrayLikeKeys(obj) {
  const tmp = require(dependencyMap[0])(obj);
  let tmp2 = !tmp;
  if (tmp2) {
    tmp2 = require(dependencyMap[1])(obj);
  }
  let tmp5 = !tmp && !tmp2;
  if (tmp5) {
    tmp5 = require(dependencyMap[2])(obj);
  }
  let tmp8 = !tmp && !tmp2 && !tmp5;
  if (tmp8) {
    tmp8 = require(dependencyMap[3])(obj);
  }
  let tmp11 = tmp;
  if (!tmp) {
    tmp11 = tmp2;
  }
  if (!tmp11) {
    tmp11 = tmp5;
  }
  if (!tmp11) {
    tmp11 = tmp8;
  }
  if (tmp11) {
    const _String = String;
    let items = require(dependencyMap[4])(obj.length, String);
  } else {
    items = [];
  }
  for (const key10047 in arg0) {
    let tmp27 = key10047;
    let tmp17 = !arg1;
    if (tmp17) {
      let tmp16 = closure_2;
      tmp17 = !closure_2.call(arg0, key10047);
    }
    if (!tmp17) {
      let tmp18 = tmp11;
      if (tmp11) {
        let tmp19 = "length" == key10047;
        if (!tmp19) {
          let tmp20 = tmp5;
          if (tmp5) {
            let tmp21 = "offset" == key10047;
            if (!tmp21) {
              tmp21 = "parent" == key10047;
            }
            tmp20 = tmp21;
          }
          tmp19 = tmp20;
        }
        if (!tmp19) {
          let tmp22 = tmp8;
          if (tmp8) {
            let tmp23 = "buffer" == key10047;
            if (!tmp23) {
              tmp23 = "byteLength" == key10047;
            }
            if (!tmp23) {
              tmp23 = "byteOffset" == key10047;
            }
            tmp22 = tmp23;
          }
          tmp19 = tmp22;
        }
        if (!tmp19) {
          let tmp24 = closure_0;
          let tmp25 = closure_1;
          tmp19 = closure_0(closure_1[5])(key10047, tmp15);
        }
        tmp18 = tmp19;
      }
      tmp17 = tmp18;
    }
    if (tmp17) {
      continue;
    } else {
      let arr = items.push(key10047);
      // continue
    }
    continue;
  }
  return items;
};
