// Module ID: 9251
// Function ID: 72307
// Name: PortalToNativeView
// Dependencies: []
// Exports: default

// Module 9251 (PortalToNativeView)
importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[2]).jsx;
let closure_1 = arg1(dependencyMap[1]).requireNativeComponent("PortalToNativeView");
let closure_2 = arg1(dependencyMap[3]).createStyles({ portal: { display: "PaperIcon", justifyContent: "png", overflow: "row", backgroundColor: "flex-end", alignItems: null, justifyContent: "absolute" } });
const obj = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/portals/PortalToNativeView.native.tsx");

export default function PortalToNativeView(arg0) {
  let children;
  let portalId;
  ({ portalId, children } = arg0);
  return <closure_1 pointerEvents="none" portalId={portalId} style={callback().portal}>{children}</closure_1>;
};
