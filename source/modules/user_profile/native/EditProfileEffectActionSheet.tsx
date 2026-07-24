// Module ID: 13645
// Function ID: 104784
// Name: EditProfileEffectInner
// Dependencies: [57, 31, 27, 6790, 6780, 653, 33, 4130, 689, 7974, 7186, 5462, 5482, 675, 7936, 7933, 5187, 4126, 1212, 7945, 7948, 566, 13646, 7935, 7975, 13647, 7965, 7966, 7946, 8278, 4554, 2]
// Exports: default

// Module 13645 (EditProfileEffectInner)
import _slicedToArray from "_slicedToArray";
import set from "set";
import get_ActivityIndicator from "EditCollectiblesPickerList";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { isProfileEffectRecord } from "_isNativeReflectConstruct";
import { AnalyticEvents } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_9;
let require = arg1;
function EditProfileEffectInner(user) {
  let selectedProfileEffect;
  let setSelectedProfileEffect;
  user = user.user;
  ({ selectedProfileEffect, setSelectedProfileEffect } = user);
  const guildId = user.guildId;
  let flag = user.isTryItOut;
  if (flag === undefined) {
    flag = false;
  }
  let obj = user(guildId[20]);
  const getOrFetchCollectiblesCategoriesAndPurchases = obj.useGetOrFetchCollectiblesCategoriesAndPurchases();
  let obj1 = user(guildId[21]);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj1.useStateFromStores(items, () => outer1_6.isFetching);
  const tmp4 = setSelectedProfileEffect(guildId[9])(user.id, guildId);
  let obj2 = user(guildId[23]);
  obj = { pendingValue: selectedProfileEffect };
  let profileEffect;
  if (null != tmp4) {
    const _userProfile = tmp4._userProfile;
    if (null != _userProfile) {
      profileEffect = _userProfile.profileEffect;
    }
  }
  obj.userValue = profileEffect;
  let profileEffect1;
  if (null != tmp4) {
    const _guildMemberProfile = tmp4._guildMemberProfile;
    if (null != _guildMemberProfile) {
      profileEffect1 = _guildMemberProfile.profileEffect;
    }
  }
  obj.guildValue = profileEffect1;
  obj.guildId = guildId;
  const profilePreviewValue = obj2.getProfilePreviewValue(obj);
  const items1 = [user];
  const effect = React.useEffect(() => {
    let isNonUserBotResult = null == user;
    if (!isNonUserBotResult) {
      isNonUserBotResult = user.isNonUserBot();
    }
    if (!isNonUserBotResult) {
      setSelectedProfileEffect(guildId[24])(user.id, user.getAvatarURL(null, 80), { withMutualGuilds: true, dispatchWait: true });
      const tmp5 = setSelectedProfileEffect(guildId[24]);
    }
  }, items1);
  const items2 = [setSelectedProfileEffect, guildId, flag];
  obj = {};
  obj1 = {};
  let skuId;
  const callback = React.useCallback((arg0) => {
    let items;
    let selectedSkuId;
    let size;
    ({ items, size, selectedSkuId } = arg0);
    return outer1_9(user(guildId[25]).EditProfileEffectRow, { items, size, selectedSkuId, setSelectedProfileEffect, guildId, isTryItOut: flag });
  }, items2);
  if (null != profilePreviewValue) {
    skuId = profilePreviewValue.skuId;
  }
  obj1.previewSkuId = skuId;
  obj1.user = user;
  obj1.guildId = guildId;
  const items3 = [closure_9(ProfileEffectSectionPreview, obj1), , ];
  obj2 = { user };
  let skuId1;
  const tmp10 = closure_10;
  const tmp11 = closure_11;
  const tmp12 = closure_9;
  const tmp13 = ProfileEffectSectionPreview;
  const tmp15 = closure_9;
  const tmp3 = setSelectedProfileEffect(guildId[22])();
  if (null != profilePreviewValue) {
    skuId1 = profilePreviewValue.skuId;
  }
  obj2.previewSkuId = skuId1;
  const intl = user(guildId[18]).intl;
  obj2.nitroJoinCTA = intl.string(user(guildId[18]).t.pertpd);
  const intl2 = user(guildId[18]).intl;
  obj2.nitroUpgradeCTA = intl2.string(user(guildId[18]).t["5eotIZ"]);
  items3[1] = tmp15(setSelectedProfileEffect(guildId[26]), obj2);
  const obj3 = { sections: tmp3 };
  let skuId2;
  if (null != selectedProfileEffect) {
    skuId2 = selectedProfileEffect.skuId;
  }
  obj3.selectedSkuId = skuId2;
  obj3.renderRow = callback;
  obj3.isFetching = stateFromStores;
  items3[2] = closure_9(user(guildId[27]).EditCollectiblesPickerList, obj3);
  obj.children = items3;
  return tmp10(tmp11, obj);
}
function ProfileEffectSectionPreview(arg0) {
  let guildId;
  let previewSkuId;
  let user;
  ({ previewSkuId, user, guildId } = arg0);
  const tmp = _createForOfIteratorHelperLoose();
  const tmp2 = purchase(7946)(previewSkuId);
  const product = tmp2.product;
  const require = product;
  purchase = tmp2.purchase;
  const items = [purchase, product];
  let obj = { style: tmp.previewContainer };
  const memo = React.useMemo(() => {
    let first;
    if (null != product) {
      first = product.items[0];
    }
    if (null == first) {
      let first1;
      if (null != purchase) {
        first1 = purchase.items[0];
      }
      first = first1;
    }
    let tmp6 = null;
    if (outer1_7(first)) {
      tmp6 = first;
    }
    return tmp6;
  }, items);
  const items1 = [callback(purchase(8278), { user, guildId, profileEffect: memo, maxWidth: 250 }), ];
  obj = { style: tmp.previewGradient, start: { x: 0, y: 0.6 }, end: { x: 0, y: 1 } };
  const items2 = ["" + tmp.previewGradient.color + "00", tmp.previewGradient.color];
  obj.colors = items2;
  items1[1] = callback(purchase(4554), obj);
  obj.children = items1;
  return callback2(View, obj);
}
const View = get_ActivityIndicator.View;
({ jsx: closure_9, jsxs: closure_10, Fragment: closure_11 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { flex: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.MOBILE_ACTIONSHEET_BACKGROUND };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.bounceOffset = { position: "absolute", top: -250, height: 250, right: 0, left: 0 };
let obj1 = { alignSelf: "center", color: require("_createForOfIteratorHelperLoose").colors.MOBILE_TEXT_HEADING_PRIMARY, margin: 25 };
_createForOfIteratorHelperLoose.title = obj1;
_createForOfIteratorHelperLoose.previewContainer = { overflow: "hidden", height: 300, alignItems: "center" };
let obj2 = {};
let merged = Object.assign(get_ActivityIndicator.StyleSheet.absoluteFillObject);
obj2["bottom"] = -1;
obj2["color"] = require("_createForOfIteratorHelperLoose").colors.MOBILE_ACTIONSHEET_BACKGROUND;
_createForOfIteratorHelperLoose.previewGradient = obj2;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let result = require("get ActivityIndicator").fileFinishedImporting("modules/user_profile/native/EditProfileEffectActionSheet.tsx");

export default function EditProfileEffectActionSheet(isTryItOut) {
  let currentProfileEffect;
  let guildId;
  let user;
  ({ user, currentProfileEffect, guildId } = isTryItOut);
  isTryItOut = isTryItOut.isTryItOut;
  let dependencyMap;
  let first;
  let memo;
  let tmp = _createForOfIteratorHelperLoose();
  const id = user.id;
  let str = "";
  if (null != id) {
    str = id;
  }
  const tmp2Result = isTryItOut(7974)(str);
  dependencyMap = tmp2Result;
  const tmp4 = first(memo.useState(currentProfileEffect), 2);
  first = tmp4[0];
  let obj = guildId(7186);
  const tmp2 = isTryItOut(7974);
  const analyticsLocations = isTryItOut(5462)(isTryItOut(5482).EDIT_PROFILE_EFFECT_SHEET).analyticsLocations;
  const items = [guildId, tmp2Result];
  memo = memo.useMemo(() => {
    const obj = { type: isTryItOut(_undefined[12]).EDIT_PROFILE_EFFECT_SHEET, guild_id: guildId };
    let tmp = null != _undefined;
    if (tmp) {
      let result;
      if (null != _undefined) {
        result = _undefined.hasPremiumCustomization();
      }
      tmp = result;
    }
    obj.profile_has_nitro_customization = tmp;
    return obj;
  }, items);
  const items1 = [memo];
  const items2 = [first, guildId, isTryItOut];
  const callback = memo.useCallback(() => {
    let obj = isTryItOut(_undefined[13]);
    obj = {};
    const merged = Object.assign(memo);
    obj["is_fullscreen"] = true;
    obj.track(outer1_8.OPEN_POPOUT, obj);
  }, items1);
  const callback1 = memo.useCallback(() => {
    if (isTryItOut) {
      let tmpResult = tmp(tmp2[14]);
      let tmp8 = null;
      if (null != first) {
        tmp8 = first;
      }
      const result = tmpResult.setTryItOutProfileEffect(tmp8);
    } else {
      tmpResult = tmp(tmp2[15]);
      const obj = { guildId };
      let tmp5 = null;
      if (null != first) {
        tmp5 = first;
      }
      obj.profileEffect = tmp5;
      tmpResult.setPendingChanges(obj);
    }
  }, items2);
  obj = { value: analyticsLocations };
  obj = { scrollable: true, ref: obj.useBottomSheetRef().bottomSheetRef, onExpand: callback, startExpanded: true };
  const obj1 = { style: tmp.container };
  const items3 = [callback(View, { style: tmp.bounceOffset }), , ];
  const obj3 = { variant: "redesign/heading-18/bold", style: tmp.title, accessibilityRole: "header" };
  const intl = guildId(1212).intl;
  obj3.children = intl.string(guildId(1212).t["/6nv6N"]);
  items3[1] = callback(guildId(4126).Text, obj3);
  items3[2] = callback(EditProfileEffectInner, { user, selectedProfileEffect: first, setSelectedProfileEffect: tmp4[1], guildId, isTryItOut });
  obj1.children = items3;
  const items4 = [callback2(View, obj1), ];
  const obj4 = { user };
  let skuId;
  const obj2 = { style: tmp.bounceOffset };
  const tmp10 = callback;
  const tmp11 = callback2;
  const tmp12 = callback;
  const tmp6 = isTryItOut(5462);
  if (null != currentProfileEffect) {
    skuId = currentProfileEffect.skuId;
  }
  obj4.currentSkuId = skuId;
  let skuId1;
  if (null != first) {
    skuId1 = first.skuId;
  }
  obj4.selectedSkuId = skuId1;
  obj4.isTryItOut = isTryItOut;
  obj4.onApply = callback1;
  obj4.analyticsLocations = analyticsLocations;
  obj4.analyticsSource = isTryItOut(5482).EDIT_PROFILE_EFFECT_SHEET;
  items4[1] = tmp12(isTryItOut(7945), obj4);
  obj.children = items4;
  obj.children = tmp11(guildId(5187).BottomSheet, obj);
  return tmp10(guildId(5462).AnalyticsLocationProvider, obj);
};
