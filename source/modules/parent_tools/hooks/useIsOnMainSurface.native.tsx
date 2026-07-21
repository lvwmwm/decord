// Module ID: 15555
// Function ID: 118693
// Name: getActiveRoute
// Dependencies: []
// Exports: useIsOnMainSurface

// Module 15555 (getActiveRoute)
function getActiveRoute(routes) {
  let index;
  if (null != routes) {
    if (0 !== routes.routes.length) {
      ({ index, routes } = routes);
      if (null == index) {
        index = routes.routes.length - 1;
      }
      return routes[index];
    }
  }
}
function getIsOnMainSurface() {
  const rootNavigationRef = arg1(dependencyMap[2]).getRootNavigationRef();
  if (null != rootNavigationRef) {
    if (rootNavigationRef.isReady()) {
      const tmp2 = getActiveRoute(rootNavigationRef.getRootState());
      let name;
      if (null != tmp2) {
        name = tmp2.name;
      }
      if ("main" !== name) {
        return false;
      } else {
        const tmp5 = getActiveRoute(tmp2.state);
        let hasItem = null != tmp5;
        if (hasItem) {
          hasItem = set.has(tmp5.name);
        }
        return hasItem;
      }
    }
  }
  return false;
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importAll(dependencyMap[1]);
const set = new Set([true, true]);
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/parent_tools/hooks/useIsOnMainSurface.native.tsx");

export const useIsOnMainSurface = function useIsOnMainSurface() {
  let tmp2;
  [tmp2, closure_0] = callback(React.useState(getIsOnMainSurface), 2);
  const effect = React.useEffect(() => {
    function handleNavigationChange() {
      return rootNavigationRef(callback());
    }
    const rootNavigationRef = rootNavigationRef(handleNavigationChange[2]).getRootNavigationRef();
    if (null != rootNavigationRef) {
      const result = handleNavigationChange();
      rootNavigationRef.addListener("state", handleNavigationChange);
      return () => {
        rootNavigationRef.removeListener("state", handleNavigationChange);
      };
    }
    const obj = rootNavigationRef(handleNavigationChange[2]);
  }, []);
  return tmp2;
};
