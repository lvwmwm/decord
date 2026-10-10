// Module ID: 5375
// Function ID: 5376
// Name: BackPressTracking
// Dependencies: [19, 17, 5376, 558, 576, 2]
// Exports: addBackPressListener

// Module 5375 (BackPressTracking)
import react_native from "react-native" /* 17 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, closure_3;

const BackHandler = react_native.BackHandler;
let closure_6 = 0;
const set = new Set();
let c8 = false;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useTrackNavigationBackPress(arg0) {
  let closure_0;
  let tmp2;
  let tmp3;
  _require = arg0;
  let obj = require("react");
  const cResult = obj.c(3);
  if (cResult[0] !== arg0) {
    const fn = function t() {
      const obj = closure_0;
      if (null != closure_0) {
        if (obj.isReady()) {
          if (obj.canGoBack()) {
            let tmp3 = set;
            set.add(obj);
          }
          const tmp5 = c8;
          if (!tmp5) {
            c8 = true;
            let _queueMicrotask = queueMicrotask;
            queueMicrotask(() => {
              c8 = false;
              if ((closure_1_6 > 0 || size.size > 0) !== closure_3) {
                closure_3 = tmp;
                obj = closure_1_1(closure_1_2[2]);
                const result = obj.setHasActiveBackPressHandler(tmp);
              }
            });
          }
          let closure_1 = obj.addListener("state", function update() {
            if (obj.isReady()) {
              if (obj.canGoBack()) {
                set.add(obj);
              }
              const tmp4 = c8;
              if (!tmp4) {
                c8 = true;
                const _queueMicrotask = queueMicrotask;
                queueMicrotask(() => {
                  c8 = false;
                  if ((closure_1_6 > 0 || size.size > 0) !== closure_3) {
                    closure_3 = tmp;
                    obj = closure_1_1(closure_1_2[2]);
                    const result = obj.setHasActiveBackPressHandler(tmp);
                  }
                });
              }
            }
            set.delete(obj);
          });
          return () => {
            closure_1();
            set.delete(obj);
            const tmp3 = c8;
            if (!tmp3) {
              c8 = true;
              const _queueMicrotask = queueMicrotask;
              queueMicrotask(() => {
                c8 = false;
                if ((closure_1_6 > 0 || size.size > 0) !== closure_3) {
                  closure_3 = tmp;
                  obj = closure_1_1(closure_1_2[2]);
                  const result = obj.setHasActiveBackPressHandler(tmp);
                }
              });
            }
          };
        }
        set.delete(obj);
      }
    };
    const items = [arg0];
    cResult[0] = arg0;
    cResult[1] = fn;
    cResult[2] = items;
    tmp3 = items;
    tmp2 = fn;
  } else {
    tmp2 = cResult[1];
    tmp3 = cResult[2];
  }
  const effect = react.useEffect(tmp2, tmp3);
}) : (function useTrackNavigationBackPress(arg0) {
  let closure_0 = arg0;
  const items = [arg0];
  const effect = react.useEffect(() => {
    let obj = closure_0;
    if (null != closure_0) {
      if (obj.isReady()) {
        if (obj.canGoBack()) {
          let tmp3 = set;
          set.add(obj);
        }
        const tmp5 = c8;
        if (!tmp5) {
          c8 = true;
          let _queueMicrotask = queueMicrotask;
          queueMicrotask(() => {
            c8 = false;
            if ((closure_1_6 > 0 || size.size > 0) !== closure_3) {
              closure_3 = tmp;
              obj = closure_1_1(closure_1_2[2]);
              const result = obj.setHasActiveBackPressHandler(tmp);
            }
          });
        }
        let closure_1 = obj.addListener("state", function update() {
          if (obj.isReady()) {
            if (obj.canGoBack()) {
              set.add(obj);
            }
            const tmp4 = c8;
            if (!tmp4) {
              c8 = true;
              const _queueMicrotask = queueMicrotask;
              queueMicrotask(() => {
                c8 = false;
                if ((closure_1_6 > 0 || size.size > 0) !== closure_3) {
                  closure_3 = tmp;
                  obj = closure_1_1(closure_1_2[2]);
                  const result = obj.setHasActiveBackPressHandler(tmp);
                }
              });
            }
          }
          set.delete(obj);
        });
        return () => {
          const tmp = closure_1();
          set.delete(obj);
          const tmp3 = c8;
          if (!tmp3) {
            c8 = true;
            const _queueMicrotask = queueMicrotask;
            queueMicrotask(() => {
              c8 = false;
              if ((closure_1_6 > 0 || size.size > 0) !== closure_3) {
                closure_3 = tmp;
                obj = closure_1_1(closure_1_2[2]);
                const result = obj.setHasActiveBackPressHandler(tmp);
              }
            });
          }
        };
      }
      let tmp = set;
      set.delete(obj);
    }
  }, items);
});
let result = size.fileFinishedImporting("modules/routing/native/BackPressTracking.android.tsx");

export const addBackPressListener = function addBackPressListener(fn) {
  let closure_0 = BackHandler.addEventListener("hardwareBackPress", fn);
  closure_6 = closure_6 + 1;
  const tmp = c8;
  if (!tmp) {
    c8 = true;
    let tmp2 = globalThis;
    let _queueMicrotask = queueMicrotask;
    queueMicrotask(() => {
      c8 = false;
      if ((closure_1_6 > 0 || size.size > 0) !== closure_3) {
        closure_3 = tmp;
        obj = closure_1_1(closure_1_2[2]);
        const result = obj.setHasActiveBackPressHandler(tmp);
      }
    });
  }
  return {
    remove() {
      closure_0.remove();
      closure_6 = closure_6 - 1;
      const tmp2 = c8;
      if (!tmp2) {
        c8 = true;
        const _queueMicrotask = queueMicrotask;
        queueMicrotask(() => {
          c8 = false;
          if ((closure_1_6 > 0 || size.size > 0) !== closure_3) {
            closure_3 = tmp;
            obj = closure_1_1(closure_1_2[2]);
            const result = obj.setHasActiveBackPressHandler(tmp);
          }
        });
      }
    }
  };
};
export const useTrackNavigationBackPress = tmp3;
