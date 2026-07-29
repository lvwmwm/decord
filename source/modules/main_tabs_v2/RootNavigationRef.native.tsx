// Module ID: 4041
// Function ID: 4042
// Name: getRootNavigationRef
// Dependencies: [1481, 2]
// Exports: getRootNavigationRef

// Module 4041 (getRootNavigationRef)
import Link from "Link";

Link = Link.createNavigationContainerRef();
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/RootNavigationRef.native.tsx");

export function getRootNavigationRef() {
  return Link;
}
