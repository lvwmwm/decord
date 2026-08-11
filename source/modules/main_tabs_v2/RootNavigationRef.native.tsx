// Module ID: 4159
// Function ID: 4160
// Name: getRootNavigationRef
// Dependencies: [1500, 2]
// Exports: getRootNavigationRef

// Module 4159 (getRootNavigationRef)
import createStandardNavigationFactories from "createStandardNavigationFactories";

createStandardNavigationFactories = createStandardNavigationFactories.createNavigationContainerRef();
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/RootNavigationRef.native.tsx");

export function getRootNavigationRef() {
  return createStandardNavigationFactories;
}
