// Module ID: 9071
// Function ID: 9072
// Name: ActivityStatusText
// Dependencies: [19, 21, 4189, 4185, 2]
// Exports: default

// Module 9071 (ActivityStatusText)
import "noop";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
let closure_3 = createCacheKey.createStyles({ text: { flexShrink: 1 } });
const result = require("createCacheKey").fileFinishedImporting("modules/activity_status/native/ActivityStatusText.tsx");

export default function ActivityStatusText(variant) {
  let children;
  let style;
  let str = variant.variant;
  ({ children, style } = variant);
  if (str === undefined) {
    str = "text-xs/medium";
  }
  const merged = Object.assign(variant, Object.create(null));
  const obj = { variant: str, color: "text-muted", style: items, lineClamp: 1 };
  items = [callback().text, style];
  const merged1 = Object.assign(merged);
  obj.children = children;
  return jsx(require(4185) /* Text */.Text, { variant: str, color: "text-muted", style: items, lineClamp: 1 });
};
