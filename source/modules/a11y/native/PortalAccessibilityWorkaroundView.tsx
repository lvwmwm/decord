// Module ID: 11704
// Function ID: 90618
// Name: PortalAccessibilityWorkaroundView
// Dependencies: [31, 27, 33, 4029, 2]
// Exports: default

// Module 11704 (PortalAccessibilityWorkaroundView)
import "result";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/a11y/native/PortalAccessibilityWorkaroundView.tsx");

export default function PortalAccessibilityWorkaroundView(arg0) {
  let obj = require(4029) /* isFabric */;
  obj = null;
  if (obj.isIosFabric()) {
    obj = { accessibilityLabel: " ", accessible: false };
  }
  obj = {};
  const merged = Object.assign(arg0);
  const merged1 = Object.assign(obj);
  obj["collapsable"] = false;
  return <View />;
};
