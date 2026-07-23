// Module ID: 3982
// Function ID: 33071
// Name: getRootNavigationRef
// Dependencies: [1457, 2]
// Exports: getRootNavigationRef

// Module 3982 (getRootNavigationRef)
import Link from "Link";

Link = Link.createNavigationContainerRef();
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/RootNavigationRef.native.tsx");

export function getRootNavigationRef() {
  return Link;
}
