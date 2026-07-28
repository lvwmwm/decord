// Module ID: 4017
// Function ID: 33186
// Name: getRootNavigationRef
// Dependencies: [1457, 2]
// Exports: getRootNavigationRef

// Module 4017 (getRootNavigationRef)
import Link from "Link";

Link = Link.createNavigationContainerRef();
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/RootNavigationRef.native.tsx");

export function getRootNavigationRef() {
  return Link;
}
