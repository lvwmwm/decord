// Module ID: 13248
// Function ID: 13249
// Name: PassthroughTouchView
// Dependencies: [19, 21, 13249, 2]
// Exports: default

// Module 13248 (PassthroughTouchView)
import "noop";
import { jsx } from "jsxProd";

const result = require("__INTERNAL_VIEW_CONFIG").fileFinishedImporting("design/void/PassthroughTouchView/native/PassthroughTouchView.tsx");

export default function PassthroughTouchView(onTouchDown) {
  const merged = Object.assign(onTouchDown, Object.create(null));
  const obj = {};
  const merged1 = Object.assign(merged);
  obj.onTouchDown = onTouchDown.onTouchDown;
  obj.pointerEvents = "box-none";
  return jsx(importDefault(13249), {});
};
