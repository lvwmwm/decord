// Module ID: 9843
// Function ID: 76231
// Name: CirclePlayIcon
// Dependencies: []
// Exports: CirclePlayIcon

// Module 9843 (CirclePlayIcon)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[2]));
const tmp3 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[7]).fileFinishedImporting("design/components/Icon/native/redesign/generated/CirclePlayIcon.tsx");

export const CirclePlayIcon = function CirclePlayIcon(color) {
  let secondaryColor;
  let style;
  ({ style, secondaryColor } = color);
  if (secondaryColor === undefined) {
    secondaryColor = "transparent";
  }
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = importDefault(dependencyMap[3]).colors.INTERACTIVE_ICON_DEFAULT;
  }
  let obj = { disableCalls: "spring", _coerce: "linear", HOSTED_FIELDS_FIELD_NOT_PRESENT: "easeInEaseOut" };
  Object.setPrototypeOf(null);
  const merged = Object.assign(color, obj);
  obj = {};
  obj = { source: arg1(dependencyMap[5]), color: secondaryColor, style };
  const merged1 = Object.assign(merged);
  const items = [callback(arg1(dependencyMap[4]).BaseIconImage, obj), ];
  const obj1 = { source: arg1(dependencyMap[6]), color: INTERACTIVE_ICON_DEFAULT };
  const items1 = [style];
  const items2 = [...items1.flat(), {}];
  obj1.style = items2;
  const merged2 = Object.assign(merged);
  items[1] = callback(arg1(dependencyMap[4]).BaseIconImage, obj1);
  obj.children = items;
  return callback2(View, obj);
};
