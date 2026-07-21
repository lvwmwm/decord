// Module ID: 7574
// Function ID: 60580
// Name: ScrollHandlingActionSheet
// Dependencies: []
// Exports: default

// Module 7574 (ScrollHandlingActionSheet)
importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/stage_channels/native/components/ScrollHandlingActionSheet.tsx");

export default function ScrollHandlingActionSheet(children) {
  let obj = Object.create(null);
  obj.children = 0;
  obj.scrollableDeviceHeightBreakpoint = 0;
  const merged = Object.assign(children, obj);
  obj = { startExpanded: true };
  const merged1 = Object.assign(merged);
  obj["children"] = children.children;
  return jsx(arg1(dependencyMap[2]).BottomSheet, obj);
};
