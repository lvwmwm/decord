// Module ID: 9111
// Function ID: 71406
// Name: ActivityStatusText
// Dependencies: [31, 33, 4130, 4126, 2]
// Exports: default

// Module 9111 (ActivityStatusText)
import "result";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
let closure_3 = _createForOfIteratorHelperLoose.createStyles({ text: { flexShrink: 1 } });
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/activity_status/native/ActivityStatusText.tsx");

export default function ActivityStatusText(variant) {
  let children;
  let style;
  let str = variant.variant;
  ({ children, style } = variant);
  if (str === undefined) {
    str = "text-xs/medium";
  }
  let obj = { children: 0, style: 0, variant: 0 };
  Object.setPrototypeOf(null);
  const merged = Object.assign(variant, obj);
  obj = { variant: str, color: "text-muted" };
  const items = [callback().text, style];
  obj.style = items;
  obj.lineClamp = 1;
  const merged1 = Object.assign(merged);
  obj["children"] = children;
  return jsx(require(4126) /* Text */.Text, { variant: str, color: "text-muted" });
};
