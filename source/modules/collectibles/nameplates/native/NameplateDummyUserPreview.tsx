// Module ID: 8216
// Function ID: 64935
// Name: NAMEPLATE_DUMMY_USER_PREVIEW_CONFIG
// Dependencies: []
// Exports: NameplateDummyUserPreview

// Module 8216 (NAMEPLATE_DUMMY_USER_PREVIEW_CONFIG)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_4 = importDefault(dependencyMap[2]);
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[3]));
let obj = {};
obj = { padding: importDefault(dependencyMap[5]).space.PX_4, avatarMarginRight: importDefault(dependencyMap[5]).space.PX_4, placeholderBarHeight: 6 };
obj[arg1(dependencyMap[4]).AvatarSizes.XSMALL_20] = obj;
obj[arg1(dependencyMap[4]).AvatarSizes.XSMALL] = {};
obj = { padding: importDefault(dependencyMap[5]).space.PX_8, avatarMarginRight: importDefault(dependencyMap[5]).space.PX_8, placeholderBarHeight: 14 };
obj[arg1(dependencyMap[4]).AvatarSizes.NORMAL] = obj;
const tmp3 = arg1(dependencyMap[3]);
let closure_8 = arg1(dependencyMap[6]).createStyles((arg0, arg1) => {
  let obj = {};
  obj = { padding: tmp.padding, borderRadius: importDefault(dependencyMap[5]).radii.sm };
  obj.container = obj;
  obj = { borderRadius: importDefault(dependencyMap[5]).radii.round, marginRight: tmp.avatarMarginRight };
  let str = "transparent";
  if (arg1) {
    str = importDefault(dependencyMap[5]).colors.BORDER_STRONG;
  }
  obj.backgroundColor = str;
  obj.avatarContainer = obj;
  const obj1 = {};
  let num = 0.5;
  if (arg1) {
    num = 0;
  }
  obj1.opacity = num;
  obj.avatar = obj1;
  obj.placeholderBar = { borderRadius: importDefault(dependencyMap[5]).radii.md, height: obj[arg0].placeholderBarHeight, backgroundColor: importDefault(dependencyMap[5]).colors.BORDER_STRONG };
  const obj2 = { borderRadius: importDefault(dependencyMap[5]).radii.md, height: obj[arg0].placeholderBarHeight, backgroundColor: importDefault(dependencyMap[5]).colors.BORDER_STRONG };
  obj.nameplate = { borderRadius: importDefault(dependencyMap[5]).radii.sm };
  return obj;
});
const obj4 = arg1(dependencyMap[6]);
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/collectibles/nameplates/native/NameplateDummyUserPreview.tsx");

export const NAMEPLATE_DUMMY_USER_PREVIEW_CONFIG = obj;
export const NameplateDummyUserPreview = function NameplateDummyUserPreview(hideAvatar) {
  let animate;
  let nameplate;
  let style;
  let flag = hideAvatar.hideAvatar;
  if (flag === undefined) {
    flag = false;
  }
  let NORMAL = hideAvatar.avatarSize;
  if (NORMAL === undefined) {
    NORMAL = arg1(dependencyMap[4]).AvatarSizes.NORMAL;
  }
  ({ animate, nameplate, style } = hideAvatar);
  if (animate === undefined) {
    animate = false;
  }
  const tmp3 = callback2(NORMAL, flag);
  let obj = arg1(dependencyMap[7]);
  const items = [closure_4];
  obj = { style: items1 };
  const items1 = [tmp3.container, style];
  const stateFromStores = obj.useStateFromStores(items, () => callback(closure_2[8]).isThemeDark(theme.theme));
  obj = { nameplate, fullOpacity: true, style: tmp3.nameplate, animate };
  const items2 = [callback(importDefault(dependencyMap[9]), obj), , ];
  const obj1 = { style: tmp3.avatarContainer };
  const obj2 = {};
  if (stateFromStores) {
    let tmp10 = tmp9[10];
  } else {
    tmp10 = tmp9[11];
  }
  obj2.source = importDefault(tmp10);
  obj2.size = NORMAL;
  obj2.aria-hidden = true;
  obj2.style = tmp3.avatar;
  obj1.children = callback(arg1(dependencyMap[4]).Avatar, obj2);
  items2[1] = callback(View, obj1);
  const items3 = [tmp3.placeholderBar, { width: hideAvatar.width }];
  items2[2] = callback(View, { style: items3 });
  obj.children = items2;
  return closure_6(View, obj);
};
