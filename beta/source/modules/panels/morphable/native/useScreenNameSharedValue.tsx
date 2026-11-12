// Module ID: 19524
// Function ID: 19525
// Name: useScreenNameSharedValue
// Dependencies: [19, 5347, 1652, 2]
// Exports: default

// Module 19524 (useScreenNameSharedValue)
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let set;

const unknown = "unknown";
let result = size.fileFinishedImporting("modules/panels/morphable/native/useScreenNameSharedValue.tsx");

export default function useScreenNameSharedValue() {
  let sharedValue;
  let tmp3;
  let obj = sharedValue(5347);
  let rootNavigationRef = obj.getRootNavigationRef();
  let isReadyResult;
  const useSharedValue = sharedValue(1652).useSharedValue;
  sharedValue(1652);
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
