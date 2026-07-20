// Module ID: 13464
// Function ID: 102226
// Name: EditProfileEffectInner
// Dependencies: []
// Exports: default

// Module 13464 (EditProfileEffectInner)
function EditProfileEffectInner(user) {
  let selectedProfileEffect;
  let setSelectedProfileEffect;
  user = user.user;
  const arg1 = user;
  ({ selectedProfileEffect, setSelectedProfileEffect } = user);
  const importDefault = setSelectedProfileEffect;
  const guildId = user.guildId;
  const dependencyMap = guildId;
  let flag = user.isTryItOut;
  if (flag === undefined) {
    flag = false;
  }
  let closure_3 = flag;
  let obj = arg1(dependencyMap[20]);
  const getOrFetchCollectiblesCategoriesAndPurchases = obj.useGetOrFetchCollectiblesCategoriesAndPurchases();
  let obj1 = arg1(dependencyMap[21]);
  const items = [closure_6];
  const stateFromStores = obj1.useStateFromStores(items, () => isFetching.isFetching);
  const tmp4 = importDefault(dependencyMap[9])(user.id, guildId);
  let obj2 = arg1(dependencyMap[23]);
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
      setSelectedProfileEffect(guildId[24])(user.id, user.getAvatarURL(null, 80), { status: null, style: null });
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
    return callback(user(guildId[25]).EditProfileEffectRow, { items, size, selectedSkuId, setSelectedProfileEffect, guildId, isTryItOut: flag });
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
  const tmp3 = importDefault(dependencyMap[22])();
  if (null != profilePreviewValue) {
    skuId1 = profilePreviewValue.skuId;
  }
  obj2.previewSkuId = skuId1;
  const intl = arg1(dependencyMap[18]).intl;
  obj2.nitroJoinCTA = intl.string(arg1(dependencyMap[18]).t.pertpd);
  const intl2 = arg1(dependencyMap[18]).intl;
  obj2.nitroUpgradeCTA = intl2.string(arg1(dependencyMap[18]).t.5eotIZ);
  items3[1] = tmp15(importDefault(dependencyMap[26]), obj2);
  const obj3 = { sections: tmp3 };
  let skuId2;
  if (null != selectedProfileEffect) {
    skuId2 = selectedProfileEffect.skuId;
  }
  obj3.selectedSkuId = skuId2;
  obj3.renderRow = callback;
  obj3.isFetching = stateFromStores;
  items3[2] = closure_9(arg1(dependencyMap[27]).EditCollectiblesPickerList, obj3);
  obj.children = items3;
  return tmp10(tmp11, obj);
}
function ProfileEffectSectionPreview(arg0) {
  let guildId;
  let previewSkuId;
  let user;
  ({ previewSkuId, user, guildId } = arg0);
  const tmp = callback4();
  const tmp2 = importDefault(dependencyMap[28])(previewSkuId);
  const product = tmp2.product;
  const arg1 = product;
  const purchase = tmp2.purchase;
  const importDefault = purchase;
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
    if (callback(first)) {
      tmp6 = first;
    }
    return tmp6;
  }, items);
  const items1 = [callback2(importDefault(dependencyMap[29]), { user, guildId, profileEffect: memo, maxWidth: 250 }), ];
  obj = { style: tmp.previewGradient, start: {}, end: { "Null": 131072.00314656927, "Null": 0.000000000000000000000000000000000000000000000000000000011294471302334573 } };
  const items2 = ["" + tmp.previewGradient.color + "00", tmp.previewGradient.color];
  obj.colors = items2;
  items1[1] = callback2(importDefault(dependencyMap[30]), obj);
  obj.children = items1;
  return callback3(View, obj);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const tmp2 = arg1(dependencyMap[2]);
const View = tmp2.View;
let closure_6 = importDefault(dependencyMap[3]);
const isProfileEffectRecord = arg1(dependencyMap[4]).isProfileEffectRecord;
const AnalyticEvents = arg1(dependencyMap[5]).AnalyticEvents;
({ jsx: closure_9, jsxs: closure_10, Fragment: closure_11 } = arg1(dependencyMap[6]));
let obj = arg1(dependencyMap[7]);
obj = {};
obj = { flex: 1, backgroundColor: importDefault(dependencyMap[8]).colors.MOBILE_ACTIONSHEET_BACKGROUND };
obj.container = obj;
obj.bounceOffset = { 1532122209: "row", 1663392805: "center", 1364614395: "flex-start", 996279293: 40, -936095340: null };
const tmp3 = arg1(dependencyMap[6]);
obj.title = { color: importDefault(dependencyMap[8]).colors.MOBILE_TEXT_HEADING_PRIMARY };
obj.previewContainer = { onFinishTransitioning: 48, NZD: 40, WHITESPACE_RE: 8 };
const obj2 = {};
const merged = Object.assign(tmp2.StyleSheet.absoluteFillObject);
obj2["bottom"] = -1;
obj2["color"] = importDefault(dependencyMap[8]).colors.MOBILE_ACTIONSHEET_BACKGROUND;
obj.previewGradient = obj2;
let closure_12 = obj.createStyles(obj);
const obj1 = { color: importDefault(dependencyMap[8]).colors.MOBILE_TEXT_HEADING_PRIMARY };
const result = arg1(dependencyMap[31]).fileFinishedImporting("modules/user_profile/native/EditProfileEffectActionSheet.tsx");

export default function EditProfileEffectActionSheet(isTryItOut) {
  let currentProfileEffect;
  let guildId;
  let user;
  ({ user, currentProfileEffect, guildId } = isTryItOut);
  const arg1 = guildId;
  isTryItOut = isTryItOut.isTryItOut;
  const importDefault = isTryItOut;
  let dependencyMap;
  let callback;
  let React;
  const tmp = callback4();
  const id = user.id;
  let str = "";
  if (null != id) {
    str = id;
  }
  const tmp2Result = importDefault(dependencyMap[9])(str);
  dependencyMap = tmp2Result;
  const tmp4 = callback(React.useState(currentProfileEffect), 2);
  const first = tmp4[0];
  callback = first;
  let obj = arg1(dependencyMap[10]);
  const tmp2 = importDefault(dependencyMap[9]);
  const analyticsLocations = importDefault(dependencyMap[11])(importDefault(dependencyMap[12]).EDIT_PROFILE_EFFECT_SHEET).analyticsLocations;
  const items = [guildId, tmp2Result];
  const memo = React.useMemo(() => {
    const obj = { type: isTryItOut(tmp2Result[12]).EDIT_PROFILE_EFFECT_SHEET, guild_id: guildId };
    let tmp = null != tmp2Result;
    if (tmp) {
      let result;
      if (null != tmp2Result) {
        result = tmp2Result.hasPremiumCustomization();
      }
      tmp = result;
    }
    obj.profile_has_nitro_customization = tmp;
    return obj;
  }, items);
  React = memo;
  const items1 = [memo];
  const items2 = [first, guildId, isTryItOut];
  callback = React.useCallback(() => {
    let obj = isTryItOut(tmp2Result[13]);
    obj = {};
    const merged = Object.assign(memo);
    obj["is_fullscreen"] = true;
    obj.track(constants.OPEN_POPOUT, obj);
  }, items1);
  const callback1 = React.useCallback(() => {
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
  const items3 = [callback2(View, { style: tmp.bounceOffset }), , ];
  const obj3 = { style: tmp.title };
  const intl = arg1(dependencyMap[18]).intl;
  obj3.children = intl.string(arg1(dependencyMap[18]).t./6nv6N);
  items3[1] = callback2(arg1(dependencyMap[17]).Text, obj3);
  items3[2] = callback2(EditProfileEffectInner, { user, selectedProfileEffect: first, setSelectedProfileEffect: tmp4[1], guildId, isTryItOut });
  obj1.children = items3;
  const items4 = [callback3(View, obj1), ];
  const obj4 = { user };
  let skuId;
  const obj2 = { style: tmp.bounceOffset };
  const tmp10 = callback2;
  const tmp11 = callback3;
  const tmp12 = callback2;
  const tmp6 = importDefault(dependencyMap[11]);
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
  obj4.analyticsSource = importDefault(dependencyMap[12]).EDIT_PROFILE_EFFECT_SHEET;
  items4[1] = tmp12(importDefault(dependencyMap[19]), obj4);
  obj.children = items4;
  obj.children = tmp11(arg1(dependencyMap[16]).BottomSheet, obj);
  return tmp10(arg1(dependencyMap[11]).AnalyticsLocationProvider, obj);
};
