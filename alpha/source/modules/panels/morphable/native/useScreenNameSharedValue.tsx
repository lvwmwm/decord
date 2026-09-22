// Module ID: 17486
// Function ID: 17487
// Name: useScreenNameSharedValue
// Dependencies: [19, 4615, 4493, 2]
// Exports: default

// Module 17486 (useScreenNameSharedValue)
import noop from "module_19" /* 19 */;

const require = fn;
const unknown = "unknown";
const size = fn(2);
let result = size.fileFinishedImporting("modules/panels/morphable/native/useScreenNameSharedValue.tsx");

export default function useScreenNameSharedValue() {
  let rootNavigationRef = sharedValue(4615).getRootNavigationRef();
  let obj = sharedValue(4615);
  let isReadyResult;
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
    let tmp2 = name;
  } else {
    tmp2 = unknown;
  }
  sharedValue = sharedValue(4493).useSharedValue(tmp2);
  const items = [sharedValue];
  const effect = noop.useEffect(() => {
    function handleStateChange() {
      if (null != rootNavigationRef) {
        if (obj.isReady()) {
          const currentRoute = obj.getCurrentRoute();
          let str;
          if (currentRoute != null) {
            str = currentRoute.name;
          }
          if (str == null) {
            str = "unknown";
          }
          const result = sharedValue.set(str);
        }
      }
    }
    const rootNavigationRef = sharedValue(dependencyMap[1]).getRootNavigationRef();
    if (null != rootNavigationRef) {
      rootNavigationRef.addListener("state", handleStateChange);
      return () => {
        rootNavigationRef.removeListener("state", handleStateChange);
      };
    }
    const obj = sharedValue(dependencyMap[1]);
  }, items);
  return sharedValue;
};
