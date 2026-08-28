// Module ID: 4301
// Function ID: 4302
// Name: getRootNavigationRef
// Dependencies: [1501, 2]
// Exports: getRootNavigationRef

// Module 4301 (getRootNavigationRef)
import set from "set" /* 2 */;
import createStandardNavigationFactories from "createStandardNavigationFactories" /* 1501 */;

let closure_0 = createStandardNavigationFactories.createNavigationContainerRef();
const result = set.fileFinishedImporting("modules/main_tabs_v2/RootNavigationRef.native.tsx");

export function getRootNavigationRef() {
  return closure_0;
}
