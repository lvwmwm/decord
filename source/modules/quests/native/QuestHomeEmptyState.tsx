// Module ID: 13847
// Function ID: 104657
// Name: QuestHomeEmptyState
// Dependencies: []
// Exports: default

// Module 13847 (QuestHomeEmptyState)
importAll(dependencyMap[0]);
({ View: closure_3, ImageBackground: closure_4 } = arg1(dependencyMap[1]));
const VerticalGradient = arg1(dependencyMap[2]).VerticalGradient;
const tmp3 = arg1(dependencyMap[1]);
({ jsx: closure_6, jsxs: closure_7, Fragment: closure_8 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = { container: { flex: 1 }, emptyStateContainer: { "Bool(false)": "ADBE Vector Group", "Bool(false)": false, "Bool(false)": 2 } };
obj = { top: -55, paddingHorizontal: importDefault(dependencyMap[5]).space.PX_32 };
obj.emptyStateContentContainer = obj;
obj.emptyStateContentTitle = { textAlign: "center" };
obj.emptyStateContentDescription = { "Bool(true)": "/assets/design/components/Illustration/native/redesign/generated/images", "Bool(true)": 160 };
obj.emptyImage = { -9223372036854775808: null, 0: 15, 0: 5, 9223372036854775807: "center", -6: 1, 0: 1, 0: "column" };
obj.gradient = { 9223372036854775807: false, 0: false, 9223372036854775807: "never", 9223372036854775807: false };
obj.actionWrapper = {};
let closure_9 = obj.createStyles(obj);
const tmp4 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/quests/native/QuestHomeEmptyState.tsx");

export default function QuestHomeEmptyState(subtitle) {
  let action;
  let title;
  ({ action, title } = subtitle);
  if (title === undefined) {
    const intl = arg1(dependencyMap[6]).intl;
    title = intl.string(arg1(dependencyMap[6]).t.SdlRnK);
  }
  subtitle = subtitle.subtitle;
  if (subtitle === undefined) {
    const intl2 = arg1(dependencyMap[6]).intl;
    subtitle = intl2.string(arg1(dependencyMap[6]).t.R7mv+G);
  }
  const tmp5 = callback3();
  let obj = arg1(dependencyMap[7]);
  const token = obj.useToken(importDefault(dependencyMap[5]).colors.BACKGROUND_BASE_LOWER);
  obj = {};
  let obj2 = arg1(dependencyMap[10]);
  obj.bottom = obj2.isAndroid();
  obj.style = tmp5.container;
  obj = { style: tmp5.container };
  const obj1 = { style: tmp5.emptyStateContainer };
  obj2 = { style: tmp5.emptyStateContentContainer };
  const obj3 = { cachedAt: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000011454504407100313, edpbxy: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004026493667951817, style: tmp5.emptyStateContentTitle, children: title };
  const items = [callback(arg1(dependencyMap[11]).Text, obj3), , ];
  const obj4 = { cachedAt: 1, edpbxy: 1, style: tmp5.emptyStateContentDescription, children: subtitle };
  items[1] = callback(arg1(dependencyMap[11]).Text, obj4);
  let tmp10 = null != action;
  if (tmp10) {
    const obj5 = { style: tmp5.actionWrapper, children: action };
    tmp10 = callback(closure_3, obj5);
  }
  items[2] = tmp10;
  obj2.children = items;
  const items1 = [callback2(closure_3, obj2), ];
  let tmp13 = null;
  if (!importDefault(dependencyMap[8])().isChatLockedOpen) {
    const obj6 = {};
    const obj7 = { style: tmp5.emptyImage, source: importDefault(dependencyMap[12]), resizeMode: "cover" };
    const items2 = [callback(closure_4, obj7), ];
    const obj8 = { style: tmp5.gradient };
    ({ END: obj12.end, START: obj12.start } = VerticalGradient);
    const items3 = [, token];
    obj8.colors = items3;
    items2[1] = callback(importDefault(dependencyMap[13]), obj8);
    obj6.children = items2;
    tmp13 = callback2(closure_8, obj6);
  }
  items1[1] = tmp13;
  obj1.children = items1;
  obj.children = callback2(closure_3, obj1);
  obj.children = callback(closure_3, obj);
  return callback(arg1(dependencyMap[9]).SafeAreaPaddingView, obj);
};
