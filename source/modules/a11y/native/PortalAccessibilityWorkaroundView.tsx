// Module ID: 11665
// Function ID: 90467
// Name: PortalAccessibilityWorkaroundView
// Dependencies: [31, 27, 33, 3995, 2]
// Exports: default

// Module 11665 (PortalAccessibilityWorkaroundView)
import "result";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/a11y/native/PortalAccessibilityWorkaroundView.tsx");

export default function PortalAccessibilityWorkaroundView(arg0) {
  let obj = require(3995) /* isFabric */;
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
