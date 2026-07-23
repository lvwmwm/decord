// Module ID: 82
// Function ID: 1488
// Name: _getFilterAmount
// Dependencies: [57, 38]
// Exports: default

// Module 82 (_getFilterAmount)
import _slicedToArray from "_slicedToArray";

function _getFilterAmount(arg0, arg1) {
  if ("string" === typeof arg1) {
    const _RegExp = RegExp;
    const regExp = new RegExp(/([+-]?\d*(\.\d+)?)([a-zA-Z%]+)?/g);
    const match = regExp.exec(arg1);
    if (match) {
      const _isNaN = isNaN;
      const _Number = Number;
      if (!isNaN(Number(match[1]))) {
        const _Number2 = Number;
        let NumberResult = Number(match[1]);
      }
    }
  } else {
    NumberResult = arg1;
  }
  if ("hueRotate" === arg0) {
    if (0 === NumberResult) {
      return 0;
    } else {
      let result = NumberResult;
      if ("rad" === tmp3) {
        const _Math = Math;
        result = 180 * NumberResult / Math.PI;
      }
      return result;
    }
  } else if ("blur" === arg0) {
    if (!tmp3) {
      if (NumberResult >= 0) {
        return NumberResult;
      }
    }
  } else if (NumberResult >= 0) {
    let result1 = NumberResult;
    if ("%" === tmp3) {
      result1 = NumberResult / 100;
    }
    return result1;
  }
}
function parseDropShadow(offsetX) {
  if ("string" !== typeof offsetX) {
    let obj = { offsetX: 0, offsetY: 0 };
    let tmp25;
    const keys = Object.keys();
    if (keys !== undefined) {
      tmp25 = offsetX;
      while (keys[tmp] !== undefined) {
        let tmp45 = tmp30;
        if ("offsetX" === tmp30) {
          if ("string" === typeof offsetX.offsetX) {
            let tmp37 = parseLength;
            offsetX = parseLength(offsetX.offsetX);
          } else {
            offsetX = offsetX.offsetX;
          }
          if (null != offsetX) {
            continue;
          } else {
            return null;
          }
        } else {
          if ("offsetY" === tmp30) {
            if ("string" === typeof offsetX.offsetY) {
              let tmp36 = parseLength;
              let offsetY = parseLength(offsetX.offsetY);
            } else {
              offsetY = offsetX.offsetY;
            }
            if (null != offsetY) {
              continue;
            } else {
              return null;
            }
          } else {
            if ("standardDeviation" === tmp30) {
              if ("string" === typeof offsetX.standardDeviation) {
                let tmp35 = parseLength;
                let standardDeviation = parseLength(offsetX.standardDeviation);
              } else {
                standardDeviation = offsetX.standardDeviation;
              }
              if (null != standardDeviation) {
                if (standardDeviation >= 0) {
                  obj.standardDeviation = standardDeviation;
                  continue;
                }
              }
              return null;
            } else if ("color" === tmp30) {
              let tmp31 = importDefault;
              let tmp32 = dependencyMap;
              let tmp33 = importDefault(38)(offsetX.color);
              if (null == tmp33) {
                return null;
              } else {
                obj.color = tmp33;
                let tmp34 = tmp33;
                continue;
              }
            } else {
              return null;
            }
            continue;
          }
          continue;
        }
        continue;
      }
    }
    let tmp38 = null;
    if (null != tmp25) {
      tmp38 = null;
      if (null != tmp26) {
        obj.offsetX = tmp25;
        obj.offsetY = tmp26;
        tmp38 = obj;
      }
    }
    return tmp38;
  } else {
    obj = { offsetX: 0, offsetY: 0 };
    let num = 0;
    let flag = false;
    const parts = offsetX.split(/\s+(?![^(]*\))/);
    const iter = parts[Symbol.iterator]();
    while (true) {
      let nextResult = iter.next();
      let tmp4 = iter;
      if (iter === undefined) {
        let tmp20 = tmp18;
        let tmp9 = null;
        if (null != tmp18) {
          let tmp21 = tmp16;
          tmp9 = null;
          if (null != tmp16) {
            obj.offsetX = tmp18;
            obj.offsetY = tmp16;
            tmp9 = obj;
          }
        }
        let tmp22 = tmp9;
      } else {
        let tmp39 = nextResult;
        let tmp43 = importDefault;
        let tmp44 = dependencyMap;
        if (null != importDefault(38)(nextResult)) {
          let tmp5 = obj;
          if (null != obj.color) {
            iter.return();
            tmp9 = null;
          } else {
            let tmp6 = tmp18;
            if (null != tmp18) {
              flag = true;
            }
            let tmp7 = obj;
            let tmp8 = tmp39;
            obj.color = tmp39;
          }
          continue;
        }
      }
      let tmp10 = num;
      if (0 === num) {
        tmp18 = tmp39;
        let tmp19 = num;
        num = num + 1;
      } else if (1 === num) {
        let tmp15 = flag;
        if (flag) {
          iter.return();
          tmp9 = null;
        } else {
          tmp16 = tmp39;
          let tmp17 = num;
          num = num + 1;
        }
      } else if (2 === num) {
        let tmp11 = flag;
        if (flag) {
          iter.return();
          tmp9 = null;
        } else {
          let tmp12 = obj;
          let tmp13 = tmp39;
          obj.standardDeviation = tmp39;
          let tmp14 = num;
          num = num + 1;
        }
      } else {
        iter.return();
        tmp9 = null;
      }
    }
  }
}
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

export default function processFilter(str) {
  const items = [];
  if (null == str) {
    return items;
  } else {
    if ("string" === typeof str) {
      const replaced = str.replace(/\n/g, " ");
      const obj4 = /([\w-]+)\(([^()]*|\([^()]*\)|[^()]*\([^()]*\)[^()]*)\)/g;
      let match = obj4.exec(replaced);
      if (match) {
        while (true) {
          let str8 = match[1];
          let formatted = str8.toLowerCase();
          let tmp29 = "drop-shadow" === formatted;
          if (tmp29) {
            let tmp36 = parseDropShadow;
            let tmp37 = parseDropShadow(match[2]);
            if (null == tmp37) {
              return [];
            } else {
              let tmp38 = items;
              let obj = { dropShadow: tmp37 };
              let arr = items.push(obj);
              let tmp40 = tmp37;
              let tmp32 = tmp26;
              let tmp35 = tmp27;
            }
          } else {
            let str9 = "dropShadow";
            if (!tmp29) {
              let str10 = "hueRotate";
              if ("hue-rotate" !== formatted) {
                str10 = formatted;
              }
              str9 = str10;
            }
            let tmp30 = _getFilterAmount;
            let tmp31 = _getFilterAmount(str9, match[2]);
            tmp32 = str9;
            if (null == tmp31) {
              break;
            } else {
              obj = {};
              obj[tmp32] = tmp31;
              let tmp33 = items;
              arr = items.push(obj);
              tmp35 = tmp31;
            }
          }
          match = obj4.exec(replaced);
          tmp26 = tmp32;
          tmp27 = tmp35;
        }
        return [];
      }
    } else {
      const _Array = Array;
      if (Array.isArray(str)) {
        obj = str[Symbol.iterator]();
        while (obj !== undefined) {
          let tmp44 = callback;
          let _Object = Object;
          let tmp45 = callback(Object.entries(tmp6)[0], 2);
          let first = tmp45[0];
          let tmp47 = first;
          let tmp48 = tmp45[1];
          if ("dropShadow" === first) {
            let tmp17 = parseDropShadow;
            let tmp18 = tmp48;
            let tmp19 = parseDropShadow(tmp48);
            if (null == tmp19) {
              obj.return();
              return [];
            } else {
              let tmp21 = items;
              let obj1 = {};
              let tmp22 = tmp19;
              obj1.dropShadow = tmp20;
              let arr1 = items.push(obj1);
            }
          } else {
            let tmp8 = _getFilterAmount;
            let tmp9 = first;
            let tmp10 = tmp48;
            let tmp11 = _getFilterAmount(tmp47, tmp48);
            if (null == tmp11) {
              obj.return();
              return [];
            } else {
              let obj2 = {};
              let tmp13 = first;
              let tmp14 = tmp11;
              obj2[tmp47] = tmp12;
              let tmp15 = items;
              let arr2 = items.push(obj2);
            }
          }
          continue;
        }
      } else {
        const _TypeError = TypeError;
        const typeError = new TypeError(tmp42 + " filter is not a string or array");
        throw typeError;
      }
    }
    return items;
  }
};
