// Module ID: 16455
// Function ID: 16456
// Name: EditNameplateActionSheet
// Dependencies: [32, 19, 17, 7728, 1986, 4921, 1072, 21, 5009, 575, 8733, 7320, 7345, 1253, 8727, 8734, 5267, 7315, 1114, 8735, 10584, 504, 16456, 15031, 8729, 16457, 15037, 15038, 8736, 9491, 5582, 11472, 2]
// Exports: default

// Module 16455 (EditNameplateActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import NameplateRecord from "NameplateRecord" /* 1986 */;
import UserProfileSettingsActionCreators from "UserProfileSettingsActionCreators" /* 8727 */;
import useShopProductItems from "useShopProductItems" /* 8734 */;
import EditNameplateSection from "EditNameplateSection" /* 16457 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import CollectiblesPurchaseStore from "CollectiblesPurchaseStore" /* 7728 */;
import GuildMemberStore from "GuildMemberStore" /* 4921 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let BottomSheet, _require;

let c10;
let closure_12;
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
  let tmp24;
  user = user.user;
  ({ selectedNameplate, setSelectedNameplate } = user);
  const guildId = user.guildId;
  const tmp = user;
  let obj = user(guildId[20]);
  const getOrFetchCollectiblesCategoriesAndPurchases = obj.useGetOrFetchCollectiblesCategoriesAndPurchases();
  const items = [CollectiblesPurchaseStore];
  const obj2 = user(guildId[21]);
  const stateFromStores = obj2.useStateFromStores(items, () => isFetching.isFetching);
  const tmp6 = setSelectedNameplate(guildId[22])();
  const obj3 = user(guildId[23]);
  const shouldPinCollectiblesEditPreview = obj3.useShouldPinCollectiblesEditPreview();
  const items1 = [GuildMemberStore];
  const obj4 = user(guildId[21]);
  const stateFromStores1 = obj4.useStateFromStores(items1, () => {
    let member = null;
    if (null != guildId) {
      member = GuildMemberStore.getMember(tmp, user.id);
    }
    return member;
  });
  const obj5 = { pendingValue: selectedNameplate, userValue: nameplate, guildValue: nameplate1, guildId };
  nameplate = undefined;
  const getProfilePreviewValue = user(guildId[24]).getProfilePreviewValue;
  user(guildId[24]);
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
  const profilePreviewValue = getProfilePreviewValue(obj5);
  const items2 = [setSelectedNameplate, guildId];
  let skuId;
  const callback = react.useCallback((arg0) => {
    let items;
    let selectedSkuId;
    ({ items, size, selectedSkuId } = arg0);
    const obj = { items, size, selectedSkuId, setSelectedNameplate, guildId };
    return authStore(EditNameplateSection.EditNameplateRow, obj);
  }, items2);
  const tmp17 = NameplateActionSheetPreview;
  if (profilePreviewValue != null) {
    skuId = profilePreviewValue.skuId;
  }
  const items3 = [closure_10(tmp17, { previewSkuId: skuId, user, guildId }), ];
  const obj6 = { user, previewSkuId: skuId1, nitroJoinCTA: intl.string(tmp(guildId[18]).t["V+IE93"]), nitroUpgradeCTA: intl2.string(tmp(guildId[18]).t.a6SrkR) };
  skuId1 = undefined;
  const tmp5Result = tmp5(guildId[26]);
  if (profilePreviewValue != null) {
    skuId1 = profilePreviewValue.skuId;
  }
  const obj7 = { children: items3 };
  intl = tmp(tmp2[18]).intl;
  intl2 = tmp(tmp2[18]).intl;
  items3[1] = closure_10(tmp5Result, obj6);
  const tmp14Result = closure_11(closure_12, obj7);
  let tmp22 = null;
  if (shouldPinCollectiblesEditPreview) {
    tmp22 = tmp14Result;
  }
  const items4 = [tmp22, ];
  const obj8 = { sections: tmp6, selectedSkuId: skuId2, renderRow: callback, isFetching: stateFromStores, ListHeaderComponent: tmp24 };
  skuId2 = undefined;
  const EditCollectiblesPickerList = tmp(tmp2[27]).EditCollectiblesPickerList;
  if (selectedNameplate != null) {
    skuId2 = selectedNameplate.skuId;
  }
  tmp24 = null;
  if (!shouldPinCollectiblesEditPreview) {
    tmp24 = tmp14Result;
  }
  const obj9 = { children: items4 };
  items4[1] = closure_10(EditCollectiblesPickerList, obj8);
  return closure_11(closure_12, obj9);
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
  const tmp4 = purchase(8736)(previewSkuId);
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
  items1 = [closure_10(tmp10(9491).NameplateDummyUserPreview, { width: 100 }), closure_10(tmp10(9491).NameplateDummyUserPreview, { width: 140 }), ];
  const obj4 = { style: tmp.nameplatePreviewGradient, start: { x: 0, y: 0.1 }, end: { x: 0, y: 0.8 }, colors: items2 };
  items2 = [tmp.nameplatePreviewGradient.color, ];
  const tmp2Result = purchase(5582);
  items2[1] = "" + tmp.nameplatePreviewGradient.color + "00";
  items1[2] = closure_10(tmp2Result, obj4);
  items3 = [closure_11(View, obj3), closure_10(tmp10(11472).NameplatePreview, { nameplate: memo, user, guildId, animate: true, "aria-hidden": true }), ];
  const obj5 = { style: tmp.nameplateGradientContainer, children: items4 };
  items4 = [closure_10(tmp10(9491).NameplateDummyUserPreview, { width: 140 }), closure_10(tmp10(9491).NameplateDummyUserPreview, { width: 100 }), ];
  const obj6 = { style: tmp.nameplatePreviewGradient, start: { x: 0, y: 0.2 }, end: { x: 0, y: 0.9 }, colors: items5 };
  items5 = [, ];
  const tmp2Result2 = purchase(5582);
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
let obj = { container: { flex: 1 }, nameplatePreviewContainer: { width: "80%", alignSelf: "center", justifyContent: "center", alignItems: "center" }, nameplateGradientContainer: { width: "100%" }, nameplatePreviewGradient: size };
size = { position: "absolute", width: "100%", height: "100%", color: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
let closure_13 = createStyles.createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/user_profile/native/EditNameplateActionSheet.tsx");

export default function EditNameplateActionSheet(arg0) {
  let BottomSheetTitleHeader;
  let currentNameplate;
  let first;
  let guildId;
  let intl;
  let items1;
  let obj4;
  let obj5;
  let skuId;
  let skuId1;
  let tmp13;
  let tmp6;
  let tmp8;
  let user;
  ({ user, currentNameplate, guildId } = arg0);
  first = undefined;
  const tmp = closure_13();
  let obj = guildId(8733);
  let obj2 = react;
  const bottomSheetRef = obj.useBottomSheetRef().bottomSheetRef;
  [first, tmp6] = react.useState(undefined);
  let tmp7 = currentNameplate;
  if (undefined !== first) {
    tmp7 = first;
  }
  const tmp9 = first(7320);
  const analyticsLocations = tmp9(first(7345).EDIT_NAMEPLATE_SHEET).analyticsLocations;
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
  const AnalyticsLocationProvider = tmp2(7320).AnalyticsLocationProvider;
  obj4 = { scrollable: true, ref: bottomSheetRef, onExpand: callback, startExpanded: true, header: closure_10(BottomSheetTitleHeader, obj5), children: items1 };
  BottomSheet = tmp2(5267).BottomSheet;
  obj5 = { title: intl.string(guildId(1114).t.BwdeM1) };
  BottomSheetTitleHeader = tmp2(7315).BottomSheetTitleHeader;
  intl = tmp2(1114).intl;
  items1 = [, ];
  const obj6 = { style: tmp.container, children: closure_10(EditNameplateInner, { user, selectedNameplate: tmp7, setSelectedNameplate: tmp6, guildId }) };
  items1[0] = closure_10(View, obj6);
  const obj7 = { user, currentSkuId: skuId, selectedSkuId: skuId1, onApply: callback1, analyticsLocations, analyticsSource: tmp8(7345).EDIT_NAMEPLATE_SHEET };
  skuId = undefined;
  tmp13 = closure_11;
  const tmp14 = first(8735);
  tmp8 = first;
  if (currentNameplate != null) {
    skuId = currentNameplate.skuId;
  }
  skuId1 = undefined;
  if (tmp7 != null) {
    skuId1 = tmp7.skuId;
  }
  items1[1] = closure_10(tmp14, obj7);
  return closure_10(AnalyticsLocationProvider, obj3);
};
