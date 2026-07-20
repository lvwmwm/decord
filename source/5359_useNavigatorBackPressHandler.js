// Module ID: 5359
// Function ID: 45847
// Name: useNavigatorBackPressHandler
// Dependencies: []
// Exports: useNavigatorBackPressHandler

// Module 5359 (useNavigatorBackPressHandler)
let closure_2 = importAll(dependencyMap[0]);
arg1(dependencyMap[1]).BackHandler;
const result = arg1(dependencyMap[4]).fileFinishedImporting("design/components/Navigator/native/useNavigatorBackPressHandler.native.tsx");

export const useNavigatorBackPressHandler = function useNavigatorBackPressHandler(callback) {
  const arg1 = callback;
  let closure_1 = React.useRef(callback);
  const layoutEffect = React.useLayoutEffect(() => {
    closure_1.current = arg0;
  });
  const focusEffect = arg1(closure_1[2]).useFocusEffect(React.useCallback(() => {
    if (!obj.isIOS()) {
      const callback = closure_3.addEventListener("hardwareBackPress", () => ref.current());
      return () => closure_0.remove();
    }
    const obj = callback(closure_1[3]);
  }, []));
};
