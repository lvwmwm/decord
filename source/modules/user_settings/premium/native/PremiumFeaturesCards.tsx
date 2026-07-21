// Module ID: 7993
// Function ID: 63534
// Name: PremiumFeaturesCards
// Dependencies: []
// Exports: default

// Module 7993 (PremiumFeaturesCards)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const PremiumTypes = arg1(dependencyMap[2]).PremiumTypes;
const jsx = arg1(dependencyMap[3]).jsx;
let obj = arg1(dependencyMap[4]);
let closure_5 = obj.createStyles({ container: {} });
obj = { TIER_0_LEADING: 0, [0]: "TIER_0_LEADING", TIER_2_LEADING: 1, [1]: "TIER_2_LEADING" };
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/user_settings/premium/native/PremiumFeaturesCards.tsx");

export default function PremiumFeaturesCards(onFirstCardLayout) {
  let order;
  ({ applicationId: closure_0, onPaymentSuccess: closure_1, onPaymentDismiss: closure_2, order } = onFirstCardLayout);
  if (order === undefined) {
    order = obj.TIER_0_LEADING;
  }
  const PremiumTypes = onFirstCardLayout.onFirstCardLayout;
  if (obj.TIER_2_LEADING === order) {
    const items = [, ];
    ({ TIER_2: arr2[0], TIER_0: arr2[1] } = PremiumTypes);
    let items1 = items;
  } else {
    const TIER_0_LEADING = obj.TIER_0_LEADING;
    items1 = [, ];
    ({ TIER_0: arr[0], TIER_2: arr[1] } = PremiumTypes);
  }
  const obj = { style: items2, onLayout: onFirstCardLayout.onLayout };
  const items2 = [callback().container, onFirstCardLayout.style];
  let mapped;
  if (null != items1) {
    mapped = items1.map((premiumType) => {
      const obj = {};
      let tmp3;
      if (0 === arg1) {
        tmp3 = onFirstCardLayout;
      }
      obj.onLayout = tmp3;
      obj.premiumType = premiumType;
      obj.applicationId = callback;
      obj.onPaymentSuccess = closure_1;
      obj.onPaymentDismiss = closure_2;
      return closure_4(callback(closure_1[5]), obj, premiumType);
    });
  }
  obj.children = mapped;
  return <View {...obj} />;
};
export const PremiumFeatureCardOrder = obj;
