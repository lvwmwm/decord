// Module ID: 7726
// Function ID: 7727
// Name: PortalToNativeView
// Dependencies: [19, 17, 21, 4445, 2]
// Exports: default

// Module 7726 (PortalToNativeView)
import noopAll from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4445 */;

noopAll;
let closure_1 = require("get ActivityIndicator").requireNativeComponent("PortalToNativeView");
let closure_2 = createCacheKey.createStyles({ portal: { position: "absolute", opacity: 0, height: 0, right: 0, left: 0, top: 0 } });
const result = require("set").fileFinishedImporting("modules/portals/PortalToNativeView.native.tsx");

export default function PortalToNativeView(arg0) {
  ({ portalId, children } = arg0);
  return <closure_1 pointerEvents="none" portalId={portalId} style={callback().portal}>{children}</closure_1>;
};
