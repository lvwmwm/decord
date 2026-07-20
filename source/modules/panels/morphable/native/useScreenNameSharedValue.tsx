// Module ID: 15558
// Function ID: 118736
// Name: useScreenNameSharedValue
// Dependencies: [0, 0, 0, 0]
// Exports: default

// Module 15558 (useScreenNameSharedValue)
import closure_2 from "result";
import result from "result";

result = result.fileFinishedImporting("modules/panels/morphable/native/useScreenNameSharedValue.tsx");

export default function useScreenNameSharedValue() {
  const rootNavigationRef = arg1(dependencyMap[1]).getRootNavigationRef();
  const obj = arg1(dependencyMap[1]);
  let isReadyResult;
  if (null != rootNavigationRef) {
    isReadyResult = rootNavigationRef.isReady();
  }
  let str = "unknown";
  if (true === isReadyResult) {
    const currentRoute = rootNavigationRef.getCurrentRoute();
    let name;
    if (null != currentRoute) {
      name = currentRoute.name;
    }
    str = "unknown";
    if (null != name) {
      str = name;
    }
  }
  const sharedValue = arg1(dependencyMap[2]).useSharedValue(str);
  const arg1 = sharedValue;
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
    const rootNavigationRef = sharedValue(handleStateChange[1]).getRootNavigationRef();
    const sharedValue = rootNavigationRef;
    if (null != rootNavigationRef) {
      rootNavigationRef.addListener("state", handleStateChange);
      return () => {
        rootNavigationRef.removeListener("state", handleStateChange);
      };
    }
    const obj = sharedValue(handleStateChange[1]);
  }, items);
  return sharedValue;
};
