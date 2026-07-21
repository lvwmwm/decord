// Module ID: 11657
// Function ID: 90406
// Name: PortalAccessibilityWorkaroundView
// Dependencies: []
// Exports: default

// Module 11657 (PortalAccessibilityWorkaroundView)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const jsx = arg1(dependencyMap[2]).jsx;
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/a11y/native/PortalAccessibilityWorkaroundView.tsx");

export default function PortalAccessibilityWorkaroundView(arg0) {
  let obj = arg1(dependencyMap[3]);
  obj = null;
  if (obj.isIosFabric()) {
    obj = { "Bool(true)": "png", "Bool(true)": 8 };
  }
  obj = {};
  const merged = Object.assign(arg0);
  const merged1 = Object.assign(obj);
  obj["collapsable"] = false;
  return <View {...obj} />;
};
