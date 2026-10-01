// Module ID: 5276
// Function ID: 5277
// Name: useBackPressHandler
// Dependencies: [19, 17, 5277, 1364, 2]
// Exports: default, subscribeToBackPress

// Module 5276 (useBackPressHandler)
import PlatformUtils from "PlatformUtils" /* 1364 */;
import KeyCommands from "KeyCommands" /* 5277 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import size from "module_2" /* 2 */;

let MinimizeApp;

let c3;
let closure_4;
let react = react_mod;
({ BackHandler: c3, NativeModules: closure_4 } = react_native);
let obj = {
  minimize() {
    MinimizeApp = MinimizeApp.MinimizeApp;
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
      if (!obj2.isIOS()) {
        let closure_1 = _false.addEventListener("hardwareBackPress", fn);
        fn2 = () => {
          closure_1.remove();
          fn2();
        };
      }
      return fn2;
    }
  }, items);
};
export const subscribeToBackPress = function subscribeToBackPress(onKeyCommand) {
  const obj = KeyCommands;
  const obj2 = { input: KeyCommands.KeyInputs.ESCAPE, eventName: "keyCommandBackPress", onKeyCommand };
  const subscribeKeyCommandResult = obj.subscribeKeyCommand(obj2);
  const obj3 = PlatformUtils;
  if (obj3.isIOS()) {
    return subscribeKeyCommandResult;
  } else {
    let closure_1 = _false.addEventListener("hardwareBackPress", onKeyCommand);
    return () => {
      closure_1.remove();
      fn2();
    };
  }
};
export const BackPressHandler = obj;
