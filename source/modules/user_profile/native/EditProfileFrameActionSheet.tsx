// Module ID: 13477
// Function ID: 102299
// Name: EditProfileFrameInner
// Dependencies: []
// Exports: default

// Module 13477 (EditProfileFrameInner)
function EditProfileFrameInner(user) {
  let selectedProfileFrame;
  let setSelectedProfileFrame;
  user = user.user;
  const arg1 = user;
  ({ selectedProfileFrame, setSelectedProfileFrame } = user);
  const importDefault = setSelectedProfileFrame;
  const guildId = user.guildId;
  const dependencyMap = guildId;
  let obj = arg1(dependencyMap[19]);
  const getOrFetchCollectiblesCategoriesAndPurchases = obj.useGetOrFetchCollectiblesCategoriesAndPurchases();
  let obj1 = arg1(dependencyMap[20]);
  const items = [closure_6];
  const stateFromStores = obj1.useStateFromStores(items, () => isFetching.isFetching);
  const tmp4 = importDefault(dependencyMap[9])(user.id, guildId);
  let obj2 = arg1(dependencyMap[22]);
  obj = { pendingValue: selectedProfileFrame };
  let profileFrame;
  if (null != tmp4) {
    const _userProfile = tmp4._userProfile;
    if (null != _userProfile) {
      profileFrame = _userProfile.profileFrame;
    }
  }
  obj.userValue = profileFrame;
  let profileFrame1;
  if (null != tmp4) {
    const _guildMemberProfile = tmp4._guildMemberProfile;
    if (null != _guildMemberProfile) {
      profileFrame1 = _guildMemberProfile.profileFrame;
    }
  }
  obj.guildValue = profileFrame1;
  obj.guildId = guildId;
  const profilePreviewValue = obj2.getProfilePreviewValue(obj);
  const items1 = [user];
  const effect = React.useEffect(() => {
    let isNonUserBotResult = null == user;
    if (!isNonUserBotResult) {
      isNonUserBotResult = user.isNonUserBot();
    }
    if (!isNonUserBotResult) {
      setSelectedProfileFrame(guildId[23])(user.id, user.getAvatarURL(null, 80), { "Bool(false)": null, "Bool(false)": null });
      const tmp5 = setSelectedProfileFrame(guildId[23]);
    }
  }, items1);
  const items2 = [setSelectedProfileFrame, guildId];
  obj = {};
  obj1 = {};
  let skuId;
  const callback = React.useCallback((arg0) => {
    let items;
    let selectedSkuId;
    let size;
    ({ items, size, selectedSkuId } = arg0);
    return callback(user(guildId[24]).EditProfileFrameRow, { items, size, selectedSkuId, setSelectedProfileFrame, guildId });
  }, items2);
  if (null != profilePreviewValue) {
    skuId = profilePreviewValue.skuId;
  }
  obj1.previewSkuId = skuId;
  obj1.user = user;
  obj1.guildId = guildId;
  const items3 = [closure_9(ProfileFrameSectionPreview, obj1), , ];
  obj2 = { user };
  let skuId1;
  const tmp10 = closure_10;
  const tmp11 = closure_11;
  const tmp12 = closure_9;
  const tmp13 = ProfileFrameSectionPreview;
  const tmp15 = closure_9;
  const tmp3 = importDefault(dependencyMap[21])();
  if (null != profilePreviewValue) {
    skuId1 = profilePreviewValue.skuId;
  }
  obj2.previewSkuId = skuId1;
  const intl = arg1(dependencyMap[17]).intl;
  obj2.nitroJoinCTA = intl.string(arg1(dependencyMap[17]).t.JvNv+a);
  const intl2 = arg1(dependencyMap[17]).intl;
  obj2.nitroUpgradeCTA = intl2.string(arg1(dependencyMap[17]).t.hR2psy);
  items3[1] = tmp15(importDefault(dependencyMap[25]), obj2);
  const obj3 = { sections: tmp3 };
  let skuId2;
  if (null != selectedProfileFrame) {
    skuId2 = selectedProfileFrame.skuId;
  }
  obj3.selectedSkuId = skuId2;
  obj3.renderRow = callback;
  obj3.isFetching = stateFromStores;
  items3[2] = closure_9(arg1(dependencyMap[26]).EditCollectiblesPickerList, obj3);
  obj.children = items3;
  return tmp10(tmp11, obj);
}
function ProfileFrameSectionPreview(arg0) {
  let guildId;
  let previewSkuId;
  let user;
  ({ previewSkuId, user, guildId } = arg0);
  const tmp = callback4();
  const tmp2 = importDefault(dependencyMap[27])(previewSkuId);
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
  const items1 = [callback2(importDefault(dependencyMap[28]), { user, guildId, profileFrame: memo, maxWidth: 280 }), ];
  obj = { style: tmp.previewGradient, start: {}, end: {} };
  const items2 = ["" + tmp.previewGradient.color + "00", tmp.previewGradient.color];
  obj.colors = items2;
  items1[1] = callback2(importDefault(dependencyMap[29]), obj);
  obj.children = items1;
  return callback3(View, obj);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const tmp2 = arg1(dependencyMap[2]);
const View = tmp2.View;
let closure_6 = importDefault(dependencyMap[3]);
const isProfileFrameRecord = arg1(dependencyMap[4]).isProfileFrameRecord;
const AnalyticEvents = arg1(dependencyMap[5]).AnalyticEvents;
({ jsx: closure_9, jsxs: closure_10, Fragment: closure_11 } = arg1(dependencyMap[6]));
let obj = arg1(dependencyMap[7]);
obj = {};
obj = { flex: 1, backgroundColor: importDefault(dependencyMap[8]).colors.MOBILE_ACTIONSHEET_BACKGROUND };
obj.container = obj;
obj.bounceOffset = { "Null": "row", "Null": "center", "Null": "flex-start", flexDirection: 40, gap: null };
const tmp3 = arg1(dependencyMap[6]);
obj.title = { color: importDefault(dependencyMap[8]).colors.MOBILE_TEXT_HEADING_PRIMARY };
obj.previewContainer = { header: null, raw: null, borderRadius: null };
const obj2 = {};
const merged = Object.assign(tmp2.StyleSheet.absoluteFillObject);
obj2["bottom"] = -1;
obj2["color"] = importDefault(dependencyMap[8]).colors.MOBILE_ACTIONSHEET_BACKGROUND;
obj.previewGradient = obj2;
let closure_12 = obj.createStyles(obj);
const obj1 = { color: importDefault(dependencyMap[8]).colors.MOBILE_TEXT_HEADING_PRIMARY };
const result = arg1(dependencyMap[30]).fileFinishedImporting("modules/user_profile/native/EditProfileFrameActionSheet.tsx");

export default function EditProfileFrameActionSheet(arg0) {
  let currentProfileFrame;
  let guildId;
  let user;
  ({ user, currentProfileFrame, guildId } = arg0);
  const arg1 = guildId;
  let importDefault;
  let dependencyMap;
  let callback;
  const tmp = callback4();
  const id = user.id;
  let str = "";
  if (null != id) {
    str = id;
  }
  const tmp2Result = importDefault(dependencyMap[9])(str);
  importDefault = tmp2Result;
  const tmp4 = callback(React.useState(currentProfileFrame), 2);
  const first = tmp4[0];
  dependencyMap = first;
  let obj = arg1(dependencyMap[10]);
  const tmp2 = importDefault(dependencyMap[9]);
  const analyticsLocations = importDefault(dependencyMap[11])(importDefault(dependencyMap[12]).EDIT_PROFILE_FRAME_SHEET).analyticsLocations;
  const items = [guildId, tmp2Result];
  const memo = React.useMemo(() => {
    const obj = { type: tmp2Result(first[12]).EDIT_PROFILE_FRAME_SHEET, guild_id: guildId };
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
  callback = memo;
  const items1 = [memo];
  const items2 = [first, guildId];
  callback = React.useCallback(() => {
    let obj = tmp2Result(first[13]);
    obj = {};
    const merged = Object.assign(memo);
    obj["is_fullscreen"] = true;
    obj.track(constants.OPEN_POPOUT, obj);
  }, items1);
  const callback1 = React.useCallback(() => {
    let obj = guildId(first[14]);
    obj = { guildId };
    let tmp = null;
    if (null != first) {
      tmp = first;
    }
    obj.profileFrame = tmp;
    obj.setPendingChanges(obj);
  }, items2);
  obj = { value: analyticsLocations };
  obj = { scrollable: true, ref: obj.useBottomSheetRef().bottomSheetRef, onExpand: callback, startExpanded: true };
  const obj1 = { style: tmp.container };
  const items3 = [callback2(View, { style: tmp.bounceOffset }), , ];
  const obj3 = { variant: "redesign/heading-18/bold", style: tmp.title };
  const intl = arg1(dependencyMap[17]).intl;
  obj3.children = intl.string(arg1(dependencyMap[17]).t.oTSa/q);
  items3[1] = callback2(arg1(dependencyMap[16]).Heading, obj3);
  items3[2] = callback2(EditProfileFrameInner, { user, selectedProfileFrame: first, setSelectedProfileFrame: tmp4[1], guildId });
  obj1.children = items3;
  const items4 = [callback3(View, obj1), ];
  const obj4 = { user };
  let skuId;
  const obj2 = { style: tmp.bounceOffset };
  const tmp10 = callback2;
  const tmp11 = callback3;
  const tmp12 = callback2;
  const tmp6 = importDefault(dependencyMap[11]);
  if (null != currentProfileFrame) {
    skuId = currentProfileFrame.skuId;
  }
  obj4.currentSkuId = skuId;
  let skuId1;
  if (null != first) {
    skuId1 = first.skuId;
  }
  obj4.selectedSkuId = skuId1;
  obj4.onApply = callback1;
  obj4.analyticsLocations = analyticsLocations;
  obj4.analyticsSource = importDefault(dependencyMap[12]).EDIT_PROFILE_FRAME_SHEET;
  items4[1] = tmp12(importDefault(dependencyMap[18]), obj4);
  obj.children = items4;
  obj.children = tmp11(arg1(dependencyMap[15]).BottomSheet, obj);
  return tmp10(arg1(dependencyMap[11]).AnalyticsLocationProvider, obj);
};
