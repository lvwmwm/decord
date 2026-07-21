// Module ID: 304
// Function ID: 4602
// Name: elementsThatOverlapOffsets
// Dependencies: []
// Exports: computeWindowedRenderLimits, keyExtractor

// Module 304 (elementsThatOverlapOffsets)
function elementsThatOverlapOffsets(items, getItemCount, getCellMetricsApprox, arg3) {
  let num = 1;
  if (arguments.length > 3) {
    num = 1;
    if (undefined !== arguments[3]) {
      num = arguments[3];
    }
  }
  items = [];
  for (let num2 = 0; num2 < items.length; num2 = num2 + 1) {
    let tmp2 = items[num2];
    let diff = tmp - 1;
    let num3 = 0;
    if (0 <= diff) {
      while (true) {
        let _Math = Math;
        let sum = num3 + Math.floor((diff - num3) / 2);
        let cellMetricsApprox = getCellMetricsApprox.getCellMetricsApprox(sum, getItemCount);
        let result = cellMetricsApprox.offset * num;
        let result1 = (cellMetricsApprox.offset + cellMetricsApprox.length) * num;
        if (0 !== sum) {
          if (0 === sum) {
            if (tmp2 <= result1) {
              break;
            } else {
              let sum1 = sum + 1;
              num3 = sum1;
              let tmp11 = sum;
              let tmp12 = result;
              let tmp13 = result1;
            }
          }
        }
        diff = sum - 1;
        sum1 = num3;
      }
      items[num2] = sum;
      let tmp7 = sum;
      let tmp8 = result;
      let tmp9 = result1;
    }
  }
  return items;
}
function newRangeCount(last, last2) {
  const sum = last2.last - last2.first + 1;
  const sum1 = 1 + Math.min(last2.last, last.last);
  return sum - Math.max(0, sum1 - Math.max(last2.first, last.first));
}
let closure_2 = importDefault(dependencyMap[0]);

export { elementsThatOverlapOffsets };
export { newRangeCount };
export const computeWindowedRenderLimits = function computeWindowedRenderLimits(getItemCount, result2, arg2, first, _listMetrics, _scrollMetrics) {
  let tmp11;
  let tmp53;
  let velocity;
  let visibleLength;
  let zoomScale;
  const itemCount = getItemCount.getItemCount(getItemCount.data);
  if (0 === itemCount) {
    return { trackSelectGIF: false, isEncryptionAvailable: false };
  } else {
    ({ velocity, visibleLength, zoomScale } = _scrollMetrics);
    let num = 1;
    if (undefined !== zoomScale) {
      num = zoomScale;
    }
    const _Math = Math;
    const bound = Math.max(0, _scrollMetrics.offset);
    const sum = bound + visibleLength;
    let str2 = "after";
    const result = (arg2 - 1) * visibleLength;
    if (velocity <= 1) {
      let str3 = "none";
      if (velocity < -1) {
        str3 = "before";
      }
      str2 = str3;
    }
    const _Math2 = Math;
    const result1 = 0.5 * result;
    const bound1 = Math.max(0, bound - result1);
    const _Math3 = Math;
    const bound2 = Math.max(0, sum + result1);
    if (_listMetrics.getCellMetricsApprox(itemCount - 1, getItemCount).offset * num < bound1) {
      let obj = {};
      const _Math6 = Math;
      obj.first = Math.max(0, itemCount - 1 - result2);
      obj.last = itemCount - 1;
      return obj;
    } else {
      const items = [bound1, bound, sum, bound2];
      const tmp52 = callback(elementsThatOverlapOffsets(items, getItemCount, _listMetrics, num), 4);
      [tmp53, tmp11] = tmp52;
      let bound4 = tmp52[2];
      let diff = tmp52[3];
      let num4 = 0;
      if (null != tmp53) {
        num4 = tmp53;
      }
      if (null == diff) {
        diff = itemCount - 1;
      }
      obj = {};
      if (null == bound3) {
        const _Math4 = Math;
        const bound3 = Math.max(0, num4);
      }
      obj.first = bound3;
      if (null == bound4) {
        const _Math5 = Math;
        bound4 = Math.min(diff, bound3 + result2 - 1);
      }
      obj.last = bound4;
      const tmp14 = newRangeCount(first, obj);
      let tmp17 = bound3;
      let tmp18 = bound4;
      let tmp19 = tmp14;
      if (bound3 > num4) {
        while (true) {
          let tmp22 = tmp19 >= result2;
          let tmp23 = importAll;
          let tmp24 = dependencyMap;
          let obj1 = importAll(dependencyMap[1]);
          let tmp25 = tmp17 <= first.first;
          if (obj1.fixVirtualizeListCollapseWindowSize()) {
            let tmp27 = tmp18 >= first.last;
            let tmp26 = tmp25;
          } else {
            tmp26 = tmp25;
            if (!tmp25) {
              tmp26 = tmp17 > first.last;
            }
            tmp27 = tmp18 >= first.last || tmp18 < first.first;
          }
          let tmp28 = tmp17 > num4;
          if (tmp28) {
            let tmp29 = !tmp22;
            if (tmp22) {
              tmp29 = !tmp26;
            }
            tmp28 = tmp29;
          }
          let tmp30 = tmp18 < diff;
          if (tmp30) {
            let tmp31 = !tmp22;
            if (tmp22) {
              tmp31 = !tmp27;
            }
            tmp30 = tmp31;
          }
          if (tmp22) {
            if (!tmp28) {
              let tmp20 = tmp17;
              let tmp21 = tmp18;
              if (!tmp30) {
                break;
              }
            }
            break;
          }
          let tmp32 = !tmp28;
          if (tmp28) {
            let tmp33 = tmp16;
            if (tmp16) {
              tmp33 = tmp30;
            }
            if (tmp33) {
              tmp33 = tmp27;
            }
            tmp32 = tmp33;
          }
          let diff1 = tmp17;
          let tmp35 = tmp19;
          if (!tmp32) {
            let sum1 = tmp19;
            if (tmp26) {
              sum1 = tmp19 + 1;
            }
            diff1 = tmp17 - 1;
            tmp35 = sum1;
          }
          let tmp37 = !tmp30;
          if (tmp30) {
            let tmp38 = tmp15;
            if (tmp15) {
              tmp38 = tmp28;
            }
            if (tmp38) {
              tmp38 = tmp26;
            }
            tmp37 = tmp38;
          }
          let sum3 = tmp18;
          let tmp40 = tmp35;
          if (!tmp37) {
            let sum2 = tmp35;
            if (tmp27) {
              sum2 = tmp35 + 1;
            }
            sum3 = tmp18 + 1;
            tmp40 = sum2;
          }
          tmp17 = diff1;
          tmp18 = sum3;
          tmp19 = tmp40;
          if (diff1 > num4) {
            continue;
          } else {
            tmp17 = diff1;
            tmp18 = sum3;
            tmp19 = tmp40;
            tmp20 = diff1;
            tmp21 = sum3;
            if (sum3 >= diff) {
              break;
            }
          }
          continue;
        }
      } else {
        tmp17 = bound3;
        tmp18 = bound4;
        tmp19 = tmp14;
        tmp20 = bound3;
        tmp21 = bound4;
      }
      if (tmp21 >= tmp20) {
        if (tmp20 >= 0) {
          if (tmp21 < itemCount) {
            if (tmp20 >= num4) {
              if (tmp21 <= diff) {
                if (tmp20 <= obj.first) {
                  if (tmp21 >= obj.last) {
                    obj = { first: tmp20, last: tmp21 };
                    return obj;
                  }
                }
              }
            }
          }
        }
      }
      const _Error = Error;
      const _JSON = JSON;
      obj1 = { first: tmp20, last: tmp21, itemCount, overscanFirst: num4, overscanLast: diff, visible: obj };
      const error = new Error("Bad window calculation " + JSON.stringify(obj1));
      throw error;
    }
  }
};
export const keyExtractor = function keyExtractor(key) {
  if ("object" === typeof key) {
    key = undefined;
    if (null != key) {
      key = key.key;
    }
    if (null != key) {
      let id = key.key;
    }
    return id;
  }
  if ("object" === typeof key) {
    id = undefined;
    if (null != key) {
      id = key.id;
    }
    if (null != id) {
      id = key.id;
    }
  }
  id = String(arg1);
};
