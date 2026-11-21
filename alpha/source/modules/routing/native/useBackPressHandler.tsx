// Module ID: 5924
// Function ID: 5925
// Name: useBackPressHandler
// Dependencies: [19, 17, 5925, 1378, 5927, 2]
// Exports: default, subscribeToBackPress

// Module 5924 (useBackPressHandler)
import react_native from "react-native" /* 17 */;
import PlatformUtils from "PlatformUtils" /* 1378 */;
import KeyCommands from "KeyCommands" /* 5925 */;
import react_mod from "react" /* 19 */;
import size from "module_2" /* 2 */;

let tmp;
const BackPressTracking = tmp(5927);
let react = react_mod;
const NativeModules = react_native.NativeModules;
let obj = {
  minimize() {
    const MinimizeApp = NativeModules.MinimizeApp;
    MinimizeApp.minimizeApp();
    return true;
  }
};
const result = size.fileFinishedImporting("modules/routing/native/useBackPressHandler.tsx");

export default function useBackPressHandler(set) {
  let closure_2;
  const current = set;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = true;
  }
  react = undefined;
  react = react.useRef(set);
  const layoutEffect = react.useLayoutEffect(() => {
    closure_2.current = current;
  });
  const items = [flag];
  const effect = react.useEffect(() => {
    let ref;
    const tmp = flag;
    if (tmp) {
      const fn = () => ref.current();
      const obj = { input: KeyCommands.KeyInputs.ESCAPE, eventName: "keyCommandBackPress", onKeyCommand: fn };
      const subscribeKeyCommand = KeyCommands.subscribeKeyCommand;
      KeyCommands;
      let fn2 = subscribeKeyCommand(obj);
      const obj2 = PlatformUtils;
      const tmp2 = require;
      if (!obj2.isIOS()) {
        const tmp2Result = tmp2(5927);
        let closure_1 = tmp2Result.addBackPressListener(fn);
        fn2 = () => {
          closure_1.remove();
          fn2();
        };
      }
      return fn2;
    }
  }, items);
};
export function subscribeToBackPress(onKeyCommand) {
  const obj = KeyCommands;
  const obj2 = { input: KeyCommands.KeyInputs.ESCAPE, eventName: "keyCommandBackPress", onKeyCommand };
  const subscribeKeyCommandResult = obj.subscribeKeyCommand(obj2);
  const obj3 = PlatformUtils;
  if (obj3.isIOS()) {
    return subscribeKeyCommandResult;
  } else {
    const tmpResult = BackPressTracking;
    let closure_1 = tmpResult.addBackPressListener(onKeyCommand);
    return () => {
      closure_1.remove();
      fn2();
    };
  }
}
export const BackPressHandler = obj;
