// Module ID: 6025
// Function ID: 6026
// Name: BackPressTracking
// Dependencies: [19, 17, 6026, 2]
// Exports: addBackPressListener, useTrackNavigationBackPress

// Module 6025 (BackPressTracking)
import react_native from "react-native" /* 17 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let closure_2;

const BackHandler = react_native.BackHandler;
let closure_5 = 0;
const set = new Set();
let c7 = false;
let result = size.fileFinishedImporting("modules/routing/native/BackPressTracking.android.tsx");

export function addBackPressListener(fn) {
  let closure_0 = BackHandler.addEventListener("hardwareBackPress", fn);
  closure_5 = closure_5 + 1;
  const tmp = c7;
  if (!tmp) {
    c7 = true;
    let tmp2 = globalThis;
    let _queueMicrotask = queueMicrotask;
    queueMicrotask(() => {
      c7 = false;
      if ((closure_1_5 > 0 || size.size > 0) !== closure_2) {
        closure_2 = tmp;
        obj = closure_1_0(closure_1_1[2]);
        const result = obj.setHasActiveBackPressHandler(tmp);
      }
    });
  }
  return {
    remove() {
      closure_0.remove();
      closure_5 = closure_5 - 1;
      const tmp2 = c7;
      if (!tmp2) {
        c7 = true;
        const _queueMicrotask = queueMicrotask;
        queueMicrotask(() => {
          c7 = false;
          if ((closure_1_5 > 0 || size.size > 0) !== closure_2) {
            closure_2 = tmp;
            obj = closure_1_0(closure_1_1[2]);
            const result = obj.setHasActiveBackPressHandler(tmp);
          }
        });
      }
    }
  };
}
export function useTrackNavigationBackPress(navigationContainerRef) {
  let closure_0 = navigationContainerRef;
  const items = [navigationContainerRef];
  const effect = react.useEffect(() => {
    let obj = navigationContainerRef;
    if (null != navigationContainerRef) {
      if (obj.isReady()) {
        if (obj.canGoBack()) {
          let tmp3 = set;
          set.add(obj);
        }
        const tmp5 = c7;
        if (!tmp5) {
          c7 = true;
          let _queueMicrotask = queueMicrotask;
          queueMicrotask(() => {
            c7 = false;
            if ((closure_1_5 > 0 || size.size > 0) !== closure_2) {
              closure_2 = tmp;
              obj = closure_1_0(closure_1_1[2]);
              const result = obj.setHasActiveBackPressHandler(tmp);
            }
          });
        }
        let closure_1 = obj.addListener("state", function update() {
          if (obj.isReady()) {
            if (obj.canGoBack()) {
              set.add(obj);
            }
            const tmp4 = c7;
            if (!tmp4) {
              c7 = true;
              const _queueMicrotask = queueMicrotask;
              queueMicrotask(() => {
                c7 = false;
                if ((closure_1_5 > 0 || size.size > 0) !== closure_2) {
                  closure_2 = tmp;
                  obj = closure_1_0(closure_1_1[2]);
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
          const tmp3 = c7;
          if (!tmp3) {
            c7 = true;
            const _queueMicrotask = queueMicrotask;
            queueMicrotask(() => {
              c7 = false;
              if ((closure_1_5 > 0 || size.size > 0) !== closure_2) {
                closure_2 = tmp;
                obj = closure_1_0(closure_1_1[2]);
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
}
