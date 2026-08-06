// Module ID: 9470
// Function ID: 9471
// Name: getNavigatorCurrentRoute
// Dependencies: [4136, 2]
// Exports: default

// Module 9470 (getNavigatorCurrentRoute)
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/navigator/getNavigatorCurrentRoute.tsx");

export default function getNavigatorCurrentRoute() {
  let rootNavigationRef = arg0;
  if (arg0 === undefined) {
    rootNavigationRef = require(4136) /* getRootNavigationRef */.getRootNavigationRef();
    const obj2 = require(4136) /* getRootNavigationRef */;
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
