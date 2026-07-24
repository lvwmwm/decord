// Module ID: 13082
// Function ID: 100991
// Name: PassthroughTouchView
// Dependencies: [31, 33, 13083, 2]
// Exports: default

// Module 13082 (PassthroughTouchView)
import "result";
import { jsx } from "jsxProd";

const result = require("__INTERNAL_VIEW_CONFIG").fileFinishedImporting("design/void/PassthroughTouchView/native/PassthroughTouchView.tsx");

export default function PassthroughTouchView(onTouchDown) {
  let obj = Object.create(null);
  obj.onTouchDown = 0;
  const merged = Object.assign(onTouchDown, obj);
  obj = {};
  const merged1 = Object.assign(merged);
  obj["onTouchDown"] = onTouchDown.onTouchDown;
  obj["pointerEvents"] = "box-none";
  return jsx(importDefault(13083), {});
};
