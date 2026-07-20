// Module ID: 12900
// Function ID: 98434
// Name: PassthroughTouchView
// Dependencies: []
// Exports: default

// Module 12900 (PassthroughTouchView)
importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
const result = arg1(dependencyMap[3]).fileFinishedImporting("design/void/PassthroughTouchView/native/PassthroughTouchView.tsx");

export default function PassthroughTouchView(onTouchDown) {
  let obj = Object.create(null);
  obj.onTouchDown = 0;
  const merged = Object.assign(onTouchDown, obj);
  obj = {};
  const merged1 = Object.assign(merged);
  obj["onTouchDown"] = onTouchDown.onTouchDown;
  obj["pointerEvents"] = "box-none";
  return jsx(importDefault(dependencyMap[2]), obj);
};
