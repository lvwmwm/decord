// Module ID: 9057
// Function ID: 71110
// Name: ActivityStatusIcon
// Dependencies: []
// Exports: default

// Module 9057 (ActivityStatusIcon)
importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
let closure_1 = arg1(dependencyMap[2]).createStyles({ icon: { flexShrink: 0 } });
const obj = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/activity_status/native/ActivityStatusIcon.tsx");

export default function ActivityStatusIcon(arg0) {
  let icon;
  let style;
  ({ icon, style } = arg0);
  let obj = Object.create(null);
  obj.icon = 0;
  obj.style = 0;
  const merged = Object.assign(arg0, obj);
  obj = {};
  const items = [callback().icon, style];
  obj.style = items;
  const merged1 = Object.assign(merged);
  return <icon {...obj} />;
};
