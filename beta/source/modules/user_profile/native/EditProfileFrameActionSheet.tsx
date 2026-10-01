// Module ID: 14188
// Function ID: 14189
// Name: EditProfileFrameActionSheet
// Dependencies: [32, 19, 17, 6977, 6969, 1074, 21, 4836, 576, 7631, 7615, 6583, 6603, 1241, 7609, 7616, 6571, 4832, 1115, 7617, 10198, 504, 14189, 7611, 7632, 14190, 12747, 12748, 7618, 10789, 5293, 2]
// Exports: default

// Module 14188 (EditProfileFrameActionSheet)
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6603 */;
import ProfileFrameRecord from "ProfileFrameRecord" /* 6969 */;
import UserProfileSettingsActionCreators from "UserProfileSettingsActionCreators" /* 7609 */;
import useShopProductItems from "useShopProductItems" /* 7616 */;
import maybeFetchUserProfileDefault from "maybeFetchUserProfile" /* 7632 */;
import EditProfileFrameSection from "EditProfileFrameSection" /* 14190 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import CollectiblesPurchaseStore from "CollectiblesPurchaseStore" /* 6977 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let BottomSheet, importDefault;

let StyleSheet;
let c10;
let c9;
let hasOwnProperty;
let obj2;
let obj3;
let obj4;
let unpackModuleId;
function EditProfileFrameInner(user) {
  let intl;
  let intl2;
  let isFetching;
  let profileFrame;
  let profileFrame1;
  let selectedProfileFrame;
  let setSelectedProfileFrame;
  let skuId1;
  let skuId2;
  user = user.user;
  ({ selectedProfileFrame, setSelectedProfileFrame } = user);
  const guildId = user.guildId;
  let tmp = user;
  let obj = user(guildId[20]);
  const getOrFetchCollectiblesCategoriesAndPurchases = obj.useGetOrFetchCollectiblesCategoriesAndPurchases();
  const items = [CollectiblesPurchaseStore];
  const obj2 = user(guildId[21]);
  const stateFromStores = obj2.useStateFromStores(items, () => isFetching.isFetching);
  const tmp6 = setSelectedProfileFrame(guildId[22])();
  const tmp7 = setSelectedProfileFrame(guildId[9])(user.id, guildId);
  const obj3 = { pendingValue: selectedProfileFrame, userValue: profileFrame, guildValue: profileFrame1, guildId };
  profileFrame = undefined;
  const getProfilePreviewValue = user(guildId[23]).getProfilePreviewValue;
  user(guildId[23]);
  const tmp5 = setSelectedProfileFrame;
  if (tmp7 != null) {
    const _userProfile = tmp7._userProfile;
    if (_userProfile != null) {
      profileFrame = _userProfile.profileFrame;
    }
  }
  profileFrame1 = undefined;
  if (tmp7 != null) {
    const _guildMemberProfile = tmp7._guildMemberProfile;
    if (_guildMemberProfile != null) {
      profileFrame1 = _guildMemberProfile.profileFrame;
    }
  }
  const profilePreviewValue = getProfilePreviewValue(obj3);
  const items1 = [user];
  const effect = react.useEffect(() => {
    const tmp = null == user || user.isNonUserBot();
    if (!tmp) {
      const tmp4 = maybeFetchUserProfileDefault;
      tmp4(user.id, user.getAvatarURL(null, 80), { withMutualGuilds: true, dispatchWait: true });
    }
  }, items1);
  const items2 = [setSelectedProfileFrame, guildId];
  let skuId;
  const callback = react.useCallback((arg0) => {
    let items;
    let selectedSkuId;
    ({ items, size, selectedSkuId } = arg0);
    const obj = { items, size, selectedSkuId, setSelectedProfileFrame, guildId };
    return React4(EditProfileFrameSection.EditProfileFrameRow, obj);
  }, items2);
  const tmp14 = closure_10;
  const tmp15 = closure_11;
  const tmp17 = ProfileFrameSectionPreview;
  if (profilePreviewValue != null) {
    skuId = profilePreviewValue.skuId;
  }
  const items3 = [closure_9(tmp17, { previewSkuId: skuId, user, guildId }), , ];
  const obj4 = { user, previewSkuId: skuId1, nitroJoinCTA: intl.string(tmp(guildId[18]).t["JvNv+a"]), nitroUpgradeCTA: intl2.string(tmp(guildId[18]).t.hR2psy) };
  skuId1 = undefined;
  const tmp5Result = tmp5(guildId[26]);
  if (profilePreviewValue != null) {
    skuId1 = profilePreviewValue.skuId;
  }
  intl = tmp(tmp2[18]).intl;
  intl2 = tmp(tmp2[18]).intl;
  items3[1] = closure_9(tmp5Result, obj4);
  const obj5 = { sections: tmp6, selectedSkuId: skuId2, renderRow: callback, isFetching: stateFromStores };
  skuId2 = undefined;
  const EditCollectiblesPickerList = tmp(tmp2[27]).EditCollectiblesPickerList;
  if (selectedProfileFrame != null) {
    skuId2 = selectedProfileFrame.skuId;
  }
  const obj6 = { children: items3 };
  items3[2] = closure_9(EditCollectiblesPickerList, obj5);
  return tmp14(tmp15, obj6);
}
function ProfileFrameSectionPreview(arg0) {
  let guildId;
  let items1;
  let items2;
  let previewSkuId;
  let user;
  let purchase;
  ({ previewSkuId, user, guildId } = arg0);
  const tmp = closure_12();
  const tmp2 = purchase(7618)(previewSkuId);
  const product = tmp2.product;
  let c0 = product;
  purchase = tmp2.purchase;
  const items = [purchase, product];
  const obj = { style: tmp.previewContainer, children: items1 };
  const memo = react.useMemo(() => {
    let first;
    if (items != null) {
      first = items.items[0];
    }
    if (first == null) {
      let first1;
      if (purchase != null) {
        first1 = purchase.items[0];
      }
      first = first1;
    }
    let tmp3 = null;
    if (isProfileFrameRecord(first)) {
      tmp3 = first;
    }
    return tmp3;
  }, items);
  items1 = [closure_9(purchase(10789), { user, guildId, profileFrame: memo, maxWidth: 280 }), ];
  const obj2 = { style: tmp.previewGradient, start: { x: 0, y: 0.6 }, end: { x: 0, y: 1 }, colors: items2 };
  items2 = [, ];
  const tmp4 = purchase(5293);
  items2[0] = "" + tmp.previewGradient.color + "00";
  items2[1] = tmp.previewGradient.color;
  items1[1] = closure_9(tmp4, obj2);
  return closure_10(closure_5, obj);
}
({ View: hasOwnProperty, StyleSheet } = react_native);
const isProfileFrameRecord = ProfileFrameRecord.isProfileFrameRecord;
const AnalyticEvents = Constants.AnalyticEvents;
({ jsx: c9, jsxs: c10, Fragment: unpackModuleId } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, bounceOffset: { position: "absolute", top: -250, height: 250, right: 0, left: 0 }, title: obj3, previewContainer: { overflow: "hidden", height: 300, alignItems: "center" }, previewGradient: obj4 };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
createStyles = createStyles.createStyles;
obj3 = { alignSelf: "center", color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, margin: 25 };
obj4 = { bottom: -1, color: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
let merged = Object.assign(StyleSheet.absoluteFillObject);
let closure_12 = createStyles(obj);
let result = size.fileFinishedImporting("modules/user_profile/native/EditProfileFrameActionSheet.tsx");

export default function EditProfileFrameActionSheet(arg0) {
  let closure_1;
  let currentProfileFrame;
  let guildId;
  let intl;
  let items3;
  let items4;
  let obj3;
  let skuId;
  let skuId1;
  let tmp14;
  let user;
  ({ user, currentProfileFrame, guildId } = arg0);
  importDefault = undefined;
  let selectedProfileFrame;
  let memo;
  let tmp = closure_12();
  let str = user.id;
  const tmp4 = require("useDisplayProfile");
  if (str == null) {
    str = "";
  }
  const tmp4Result = tmp4(str);
  importDefault = tmp4Result;
  const tmp6 = memo(react.useState(currentProfileFrame), 2);
  selectedProfileFrame = tmp6[0];
  const tmp8 = tmp6[1];
  let obj = guildId(tmp3[10]);
  const bottomSheetRef = obj.useBottomSheetRef().bottomSheetRef;
  const tmp2Result = require("useAnalyticsLocations");
  const analyticsLocations = tmp2Result(tmp2(tmp3[12]).EDIT_PROFILE_FRAME_SHEET).analyticsLocations;
  const items = [guildId, tmp4Result];
  memo = react.useMemo(() => {
    let tmp;
    const obj = { type: AnalyticsLocationDefault.EDIT_PROFILE_FRAME_SHEET, guild_id: guildId, profile_has_nitro_customization: tmp };
    tmp = null != closure_1;
    if (tmp) {
      let result;
      if (closure_1 != null) {
        result = obj2.hasPremiumCustomization();
      }
      tmp = result;
    }
    return obj;
  }, items);
  const items1 = [memo];
  const items2 = [selectedProfileFrame, guildId];
  const callback = react.useCallback(() => {
    const obj = { is_fullscreen: true };
    const track = AnalyticsUtilsDefault.track;
    const OPEN_POPOUT = AnalyticEvents.OPEN_POPOUT;
    AnalyticsUtilsDefault;
    const merged = Object.assign(memo);
    track(OPEN_POPOUT, obj);
  }, items1);
  const callback1 = react.useCallback((arg0) => {
    let purchasedItem;
    const obj = { guildId, profileFrame: purchasedItem };
    const setPendingChanges = UserProfileSettingsActionCreators.setPendingChanges;
    UserProfileSettingsActionCreators;
    const obj2 = useShopProductItems;
    purchasedItem = obj2.getPurchasedItem(arg0, "firstProfileFrame");
    if (purchasedItem == null) {
      purchasedItem = first;
    }
    if (purchasedItem == null) {
      purchasedItem = null;
    }
    setPendingChanges(obj);
  }, items2);
  let obj2 = { value: analyticsLocations, children: tmp14(BottomSheet, obj3) };
  const AnalyticsLocationProvider = guildId(tmp3[11]).AnalyticsLocationProvider;
  obj3 = { scrollable: true, ref: bottomSheetRef, onExpand: callback, startExpanded: true, children: items4 };
  const obj4 = { style: tmp.container, children: items3 };
  const obj5 = { style: tmp.bounceOffset };
  BottomSheet = guildId(tmp3[16]).BottomSheet;
  items3 = [closure_9(closure_5, obj5), , ];
  const obj6 = { variant: "redesign/heading-18/bold", style: tmp.title, children: intl.string(guildId(selectedProfileFrame[18]).t["oTSa/q"]) };
  const Heading = guildId(tmp3[17]).Heading;
  intl = guildId(tmp3[18]).intl;
  items3[1] = closure_9(Heading, obj6);
  items3[2] = closure_9(EditProfileFrameInner, { user, selectedProfileFrame, setSelectedProfileFrame: tmp8, guildId });
  items4 = [closure_10(closure_5, obj4), ];
  const obj7 = { user, currentSkuId: skuId, selectedSkuId: skuId1, onApply: callback1, analyticsLocations, analyticsSource: require("AnalyticsLocation").EDIT_PROFILE_FRAME_SHEET };
  skuId = undefined;
  tmp14 = closure_10;
  const tmp2Result2 = require("EditCollectiblesCTAButton");
  if (currentProfileFrame != null) {
    skuId = currentProfileFrame.skuId;
  }
  skuId1 = undefined;
  if (selectedProfileFrame != null) {
    skuId1 = selectedProfileFrame.skuId;
  }
  items4[1] = closure_9(tmp2Result2, obj7);
  return closure_9(AnalyticsLocationProvider, obj2);
};
