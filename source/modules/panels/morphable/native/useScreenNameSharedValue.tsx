// Module ID: 15802
// Function ID: 121709
// Name: useScreenNameSharedValue
// Dependencies: [31, 4017, 4026, 2]
// Exports: default

// Module 15802 (useScreenNameSharedValue)
import result from "result";

const require = arg1;
let result = require("module_4026").fileFinishedImporting("modules/panels/morphable/native/useScreenNameSharedValue.tsx");

export default function useScreenNameSharedValue() {
  let rootNavigationRef = sharedValue(4017).getRootNavigationRef();
  let obj = sharedValue(4017);
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
  sharedValue = sharedValue(4026).useSharedValue(str);
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
