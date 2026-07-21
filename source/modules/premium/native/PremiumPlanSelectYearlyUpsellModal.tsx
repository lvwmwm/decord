// Module ID: 12363
// Function ID: 94561
// Name: PremiumPlanSelectYearlyUpsellModal
// Dependencies: []
// Exports: default

// Module 12363 (PremiumPlanSelectYearlyUpsellModal)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
({ Image: closure_5, View: closure_6 } = arg1(dependencyMap[2]));
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
const usePremiumPlanSelectStore = arg1(dependencyMap[5]).usePremiumPlanSelectStore;
let closure_10 = arg1(dependencyMap[6]).PREMIUM_YEARLY_DISCOUNT_PERCENT;
const tmp2 = arg1(dependencyMap[2]);
({ jsx: closure_11, jsxs: closure_12 } = arg1(dependencyMap[8]));
let obj = arg1(dependencyMap[9]);
obj = { container: { marginHorizontal: 26 }, image: { marginBottom: null, alignSelf: null } };
obj = {};
const merged = Object.assign(importDefault(dependencyMap[10])(arg1(dependencyMap[7]).Fonts.DISPLAY_EXTRABOLD, undefined, 24));
obj["alignSelf"] = "center";
obj["textAlign"] = "center";
obj["paddingBottom"] = 8;
obj["color"] = arg1(dependencyMap[11]).DARK_WHITE_500_LIGHT_BLACK_500;
obj.header = obj;
const obj1 = { body: "2026-03-private-profiles-strict-gb", ctaLabel: "user", ctaAction: "row", color: arg1(dependencyMap[11]).DARK_WHITE_500_LIGHT_BLACK_500 };
obj.description = obj1;
obj.upsellButton = { marginBottom: 16 };
obj.continueButton = { marginBottom: 4 };
obj.cancelButton = { size: 1, progress: "comp_0" };
let closure_13 = obj.createStyles(obj);
const tmp3 = arg1(dependencyMap[8]);
const result = arg1(dependencyMap[21]).fileFinishedImporting("modules/premium/native/PremiumPlanSelectYearlyUpsellModal.tsx");

export default function PremiumPlanSelectYearlyUpsellModal(arg0) {
  let onClose;
  let orderPriceString;
  let productId;
  ({ onClose, productId } = arg0);
  const arg1 = productId;
  ({ orderPriceString, continueWithUpsell: closure_1, continueWithDefault: closure_2 } = arg0);
  let React;
  const tmp = callback3();
  const tmp2 = usePremiumPlanSelectStore((isPurchasing) => isPurchasing.isPurchasing);
  const tmp3 = callback(React.useState(null), 2);
  const first = tmp3[0];
  const callback = tmp3[1];
  let obj = arg1(dependencyMap[12]);
  const premiumBundledItemsFromProductId = obj.getPremiumBundledItemsFromProductId(productId);
  let obj1 = arg1(dependencyMap[13]);
  const items = [closure_7];
  const stateFromStores = obj1.useStateFromStores(items, () => locale.locale);
  let obj2 = arg1(dependencyMap[13]);
  const items1 = [closure_8];
  const tmp7 = callback(obj2.useStateFromStoresArray(items1, () => {
    const items = [closure_8.getProduct(productId), closure_8.isBusy()];
    return items;
  }), 2);
  const first1 = tmp7[0];
  let tmp9 = tmp2;
  if (!tmp2) {
    tmp9 = tmp7[1];
  }
  const premiumTier = premiumBundledItemsFromProductId.premiumTier;
  if (null == orderPriceString) {
    let priceString;
    if (null != first1) {
      priceString = first1.priceString;
    }
    orderPriceString = priceString;
  }
  React = tmp11;
  const effect = React.useEffect(() => {
    if (tmp11) {
      callback2();
    }
  });
  if (null == premiumTier || null == orderPriceString) {
    return null;
  } else {
    let obj3 = arg1(dependencyMap[14]);
    const formatPercentResult = obj3.formatPercent(stateFromStores, closure_10 / 100);
    obj = { onClose, noDefaultButtons: true };
    obj = { style: tmp.container };
    obj1 = { style: tmp.image, source: importDefault(dependencyMap[16]) };
    const items2 = [callback2(closure_5, obj1), , , , , ];
    obj2 = { style: tmp.header };
    const intl = arg1(dependencyMap[18]).intl;
    obj3 = { discountPercentage: formatPercentResult };
    let obj9 = arg1(dependencyMap[19]);
    obj3.planName = obj9.getPremiumTypeDisplayName(premiumTier);
    obj2.children = intl.format(arg1(dependencyMap[18]).t.LQCVfK, obj3);
    items2[1] = callback2(arg1(dependencyMap[17]).LegacyText, obj2);
    const obj4 = { style: tmp.description };
    const intl2 = arg1(dependencyMap[18]).intl;
    const obj5 = { discountPercentage: formatPercentResult };
    obj4.children = intl2.format(arg1(dependencyMap[18]).t.7chOVL, obj5);
    items2[2] = callback2(arg1(dependencyMap[17]).LegacyText, obj4);
    const obj6 = { style: tmp.upsellButton };
    const obj7 = { variant: "active" };
    const intl3 = arg1(dependencyMap[18]).intl;
    const obj8 = { price: orderPriceString };
    obj7.text = intl3.formatToPlainString(arg1(dependencyMap[18]).t.Qvq6GE, obj8);
    obj7.onPress = function onPress() {
      callback3("upsell");
      callback();
    };
    obj7.disabled = tmp9;
    obj7.loading = "upsell" === first && tmp2;
    obj6.children = callback2(arg1(dependencyMap[20]).Button, obj7);
    items2[3] = callback2(closure_6, obj6);
    obj9 = { style: tmp.continueButton };
    const obj10 = { variant: "secondary" };
    const intl4 = arg1(dependencyMap[18]).intl;
    obj10.text = intl4.string(arg1(dependencyMap[18]).t.YwEyQM);
    obj10.onPress = function onPress() {
      callback3("default");
      callback2();
    };
    obj10.disabled = tmp9;
    obj10.loading = "default" === first && tmp2;
    obj9.children = callback2(arg1(dependencyMap[20]).Button, obj10);
    items2[4] = callback2(closure_6, obj9);
    const obj11 = { style: tmp.cancelButton };
    const obj12 = { variant: "tertiary" };
    const intl5 = arg1(dependencyMap[18]).intl;
    obj12.text = intl5.string(arg1(dependencyMap[18]).t.cpT0Cq);
    obj12.onPress = onClose;
    obj11.children = callback2(arg1(dependencyMap[20]).Button, obj12);
    items2[5] = callback2(closure_6, obj11);
    obj.children = items2;
    obj.children = closure_12(closure_6, obj);
    return callback2(importDefault(dependencyMap[15]), obj);
  }
};
