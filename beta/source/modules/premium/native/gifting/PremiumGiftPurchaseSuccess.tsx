// Module ID: 10539
// Function ID: 10540
// Name: PremiumGiftPurchaseSuccess
// Dependencies: [19, 17, 5822, 1374, 1074, 21, 4836, 576, 10162, 1485, 10204, 5089, 10125, 7809, 5281, 1115, 4488, 6610, 4527, 10290, 4832, 8370, 4780, 2]
// Exports: PremiumGiftSuccessActions, default

// Module 10539 (PremiumGiftPurchaseSuccess)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import PremiumConstants from "PremiumConstants" /* 1374 */;
import ToastUtils from "ToastUtils" /* 4527 */;
import GiftCodeUtils from "GiftCodeUtils" /* 5089 */;
import ClipboardUtils from "ClipboardUtils" /* 6610 */;
import showShareActionSheet from "showShareActionSheet" /* 7809 */;
import PremiumGiftModal from "PremiumGiftModal" /* 10125 */;
import react from "react" /* 19 */;
import SKUStore from "SKUStore" /* 5822 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let navigation;

let c10;
let c9;
let metroImportAll;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
const View = react_native.View;
const SubscriptionIntervalTypes = PremiumConstants.SubscriptionIntervalTypes;
const AnalyticsSections = Constants.AnalyticsSections;
({ jsx: metroImportAll, Fragment: c9, jsxs: c10 } = Fragment);
let createStyles = createStyles_mod;
let obj = { disclaimer: obj2, title: obj3, description: obj4, input: obj5, inputLabel: obj6 };
obj2 = { marginTop: nativeDefault.space.PX_4, marginBottom: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { marginTop: nativeDefault.space.PX_24, textAlign: "center" };
obj4 = { marginTop: nativeDefault.space.PX_8, textAlign: "center" };
obj5 = { marginTop: nativeDefault.space.PX_24 };
obj6 = { marginBottom: nativeDefault.space.PX_4 };
let closure_11 = createStyles(obj);
let result = size.fileFinishedImporting("modules/premium/native/gifting/PremiumGiftPurchaseSuccess.tsx");

export default function PremiumGiftSuccessBody(giftCodeRecord) {
  let bUdTqI;
  let format;
  let giftStyle;
  let intl;
  let intl3;
  let intl4;
  let items2;
  let planInterval;
  let premiumType;
  let subscriptionPlanId;
  giftCodeRecord = giftCodeRecord.giftCodeRecord;
  let tmp = closure_11();
  let obj = giftCodeRecord(10162);
  const nativeGiftContext = obj.useNativeGiftContext();
  ({ giftStyle, premiumType, planInterval } = nativeGiftContext);
  let obj2 = giftCodeRecord(5089);
  const giftCodeURL = obj2.getGiftCodeURL(giftCodeRecord.code);
  if (null != giftCodeRecord.giftStyle) {
    giftStyle = giftCodeRecord.giftStyle;
  }
  if (null != giftCodeRecord.subscriptionPlanId) {
    subscriptionPlanId = giftCodeRecord.subscriptionPlanId;
  } else {
    const tmp2Result = giftCodeRecord(4488);
    subscriptionPlanId = tmp2Result.getPlanIdForPremiumType(premiumType, planInterval);
  }
  const obj4 = giftCodeURL(4488);
  const tierDisplayNameByPlanId = obj4.getTierDisplayNameByPlanId(subscriptionPlanId);
  const items = [giftCodeRecord, giftCodeURL];
  const obj5 = giftCodeURL(4488);
  const intervalType = obj5.getInterval(subscriptionPlanId).intervalType;
  const YEAR = SubscriptionIntervalTypes.YEAR;
  let obj3 = { children: closure_8(giftCodeURL(10290), { giftStyle }) };
  const callback = react.useCallback(() => {
    const value = SKUStore.get(giftCodeRecord.skuId);
    const tmp = giftCodeRecord;
    if (null != value) {
      const obj = GiftCodeUtils;
      obj.trackGiftCodeCopy(tmp, value);
    }
    const obj2 = ClipboardUtils;
    obj2.copy(giftCodeURL);
    const obj3 = ToastUtils;
    const result = obj3.presentCopiedToClipboard();
  }, items);
  const items1 = [closure_8(View, obj3), , , , ];
  const obj6 = { style: tmp.title, variant: "heading-lg/bold", children: intl.string(giftCodeRecord(1115).t["/s1xR7"]) };
  const Text = tmp2(4832).Text;
  intl = tmp2(1115).intl;
  items1[1] = closure_8(Text, obj6);
  const obj7 = { style: tmp.description, variant: "text-md/medium", children: format(bUdTqI, { intervalCount: 1, name: tierDisplayNameByPlanId }) };
  const Text2 = tmp2(4832).Text;
  const intl2 = tmp2(1115).intl;
  format = intl2.format;
  const tmp10 = closure_9;
  const tmp12 = View;
  const tmp6 = giftCodeURL;
  if (intervalType === YEAR) {
    bUdTqI = tmp2(1115).t.rli5ey;
  } else {
    bUdTqI = tmp2(1115).t.bUdTqI;
  }
  const obj8 = { children: items1 };
  items1[2] = closure_8(Text2, obj7);
  const obj9 = { style: tmp.input, children: items2 };
  const obj10 = { style: tmp.inputLabel, variant: "heading-md/bold", children: intl3.string(giftCodeRecord(1115).t["qS+yMo"]) };
  const Text3 = tmp2(4832).Text;
  intl3 = tmp2(1115).intl;
  items2 = [closure_8(Text3, obj10), ];
  const obj11 = { text: giftCodeURL, icon: tmp6(4780), iconPosition: "end", onPress: callback };
  const InputButton = tmp2(8370).InputButton;
  items2[1] = closure_8(InputButton, obj11);
  items1[3] = closure_10(tmp12, obj9);
  const obj12 = { style: tmp.disclaimer, variant: "text-xs/normal", children: intl4.string(giftCodeRecord(1115).t.As9eLl) };
  const Text4 = tmp2(4832).Text;
  intl4 = tmp2(1115).intl;
  items1[4] = closure_8(Text4, obj12);
  return closure_10(tmp10, obj8);
};
export const PremiumGiftSuccessActions = function PremiumGiftSuccessActions(giftCodeRecord) {
  let intl;
  let intl2;
  let items2;
  let onClose;
  navigation = undefined;
  giftCodeRecord = giftCodeRecord.giftCodeRecord;
  let obj = onClose(navigation[8]);
  const nativeGiftContext = obj.useNativeGiftContext();
  onClose = nativeGiftContext.onClose;
  const prePurchaseGiftingBadgeProgress = nativeGiftContext.prePurchaseGiftingBadgeProgress;
  let obj2 = onClose(navigation[9]);
  navigation = obj2.useNavigation();
  const GiftingBadgeExperiment = onClose(navigation[10]).GiftingBadgeExperiment;
  const enabled = GiftingBadgeExperiment.useConfig({ location: "PremiumGiftSuccessActions" }).enabled;
  let obj3 = onClose(navigation[11]);
  const giftCodeURL = obj3.getGiftCodeURL(giftCodeRecord.code);
  const items = [enabled, prePurchaseGiftingBadgeProgress, navigation, onClose];
  const items1 = [giftCodeURL, enabled, prePurchaseGiftingBadgeProgress, navigation];
  const callback = enabled.useCallback(() => {
    const tmp = enabled;
    if (tmp) {
      if (null != prePurchaseGiftingBadgeProgress) {
        const obj = { currentProgress: tmp2 };
        navigation.navigate(PremiumGiftModal.PremiumGiftScreens.GIFTING_BADGE, obj);
      }
    }
    onClose();
  }, items);
  const obj4 = { children: items2 };
  const callback1 = enabled.useCallback(() => {
    const obj = showShareActionSheet;
    const obj2 = { url: giftCodeURL };
    obj.showShareActionSheet(obj2, AnalyticsSections.PREMIUM_GIFT_SUCCESS_MODAL);
    let tmp4 = enabled;
    if (tmp4) {
      tmp4 = null != prePurchaseGiftingBadgeProgress;
    }
    if (tmp4) {
      const obj3 = { currentProgress: prePurchaseGiftingBadgeProgress };
      navigation.navigate(PremiumGiftModal.PremiumGiftScreens.GIFTING_BADGE, obj3);
    }
  }, items1);
  const obj5 = { variant: "primary", text: intl.string(onClose(navigation[15]).t.RDE0Sc), onPress: callback1 };
  const Button = onClose(navigation[14]).Button;
  intl = onClose(navigation[15]).intl;
  items2 = [closure_8(Button, obj5), ];
  const obj6 = { variant: "secondary", text: intl2.string(onClose(navigation[15]).t.cpT0Cq), onPress: callback };
  const Button2 = onClose(navigation[14]).Button;
  intl2 = onClose(navigation[15]).intl;
  items2[1] = closure_8(Button2, obj6);
  return closure_10(closure_9, obj4);
};
