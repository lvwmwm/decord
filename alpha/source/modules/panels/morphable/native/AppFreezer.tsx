// Module ID: 16165
// Function ID: 16166
// Name: AppFreezer
// Dependencies: [19, 7738, 21, 5901, 5234, 2]
// Exports: default

// Module 16165 (AppFreezer)
import Suspender from "Suspender" /* 5234 */;
import NativeViewDefault from "NativeView" /* 5901 */;
import noop from "module_19" /* 19 */;
import AppFreezeStore from "AppFreezeStore" /* 7738 */;

require = fn;
const jsx = fn(21).jsx;
const NativeView = jsx(NativeViewDefault, { style: { flex: 1 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/panels/morphable/native/AppFreezer.tsx");

export default function AppFreezer(children) {
  let flag = children.manualFreeze;
  if (flag === undefined) {
    flag = false;
  }
  let placeholder = children.placeholder;
  if (placeholder === undefined) {
    placeholder = NativeView;
  }
  let lockKeys = children.lockKeys;
  let freeze = AppFreezeStore((lockKeys) => {
    lockKeys = lockKeys.lockKeys;
    if (null != lockKeys) {
      let someResult = lockKeys.some((item) => lockKeys.has(item));
    } else {
      someResult = lockKeys.size > 0;
    }
    return someResult;
  });
  if (!freeze) {
    freeze = flag;
  }
  return jsx(Suspender.Freeze, { freeze, placeholder, children: children.children });
};
