// Module ID: 7928
// Function ID: 62790
// Name: EditAvatarDecorationInner
// Dependencies: [57, 31, 27, 6790, 6779, 1917, 653, 33, 4130, 689, 7929, 7943, 7186, 5462, 5482, 675, 3842, 5187, 4126, 1212, 7945, 7948, 566, 7952, 7935, 7953, 7965, 7966, 7946, 7967, 1273, 7981, 2]
// Exports: default

// Module 7928 (EditAvatarDecorationInner)
import _slicedToArray from "_slicedToArray";
import GridAvatar from "GridAvatar";
import { View } from "EditCollectiblesPickerList";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { isAvatarDecorationRecord } from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import { AnalyticEvents } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_12;
let require = arg1;
function EditAvatarDecorationInner(user) {
  let selectedAvatarDecoration;
  let setSelectedAvatarDecoration;
  user = user.user;
  ({ selectedAvatarDecoration, setSelectedAvatarDecoration } = user);
  const guildId = user.guildId;
  let flag = user.isTryItOut;
  if (flag === undefined) {
    flag = false;
  }
  let obj = user(guildId[21]);
  const getOrFetchCollectiblesCategoriesAndPurchases = obj.useGetOrFetchCollectiblesCategoriesAndPurchases();
  let obj1 = user(guildId[22]);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj1.useStateFromStores(items, () => outer1_6.isFetching);
  let obj2 = user(guildId[22]);
  const items1 = [closure_8];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => {
    let member = null;
    if (null != guildId) {
      member = outer1_8.getMember(guildId, user.id);
    }
    return member;
  });
  let obj3 = user(guildId[24]);
  obj = { pendingValue: selectedAvatarDecoration };
  let avatarDecoration;
  if (null != user) {
    avatarDecoration = user.avatarDecoration;
  }
  obj.userValue = avatarDecoration;
  let avatarDecoration1;
  if (null != stateFromStores1) {
    avatarDecoration1 = stateFromStores1.avatarDecoration;
  }
  obj.guildValue = avatarDecoration1;
  obj.guildId = guildId;
  const profilePreviewValue = obj3.getProfilePreviewValue(obj);
  const items2 = [setSelectedAvatarDecoration, guildId, flag];
  obj = {};
  obj1 = {};
  let skuId;
  const callback = React.useCallback((arg0) => {
    let items;
    let selectedSkuId;
    let size;
    ({ items, size, selectedSkuId } = arg0);
    return outer1_10(user(guildId[25]).EditAvatarDecorationRow, { items, size, selectedSkuId, setSelectedAvatarDecoration, guildId, isTryItOut: flag });
  }, items2);
  if (null != profilePreviewValue) {
    skuId = profilePreviewValue.skuId;
  }
  obj1.previewSkuId = skuId;
  obj1.user = user;
  obj1.guildId = guildId;
  obj1.pendingAvatarSrc = user.pendingAvatarSrc;
  const items3 = [closure_10(AvatarDecorationSectionPreview, obj1), , ];
  obj2 = { user };
  let skuId1;
  const tmp10 = closure_12;
  const tmp11 = closure_10;
  const tmp12 = AvatarDecorationSectionPreview;
  const tmp14 = closure_10;
  const tmp3 = setSelectedAvatarDecoration(guildId[23])();
  const tmp9 = closure_11;
  if (null != profilePreviewValue) {
    skuId1 = profilePreviewValue.skuId;
  }
  obj2.previewSkuId = skuId1;
  const intl = user(guildId[19]).intl;
  obj2.nitroJoinCTA = intl.string(user(guildId[19]).t.FyBDiY);
  const intl2 = user(guildId[19]).intl;
  obj2.nitroUpgradeCTA = intl2.string(user(guildId[19]).t.e1UiOa);
  items3[1] = tmp14(setSelectedAvatarDecoration(guildId[26]), obj2);
  obj3 = { sections: tmp3 };
  let skuId2;
  if (null != selectedAvatarDecoration) {
    skuId2 = selectedAvatarDecoration.skuId;
  }
  obj3.selectedSkuId = skuId2;
  obj3.renderRow = callback;
  obj3.isFetching = stateFromStores;
  items3[2] = closure_10(user(guildId[27]).EditCollectiblesPickerList, obj3);
  obj.children = items3;
  return tmp9(tmp10, obj);
}
function AvatarDecorationSectionPreview(previewSkuId) {
  let guildId;
  let pendingAvatarSrc;
  let user;
  ({ user, guildId, pendingAvatarSrc } = previewSkuId);
  const tmp2 = purchase(7946)(previewSkuId.previewSkuId);
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
  let obj = { style: _createForOfIteratorHelperLoose().avatarDisplayContainer };
  if (null != memo) {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    obj = { a11y_text: memo.label };
    let formatToPlainStringResult = intl2.formatToPlainString(require(1212) /* getSystemLocale */.t.Do2lxE, obj);
  } else {
    const intl = require(1212) /* getSystemLocale */.intl;
    formatToPlainStringResult = intl.string(require(1212) /* getSystemLocale */.t["7hRBmC"]);
  }
  obj.accessibilityLabel = formatToPlainStringResult;
  obj.accessibilityRole = "image";
  obj.accessible = true;
  obj = { user, guildId, pendingAvatarSrc, pendingAvatarDecoration: memo };
  const tmp = _createForOfIteratorHelperLoose();
  const tmp4 = closure_11;
  const tmp5 = View;
  obj.size = require(1273) /* Button */.AvatarSizes.EDIT_AVATAR_DECORATION;
  const items1 = [callback2(purchase(7967), obj), callback2(purchase(7981), { user, guildId, pendingAvatarSrc, pendingAvatarDecoration: memo })];
  obj.children = items1;
  return tmp4(tmp5, obj);
}
({ jsx: closure_10, jsxs: closure_11, Fragment: closure_12 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { flex: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.MOBILE_ACTIONSHEET_BACKGROUND };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.bounceOffset = { position: "absolute", top: -250, height: 250, right: 0, left: 0 };
let obj1 = { alignSelf: "center", color: require("_createForOfIteratorHelperLoose").colors.MOBILE_TEXT_HEADING_PRIMARY, margin: 25 };
_createForOfIteratorHelperLoose.title = obj1;
_createForOfIteratorHelperLoose.avatarDisplayContainer = { flexDirection: "row", width: "100%", justifyContent: "center", alignItems: "center", paddingVertical: 16 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("get ActivityIndicator").fileFinishedImporting("modules/user_profile/native/EditAvatarDecorationActionSheet.tsx");

export default function EditAvatarDecorationActionSheet(arg0) {
  let analyticsLocations;
  let currentAvatarDecoration;
  let guildId;
  let isTryItOut;
  let user;
  ({ user, guildId, currentAvatarDecoration, isTryItOut, analyticsLocations } = arg0);
  const tmp = _createForOfIteratorHelperLoose();
  let obj = { analyticsLocations, isTryItOut, guildId };
  let tmp2 = first(7929)(obj);
  const setPendingAvatarDecoration = tmp2.setPendingAvatarDecoration;
  let obj1 = setPendingAvatarDecoration(7943);
  obj = { userId: user.id, image: tmp2.pendingAvatar };
  const pendingAvatarSrc = obj1.getPendingAvatarSrc(obj);
  const tmp4 = callback(React.useState(currentAvatarDecoration), 2);
  first = tmp4[0];
  let obj3 = setPendingAvatarDecoration(7186);
  if (null == analyticsLocations) {
    analyticsLocations = [];
  }
  const analyticsLocations2 = first(5462)(analyticsLocations, first(5482).EDIT_AVATAR_DECORATION_SHEET).analyticsLocations;
  const items = [first, setPendingAvatarDecoration];
  callback = React.useCallback(() => {
    let obj = first(outer1_2[15]);
    obj = { type: first(outer1_2[14]).EDIT_AVATAR_DECORATION_SHEET, is_fullscreen: true };
    obj.track(outer1_9.OPEN_POPOUT, obj);
  }, []);
  const callback1 = React.useCallback(() => {
    let tmp2 = null;
    if (null != first) {
      tmp2 = first;
    }
    setPendingAvatarDecoration(tmp2);
  }, items);
  obj = {};
  obj1 = { value: analyticsLocations2 };
  const obj2 = { scrollable: true, ref: obj3.useBottomSheetRef().bottomSheetRef, onExpand: callback, startExpanded: true };
  obj3 = { style: tmp.container };
  const items1 = [callback2(View, { style: tmp.bounceOffset }), , ];
  const obj5 = { variant: "redesign/heading-18/bold", style: tmp.title, accessibilityRole: "header" };
  const intl = setPendingAvatarDecoration(1212).intl;
  obj5.children = intl.string(setPendingAvatarDecoration(1212).t.HykynS);
  items1[1] = callback2(setPendingAvatarDecoration(4126).Text, obj5);
  items1[2] = callback2(EditAvatarDecorationInner, { user, guildId, pendingAvatarSrc, selectedAvatarDecoration: first, setSelectedAvatarDecoration: tmp4[1], isTryItOut });
  obj3.children = items1;
  const items2 = [callback3(View, obj3), ];
  const obj6 = { user };
  let skuId;
  const obj4 = { style: tmp.bounceOffset };
  const tmp10 = callback2;
  const tmp11 = callback3;
  const tmp12 = callback2;
  const tmp6 = first(5462);
  const tmp9 = callback2;
  if (null != currentAvatarDecoration) {
    skuId = currentAvatarDecoration.skuId;
  }
  obj6.currentSkuId = skuId;
  let skuId1;
  if (null != first) {
    skuId1 = first.skuId;
  }
  obj6.selectedSkuId = skuId1;
  obj6.isTryItOut = isTryItOut;
  obj6.onApply = callback1;
  obj6.analyticsLocations = analyticsLocations2;
  obj6.analyticsSource = first(5482).EDIT_AVATAR_DECORATION_SHEET;
  items2[1] = tmp12(first(7945), obj6);
  obj2.children = items2;
  obj1.children = tmp11(setPendingAvatarDecoration(5187).BottomSheet, obj2);
  obj.children = tmp10(setPendingAvatarDecoration(5462).AnalyticsLocationProvider, obj1);
  return tmp9(setPendingAvatarDecoration(3842).ThemeContextProvider, obj);
};
