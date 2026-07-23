// Module ID: 10887
// Function ID: 84637
// Name: getNavigatorCurrentRoute
// Dependencies: [3982, 2]
// Exports: default

// Module 10887 (getNavigatorCurrentRoute)
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/navigator/getNavigatorCurrentRoute.tsx");

export default function getNavigatorCurrentRoute() {
  let rootNavigationRef = arg0;
  if (arg0 === undefined) {
    rootNavigationRef = require(3982) /* getRootNavigationRef */.getRootNavigationRef();
    const obj2 = require(3982) /* getRootNavigationRef */;
  }
  let isReadyResult;
  if (null != rootNavigationRef) {
    isReadyResult = rootNavigationRef.isReady();
  }
  let tmp4;
  if (true === isReadyResult) {
    let currentRoute;
    if (null != rootNavigationRef) {
      currentRoute = rootNavigationRef.getCurrentRoute();
    }
    tmp4 = currentRoute;
  }
  return tmp4;
};
