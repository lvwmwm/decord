// Module ID: 10752
// Function ID: 10753
// Name: getNavigatorCurrentRoute
// Dependencies: [4695, 2]
// Exports: default

// Module 10752 (getNavigatorCurrentRoute)
import RootNavigationRef from "RootNavigationRef" /* 4695 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/main_tabs_v2/navigator/getNavigatorCurrentRoute.tsx");

export default function getNavigatorCurrentRoute() {
  let rootNavigationRef = arg0;
  if (arg0 === undefined) {
    const obj2 = RootNavigationRef;
    rootNavigationRef = obj2.getRootNavigationRef();
  }
  let isReadyResult;
  if (rootNavigationRef != null) {
    isReadyResult = rootNavigationRef.isReady();
  }
  let tmp4;
  if (true === isReadyResult) {
    let currentRoute;
    if (rootNavigationRef != null) {
      currentRoute = rootNavigationRef.getCurrentRoute();
    }
    tmp4 = currentRoute;
  }
  return tmp4;
};
