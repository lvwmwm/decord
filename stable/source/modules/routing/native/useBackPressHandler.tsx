// Module ID: 5277
// Function ID: 5278
// Name: useBackPressHandler
// Dependencies: [19, 17, 5278, 1370, 558, 576, 2]
// Exports: subscribeToBackPress

// Module 5277 (useBackPressHandler)
import PlatformUtils from "PlatformUtils" /* 1370 */;
import KeyCommands from "KeyCommands" /* 5278 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let MinimizeApp, _require, cResult, dependencyMap;

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
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((cResult, arg1) => {
  let closure_2;
  let current;
  let tmp3;
  let tmp5;
  let tmp6;
  _require = cResult;
  let obj = require("react");
  cResult = obj.c(5);
  dependencyMap = tmp2;
  let obj2 = react;
  react = react.useRef(cResult);
  if (cResult[0] !== cResult) {
    let fn = function t() {
      closure_2.current = current;
    };
    cResult[0] = cResult;
    cResult[1] = fn;
    tmp3 = fn;
  } else {
    tmp3 = cResult[1];
  }
  const layoutEffect = obj2.useLayoutEffect(tmp3);
  if (cResult[2] !== (undefined === arg1 || arg1)) {
    let fn2 = function c() {
      let ref;
      const tmp = closure_1;
      if (tmp) {
        const fn = () => ref.current();
        const obj = { input: KeyCommands.KeyInputs.ESCAPE, eventName: "keyCommandBackPress", onKeyCommand: fn };
        const subscribeKeyCommand = KeyCommands.subscribeKeyCommand;
        KeyCommands;
        let fn2 = subscribeKeyCommand(obj);
        const obj2 = PlatformUtils;
        if (!obj2.isIOS()) {
          closure_1 = _false.addEventListener("hardwareBackPress", fn);
          fn2 = () => {
            closure_1.remove();
            fn2();
          };
        }
        return fn2;
      }
    };
    const items = [tmp2];
    cResult[2] = undefined === arg1 || arg1;
    cResult[3] = fn2;
    cResult[4] = items;
    tmp6 = items;
    tmp5 = fn2;
  } else {
    tmp5 = cResult[3];
    tmp6 = cResult[4];
  }
  const effect = obj2.useEffect(tmp5, tmp6);
}) : ((cResult) => {
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
});
function subscribeToBackPress(onKeyCommand) {
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
}
const result = size.fileFinishedImporting("modules/routing/native/useBackPressHandler.tsx");

export default tmp3;
export { subscribeToBackPress };
export const BackPressHandler = obj;
