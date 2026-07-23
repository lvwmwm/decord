// Module ID: 13603
// Function ID: 104518
// Name: EditNameplateInner
// Dependencies: [57, 31, 27, 6790, 1874, 1917, 653, 33, 4130, 689, 7186, 5464, 5484, 675, 7844, 5187, 4126, 1212, 7856, 7859, 566, 13604, 7846, 13605, 7877, 7878, 7857, 8228, 4554, 9805, 2]
// Exports: default

// Module 13603 (EditNameplateInner)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { View } from "NAMEPLATE_DUMMY_USER_PREVIEW_CONFIG";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { isNameplateRecord } from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import { AnalyticEvents } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_12;
let require = arg1;
function EditNameplateInner(user) {
  let selectedNameplate;
  let setSelectedNameplate;
  user = user.user;
  ({ selectedNameplate, setSelectedNameplate } = user);
  const guildId = user.guildId;
  let obj = user(guildId[19]);
  const getOrFetchCollectiblesCategoriesAndPurchases = obj.useGetOrFetchCollectiblesCategoriesAndPurchases();
  let obj1 = user(guildId[20]);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj1.useStateFromStores(items, () => outer1_6.isFetching);
  let obj2 = user(guildId[20]);
  const items1 = [closure_8];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => {
    let member = null;
    if (null != guildId) {
      member = outer1_8.getMember(guildId, user.id);
    }
    return member;
  });
  let obj3 = user(guildId[22]);
  obj = { pendingValue: selectedNameplate };
  let nameplate;
  if (null != user) {
    const collectibles = user.collectibles;
    if (null != collectibles) {
      nameplate = collectibles.nameplate;
    }
  }
  obj.userValue = nameplate;
  let nameplate1;
  if (null != stateFromStores1) {
    const collectibles2 = stateFromStores1.collectibles;
    if (null != collectibles2) {
      nameplate1 = collectibles2.nameplate;
    }
  }
  obj.guildValue = nameplate1;
  obj.guildId = guildId;
  const profilePreviewValue = obj3.getProfilePreviewValue(obj);
  const items2 = [setSelectedNameplate, guildId];
  obj = {};
  obj1 = {};
  let skuId;
  const callback = React.useCallback((arg0) => {
    let items;
    let selectedSkuId;
    let size;
    ({ items, size, selectedSkuId } = arg0);
    return outer1_10(user(guildId[23]).EditNameplateRow, { items, size, selectedSkuId, setSelectedNameplate, guildId });
  }, items2);
  if (null != profilePreviewValue) {
    skuId = profilePreviewValue.skuId;
  }
  obj1.previewSkuId = skuId;
  obj1.user = user;
  obj1.guildId = guildId;
  const items3 = [closure_10(NameplateActionSheetPreview, obj1), , ];
  obj2 = { user };
  let skuId1;
  const tmp10 = closure_12;
  const tmp11 = closure_10;
  const tmp12 = NameplateActionSheetPreview;
  const tmp14 = closure_10;
  const tmp3 = setSelectedNameplate(guildId[21])();
  const tmp9 = closure_11;
  if (null != profilePreviewValue) {
    skuId1 = profilePreviewValue.skuId;
  }
  obj2.previewSkuId = skuId1;
  const intl = user(guildId[17]).intl;
  obj2.nitroJoinCTA = intl.string(user(guildId[17]).t["V+IE93"]);
  const intl2 = user(guildId[17]).intl;
  obj2.nitroUpgradeCTA = intl2.string(user(guildId[17]).t.a6SrkR);
  items3[1] = tmp14(setSelectedNameplate(guildId[24]), obj2);
  obj3 = { sections: tmp3 };
  let skuId2;
  if (null != selectedNameplate) {
    skuId2 = selectedNameplate.skuId;
  }
  obj3.selectedSkuId = skuId2;
  obj3.renderRow = callback;
  obj3.isFetching = stateFromStores;
  items3[2] = closure_10(user(guildId[25]).EditCollectiblesPickerList, obj3);
  obj.children = items3;
  return tmp9(tmp10, obj);
}
function NameplateActionSheetPreview(arg0) {
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
  let obj = { style: tmp.nameplatePreviewContainer };
  if (null != memo) {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    obj = { a11y_text: memo.label };
    let formatToPlainStringResult = intl2.formatToPlainString(require(1212) /* getSystemLocale */.t.YJig7C, obj);
  } else {
    const intl = require(1212) /* getSystemLocale */.intl;
    formatToPlainStringResult = intl.string(require(1212) /* getSystemLocale */.t.aqlsGS);
  }
  obj.accessibilityLabel = formatToPlainStringResult;
  obj.accessibilityRole = "image";
  obj.accessible = true;
  obj = { style: tmp.nameplateGradientContainer };
  const items1 = [callback2(require(8228) /* NAMEPLATE_DUMMY_USER_PREVIEW_CONFIG */.NameplateDummyUserPreview, { width: 100 }), callback2(require(8228) /* NAMEPLATE_DUMMY_USER_PREVIEW_CONFIG */.NameplateDummyUserPreview, { width: 140 }), ];
  const obj1 = { style: tmp.nameplatePreviewGradient, start: { x: 0, y: 0.1 }, end: { x: 0, y: 0.8 } };
  const items2 = [tmp.nameplatePreviewGradient.color, "" + tmp.nameplatePreviewGradient.color + "00"];
  obj1.colors = items2;
  items1[2] = callback2(purchase(4554), obj1);
  obj.children = items1;
  const items3 = [callback3(View, obj), callback2(require(9805) /* NameplatePreview */.NameplatePreview, { nameplate: memo, user, guildId, animate: true, "aria-hidden": true }), ];
  const obj2 = { style: tmp.nameplateGradientContainer };
  const items4 = [callback2(require(8228) /* NAMEPLATE_DUMMY_USER_PREVIEW_CONFIG */.NameplateDummyUserPreview, { width: 140 }), callback2(require(8228) /* NAMEPLATE_DUMMY_USER_PREVIEW_CONFIG */.NameplateDummyUserPreview, { width: 100 }), ];
  const obj3 = { style: tmp.nameplatePreviewGradient, start: { x: 0, y: 0.2 }, end: { x: 0, y: 0.9 } };
  const tmp11 = purchase(4554);
  const tmp4 = callback3;
  const tmp5 = View;
  const items5 = ["" + tmp.nameplatePreviewGradient.color + "00", tmp.nameplatePreviewGradient.color];
  obj3.colors = items5;
  items4[2] = callback2(purchase(4554), obj3);
  obj2.children = items4;
  items3[2] = callback3(View, obj2);
  obj.children = items3;
  return tmp4(tmp5, obj);
}
({ jsx: closure_10, jsxs: closure_11, Fragment: closure_12 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { flex: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.MOBILE_ACTIONSHEET_BACKGROUND };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.bounceOffset = { position: "absolute", top: -250, height: 250, right: 0, left: 0 };
let obj1 = { alignSelf: "center", color: require("_createForOfIteratorHelperLoose").colors.MOBILE_TEXT_HEADING_PRIMARY, margin: 25 };
_createForOfIteratorHelperLoose.title = obj1;
_createForOfIteratorHelperLoose.nameplatePreviewContainer = { width: "80%", alignSelf: "center", justifyContent: "center", alignItems: "center" };
_createForOfIteratorHelperLoose.nameplateGradientContainer = { width: "100%" };
let obj2 = { position: "absolute", width: "100%", height: "100%", color: require("_createForOfIteratorHelperLoose").colors.MOBILE_ACTIONSHEET_BACKGROUND };
_createForOfIteratorHelperLoose.nameplatePreviewGradient = obj2;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("get ActivityIndicator").fileFinishedImporting("modules/user_profile/native/EditNameplateActionSheet.tsx");

export default function EditNameplateActionSheet(arg0) {
  let currentNameplate;
  let guildId;
  let user;
  ({ user, currentNameplate, guildId } = arg0);
  let tmp = _createForOfIteratorHelperLoose();
  let obj = guildId(7186);
  const tmp2 = callback(React.useState(undefined), 2);
  const first = tmp2[0];
  let tmp4 = currentNameplate;
  if (undefined !== first) {
    tmp4 = first;
  }
  const analyticsLocations = first(5464)(first(5484).EDIT_NAMEPLATE_SHEET).analyticsLocations;
  const items = [first, guildId];
  callback = React.useCallback(() => {
    let obj = first(outer1_2[13]);
    obj = { type: first(outer1_2[12]).EDIT_NAMEPLATE_SHEET, is_fullscreen: true };
    obj.track(outer1_9.OPEN_POPOUT, obj);
  }, []);
  const callback1 = React.useCallback(() => {
    let obj = guildId(outer1_2[14]);
    obj = { guildId };
    let tmp = null;
    if (null != first) {
      tmp = first;
    }
    obj.nameplate = tmp;
    obj.setPendingChanges(obj);
  }, items);
  obj = { value: analyticsLocations };
  obj = { scrollable: true, ref: obj.useBottomSheetRef().bottomSheetRef, onExpand: callback, startExpanded: true };
  const obj1 = { style: tmp.container };
  const items1 = [callback2(View, { style: tmp.bounceOffset }), , ];
  const obj3 = { variant: "redesign/heading-18/bold", style: tmp.title, accessibilityRole: "header" };
  const intl = guildId(1212).intl;
  obj3.children = intl.string(guildId(1212).t.BwdeM1);
  items1[1] = callback2(guildId(4126).Text, obj3);
  const obj4 = { user, selectedNameplate: tmp4, setSelectedNameplate: tmp2[1], guildId };
  items1[2] = callback2(EditNameplateInner, obj4);
  obj1.children = items1;
  const items2 = [callback3(View, obj1), ];
  const obj5 = { user };
  let skuId;
  const obj2 = { style: tmp.bounceOffset };
  const tmp10 = callback2;
  const tmp5 = first(5464);
  const tmp8 = callback2;
  const tmp9 = callback3;
  if (null != currentNameplate) {
    skuId = currentNameplate.skuId;
  }
  obj5.currentSkuId = skuId;
  let skuId1;
  if (null != tmp4) {
    skuId1 = tmp4.skuId;
  }
  obj5.selectedSkuId = skuId1;
  obj5.onApply = callback1;
  obj5.analyticsLocations = analyticsLocations;
  obj5.analyticsSource = first(5484).EDIT_NAMEPLATE_SHEET;
  items2[1] = tmp10(first(7856), obj5);
  obj.children = items2;
  obj.children = tmp9(guildId(5187).BottomSheet, obj);
  return tmp8(guildId(5464).AnalyticsLocationProvider, obj);
};
