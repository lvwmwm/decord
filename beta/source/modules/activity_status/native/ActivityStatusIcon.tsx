// Module ID: 10341
// Function ID: 10342
// Name: ActivityStatusIcon
// Dependencies: [19, 21, 4836, 2]
// Exports: default

// Module 10341 (ActivityStatusIcon)
import Fragment from "Fragment" /* 21 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let closure_1 = createStyles.createStyles({ icon: { flexShrink: 0 } });
const result = size.fileFinishedImporting("modules/activity_status/native/ActivityStatusIcon.tsx");

export default function ActivityStatusIcon(arg0) {
  let icon;
  let style;
  ({ icon, style } = arg0);
  const merged = Object.assign(arg0, Object.assign({ icon: 0, style: 0 }));
  const items = [closure_1().icon, style];
  const merged1 = Object.assign(merged);
  return <icon size="xxs" style={items} color="status-positive" />;
};
