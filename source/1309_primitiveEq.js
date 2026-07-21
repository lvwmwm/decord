// Module ID: 1309
// Function ID: 15246
// Name: primitiveEq
// Dependencies: []

// Module 1309 (primitiveEq)
function primitiveEq(arg0, arg1, arg2) {
  if (arg1 === arg2) {
    return true;
  } else if (arg0 !== arg1(arg6[0]).ScalarType.BYTES) {
    return false;
  } else if (arg1.length !== arg2.length) {
    return false;
  } else {
    let num2 = 0;
    if (0 < arg1.length) {
      while (arg1[num2] == arg2[num2]) {
        num2 = num2 + 1;
      }
      return false;
    }
    return true;
  }
}
function repeatedPrimitiveEq(arg0, arg1, arg2) {
  if (arg1.length !== arg2.length) {
    return false;
  } else {
    let num = 0;
    if (0 < arg1.length) {
      while (primitiveEq(arg0, arg1[num], arg2[num])) {
        num = num + 1;
      }
      return false;
    }
    return true;
  }
}
function repeatedMsgEq(TResult, arg1, arg2) {
  if (arg1.length !== arg2.length) {
    return false;
  } else {
    let num = 0;
    if (0 < arg1.length) {
      while (TResult.equals(arg1[num], arg2[num])) {
        num = num + 1;
      }
      return false;
    }
    return true;
  }
}
arg5.reflectionEquals = function reflectionEquals(fields, arg1, arg2) {
  if (arg1 === arg2) {
    return true;
  } else {
    if (tmp) {
      if (tmp2) {
        fields = fields.fields;
        const iter = fields[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let obj = nextResult;
          let localName = nextResult.localName;
          let tmp65 = arg1;
          if (nextResult.oneof) {
            let tmp10 = nextResult;
            let tmp11 = localName;
            let tmp9 = tmp[obj.oneof][localName];
          } else {
            let tmp8 = localName;
            tmp9 = tmp[localName];
          }
          let tmp12 = tmp9;
          let tmp13 = nextResult;
          let tmp14 = arg2;
          if (obj.oneof) {
            let tmp17 = nextResult;
            let tmp18 = localName;
            let tmp16 = tmp2[obj.oneof][localName];
          } else {
            let tmp15 = localName;
            tmp16 = tmp2[localName];
          }
          let tmp19 = tmp16;
          let tmp20 = nextResult;
          let kind = obj.kind;
          if ("enum" !== kind) {
            if ("scalar" !== kind) {
              if ("map" === kind) {
                let tmp29 = nextResult;
                if ("message" == obj.V.kind) {
                  let tmp41 = repeatedMsgEq;
                  let tmp42 = nextResult;
                  let V = obj.V;
                  let tmp44 = values;
                  let tmp45 = tmp9;
                  let TResult = V.T();
                  let tmp47 = values;
                  let tmp48 = tmp16;
                  let tmp46 = values(tmp12);
                  let tmp30Result = repeatedMsgEq(TResult, tmp46, values(tmp19));
                } else {
                  let tmp31 = nextResult;
                  let tmp30 = repeatedPrimitiveEq;
                  if ("enum" == obj.V.kind) {
                    let tmp33 = arg1;
                    let tmp34 = arg6;
                    let T = arg1(arg6[0]).ScalarType.INT32;
                  } else {
                    let tmp32 = nextResult;
                    T = obj.V.T;
                  }
                  let tmp35 = values;
                  let tmp36 = tmp9;
                  let tmp38 = values;
                  let tmp39 = tmp16;
                  let tmp37 = values(tmp12);
                  tmp30Result = tmp30(T, tmp37, values(tmp19));
                }
                if (!tmp30Result) {
                  iter.return();
                  let flag3 = false;
                  return false;
                }
              } else if ("message" === kind) {
                let tmp66 = nextResult;
                let TResult1 = obj.T();
                if (obj.repeat) {
                  let tmp25 = repeatedMsgEq;
                  let tmp26 = TResult1;
                  let tmp27 = tmp9;
                  let tmp28 = tmp16;
                  let equalsResult = repeatedMsgEq(TResult1, tmp12, tmp19);
                } else {
                  let tmp21 = TResult1;
                  let tmp22 = tmp9;
                  let tmp23 = tmp16;
                  equalsResult = TResult1.equals(tmp12, tmp19);
                }
                if (!equalsResult) {
                  iter.return();
                  let flag2 = false;
                  return false;
                }
              }
            }
            // continue
          }
          let tmp49 = nextResult;
          if ("enum" == obj.kind) {
            let tmp51 = arg1;
            let tmp52 = arg6;
            let T2 = arg1(arg6[0]).ScalarType.INT32;
          } else {
            let tmp50 = nextResult;
            T2 = obj.T;
          }
          let tmp53 = T2;
          let tmp54 = nextResult;
          if (obj.repeat) {
            let tmp60 = repeatedPrimitiveEq;
            let tmp61 = T2;
            let tmp62 = tmp9;
            let tmp63 = tmp16;
            let tmp59 = repeatedPrimitiveEq(tmp53, tmp12, tmp19);
          } else {
            let tmp55 = primitiveEq;
            let tmp56 = T2;
            let tmp57 = tmp9;
            let tmp58 = tmp16;
            tmp59 = primitiveEq(tmp53, tmp12, tmp19);
          }
          if (!tmp59) {
            iter.return();
            let flag4 = false;
            return false;
          }
        }
        return true;
      }
    }
    return false;
  }
};
