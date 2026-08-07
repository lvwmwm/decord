// Module ID: 9578
// Function ID: 9579
// Name: ActivityStatusIcon
// Dependencies: [19, 21, 4302, 2]
// Exports: default

// Module 9578 (ActivityStatusIcon)
import "noop";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

let closure_1 = createCacheKey.createStyles({ icon: { flexShrink: 0 } });
const result = require("createCacheKey").fileFinishedImporting("modules/activity_status/native/ActivityStatusIcon.tsx");

export default function ActivityStatusIcon(arg0) {
  let icon;
  let style;
  ({ icon, style } = arg0);
  const merged = Object.assign(arg0, Object.create(null));
  const obj = { size: "xxs", style: null, color: "status-positive" };
  const items = [callback().icon, style];
  obj[1] = items;
  const merged1 = Object.assign(merged);
  return <icon size="xxs" style={null} color="status-positive" />;
};
