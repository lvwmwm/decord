// Module ID: 15114
// Function ID: 114042
// Name: placeholderRowWidth
// Dependencies: []
// Exports: ICYMILoading

// Module 15114 (placeholderRowWidth)
function placeholderRowWidth(arg0, arg1, arg2) {
  const result = 100 * Math.sin(arg0);
  return (result - Math.floor(result)) * (arg2 - arg1) + arg1;
}
function ICYMILoadingItem() {
  let avatarTitle;
  let subtitle;
  let title;
  const tmp = callback3();
  const tmp2 = importDefault(dependencyMap[5])({ GOOGLE_PLAY_PRICE_CHANGE_ACTION_SHEET: null, getLayoutComponentErrorText: null });
  const memo = React.useMemo(() => ({ avatarTitle: Math.floor(10 * Math.random()), title: Math.floor(10 * Math.random()), subtitle: Math.floor(10 * Math.random()) }), []);
  let obj = {};
  obj = { style: tmp.container };
  obj = { style: tmp.avatarRow };
  ({ avatarTitle, title, subtitle } = memo);
  const items = [, , ];
  ({ backgroundColor: arr[0], avatar: arr[1] } = tmp);
  items[2] = tmp2;
  const items1 = [callback(importDefault(dependencyMap[6]).View, { style: items }), ];
  const obj1 = {};
  const items2 = [, , , ];
  ({ backgroundColor: arr3[0], avatarTitle: arr3[1] } = tmp);
  items2[2] = tmp2;
  const obj2 = { width: "" + placeholderRowWidth(avatarTitle, 30, 60) + "%" };
  items2[3] = obj2;
  obj1.style = items2;
  items1[1] = callback(importDefault(dependencyMap[6]).View, obj1);
  obj.children = items1;
  const items3 = [callback2(View, obj), , , ];
  const obj3 = {};
  const items4 = [, , , ];
  ({ backgroundColor: arr5[0], title: arr5[1] } = tmp);
  items4[2] = tmp2;
  const obj4 = { width: "" + placeholderRowWidth(title, 75, 100) + "%" };
  items4[3] = obj4;
  obj3.style = items4;
  items3[1] = callback(importDefault(dependencyMap[6]).View, obj3);
  const obj5 = {};
  const items5 = [, , , ];
  ({ backgroundColor: arr6[0], subtitle: arr6[1] } = tmp);
  items5[2] = tmp2;
  const obj6 = { width: "" + placeholderRowWidth(subtitle, 75, 100) + "%" };
  items5[3] = obj6;
  obj5.style = items5;
  items3[2] = callback(importDefault(dependencyMap[6]).View, obj5);
  const items6 = [, , ];
  ({ backgroundColor: arr7[0], image: arr7[1] } = tmp);
  items6[2] = tmp2;
  items3[3] = callback(importDefault(dependencyMap[6]).View, { style: items6 });
  obj.children = items3;
  const items7 = [callback2(View, obj), callback(arg1(dependencyMap[7]).Separator, {})];
  obj.children = items7;
  return callback2(closure_7, obj);
}
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_5, jsxs: closure_6, Fragment: closure_7 } = arg1(dependencyMap[2]));
const tmp2 = arg1(dependencyMap[2]);
let closure_8 = arg1(dependencyMap[3]).createICYMIStyles((marginBottom) => {
  let obj = {};
  obj = { backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_MOD_SUBTLE };
  obj.backgroundColor = obj;
  obj.container = { padding: marginBottom.margin };
  obj.avatarRow = { marginBottom: marginBottom.margin };
  obj = { borderRadius: importDefault(dependencyMap[4]).radii.md, marginRight: importDefault(dependencyMap[4]).space.PX_12 };
  obj.avatar = obj;
  obj.avatarTitle = {};
  obj.title = { height: importDefault(dependencyMap[4]).space.PX_16, marginBottom: importDefault(dependencyMap[4]).space.PX_12, borderRadius: 10, flexShrink: 1 };
  const obj1 = { height: importDefault(dependencyMap[4]).space.PX_16, marginBottom: importDefault(dependencyMap[4]).space.PX_12, borderRadius: 10, flexShrink: 1 };
  obj.subtitle = { height: importDefault(dependencyMap[4]).space.PX_16, marginBottom: marginBottom.margin, borderRadius: 10, flexShrink: 1 };
  const obj2 = { height: importDefault(dependencyMap[4]).space.PX_16, marginBottom: marginBottom.margin, borderRadius: 10, flexShrink: 1 };
  obj.image = { borderRadius: importDefault(dependencyMap[4]).radii.lg };
  obj.separator = {};
  return obj;
});
const obj = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/icymi/native/ICYMILoading.tsx");

export const ICYMILoading = function ICYMILoading() {
  const obj = {};
  const items = [callback(ICYMILoadingItem, {}), callback(ICYMILoadingItem, {})];
  obj.children = items;
  return callback2(closure_7, obj);
};
