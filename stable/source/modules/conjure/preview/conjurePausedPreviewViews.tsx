// Module ID: 10939
// Function ID: 10940
// Name: conjurePausedPreviewViews
// Dependencies: [19, 2]
// Exports: isConjurePausedPreviewMounted, registerConjurePausedPreview, useConjurePausedPreviewView

// Module 10939 (conjurePausedPreviewViews)
import react_mod from "react" /* 19 */;
import size from "module_2" /* 2 */;

let set;

let react = react_mod;
const map = new Map();
let result = size.fileFinishedImporting("modules/conjure/preview/conjurePausedPreviewViews.tsx");

export function isConjurePausedPreviewMounted(projectId) {
  let num = map.get(projectId);
  if (num == null) {
    num = 0;
  }
  return num > 0;
}
export function registerConjurePausedPreview(arg0) {
  let c1;
  let closure_0 = arg0;
  set = map.set;
  let num = map.get(arg0);
  if (num == null) {
    num = 0;
  }
  const result = set(arg0, num + 1);
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
export function useConjurePausedPreviewView(arg0) {
  react = arg0;
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
}
