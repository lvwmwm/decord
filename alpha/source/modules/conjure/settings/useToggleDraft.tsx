// Module ID: 10706
// Function ID: 10707
// Name: useToggleDraft
// Dependencies: [32, 19, 558, 576, 2]

// Module 10706 (useToggleDraft)
import react2 from "react" /* 576 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useToggleDraft(arg0, arg1) {
  let flag;
  let tmp3;
  let closure_0 = arg1;
  const obj = react2;
  const cResult = obj.c(8);
  [flag, tmp3] = react.useState(null);
  const tmp4 = null != flag && flag === arg0;
  if (tmp4) {
    tmp3(null);
  }
  let tmp6 = null != flag;
  if (tmp6) {
    let flag2 = arg0;
    if (arg0 == null) {
      flag2 = false;
    }
    tmp6 = flag !== flag2;
  }
  let closure_2 = tmp6;
  if (cResult[0] === tmp6) {
    if (cResult[1] === flag) {
      let tmp7;
      if (cResult[2] === arg1) {
        tmp7 = cResult[3];
      }
      if (flag == null) {
        flag = arg0;
      }
      if (flag == null) {
        flag = false;
      }
      if (cResult[4] === tmp6) {
        if (cResult[5] === tmp7) {
          let tmp8;
          if (cResult[6] === flag) {
            tmp8 = cResult[7];
          }
          return tmp8;
        }
      }
      const obj2 = { checked: flag, changed: tmp6, setChecked: tmp3, save: tmp7 };
      cResult[4] = tmp6;
      cResult[5] = tmp7;
      cResult[6] = flag;
      cResult[7] = obj2;
      tmp8 = obj2;
    }
  }
  const fn = function h() {
    let tmp = !closure_2;
    if (closure_2) {
      tmp = null == flag;
    }
    if (!tmp) {
      tmp = closure_0(flag);
    }
    return tmp;
  };
  cResult[0] = tmp6;
  cResult[1] = flag;
  cResult[2] = arg1;
  cResult[3] = fn;
  tmp7 = fn;
}) : (function useToggleDraft(arg0, arg1) {
  let checked;
  let setChecked;
  let closure_0 = arg1;
  [checked, setChecked] = react.useState(null);
  const obj = react;
  const tmp3 = null != checked && checked === arg0;
  if (tmp3) {
    setChecked(null);
  }
  let changed = null != checked;
  if (changed) {
    let flag2 = arg0;
    if (arg0 == null) {
      flag2 = false;
    }
    changed = checked !== flag2;
  }
  const items = [changed, checked, arg1];
  const save = obj.useCallback(() => {
    let tmp = !changed;
    if (changed) {
      tmp = null == checked;
    }
    if (!tmp) {
      tmp = closure_0(checked);
    }
    return tmp;
  }, items);
  if (checked == null) {
    checked = arg0;
  }
  if (checked == null) {
    checked = false;
  }
  return { checked, changed, setChecked, save };
});
const result = size.fileFinishedImporting("modules/conjure/settings/useToggleDraft.tsx");

export const useToggleDraft = tmp2;
