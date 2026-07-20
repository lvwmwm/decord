// Module ID: 4532
// Function ID: 39738
// Name: useBackPressHandler
// Dependencies: []
// Exports: default

// Module 4532 (useBackPressHandler)
let closure_2 = importAll(dependencyMap[0]);
({ BackHandler: closure_3, NativeModules: closure_4 } = arg1(dependencyMap[1]));
const obj = {
  minimize() {
    const MinimizeApp = MinimizeApp.MinimizeApp;
    MinimizeApp.minimizeApp();
    return true;
  }
};
const tmp2 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/routing/native/useBackPressHandler.tsx");

export default function useBackPressHandler(arg0) {
  let flag = arg1;
  const arg1 = arg0;
  if (arg1 === undefined) {
    flag = true;
  }
  const dependencyMap = flag;
  let React;
  React = React.useRef(arg0);
  const layoutEffect = React.useLayoutEffect(() => {
    closure_2.current = arg0;
  });
  const items = [flag];
  const effect = React.useEffect(() => {
    if (!obj.isIOS()) {
      if (flag) {
        const callback = closure_3.addEventListener("hardwareBackPress", () => ref.current());
        return () => closure_0.remove();
      }
    }
  }, items);
};
export const BackPressHandler = obj;
