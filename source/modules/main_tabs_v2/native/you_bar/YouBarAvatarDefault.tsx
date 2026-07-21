// Module ID: 14990
// Function ID: 112895
// Name: AvatarDefault
// Dependencies: []

// Module 14990 (AvatarDefault)
function AvatarDefault() {
  const tmp = callback3();
  let obj = arg1(dependencyMap[7]);
  const token = obj.useToken(importDefault(dependencyMap[6]).colors.MOBILE_FLOATINGBAR_BACKGROUND);
  let obj1 = arg1(dependencyMap[8]);
  const statusSize = obj1.getStatusSize(closure_5);
  let num = 0;
  if (null != statusSize) {
    num = statusSize;
  }
  const tmp4 = arg1(dependencyMap[8]).AVATAR_SIZE_MAP[closure_5];
  const result = num / 2;
  const sum = result + arg1(dependencyMap[8]).STATUS_PADDING;
  const diff = tmp4 - sum - num / 4 * 2;
  obj = { shape: arg1(dependencyMap[9]).CutoutShape.Circle, x: diff, y: diff, size: 2 * sum };
  obj = {};
  obj1 = { height: arg1(dependencyMap[8]).AVATAR_SIZE_MAP[closure_5], width: arg1(dependencyMap[8]).AVATAR_SIZE_MAP[closure_5], position: "relative" };
  obj.style = obj1;
  const obj2 = { cutouts: items };
  const items = [obj];
  const obj3 = { style: items1 };
  const items1 = [tmp.placeholderAvatar, { width: tmp4, height: tmp4, backgroundColor: token }];
  const items2 = [callback(View, { style: tmp.placeholderAvatarBackground }), callback(arg1(dependencyMap[10]).ReactionIcon, { style: { width: tmp4, height: tmp4 } })];
  obj3.children = items2;
  obj2.children = callback2(View, obj3);
  const items3 = [callback(importDefault(dependencyMap[9]), obj2), ];
  const obj5 = { size: num, status: StatusTypes.OFFLINE, style: { position: "absolute", right: closure_6, bottom: closure_6 } };
  items3[1] = callback(arg1(dependencyMap[8]).Status, obj5);
  obj.children = items3;
  return callback2(View, obj);
}
function AvatarDefaultLarge() {
  const tmp = callback3();
  let obj = arg1(dependencyMap[7]);
  const token = obj.useToken(importDefault(dependencyMap[6]).colors.MOBILE_FLOATINGBAR_BACKGROUND);
  const tmp3 = arg1(dependencyMap[8]).AVATAR_SIZE_MAP[closure_4];
  const result = closure_8 / 2;
  const sum = result + arg1(dependencyMap[8]).STATUS_PADDING;
  const diff = tmp3 - sum - closure_8 / 4 * 2;
  obj = { shape: arg1(dependencyMap[9]).CutoutShape.Circle, x: diff + closure_10, y: diff + closure_10, size: 2 * sum };
  obj = { style: { height: arg1(dependencyMap[8]).AVATAR_SIZE_MAP[closure_5], width: arg1(dependencyMap[8]).AVATAR_SIZE_MAP[closure_5], position: "relative" } };
  const obj2 = {};
  const items = [tmp.avatarShadow, ];
  const obj1 = { height: arg1(dependencyMap[8]).AVATAR_SIZE_MAP[closure_5], width: arg1(dependencyMap[8]).AVATAR_SIZE_MAP[closure_5], position: "relative" };
  items[1] = { position: "absolute", width: tmp3, height: tmp3, top: tmp7 - (arg1(dependencyMap[8]).AVATAR_SIZE_MAP[closure_4] - closure_7) / 2, left: -closure_9 };
  obj2.style = items;
  const obj4 = { cutouts: items1 };
  const items1 = [obj];
  const obj5 = { style: items2 };
  const items2 = [tmp.placeholderAvatar, { width: tmp3, height: tmp3, backgroundColor: token }];
  const obj3 = { position: "absolute", width: tmp3, height: tmp3, top: tmp7 - (arg1(dependencyMap[8]).AVATAR_SIZE_MAP[closure_4] - closure_7) / 2, left: -closure_9 };
  const obj6 = { style: tmp.placeholderAvatarBackground };
  const items3 = [callback(View, obj6), ];
  const obj7 = {};
  const obj8 = { width: arg1(dependencyMap[8]).AVATAR_SIZE_MAP[closure_5], height: arg1(dependencyMap[8]).AVATAR_SIZE_MAP[closure_5] };
  obj7.style = obj8;
  items3[1] = callback(arg1(dependencyMap[10]).ReactionIcon, obj7);
  obj5.children = items3;
  obj4.children = callback2(View, obj5);
  const items4 = [callback(importDefault(dependencyMap[9]), obj4), callback(arg1(dependencyMap[8]).Status, { size: closure_8, status: StatusTypes.OFFLINE, style: obj10 })];
  obj2.children = items4;
  obj.children = callback2(View, obj2);
  return callback(View, obj);
}
const View = arg1(dependencyMap[1]).View;
const importAllResult = importAll(dependencyMap[0]);
({ YOU_BAR_AVATAR_LARGE_SIZE: closure_4, YOU_BAR_AVATAR_PLACEHOLDER_SIZE: closure_5, YOU_BAR_STATUS_INSET: closure_6, YOU_BAR_HEIGHT: closure_7, YOU_BAR_LARGE_STATUS_SIZE: closure_8, YOU_BAR_PADDING: closure_9, YOU_BAR_STATUS_OFFSET: closure_10 } = arg1(dependencyMap[2]));
const StatusTypes = arg1(dependencyMap[3]).StatusTypes;
const tmp2 = arg1(dependencyMap[2]);
({ jsx: closure_12, jsxs: closure_13 } = arg1(dependencyMap[4]));
let obj1 = arg1(dependencyMap[5]);
let obj = {};
obj = { lj: "r", apply: "nxl", __d: "r", index: "emptyImage", body: "%TypeError%", borderRadius: importDefault(dependencyMap[6]).radii.round, borderColor: importDefault(dependencyMap[6]).colors.BORDER_SUBTLE };
obj.placeholderAvatar = obj;
obj1 = { backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_MOD_SUBTLE, opacity: "<string:2920093709>", borderRadius: importDefault(dependencyMap[6]).radii.round, 0: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000007971358077182287, 0: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000022170280268213266 };
obj.placeholderAvatarBackground = obj1;
const merged = Object.assign(importDefault(dependencyMap[6]).shadows.SHADOW_MEDIUM);
obj.avatarShadow = {};
let closure_14 = obj1.createStyles(obj);
const obj2 = {};
const tmp3 = arg1(dependencyMap[4]);
const memoResult = importAllResult.memo(function YouBarAvatarDefault(isLarge) {
  return callback(isLarge.isLarge ? AvatarDefaultLarge : AvatarDefault, {});
});
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/main_tabs_v2/native/you_bar/YouBarAvatarDefault.tsx");

export default memoResult;
