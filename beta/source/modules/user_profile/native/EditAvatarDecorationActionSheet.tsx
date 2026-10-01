// Module ID: 7603
// Function ID: 7604
// Name: EditAvatarDecorationActionSheet
// Dependencies: [32, 19, 17, 6977, 6967, 2108, 1074, 21, 4836, 576, 7604, 7614, 7615, 6583, 6603, 1241, 7616, 4540, 6571, 4832, 1115, 7617, 10198, 504, 12741, 7611, 12742, 12747, 12748, 7618, 7703, 1177, 12749, 2]
// Exports: default

// Module 7603 (EditAvatarDecorationActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import AvatarDecorationRecord from "AvatarDecorationRecord" /* 6967 */;
import useShopProductItems from "useShopProductItems" /* 7616 */;
import EditAvatarDecorationSection from "EditAvatarDecorationSection" /* 12742 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import CollectiblesPurchaseStore from "CollectiblesPurchaseStore" /* 6977 */;
import GuildMemberStore from "GuildMemberStore" /* 2108 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let BottomSheet, _require;

let c10;
let closure_12;
let obj2;
let obj3;
let unpackModuleId;
function EditAvatarDecorationInner(user) {
  let avatarDecoration;
  let avatarDecoration1;
  let intl;
  let intl2;
  let isFetching;
  let selectedAvatarDecoration;
  let setSelectedAvatarDecoration;
  let skuId1;
  let skuId2;
  user = user.user;
  ({ selectedAvatarDecoration, setSelectedAvatarDecoration } = user);
  const guildId = user.guildId;
  let flag = user.isTryItOut;
  const pendingAvatarSrc = user.pendingAvatarSrc;
  if (flag === undefined) {
    flag = false;
  }
  const tmp = user;
  let obj = user(guildId[22]);
  const getOrFetchCollectiblesCategoriesAndPurchases = obj.useGetOrFetchCollectiblesCategoriesAndPurchases();
  const items = [CollectiblesPurchaseStore];
  const obj2 = user(guildId[23]);
  const stateFromStores = obj2.useStateFromStores(items, () => isFetching.isFetching);
  const items1 = [GuildMemberStore];
  const tmp6 = setSelectedAvatarDecoration(guildId[24])();
  const obj3 = user(guildId[23]);
  const stateFromStores1 = obj3.useStateFromStores(items1, () => {
    let member = null;
    if (null != guildId) {
      member = GuildMemberStore.getMember(tmp, user.id);
    }
    return member;
  });
  const obj4 = { pendingValue: selectedAvatarDecoration, userValue: avatarDecoration, guildValue: avatarDecoration1, guildId };
  avatarDecoration = undefined;
  const getProfilePreviewValue = user(guildId[25]).getProfilePreviewValue;
  user(guildId[25]);
  const tmp5 = setSelectedAvatarDecoration;
  if (user != null) {
    avatarDecoration = user.avatarDecoration;
  }
  avatarDecoration1 = undefined;
  if (stateFromStores1 != null) {
    avatarDecoration1 = stateFromStores1.avatarDecoration;
  }
  const profilePreviewValue = getProfilePreviewValue(obj4);
  const items2 = [setSelectedAvatarDecoration, guildId, flag];
  let skuId;
  const callback = react.useCallback((arg0) => {
    let items;
    let selectedSkuId;
    ({ items, size, selectedSkuId } = arg0);
    const obj = { items, size, selectedSkuId, setSelectedAvatarDecoration, guildId, isTryItOut: flag };
    return authStore(EditAvatarDecorationSection.EditAvatarDecorationRow, obj);
  }, items2);
  const tmp13 = closure_11;
  const tmp14 = closure_12;
  const tmp16 = AvatarDecorationSectionPreview;
  if (profilePreviewValue != null) {
    skuId = profilePreviewValue.skuId;
  }
  const items3 = [closure_10(tmp16, { previewSkuId: skuId, user, guildId, pendingAvatarSrc }), , ];
  const obj5 = { user, previewSkuId: skuId1, nitroJoinCTA: intl.string(tmp(guildId[20]).t.FyBDiY), nitroUpgradeCTA: intl2.string(tmp(guildId[20]).t.e1UiOa) };
  skuId1 = undefined;
  const tmp5Result = tmp5(guildId[27]);
  if (profilePreviewValue != null) {
    skuId1 = profilePreviewValue.skuId;
  }
  intl = tmp(tmp2[20]).intl;
  intl2 = tmp(tmp2[20]).intl;
  items3[1] = closure_10(tmp5Result, obj5);
  const obj6 = { sections: tmp6, selectedSkuId: skuId2, renderRow: callback, isFetching: stateFromStores };
  skuId2 = undefined;
  const EditCollectiblesPickerList = tmp(tmp2[28]).EditCollectiblesPickerList;
  if (selectedAvatarDecoration != null) {
    skuId2 = selectedAvatarDecoration.skuId;
  }
  const obj7 = { children: items3 };
  items3[2] = closure_10(EditCollectiblesPickerList, obj6);
  return tmp13(tmp14, obj7);
}
function AvatarDecorationSectionPreview(previewSkuId) {
  let _undefined;
  let formatToPlainStringResult;
  let guildId;
  let items1;
  let pendingAvatarSrc;
  let tmp10;
  let user;
  ({ user, guildId, pendingAvatarSrc } = previewSkuId);
  let purchase;
  previewSkuId = previewSkuId.previewSkuId;
  let tmp3 = dependencyMap;
  const tmp = closure_13();
  const tmp4 = purchase(7618)(previewSkuId);
  const product = tmp4.product;
  _require = product;
  purchase = tmp4.purchase;
  const items = [purchase, product];
  const memo = react.useMemo(() => {
    let first;
    if (_undefined != null) {
      first = _undefined.items[0];
    }
    if (first == null) {
      let first1;
      if (purchase != null) {
        first1 = purchase.items[0];
      }
      first = first1;
    }
    let tmp3 = null;
    if (isAvatarDecorationRecord(first)) {
      tmp3 = first;
    }
    return tmp3;
  }, items);
  const obj = { style: tmp.avatarDisplayContainer, accessibilityLabel: formatToPlainStringResult, accessibilityRole: "image", accessible: true, children: items1 };
  const tmp6 = closure_11;
  const tmp7 = View;
  if (null != memo) {
    const intl2 = require("intl").intl;
    const obj2 = { a11y_text: memo.label };
    formatToPlainStringResult = intl2.formatToPlainString(require("intl").t.Do2lxE, obj2);
    tmp10 = _require;
  } else {
    const intl = require("intl").intl;
    formatToPlainStringResult = intl.string(require("intl").t["7hRBmC"]);
    tmp10 = _require;
  }
  const obj3 = { user, guildId, pendingAvatarSrc, pendingAvatarDecoration: memo, size: tmp10(1177).AvatarSizes.EDIT_AVATAR_DECORATION };
  const tmp2Result = purchase(7703);
  items1 = [closure_10(tmp2Result, obj3), closure_10(purchase(12749), { user, guildId, pendingAvatarSrc, pendingAvatarDecoration: memo })];
  return tmp6(tmp7, obj);
}
const View = react_native.View;
const isAvatarDecorationRecord = AvatarDecorationRecord.isAvatarDecorationRecord;
const AnalyticEvents = Constants.AnalyticEvents;
({ jsx: c10, jsxs: unpackModuleId, Fragment: closure_12 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, bounceOffset: { position: "absolute", top: -250, height: 250, right: 0, left: 0 }, title: obj3, avatarDisplayContainer: { flexDirection: "row", width: "100%", justifyContent: "center", alignItems: "center", paddingVertical: 16 } };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
createStyles = createStyles.createStyles;
obj3 = { alignSelf: "center", color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, margin: 25 };
let closure_13 = createStyles(obj);
const result = size.fileFinishedImporting("modules/user_profile/native/EditAvatarDecorationActionSheet.tsx");

export default function EditAvatarDecorationActionSheet(arg0) {
  let analyticsLocations;
  let currentAvatarDecoration;
  let guildId;
  let intl;
  let isTryItOut;
  let items1;
  let items2;
  let obj6;
  let selectedAvatarDecoration;
  let skuId;
  let skuId1;
  let tmp14;
  let tmp9;
  let user;
  ({ user, guildId, currentAvatarDecoration, isTryItOut, analyticsLocations } = arg0);
  selectedAvatarDecoration = undefined;
  let tmp = closure_13();
  const tmp4 = selectedAvatarDecoration(7604)({ analyticsLocations, isTryItOut, guildId });
  const setPendingAvatarDecoration = tmp4.setPendingAvatarDecoration;
  const pendingAvatar = tmp4.pendingAvatar;
  let obj = setPendingAvatarDecoration(7614);
  let obj2 = { userId: user.id, image: pendingAvatar };
  const pendingAvatarSrc = obj.getPendingAvatarSrc(obj2);
  [selectedAvatarDecoration, tmp9] = react.useState(currentAvatarDecoration);
  const obj4 = setPendingAvatarDecoration(7615);
  const bottomSheetRef = obj4.useBottomSheetRef().bottomSheetRef;
  const tmp10 = selectedAvatarDecoration(6583);
  if (analyticsLocations == null) {
    analyticsLocations = [];
  }
  const analyticsLocations2 = tmp10(analyticsLocations, tmp2(6603).EDIT_AVATAR_DECORATION_SHEET).analyticsLocations;
  const items = [selectedAvatarDecoration, setPendingAvatarDecoration];
  const callback = obj3.useCallback(() => {
    const obj = first(dependencyMap[15]);
    const obj2 = { type: first(dependencyMap[14]).EDIT_AVATAR_DECORATION_SHEET, is_fullscreen: true };
    obj.track(constants.OPEN_POPOUT, obj2);
  }, []);
  const callback1 = obj3.useCallback((arg0) => {
    const obj = useShopProductItems;
    let purchasedItem = obj.getPurchasedItem(arg0, "firstAvatarDecoration");
    const tmp = setPendingAvatarDecoration;
    if (purchasedItem == null) {
      purchasedItem = first;
    }
    if (purchasedItem == null) {
      purchasedItem = null;
    }
    tmp(purchasedItem);
  }, items);
  const ThemeContextProvider = tmp5(4540).ThemeContextProvider;
  const obj5 = { value: analyticsLocations2, children: tmp14(BottomSheet, obj6) };
  const AnalyticsLocationProvider = tmp5(6583).AnalyticsLocationProvider;
  obj6 = { scrollable: true, ref: bottomSheetRef, onExpand: callback, startExpanded: true, children: items2 };
  const obj7 = { style: tmp.container, children: items1 };
  const obj8 = { style: tmp.bounceOffset };
  BottomSheet = tmp5(6571).BottomSheet;
  items1 = [closure_10(View, obj8), , ];
  const obj9 = { variant: "redesign/heading-18/bold", style: tmp.title, accessibilityRole: "header", children: intl.string(setPendingAvatarDecoration(1115).t.HykynS) };
  const Text = tmp5(4832).Text;
  intl = tmp5(1115).intl;
  items1[1] = closure_10(Text, obj9);
  items1[2] = closure_10(EditAvatarDecorationInner, { user, guildId, pendingAvatarSrc, selectedAvatarDecoration, setSelectedAvatarDecoration: tmp9, isTryItOut });
  items2 = [closure_11(View, obj7), ];
  const obj10 = { user, currentSkuId: skuId, selectedSkuId: skuId1, isTryItOut, onApply: callback1, analyticsLocations: analyticsLocations2, analyticsSource: selectedAvatarDecoration(6603).EDIT_AVATAR_DECORATION_SHEET };
  skuId = undefined;
  tmp14 = closure_11;
  const tmp2Result = selectedAvatarDecoration(7617);
  if (currentAvatarDecoration != null) {
    skuId = currentAvatarDecoration.skuId;
  }
  skuId1 = undefined;
  if (selectedAvatarDecoration != null) {
    skuId1 = selectedAvatarDecoration.skuId;
  }
  const obj11 = { children: closure_10(AnalyticsLocationProvider, obj5) };
  items2[1] = closure_10(tmp2Result, obj10);
  return closure_10(ThemeContextProvider, obj11);
};
