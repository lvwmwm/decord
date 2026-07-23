// Module ID: 5093
// Function ID: 44335
// Name: useNavigatorBackPressHandler
// Dependencies: [31, 27, 1457, 477, 2]
// Exports: useNavigatorBackPressHandler

// Module 5093 (useNavigatorBackPressHandler)
import result from "result";

const require = arg1;
require("get ActivityIndicator").BackHandler;
const result = require("Link").fileFinishedImporting("design/components/Navigator/native/useNavigatorBackPressHandler.native.tsx");

export const useNavigatorBackPressHandler = function useNavigatorBackPressHandler(callback) {
  const _require = callback;
  const dependencyMap = React.useRef(callback);
  const layoutEffect = React.useLayoutEffect(() => {
    closure_1.current = closure_0;
  });
  const focusEffect = _require(1457).useFocusEffect(React.useCallback(() => {
    if (!obj.isIOS()) {
      const callback = outer1_3.addEventListener("hardwareBackPress", () => outer1_1.current());
      return () => closure_0.remove();
    }
    obj = callback(table[3]);
  }, []));
};
