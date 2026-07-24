// Module ID: 15740
// Function ID: 121337
// Name: useScreenNameSharedValue
// Dependencies: [31, 3982, 3991, 2]
// Exports: default

// Module 15740 (useScreenNameSharedValue)
import result from "result";

const require = arg1;
let result = require("module_3991").fileFinishedImporting("modules/panels/morphable/native/useScreenNameSharedValue.tsx");

export default function useScreenNameSharedValue() {
  let rootNavigationRef = sharedValue(3982).getRootNavigationRef();
  let obj = sharedValue(3982);
  let isReadyResult;
  if (null != rootNavigationRef) {
    isReadyResult = rootNavigationRef.isReady();
  }
  let str = "unknown";
  if (true === isReadyResult) {
    let currentRoute = rootNavigationRef.getCurrentRoute();
    let name;
    if (null != currentRoute) {
      name = currentRoute.name;
    }
    str = "unknown";
    if (null != name) {
      str = name;
    }
  }
  sharedValue = sharedValue(3991).useSharedValue(str);
  const items = [sharedValue];
  const effect = React.useEffect(() => {
    function handleStateChange() {
      if (null != rootNavigationRef) {
        if (rootNavigationRef.isReady()) {
          const currentRoute = rootNavigationRef.getCurrentRoute();
          let name;
          if (null != currentRoute) {
            name = currentRoute.name;
          }
          let str = "unknown";
          if (null != name) {
            str = name;
          }
          const result = rootNavigationRef.set(str);
        }
      }
    }
    const rootNavigationRef = sharedValue(outer1_1[1]).getRootNavigationRef();
    if (null != rootNavigationRef) {
      rootNavigationRef.addListener("state", handleStateChange);
      return () => {
        rootNavigationRef.removeListener("state", handleStateChange);
      };
    }
    const obj = sharedValue(outer1_1[1]);
  }, items);
  return sharedValue;
};
