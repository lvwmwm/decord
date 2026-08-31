// Module ID: 4303
// Function ID: 4304
// Name: getRootNavigationRef
// Dependencies: [1500, 2]
// Exports: getRootNavigationRef

// Module 4303 (getRootNavigationRef)
import set from "set" /* 2 */;
import createStandardNavigationFactories from "createStandardNavigationFactories" /* 1500 */;

let closure_0 = createStandardNavigationFactories.createNavigationContainerRef();
const result = set.fileFinishedImporting("modules/main_tabs_v2/RootNavigationRef.native.tsx");

export function getRootNavigationRef() {
  return closure_0;
}
