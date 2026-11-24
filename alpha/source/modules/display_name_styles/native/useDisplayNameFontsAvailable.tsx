// Module ID: 8573
// Function ID: 8574
// Name: useDisplayNameFontsAvailable
// Dependencies: [5, 19, 17, 8574, 2]
// Exports: useDisplayNameFontsAvailable

// Module 8573 (useDisplayNameFontsAvailable)
import react_native from "react-native" /* 17 */;
import react from "react" /* 19 */;
import react_nativeDefault from "react-native" /* 8574 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let c3, c4, closure_2;

function isAvailable() {
  if (closure_2 == null) {
    obj = react_nativeDefault;
    closure_2 = obj.hasOnDemandResource(fonts);
  }
  return closure_2;
}
function load() {
  return obj(...arguments);
}
let obj = function _load() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let obj2;
    let tmp;
    function retryWhenActive() {
      const tmp = c9;
      if (!tmp) {
        c9 = true;
        closure_0 = closure_5.addEventListener("change", (event) => {
          if ("active" === event) {
            closure_0.remove();
            c9 = false;
            closure_2_11();
          }
        });
      }
    }
    if (c4 === 2) {
      c4 = 3;
      const str = "Generator functions may not be called on executing generators";
      throw new TypeError("Generator functions may not be called on executing generators");
    } else {
      const flag = true;
      if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        let c2;
        try {
          let closure_0;
          c4 = 2;
          const tmp4 = c3;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              let closure_1 = tmp;
              closure_0 = undefined;
              if (!isAvailable()) {
                const tmp13 = c8;
                if (!tmp13) {
                  c8 = true;
                  closure_0 = false;
                  c2 = 1;
                  c3 = 2;
                  c4 = 1;
                  const obj5 = { value: obj2.fetchOnDemandResource(fonts), done: false };
                  obj2 = react_nativeDefault;
                  return obj5;
                }
              }
            }
          } else {
            if (1 === tmp4) {
              c2 = 0;
              closure_0 = false;
            } else if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 0;
              c4 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_0 = value;
              c2 = 0;
            }
            c8 = false;
            const tmp9 = closure_0;
            if (tmp9) {
              c2 = true;
              const item = closure_129_7.forEach((fn) => fn());
            } else {
              retryWhenActive();
            }
          }
          c4 = 3;
          return { value: "HermesInternal", done: null };
        } catch (tmp17) {
          if (0 === c2) {
            c4 = 3;
            throw tmp17;
          } else {
            c3 = 1;
          }
        }
      }
    }
  });
  return obj(...arguments);
};
function subscribe(arg0) {
  let closure_0 = arg0;
  set.add(arg0);
  load();
  return () => {
    set.delete(closure_0);
  };
}
const useSyncExternalStore = react.useSyncExternalStore;
const AppState = react_native.AppState;
const fonts = "fonts";
const set = new Set();
let c8 = false;
let c9 = false;
const result = size.fileFinishedImporting("modules/display_name_styles/native/useDisplayNameFontsAvailable.tsx");

export function useDisplayNameFontsAvailable() {
  return useSyncExternalStore(subscribe, isAvailable);
}
