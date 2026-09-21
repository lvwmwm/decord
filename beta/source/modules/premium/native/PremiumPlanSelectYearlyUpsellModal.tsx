// Module ID: 13819
// Function ID: 13820
// Name: PremiumPlanSelectYearlyUpsellModal
// Dependencies: [32, 19, 17, 2113, 7484, 13810, 1378, 1089, 21, 4758, 5743, 5660, 558, 568, 7653, 504, 1885, 13820, 1181, 1119, 5188, 5207, 4418, 2]

// Module 13819 (PremiumPlanSelectYearlyUpsellModal)
import common_AlertDefault from "common/Alert" /* 5207 */;
import TextStylesDefault from "TextStyles" /* 5743 */;
import _modDef13820 from "module_13820" /* 13820 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import LocaleStore from "LocaleStore" /* 2113 */;
import IAPStore from "IAPStore" /* 7484 */;

const require = fn;
get_ActivityIndicator = fn(17);
({ Image: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const usePremiumPlanSelectStore = fn(13810).usePremiumPlanSelectStore;
let closure_10 = fn(1378).PREMIUM_YEARLY_DISCOUNT_PERCENT;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const createStyles = fn(4758);
let obj2 = { container: { marginHorizontal: 26 }, image: { alignSelf: "center", marginVertical: 32 }, header: null, description: null, upsellButton: null, continueButton: null, cancelButton: null };
let obj3 = {};
const merged = Object.assign(TextStylesDefault(fn(1089).Fonts.DISPLAY_EXTRABOLD, undefined, 24));
obj3.alignSelf = "center";
obj3.textAlign = "center";
obj3.paddingBottom = 8;
obj3.color = fn(5660).DARK_WHITE_500_LIGHT_BLACK_500;
obj2.header = obj3;
obj2.description = { alignSelf: "center", textAlign: "center", paddingBottom: 32, color: fn(5660).DARK_WHITE_500_LIGHT_BLACK_500 };
obj2.upsellButton = { marginBottom: 16 };
obj2.continueButton = { marginBottom: 4 };
obj2.cancelButton = { marginTop: 8, marginBottom: 4 };
let closure_13 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj4 = { alignSelf: "center", textAlign: "center", paddingBottom: 32, color: fn(5660).DARK_WHITE_500_LIGHT_BLACK_500 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/native/PremiumPlanSelectYearlyUpsellModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((continueWithDefault) => {
  const cResult = productId(continueWithDefault[13]).c(43);
  ({ onClose, productId } = continueWithDefault);
  ({ orderPriceString, continueWithUpsell } = continueWithDefault);
  continueWithDefault = continueWithDefault.continueWithDefault;
  const tmp4 = closure_13();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function f(isPurchasing) {
      return isPurchasing.isPurchasing;
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  const obj = productId(continueWithDefault[13]);
  const obj2 = noop;
  const tmp6 = usePremiumPlanSelectStore(first);
  [r10034, _slicedToArray] = noop.useState(null);
  const tmp8 = _slicedToArray(noop.useState(null), 2);
  const premiumBundledItemsFromProductId = productId(continueWithDefault[14]).getPremiumBundledItemsFromProductId(productId);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [LocaleStore];
    const fn2 = function b() {
      return locale.locale;
    };
    cResult[1] = items;
    cResult[2] = fn2;
    let tmp11 = fn2;
    let tmp10 = items;
  } else {
    tmp10 = cResult[1];
    tmp11 = cResult[2];
  }
  const tmpResult = productId(continueWithDefault[14]);
  const stateFromStores = productId(continueWithDefault[15]).useStateFromStores(tmp10, tmp11);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [IAPStore];
    cResult[3] = items1;
  }
  if (cResult[4] !== productId) {
    class N {
      constructor() {
        items = [, ];
        items[0] = closure_8.getProduct(productId);
        items[1] = closure_8.isBusy();
        return items;
      }
    }
    cResult[4] = productId;
    cResult[5] = N;
  } else {
    class N {
      constructor() {
        items = [, ];
        items[0] = closure_8.getProduct(productId);
        items[1] = closure_8.isBusy();
        return items;
      }
    }
  }
  const tmpResult3 = productId(continueWithDefault[15]);
  const tmpResult4 = productId(continueWithDefault[15]);
  if (!tmp6) {
    class N {
      constructor() {
        items = [, ];
        items[0] = closure_8.getProduct(productId);
        items[1] = closure_8.isBusy();
        return items;
      }
    }
  }
  if (orderPriceString == null) {
    class N {
      constructor() {
        items = [, ];
        items[0] = closure_8.getProduct(productId);
        items[1] = closure_8.isBusy();
        return items;
      }
    }
    if (tmp7Result[0] != null) {
      class N {
        constructor() {
          items = [, ];
          items[0] = closure_8.getProduct(productId);
          items[1] = closure_8.isBusy();
          return items;
        }
      }
    }
    orderPriceString = tmp18;
  }
  noop = tmp19;
  if (cResult[6] === continueWithDefault) {
    class N {
      constructor() {
        items = [, ];
        items[0] = closure_8.getProduct(productId);
        items[1] = closure_8.isBusy();
        return items;
      }
    }
    const effect = obj2.useEffect(V);
    if (tmp19) {
      class N {
        constructor() {
          items = [, ];
          items[0] = closure_8.getProduct(productId);
          items[1] = closure_8.isBusy();
          return items;
        }
      }
    } else {
      class N {
        constructor() {
          items = [, ];
          items[0] = closure_8.getProduct(productId);
          items[1] = closure_8.isBusy();
          return items;
        }
      }
      const container = tmp4.container;
      if (cResult[9] !== tmp4.image) {
        class N {
          constructor() {
            items = [, ];
            items[0] = closure_8.getProduct(productId);
            items[1] = closure_8.isBusy();
            return items;
          }
        }
        const obj3 = { style: tmp4.image, source: continueWithUpsell(tmp2[17]) };
        const tmp26 = closure_11(closure_5, obj3);
        cResult[9] = tmp4.image;
        cResult[10] = tmp26;
      } else {
        class N {
          constructor() {
            items = [, ];
            items[0] = closure_8.getProduct(productId);
            items[1] = closure_8.isBusy();
            return items;
          }
        }
      }
      const LegacyText = tmp(tmp2[18]).LegacyText;
      const intl = tmp(tmp2[19]).intl;
      const obj4 = { discountPercentage: obj6.formatPercent(stateFromStores, closure_10 / 100) };
      const formatResult = intl.format(tmp(tmp2[19]).t["7chOVL"], obj4);
      if (cResult[11] === LegacyText) {
        class N {
          constructor() {
            items = [, ];
            items[0] = closure_8.getProduct(productId);
            items[1] = closure_8.isBusy();
            return items;
          }
        }
      }
      const obj5 = { style: tmp4.description, children: formatResult };
      const tmp30 = closure_11(LegacyText, obj5);
      cResult[11] = LegacyText;
      cResult[12] = tmp4.description;
      cResult[13] = formatResult;
      cResult[14] = tmp30;
      const formatPercentResult = obj6.formatPercent(stateFromStores, closure_10 / 100);
    }
  }
  class V {
    constructor() {
      if (closure_4) {
        tmp = continueWithDefault;
        tmp2 = continueWithDefault();
      }
      return;
    }
  }
  cResult[6] = continueWithDefault;
  cResult[7] = null == premiumBundledItemsFromProductId.premiumTier || null == orderPriceString;
  cResult[8] = V;
}) : ((arg0) => {
  ({ onClose, productId } = arg0);
  ({ orderPriceString, continueWithUpsell: importDefault, continueWithDefault: dependencyMap } = arg0);
  _slicedToArray = undefined;
  noop = undefined;
  const tmp = closure_13();
  const tmp2 = usePremiumPlanSelectStore((isPurchasing) => isPurchasing.isPurchasing);
  [tmp4, c3] = noop.useState(null);
  const obj = noop;
  const tmp3 = _slicedToArray(noop.useState(null), 2);
  const premiumBundledItemsFromProductId = productId(7653).getPremiumBundledItemsFromProductId(productId);
  const obj2 = productId(7653);
  let items = [LocaleStore];
  const stateFromStores = productId(504).useStateFromStores(items, () => locale.locale);
  const obj3 = productId(504);
  const items1 = [IAPStore];
  const tmp9 = _slicedToArray(productId(504).useStateFromStoresArray(items1, () => {
    const items = [IAPStore.getProduct(productId), IAPStore.isBusy()];
    return items;
  }), 2);
  const first = tmp9[0];
  let tmp11 = tmp2;
  if (!tmp2) {
    tmp11 = tmp9[1];
  }
  const premiumTier = premiumBundledItemsFromProductId.premiumTier;
  if (orderPriceString == null) {
    let priceString;
    if (first != null) {
      priceString = first.priceString;
    }
    orderPriceString = priceString;
  }
  noop = tmp13;
  const effect = obj.useEffect(() => {
    if (closure_4) {
      dependencyMap();
    }
  });
  if (null == premiumTier || null == orderPriceString) {
    return null;
  } else {
    const formatPercentResult = tmp5(1885).formatPercent(stateFromStores, closure_10 / 100);
    const obj5 = { onClose, noDefaultButtons: true, children: null };
    const obj6 = { style: tmp.container, children: null };
    const obj7 = { style: tmp.image, source: null };
    const tmp5Result = tmp5(1885);
    obj7.source = _modDef13820;
    const items2 = [closure_11(closure_5, obj7), , , , , ];
    const obj8 = { style: tmp.header, accessibilityRole: "header", children: null };
    const intl = tmp5(1119).intl;
    const obj9 = { discountPercentage: formatPercentResult, planName: null };
    const tmp19 = common_AlertDefault;
    const tmp20 = closure_12;
    obj9.planName = tmp5(4418).getPremiumTypeDisplayName(premiumTier);
    obj8.children = intl.format(tmp5(1119).t.LQCVfK, obj9);
    items2[1] = closure_11(tmp5(1181).LegacyText, obj8);
    const obj10 = { style: tmp.description, children: null };
    const intl2 = tmp5(1119).intl;
    const obj11 = { discountPercentage: formatPercentResult };
    obj10.children = intl2.format(tmp5(1119).t["7chOVL"], obj11);
    items2[2] = closure_11(tmp5(1181).LegacyText, obj10);
    const obj12 = { style: tmp.upsellButton, children: null };
    const obj13 = { variant: "active", text: null, onPress: null, disabled: null, loading: null };
    const intl3 = tmp5(1119).intl;
    const obj14 = { price: orderPriceString };
    obj13.text = intl3.formatToPlainString(tmp5(1119).t.Qvq6GE, obj14);
    obj13.onPress = function onPress() {
      _undefined("upsell");
      importDefault();
    };
    obj13.disabled = tmp11;
    obj13.loading = "upsell" === tmp4 && tmp2;
    obj12.children = closure_11(tmp5(5188).Button, obj13);
    items2[3] = closure_11(closure_6, obj12);
    const obj15 = { style: tmp.continueButton, children: null };
    const obj16 = { variant: "secondary", text: null, onPress: null, disabled: null, loading: null };
    const intl4 = tmp5(1119).intl;
    obj16.text = intl4.string(tmp5(1119).t.YwEyQM);
    obj16.onPress = function onPress() {
      _undefined("default");
      dependencyMap();
    };
    obj16.disabled = tmp11;
    obj16.loading = "default" === tmp4 && tmp2;
    obj15.children = closure_11(tmp5(5188).Button, obj16);
    items2[4] = closure_11(closure_6, obj15);
    const obj17 = { style: tmp.cancelButton, children: null };
    const obj18 = { variant: "tertiary", text: null, onPress: null };
    const intl5 = tmp5(1119).intl;
    obj18.text = intl5.string(tmp5(1119).t.cpT0Cq);
    obj18.onPress = onClose;
    obj17.children = closure_11(tmp5(5188).Button, obj18);
    items2[5] = closure_11(closure_6, obj17);
    obj6.children = items2;
    obj5.children = tmp20(closure_6, obj6);
    return closure_11(tmp19, obj5);
  }
  const obj4 = productId(504);
});
