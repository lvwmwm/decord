// Module ID: 9802
// Function ID: 76176
// Name: PremiumGiftDMSuccessBody
// Dependencies: [31, 27, 33, 4130, 689, 8848, 1456, 8815, 9714, 4543, 1212, 2262, 8822, 4126, 2]
// Exports: PremiumGiftDMSuccessActions, default

// Module 9802 (PremiumGiftDMSuccessBody)
import result from "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
let closure_7;
const require = arg1;
({ jsx: closure_5, Fragment: closure_6, jsxs: closure_7 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_24, textAlign: "center" };
_createForOfIteratorHelperLoose.title = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.description = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_8, textAlign: "center" };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj1 = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_8, textAlign: "center" };
const result = require("jsxProd").fileFinishedImporting("modules/premium/native/gifting/PremiumGiftDMPurchaseSuccess.tsx");

export default function PremiumGiftDMSuccessBody() {
  const tmp = _createForOfIteratorHelperLoose();
  let obj = require(8848) /* importDefaultResult1 */;
  obj = {};
  obj = {};
  obj.children = callback(importDefault(8822), { giftStyle: obj.useNativeGiftContext().giftStyle });
  const items = [callback(View, obj), , ];
  const obj1 = { style: tmp.title, variant: "heading-lg/bold" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj1.children = intl.string(require(1212) /* getSystemLocale */.t.MqZXbv);
  items[1] = callback(require(4126) /* Text */.Text, obj1);
  const obj2 = { style: tmp.description, variant: "text-md/medium" };
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj2.children = intl2.string(require(1212) /* getSystemLocale */.t.Y1keV0);
  items[2] = callback(require(4126) /* Text */.Text, obj2);
  obj.children = items;
  return callback2(closure_6, obj);
};
export const PremiumGiftDMSuccessActions = function PremiumGiftDMSuccessActions() {
  let obj = onClose(navigation[5]);
  const nativeGiftContext = obj.useNativeGiftContext();
  onClose = nativeGiftContext.onClose;
  const prePurchaseGiftingBadgeProgress = nativeGiftContext.prePurchaseGiftingBadgeProgress;
  navigation = onClose(navigation[6]).useNavigation();
  const GiftingBadgeExperiment = onClose(navigation[7]).GiftingBadgeExperiment;
  const enabled = GiftingBadgeExperiment.useConfig({ location: "PremiumGiftDMSuccessActions" }).enabled;
  const items = [enabled, prePurchaseGiftingBadgeProgress, navigation, onClose];
  const callback = enabled.useCallback(() => {
    if (enabled) {
      if (null != prePurchaseGiftingBadgeProgress) {
        const obj = { currentProgress: prePurchaseGiftingBadgeProgress };
        navigation.navigate(onClose(navigation[8]).PremiumGiftScreens.GIFTING_BADGE, obj);
      }
    }
    onClose();
  }, items);
  obj = {};
  const intl = onClose(navigation[10]).intl;
  obj.text = intl.string(prePurchaseGiftingBadgeProgress(navigation[11]).bGKjmg);
  obj.variant = "primary";
  obj.onPress = callback;
  return callback(onClose(navigation[9]).Button, obj);
};
