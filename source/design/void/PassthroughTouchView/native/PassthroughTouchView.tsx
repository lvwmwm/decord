// Module ID: 12909
// Function ID: 98479
// Name: PassthroughTouchView
// Dependencies: [0, 0, 0, 0]
// Exports: default

// Module 12909 (PassthroughTouchView)
import "result";
import { jsx } from "result";
import result from "result";

result = result.fileFinishedImporting("design/void/PassthroughTouchView/native/PassthroughTouchView.tsx");

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
