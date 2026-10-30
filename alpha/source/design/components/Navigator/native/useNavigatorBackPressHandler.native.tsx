// Module ID: 6998
// Function ID: 6999
// Name: useNavigatorBackPressHandler
// Dependencies: [19, 1499, 6017, 2]
// Exports: useNavigatorBackPressHandler

// Module 6998 (useNavigatorBackPressHandler)
import useBackPressHandler from "useBackPressHandler" /* 6017 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

const result = size.fileFinishedImporting("design/components/Navigator/native/useNavigatorBackPressHandler.native.tsx");

export function useNavigatorBackPressHandler(callback) {
  let closure_1;
  let current;
  _require = callback;
  dependencyMap = react.useRef(callback);
  const layoutEffect = react.useLayoutEffect(() => {
    closure_1.current = current;
  });
  let obj = require("Link");
  const focusEffect = obj.useFocusEffect(react.useCallback(() => {
    let ref;
    const obj = useBackPressHandler;
    return obj.subscribeToBackPress(() => ref.current());
  }, []));
}
