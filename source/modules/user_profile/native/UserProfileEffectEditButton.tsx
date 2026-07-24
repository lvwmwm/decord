// Module ID: 13644
// Function ID: 104781
// Name: UserProfileEffectEditButton
// Dependencies: [31, 27, 5510, 8244, 482, 33, 4130, 689, 7935, 8250, 4098, 13645, 1934, 1212, 13640, 5584, 5085, 11841, 8262, 1273, 7956, 2]
// Exports: default

// Module 13644 (UserProfileEffectEditButton)
import result from "result";
import { View } from "get ActivityIndicator";
import { COLLECTIBLES_PREVIEW_SIZE } from "ARBITRARY_LARGE_OFFSET";
import { NOOP } from "sum";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_6;
let closure_7;
const require = arg1;
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { height: COLLECTIBLES_PREVIEW_SIZE, width: COLLECTIBLES_PREVIEW_SIZE, borderRadius: require("_createForOfIteratorHelperLoose").radii.xs, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_MUTED, overflow: "hidden" };
_createForOfIteratorHelperLoose.profileEffectPreviewContainer = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.sampleProfile = { aspectRatio: require("SAMPLE_PROFILE_ASPECT_RATIO").SAMPLE_PROFILE_ASPECT_RATIO, width: "100%" };
_createForOfIteratorHelperLoose.noneIcon = { tintColor: require("_createForOfIteratorHelperLoose").colors.TEXT_SUBTLE };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj1 = { tintColor: require("_createForOfIteratorHelperLoose").colors.TEXT_SUBTLE };
const result = require("ARBITRARY_LARGE_OFFSET").fileFinishedImporting("modules/user_profile/native/UserProfileEffectEditButton.tsx");

export default function UserProfileEffectEditButton(isTryItOut) {
  let displayProfile;
  let guildId;
  let pendingProfileEffect;
  let user;
  ({ displayProfile, user } = isTryItOut);
  ({ pendingProfileEffect, guildId } = isTryItOut);
  isTryItOut = isTryItOut.isTryItOut;
  let userProfileEffect;
  const tmp = _createForOfIteratorHelperLoose();
  let obj = user(isTryItOut[8]);
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
  let obj2 = user(isTryItOut[9]);
  let skuId;
  if (null != profilePreviewValue) {
    skuId = profilePreviewValue.skuId;
  }
  const fetchCollectiblesProduct = obj2.useFetchCollectiblesProduct(skuId);
  const product = fetchCollectiblesProduct.product;
  let obj3 = user(isTryItOut[8]);
  userProfileEffect = obj3.useUserProfileEffect({ user, guildId });
  if (undefined !== pendingProfileEffect) {
    userProfileEffect = pendingProfileEffect;
  }
  const items = [userProfileEffect, guildId, user, isTryItOut];
  let name;
  const callback = userProfileEffect.useCallback(() => {
    let obj = guildId(isTryItOut[10]);
    obj = { user, currentProfileEffect: userProfileEffect, guildId, isTryItOut };
    obj.openLazy(user(isTryItOut[12])(isTryItOut[11], isTryItOut.paths), "Profile Effect", obj);
  }, items);
  if (null != product) {
    name = product.name;
  }
  if (null == name) {
    const intl = user(isTryItOut[13]).intl;
    name = intl.string(user(isTryItOut[13]).t.PoWNfe);
  }
  let formatToPlainStringResult = name;
  if (null != guildId) {
    formatToPlainStringResult = name;
    if (null == userProfileEffect) {
      const intl2 = user(isTryItOut[13]).intl;
      obj = { label: name };
      formatToPlainStringResult = intl2.formatToPlainString(user(isTryItOut[13]).t.ep5D4i, obj);
    }
  }
  if (fetchCollectiblesProduct.isFetching) {
    const obj1 = {};
    const intl4 = user(isTryItOut[13]).intl;
    obj1.label = intl4.string(user(isTryItOut[13]).t.wR5wOo);
    const intl5 = user(isTryItOut[13]).intl;
    obj1.buttonText = intl5.string(user(isTryItOut[13]).t.MKDeyL);
    obj1.onPress = NOOP;
    obj1.leading = callback(user(isTryItOut[15]).ActivityIndicator, { animating: true, size: "large" });
    obj1.loading = true;
    obj1.disabled = true;
    obj1.hideArrow = true;
    obj2 = obj1;
  } else {
    obj2 = {};
    const intl3 = user(isTryItOut[13]).intl;
    obj2.label = intl3.string(user(isTryItOut[13]).t.wR5wOo);
    obj2.buttonText = formatToPlainStringResult;
    obj3 = { text: formatToPlainStringResult };
    obj2.accessibilityValue = obj3;
    obj2.onPress = callback;
    if (null != profilePreviewValue) {
      const obj4 = { style: tmp.profileEffectPreviewContainer };
      const obj5 = {};
      const obj6 = { uri: guildId(isTryItOut[17]) };
      obj5.source = obj6;
      obj5.style = tmp.sampleProfile;
      obj5.resizeMode = "cover";
      const items1 = [callback(guildId(isTryItOut[16]), obj5), ];
      const obj7 = { skuId: profilePreviewValue.skuId, bannerAdjustment: 0, useThumbnail: true };
      items1[1] = callback(guildId(isTryItOut[18]), obj7);
      obj4.children = items1;
      let tmp22 = callback2(View, obj4);
      const tmp28 = guildId(isTryItOut[16]);
    } else {
      const obj8 = { source: guildId(isTryItOut[20]), style: tmp.noneIcon };
      tmp22 = callback(user(isTryItOut[19]).Icon, obj8);
    }
    obj2.leading = tmp22;
  }
  return callback(user(isTryItOut[14]).UserProfileEditFormButton, obj2);
};
