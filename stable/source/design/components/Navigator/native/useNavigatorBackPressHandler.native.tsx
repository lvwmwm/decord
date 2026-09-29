// Module ID: 5879
// Function ID: 5880
// Name: useNavigatorBackPressHandler
// Dependencies: [19, 1485, 5213, 2]
// Exports: useNavigatorBackPressHandler

// Module 5879 (useNavigatorBackPressHandler)
import useBackPressHandler from "useBackPressHandler" /* 5213 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Navigator/native/useNavigatorBackPressHandler.native.tsx");

export const useNavigatorBackPressHandler = function useNavigatorBackPressHandler(callback) {
  _require = callback;
  dependencyMap = noop.useRef(callback);
  const layoutEffect = noop.useLayoutEffect(() => {
    closure_1.current = current;
  });
  const focusEffect = require("Link").useFocusEffect(noop.useCallback(() => useBackPressHandler.subscribeToBackPress(() => ref.current()), []));
};
