// Module ID: 14193
// Function ID: 14194
// Name: EditNameplateActionSheet
// Dependencies: [32, 19, 17, 6977, 1972, 2108, 1074, 21, 4836, 576, 7615, 6583, 6603, 1241, 7609, 7616, 6571, 4832, 1115, 7617, 10198, 504, 14194, 7611, 14195, 12747, 12748, 7618, 8280, 5293, 10790, 2]
// Exports: default

// Module 14193 (EditNameplateActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import NameplateRecord from "NameplateRecord" /* 1972 */;
import UserProfileSettingsActionCreators from "UserProfileSettingsActionCreators" /* 7609 */;
import useShopProductItems from "useShopProductItems" /* 7616 */;
import EditNameplateSection from "EditNameplateSection" /* 14195 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import CollectiblesPurchaseStore from "CollectiblesPurchaseStore" /* 6977 */;
import GuildMemberStore from "GuildMemberStore" /* 2108 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let BottomSheet, _require;

let c10;
let closure_12;
let obj2;
let obj3;
let size;
let unpackModuleId;
function EditNameplateInner(user) {
  let intl;
  let intl2;
  let isFetching;
  let nameplate;
  let nameplate1;
  let selectedNameplate;
  let setSelectedNameplate;
  let skuId1;
  let skuId2;
  user = user.user;
  ({ selectedNameplate, setSelectedNameplate } = user);
  const guildId = user.guildId;
  const tmp = user;
  let obj = user(guildId[20]);
  const getOrFetchCollectiblesCategoriesAndPurchases = obj.useGetOrFetchCollectiblesCategoriesAndPurchases();
  const items = [CollectiblesPurchaseStore];
  const obj2 = user(guildId[21]);
  const stateFromStores = obj2.useStateFromStores(items, () => isFetching.isFetching);
  const items1 = [GuildMemberStore];
  const tmp6 = setSelectedNameplate(guildId[22])();
  const obj3 = user(guildId[21]);
  const stateFromStores1 = obj3.useStateFromStores(items1, () => {
    let member = null;
    if (null != guildId) {
      member = GuildMemberStore.getMember(tmp, user.id);
    }
    return member;
  });
  const obj4 = { pendingValue: selectedNameplate, userValue: nameplate, guildValue: nameplate1, guildId };
  nameplate = undefined;
  const getProfilePreviewValue = user(guildId[23]).getProfilePreviewValue;
  user(guildId[23]);
  const tmp5 = setSelectedNameplate;
  if (user != null) {
    const collectibles = user.collectibles;
    if (collectibles != null) {
      nameplate = collectibles.nameplate;
    }
  }
  nameplate1 = undefined;
  if (stateFromStores1 != null) {
    const collectibles2 = stateFromStores1.collectibles;
    if (collectibles2 != null) {
      nameplate1 = collectibles2.nameplate;
    }
  }
  const profilePreviewValue = getProfilePreviewValue(obj4);
  const items2 = [setSelectedNameplate, guildId];
  let skuId;
  const callback = react.useCallback((arg0) => {
    let items;
    let selectedSkuId;
    ({ items, size, selectedSkuId } = arg0);
    const obj = { items, size, selectedSkuId, setSelectedNameplate, guildId };
    return authStore(EditNameplateSection.EditNameplateRow, obj);
  }, items2);
  const tmp13 = closure_11;
  const tmp14 = closure_12;
  const tmp16 = NameplateActionSheetPreview;
  if (profilePreviewValue != null) {
    skuId = profilePreviewValue.skuId;
  }
  const items3 = [closure_10(tmp16, { previewSkuId: skuId, user, guildId }), , ];
  const obj5 = { user, previewSkuId: skuId1, nitroJoinCTA: intl.string(tmp(guildId[18]).t["V+IE93"]), nitroUpgradeCTA: intl2.string(tmp(guildId[18]).t.a6SrkR) };
  skuId1 = undefined;
  const tmp5Result = tmp5(guildId[25]);
  if (profilePreviewValue != null) {
    skuId1 = profilePreviewValue.skuId;
  }
  intl = tmp(tmp2[18]).intl;
  intl2 = tmp(tmp2[18]).intl;
  items3[1] = closure_10(tmp5Result, obj5);
  const obj6 = { sections: tmp6, selectedSkuId: skuId2, renderRow: callback, isFetching: stateFromStores };
  skuId2 = undefined;
  const EditCollectiblesPickerList = tmp(tmp2[26]).EditCollectiblesPickerList;
  if (selectedNameplate != null) {
    skuId2 = selectedNameplate.skuId;
  }
  const obj7 = { children: items3 };
  items3[2] = closure_10(EditCollectiblesPickerList, obj6);
  return tmp13(tmp14, obj7);
}
function NameplateActionSheetPreview(arg0) {
  let _undefined;
  let formatToPlainStringResult;
  let guildId;
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let previewSkuId;
  let tmp10;
  let user;
  let purchase;
  ({ previewSkuId, user, guildId } = arg0);
  const tmp = closure_13();
  let tmp3 = dependencyMap;
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
    if (isNameplateRecord(first)) {
      tmp3 = first;
    }
    return tmp3;
  }, items);
  const obj = { style: tmp.nameplatePreviewContainer, accessibilityLabel: formatToPlainStringResult, accessibilityRole: "image", accessible: true, children: items3 };
  if (null != memo) {
    const intl2 = require("intl").intl;
    const obj2 = { a11y_text: memo.label };
    formatToPlainStringResult = intl2.formatToPlainString(require("intl").t.YJig7C, obj2);
    tmp10 = _require;
  } else {
    const intl = require("intl").intl;
    formatToPlainStringResult = intl.string(require("intl").t.aqlsGS);
    tmp10 = _require;
  }
  const obj3 = { style: tmp.nameplateGradientContainer, children: items1 };
  items1 = [closure_10(tmp10(8280).NameplateDummyUserPreview, { width: 100 }), closure_10(tmp10(8280).NameplateDummyUserPreview, { width: 140 }), ];
  const obj4 = { style: tmp.nameplatePreviewGradient, start: { x: 0, y: 0.1 }, end: { x: 0, y: 0.8 }, colors: items2 };
  items2 = [tmp.nameplatePreviewGradient.color, ];
  const tmp2Result = purchase(5293);
  items2[1] = "" + tmp.nameplatePreviewGradient.color + "00";
  items1[2] = closure_10(tmp2Result, obj4);
  items3 = [closure_11(View, obj3), closure_10(tmp10(10790).NameplatePreview, { nameplate: memo, user, guildId, animate: true, "aria-hidden": true }), ];
  const obj5 = { style: tmp.nameplateGradientContainer, children: items4 };
  items4 = [closure_10(tmp10(8280).NameplateDummyUserPreview, { width: 140 }), closure_10(tmp10(8280).NameplateDummyUserPreview, { width: 100 }), ];
  const obj6 = { style: tmp.nameplatePreviewGradient, start: { x: 0, y: 0.2 }, end: { x: 0, y: 0.9 }, colors: items5 };
  items5 = [, ];
  const tmp2Result2 = purchase(5293);
  items5[0] = "" + tmp.nameplatePreviewGradient.color + "00";
  items5[1] = tmp.nameplatePreviewGradient.color;
  items4[2] = closure_10(tmp2Result2, obj6);
  items3[2] = closure_11(View, obj5);
  return closure_11(View, obj);
}
const View = react_native.View;
const isNameplateRecord = NameplateRecord.isNameplateRecord;
const AnalyticEvents = Constants.AnalyticEvents;
({ jsx: c10, jsxs: unpackModuleId, Fragment: closure_12 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, bounceOffset: { position: "absolute", top: -250, height: 250, right: 0, left: 0 }, title: obj3, nameplatePreviewContainer: { width: "80%", alignSelf: "center", justifyContent: "center", alignItems: "center" }, nameplateGradientContainer: { width: "100%" }, nameplatePreviewGradient: size };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
createStyles = createStyles.createStyles;
obj3 = { alignSelf: "center", color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, margin: 25 };
size = { position: "absolute", width: "100%", height: "100%", color: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
let closure_13 = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/user_profile/native/EditNameplateActionSheet.tsx");

export default function EditNameplateActionSheet(arg0) {
  let currentNameplate;
  let first;
  let guildId;
  let intl;
  let items1;
  let items2;
  let obj4;
  let skuId;
  let skuId1;
  let tmp13;
  let tmp6;
  let tmp8;
  let user;
  ({ user, currentNameplate, guildId } = arg0);
  first = undefined;
  const tmp = closure_13();
  let obj = guildId(7615);
  let obj2 = react;
  const bottomSheetRef = obj.useBottomSheetRef().bottomSheetRef;
  [first, tmp6] = react.useState(undefined);
  let tmp7 = currentNameplate;
  if (undefined !== first) {
    tmp7 = first;
  }
  const tmp9 = first(6583);
  const analyticsLocations = tmp9(first(6603).EDIT_NAMEPLATE_SHEET).analyticsLocations;
  const items = [first, guildId];
  const callback = obj2.useCallback(() => {
    const obj = first(dependencyMap[13]);
    const obj2 = { type: first(dependencyMap[12]).EDIT_NAMEPLATE_SHEET, is_fullscreen: true };
    obj.track(constants.OPEN_POPOUT, obj2);
  }, []);
  const callback1 = obj2.useCallback((arg0) => {
    let purchasedItem;
    const obj = { guildId, nameplate: purchasedItem };
    const setPendingChanges = UserProfileSettingsActionCreators.setPendingChanges;
    UserProfileSettingsActionCreators;
    const obj2 = useShopProductItems;
    purchasedItem = obj2.getPurchasedItem(arg0, "firstNameplate");
    if (purchasedItem == null) {
      purchasedItem = first;
    }
    if (purchasedItem == null) {
      purchasedItem = null;
    }
    setPendingChanges(obj);
  }, items);
  const obj3 = { value: analyticsLocations, children: tmp13(BottomSheet, obj4) };
  const AnalyticsLocationProvider = tmp2(6583).AnalyticsLocationProvider;
  obj4 = { scrollable: true, ref: bottomSheetRef, onExpand: callback, startExpanded: true, children: items2 };
  const obj5 = { style: tmp.container, children: items1 };
  const obj6 = { style: tmp.bounceOffset };
  BottomSheet = tmp2(6571).BottomSheet;
  items1 = [closure_10(View, obj6), , ];
  const obj7 = { variant: "redesign/heading-18/bold", style: tmp.title, accessibilityRole: "header", children: intl.string(guildId(1115).t.BwdeM1) };
  const Text = tmp2(4832).Text;
  intl = tmp2(1115).intl;
  items1[1] = closure_10(Text, obj7);
  items1[2] = closure_10(EditNameplateInner, { user, selectedNameplate: tmp7, setSelectedNameplate: tmp6, guildId });
  items2 = [closure_11(View, obj5), ];
  const obj8 = { user, currentSkuId: skuId, selectedSkuId: skuId1, onApply: callback1, analyticsLocations, analyticsSource: tmp8(6603).EDIT_NAMEPLATE_SHEET };
  skuId = undefined;
  tmp13 = closure_11;
  const tmp14 = first(7617);
  tmp8 = first;
  if (currentNameplate != null) {
    skuId = currentNameplate.skuId;
  }
  skuId1 = undefined;
  if (tmp7 != null) {
    skuId1 = tmp7.skuId;
  }
  items2[1] = closure_10(tmp14, obj8);
  return closure_10(AnalyticsLocationProvider, obj3);
};
