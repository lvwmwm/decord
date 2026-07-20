// Module ID: 1308
// Function ID: 15239
// Name: reflectionMergePartial
// Dependencies: []

// Module 1308 (reflectionMergePartial)
arg5.reflectionMergePartial = function reflectionMergePartial(arg0, reflectionCreateResult, arr) {
  const iter = arg0.fields[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let obj2 = nextResult;
    let localName = nextResult.localName;
    if (nextResult.oneof) {
      let tmp6 = arr;
      let tmp7 = nextResult;
      let tmp8 = arr[obj2.oneof];
      let tmp9 = tmp8;
      let oneofKind;
      if (null != tmp8) {
        let tmp11 = tmp8;
        oneofKind = tmp9.oneofKind;
      }
      if (null == oneofKind) {
        // continue
      } else {
        let tmp52 = tmp8;
        let tmp53 = localName;
        let tmp54 = tmp9[localName];
        arr = tmp54;
        let tmp55 = reflectionCreateResult;
        let tmp56 = nextResult;
        let tmp57 = reflectionCreateResult[obj2.oneof];
        let tmp2 = tmp57;
        tmp57.oneofKind = tmp9.oneofKind;
        if (null == tmp54) {
          let tmp50 = tmp2;
          let tmp51 = localName;
          delete r22[r21];
          // continue
        }
      }
    } else {
      tmp2 = reflectionCreateResult;
      let tmp3 = arr;
      let tmp4 = localName;
      let tmp5 = arr[localName];
      arr = tmp5;
      continue;
    }
    let tmp12 = nextResult;
    if (obj2.repeat) {
      let tmp13 = tmp2;
      let tmp14 = localName;
      let tmp15 = arr;
      tmp2[localName].length = arr.length;
    }
    let tmp16 = nextResult;
    let kind = obj2.kind;
    if ("scalar" !== kind) {
      if ("enum" !== kind) {
        if ("message" === kind) {
          let tmp21 = nextResult;
          let TResult = obj2.T();
          if (obj2.repeat) {
            let num = 0;
            let tmp33 = arr;
            if (0 < arr.length) {
              do {
                let tmp34 = tmp2;
                let tmp35 = localName;
                let tmp36 = num;
                let tmp37 = TResult;
                let tmp38 = arr;
                tmp2[localName][num] = TResult.create(arr[num]);
                let sum = num + 1;
                num = sum;
                let length = arr.length;
              } while (sum < length);
            }
          } else {
            let tmp22 = tmp2;
            let tmp23 = localName;
            if (undefined === tmp2[localName]) {
              let tmp29 = tmp2;
              let tmp30 = localName;
              let tmp31 = TResult;
              let tmp32 = arr;
              tmp2[localName] = TResult.create(arr);
            } else {
              let tmp24 = TResult;
              let tmp25 = tmp2;
              let tmp26 = localName;
              let tmp27 = arr;
              let mergePartialResult = TResult.mergePartial(tmp2[localName], arr);
            }
          }
        } else if ("map" === kind) {
          let tmp58 = nextResult;
          let kind2 = obj2.V.kind;
          if ("scalar" !== kind2) {
            if ("enum" !== kind2) {
              if ("message" === kind2) {
                let tmp59 = nextResult;
                let V = obj2.V;
                let TResult1 = V.T();
                let _Object2 = Object;
                let tmp60 = arr;
                let keys = Object.keys(arr);
                let tmp62 = keys;
                for (const item10047 of keys) {
                  let tmp63 = tmp2;
                  let tmp64 = localName;
                  let tmp65 = TResult1;
                  let tmp66 = arr;
                  tmp2[localName][item10047] = TResult1.create(arr[item10047]);
                }
              }
            }
          }
          let _Object = Object;
          let tmp17 = tmp2;
          let tmp18 = localName;
          let tmp19 = arr;
          let merged = Object.assign(tmp2[localName], arr);
        }
      }
      // continue
    }
    let tmp40 = nextResult;
    if (obj2.repeat) {
      let num2 = 0;
      let tmp44 = arr;
      if (0 < arr.length) {
        do {
          let tmp45 = tmp2;
          let tmp46 = localName;
          let tmp47 = num2;
          let tmp48 = arr;
          tmp2[localName][num2] = arr[num2];
          let sum1 = num2 + 1;
          num2 = sum1;
          let length2 = arr.length;
        } while (sum1 < length2);
      }
    } else {
      let tmp41 = tmp2;
      let tmp42 = localName;
      let tmp43 = arr;
      tmp2[localName] = arr;
    }
  }
};
