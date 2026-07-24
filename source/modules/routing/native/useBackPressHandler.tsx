// Module ID: 4540
// Function ID: 39835
// Name: useBackPressHandler
// Dependencies: [31, 27, 477, 2]
// Exports: default

// Module 4540 (useBackPressHandler)
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";

let closure_3;
let closure_4;
const require = arg1;
({ BackHandler: closure_3, NativeModules: closure_4 } = get_ActivityIndicator);
const result = require("set").fileFinishedImporting("modules/routing/native/useBackPressHandler.tsx");

export default function useBackPressHandler(arg0) {
  let flag = arg1;
  let closure_0 = arg0;
  if (arg1 === undefined) {
    flag = true;
  }
  let React;
  React = React.useRef(arg0);
  const layoutEffect = React.useLayoutEffect(() => {
    result.current = closure_0;
  });
  const items = [flag];
  const effect = React.useEffect(() => {
    if (!obj.isIOS()) {
      if (flag) {
        const callback = outer1_3.addEventListener("hardwareBackPress", () => outer1_2.current());
        return () => closure_0.remove();
      }
    }
  }, items);
};
export const BackPressHandler = {
  minimize() {
    MinimizeApp = MinimizeApp.MinimizeApp;
    MinimizeApp.minimizeApp();
    return true;
  }
};
