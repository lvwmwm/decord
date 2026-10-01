// Module ID: 6491
// Function ID: 6492
// Name: PortalToNativeView
// Dependencies: [19, 17, 21, 4836, 2]
// Exports: default

// Module 6491 (PortalToNativeView)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const requireNativeComponent = react_native.requireNativeComponent;
const jsx = Fragment.jsx;
let closure_1 = requireNativeComponent("PortalToNativeView");
let closure_2 = createStyles.createStyles({ portal: { position: "absolute", opacity: 0, height: 0, right: 0, left: 0, top: 0 } });
const result = size.fileFinishedImporting("modules/portals/PortalToNativeView.native.tsx");

export default function PortalToNativeView(arg0) {
  let children;
  let portalId;
  ({ portalId, children } = arg0);
  return <closure_1 pointerEvents="none" portalId={portalId} style={closure_2().portal}>{children}</closure_1>;
};
