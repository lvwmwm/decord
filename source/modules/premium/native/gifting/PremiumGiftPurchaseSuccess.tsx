// Module ID: 9762
// Function ID: 75935
// Name: PremiumGiftSuccessBody
// Dependencies: []
// Exports: PremiumGiftSuccessActions, default

// Module 9762 (PremiumGiftSuccessBody)
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
const SubscriptionIntervalTypes = arg1(dependencyMap[3]).SubscriptionIntervalTypes;
const AnalyticsSections = arg1(dependencyMap[4]).AnalyticsSections;
({ jsx: closure_8, Fragment: closure_9, jsxs: closure_10 } = arg1(dependencyMap[5]));
let obj = arg1(dependencyMap[6]);
obj = {};
obj = { marginTop: importDefault(dependencyMap[7]).space.PX_4, marginBottom: importDefault(dependencyMap[7]).space.PX_16 };
obj.disclaimer = obj;
const tmp2 = arg1(dependencyMap[5]);
obj.title = { marginTop: importDefault(dependencyMap[7]).space.PX_24, textAlign: "center" };
const obj1 = { marginTop: importDefault(dependencyMap[7]).space.PX_24, textAlign: "center" };
obj.description = { marginTop: importDefault(dependencyMap[7]).space.PX_8, textAlign: "center" };
const obj2 = { marginTop: importDefault(dependencyMap[7]).space.PX_8, textAlign: "center" };
obj.input = { marginTop: importDefault(dependencyMap[7]).space.PX_24 };
const obj3 = { marginTop: importDefault(dependencyMap[7]).space.PX_24 };
obj.inputLabel = { marginBottom: importDefault(dependencyMap[7]).space.PX_4 };
let closure_11 = obj.createStyles(obj);
const obj4 = { marginBottom: importDefault(dependencyMap[7]).space.PX_4 };
const result = arg1(dependencyMap[23]).fileFinishedImporting("modules/premium/native/gifting/PremiumGiftPurchaseSuccess.tsx");

export default function PremiumGiftSuccessBody(giftCodeRecord) {
  let planInterval;
  let premiumType;
  giftCodeRecord = giftCodeRecord.giftCodeRecord;
  const arg1 = giftCodeRecord;
  const tmp = callback3();
  let obj = arg1(dependencyMap[8]);
  const nativeGiftContext = obj.useNativeGiftContext();
  let giftStyle = nativeGiftContext.giftStyle;
  ({ premiumType, planInterval } = nativeGiftContext);
  let obj1 = arg1(dependencyMap[11]);
  const giftCodeURL = obj1.getGiftCodeURL(giftCodeRecord.code);
  const importDefault = giftCodeURL;
  if (null != giftCodeRecord.giftStyle) {
    giftStyle = giftCodeRecord.giftStyle;
  }
  if (null != giftCodeRecord.subscriptionPlanId) {
    let subscriptionPlanId = giftCodeRecord.subscriptionPlanId;
  } else {
    let obj2 = arg1(dependencyMap[16]);
    subscriptionPlanId = obj2.getPlanIdForPremiumType(premiumType, planInterval);
  }
  let obj3 = importDefault(dependencyMap[16]);
  const tierDisplayNameByPlanId = obj3.getTierDisplayNameByPlanId(subscriptionPlanId);
  let obj4 = importDefault(dependencyMap[16]);
  const items = [giftCodeRecord, giftCodeURL];
  obj = {};
  obj = {};
  const callback = React.useCallback(() => {
    const value = closure_5.get(giftCodeRecord.skuId);
    if (null != value) {
      giftCodeRecord(closure_2[11]).trackGiftCodeCopy(giftCodeRecord, value);
      const obj = giftCodeRecord(closure_2[11]);
    }
    giftCodeRecord(closure_2[17]).copy(giftCodeURL);
    const obj2 = giftCodeRecord(closure_2[17]);
    const result = giftCodeRecord(closure_2[18]).presentCopiedToClipboard();
  }, items);
  obj1 = { giftStyle };
  obj.children = callback(importDefault(dependencyMap[19]), obj1);
  const items1 = [callback(View, obj), , , , ];
  obj2 = { style: tmp.title, variant: "heading-lg/bold" };
  const intl = arg1(dependencyMap[15]).intl;
  obj2.children = intl.string(arg1(dependencyMap[15]).t./s1xR7);
  items1[1] = callback(arg1(dependencyMap[20]).Text, obj2);
  obj3 = { style: tmp.description, variant: "text-md/medium" };
  const intl2 = arg1(dependencyMap[15]).intl;
  if (obj4.getInterval(subscriptionPlanId).intervalType === SubscriptionIntervalTypes.YEAR) {
    let bUdTqI = arg1(dependencyMap[15]).t.rli5ey;
  } else {
    bUdTqI = arg1(dependencyMap[15]).t.bUdTqI;
  }
  obj3.children = intl2.format(bUdTqI, { intervalCount: 1, name: tierDisplayNameByPlanId });
  items1[2] = callback(arg1(dependencyMap[20]).Text, obj3);
  obj4 = { style: tmp.input };
  const obj5 = { style: tmp.inputLabel, variant: "heading-md/bold" };
  const intl3 = arg1(dependencyMap[15]).intl;
  obj5.children = intl3.string(arg1(dependencyMap[15]).t.qS+yMo);
  const items2 = [callback(arg1(dependencyMap[20]).Text, obj5), ];
  const obj6 = { text: giftCodeURL, icon: importDefault(dependencyMap[22]), iconPosition: "end", onPress: callback };
  items2[1] = callback(arg1(dependencyMap[21]).InputButton, obj6);
  obj4.children = items2;
  items1[3] = callback2(View, obj4);
  const obj7 = { style: tmp.disclaimer, variant: "text-xs/normal" };
  const intl4 = arg1(dependencyMap[15]).intl;
  obj7.children = intl4.string(arg1(dependencyMap[15]).t.As9eLl);
  items1[4] = callback(arg1(dependencyMap[20]).Text, obj7);
  obj.children = items1;
  return callback2(closure_9, obj);
};
export const PremiumGiftSuccessActions = function PremiumGiftSuccessActions(giftCodeRecord) {
  let obj = arg1(dependencyMap[8]);
  const nativeGiftContext = obj.useNativeGiftContext();
  const onClose = nativeGiftContext.onClose;
  const arg1 = onClose;
  const prePurchaseGiftingBadgeProgress = nativeGiftContext.prePurchaseGiftingBadgeProgress;
  const importDefault = prePurchaseGiftingBadgeProgress;
  let obj1 = arg1(dependencyMap[9]);
  const navigation = obj1.useNavigation();
  const dependencyMap = navigation;
  const GiftingBadgeExperiment = arg1(dependencyMap[10]).GiftingBadgeExperiment;
  const enabled = GiftingBadgeExperiment.useConfig({ location: "PremiumGiftSuccessActions" }).enabled;
  const React = enabled;
  const giftCodeURL = arg1(dependencyMap[11]).getGiftCodeURL(giftCodeRecord.giftCodeRecord.code);
  const View = giftCodeURL;
  const items = [enabled, prePurchaseGiftingBadgeProgress, navigation, onClose];
  const items1 = [giftCodeURL, enabled, prePurchaseGiftingBadgeProgress, navigation];
  const callback = React.useCallback(() => {
    if (enabled) {
      if (null != prePurchaseGiftingBadgeProgress) {
        const obj = { currentProgress: prePurchaseGiftingBadgeProgress };
        navigation.navigate(onClose(navigation[12]).PremiumGiftScreens.GIFTING_BADGE, obj);
      }
    }
    onClose();
  }, items);
  obj = {};
  const callback1 = React.useCallback(() => {
    let obj = onClose(navigation[13]);
    obj = { url: giftCodeURL };
    obj.showShareActionSheet(obj, constants.PREMIUM_GIFT_SUCCESS_MODAL);
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
  const intl = arg1(dependencyMap[15]).intl;
  obj.text = intl.string(arg1(dependencyMap[15]).t.RDE0Sc);
  obj.onPress = callback1;
  const items2 = [callback(arg1(dependencyMap[14]).Button, obj), ];
  obj1 = { variant: "secondary" };
  const intl2 = arg1(dependencyMap[15]).intl;
  obj1.text = intl2.string(arg1(dependencyMap[15]).t.cpT0Cq);
  obj1.onPress = callback;
  items2[1] = callback(arg1(dependencyMap[14]).Button, obj1);
  obj.children = items2;
  return callback2(closure_9, obj);
};
