// Module ID: 12888
// Function ID: 12889
// Name: PortalAccessibilityWorkaroundView
// Dependencies: [19, 17, 21, 1364, 12889, 2]
// Exports: default

// Module 12888 (PortalAccessibilityWorkaroundView)
import noop from "module_19" /* 19 */;

const require = fn;
let _default = fn(17).View;
const jsx = fn(21).jsx;
const PlatformUtils = fn(1364);
if (PlatformUtils.isIOS()) {
  _default = fn(12889).default;
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/a11y/native/PortalAccessibilityWorkaroundView.tsx");

export default function PortalAccessibilityWorkaroundView(arg0) {
  let obj2 = null;
  if (obj.isIOS()) {
    obj2 = { accessibilityLabel: " ", accessible: false };
  }
  const obj3 = {};
  const merged = Object.assign(arg0);
  const merged1 = Object.assign(obj2);
  obj3.collapsable = false;
  return <_default />;
};
