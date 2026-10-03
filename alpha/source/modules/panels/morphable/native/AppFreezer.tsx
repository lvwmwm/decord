// Module ID: 16460
// Function ID: 16461
// Name: AppFreezer
// Dependencies: [19, 7964, 21, 5976, 558, 576, 5738, 2]

// Module 16460 (AppFreezer)
import Fragment from "Fragment" /* 21 */;
import NativeViewDefault from "NativeView" /* 5976 */;
import react from "react" /* 19 */;
import AppFreezeStore from "AppFreezeStore" /* 7964 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const NativeView = jsx(NativeViewDefault, { style: { flex: 1 } });
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let children;
  let lockKeys;
  let manualFreeze;
  let placeholder;
  let tmp5;
  let obj = lockKeys(576);
  const cResult = obj.c(6);
  const tmp = lockKeys;
  ({ children, manualFreeze, placeholder, lockKeys } = arg0);
  const tmp4 = undefined !== manualFreeze && manualFreeze;
  if (undefined === placeholder) {
    placeholder = NativeView;
  }
  if (cResult[0] !== lockKeys) {
    const fn = function s(lockKeys) {
      let someResult;
      lockKeys = lockKeys.lockKeys;
      const obj = lockKeys;
      if (null != lockKeys) {
        someResult = obj.some((item) => lockKeys.has(item));
      } else {
        someResult = lockKeys.size > 0;
      }
      return someResult;
    };
    cResult[0] = lockKeys;
    cResult[1] = fn;
    tmp5 = fn;
  } else {
    tmp5 = cResult[1];
  }
  const tmp6 = AppFreezeStore(tmp5) || tmp4;
  if (cResult[2] === children) {
    if (cResult[3] === placeholder) {
      let tmp7;
      if (cResult[4] === tmp6) {
        tmp7 = cResult[5];
      }
      return tmp7;
    }
  }
  const tmp8 = jsx(tmp(5738).Freeze, { freeze: tmp6, placeholder, children });
  cResult[2] = children;
  cResult[3] = placeholder;
  cResult[4] = tmp6;
  cResult[5] = tmp8;
  tmp7 = tmp8;
}) : ((manualFreeze) => {
  let flag = manualFreeze.manualFreeze;
  const children = manualFreeze.children;
  if (flag === undefined) {
    flag = false;
  }
  let placeholder = manualFreeze.placeholder;
  if (placeholder === undefined) {
    placeholder = NativeView;
  }
  let lockKeys = manualFreeze.lockKeys;
  let freeze = AppFreezeStore((lockKeys) => {
    let someResult;
    lockKeys = lockKeys.lockKeys;
    const obj = lockKeys;
    if (null != lockKeys) {
      someResult = obj.some((item) => lockKeys.has(item));
    } else {
      someResult = lockKeys.size > 0;
    }
    return someResult;
  });
  const Freeze = lockKeys(5738).Freeze;
  const tmp2 = jsx;
  if (!freeze) {
    freeze = flag;
  }
  return tmp2(Freeze, { freeze, placeholder, children });
});
const result = size.fileFinishedImporting("modules/panels/morphable/native/AppFreezer.tsx");

export default tmp3;
