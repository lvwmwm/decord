// Module ID: 9771
// Function ID: 75986
// Name: PremiumGiftingPromotionSuccessActions
// Dependencies: [31, 27, 6779, 1874, 1849, 33, 4130, 689, 566, 8809, 1456, 8776, 8206, 9680, 9772, 8229, 1873, 1273, 9766, 4543, 1212, 2]
// Exports: default

// Module 9771 (PremiumGiftingPromotionSuccessActions)
import result from "result";
import { View } from "get ActivityIndicator";
import { isAvatarDecorationRecord } from "_isNativeReflectConstruct";
import { isNameplateRecord } from "_isNativeReflectConstruct";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_8;
let closure_9;
const require = arg1;
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { flexDirection: "column", alignItems: "center", gap: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
let obj1 = { width: 234, height: 40, flexDirection: "row", alignItems: "center", position: "relative", borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, overflow: "hidden" };
_createForOfIteratorHelperLoose.nameplateContainer = obj1;
let obj2 = { position: "absolute", left: 0, right: 0, top: 0, bottom: 0, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, overflow: "hidden" };
_createForOfIteratorHelperLoose.nameplateWrapper = obj2;
_createForOfIteratorHelperLoose.singleAvatarContainer = { flexDirection: "row", paddingRight: 15, justifyContent: "center", alignItems: "center", marginLeft: 5 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/premium/native/gifting/PremiumGiftingPromotionSuccessActions.tsx");

export default function PremiumGiftingPromotionSuccessActions(purchase) {
  purchase = purchase.purchase;
  let tmp = _createForOfIteratorHelperLoose();
  let obj = onClose(navigation[8]);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_7.getCurrentUser());
  let obj1 = onClose(navigation[9]);
  const nativeGiftContext = obj1.useNativeGiftContext();
  onClose = nativeGiftContext.onClose;
  const prePurchaseGiftingBadgeProgress = nativeGiftContext.prePurchaseGiftingBadgeProgress;
  let obj2 = onClose(navigation[10]);
  navigation = obj2.useNavigation();
  const GiftingBadgeExperiment = onClose(navigation[11]).GiftingBadgeExperiment;
  const enabled = GiftingBadgeExperiment.useConfig({ location: "PremiumGiftingPromotionSuccessActions" }).enabled;
  let obj3 = onClose(navigation[12]);
  const fetchCollectiblesProduct = obj3.useFetchCollectiblesProduct(purchase.skuId);
  const product = fetchCollectiblesProduct.product;
  const View = product;
  const items1 = [enabled, prePurchaseGiftingBadgeProgress, navigation];
  const callback = enabled.useCallback(() => {
    let tmp = enabled;
    if (enabled) {
      tmp = null != prePurchaseGiftingBadgeProgress;
    }
    if (tmp) {
      const obj = { currentProgress: prePurchaseGiftingBadgeProgress };
      navigation.navigate(onClose(navigation[13]).PremiumGiftScreens.GIFTING_BADGE, obj);
    }
  }, items1);
  const items2 = [product, onClose, callback, enabled, prePurchaseGiftingBadgeProgress, navigation];
  const first = purchase.items[0];
  obj = { style: tmp.container };
  const callback1 = enabled.useCallback(() => {
    if (null != closure_4) {
      let obj = { product: closure_4, onCancel: callback };
      prePurchaseGiftingBadgeProgress(navigation[14]).open(obj);
      const obj2 = prePurchaseGiftingBadgeProgress(navigation[14]);
    } else {
      if (enabled) {
        if (null != prePurchaseGiftingBadgeProgress) {
          obj = { currentProgress: prePurchaseGiftingBadgeProgress };
          navigation.navigate(onClose(navigation[13]).PremiumGiftScreens.GIFTING_BADGE, obj);
        }
      }
      onClose();
    }
  }, items2);
  if (isNameplateRecord(first)) {
    obj = { style: tmp.nameplateContainer };
    obj1 = { style: tmp.nameplateWrapper };
    obj2 = { nameplate: null, fullOpacity: true, animate: true };
    const tmp23 = prePurchaseGiftingBadgeProgress(navigation[15]);
    obj2.nameplate = onClose(navigation[16]).getNameplateData(first);
    obj1.children = callback(tmp23, obj2);
    const items3 = [callback(View, obj1), ];
    obj3 = { style: tmp.singleAvatarContainer };
    const obj4 = { user: stateFromStores, guildId: undefined, size: onClose(navigation[17]).AvatarSizes.SMALL, "aria-hidden": true };
    obj3.children = callback(onClose(navigation[17]).Avatar, obj4);
    items3[1] = callback(View, obj3);
    obj.children = items3;
    let tmp12 = callback2(View, obj);
    const obj10 = onClose(navigation[16]);
  } else if (callback(first)) {
    const obj5 = { size: onClose(navigation[17]).AvatarSizes.LARGE, asset: first.asset };
    tmp12 = callback(prePurchaseGiftingBadgeProgress(navigation[18]), obj5);
    const tmp16 = prePurchaseGiftingBadgeProgress(navigation[18]);
  }
  const items4 = [tmp12, ];
  const obj6 = { grow: true };
  const intl = onClose(navigation[20]).intl;
  obj6.text = intl.string(onClose(navigation[20]).t.kMYVwv);
  obj6.loading = fetchCollectiblesProduct.isFetching;
  obj6.onPress = callback1;
  items4[1] = callback(onClose(navigation[19]).Button, obj6);
  obj.children = items4;
  return callback2(View, obj);
};
