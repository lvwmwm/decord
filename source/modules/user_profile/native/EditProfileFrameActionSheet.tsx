// Module ID: 13598
// Function ID: 104488
// Name: EditProfileFrameInner
// Dependencies: [57, 31, 27, 6790, 6781, 653, 33, 4130, 689, 7887, 7186, 5464, 5484, 675, 7844, 5187, 4126, 1212, 7856, 7859, 566, 13599, 7846, 7888, 13600, 7877, 7878, 7857, 8750, 4554, 2]
// Exports: default

// Module 13598 (EditProfileFrameInner)
import _slicedToArray from "_slicedToArray";
import result from "result";
import get_ActivityIndicator from "useCollectiblesData";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { isProfileFrameRecord } from "_isNativeReflectConstruct";
import { AnalyticEvents } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_9;
let require = arg1;
function EditProfileFrameInner(user) {
  let selectedProfileFrame;
  let setSelectedProfileFrame;
  user = user.user;
  ({ selectedProfileFrame, setSelectedProfileFrame } = user);
  const guildId = user.guildId;
  let obj = user(guildId[19]);
  const getOrFetchCollectiblesCategoriesAndPurchases = obj.useGetOrFetchCollectiblesCategoriesAndPurchases();
  let obj1 = user(guildId[20]);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj1.useStateFromStores(items, () => outer1_6.isFetching);
  const tmp4 = setSelectedProfileFrame(guildId[9])(user.id, guildId);
  let obj2 = user(guildId[22]);
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
      setSelectedProfileFrame(guildId[23])(user.id, user.getAvatarURL(null, 80), { withMutualGuilds: true, dispatchWait: true });
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
    return outer1_9(user(guildId[24]).EditProfileFrameRow, { items, size, selectedSkuId, setSelectedProfileFrame, guildId });
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
  const tmp3 = setSelectedProfileFrame(guildId[21])();
  if (null != profilePreviewValue) {
    skuId1 = profilePreviewValue.skuId;
  }
  obj2.previewSkuId = skuId1;
  const intl = user(guildId[17]).intl;
  obj2.nitroJoinCTA = intl.string(user(guildId[17]).t["JvNv+a"]);
  const intl2 = user(guildId[17]).intl;
  obj2.nitroUpgradeCTA = intl2.string(user(guildId[17]).t.hR2psy);
  items3[1] = tmp15(setSelectedProfileFrame(guildId[25]), obj2);
  const obj3 = { sections: tmp3 };
  let skuId2;
  if (null != selectedProfileFrame) {
    skuId2 = selectedProfileFrame.skuId;
  }
  obj3.selectedSkuId = skuId2;
  obj3.renderRow = callback;
  obj3.isFetching = stateFromStores;
  items3[2] = closure_9(user(guildId[26]).EditCollectiblesPickerList, obj3);
  obj.children = items3;
  return tmp10(tmp11, obj);
}
function ProfileFrameSectionPreview(arg0) {
  let guildId;
  let previewSkuId;
  let user;
  ({ previewSkuId, user, guildId } = arg0);
  const tmp = _createForOfIteratorHelperLoose();
  const tmp2 = purchase(7857)(previewSkuId);
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
  const items1 = [callback(purchase(8750), { user, guildId, profileFrame: memo, maxWidth: 280 }), ];
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
let result = require("get ActivityIndicator").fileFinishedImporting("modules/user_profile/native/EditProfileFrameActionSheet.tsx");

export default function EditProfileFrameActionSheet(arg0) {
  let currentProfileFrame;
  let guildId;
  let user;
  ({ user, currentProfileFrame, guildId } = arg0);
  let importDefault;
  let first;
  let memo;
  let tmp = _createForOfIteratorHelperLoose();
  const id = user.id;
  let str = "";
  if (null != id) {
    str = id;
  }
  const tmp2Result = importDefault(first[9])(str);
  importDefault = tmp2Result;
  const tmp4 = memo(React.useState(currentProfileFrame), 2);
  first = tmp4[0];
  let obj = guildId(first[10]);
  const tmp2 = importDefault(first[9]);
  const analyticsLocations = importDefault(first[11])(importDefault(first[12]).EDIT_PROFILE_FRAME_SHEET).analyticsLocations;
  const items = [guildId, tmp2Result];
  memo = React.useMemo(() => {
    const obj = { type: _undefined(first[12]).EDIT_PROFILE_FRAME_SHEET, guild_id: guildId };
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
  const items2 = [first, guildId];
  const callback = React.useCallback(() => {
    let obj = _undefined(first[13]);
    obj = {};
    const merged = Object.assign(memo);
    obj["is_fullscreen"] = true;
    obj.track(outer1_8.OPEN_POPOUT, obj);
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
  const items3 = [callback(View, { style: tmp.bounceOffset }), , ];
  const obj3 = { variant: "redesign/heading-18/bold", style: tmp.title };
  const intl = guildId(first[17]).intl;
  obj3.children = intl.string(guildId(first[17]).t["oTSa/q"]);
  items3[1] = callback(guildId(first[16]).Heading, obj3);
  items3[2] = callback(EditProfileFrameInner, { user, selectedProfileFrame: first, setSelectedProfileFrame: tmp4[1], guildId });
  obj1.children = items3;
  const items4 = [callback2(View, obj1), ];
  const obj4 = { user };
  let skuId;
  const obj2 = { style: tmp.bounceOffset };
  const tmp10 = callback;
  const tmp11 = callback2;
  const tmp12 = callback;
  const tmp6 = importDefault(first[11]);
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
  obj4.analyticsSource = importDefault(first[12]).EDIT_PROFILE_FRAME_SHEET;
  items4[1] = tmp12(importDefault(first[18]), obj4);
  obj.children = items4;
  obj.children = tmp11(guildId(first[15]).BottomSheet, obj);
  return tmp10(guildId(first[11]).AnalyticsLocationProvider, obj);
};
