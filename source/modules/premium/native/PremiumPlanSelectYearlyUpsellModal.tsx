// Module ID: 12482
// Function ID: 96745
// Name: PremiumPlanSelectYearlyUpsellModal
// Dependencies: [57, 31, 27, 1921, 5621, 12473, 1851, 482, 33, 4130, 5052, 4973, 6648, 566, 1827, 4561, 12483, 1273, 1212, 3776, 4543, 2]
// Exports: default

// Module 12482 (PremiumPlanSelectYearlyUpsellModal)
import _slicedToArray from "_slicedToArray";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import { usePremiumPlanSelectStore } from "usePremiumPlanSelectStore";
import { PREMIUM_YEARLY_DISCOUNT_PERCENT as closure_10 } from "GuildFeatures";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_11;
let closure_12;
let closure_5;
let closure_6;
const require = arg1;
({ Image: closure_5, View: closure_6 } = get_ActivityIndicator);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
_createForOfIteratorHelperLoose = { container: { marginHorizontal: 26 }, image: { alignSelf: "center", marginVertical: 32 } };
_createForOfIteratorHelperLoose = {};
const merged = Object.assign(require("createTextStyle")(require("sum").Fonts.DISPLAY_EXTRABOLD, undefined, 24));
_createForOfIteratorHelperLoose["alignSelf"] = "center";
_createForOfIteratorHelperLoose["textAlign"] = "center";
_createForOfIteratorHelperLoose["paddingBottom"] = 8;
_createForOfIteratorHelperLoose["color"] = require("result").DARK_WHITE_500_LIGHT_BLACK_500;
_createForOfIteratorHelperLoose.header = _createForOfIteratorHelperLoose;
let obj1 = { alignSelf: "center", textAlign: "center", paddingBottom: 32, color: require("result").DARK_WHITE_500_LIGHT_BLACK_500 };
_createForOfIteratorHelperLoose.description = obj1;
_createForOfIteratorHelperLoose.upsellButton = { marginBottom: 16 };
_createForOfIteratorHelperLoose.continueButton = { marginBottom: 4 };
_createForOfIteratorHelperLoose.cancelButton = { marginTop: 8, marginBottom: 4 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("get ActivityIndicator").fileFinishedImporting("modules/premium/native/PremiumPlanSelectYearlyUpsellModal.tsx");

export default function PremiumPlanSelectYearlyUpsellModal(arg0) {
  let dependencyMap;
  let importDefault;
  let onClose;
  let orderPriceString;
  let productId;
  ({ onClose, productId } = arg0);
  ({ orderPriceString, continueWithUpsell: importDefault, continueWithDefault: dependencyMap } = arg0);
  let React;
  const tmp = _createForOfIteratorHelperLoose();
  const tmp2 = usePremiumPlanSelectStore((isPurchasing) => isPurchasing.isPurchasing);
  const tmp3 = callback(React.useState(null), 2);
  const first = tmp3[0];
  callback = tmp3[1];
  let obj = productId(6648);
  const premiumBundledItemsFromProductId = obj.getPremiumBundledItemsFromProductId(productId);
  let obj1 = productId(566);
  let items = [_isNativeReflectConstruct];
  const stateFromStores = obj1.useStateFromStores(items, () => outer1_7.locale);
  let obj2 = productId(566);
  const items1 = [closure_8];
  const tmp7 = callback(obj2.useStateFromStoresArray(items1, () => {
    const items = [outer1_8.getProduct(productId), outer1_8.isBusy()];
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
    if (c4) {
      callback2();
    }
  });
  if (null == premiumTier || null == orderPriceString) {
    return null;
  } else {
    let obj3 = productId(1827);
    const formatPercentResult = obj3.formatPercent(stateFromStores, closure_10 / 100);
    obj = { onClose, noDefaultButtons: true };
    obj = { style: tmp.container };
    obj1 = { style: tmp.image, source: importDefault(12483) };
    const items2 = [callback2(closure_5, obj1), , , , , ];
    obj2 = { style: tmp.header };
    const intl = productId(1212).intl;
    obj3 = { discountPercentage: formatPercentResult };
    let obj9 = productId(3776);
    obj3.planName = obj9.getPremiumTypeDisplayName(premiumTier);
    obj2.children = intl.format(productId(1212).t.LQCVfK, obj3);
    items2[1] = callback2(productId(1273).LegacyText, obj2);
    const obj4 = { style: tmp.description };
    const intl2 = productId(1212).intl;
    const obj5 = { discountPercentage: formatPercentResult };
    obj4.children = intl2.format(productId(1212).t["7chOVL"], obj5);
    items2[2] = callback2(productId(1273).LegacyText, obj4);
    const obj6 = { style: tmp.upsellButton };
    const obj7 = { variant: "active" };
    const intl3 = productId(1212).intl;
    const obj8 = { price: orderPriceString };
    obj7.text = intl3.formatToPlainString(productId(1212).t.Qvq6GE, obj8);
    obj7.onPress = function onPress() {
      callback3("upsell");
      callback();
    };
    obj7.disabled = tmp9;
    obj7.loading = "upsell" === first && tmp2;
    obj6.children = callback2(productId(4543).Button, obj7);
    items2[3] = callback2(closure_6, obj6);
    obj9 = { style: tmp.continueButton };
    const obj10 = { variant: "secondary" };
    const intl4 = productId(1212).intl;
    obj10.text = intl4.string(productId(1212).t.YwEyQM);
    obj10.onPress = function onPress() {
      callback3("default");
      callback2();
    };
    obj10.disabled = tmp9;
    obj10.loading = "default" === first && tmp2;
    obj9.children = callback2(productId(4543).Button, obj10);
    items2[4] = callback2(closure_6, obj9);
    const obj11 = { style: tmp.cancelButton };
    const obj12 = { variant: "tertiary" };
    const intl5 = productId(1212).intl;
    obj12.text = intl5.string(productId(1212).t.cpT0Cq);
    obj12.onPress = onClose;
    obj11.children = callback2(productId(4543).Button, obj12);
    items2[5] = callback2(closure_6, obj11);
    obj.children = items2;
    obj.children = closure_12(closure_6, obj);
    return callback2(importDefault(4561), obj);
  }
};
