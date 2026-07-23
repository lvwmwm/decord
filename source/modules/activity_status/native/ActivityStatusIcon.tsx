// Module ID: 9069
// Function ID: 71187
// Name: ActivityStatusIcon
// Dependencies: [31, 33, 4130, 2]
// Exports: default

// Module 9069 (ActivityStatusIcon)
import "result";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_1 = _createForOfIteratorHelperLoose.createStyles({ icon: { flexShrink: 0 } });
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/activity_status/native/ActivityStatusIcon.tsx");

export default function ActivityStatusIcon(arg0) {
  let icon;
  let style;
  ({ icon, style } = arg0);
  let obj = Object.create(null);
  obj.icon = 0;
  obj.style = 0;
  const merged = Object.assign(arg0, obj);
  obj = { size: "xxs", style: null, color: "status-positive" };
  const items = [callback().icon, style];
  obj.style = items;
  const merged1 = Object.assign(merged);
  return <icon size="xxs" style={null} color="status-positive" />;
};
