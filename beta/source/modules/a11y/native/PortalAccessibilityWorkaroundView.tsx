// Module ID: 12132
// Function ID: 12133
// Name: PortalAccessibilityWorkaroundView
// Dependencies: [19, 17, 21, 1364, 12133, 2]
// Exports: default

// Module 12132 (PortalAccessibilityWorkaroundView)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import NonRecycledViewNativeComponent from "NonRecycledViewNativeComponent" /* 12133 */;
import react from "react" /* 19 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import size from "module_2" /* 2 */;

react_native.View;
const jsx = Fragment.jsx;
if (PlatformUtils.isIOS()) {
  NonRecycledViewNativeComponent.default;
}
const result = size.fileFinishedImporting("modules/a11y/native/PortalAccessibilityWorkaroundView.tsx");

export default function PortalAccessibilityWorkaroundView(arg0) {
  let obj2 = null;
  const obj = PlatformUtils;
  if (obj.isIOS()) {
    obj2 = { accessibilityLabel: " ", accessible: false };
  }
  const merged = Object.assign(arg0);
  const merged1 = Object.assign(obj2);
  return <_default collapsable={false} />;
};
