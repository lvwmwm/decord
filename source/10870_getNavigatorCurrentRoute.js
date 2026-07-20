// Module ID: 10870
// Function ID: 84541
// Name: getNavigatorCurrentRoute
// Dependencies: []
// Exports: default

// Module 10870 (getNavigatorCurrentRoute)
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/main_tabs_v2/navigator/getNavigatorCurrentRoute.tsx");

export default function getNavigatorCurrentRoute() {
  let rootNavigationRef = arg0;
  if (arg0 === undefined) {
    rootNavigationRef = require(dependencyMap[0]).getRootNavigationRef();
    const obj2 = require(dependencyMap[0]);
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
