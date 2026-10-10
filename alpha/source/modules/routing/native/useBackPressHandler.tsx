// Module ID: 5372
// Function ID: 5373
// Name: useBackPressHandler
// Dependencies: [19, 17, 5373, 1382, 5375, 558, 576, 2]
// Exports: subscribeToBackPress

// Module 5372 (useBackPressHandler)
import react_native from "react-native" /* 17 */;
import PlatformUtils from "PlatformUtils" /* 1382 */;
import KeyCommands from "KeyCommands" /* 5373 */;
import react_mod from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

let tmp;
const BackPressTracking = tmp(5375);
let react = react_mod;
const NativeModules = react_native.NativeModules;
let obj = {
  minimize() {
    const MinimizeApp = NativeModules.MinimizeApp;
    MinimizeApp.minimizeApp();
    return true;
  }
};
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useBackPressHandler(cResult, arg1) {
  let closure_2;
  let current;
  let tmp3;
  let tmp5;
  let tmp6;
  _require = cResult;
  let obj = require("react");
  cResult = obj.c(5);
  let tmp2 = undefined === arg1 || arg1;
  dependencyMap = tmp2;
  let obj2 = react;
  react = react.useRef(cResult);
  if (cResult[0] !== cResult) {
    let fn = function c() {
      closure_2.current = current;
    };
    cResult[0] = cResult;
    cResult[1] = fn;
    tmp3 = fn;
  } else {
    tmp3 = cResult[1];
  }
  const layoutEffect = obj2.useLayoutEffect(tmp3);
  if (cResult[2] !== tmp2) {
    let fn2 = function t() {
      let ref;
      const tmp = closure_1;
      if (tmp) {
        const fn = () => ref.current();
        const obj = { input: KeyCommands.KeyInputs.ESCAPE, eventName: "keyCommandBackPress", onKeyCommand: fn };
        const subscribeKeyCommand = KeyCommands.subscribeKeyCommand;
        KeyCommands;
        let fn2 = subscribeKeyCommand(obj);
        const obj2 = PlatformUtils;
        const tmp2 = require;
        if (!obj2.isIOS()) {
          const tmp2Result = tmp2(5375);
          closure_1 = tmp2Result.addBackPressListener(fn);
          fn2 = () => {
            closure_1.remove();
            fn2();
          };
        }
        return fn2;
      }
    };
    const items = [tmp2];
    cResult[2] = tmp2;
    cResult[3] = fn2;
    cResult[4] = items;
    tmp6 = items;
    tmp5 = fn2;
  } else {
    tmp5 = cResult[3];
    tmp6 = cResult[4];
  }
  const effect = obj2.useEffect(tmp5, tmp6);
}) : (function useBackPressHandler(cResult) {
  let closure_2;
  const current = cResult;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = true;
  }
  react = undefined;
  react = react.useRef(cResult);
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
        const tmp2Result = tmp2(5375);
        let closure_1 = tmp2Result.addBackPressListener(fn);
        fn2 = () => {
          closure_1.remove();
          fn2();
        };
      }
      return fn2;
    }
  }, items);
});
function subscribeToBackPress(onKeyCommand) {
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
const result = size.fileFinishedImporting("modules/routing/native/useBackPressHandler.tsx");

export default tmp2;
export { subscribeToBackPress };
export const BackPressHandler = obj;
