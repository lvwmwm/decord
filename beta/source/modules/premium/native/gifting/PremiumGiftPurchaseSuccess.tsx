// Module ID: 13953
// Function ID: 13954
// Name: PremiumGiftPurchaseSuccess
// Dependencies: [19, 17, 6674, 1388, 1071, 21, 4913, 575, 9468, 1500, 6347, 9466, 9718, 5511, 1112, 2173, 7545, 5594, 9616, 5504, 7600, 5614, 2]
// Exports: PremiumGiftSuccessActions, default

// Module 13953 (PremiumGiftPurchaseSuccess)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1071 */;
import PremiumConstants from "PremiumConstants" /* 1388 */;
import ToastUtils from "ToastUtils" /* 5594 */;
import GiftCodeUtils from "GiftCodeUtils" /* 6347 */;
import ClipboardUtils from "ClipboardUtils" /* 7545 */;
import PremiumGiftModal from "PremiumGiftModal" /* 9466 */;
import showShareActionSheet from "showShareActionSheet" /* 9718 */;
import react from "react" /* 19 */;
import SKUStore from "SKUStore" /* 6674 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4913 */;
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
  let obj = giftCodeRecord(9468);
  const nativeGiftContext = obj.useNativeGiftContext();
  ({ giftStyle, premiumType, planInterval } = nativeGiftContext);
  let obj2 = giftCodeRecord(6347);
  const giftCodeURL = obj2.getGiftCodeURL(giftCodeRecord.code);
  if (null != giftCodeRecord.giftStyle) {
    giftStyle = giftCodeRecord.giftStyle;
  }
  if (null != giftCodeRecord.subscriptionPlanId) {
    subscriptionPlanId = giftCodeRecord.subscriptionPlanId;
  } else {
    const tmp2Result = giftCodeRecord(2173);
    subscriptionPlanId = tmp2Result.getPlanIdForPremiumType(premiumType, planInterval);
  }
  const obj4 = giftCodeURL(2173);
  const tierDisplayNameByPlanId = obj4.getTierDisplayNameByPlanId(subscriptionPlanId);
  const items = [giftCodeRecord, giftCodeURL];
  const obj5 = giftCodeURL(2173);
  const intervalType = obj5.getInterval(subscriptionPlanId).intervalType;
  const YEAR = SubscriptionIntervalTypes.YEAR;
  let obj3 = { children: closure_8(giftCodeURL(9616), { giftStyle }) };
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
  const obj6 = { style: tmp.title, variant: "heading-lg/semibold", children: intl.string(giftCodeRecord(1112).t["/s1xR7"]) };
  const Text = tmp2(5504).Text;
  intl = tmp2(1112).intl;
  items1[1] = closure_8(Text, obj6);
  const obj7 = { style: tmp.description, variant: "body-md/medium", children: format(bUdTqI, { intervalCount: 1, name: tierDisplayNameByPlanId }) };
  const Text2 = tmp2(5504).Text;
  const intl2 = tmp2(1112).intl;
  format = intl2.format;
  const tmp10 = closure_9;
  const tmp12 = View;
  const tmp6 = giftCodeURL;
  if (intervalType === YEAR) {
    bUdTqI = tmp2(1112).t.rli5ey;
  } else {
    bUdTqI = tmp2(1112).t.bUdTqI;
  }
  const obj8 = { children: items1 };
  items1[2] = closure_8(Text2, obj7);
  const obj9 = { style: tmp.input, children: items2 };
  const obj10 = { style: tmp.inputLabel, variant: "heading-sm/semibold", children: intl3.string(giftCodeRecord(1112).t["qS+yMo"]) };
  const Text3 = tmp2(5504).Text;
  intl3 = tmp2(1112).intl;
  items2 = [closure_8(Text3, obj10), ];
  const obj11 = { text: giftCodeURL, icon: tmp6(5614), iconPosition: "end", onPress: callback };
  const InputButton = tmp2(7600).InputButton;
  items2[1] = closure_8(InputButton, obj11);
  items1[3] = closure_10(tmp12, obj9);
  const obj12 = { style: tmp.disclaimer, variant: "body-xs/normal", children: intl4.string(giftCodeRecord(1112).t.As9eLl) };
  const Text4 = tmp2(5504).Text;
  intl4 = tmp2(1112).intl;
  items1[4] = closure_8(Text4, obj12);
  return closure_10(tmp10, obj8);
};
export function PremiumGiftSuccessActions(giftCodeRecord) {
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
  let obj3 = onClose(navigation[10]);
  const giftCodeURL = obj3.getGiftCodeURL(giftCodeRecord.code);
  const items = [prePurchaseGiftingBadgeProgress, navigation, onClose];
  const items1 = [giftCodeURL, prePurchaseGiftingBadgeProgress, navigation];
  const callback = giftCodeURL.useCallback(() => {
    if (null != prePurchaseGiftingBadgeProgress) {
      const obj = { currentProgress: tmp };
      navigation.navigate(PremiumGiftModal.PremiumGiftScreens.GIFTING_BADGE, obj);
    } else {
      onClose();
    }
  }, items);
  const obj4 = { children: items2 };
  const callback1 = giftCodeURL.useCallback(() => {
    const obj = showShareActionSheet;
    const obj2 = { url: giftCodeURL };
    obj.showShareActionSheet(obj2, AnalyticsSections.PREMIUM_GIFT_SUCCESS_MODAL);
    if (null != prePurchaseGiftingBadgeProgress) {
      const obj3 = { currentProgress: tmp4 };
      navigation.navigate(PremiumGiftModal.PremiumGiftScreens.GIFTING_BADGE, obj3);
    }
  }, items1);
  const obj5 = { variant: "primary", text: intl.string(onClose(navigation[14]).t.RDE0Sc), onPress: callback1 };
  const Button = onClose(navigation[13]).Button;
  intl = onClose(navigation[14]).intl;
  items2 = [closure_8(Button, obj5), ];
  const obj6 = { variant: "secondary", text: intl2.string(onClose(navigation[14]).t.cpT0Cq), onPress: callback };
  const Button2 = onClose(navigation[13]).Button;
  intl2 = onClose(navigation[14]).intl;
  items2[1] = closure_8(Button2, obj6);
  return closure_10(closure_9, obj4);
}
