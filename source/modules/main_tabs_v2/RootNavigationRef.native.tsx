// Module ID: 4136
// Function ID: 4137
// Name: getRootNavigationRef
// Dependencies: [1481, 2]
// Exports: getRootNavigationRef

// Module 4136 (getRootNavigationRef)
import createStandardNavigationFactories from "createStandardNavigationFactories";

createStandardNavigationFactories = createStandardNavigationFactories.createNavigationContainerRef();
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/RootNavigationRef.native.tsx");

export function getRootNavigationRef() {
  return createStandardNavigationFactories;
}
