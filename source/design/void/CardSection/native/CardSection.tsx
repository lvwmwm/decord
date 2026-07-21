// Module ID: 7527
// Function ID: 60228
// Name: CardSection
// Dependencies: []
// Exports: default

// Module 7527 (CardSection)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_3, jsxs: closure_4 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = { container: {} };
const tmp3 = arg1(dependencyMap[3]);
obj.title = importDefault(dependencyMap[5])(arg1(dependencyMap[2]).Fonts.DISPLAY_EXTRABOLD, importDefault(dependencyMap[6]).colors.TEXT_SUBTLE, 12, {});
obj = { borderRadius: importDefault(dependencyMap[6]).radii.xs, overflow: "hidden", backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_BASE_LOWEST };
obj.card = obj;
let closure_5 = obj.createStyles(obj);
const importDefaultResult = importDefault(dependencyMap[5]);
const result = arg1(dependencyMap[8]).fileFinishedImporting("design/void/CardSection/native/CardSection.tsx");

export default function CardSection(arg0) {
  let accessibilityLabel;
  let accessibilityRole;
  let cardStyle;
  let children;
  let headerComponent;
  let style;
  let title;
  let titleStyle;
  ({ title, children, headerComponent } = arg0);
  ({ titleStyle, cardStyle, style, accessibilityRole, accessibilityLabel } = arg0);
  const tmp = callback2();
  let obj = { style: items, accessibilityRole, accessibilityLabel };
  const items = [tmp.container, style];
  let tmp4 = null;
  if (null != title) {
    obj = {};
    const items1 = [tmp.title, titleStyle];
    obj.style = items1;
    obj.accessibilityRole = "header";
    obj.children = title;
    tmp4 = callback(importDefault(dependencyMap[7]), obj);
  }
  const items2 = [tmp4, , ];
  let tmp8 = null;
  if (null != headerComponent) {
    tmp8 = headerComponent;
  }
  items2[1] = tmp8;
  let tmp9 = null;
  if (null != children) {
    obj = {};
    const items3 = [tmp.card, cardStyle];
    obj.style = items3;
    obj.children = children;
    tmp9 = callback(View, obj);
  }
  items2[2] = tmp9;
  obj.children = items2;
  return closure_4(View, obj);
};
