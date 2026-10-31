// Module ID: 19111
// Function ID: 19112
// Name: useScreenNameSharedValue
// Dependencies: [19, 5199, 5095, 2]
// Exports: default

// Module 19111 (useScreenNameSharedValue)
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let set;

const unknown = "unknown";
let result = size.fileFinishedImporting("modules/panels/morphable/native/useScreenNameSharedValue.tsx");

export default function useScreenNameSharedValue() {
  let sharedValue;
  let tmp3;
  let obj = sharedValue(5199);
  let rootNavigationRef = obj.getRootNavigationRef();
  let isReadyResult;
  const useSharedValue = sharedValue(5095).useSharedValue;
  sharedValue(5095);
  if (rootNavigationRef != null) {
    isReadyResult = rootNavigationRef.isReady();
  }
  if (true === isReadyResult) {
    let currentRoute = rootNavigationRef.getCurrentRoute();
    let name;
    if (currentRoute != null) {
      name = currentRoute.name;
    }
    if (name == null) {
      name = unknown;
    }
    tmp3 = name;
  } else {
    tmp3 = unknown;
  }
  sharedValue = useSharedValue(tmp3);
  const items = [sharedValue];
  const effect = react.useEffect(() => {
    function handleStateChange() {
      if (null != rootNavigationRef) {
        if (rootNavigationRef.isReady()) {
          const currentRoute = obj.getCurrentRoute();
          let str;
          set = sharedValue.set;
          if (currentRoute != null) {
            str = currentRoute.name;
          }
          if (str == null) {
            str = "unknown";
          }
          const result = set(str);
        }
      }
    }
    const obj = sharedValue(dependencyMap[1]);
    const rootNavigationRef = obj.getRootNavigationRef();
    if (null != rootNavigationRef) {
      let str = "state";
      rootNavigationRef.addListener("state", handleStateChange);
      return () => {
        rootNavigationRef.removeListener("state", handleStateChange);
      };
    }
  }, items);
  return sharedValue;
};
