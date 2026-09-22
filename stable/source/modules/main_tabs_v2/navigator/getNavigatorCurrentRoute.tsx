// Module ID: 11355
// Function ID: 11356
// Name: getNavigatorCurrentRoute
// Dependencies: [4495, 2]
// Exports: default

// Module 11355 (getNavigatorCurrentRoute)
import RootNavigationRef from "RootNavigationRef" /* 4495 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/main_tabs_v2/navigator/getNavigatorCurrentRoute.tsx");

export default function getNavigatorCurrentRoute() {
  let rootNavigationRef = arg0;
  if (arg0 === undefined) {
    rootNavigationRef = RootNavigationRef.getRootNavigationRef();
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
