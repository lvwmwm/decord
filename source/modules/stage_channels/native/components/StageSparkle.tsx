// Module ID: 7486
// Function ID: 60077
// Name: StageSparkleInner
// Dependencies: []
// Exports: default

// Module 7486 (StageSparkleInner)
function StageSparkleInner(style) {
  let IconComponent;
  let icon;
  ({ IconComponent, icon } = style);
  if (icon === undefined) {
    icon = importDefault(dependencyMap[5]);
  }
  const tmp3 = callback2();
  let obj = { style: items };
  const items = [tmp3.container, style.style];
  obj = { style: tmp3.iconContainer };
  if (null != IconComponent) {
    obj = { size: "lg", color: importDefault(dependencyMap[4]).colors.MOBILE_TEXT_HEADING_PRIMARY };
    let tmp11 = callback(IconComponent, obj);
  } else {
    const obj1 = { source: icon, style: tmp3.iconStyle };
    tmp11 = callback(importDefault(dependencyMap[6]), obj1);
  }
  obj.children = tmp11;
  const items1 = [callback(View, obj), ];
  const obj2 = { style: tmp3.sparkles, source: importDefault(dependencyMap[7]) };
  items1[1] = callback(importDefault(dependencyMap[6]), obj2);
  obj.children = items1;
  return closure_5(View, obj);
}
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = { container: {} };
obj = { backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_BASE_LOWEST };
obj.iconContainer = obj;
const tmp3 = arg1(dependencyMap[2]);
obj.iconStyle = { tintColor: importDefault(dependencyMap[4]).colors.MOBILE_TEXT_HEADING_PRIMARY };
obj.sparkles = { force: null, trackAnalytics: null };
let closure_6 = obj.createStyles(obj);
const obj1 = { tintColor: importDefault(dependencyMap[4]).colors.MOBILE_TEXT_HEADING_PRIMARY };
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/stage_channels/native/components/StageSparkle.tsx");

export default function StageSparkle(theme) {
  theme = theme.theme;
  let obj = Object.create(null);
  obj.theme = 0;
  const merged = Object.assign(theme, obj);
  if (null != theme) {
    obj = { theme };
    const obj1 = {};
    const merged1 = Object.assign(merged);
    obj.children = callback(StageSparkleInner, obj1);
    let tmp8 = callback(arg1(dependencyMap[8]).ThemeContextProvider, obj);
  } else {
    obj = {};
    const merged2 = Object.assign(merged);
    tmp8 = callback(StageSparkleInner, obj);
  }
  return tmp8;
};
