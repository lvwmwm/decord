// Module ID: 12052
// Function ID: 12053
// Name: PortalAccessibilityWorkaroundView
// Dependencies: [19, 17, 21, 500, 12053, 2]
// Exports: default

// Module 12052 (PortalAccessibilityWorkaroundView)
import "noop";
import { View as _default } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import set from "set";
import set from "jsxProd";

const require = arg1;
if (set.isIOS()) {
  _default = require("__INTERNAL_VIEW_CONFIG").default;
}
const result = set.fileFinishedImporting("modules/a11y/native/PortalAccessibilityWorkaroundView.tsx");

export default function PortalAccessibilityWorkaroundView(arg0) {
  let obj = require(500) /* set */;
  obj = null;
  if (obj.isIOS()) {
    obj = { accessibilityLabel: " ", accessible: false };
  }
  obj = {};
  const merged = Object.assign(arg0);
  const merged1 = Object.assign(obj);
  obj.collapsable = false;
  return <_default />;
};
