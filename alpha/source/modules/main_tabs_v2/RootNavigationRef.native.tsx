// Module ID: 5189
// Function ID: 5190
// Name: RootNavigationRef
// Dependencies: [1501, 2]
// Exports: getRootNavigationRef, runWhenRootNavigationReady

// Module 5189 (RootNavigationRef)
import Link from "Link" /* 1501 */;
import size from "module_2" /* 2 */;

let ready = Link.createNavigationContainerRef();
const result = size.fileFinishedImporting("modules/main_tabs_v2/RootNavigationRef.native.tsx");

export function getRootNavigationRef() {
  return ready;
}
export function runWhenRootNavigationReady(fn) {
  ready = fn;
  const obj = ready;
  if (ready.isReady()) {
    fn();
  } else {
    let closure_1 = obj.addListener("ready", () => {
      closure_1();
      closure_0();
    });
  }
}
