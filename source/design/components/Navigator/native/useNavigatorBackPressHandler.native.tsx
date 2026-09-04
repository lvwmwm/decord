// Module ID: 5585
// Function ID: 5586
// Name: useNavigatorBackPressHandler
// Dependencies: [19, 17, 1499, 1234, 2]
// Exports: useNavigatorBackPressHandler

// Module 5585 (useNavigatorBackPressHandler)
import closure_2 from "noop" /* 19 */;

const require = arg1;
require("get ActivityIndicator").BackHandler;
const result = require("set").fileFinishedImporting("design/components/Navigator/native/useNavigatorBackPressHandler.native.tsx");

export const useNavigatorBackPressHandler = function useNavigatorBackPressHandler(callback) {
  const _require = callback;
  dependencyMap = React.useRef(callback);
  const layoutEffect = React.useLayoutEffect(() => {
    closure_1.current = closure_0;
  });
  const focusEffect = _require(1499).useFocusEffect(React.useCallback(() => {
    if (!obj.isIOS()) {
      callback = closure_1_3.addEventListener("hardwareBackPress", () => ref.current());
      return () => closure_0.remove();
    }
    obj = callback(table[3]);
  }, []));
};
