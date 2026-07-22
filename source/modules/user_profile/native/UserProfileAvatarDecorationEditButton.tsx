// Module ID: 13478
// Function ID: 102297
// Name: COLLECTIBLES_PREVIEW_SIZE
// Dependencies: []
// Exports: default

// Module 13478 (COLLECTIBLES_PREVIEW_SIZE)
let closure_3 = importAll(dependencyMap[0]);
({ ActivityIndicator: closure_4, View: closure_5 } = arg1(dependencyMap[1]));
let closure_6 = importDefault(dependencyMap[2]);
const COLLECTIBLES_PREVIEW_SIZE = arg1(dependencyMap[3]).COLLECTIBLES_PREVIEW_SIZE;
const NOOP = arg1(dependencyMap[4]).NOOP;
const jsx = arg1(dependencyMap[5]).jsx;
let obj = arg1(dependencyMap[6]);
obj = {};
obj = { 0: 1107297124, 0: 129343, children: 191251, cutouts: 56554050, borderRadius: importDefault(dependencyMap[7]).radii.xs, height: COLLECTIBLES_PREVIEW_SIZE, width: COLLECTIBLES_PREVIEW_SIZE, backgroundColor: importDefault(dependencyMap[7]).colors.BACKGROUND_MOD_MUTED, overflow: "hidden" };
obj.previewContainer = obj;
const tmp2 = arg1(dependencyMap[1]);
obj.noneIcon = { tintColor: importDefault(dependencyMap[7]).colors.TEXT_SUBTLE };
let closure_10 = obj.createStyles(obj);
const obj1 = { tintColor: importDefault(dependencyMap[7]).colors.TEXT_SUBTLE };
const result = arg1(dependencyMap[18]).fileFinishedImporting("modules/user_profile/native/UserProfileAvatarDecorationEditButton.tsx");

export default function UserProfileAvatarDecorationEditButton(user) {
  let isTryItOut;
  let pendingAvatarDecoration;
  user = user.user;
  const arg1 = user;
  const guildId = user.guildId;
  const importDefault = guildId;
  ({ pendingAvatarDecoration, isTryItOut } = user);
  const dependencyMap = isTryItOut;
  let userAvatarDecoration;
  const tmp = callback();
  const React = tmp2;
  let obj = arg1(dependencyMap[8]);
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let member = null;
    if (tmp2) {
      member = member.getMember(guildId, user.id);
      const tmp2 = member;
    }
    return member;
  });
  let obj1 = arg1(dependencyMap[10]);
  obj = { pendingValue: pendingAvatarDecoration, userValue: user.avatarDecoration };
  let avatarDecoration;
  if (null != stateFromStores) {
    avatarDecoration = stateFromStores.avatarDecoration;
  }
  obj.guildValue = avatarDecoration;
  obj.guildId = guildId;
  const tmp4Result = importDefault(dependencyMap[9])(obj1.getProfilePreviewValue(obj));
  let obj3 = arg1(dependencyMap[11]);
  let skuId;
  if (null != tmp4Result) {
    skuId = tmp4Result.skuId;
  }
  const fetchCollectiblesProduct = obj3.useFetchCollectiblesProduct(skuId);
  const product = fetchCollectiblesProduct.product;
  let obj4 = arg1(dependencyMap[10]);
  userAvatarDecoration = obj4.useUserAvatarDecoration({ user, guildId });
  if (undefined !== pendingAvatarDecoration) {
    userAvatarDecoration = pendingAvatarDecoration;
  }
  const items1 = [user, guildId, userAvatarDecoration, isTryItOut];
  let name;
  const callback = React.useCallback(() => {
    let obj = user(isTryItOut[12]);
    obj = { user, guildId, currentAvatarDecoration: userAvatarDecoration, isTryItOut };
    const result = obj.openAvatarDecorationActionSheet(obj);
  }, items1);
  if (null != product) {
    name = product.name;
  }
  if (null == name) {
    const intl = arg1(dependencyMap[13]).intl;
    name = intl.string(arg1(dependencyMap[13]).t.PoWNfe);
  }
  let formatToPlainStringResult = name;
  if (null != guildId) {
    formatToPlainStringResult = name;
    if (null == userAvatarDecoration) {
      const intl2 = arg1(dependencyMap[13]).intl;
      obj = { label: name };
      formatToPlainStringResult = intl2.formatToPlainString(arg1(dependencyMap[13]).t.ep5D4i, obj);
    }
  }
  if (fetchCollectiblesProduct.isFetching) {
    obj1 = {};
    const intl4 = arg1(dependencyMap[13]).intl;
    obj1.label = intl4.string(arg1(dependencyMap[13]).t.7v0T9P);
    const intl5 = arg1(dependencyMap[13]).intl;
    obj1.buttonText = intl5.string(arg1(dependencyMap[13]).t.MKDeyL);
    obj1.onPress = NOOP;
    obj1.leading = <userAvatarDecoration />;
    obj1.loading = true;
    obj1.disabled = true;
    obj1.hideArrow = true;
    let obj2 = obj1;
  } else {
    obj2 = {};
    const intl3 = arg1(dependencyMap[13]).intl;
    obj2.label = intl3.string(arg1(dependencyMap[13]).t.7v0T9P);
    obj2.buttonText = formatToPlainStringResult;
    obj3 = { text: formatToPlainStringResult };
    obj2.accessibilityValue = obj3;
    obj2.onPress = callback;
    if (null != product) {
      obj4 = { style: tmp.previewContainer };
      const obj5 = { avatarDecoration: tmp4Result, size: COLLECTIBLES_PREVIEW_SIZE - 2 * importDefault(dependencyMap[7]).space.PX_4, animate: false };
      obj4.children = jsx(importDefault(dependencyMap[15]), obj5);
      let tmp24 = <closure_5 {...obj4} />;
      const tmp29 = importDefault(dependencyMap[15]);
    } else {
      const obj6 = { source: importDefault(dependencyMap[17]), style: tmp.noneIcon };
      tmp24 = jsx(arg1(dependencyMap[16]).Icon, obj6);
    }
    obj2.leading = tmp24;
  }
  return jsx(arg1(dependencyMap[14]).UserProfileEditFormButton, obj2);
};
