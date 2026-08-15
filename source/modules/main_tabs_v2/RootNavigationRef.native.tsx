// Module ID: 4230
// Function ID: 4231
// Name: getRootNavigationRef
// Dependencies: [1501, 2]
// Exports: getRootNavigationRef

// Module 4230 (getRootNavigationRef)
import createStandardNavigationFactories from "createStandardNavigationFactories";

createStandardNavigationFactories = createStandardNavigationFactories.createNavigationContainerRef();
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/RootNavigationRef.native.tsx");

export function getRootNavigationRef() {
  return createStandardNavigationFactories;
}
