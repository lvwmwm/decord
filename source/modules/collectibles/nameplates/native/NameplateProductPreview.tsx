// Module ID: 8740
// Function ID: 69119
// Name: NameplateUser
// Dependencies: []
// Exports: default

// Module 8740 (NameplateUser)
function NameplateUser(arg0) {
  let previewAvatarDecoration;
  let previewNameplate;
  let importDefault;
  let dependencyMap;
  ({ previewNameplate, previewAvatarDecoration } = arg0);
  let obj = arg1(dependencyMap[11]);
  const currentUser = obj.useCurrentUser();
  const arg1 = currentUser;
  let obj1 = arg1(dependencyMap[13]);
  obj = { pendingValue: previewAvatarDecoration };
  let avatarDecoration;
  if (null != currentUser) {
    avatarDecoration = currentUser.avatarDecoration;
  }
  obj.userValue = avatarDecoration;
  const tmp2Result = importDefault(dependencyMap[12])(obj1.getProfilePreviewValue(obj));
  importDefault = tmp2Result;
  const tmp2 = importDefault(dependencyMap[12]);
  const items = [closure_5];
  const stateFromStores = arg1(dependencyMap[14]).useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  dependencyMap = stateFromStores;
  const obj4 = arg1(dependencyMap[14]);
  const name = importDefault(dependencyMap[15]).getName(currentUser);
  obj = { userId: currentUser.id };
  let tmp7 = name;
  if (null != importDefault(dependencyMap[16])(obj)) {
    obj1 = { userId: currentUser.id, userName: name, effectDisplayType: arg1(dependencyMap[18]).EffectDisplayType.STATIC, lineClamp: 1, variant: "text-md/semibold" };
    tmp7 = callback(importDefault(dependencyMap[17]), obj1);
    const tmp11 = importDefault(dependencyMap[17]);
  }
  const items1 = [currentUser, tmp2Result, stateFromStores];
  const memo = React.useMemo(() => {
    const obj = { user: currentUser, guildId: undefined, size: currentUser(stateFromStores[19]).AvatarSizes.NORMAL, avatarDecoration: tmp2Result, animate: !stateFromStores, autoStatusCutout: true, aria-hidden: true };
    return callback(currentUser(stateFromStores[19]).Avatar, obj);
  }, items1);
  const obj2 = { nameplate: previewNameplate, icon: memo, label: tmp7, isPreviewRow: true };
  return callback(arg1(dependencyMap[20]).UserNameplateRow, obj2);
}
function PlaceholderUser(end) {
  let start;
  let user;
  ({ user, start } = end);
  if (start === undefined) {
    start = false;
  }
  let flag = end.end;
  if (flag === undefined) {
    flag = false;
  }
  let obj = {};
  obj = { source: obj };
  obj = { uri: user.avatarSrc, size: arg1(dependencyMap[19]).AvatarSizes.NORMAL, aria-hidden: true };
  obj.icon = callback(arg1(dependencyMap[19]).Avatar, obj);
  obj.label = user.name;
  obj.start = start;
  obj.end = flag;
  return callback(arg1(dependencyMap[21]).TableRow, obj);
}
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = { container: {} };
obj = { paddingHorizontal: importDefault(dependencyMap[5]).space.PX_16 };
obj.memberListContainer = obj;
const tmp2 = arg1(dependencyMap[3]);
obj.memberListTitle = { paddingVertical: importDefault(dependencyMap[5]).space.PX_8 };
const obj1 = { paddingVertical: importDefault(dependencyMap[5]).space.PX_8 };
obj.memberListGradient = { color: importDefault(dependencyMap[5]).colors.MOBILE_ACTIONSHEET_BACKGROUND };
let closure_8 = obj.createStyles(obj);
const obj2 = { color: importDefault(dependencyMap[5]).colors.MOBILE_ACTIONSHEET_BACKGROUND };
const result = arg1(dependencyMap[22]).fileFinishedImporting("modules/collectibles/nameplates/native/NameplateProductPreview.tsx");

export default function NameplateProductPreview(product) {
  let firstAvatarDecoration;
  let firstNameplate;
  const tmp = callback3();
  let obj = arg1(dependencyMap[6]);
  const shopProductItems = obj.useShopProductItems(product.product);
  ({ firstNameplate, firstAvatarDecoration } = shopProductItems);
  let obj1 = arg1(dependencyMap[7]);
  const nameplateData = obj1.getNameplateData(firstNameplate);
  let obj2 = arg1(dependencyMap[7]);
  const nameplateSampleUsers = obj2.getNameplateSampleUsers();
  let tmp5 = null;
  if (null != nameplateData) {
    obj = { "Bool(false)": "<string:2084372481>", "Bool(false)": "<string:3565813761>", "Bool(false)": "<string:4064411649>", "Null": "<string:4060086859>", "Null": "<string:285213259>", style: tmp.container };
    const intl = arg1(dependencyMap[8]).intl;
    obj = { a11y_text: nameplateData.imgAlt };
    obj.accessibilityLabel = intl.formatToPlainString(arg1(dependencyMap[8]).t.YJig7C, obj);
    obj1 = { style: tmp.memberListContainer };
    obj2 = { user: nameplateSampleUsers.mallow, end: true };
    const items = [callback(PlaceholderUser, obj2), , , , , , ];
    const obj3 = { style: tmp.memberListTitle };
    const intl2 = arg1(dependencyMap[8]).intl;
    const items1 = [intl2.string(arg1(dependencyMap[8]).t.yzW/fZ), " \u2014 3"];
    obj3.children = items1;
    items[1] = callback2(arg1(dependencyMap[9]).Text, obj3);
    const obj4 = { user: nameplateSampleUsers.phibi, start: true };
    items[2] = callback(PlaceholderUser, obj4);
    const obj5 = { previewNameplate: nameplateData, previewAvatarDecoration: firstAvatarDecoration };
    items[3] = callback(NameplateUser, obj5);
    const obj6 = { user: nameplateSampleUsers.locke, end: true };
    items[4] = callback(PlaceholderUser, obj6);
    const obj7 = { style: tmp.memberListTitle };
    const intl3 = arg1(dependencyMap[8]).intl;
    const items2 = [intl3.string(arg1(dependencyMap[8]).t.NG43/6), " \u2014 12"];
    obj7.children = items2;
    items[5] = callback2(arg1(dependencyMap[9]).Text, obj7);
    const obj8 = { user: nameplateSampleUsers.boom, start: true };
    items[6] = callback(PlaceholderUser, obj8);
    obj1.children = items;
    const items3 = [callback2(View, obj1), , ];
    const obj9 = { style: tmp.memberListGradient, start: { "Null": false, "Null": true }, end: { "Null": "75%", "Null": "100%" } };
    const items4 = [tmp.memberListGradient.color, ];
    const _HermesInternal = HermesInternal;
    items4[1] = "" + tmp.memberListGradient.color + "00";
    obj9.colors = items4;
    items3[1] = callback(importDefault(dependencyMap[10]), obj9);
    const obj10 = { style: tmp.memberListGradient, start: {}, end: { "Null": 131072.00314656927, "Null": 0.000000000000000000000000000000000000000000000000000000011294471302334573 } };
    const _HermesInternal2 = HermesInternal;
    const tmp19 = importDefault(dependencyMap[10]);
    const items5 = ["" + tmp.memberListGradient.color + "00", tmp.memberListGradient.color];
    obj10.colors = items5;
    items3[2] = callback(importDefault(dependencyMap[10]), obj10);
    obj.children = items3;
    tmp5 = callback2(View, obj);
    const tmp22 = importDefault(dependencyMap[10]);
  }
  return tmp5;
};
