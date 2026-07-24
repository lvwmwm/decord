// Module ID: 1308
// Function ID: 15246
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
      let tmp8 = arr;
      let tmp9 = nextResult;
      let tmp10 = arr[obj2.oneof];
      let tmp11 = tmp10;
      let oneofKind;
      if (null != tmp10) {
        let tmp13 = tmp10;
        oneofKind = tmp11.oneofKind;
      }
      if (null == oneofKind) {
        continue;
      } else {
        let tmp54 = tmp10;
        let tmp55 = localName;
        let tmp56 = tmp11[localName];
        arr = tmp56;
        let tmp57 = reflectionCreateResult;
        let tmp58 = nextResult;
        let tmp59 = reflectionCreateResult[obj2.oneof];
        let tmp4 = tmp59;
        tmp59.oneofKind = tmp11.oneofKind;
        if (null == tmp56) {
          let tmp52 = tmp4;
          let tmp53 = localName;
          delete tmp2[tmp];
          continue;
        }
      }
    } else {
      tmp4 = reflectionCreateResult;
      let tmp5 = arr;
      let tmp6 = localName;
      let tmp7 = arr[localName];
      arr = tmp7;
      continue;
    }
    let tmp14 = nextResult;
    if (obj2.repeat) {
      let tmp15 = tmp4;
      let tmp16 = localName;
      let tmp17 = arr;
      tmp4[localName].length = arr.length;
    }
    let tmp18 = nextResult;
    let kind = obj2.kind;
    if ("scalar" !== kind) {
      if ("enum" !== kind) {
        if ("message" === kind) {
          let tmp23 = nextResult;
          let TResult = obj2.T();
          if (obj2.repeat) {
            let num = 0;
            let tmp35 = arr;
            if (0 < arr.length) {
              do {
                let tmp36 = tmp4;
                let tmp37 = localName;
                let tmp38 = num;
                let tmp39 = TResult;
                let tmp40 = arr;
                tmp4[localName][num] = TResult.create(arr[num]);
                sum = num + 1;
                num = sum;
                length = arr.length;
              } while (sum < length);
            }
          } else {
            let tmp24 = tmp4;
            let tmp25 = localName;
            if (undefined === tmp4[localName]) {
              let tmp31 = tmp4;
              let tmp32 = localName;
              let tmp33 = TResult;
              let tmp34 = arr;
              tmp4[localName] = TResult.create(arr);
            } else {
              let tmp26 = TResult;
              let tmp27 = tmp4;
              let tmp28 = localName;
              let tmp29 = arr;
              let mergePartialResult = TResult.mergePartial(tmp4[localName], arr);
            }
          }
        } else if ("map" === kind) {
          let tmp60 = nextResult;
          let kind2 = obj2.V.kind;
          if ("scalar" !== kind2) {
            if ("enum" !== kind2) {
              if ("message" === kind2) {
                let tmp61 = nextResult;
                let V = obj2.V;
                let TResult1 = V.T();
                let _Object2 = Object;
                let tmp62 = arr;
                let keys = Object.keys(arr);
                let tmp64 = keys;
                for (const item10047 of keys) {
                  let tmp65 = tmp4;
                  let tmp66 = localName;
                  let tmp67 = TResult1;
                  let tmp68 = arr;
                  tmp4[localName][item10047] = TResult1.create(arr[item10047]);
                  continue;
                }
              }
            }
          }
          let _Object = Object;
          let tmp19 = tmp4;
          let tmp20 = localName;
          let tmp21 = arr;
          let merged = Object.assign(tmp4[localName], arr);
        }
      }
      continue;
    }
    let tmp42 = nextResult;
    if (obj2.repeat) {
      let num2 = 0;
      let tmp46 = arr;
      if (0 < arr.length) {
        do {
          let tmp47 = tmp4;
          let tmp48 = localName;
          let tmp49 = num2;
          let tmp50 = arr;
          tmp4[localName][num2] = arr[num2];
          sum1 = num2 + 1;
          num2 = sum1;
          length2 = arr.length;
        } while (sum1 < length2);
      }
    } else {
      let tmp43 = tmp4;
      let tmp44 = localName;
      let tmp45 = arr;
      tmp4[localName] = arr;
    }
  }
};
