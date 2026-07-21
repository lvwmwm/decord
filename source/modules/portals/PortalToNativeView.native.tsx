// Module ID: 9250
// Function ID: 72294
// Name: PortalToNativeView
// Dependencies: []
// Exports: default

// Module 9250 (PortalToNativeView)
importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[2]).jsx;
let closure_1 = arg1(dependencyMap[1]).requireNativeComponent("PortalToNativeView");
let closure_2 = arg1(dependencyMap[3]).createStyles({ portal: { "Bool(false)": "PaperIcon", "Bool(false)": "png", "Bool(false)": "row", "Bool(false)": "flex-end", "Bool(false)": null, "Bool(false)": "absolute" } });
const obj = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/portals/PortalToNativeView.native.tsx");

export default function PortalToNativeView(arg0) {
  let children;
  let portalId;
  ({ portalId, children } = arg0);
  return <closure_1 pointerEvents="none" portalId={portalId} style={callback().portal}>{children}</closure_1>;
};
