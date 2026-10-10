// Module ID: 13823
// Function ID: 13824
// Name: PremiumPlanSelectYearlyUpsellModal
// Dependencies: [32, 19, 17, 2129, 7131, 13810, 1392, 1096, 21, 5092, 5906, 5969, 558, 576, 7125, 504, 1901, 6156, 13824, 1200, 1126, 5379, 5398, 4769, 2]

// Module 13823 (PremiumPlanSelectYearlyUpsellModal)
import react_native from "react-native" /* 17 */;
import Constants from "Constants" /* 1096 */;
import PremiumConstants from "PremiumConstants" /* 1392 */;
import AlertDefault from "Alert" /* 5398 */;
import TextStylesDefault from "TextStyles" /* 5906 */;
import LegacyTokens from "LegacyTokens" /* 5969 */;
import FastImageDefault from "FastImage" /* 6156 */;
import PremiumPlanSelectStore from "PremiumPlanSelectStore" /* 13810 */;
import AssetRegistryDefault from "AssetRegistry" /* 13824 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import LocaleStore from "LocaleStore" /* 2129 */;
import IAPStore from "IAPStore" /* 7131 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5092 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
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
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function PremiumPlanSelectYearlyUpsellModal(continueWithDefault) {
  let closure_4;
  let continueWithUpsell;
  let first;
  let locale;
  let onClose;
  let orderPriceString;
  let productId;
  let tmp10;
  let tmp11;
  let tmp14;
  let tmp = productId;
  const obj = productId(continueWithDefault[13]);
  const cResult = obj.c(43);
  ({ onClose, productId } = continueWithDefault);
  ({ orderPriceString, continueWithUpsell } = continueWithDefault);
  continueWithDefault = continueWithDefault.continueWithDefault;
  const tmp4 = closure_12();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function p(isPurchasing) {
      return isPurchasing.isPurchasing;
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  usePremiumPlanSelectStore(first);
  const tmp8 = _slicedToArray(react.useState(null), 2);
  [r10034, _slicedToArray] = tmp8;
  const tmpResult = tmp(continueWithDefault[14]);
  const premiumBundledItemsFromProductId = tmpResult.getPremiumBundledItemsFromProductId(productId);
  const obj2 = react;
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [LocaleStore];
    class I {
      constructor() {
        return locale.locale;
      }
    }
    cResult[1] = items;
    cResult[2] = I;
    tmp11 = I;
    tmp10 = items;
  } else {
    tmp10 = cResult[1];
    tmp11 = cResult[2];
  }
  const tmpResult3 = tmp(continueWithDefault[15]);
  const stateFromStores = tmpResult3.useStateFromStores(tmp10, tmp11);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [IAPStore];
    class I {
      constructor() {
        return locale.locale;
      }
    }
    cResult[3] = items1;
    tmp14 = items1;
  } else {
    tmp14 = cResult[3];
  }
  if (cResult[4] !== productId) {
    class Y {
      constructor() {
        const items = [IAPStore.getProduct(productId), IAPStore.isBusy()];
        return items;
      }
    }
    cResult[4] = productId;
    class I {
      constructor() {
        return locale.locale;
      }
    }
    cResult[5] = Y;
  } else {
    class Y {
      constructor() {
        const items = [IAPStore.getProduct(productId), IAPStore.isBusy()];
        return items;
      }
    }
  }
  const tmpResult4 = tmp(continueWithDefault[15]);
  const first1 = tmp7(tmpResult4.useStateFromStoresArray(tmp14, tmp16), 2)[0];
  const premiumTier = premiumBundledItemsFromProductId.premiumTier;
  _slicedToArray(tmpResult4.useStateFromStoresArray(tmp14, tmp16), 2);
  if (orderPriceString == null) {
    class Y {
      constructor() {
        const items = [IAPStore.getProduct(productId), IAPStore.isBusy()];
        return items;
      }
    }
    if (first1 != null) {
      class Y {
        constructor() {
          const items = [IAPStore.getProduct(productId), IAPStore.isBusy()];
          return items;
        }
      }
    }
    orderPriceString = tmp19;
  }
  react = tmp20;
  if (cResult[6] === continueWithDefault) {
    class Y {
      constructor() {
        const items = [IAPStore.getProduct(productId), IAPStore.isBusy()];
        return items;
      }
    }
    const effect = obj2.useEffect(K);
    if (null == premiumTier || null == orderPriceString) {
      class Y {
        constructor() {
          const items = [IAPStore.getProduct(productId), IAPStore.isBusy()];
          return items;
        }
      }
    } else {
      class Y {
        constructor() {
          const items = [IAPStore.getProduct(productId), IAPStore.isBusy()];
          return items;
        }
      }
      class I {
        constructor() {
          return locale.locale;
        }
      }
      const container = tmp4.container;
      if (cResult[9] !== tmp4.image) {
        class Y {
          constructor() {
            const items = [IAPStore.getProduct(productId), IAPStore.isBusy()];
            return items;
          }
        }
        const obj3 = { style: null, source: continueWithUpsell(continueWithDefault[18]) };
        class I {
          constructor() {
            return locale.locale;
          }
        }
        const tmp26 = continueWithUpsell(continueWithDefault[17]);
        cResult[9] = tmp4.image;
        cResult[10] = closure_10(tmp26, obj3);
        const tmp27 = closure_10(tmp26, obj3);
      } else {
        class Y {
          constructor() {
            const items = [IAPStore.getProduct(productId), IAPStore.isBusy()];
            return items;
          }
        }
      }
      const LegacyText = tmp(tmp2[19]).LegacyText;
      const description = tmp4.description;
      const intl = tmp(tmp2[20]).intl;
      const obj4 = { discountPercentage: tmp23 };
      const formatResult = intl.format(tmp(continueWithDefault[20]).t["7chOVL"], obj4);
      if (cResult[11] === LegacyText) {
        class Y {
          constructor() {
            const items = [IAPStore.getProduct(productId), IAPStore.isBusy()];
            return items;
          }
        }
      }
      const obj5 = { style: description, children: formatResult };
      cResult[11] = LegacyText;
      cResult[12] = tmp4.description;
      cResult[13] = formatResult;
      cResult[14] = closure_10(LegacyText, obj5);
      const tmp31 = closure_10(LegacyText, obj5);
    }
  }
  class K {
    constructor() {
      const tmp = closure_4;
      if (tmp) {
        continueWithDefault();
      }
    }
  }
  cResult[6] = continueWithDefault;
  cResult[7] = null == premiumTier || null == orderPriceString;
  cResult[8] = K;
}) : (function PremiumPlanSelectYearlyUpsellModal(arg0) {
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
  const obj2 = productId(7125);
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
    const tmp5Result = productId(1901);
    const formatPercentResult = tmp5Result.formatPercent(stateFromStores, closure_9 / 100);
    const obj5 = { onClose, noDefaultButtons: true, children: closure_11(View, obj6) };
    obj6 = { style: tmp.container, children: items2 };
    const obj7 = { style: tmp.image, source: AssetRegistryDefault };
    const tmp19 = AlertDefault;
    const tmp22 = FastImageDefault;
    items2 = [closure_10(tmp22, obj7), , , , , ];
    const obj8 = { style: tmp.header, accessibilityRole: "header", children: format(LQCVfK, obj9) };
    const LegacyText = tmp5(1200).LegacyText;
    const intl = tmp5(1126).intl;
    format = intl.format;
    obj9 = { discountPercentage: formatPercentResult, planName: tmp5Result2.getPremiumTypeDisplayName(premiumTier) };
    LQCVfK = tmp5(1126).t.LQCVfK;
    tmp5Result2 = productId(4769);
    items2[1] = closure_10(LegacyText, obj8);
    const obj10 = { style: tmp.description, children: intl2.format(productId(1126).t["7chOVL"], obj11) };
    const LegacyText2 = tmp5(1200).LegacyText;
    intl2 = tmp5(1126).intl;
    obj11 = { discountPercentage: formatPercentResult };
    items2[2] = closure_10(LegacyText2, obj10);
    const obj12 = { style: tmp.upsellButton, children: closure_10(Button, obj13) };
    obj13 = {
      variant: "active",
      text: intl3.formatToPlainString(productId(1126).t.Qvq6GE, obj14),
      onPress() {
          _undefined("upsell");
          importDefault();
        },
      disabled: tmp2 || tmp9[1],
      loading: "upsell" === tmp4 && tmp2
    };
    Button = tmp5(5379).Button;
    intl3 = tmp5(1126).intl;
    obj14 = { price: orderPriceString };
    items2[3] = closure_10(View, obj12);
    const obj15 = { style: tmp.continueButton, children: closure_10(Button2, obj16) };
    obj16 = {
      variant: "secondary",
      text: intl4.string(productId(1126).t.YwEyQM),
      onPress() {
          _undefined("default");
          dependencyMap();
        },
      disabled: tmp2 || tmp9[1],
      loading: "default" === tmp4 && tmp2
    };
    Button2 = tmp5(5379).Button;
    intl4 = tmp5(1126).intl;
    items2[4] = closure_10(View, obj15);
    const obj17 = { style: tmp.cancelButton, children: closure_10(Button3, obj18) };
    obj18 = { variant: "tertiary", text: intl5.string(productId(1126).t.cpT0Cq), onPress: onClose };
    Button3 = tmp5(5379).Button;
    intl5 = tmp5(1126).intl;
    items2[5] = closure_10(View, obj17);
    return closure_10(tmp19, obj5);
  }
});
const result = size.fileFinishedImporting("modules/premium/native/PremiumPlanSelectYearlyUpsellModal.tsx");

export default tmp5;
