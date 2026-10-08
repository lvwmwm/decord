// Module ID: 17474
// Function ID: 17475
// Name: useScreenNameSharedValue
// Dependencies: [19, 558, 576, 4937, 4810, 2]

// Module 17474 (useScreenNameSharedValue)
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let set;

const unknown = "unknown";
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useScreenNameSharedValue() {
  let sharedValue;
  let tmp4;
  let tmp8;
  let tmp9;
  let obj = sharedValue(576);
  const cResult = obj.c(3);
  const obj2 = sharedValue(4937);
  let rootNavigationRef = obj2.getRootNavigationRef();
  let isReadyResult;
  const useSharedValue = sharedValue(4810).useSharedValue;
  const tmp2 = sharedValue(4810);
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
    tmp4 = name;
  } else {
    tmp4 = unknown;
  }
  sharedValue = useSharedValue(tmp4);
  if (cResult[0] !== sharedValue) {
    const fn = function u() {
      const obj = sharedValue(dependencyMap[3]);
      const rootNavigationRef = obj.getRootNavigationRef();
      if (null != rootNavigationRef) {
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
        let str = "state";
        rootNavigationRef.addListener("state", handleStateChange);
        return () => {
          rootNavigationRef.removeListener("state", handleStateChange);
        };
      }
    };
    const items = [sharedValue];
    cResult[0] = sharedValue;
    cResult[1] = fn;
    cResult[2] = items;
    tmp9 = items;
    tmp8 = fn;
  } else {
    tmp8 = cResult[1];
    tmp9 = cResult[2];
  }
  const effect = react.useEffect(tmp8, tmp9);
  return sharedValue;
}) : (function useScreenNameSharedValue() {
  let sharedValue;
  let tmp3;
  let obj = sharedValue(4937);
  let rootNavigationRef = obj.getRootNavigationRef();
  let isReadyResult;
  const useSharedValue = sharedValue(4810).useSharedValue;
  sharedValue(4810);
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
    const obj = sharedValue(dependencyMap[3]);
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
});
let result = size.fileFinishedImporting("modules/panels/morphable/native/useScreenNameSharedValue.tsx");

export default tmp2;
