// Module ID: 13437
// Function ID: 13438
// Name: PassthroughTouchView
// Dependencies: [19, 21, 13438, 2]
// Exports: default

// Module 13437 (PassthroughTouchView)
import "noop";
import { jsx } from "jsxProd";

const result = require("__INTERNAL_VIEW_CONFIG").fileFinishedImporting("design/void/PassthroughTouchView/native/PassthroughTouchView.tsx");

export default function PassthroughTouchView(onTouchDown) {
  const merged = Object.assign(onTouchDown, Object.create(null));
  const obj = {};
  const merged1 = Object.assign(merged);
  obj.onTouchDown = onTouchDown.onTouchDown;
  obj.pointerEvents = "box-none";
  return jsx(importDefault(13438), {});
};
