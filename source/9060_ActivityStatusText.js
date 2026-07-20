// Module ID: 9060
// Function ID: 71115
// Name: ActivityStatusText
// Dependencies: []
// Exports: default

// Module 9060 (ActivityStatusText)
importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
let closure_3 = arg1(dependencyMap[2]).createStyles({ text: { flexShrink: 1 } });
const obj = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/activity_status/native/ActivityStatusText.tsx");

export default function ActivityStatusText(variant) {
  let children;
  let style;
  let str = variant.variant;
  ({ children, style } = variant);
  if (str === undefined) {
    str = "text-xs/medium";
  }
  let obj = {};
  Object.setPrototypeOf(null);
  const merged = Object.assign(variant, obj);
  obj = { variant: str, color: "text-muted" };
  const items = [callback().text, style];
  obj.style = items;
  obj.lineClamp = 1;
  const merged1 = Object.assign(merged);
  obj["children"] = children;
  return jsx(arg1(dependencyMap[3]).Text, obj);
};
