// Module ID: 9762
// Function ID: 75928
// Name: PremiumGiftDMSuccessBody
// Dependencies: []
// Exports: PremiumGiftDMSuccessActions, default

// Module 9762 (PremiumGiftDMSuccessBody)
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_5, Fragment: closure_6, jsxs: closure_7 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = {};
obj = { marginTop: importDefault(dependencyMap[4]).space.PX_24, textAlign: "center" };
obj.title = obj;
const tmp2 = arg1(dependencyMap[2]);
obj.description = { marginTop: importDefault(dependencyMap[4]).space.PX_8, textAlign: "center" };
let closure_8 = obj.createStyles(obj);
const obj1 = { marginTop: importDefault(dependencyMap[4]).space.PX_8, textAlign: "center" };
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/premium/native/gifting/PremiumGiftDMPurchaseSuccess.tsx");

export default function PremiumGiftDMSuccessBody() {
  const tmp = callback3();
  let obj = arg1(dependencyMap[5]);
  obj = {};
  obj = {};
  obj.children = callback(importDefault(dependencyMap[12]), { giftStyle: obj.useNativeGiftContext().giftStyle });
  const items = [callback(View, obj), , ];
  const obj1 = { style: tmp.title, variant: "heading-lg/bold" };
  const intl = arg1(dependencyMap[10]).intl;
  obj1.children = intl.string(arg1(dependencyMap[10]).t.MqZXbv);
  items[1] = callback(arg1(dependencyMap[13]).Text, obj1);
  const obj2 = { style: tmp.description, variant: "text-md/medium" };
  const intl2 = arg1(dependencyMap[10]).intl;
  obj2.children = intl2.string(arg1(dependencyMap[10]).t.Y1keV0);
  items[2] = callback(arg1(dependencyMap[13]).Text, obj2);
  obj.children = items;
  return callback2(closure_6, obj);
};
export const PremiumGiftDMSuccessActions = function PremiumGiftDMSuccessActions() {
  let obj = arg1(dependencyMap[5]);
  const nativeGiftContext = obj.useNativeGiftContext();
  const onClose = nativeGiftContext.onClose;
  const arg1 = onClose;
  const prePurchaseGiftingBadgeProgress = nativeGiftContext.prePurchaseGiftingBadgeProgress;
  const importDefault = prePurchaseGiftingBadgeProgress;
  const navigation = arg1(dependencyMap[6]).useNavigation();
  const dependencyMap = navigation;
  const GiftingBadgeExperiment = arg1(dependencyMap[7]).GiftingBadgeExperiment;
  const enabled = GiftingBadgeExperiment.useConfig({ location: "PremiumGiftDMSuccessActions" }).enabled;
  const React = enabled;
  const items = [enabled, prePurchaseGiftingBadgeProgress, navigation, onClose];
  const callback = React.useCallback(() => {
    if (enabled) {
      if (null != prePurchaseGiftingBadgeProgress) {
        const obj = { currentProgress: prePurchaseGiftingBadgeProgress };
        navigation.navigate(onClose(navigation[8]).PremiumGiftScreens.GIFTING_BADGE, obj);
      }
    }
    onClose();
  }, items);
  obj = {};
  const intl = arg1(dependencyMap[10]).intl;
  obj.text = intl.string(importDefault(dependencyMap[11]).bGKjmg);
  obj.variant = "primary";
  obj.onPress = callback;
  return callback(arg1(dependencyMap[9]).Button, obj);
};
