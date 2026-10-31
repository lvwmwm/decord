// Module ID: 15439
// Function ID: 15440
// Name: PremiumPlanSelectYearlyUpsellModal
// Dependencies: [32, 19, 17, 2062, 7597, 15426, 1385, 1083, 21, 5014, 6723, 6778, 7592, 504, 1895, 6030, 5717, 15440, 1187, 1113, 2047, 5634, 2]
// Exports: default

// Module 15439 (PremiumPlanSelectYearlyUpsellModal)
import react_native from "react-native" /* 17 */;
import Constants from "Constants" /* 1083 */;
import PremiumConstants from "PremiumConstants" /* 1385 */;
import FastImageDefault from "FastImage" /* 5717 */;
import AlertDefault from "Alert" /* 6030 */;
import TextStylesDefault from "TextStyles" /* 6723 */;
import LegacyTokens from "LegacyTokens" /* 6778 */;
import PremiumPlanSelectStore from "PremiumPlanSelectStore" /* 15426 */;
import AssetRegistryDefault from "AssetRegistry" /* 15440 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import LocaleStore from "LocaleStore" /* 2062 */;
import IAPStore from "IAPStore" /* 7597 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let c10;
let obj2;
let obj3;
let unpackModuleId;
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
const View = react_native.View;
const usePremiumPlanSelectStore = PremiumPlanSelectStore.usePremiumPlanSelectStore;
let closure_9 = PremiumConstants.PREMIUM_YEARLY_DISCOUNT_PERCENT;
const Fonts = Constants.Fonts;
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { marginHorizontal: 26 }, image: { alignSelf: "center", marginVertical: 32 }, header: obj2, description: obj3, upsellButton: { marginBottom: 16 }, continueButton: { marginBottom: 4 }, cancelButton: { marginTop: 8, marginBottom: 4 } };
obj2 = { alignSelf: "center", textAlign: "center", paddingBottom: 8, color: LegacyTokens.DARK_WHITE_500_LIGHT_BLACK_500 };
createStyles = createStyles.createStyles;
const merged = Object.assign(TextStylesDefault(Fonts.DISPLAY_EXTRABOLD, undefined, 24));
obj3 = { alignSelf: "center", textAlign: "center", paddingBottom: 32, color: LegacyTokens.DARK_WHITE_500_LIGHT_BLACK_500 };
let closure_12 = createStyles(obj);
const result = size.fileFinishedImporting("modules/premium/native/PremiumPlanSelectYearlyUpsellModal.tsx");

export default function PremiumPlanSelectYearlyUpsellModal(arg0) {
  let Button;
  let Button2;
  let Button3;
  let LQCVfK;
  let _undefined;
  let c3;
  let closure_4;
  let format;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let items2;
  let locale;
  let obj11;
  let obj13;
  let obj14;
  let obj16;
  let obj18;
  let obj6;
  let obj9;
  let onClose;
  let orderPriceString;
  let productId;
  let tmp4;
  let tmp5Result2;
  ({ onClose, productId } = arg0);
  ({ orderPriceString, continueWithUpsell: importDefault, continueWithDefault: dependencyMap } = arg0);
  _slicedToArray = undefined;
  react = undefined;
  let tmp = closure_12();
  const tmp2 = usePremiumPlanSelectStore((isPurchasing) => isPurchasing.isPurchasing);
  [tmp4, c3] = _slicedToArray(react.useState(null), 2);
  const tmp3 = _slicedToArray(react.useState(null), 2);
  const obj2 = productId(7592);
  const premiumBundledItemsFromProductId = obj2.getPremiumBundledItemsFromProductId(productId);
  let items = [LocaleStore];
  const obj3 = productId(504);
  const stateFromStores = obj3.useStateFromStores(items, () => locale.locale);
  const items1 = [IAPStore];
  const obj4 = productId(504);
  const tmp9 = _slicedToArray(obj4.useStateFromStoresArray(items1, () => {
    const items = [IAPStore.getProduct(productId), IAPStore.isBusy()];
    return items;
  }), 2);
  const first = tmp9[0];
  const premiumTier = premiumBundledItemsFromProductId.premiumTier;
  const obj = react;
  if (orderPriceString == null) {
    let priceString;
    if (first != null) {
      priceString = first.priceString;
    }
    orderPriceString = priceString;
  }
  react = tmp13;
  const effect = obj.useEffect(() => {
    const tmp = closure_4;
    if (tmp) {
      dependencyMap();
    }
  });
  if (null == premiumTier || null == orderPriceString) {
    return null;
  } else {
    const tmp5Result = productId(1895);
    const formatPercentResult = tmp5Result.formatPercent(stateFromStores, closure_9 / 100);
    const obj5 = { onClose, noDefaultButtons: true, children: closure_11(View, obj6) };
    obj6 = { style: tmp.container, children: items2 };
    const obj7 = { style: tmp.image, source: AssetRegistryDefault };
    const tmp19 = AlertDefault;
    const tmp22 = FastImageDefault;
    items2 = [closure_10(tmp22, obj7), , , , , ];
    const obj8 = { style: tmp.header, accessibilityRole: "header", children: format(LQCVfK, obj9) };
    const LegacyText = tmp5(1187).LegacyText;
    const intl = tmp5(1113).intl;
    format = intl.format;
    obj9 = { discountPercentage: formatPercentResult, planName: tmp5Result2.getPremiumTypeDisplayName(premiumTier) };
    LQCVfK = tmp5(1113).t.LQCVfK;
    tmp5Result2 = productId(2047);
    items2[1] = closure_10(LegacyText, obj8);
    const obj10 = { style: tmp.description, children: intl2.format(productId(1113).t["7chOVL"], obj11) };
    const LegacyText2 = tmp5(1187).LegacyText;
    intl2 = tmp5(1113).intl;
    obj11 = { discountPercentage: formatPercentResult };
    items2[2] = closure_10(LegacyText2, obj10);
    const obj12 = { style: tmp.upsellButton, children: closure_10(Button, obj13) };
    obj13 = {
      variant: "active",
      text: intl3.formatToPlainString(productId(1113).t.Qvq6GE, obj14),
      onPress() {
          _undefined("upsell");
          importDefault();
        },
      disabled: tmp2 || tmp9[1],
      loading: "upsell" === tmp4 && tmp2
    };
    Button = tmp5(5634).Button;
    intl3 = tmp5(1113).intl;
    obj14 = { price: orderPriceString };
    items2[3] = closure_10(View, obj12);
    const obj15 = { style: tmp.continueButton, children: closure_10(Button2, obj16) };
    obj16 = {
      variant: "secondary",
      text: intl4.string(productId(1113).t.YwEyQM),
      onPress() {
          _undefined("default");
          dependencyMap();
        },
      disabled: tmp2 || tmp9[1],
      loading: "default" === tmp4 && tmp2
    };
    Button2 = tmp5(5634).Button;
    intl4 = tmp5(1113).intl;
    items2[4] = closure_10(View, obj15);
    const obj17 = { style: tmp.cancelButton, children: closure_10(Button3, obj18) };
    obj18 = { variant: "tertiary", text: intl5.string(productId(1113).t.cpT0Cq), onPress: onClose };
    Button3 = tmp5(5634).Button;
    intl5 = tmp5(1113).intl;
    items2[5] = closure_10(View, obj17);
    return closure_10(tmp19, obj5);
  }
};
