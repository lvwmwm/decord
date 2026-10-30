// Module ID: 16450
// Function ID: 16451
// Name: EditProfileFrameActionSheet
// Dependencies: [32, 19, 17, 7728, 7720, 1072, 21, 5009, 575, 8749, 8733, 7320, 7345, 1253, 8727, 8734, 5267, 7315, 1114, 8735, 10584, 504, 16451, 15031, 8729, 8750, 16452, 15037, 15038, 8736, 11471, 5582, 2]
// Exports: default

// Module 16450 (EditProfileFrameActionSheet)
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1253 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7345 */;
import ProfileFrameRecord from "ProfileFrameRecord" /* 7720 */;
import UserProfileSettingsActionCreators from "UserProfileSettingsActionCreators" /* 8727 */;
import useShopProductItems from "useShopProductItems" /* 8734 */;
import maybeFetchUserProfileDefault from "maybeFetchUserProfile" /* 8750 */;
import EditProfileFrameSection from "EditProfileFrameSection" /* 16452 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import CollectiblesPurchaseStore from "CollectiblesPurchaseStore" /* 7728 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let BottomSheet, importDefault;

let StyleSheet;
let c10;
let c9;
let hasOwnProperty;
let obj2;
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
  let tmp25;
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
  const obj3 = user(guildId[23]);
  const shouldPinCollectiblesEditPreview = obj3.useShouldPinCollectiblesEditPreview();
  const tmp8 = setSelectedProfileFrame(guildId[9])(user.id, guildId);
  const obj4 = { pendingValue: selectedProfileFrame, userValue: profileFrame, guildValue: profileFrame1, guildId };
  profileFrame = undefined;
  const getProfilePreviewValue = user(guildId[24]).getProfilePreviewValue;
  user(guildId[24]);
  const tmp5 = setSelectedProfileFrame;
  if (tmp8 != null) {
    const _userProfile = tmp8._userProfile;
    if (_userProfile != null) {
      profileFrame = _userProfile.profileFrame;
    }
  }
  profileFrame1 = undefined;
  if (tmp8 != null) {
    const _guildMemberProfile = tmp8._guildMemberProfile;
    if (_guildMemberProfile != null) {
      profileFrame1 = _guildMemberProfile.profileFrame;
    }
  }
  const profilePreviewValue = getProfilePreviewValue(obj4);
  const items1 = [user];
  const effect = react.useEffect(() => {
    const tmp = null == user || user.isNonUserBot();
    if (!tmp) {
      const tmp4 = maybeFetchUserProfileDefault;
      tmp4(user.id, user.getAvatarURL(null, 80), { withMutualGuilds: true });
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
  const tmp18 = ProfileFrameSectionPreview;
  if (profilePreviewValue != null) {
    skuId = profilePreviewValue.skuId;
  }
  const items3 = [closure_9(tmp18, { previewSkuId: skuId, user, guildId }), ];
  const obj5 = { user, previewSkuId: skuId1, nitroJoinCTA: intl.string(tmp(guildId[18]).t["JvNv+a"]), nitroUpgradeCTA: intl2.string(tmp(guildId[18]).t.hR2psy) };
  skuId1 = undefined;
  const tmp5Result = tmp5(guildId[27]);
  if (profilePreviewValue != null) {
    skuId1 = profilePreviewValue.skuId;
  }
  const obj6 = { children: items3 };
  intl = tmp(tmp2[18]).intl;
  intl2 = tmp(tmp2[18]).intl;
  items3[1] = closure_9(tmp5Result, obj5);
  const tmp15Result = closure_10(closure_11, obj6);
  let tmp23 = null;
  if (shouldPinCollectiblesEditPreview) {
    tmp23 = tmp15Result;
  }
  const items4 = [tmp23, ];
  const obj7 = { sections: tmp6, selectedSkuId: skuId2, renderRow: callback, isFetching: stateFromStores, ListHeaderComponent: tmp25 };
  skuId2 = undefined;
  const EditCollectiblesPickerList = tmp(tmp2[28]).EditCollectiblesPickerList;
  if (selectedProfileFrame != null) {
    skuId2 = selectedProfileFrame.skuId;
  }
  tmp25 = null;
  if (!shouldPinCollectiblesEditPreview) {
    tmp25 = tmp15Result;
  }
  const obj8 = { children: items4 };
  items4[1] = closure_9(EditCollectiblesPickerList, obj7);
  return closure_10(closure_11, obj8);
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
  const tmp2 = purchase(8736)(previewSkuId);
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
  items1 = [closure_9(purchase(11471), { user, guildId, profileFrame: memo, maxWidth: 280 }), ];
  const obj2 = { style: tmp.previewGradient, start: { x: 0, y: 0.6 }, end: { x: 0, y: 1 }, colors: items2 };
  items2 = [, ];
  const tmp4 = purchase(5582);
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
let obj = { container: { flex: 1 }, previewContainer: { overflow: "hidden", height: 300, alignItems: "center" }, previewGradient: obj2 };
obj2 = { bottom: -1, color: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
createStyles = createStyles.createStyles;
let merged = Object.assign(StyleSheet.absoluteFillObject);
let closure_12 = createStyles(obj);
let result = size.fileFinishedImporting("modules/user_profile/native/EditProfileFrameActionSheet.tsx");

export default function EditProfileFrameActionSheet(arg0) {
  let BottomSheetTitleHeader;
  let closure_1;
  let currentProfileFrame;
  let guildId;
  let intl;
  let items3;
  let obj3;
  let obj4;
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
  obj3 = { scrollable: true, ref: bottomSheetRef, onExpand: callback, startExpanded: true, header: closure_9(BottomSheetTitleHeader, obj4), children: items3 };
  BottomSheet = guildId(tmp3[16]).BottomSheet;
  obj4 = { title: intl.string(guildId(selectedProfileFrame[18]).t["oTSa/q"]) };
  BottomSheetTitleHeader = guildId(tmp3[17]).BottomSheetTitleHeader;
  intl = guildId(tmp3[18]).intl;
  items3 = [, ];
  const obj5 = { style: tmp.container, children: closure_9(EditProfileFrameInner, { user, selectedProfileFrame, setSelectedProfileFrame: tmp8, guildId }) };
  items3[0] = closure_9(closure_5, obj5);
  const obj6 = { user, currentSkuId: skuId, selectedSkuId: skuId1, onApply: callback1, analyticsLocations, analyticsSource: require("AnalyticsLocation").EDIT_PROFILE_FRAME_SHEET };
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
  items3[1] = closure_9(tmp2Result2, obj6);
  return closure_9(AnalyticsLocationProvider, obj2);
};
