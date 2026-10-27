// Module ID: 11055
// Function ID: 11056
// Name: conjurePausedPreviewViews
// Dependencies: [19, 558, 576, 2]
// Exports: isConjurePausedPreviewMounted, registerConjurePausedPreview

// Module 11055 (conjurePausedPreviewViews)
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, set;

const map = new Map();
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjurePausedPreviewView(arg0) {
  let tmp2;
  let tmp3;
  _require = arg0;
  const obj = require("react");
  const cResult = obj.c(3);
  if (cResult[0] !== arg0) {
    const fn = function s() {
      if (null != closure_0) {
        closure_0 = tmp;
        set = map.set;
        let num = map.get(tmp);
        if (num == null) {
          num = 0;
        }
        const result = set(tmp, num + 1);
        let c1 = true;
        return () => {
          const tmp = c1;
          if (tmp) {
            c1 = false;
            let num = map.get(closure_0);
            if (num == null) {
              num = 1;
            }
            const diff = num - 1;
            if (0 < diff) {
              const result = obj.set(tmp2, diff);
            } else {
              map.delete(closure_0);
            }
          }
        };
      }
    };
    const items = [arg0];
    let num = 0;
    cResult[0] = arg0;
    cResult[1] = fn;
    cResult[2] = items;
    tmp3 = items;
    tmp2 = fn;
  } else {
    tmp2 = cResult[1];
    tmp3 = cResult[2];
  }
  const layoutEffect = react.useLayoutEffect(tmp2, tmp3);
}) : (function useConjurePausedPreviewView(arg0) {
  let closure_0 = arg0;
  const items = [arg0];
  const layoutEffect = react.useLayoutEffect(() => {
    let tmp = closure_0;
    if (null != closure_0) {
      closure_0 = tmp;
      const tmp2 = map;
      set = map.set;
      let num = map.get(tmp);
      if (num == null) {
        num = 0;
      }
      let result = set(tmp, num + 1);
      let c1 = true;
      return () => {
        const tmp = c1;
        if (tmp) {
          c1 = false;
          let num = map.get(closure_0);
          if (num == null) {
            num = 1;
          }
          const diff = num - 1;
          if (0 < diff) {
            const result = obj.set(tmp2, diff);
          } else {
            map.delete(closure_0);
          }
        }
      };
    }
  }, items);
});
function registerConjurePausedPreview(arg0) {
  let closure_0 = arg0;
  set = map.set;
  let num = map.get(arg0);
  if (num == null) {
    num = 0;
  }
  const result = set(arg0, num + 1);
  let c1 = true;
  return () => {
    const tmp = c1;
    if (tmp) {
      c1 = false;
      let num = map.get(closure_0);
      if (num == null) {
        num = 1;
      }
      const diff = num - 1;
      if (0 < diff) {
        const result = obj.set(tmp2, diff);
      } else {
        map.delete(closure_0);
      }
    }
  };
}
let result = size.fileFinishedImporting("modules/conjure/preview/conjurePausedPreviewViews.tsx");

export const isConjurePausedPreviewMounted = function isConjurePausedPreviewMounted(projectId) {
  let num = map.get(projectId);
  if (num == null) {
    num = 0;
  }
  return num > 0;
};
export { registerConjurePausedPreview };
export const useConjurePausedPreviewView = tmp3;
