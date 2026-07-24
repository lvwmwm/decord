// Module ID: 9801
// Function ID: 76170
// Name: PremiumGiftSuccessBody
// Dependencies: [31, 27, 4175, 1851, 653, 33, 4130, 689, 8848, 1456, 8815, 4366, 9714, 8376, 4543, 1212, 3776, 5490, 3830, 8822, 4126, 8416, 4079, 2]
// Exports: PremiumGiftSuccessActions, default

// Module 9801 (PremiumGiftSuccessBody)
import result from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { SubscriptionIntervalTypes } from "GuildFeatures";
import { AnalyticsSections } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_8;
let closure_9;
const require = arg1;
({ jsx: closure_8, Fragment: closure_9, jsxs: closure_10 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_4, marginBottom: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.disclaimer = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.title = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_24, textAlign: "center" };
let obj1 = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_24, textAlign: "center" };
_createForOfIteratorHelperLoose.description = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_8, textAlign: "center" };
let obj2 = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_8, textAlign: "center" };
_createForOfIteratorHelperLoose.input = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_24 };
let obj3 = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_24 };
_createForOfIteratorHelperLoose.inputLabel = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_4 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj4 = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_4 };
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/premium/native/gifting/PremiumGiftPurchaseSuccess.tsx");

export default function PremiumGiftSuccessBody(giftCodeRecord) {
  let planInterval;
  let premiumType;
  giftCodeRecord = giftCodeRecord.giftCodeRecord;
  const tmp = _createForOfIteratorHelperLoose();
  let obj = giftCodeRecord(8848);
  const nativeGiftContext = obj.useNativeGiftContext();
  let giftStyle = nativeGiftContext.giftStyle;
  ({ premiumType, planInterval } = nativeGiftContext);
  let obj1 = giftCodeRecord(4366);
  const giftCodeURL = obj1.getGiftCodeURL(giftCodeRecord.code);
  if (null != giftCodeRecord.giftStyle) {
    giftStyle = giftCodeRecord.giftStyle;
  }
  if (null != giftCodeRecord.subscriptionPlanId) {
    let subscriptionPlanId = giftCodeRecord.subscriptionPlanId;
  } else {
    let obj2 = giftCodeRecord(3776);
    subscriptionPlanId = obj2.getPlanIdForPremiumType(premiumType, planInterval);
  }
  let obj3 = giftCodeURL(3776);
  const tierDisplayNameByPlanId = obj3.getTierDisplayNameByPlanId(subscriptionPlanId);
  let obj4 = giftCodeURL(3776);
  const items = [giftCodeRecord, giftCodeURL];
  obj = {};
  obj = {};
  const callback = React.useCallback(() => {
    const value = outer1_5.get(giftCodeRecord.skuId);
    if (null != value) {
      giftCodeRecord(outer1_2[11]).trackGiftCodeCopy(giftCodeRecord, value);
      const obj = giftCodeRecord(outer1_2[11]);
    }
    giftCodeRecord(outer1_2[17]).copy(giftCodeURL);
    const obj2 = giftCodeRecord(outer1_2[17]);
    const result = giftCodeRecord(outer1_2[18]).presentCopiedToClipboard();
  }, items);
  obj1 = { giftStyle };
  obj.children = callback(giftCodeURL(8822), obj1);
  const items1 = [callback(View, obj), , , , ];
  obj2 = { style: tmp.title, variant: "heading-lg/bold" };
  const intl = giftCodeRecord(1212).intl;
  obj2.children = intl.string(giftCodeRecord(1212).t["/s1xR7"]);
  items1[1] = callback(giftCodeRecord(4126).Text, obj2);
  obj3 = { style: tmp.description, variant: "text-md/medium" };
  const intl2 = giftCodeRecord(1212).intl;
  if (obj4.getInterval(subscriptionPlanId).intervalType === SubscriptionIntervalTypes.YEAR) {
    let bUdTqI = giftCodeRecord(1212).t.rli5ey;
  } else {
    bUdTqI = giftCodeRecord(1212).t.bUdTqI;
  }
  obj3.children = intl2.format(bUdTqI, { intervalCount: 1, name: tierDisplayNameByPlanId });
  items1[2] = callback(giftCodeRecord(4126).Text, obj3);
  obj4 = { style: tmp.input };
  const obj5 = { style: tmp.inputLabel, variant: "heading-md/bold" };
  const intl3 = giftCodeRecord(1212).intl;
  obj5.children = intl3.string(giftCodeRecord(1212).t["qS+yMo"]);
  const items2 = [callback(giftCodeRecord(4126).Text, obj5), ];
  const obj6 = { text: giftCodeURL, icon: giftCodeURL(4079), iconPosition: "end", onPress: callback };
  items2[1] = callback(giftCodeRecord(8416).InputButton, obj6);
  obj4.children = items2;
  items1[3] = callback2(View, obj4);
  const obj7 = { style: tmp.disclaimer, variant: "text-xs/normal" };
  const intl4 = giftCodeRecord(1212).intl;
  obj7.children = intl4.string(giftCodeRecord(1212).t.As9eLl);
  items1[4] = callback(giftCodeRecord(4126).Text, obj7);
  obj.children = items1;
  return callback2(closure_9, obj);
};
export const PremiumGiftSuccessActions = function PremiumGiftSuccessActions(giftCodeRecord) {
  let obj = onClose(navigation[8]);
  const nativeGiftContext = obj.useNativeGiftContext();
  onClose = nativeGiftContext.onClose;
  const prePurchaseGiftingBadgeProgress = nativeGiftContext.prePurchaseGiftingBadgeProgress;
  let obj1 = onClose(navigation[9]);
  navigation = obj1.useNavigation();
  const GiftingBadgeExperiment = onClose(navigation[10]).GiftingBadgeExperiment;
  const enabled = GiftingBadgeExperiment.useConfig({ location: "PremiumGiftSuccessActions" }).enabled;
  const giftCodeURL = onClose(navigation[11]).getGiftCodeURL(giftCodeRecord.giftCodeRecord.code);
  const items = [enabled, prePurchaseGiftingBadgeProgress, navigation, onClose];
  const items1 = [giftCodeURL, enabled, prePurchaseGiftingBadgeProgress, navigation];
  const callback = enabled.useCallback(() => {
    if (enabled) {
      if (null != prePurchaseGiftingBadgeProgress) {
        const obj = { currentProgress: prePurchaseGiftingBadgeProgress };
        navigation.navigate(onClose(navigation[12]).PremiumGiftScreens.GIFTING_BADGE, obj);
      }
    }
    onClose();
  }, items);
  obj = {};
  const callback1 = enabled.useCallback(() => {
    let obj = onClose(navigation[13]);
    obj = { url: giftCodeURL };
    obj.showShareActionSheet(obj, outer1_7.PREMIUM_GIFT_SUCCESS_MODAL);
    let tmp2 = enabled;
    if (enabled) {
      tmp2 = null != prePurchaseGiftingBadgeProgress;
    }
    if (tmp2) {
      obj = { currentProgress: prePurchaseGiftingBadgeProgress };
      navigation.navigate(onClose(navigation[12]).PremiumGiftScreens.GIFTING_BADGE, obj);
    }
  }, items1);
  obj = { variant: "primary" };
  const intl = onClose(navigation[15]).intl;
  obj.text = intl.string(onClose(navigation[15]).t.RDE0Sc);
  obj.onPress = callback1;
  const items2 = [callback(onClose(navigation[14]).Button, obj), ];
  obj1 = { variant: "secondary" };
  const intl2 = onClose(navigation[15]).intl;
  obj1.text = intl2.string(onClose(navigation[15]).t.cpT0Cq);
  obj1.onPress = callback;
  items2[1] = callback(onClose(navigation[14]).Button, obj1);
  obj.children = items2;
  return callback2(closure_9, obj);
};
