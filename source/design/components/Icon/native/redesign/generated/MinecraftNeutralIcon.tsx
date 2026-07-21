// Module ID: 8611
// Function ID: 68295
// Name: MinecraftNeutralIcon
// Dependencies: []
// Exports: MinecraftNeutralIcon

// Module 8611 (MinecraftNeutralIcon)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[2]));
const tmp3 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[8]).fileFinishedImporting("design/components/Icon/native/redesign/generated/MinecraftNeutralIcon.tsx");

export const MinecraftNeutralIcon = function MinecraftNeutralIcon(secondaryColor) {
  let color;
  let style;
  ({ style, color } = secondaryColor);
  if (color === undefined) {
    color = importDefault(dependencyMap[3]).colors.INTERACTIVE_ICON_DEFAULT;
  }
  let str = secondaryColor.secondaryColor;
  if (str === undefined) {
    str = "#000";
  }
  let str2 = secondaryColor.tertiaryColor;
  if (str2 === undefined) {
    str2 = "#fff";
  }
  let obj = { -1399870276: "ERROR", 827417185: "ERROR", 1364418894: "NOT_RESPONDER", 1986308700: "NOT_RESPONDER" };
  Object.setPrototypeOf(null);
  const merged = Object.assign(secondaryColor, obj);
  obj = {};
  obj = { source: arg1(dependencyMap[5]), color, style };
  const merged1 = Object.assign(merged);
  const items = [callback(arg1(dependencyMap[4]).BaseIconImage, obj), , ];
  const obj1 = { source: arg1(dependencyMap[6]), color: str };
  const items1 = [style];
  const items2 = [...items1.flat(), { force: null, trackAnalytics: null }];
  obj1.style = items2;
  const merged2 = Object.assign(merged);
  items[1] = callback(arg1(dependencyMap[4]).BaseIconImage, obj1);
  const obj2 = { source: arg1(dependencyMap[7]), color: str2 };
  const items3 = [style];
  const items4 = [...items3.flat(), { force: null, trackAnalytics: null }];
  obj2.style = items4;
  const merged3 = Object.assign(merged);
  items[2] = callback(arg1(dependencyMap[4]).BaseIconImage, obj2);
  obj.children = items;
  return callback2(View, obj);
};
