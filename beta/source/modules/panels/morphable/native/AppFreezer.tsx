// Module ID: 16161
// Function ID: 16162
// Name: AppFreezer
// Dependencies: [19, 7738, 21, 5901, 5234, 2]
// Exports: default

// Module 16161 (AppFreezer)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 5234 */;
import NativeViewDefault from "NativeView" /* 5901 */;
import react from "react" /* 19 */;
import AppFreezeStore from "AppFreezeStore" /* 7738 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const NativeView = jsx(NativeViewDefault, { style: { flex: 1 } });
const result = size.fileFinishedImporting("modules/panels/morphable/native/AppFreezer.tsx");

export default function AppFreezer(manualFreeze) {
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
  const Freeze = react2.Freeze;
  const tmp2 = jsx;
  if (!freeze) {
    freeze = flag;
  }
  return tmp2(Freeze, { freeze, placeholder, children });
};
