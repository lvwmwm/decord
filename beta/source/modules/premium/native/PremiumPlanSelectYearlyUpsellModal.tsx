// Module ID: 13093
// Function ID: 13094
// Name: PremiumPlanSelectYearlyUpsellModal
// Dependencies: [32, 19, 17, 2112, 6658, 13082, 1374, 1085, 21, 4836, 5836, 5753, 6829, 504, 1882, 5300, 13094, 1177, 1115, 4488, 5281, 2]
// Exports: default

// Module 13093 (PremiumPlanSelectYearlyUpsellModal)
import Constants from "Constants" /* 1085 */;
import PremiumConstants from "PremiumConstants" /* 1374 */;
import AlertDefault from "Alert" /* 5300 */;
import LegacyTokens from "LegacyTokens" /* 5753 */;
import TextStylesDefault from "TextStyles" /* 5836 */;
import PremiumPlanSelectStore from "PremiumPlanSelectStore" /* 13082 */;
import AssetRegistryDefault from "AssetRegistry" /* 13094 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import LocaleStore from "LocaleStore" /* 2112 */;
import IAPStore from "IAPStore" /* 6658 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let closure_12;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let unpackModuleId;
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
({ Image: hasOwnProperty, View: metroRequire } = react_native);
const usePremiumPlanSelectStore = PremiumPlanSelectStore.usePremiumPlanSelectStore;
let closure_10 = PremiumConstants.PREMIUM_YEARLY_DISCOUNT_PERCENT;
const Fonts = Constants.Fonts;
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { marginHorizontal: 26 }, image: { alignSelf: "center", marginVertical: 32 }, header: obj2, description: obj3, upsellButton: { marginBottom: 16 }, continueButton: { marginBottom: 4 }, cancelButton: { marginTop: 8, marginBottom: 4 } };
obj2 = { alignSelf: "center", textAlign: "center", paddingBottom: 8, color: LegacyTokens.DARK_WHITE_500_LIGHT_BLACK_500 };
createStyles = createStyles.createStyles;
const merged = Object.assign(TextStylesDefault(Fonts.DISPLAY_EXTRABOLD, undefined, 24));
obj3 = { alignSelf: "center", textAlign: "center", paddingBottom: 32, color: LegacyTokens.DARK_WHITE_500_LIGHT_BLACK_500 };
let closure_13 = createStyles(obj);
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
  let tmp = closure_13();
  const tmp2 = usePremiumPlanSelectStore((isPurchasing) => isPurchasing.isPurchasing);
  [tmp4, c3] = _slicedToArray(react.useState(null), 2);
  const tmp3 = _slicedToArray(react.useState(null), 2);
  const obj2 = productId(6829);
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
    const tmp5Result = productId(1882);
    const formatPercentResult = tmp5Result.formatPercent(stateFromStores, closure_10 / 100);
    const obj5 = { onClose, noDefaultButtons: true, children: closure_12(closure_6, obj6) };
    obj6 = { style: tmp.container, children: items2 };
    const obj7 = { style: tmp.image, source: AssetRegistryDefault };
    const tmp19 = AlertDefault;
    items2 = [closure_11(closure_5, obj7), , , , , ];
    const obj8 = { style: tmp.header, accessibilityRole: "header", children: format(LQCVfK, obj9) };
    const LegacyText = tmp5(1177).LegacyText;
    const intl = tmp5(1115).intl;
    format = intl.format;
    obj9 = { discountPercentage: formatPercentResult, planName: tmp5Result2.getPremiumTypeDisplayName(premiumTier) };
    LQCVfK = tmp5(1115).t.LQCVfK;
    tmp5Result2 = productId(4488);
    items2[1] = closure_11(LegacyText, obj8);
    const obj10 = { style: tmp.description, children: intl2.format(productId(1115).t["7chOVL"], obj11) };
    const LegacyText2 = tmp5(1177).LegacyText;
    intl2 = tmp5(1115).intl;
    obj11 = { discountPercentage: formatPercentResult };
    items2[2] = closure_11(LegacyText2, obj10);
    const obj12 = { style: tmp.upsellButton, children: closure_11(Button, obj13) };
    obj13 = {
      variant: "active",
      text: intl3.formatToPlainString(productId(1115).t.Qvq6GE, obj14),
      onPress() {
          _undefined("upsell");
          importDefault();
        },
      disabled: tmp2 || tmp9[1],
      loading: "upsell" === tmp4 && tmp2
    };
    Button = tmp5(5281).Button;
    intl3 = tmp5(1115).intl;
    obj14 = { price: orderPriceString };
    items2[3] = closure_11(closure_6, obj12);
    const obj15 = { style: tmp.continueButton, children: closure_11(Button2, obj16) };
    obj16 = {
      variant: "secondary",
      text: intl4.string(productId(1115).t.YwEyQM),
      onPress() {
          _undefined("default");
          dependencyMap();
        },
      disabled: tmp2 || tmp9[1],
      loading: "default" === tmp4 && tmp2
    };
    Button2 = tmp5(5281).Button;
    intl4 = tmp5(1115).intl;
    items2[4] = closure_11(closure_6, obj15);
    const obj17 = { style: tmp.cancelButton, children: closure_11(Button3, obj18) };
    obj18 = { variant: "tertiary", text: intl5.string(productId(1115).t.cpT0Cq), onPress: onClose };
    Button3 = tmp5(5281).Button;
    intl5 = tmp5(1115).intl;
    items2[5] = closure_11(closure_6, obj17);
    return closure_11(tmp19, obj5);
  }
};
