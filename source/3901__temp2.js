// Module ID: 3901
// Function ID: 32266
// Name: _temp2
// Dependencies: [57, 31, 3881, 3895]
// Exports: useRiveList

// Module 3901 (_temp2)
import _slicedToArray from "_slicedToArray";
import result from "result";

let closure_3;
let closure_4;
let useCallback;
let useMemo;
const require = arg1;
function _temp2(arg0) {
  return arg0 + 1;
}
function _temp(dispose) {
  let disposeResult;
  if (null != dispose) {
    disposeResult = dispose.dispose();
  }
  return disposeResult;
}
({ useCallback, useEffect: closure_3, useState: closure_4, useMemo } = result);

export const useRiveList = function useRiveList(arg0, arg1) {
  let closure_3;
  const _require = arg0;
  const dependencyMap = arg1;
  let obj = _require(3881);
  const cResult = obj.c(39);
  const tmp2 = callback(disposableMemo(null), 2);
  const first = tmp2[0];
  callback = tmp2[1];
  [r10022, closure_3] = callback(disposableMemo(0), 2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    function t0() {
      callback(null);
    }
    cResult[0] = t0;
    let first1 = t0;
  } else {
    first1 = cResult[0];
  }
  if (cResult[1] === arg0) {
    if (cResult[2] === arg1) {
      let tmp6 = cResult[3];
    }
    callback2(first1, tmp6);
    if (cResult[4] === arg0) {
      if (cResult[5] === arg1) {
        let tmp9 = cResult[6];
      }
      if (cResult[7] === arg0) {
        if (cResult[8] === arg1) {
          let tmp10 = cResult[9];
        }
        disposableMemo = _require(3895).useDisposableMemo(tmp9, _temp, tmp10);
        if (cResult[10] === arg0) {
          if (cResult[11] === disposableMemo) {
            if (cResult[12] === arg1) {
              let tmp14 = cResult[13];
              let tmp15 = cResult[14];
            }
            callback2(tmp14, tmp15);
            if (cResult[15] !== disposableMemo) {
              function t6() {
                if (disposableMemo) {
                  let closure_0 = disposableMemo.addListener(() => {
                    outer1_3(outer2_5);
                  });
                  return () => {
                    callback();
                    outer1_4.removeListeners();
                  };
                }
              }
              const items = [disposableMemo];
              cResult[15] = disposableMemo;
              cResult[16] = t6;
              cResult[17] = items;
              let tmp18 = t6;
              let tmp19 = items;
            } else {
              tmp18 = cResult[16];
              tmp19 = cResult[17];
            }
            callback2(tmp18, tmp19);
            let length;
            if (null != disposableMemo) {
              length = disposableMemo.length;
            }
            let num27 = 0;
            if (null != length) {
              num27 = length;
            }
            if (cResult[18] !== disposableMemo) {
              function t8(arg0) {
                let instanceAt;
                if (null != disposableMemo) {
                  instanceAt = disposableMemo.getInstanceAt(arg0);
                }
                return instanceAt;
              }
              cResult[18] = disposableMemo;
              cResult[19] = t8;
              let tmp23 = t8;
            } else {
              tmp23 = cResult[19];
            }
            if (cResult[20] !== disposableMemo) {
              function t9(arg0) {
                if (null != disposableMemo) {
                  disposableMemo.addInstance(arg0);
                }
              }
              cResult[20] = disposableMemo;
              cResult[21] = t9;
              let tmp24 = t9;
            } else {
              tmp24 = cResult[21];
            }
            if (cResult[22] !== disposableMemo) {
              function t10(arg0, arg1) {
                let addInstanceAtResult;
                if (null != disposableMemo) {
                  addInstanceAtResult = disposableMemo.addInstanceAt(arg0, arg1);
                }
                return null != addInstanceAtResult && addInstanceAtResult;
              }
              cResult[22] = disposableMemo;
              cResult[23] = t10;
              let tmp25 = t10;
            } else {
              tmp25 = cResult[23];
            }
            if (cResult[24] !== disposableMemo) {
              function t11(arg0) {
                if (null != disposableMemo) {
                  disposableMemo.removeInstance(arg0);
                }
              }
              cResult[24] = disposableMemo;
              cResult[25] = t11;
              let tmp26 = t11;
            } else {
              tmp26 = cResult[25];
            }
            if (cResult[26] !== disposableMemo) {
              function t12(arg0) {
                if (null != disposableMemo) {
                  disposableMemo.removeInstanceAt(arg0);
                }
              }
              cResult[26] = disposableMemo;
              cResult[27] = t12;
              let tmp27 = t12;
            } else {
              tmp27 = cResult[27];
            }
            if (cResult[28] !== disposableMemo) {
              function t13(arg0, arg1) {
                let swapResult;
                if (null != disposableMemo) {
                  swapResult = disposableMemo.swap(arg0, arg1);
                }
                return null != swapResult && swapResult;
              }
              cResult[28] = disposableMemo;
              cResult[29] = t13;
              let tmp28 = t13;
            } else {
              tmp28 = cResult[29];
            }
            if (cResult[30] === tmp24) {
              if (cResult[31] === tmp25) {
                if (cResult[32] === first) {
                  if (cResult[33] === tmp23) {
                    if (cResult[34] === num27) {
                      if (cResult[35] === tmp26) {
                        if (cResult[36] === tmp27) {
                          if (cResult[37] === tmp28) {
                            let tmp29 = cResult[38];
                          }
                          return tmp29;
                        }
                      }
                    }
                  }
                }
              }
            }
            obj = { length: num27, getInstanceAt: tmp23, addInstance: tmp24, addInstanceAt: tmp25, removeInstance: tmp26, removeInstanceAt: tmp27, swap: tmp28, error: first };
            cResult[30] = tmp24;
            cResult[31] = tmp25;
            cResult[32] = first;
            cResult[33] = tmp23;
            cResult[34] = num27;
            cResult[35] = tmp26;
            cResult[36] = tmp27;
            cResult[37] = tmp28;
            cResult[38] = obj;
            tmp29 = obj;
          }
        }
        function t4() {
          let tmp = closure_1;
          if (closure_1) {
            tmp = !disposableMemo;
          }
          if (tmp) {
            const _Error = Error;
            const _HermesInternal = HermesInternal;
            const error = new Error("List property \"" + closure_0 + "\" not found in the ViewModel instance");
            callback(error);
          }
        }
        const items1 = [arg1, disposableMemo, arg0];
        cResult[10] = arg0;
        cResult[11] = disposableMemo;
        cResult[12] = arg1;
        cResult[13] = t4;
        cResult[14] = items1;
        tmp14 = t4;
        tmp15 = items1;
        const obj2 = _require(3895);
      }
      const items2 = [arg1, arg0];
      cResult[7] = arg0;
      cResult[8] = arg1;
      cResult[9] = items2;
      tmp10 = items2;
    }
    function t2() {
      if (closure_1) {
        return closure_1.listProperty(closure_0);
      }
    }
    cResult[4] = arg0;
    cResult[5] = arg1;
    cResult[6] = t2;
    tmp9 = t2;
  }
  const items3 = [arg0, arg1];
  cResult[1] = arg0;
  cResult[2] = arg1;
  cResult[3] = items3;
  tmp6 = items3;
};
