// Module ID: 13472
// Function ID: 102268
// Name: UserProfileEffectEditButton
// Dependencies: []
// Exports: default

// Module 13472 (UserProfileEffectEditButton)
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const COLLECTIBLES_PREVIEW_SIZE = arg1(dependencyMap[2]).COLLECTIBLES_PREVIEW_SIZE;
const NOOP = arg1(dependencyMap[4]).NOOP;
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[5]));
let obj = arg1(dependencyMap[6]);
obj = {};
obj = { height: COLLECTIBLES_PREVIEW_SIZE, width: COLLECTIBLES_PREVIEW_SIZE, borderRadius: importDefault(dependencyMap[7]).radii.xs, backgroundColor: importDefault(dependencyMap[7]).colors.BACKGROUND_MOD_MUTED, overflow: "hidden" };
obj.profileEffectPreviewContainer = obj;
obj.sampleProfile = { aspectRatio: arg1(dependencyMap[3]).SAMPLE_PROFILE_ASPECT_RATIO, width: "100%" };
const tmp2 = arg1(dependencyMap[5]);
obj.noneIcon = { tintColor: importDefault(dependencyMap[7]).colors.TEXT_SUBTLE };
let closure_8 = obj.createStyles(obj);
const obj1 = { tintColor: importDefault(dependencyMap[7]).colors.TEXT_SUBTLE };
const result = arg1(dependencyMap[21]).fileFinishedImporting("modules/user_profile/native/UserProfileEffectEditButton.tsx");

export default function UserProfileEffectEditButton(isTryItOut) {
  let displayProfile;
  let guildId;
  let pendingProfileEffect;
  let user;
  ({ displayProfile, user } = isTryItOut);
  const arg1 = user;
  ({ pendingProfileEffect, guildId } = isTryItOut);
  const importDefault = guildId;
  isTryItOut = isTryItOut.isTryItOut;
  const dependencyMap = isTryItOut;
  let React;
  const tmp = callback3();
  let obj = arg1(dependencyMap[8]);
  obj = { pendingValue: pendingProfileEffect };
  let profileEffect;
  if (null != displayProfile) {
    const _userProfile = displayProfile._userProfile;
    if (null != _userProfile) {
      profileEffect = _userProfile.profileEffect;
    }
  }
  obj.userValue = profileEffect;
  let profileEffect1;
  if (null != displayProfile) {
    const _guildMemberProfile = displayProfile._guildMemberProfile;
    if (null != _guildMemberProfile) {
      profileEffect1 = _guildMemberProfile.profileEffect;
    }
  }
  obj.guildValue = profileEffect1;
  obj.guildId = guildId;
  const profilePreviewValue = obj.getProfilePreviewValue(obj);
  let obj2 = arg1(dependencyMap[9]);
  let skuId;
  if (null != profilePreviewValue) {
    skuId = profilePreviewValue.skuId;
  }
  const fetchCollectiblesProduct = obj2.useFetchCollectiblesProduct(skuId);
  const product = fetchCollectiblesProduct.product;
  let obj3 = arg1(dependencyMap[8]);
  let userProfileEffect = obj3.useUserProfileEffect({ user, guildId });
  if (undefined !== pendingProfileEffect) {
    userProfileEffect = pendingProfileEffect;
  }
  React = userProfileEffect;
  const items = [userProfileEffect, guildId, user, isTryItOut];
  let name;
  const callback = React.useCallback(() => {
    let obj = guildId(isTryItOut[10]);
    obj = { user, currentProfileEffect: userProfileEffect, guildId, isTryItOut };
    obj.openLazy(user(isTryItOut[12])(isTryItOut[11], isTryItOut.paths), "Profile Effect", obj);
  }, items);
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
    if (null == userProfileEffect) {
      const intl2 = arg1(dependencyMap[13]).intl;
      obj = { label: name };
      formatToPlainStringResult = intl2.formatToPlainString(arg1(dependencyMap[13]).t.ep5D4i, obj);
    }
  }
  if (fetchCollectiblesProduct.isFetching) {
    const obj1 = {};
    const intl4 = arg1(dependencyMap[13]).intl;
    obj1.label = intl4.string(arg1(dependencyMap[13]).t.wR5wOo);
    const intl5 = arg1(dependencyMap[13]).intl;
    obj1.buttonText = intl5.string(arg1(dependencyMap[13]).t.MKDeyL);
    obj1.onPress = NOOP;
    obj1.leading = callback(arg1(dependencyMap[15]).ActivityIndicator, { font: 397, dx: 97 });
    obj1.loading = true;
    obj1.disabled = true;
    obj1.hideArrow = true;
    obj2 = obj1;
  } else {
    obj2 = {};
    const intl3 = arg1(dependencyMap[13]).intl;
    obj2.label = intl3.string(arg1(dependencyMap[13]).t.wR5wOo);
    obj2.buttonText = formatToPlainStringResult;
    obj3 = { text: formatToPlainStringResult };
    obj2.accessibilityValue = obj3;
    obj2.onPress = callback;
    if (null != profilePreviewValue) {
      const obj4 = { style: tmp.profileEffectPreviewContainer };
      const obj5 = {};
      const obj6 = { uri: importDefault(dependencyMap[17]) };
      obj5.source = obj6;
      obj5.style = tmp.sampleProfile;
      obj5.resizeMode = "cover";
      const items1 = [callback(importDefault(dependencyMap[16]), obj5), ];
      const obj7 = { tn: null, withPlaceholder: "info", VIDEO_MODAL_ICON_END_CARD: "/", skuId: profilePreviewValue.skuId };
      items1[1] = callback(importDefault(dependencyMap[18]), obj7);
      obj4.children = items1;
      let tmp22 = callback2(View, obj4);
      const tmp28 = importDefault(dependencyMap[16]);
    } else {
      const obj8 = { source: importDefault(dependencyMap[20]), style: tmp.noneIcon };
      tmp22 = callback(arg1(dependencyMap[19]).Icon, obj8);
    }
    obj2.leading = tmp22;
  }
  return callback(arg1(dependencyMap[14]).UserProfileEditFormButton, obj2);
};
