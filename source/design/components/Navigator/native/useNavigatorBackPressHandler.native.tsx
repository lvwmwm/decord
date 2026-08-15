// Module ID: 6318
// Function ID: 6319
// Name: useNavigatorBackPressHandler
// Dependencies: [19, 17, 1501, 500, 2]
// Exports: useNavigatorBackPressHandler

// Module 6318 (useNavigatorBackPressHandler)
import noop from "noop";

const require = arg1;
require("get ActivityIndicator").BackHandler;
const result = require("createStandardNavigationFactories").fileFinishedImporting("design/components/Navigator/native/useNavigatorBackPressHandler.native.tsx");

export const useNavigatorBackPressHandler = function useNavigatorBackPressHandler(callback) {
  const _require = callback;
  const dependencyMap = React.useRef(callback);
  const layoutEffect = React.useLayoutEffect(() => {
    closure_1.current = closure_0;
  });
  const focusEffect = _require(1501).useFocusEffect(React.useCallback(() => {
    if (!obj.isIOS()) {
      const callback = outer1_3.addEventListener("hardwareBackPress", () => ref.current());
      return () => closure_0.remove();
    }
    obj = callback(table[3]);
  }, []));
};
