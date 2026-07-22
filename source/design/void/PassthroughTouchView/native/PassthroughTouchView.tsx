// Module ID: 12916
// Function ID: 98512
// Name: PassthroughTouchView
// Dependencies: [0, 0, 0, 0]
// Exports: default

// Module 12916 (PassthroughTouchView)
import "__exportStarResult1";
import { jsx } from "__exportStarResult1";

const result = require("__exportStarResult1").fileFinishedImporting("design/void/PassthroughTouchView/native/PassthroughTouchView.tsx");

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
