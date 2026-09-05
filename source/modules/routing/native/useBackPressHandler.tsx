// Module ID: 4972
// Function ID: 4973
// Name: useBackPressHandler
// Dependencies: [19, 17, 1115, 2]
// Exports: default

// Module 4972 (useBackPressHandler)
import closure_2 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;

const require = arg1;
({ BackHandler: c3, NativeModules: c4 } = get_ActivityIndicator);
const result = require("set").fileFinishedImporting("modules/routing/native/useBackPressHandler.tsx");

export default function useBackPressHandler(first) {
  closure_0 = first;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = true;
  }
  let React;
  React = React.useRef(first);
  const layoutEffect = React.useLayoutEffect(() => {
    closure_2.current = closure_0;
  });
  const items = [flag];
  const effect = React.useEffect(() => {
    if (!obj.isIOS()) {
      if (flag) {
        const callback = closure_1_3.addEventListener("hardwareBackPress", () => ref.current());
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
