// Module ID: 83
// Function ID: 1493
// Name: parseLength
// Dependencies: []

// Module 83 (parseLength)
function parseLength(arg0) {
  const match = /([+-]?\d*(\.\d+)?)([\w\W]+)?/g.exec(arg0);
  let NumberResult = null;
  if (match) {
    const _Number = Number;
    NumberResult = null;
    if (!Number.isNaN(match[1])) {
      if (null == match[3]) {
        if (null != match[3]) {
          const _Number2 = Number;
          NumberResult = Number(match[1]);
        } else {
          NumberResult = null;
        }
      } else {
        NumberResult = null;
      }
    }
  }
  return NumberResult;
}
arg5.default = function processBoxShadow(str) {
  const items = [];
  if (null == str) {
    return items;
  } else {
    let tmp = str;
    if ("string" === typeof str) {
      tmp = function parseBoxShadowString(str) {
        const items = [];
        const parts = str.split(/,(?![^()]*\))/);
        const mapped = parts.map((str) => str.trim());
        const found = mapped.filter((arg0) => "" !== arg0);
        const iter = found[Symbol.iterator]();
        while (iter !== undefined) {
          let obj = { 0: -536870861, 0: -299892737 };
          let tmp22;
          let flag = false;
          let num = 0;
          let parts1 = str.split(/\s+(?![^(]*\))/);
          let tmp32 = parts1;
          for (const item10029 of parts1) {
            let tmp33 = item10029;
            let tmp34 = closure_0;
            let tmp35 = closure_1;
            if (null == closure_0(closure_1[0])(item10029)) {
              let tmp6 = item10029;
              if ("inset" !== tmp33) {
                let tmp10 = num;
                if (0 === num) {
                  tmp22 = item10029;
                  let tmp23 = num;
                  num = num + 1;
                } else if (1 === num) {
                  let tmp19 = flag;
                  if (flag) {
                    obj2.return();
                    iter.return();
                    return [];
                  } else {
                    let tmp20 = item10029;
                    let tmp21 = num;
                    num = num + 1;
                  }
                } else if (2 === num) {
                  let tmp15 = flag;
                  if (flag) {
                    obj2.return();
                    iter.return();
                    return [];
                  } else {
                    let tmp16 = obj;
                    let tmp17 = item10029;
                    obj.blurRadius = tmp33;
                    let tmp18 = num;
                    num = num + 1;
                  }
                } else if (3 === num) {
                  let tmp11 = flag;
                  if (flag) {
                    obj2.return();
                    iter.return();
                    return [];
                  } else {
                    let tmp12 = obj;
                    let tmp13 = item10029;
                    obj.spreadDistance = tmp33;
                    let tmp14 = num;
                    num = num + 1;
                  }
                } else {
                  obj2.return();
                  iter.return();
                  return [];
                }
              } else {
                let tmp7 = obj;
                if (null != obj.inset) {
                  obj2.return();
                  iter.return();
                  return [];
                } else {
                  let tmp8 = tmp22;
                  if (null != tmp22) {
                    flag = true;
                  }
                  let tmp9 = obj;
                  obj.inset = true;
                }
              }
            } else {
              let tmp2 = obj;
              if (null != obj.color) {
                obj2.return();
                iter.return();
                return [];
              } else {
                let tmp3 = tmp22;
                if (null != tmp22) {
                  flag = true;
                }
                let tmp4 = obj;
                let tmp5 = item10029;
                obj.color = tmp33;
              }
            }
          }
          let tmp24 = tmp22;
          if (null != tmp22) {
            let tmp25 = tmp20;
            if (null != tmp20) {
              let tmp26 = obj;
              let tmp27 = tmp22;
              obj.offsetX = tmp22;
              let tmp28 = tmp20;
              obj.offsetY = tmp20;
              let tmp29 = items;
              let arr = items.push(obj);
              // continue
            }
          }
          iter.return();
          return [];
        }
        return items;
      }(str.replace(/\n/g, " "));
    }
    const iter = tmp[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp47 = nextResult;
      let obj = { 0: -536870861, 0: -299892737 };
      let tmp48 = nextResult;
      for (const key10025 in nextResult) {
        let tmp49 = key10025;
        if ("offsetX" === key10025) {
          let tmp36 = nextResult;
          if ("string" === typeof tmp47.offsetX) {
            let tmp38 = closure_2;
            let tmp39 = nextResult;
            let offsetX = closure_2(tmp47.offsetX);
          } else {
            let tmp37 = nextResult;
            offsetX = tmp47.offsetX;
          }
          if (null == offsetX) {
            iter.return();
            return [];
          } else {
            let tmp41 = obj;
            let tmp42 = offsetX;
            obj.offsetX = tmp40;
            // continue
          }
        } else {
          if ("offsetY" === key10025) {
            let tmp29 = nextResult;
            if ("string" === typeof tmp47.offsetY) {
              let tmp31 = closure_2;
              let tmp32 = nextResult;
              let offsetY = closure_2(tmp47.offsetY);
            } else {
              let tmp30 = nextResult;
              offsetY = tmp47.offsetY;
            }
            if (null == offsetY) {
              iter.return();
              return [];
            } else {
              let tmp34 = obj;
              let tmp35 = offsetY;
              obj.offsetY = tmp33;
              // continue
            }
          } else {
            if ("spreadDistance" === key10025) {
              let tmp22 = nextResult;
              if ("string" === typeof tmp47.spreadDistance) {
                let tmp24 = closure_2;
                let tmp25 = nextResult;
                let spreadDistance = closure_2(tmp47.spreadDistance);
              } else {
                let tmp23 = nextResult;
                spreadDistance = tmp47.spreadDistance;
              }
              if (null == spreadDistance) {
                iter.return();
                return [];
              } else {
                let tmp27 = obj;
                let tmp28 = spreadDistance;
                obj.spreadDistance = tmp26;
                // continue
              }
            } else {
              if ("blurRadius" === key10025) {
                let tmp14 = nextResult;
                if ("string" === typeof tmp47.blurRadius) {
                  let tmp16 = closure_2;
                  let tmp17 = nextResult;
                  let blurRadius = closure_2(tmp47.blurRadius);
                } else {
                  let tmp15 = nextResult;
                  blurRadius = tmp47.blurRadius;
                }
                let tmp18 = blurRadius;
                if (null != blurRadius) {
                  let tmp19 = blurRadius;
                  if (tmp18 >= 0) {
                    let tmp20 = obj;
                    let tmp21 = blurRadius;
                    obj.blurRadius = tmp18;
                    // continue
                  }
                }
                iter.return();
                return [];
              } else {
                if ("color" === key10025) {
                  let tmp7 = closure_0;
                  let tmp8 = closure_1;
                  let tmp9 = nextResult;
                  let tmp10 = closure_0(closure_1[0])(tmp47.color);
                  if (null == tmp10) {
                    iter.return();
                    return [];
                  } else {
                    let tmp12 = obj;
                    let tmp13 = tmp10;
                    obj.color = tmp11;
                    // continue
                  }
                } else {
                  if ("inset" !== key10025) {
                    continue;
                  } else {
                    let tmp5 = obj;
                    let tmp6 = nextResult;
                    obj.inset = tmp47.inset;
                    // continue
                  }
                  continue;
                }
                continue;
              }
              continue;
            }
            continue;
          }
          continue;
        }
        continue;
      }
      let tmp43 = items;
      let tmp44 = obj;
      let arr = items.push(obj);
      // continue
    }
    return items;
  }
};
