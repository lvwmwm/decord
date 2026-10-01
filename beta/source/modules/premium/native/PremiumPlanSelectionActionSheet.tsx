// Module ID: 6843
// Function ID: 6844
// Name: PremiumPlanSelectionActionSheet
// Dependencies: [109, 5, 32, 19, 17, 6844, 2112, 6658, 6841, 1374, 1074, 1181, 4815, 1085, 21, 4836, 576, 4488, 4832, 1115, 38, 6851, 1882, 504, 12877, 6655, 5281, 5266, 5275, 10167, 6837, 4767, 6867, 7504, 8682, 7615, 6583, 6603, 5910, 10126, 6826, 5298, 10270, 1241, 4800, 6825, 1610, 5204, 10168, 5174, 6829, 4685, 10186, 10187, 10188, 10189, 10190, 10191, 1364, 2111, 6571, 10979, 6575, 5899, 8062, 12878, 1177, 8666, 10171, 10269, 2]
// Exports: default, getItemsByPremiumTypePredicate

// Module 6843 (PremiumPlanSelectionActionSheet)
import _modDef38 from "module_38" /* 38 */;
import nativeDefault from "native" /* 576 */;
import intl9 from "intl" /* 1115 */;
import FormConstants from "FormConstants" /* 1181 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2111 */;
import PremiumUtilsDefault from "PremiumUtils" /* 4488 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import Text_Text from "Text/Text" /* 4832 */;
import react_native from "react-native" /* 5275 */;
import components_Button_Button from "components/Button/Button" /* 5281 */;
import NativeCheckoutStore from "NativeCheckoutStore" /* 6844 */;
import PremiumPlanActionSheetHeaderDefault from "PremiumPlanActionSheetHeader" /* 6851 */;
import ACOMExperiments from "ACOMExperiments" /* 8666 */;
import NativeCheckoutStoreProviderDefault from "NativeCheckoutStoreProvider" /* 10269 */;
import PaymentFlowStartedTriggerPoint from "PaymentFlowStartedTriggerPoint" /* 10270 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native2 from "react-native" /* 17 */;
import LocaleStore from "LocaleStore" /* 2112 */;
import IAPStore from "IAPStore" /* 6658 */;
import PremiumPlanPurchasedStore from "PremiumPlanPurchasedStore" /* 6841 */;
import PremiumConstants from "PremiumConstants" /* 1374 */;
import Constants_mod from "Constants" /* 1074 */;
import PaymentConstants from "PaymentConstants" /* 4815 */;
import Constants_mod2 from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let BottomSheet, TIER_2, application_id, constants3, dependencyMap, set;

let c9;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_19;
let closure_20;
let closure_21;
let closure_22;
let closure_23;
let closure_24;
let closure_25;
let closure_26;
let closure_27;
let closure_28;
let closure_29;
let closure_31;
let closure_32;
let closure_33;
let closure_34;
let closure_35;
let closure_36;
let closure_37;
let map1;
let metroImportAll;
let obj2;
let obj3;
let size;
let tmp;
const PremiumUtils = tmp(4488);
const MobileWebRedirectCheckoutUtils = tmp(6826);
const PremiumBundledPlansUtils = tmp(6829);
const usePremiumTrialOffer = tmp(6867);
const useIsEligibleForBogoOffer = tmp(10171);
function Header(arg0) {
  let discountOffer;
  let intl;
  let isPaymentSuccess;
  let orderRecord;
  let orderRequired;
  let premiumType;
  let selectedPremiumType;
  let trialOffer;
  const f83174 = (orderRequired) => ({ orderRequired: orderRequired.orderRequired, orderRecord: orderRequired.orderRecord });
  ({ premiumType, isPaymentSuccess, trialOffer } = arg0);
  ({ selectedPremiumType, discountOffer } = arg0);
  const tmp = closure_38();
  ({ orderRequired, orderRecord } = useNativeCheckoutStore(f83174));
  useNativeCheckoutStore(f83174);
  if (null == premiumType) {
    if (!isPaymentSuccess) {
      const obj = { style: tmp.headerText, variant: "text-md/semibold", color: "text-default", accessibilityRole: "header", children: intl.string(intl9.t.vLz3Zs) };
      const Text = Text_Text.Text;
      intl = intl9.intl;
      return __initData5(Text, obj);
    }
  }
  if (isPaymentSuccess) {
    premiumType = selectedPremiumType;
  }
  _modDef38(null != premiumType, "If isPaymentSuccess is true, a value must be given for selectedPremiumType. Or premiumType must be given.");
  let tmp9 = null != trialOffer && null != premiumType;
  if (tmp9) {
    const subscriptionTrial = trialOffer.subscriptionTrial;
    let skuId;
    if (subscriptionTrial != null) {
      skuId = subscriptionTrial.skuId;
    }
    const tmp6Result = PremiumUtilsDefault;
    tmp9 = skuId === tmp6Result.getSkuIdForPremiumType(premiumType);
  }
  let tmp11 = tmp9;
  if (tmp11) {
    let tmp12 = !orderRequired;
    if (orderRequired) {
      let subscriptionTrialId;
      const trialId = trialOffer.trialId;
      if (orderRecord != null) {
        const subscriptionFacet = orderRecord.subscriptionFacet;
        if (subscriptionFacet != null) {
          const subscriptionPreview = subscriptionFacet.subscriptionPreview;
          if (subscriptionPreview != null) {
            subscriptionTrialId = subscriptionPreview.subscriptionTrialId;
          }
        }
      }
      tmp12 = trialId === subscriptionTrialId;
    }
    tmp11 = tmp12;
  }
  let trialOffer2 = null;
  if (tmp11) {
    trialOffer2 = trialOffer;
  }
  return __initData5(PremiumPlanActionSheetHeaderDefault, { premiumType, trialOffer: trialOffer2, discountOffer });
}
function PlanOptionBadgeComponent(backgroundColorType) {
  let Text;
  let obj2;
  let str2;
  let str = backgroundColorType.backgroundColorType;
  const text = backgroundColorType.text;
  if (str === undefined) {
    str = "green";
  }
  const tmp = closure_38();
  const items = [tmp.planOptionDiscount, ];
  let prop = null;
  const tmp3 = metroImportAll;
  if ("white" === str) {
    prop = tmp.planOptionDiscountWhite;
  }
  items[1] = prop;
  const obj = { style: items, children: __initData5(Text, obj2) };
  obj2 = { style: tmp.planOptionDiscountText, variant: "text-xs/bold", color: str2, children: text };
  str2 = "text-overlay-light";
  Text = Text_Text.Text;
  if ("white" === str) {
    str2 = "text-overlay-dark";
  }
  return __initData5(tmp3, obj);
}
function PlanOption(premiumItem) {
  let IAybsG;
  let USD;
  let closure_2;
  let combined;
  let customBadgeComponent;
  let discountOffer;
  let discountedPriceString;
  let first;
  let format;
  let formatToPlainString3Result;
  let formatToPlainString4;
  let formatToPlainString5;
  let formatToPlainStringResult;
  let intl3;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let num2;
  let num3;
  let obj15;
  let obj22;
  let obj24;
  let optionNeedsProductNameLabel;
  let orderRecord;
  let orderRequired;
  let planOptionPriceContainer;
  let priceString;
  let prop;
  let selectedProductId;
  let str3;
  let str5;
  let str8;
  let tmp4Result6;
  let tmp4Result8;
  let trialOffer;
  let userIsEligibleForBogoPromotion;
  let v02Gmgm;
  const f83176 = (orderRequired) => ({ orderRequired: orderRequired.orderRequired, orderRecord: orderRequired.orderRecord });
  premiumItem = premiumItem.premiumItem;
  ({ customBadgeComponent, trialOffer, discountOffer, userIsEligibleForBogoPromotion } = premiumItem);
  ({ selectedProductId, optionNeedsProductNameLabel, discountedPriceString } = premiumItem);
  if (userIsEligibleForBogoPromotion === undefined) {
    userIsEligibleForBogoPromotion = false;
  }
  first = undefined;
  dependencyMap = undefined;
  const selectedPremiumType = premiumItem.selectedPremiumType;
  const tmp = closure_38();
  const locale = LocaleStore.locale;
  [first, dependencyMap] = react.useState(0);
  const items = [IAPStore];
  const obj = premiumItem(504);
  const stateFromStores = obj.useStateFromStores(items, () => IAPStore.getProduct(premiumItem.productId));
  const obj2 = premiumItem(12877);
  let checkoutPlanPriceString = obj2.useCheckoutPlanPriceString(premiumItem.productId, stateFromStores);
  const obj3 = { discountedPriceString, regularPriceString: priceString };
  priceString = undefined;
  const useCheckoutPlanDiscountPrices = premiumItem(12877).useCheckoutPlanDiscountPrices;
  const productId = premiumItem.productId;
  premiumItem(12877);
  if (stateFromStores != null) {
    priceString = stateFromStores.priceString;
  }
  const checkoutPlanDiscountPrices = useCheckoutPlanDiscountPrices(productId, obj3);
  ({ orderRequired, orderRecord } = useNativeCheckoutStore(f83176));
  const premiumTier = premiumItem.premiumTier;
  let tmp12 = null != trialOffer && null != premiumTier;
  useNativeCheckoutStore(f83176);
  if (tmp12) {
    const subscriptionTrial = trialOffer.subscriptionTrial;
    let skuId;
    if (subscriptionTrial != null) {
      skuId = subscriptionTrial.skuId;
    }
    const obj4 = first(4488);
    tmp12 = skuId === obj4.getSkuIdForPremiumType(premiumTier);
  }
  let tmp15 = tmp12;
  if (tmp15) {
    let tmp16 = !orderRequired;
    if (orderRequired) {
      let subscriptionTrialId;
      const trialId = trialOffer.trialId;
      if (orderRecord != null) {
        const subscriptionFacet = orderRecord.subscriptionFacet;
        if (subscriptionFacet != null) {
          const subscriptionPreview = subscriptionFacet.subscriptionPreview;
          if (subscriptionPreview != null) {
            subscriptionTrialId = subscriptionPreview.subscriptionTrialId;
          }
        }
      }
      tmp16 = trialId === subscriptionTrialId;
    }
    tmp15 = tmp16;
  }
  const tmp4Result = premiumItem(4488);
  const tierDisplayNameByPlanId = tmp4Result.getTierDisplayNameByPlanId(premiumItem.basePlanId);
  const obj6 = first(4488);
  const intervalString = obj6.getIntervalString(premiumItem.interval, false);
  let tmp21 = tmp15;
  const basePlanId = premiumItem.basePlanId;
  const PREMIUM_YEAR_TIER_2 = closure_21.PREMIUM_YEAR_TIER_2;
  const tmp20 = closure_21;
  if (!tmp15) {
    tmp21 = null != discountOffer;
  }
  if (!tmp21) {
    tmp21 = userIsEligibleForBogoPromotion && basePlanId === PREMIUM_YEAR_TIER_2;
  }
  let tmp23 = null;
  if (!tmp21) {
    tmp23 = closure_17[premiumItem.basePlanId];
  }
  if (userIsEligibleForBogoPromotion) {
    userIsEligibleForBogoPromotion = premiumItem.basePlanId === tmp20.PREMIUM_MONTH_TIER_2;
  }
  const productId2 = premiumItem.productId;
  if (null == stateFromStores) {
    USD = constants6.USD;
  } else {
    const str = stateFromStores.currencyCode;
    if (str.toLowerCase() in constants6) {
      const str2 = stateFromStores.currencyCode;
      USD = str2.toLowerCase();
    } else {
      USD = tmp25.USD;
    }
  }
  let formatRateResult = null;
  if (null != checkoutPlanDiscountPrices) {
    const tmp4Result5 = premiumItem(6655);
    formatRateResult = tmp4Result5.formatRate(checkoutPlanDiscountPrices.discountedPrice, tmp27.interval, tmp27.intervalCount);
  }
  if (tmp15) {
    const intl = tmp4(1115).intl;
    const formatToPlainString = intl.formatToPlainString;
    const obj5 = { price: tmp4Result6.formatPrice(0, USD, { minimumFractionDigits: 0, maximumFractionDigits: 0 }) };
    const hXcaLT = tmp4(1115).t.hXcaLT;
    tmp4Result6 = premiumItem(6655);
    formatToPlainStringResult = formatToPlainString(hXcaLT, obj5);
  } else {
    formatToPlainStringResult = undefined;
    if (checkoutPlanDiscountPrices != null) {
      formatToPlainStringResult = checkoutPlanDiscountPrices.discountedPrice;
    }
    if (formatToPlainStringResult == null) {
      formatToPlainStringResult = checkoutPlanPriceString;
    }
    if (formatToPlainStringResult == null) {
      formatToPlainStringResult = closure_18;
    }
  }
  let regularPrice;
  const formatRate = premiumItem(6655).formatRate;
  premiumItem(6655);
  if (checkoutPlanDiscountPrices != null) {
    regularPrice = checkoutPlanDiscountPrices.regularPrice;
  }
  if (regularPrice == null) {
    regularPrice = checkoutPlanPriceString;
  }
  if (regularPrice == null) {
    regularPrice = closure_18;
  }
  const formatRateResult1 = formatRate(regularPrice, closure_22[premiumItem.basePlanId].interval, closure_22[premiumItem.basePlanId].intervalCount);
  if (first > 0) {
    const items1 = [tmp.planOptionPriceContainer, ];
    const obj7 = { transform: items2 };
    items2 = [{ translateY: first / 2 }];
    const obj8 = { translateY: first / 2 };
    items1[1] = obj7;
    planOptionPriceContainer = items1;
  } else {
    planOptionPriceContainer = tmp.planOptionPriceContainer;
  }
  const obj9 = { style: tmp.planOptionContainer, children: items3 };
  const Text = tmp4(4832).Text;
  if (null != discountOffer) {
    str3 = "text-lg/medium";
  } else {
    str3 = "text-md/medium";
  }
  let str4 = "interactive-text-default";
  const obj10 = { variant: str3, color: str5, children: combined };
  str5 = "interactive-text-default";
  if (productId2 === selectedProductId) {
    str5 = "interactive-text-active";
  }
  combined = intervalString;
  if (optionNeedsProductNameLabel) {
    const _HermesInternal = HermesInternal;
    combined = "" + tierDisplayNameByPlanId + " " + intervalString;
  }
  items3 = [closure_35(Text, obj10), ];
  const obj11 = { style: planOptionPriceContainer, children: items5 };
  const obj12 = { style: tmp.planOptionDiscountContainer, children: items4 };
  if (null == customBadgeComponent) {
    let tmp42 = null;
    if (!tmp21) {
      let tmp35Result;
      if (userIsEligibleForBogoPromotion) {
        const obj13 = { text: intl3.string(premiumItem(1115).t.iQTfWx) };
        intl3 = tmp4(1115).intl;
        tmp35Result = tmp35(PlanOptionBadgeComponent, obj13);
      } else {
        tmp35Result = null;
        if (null != tmp23) {
          const obj14 = { text: format(IAybsG, obj15) };
          const intl2 = tmp4(1115).intl;
          format = intl2.format;
          obj15 = { discount: tmp4Result8.formatPercent(locale, tmp23 / 100) };
          IAybsG = tmp4(1115).t.IAybsG;
          tmp4Result8 = premiumItem(1882);
          tmp35Result = tmp35(PlanOptionBadgeComponent, obj14);
        }
      }
      tmp42 = tmp35Result;
    }
    customBadgeComponent = tmp42;
  }
  items4 = [customBadgeComponent, ];
  const obj16 = { style: tmp.priceText, variant: "text-lg/medium", color: str8, children: formatToPlainStringResult };
  str8 = str4;
  const Text2 = tmp4(4832).Text;
  if (productId2 === selectedProductId) {
    str8 = "interactive-text-active";
  }
  items4[1] = closure_35(Text2, obj16);
  items5 = [closure_36(closure_8, obj12), , ];
  let tmp35Result4 = null;
  if (tmp15) {
    let str9 = str4;
    const Text3 = tmp4(4832).Text;
    if (productId2 === selectedProductId) {
      str9 = "text-default";
    }
    const obj17 = { variant: "text-xs/medium", color: str9, children: formatToPlainString3Result };
    if (premiumItem.interval === constants.YEAR) {
      const intl5 = tmp4(1115).intl;
      const formatToPlainString3 = intl5.formatToPlainString;
      const ECT4A5 = tmp4(1115).t.ECT4A5;
      if (checkoutPlanPriceString == null) {
        checkoutPlanPriceString = closure_18;
      }
      const obj18 = { price: checkoutPlanPriceString };
      formatToPlainString3Result = formatToPlainString3(ECT4A5, obj18);
    } else {
      const intl4 = tmp4(1115).intl;
      const formatToPlainString2 = intl4.formatToPlainString;
      let tmp45 = checkoutPlanPriceString;
      const v9QeON = tmp4(1115).t.v9QeON;
      if (checkoutPlanPriceString == null) {
        tmp45 = closure_18;
      }
      const obj19 = { price: tmp45 };
      formatToPlainString3Result = formatToPlainString2(v9QeON, obj19);
    }
    tmp35Result4 = tmp35(Text3, obj17);
  }
  items5[1] = tmp35Result4;
  let tmp35Result5 = null;
  const obj20 = {
    style: tmp.discountSubTextContainer,
    onLayout(nativeEvent) {
      const height = nativeEvent.nativeEvent.layout.height;
      if (height !== first) {
        closure_2(height);
      }
    },
    children: items6
  };
  if (null != formatRateResult) {
    tmp35Result5 = null;
    if (null != discountOffer) {
      tmp35Result5 = null;
      if (null == selectedPremiumType) {
        let str10 = str4;
        const Text4 = tmp4(4832).Text;
        if (productId2 === selectedProductId) {
          str10 = "text-default";
        }
        const obj21 = { variant: "text-sm/medium", color: str10, children: formatToPlainString4(v02Gmgm, obj22) };
        const intl6 = tmp4(1115).intl;
        formatToPlainString4 = intl6.formatToPlainString;
        const discount = discountOffer.discount;
        obj22 = { discountedPrice: formatRateResult, numMonths: num2 };
        num2 = undefined;
        v02Gmgm = tmp4(1115).t["02Gmgm"];
        if (discount != null) {
          num2 = discount.intervalCount;
        }
        if (num2 == null) {
          num2 = 1;
        }
        tmp35Result5 = tmp35(Text4, obj21);
      }
    }
  }
  items6 = [tmp35Result5, ];
  let tmp35Result6 = null != checkoutPlanDiscountPrices && null != discountOffer;
  if (tmp35Result6) {
    const Text5 = tmp4(4832).Text;
    if (productId2 === selectedProductId) {
      str4 = "text-default";
    }
    const obj23 = { variant: "text-sm/medium", color: str4, children: formatToPlainString5(prop, obj24) };
    const intl7 = tmp4(1115).intl;
    formatToPlainString5 = intl7.formatToPlainString;
    const discount2 = discountOffer.discount;
    obj24 = { regularPrice: formatRateResult1, numMonths: num3 };
    num3 = undefined;
    prop = tmp4(1115).t["vZk+c/"];
    if (discount2 != null) {
      num3 = discount2.intervalCount;
    }
    if (num3 == null) {
      num3 = 1;
    }
    tmp35Result6 = tmp35(Text5, obj23);
  }
  items6[1] = tmp35Result6;
  items5[2] = closure_36(closure_8, obj20);
  items3[1] = closure_36(closure_8, obj11);
  return closure_36(closure_8, obj9);
}
function PremiumPlanSelectionActionSheetCTA(isPaymentSuccess) {
  let closure_129_0;
  let intl;
  let shouldUseMobileWebRedirectCheckout;
  ({ onStartPayment: closure_129_0, shouldUseMobileWebRedirectCheckout } = isPaymentSuccess);
  if (isPaymentSuccess.isPaymentSuccess) {
    const obj2 = { text: intl.string(intl9.t.WAI6xu), size: "md", grow: true, onPress: tmp };
    const Button2 = components_Button_Button.Button;
    intl = intl9.intl;
    return __initData5(Button2, obj2);
  } else {
    let obj = {
      text: tmp2,
      grow: true,
      onPress() {
          const obj = { shouldRedirectToMobileWeb: shouldUseMobileWebRedirectCheckout };
          return closure_1_0(obj);
        },
      loading: tmp4,
      disabled: tmp3
    };
    const tmp5 = shouldUseMobileWebRedirectCheckout ? { size: "lg", variant: "primary" } : { size: "md", variant: "active" };
    const Button = components_Button_Button.Button;
    const merged = Object.assign(tmp5);
    return __initData5(Button, obj);
  }
}
function PremiumPlanSelectionActionSheet(premiumItems) {
  let RadioGroup;
  let _undefined;
  let analyticsLocation;
  let analyticsLocations;
  let c14;
  let c27;
  let closure_20;
  let closure_6;
  let closure_7;
  let discountedPlan;
  let discountedPriceString;
  let discountedProduct;
  let first;
  let formatToPlainString;
  let initialSelectedItem;
  let intl;
  let intl2;
  let intl5;
  let isPatchOrderLoading;
  let items10;
  let items12;
  let items13;
  let items14;
  let items15;
  let items16;
  let items17;
  let items19;
  let obj17;
  let obj27;
  let obj29;
  let obj8;
  let orderRequired;
  let planOptionsBusy;
  let premiumTier;
  let premiumType;
  let priceString;
  let stringResult;
  let tmp15Result9;
  let tmp49Result;
  let tmp53;
  let tmp5Result23;
  let tmp5Result24;
  let tmp83;
  let userIsEligibleForBogoPromotion;
  let v9hnZoK;
  const f83178 = (premiumTier) => premiumTier.premiumTier;
  const f83189 = (patchOrderLineItems) => ({ patchOrderLineItems: patchOrderLineItems.patchOrderLineItems, isPatchOrderLoading: patchOrderLineItems.isPatchOrderLoading, orderRequired: patchOrderLineItems.orderRequired });
  ({ applicationId: require, analyticsLocation, premiumType } = premiumItems);
  premiumItems = premiumItems.premiumItems;
  const onPaymentStart = premiumItems.onPaymentStart;
  const onPaymentSuccess = premiumItems.onPaymentSuccess;
  const onPaymentDismiss = premiumItems.onPaymentDismiss;
  let flag = premiumItems.showFormTitle;
  ({ analyticsLocations, userIsEligibleForBogoPromotion, initialSelectedItem } = premiumItems);
  if (flag === undefined) {
    flag = true;
  }
  let handlePremiumPurchase;
  c14 = undefined;
  orderRequired = undefined;
  isPatchOrderLoading = undefined;
  let closure_17;
  discountedPriceString = undefined;
  first = undefined;
  closure_20 = undefined;
  let closure_21;
  let analyticsLocations2;
  let closure_23;
  let memo;
  let basePurchaseFlowAnalyticsFields;
  let basePlanId;
  constants3 = undefined;
  let onDismiss;
  let callback1;
  let memo1;
  let obj = function _onPlanSelectionChange() {
    obj = _asyncToGenerator(async (arg0, value) => {
      let closure_0 = arg0;
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        let c4;
        try {
          let found;
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              let closure_2 = tmp;
              let closure_1 = tmp4;
              found = undefined;
              if (!ref.current) {
                const tmp11 = isPatchOrderLoading;
                if (!tmp11) {
                  found = premiumItems.find((productId) => productId.productId === closure_0);
                  if (null != found) {
                    if (found !== first) {
                      const obj5 = closure_0(closure_2[50]);
                      const subscriptionItemsForProduct = obj5.getSubscriptionItemsForProduct(tmp31);
                      ref.current = true;
                      c4 = 1;
                      const tmp37 = orderRequired;
                      if (tmp37) {
                        c5 = 2;
                        c6 = 1;
                        const obj4 = {
                          value: _undefined(subscriptionItemsForProduct.map((planId) => {
                                              let castPremiumSubscriptionAsSkuId;
                                              let obj2;
                                              obj = { sku_id: castPremiumSubscriptionAsSkuId(obj2.getSkuIdForPlan(planId.planId)), subscription_plan_id: null, quantity: null, purchase_type: constants.SUBSCRIPTION };
                                              castPremiumSubscriptionAsSkuId = closure_1_0(closure_1_2[17]).castPremiumSubscriptionAsSkuId;
                                              closure_1_0(closure_1_2[17]);
                                              ({ planId: obj.subscription_plan_id, quantity: obj.quantity } = planId);
                                              obj2 = closure_1_1(closure_1_2[17]);
                                              return obj;
                                            })),
                          done: false
                        };
                        return obj4;
                      }
                    }
                  }
                }
              }
              c6 = 3;
              return { value: "HermesInternal", done: null };
            }
          } else if (1 === c5) {
            c4 = 0;
            closure_130_21.current = false;
            throw closure_3;
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            closure_130_21.current = false;
            c6 = 3;
            obj = { value, done: true };
            return obj;
          } else if (null == value) {
            c4 = 0;
            closure_130_21.current = false;
            c6 = 3;
            return { value: "HermesInternal", done: null };
          }
          closure_130_20(found);
          c4 = 0;
          closure_130_21.current = false;
        } catch (tmp22) {
          closure_3 = tmp22;
          if (0 === c4) {
            c6 = 3;
            throw tmp22;
          } else {
            c5 = 1;
          }
        }
      }
    });
    return obj(...arguments);
  };
  let tmp = closure_38();
  _slicedToArray = tmp;
  let tmp2 = orderRequired((isPaymentSuccess) => isPaymentSuccess.isPaymentSuccess);
  react = tmp2;
  let tmp3 = orderRequired((productId) => productId.productId);
  const product_id = tmp3;
  let tmp5 = require;
  let tmp6 = premiumItems;
  const tmp4 = orderRequired((mobileWebRedirectCheckoutStatus) => mobileWebRedirectCheckoutStatus.mobileWebRedirectCheckoutStatus);
  obj = require("get initialized");
  const items = [handlePremiumPurchase];
  let stateFromStores = obj.useStateFromStores(items, () => handlePremiumPurchase.isBusy());
  let obj2 = require("useIsScreenReaderEnabled");
  const isScreenReaderEnabled = obj2.useIsScreenReaderEnabled();
  let obj3 = react;
  react.useRef(null);
  const ref = react.useRef(null);
  const items1 = [tmp2];
  const effect = react.useEffect(() => {
    const tmp = closure_7;
    if (tmp) {
      const _Date = Date;
      ref.current = Date.now();
    }
  }, items1);
  const items2 = [tmp2, isScreenReaderEnabled];
  const effect1 = react.useEffect(() => {
    const tmp = closure_7 && isScreenReaderEnabled;
    if (tmp) {
      const obj2 = { ref, delay: 100 };
      obj = react_native;
      const result = obj.setAccessibilityFocus(obj2);
    }
  }, items2);
  let obj4 = require("handlePremiumPurchase");
  const tmp7 = handlePremiumPurchase;
  handlePremiumPurchase = obj4.useHandlePremiumPurchase();
  let obj5 = require("BlockedPaymentsCountryExperiment");
  const isPaymentsBlocked = obj5.useIsPaymentsBlocked();
  const tmp16 = premiumType(premiumItems[31])();
  const tmp17 = ref((orderRecord) => orderRecord.orderRecord);
  let closure_13 = tmp17;
  ({ patchOrderLineItems: c14, isPatchOrderLoading, orderRequired } = ref(f83189));
  const tmp18 = ref(f83189);
  if (!isPatchOrderLoading) {
    isPatchOrderLoading = ref((isCreateOrderLoading) => isCreateOrderLoading.isCreateOrderLoading);
  }
  const tmp5Result = tmp5(tmp6[32]);
  const premiumTrialOffer = tmp5Result.usePremiumTrialOffer();
  const tmp5Result13 = tmp5(tmp6[33]);
  const premiumDiscountOffer = tmp5Result13.usePremiumDiscountOffer();
  let tmp21 = null != premiumTrialOffer && null != premiumType;
  if (tmp21) {
    const subscriptionTrial = premiumTrialOffer.subscriptionTrial;
    let skuId;
    if (subscriptionTrial != null) {
      skuId = subscriptionTrial.skuId;
    }
    const tmp15Result = premiumType(tmp6[17]);
    tmp21 = skuId === tmp15Result.getSkuIdForPremiumType(premiumType);
  }
  let tmp23 = tmp21;
  if (tmp23) {
    let tmp24 = !orderRequired;
    if (orderRequired) {
      let subscriptionTrialId;
      const trialId = premiumTrialOffer.trialId;
      if (tmp17 != null) {
        const subscriptionFacet = tmp17.subscriptionFacet;
        if (subscriptionFacet != null) {
          const subscriptionPreview = subscriptionFacet.subscriptionPreview;
          if (subscriptionPreview != null) {
            subscriptionTrialId = subscriptionPreview.subscriptionTrialId;
          }
        }
      }
      tmp24 = trialId === subscriptionTrialId;
    }
    tmp23 = tmp24;
  }
  closure_17 = tmp23;
  const tmp5Result14 = tmp5(tmp6[34]);
  const discountedPremiumProductInfo = tmp5Result14.useDiscountedPremiumProductInfo(premiumDiscountOffer, premiumItems);
  ({ discountedPlan, discountedProduct, discountedPriceString } = discountedPremiumProductInfo);
  let productId;
  const useCheckoutPlanDiscountPrices = tmp5(tmp6[24]).useCheckoutPlanDiscountPrices;
  tmp5(tmp6[24]);
  if (discountedPlan != null) {
    productId = discountedPlan.productId;
  }
  let obj6 = { discountedPriceString, regularPriceString: priceString };
  priceString = undefined;
  if (discountedProduct != null) {
    priceString = discountedProduct.priceString;
  }
  const checkoutPlanDiscountPrices = useCheckoutPlanDiscountPrices(productId, obj6);
  [first, closure_20] = obj3.useState(initialSelectedItem);
  closure_21 = obj3.useRef(false);
  const items3 = [tmp7];
  const tmp5Result16 = tmp5(tmp6[23]);
  const stateFromStores1 = tmp5Result16.useStateFromStores(items3, () => {
    let product = null;
    if (null != first) {
      product = IAPStore.getProduct(tmp.productId);
    }
    return product;
  });
  const tmp5Result17 = tmp5(tmp6[35]);
  const bottomSheetRef = tmp5Result17.useBottomSheetRef().bottomSheetRef;
  const tmp15Result8 = premiumType(tmp6[36]);
  analyticsLocations2 = tmp15Result8(analyticsLocations, tmp15(tmp6[37]).PREMIUM_PAYMENT_ACTION_SHEET).analyticsLocations;
  const tmp35 = premiumType(tmp6[38])(() => {
    obj = require("PremiumAnalyticsUtils");
    return obj.getNewAnalyticsLoadId();
  });
  closure_23 = tmp35;
  const items4 = [premiumType];
  memo = obj3.useMemo(() => {
    const castPremiumSubscriptionAsSkuId = PremiumUtils.castPremiumSubscriptionAsSkuId;
    PremiumUtils;
    obj = PremiumUtilsDefault;
    return castPremiumSubscriptionAsSkuId(obj.getSkuIdForPremiumType(premiumType));
  }, items4);
  let obj7 = { analyticsLoadId: tmp35, analyticsLocation: obj8, analyticsLocations: analyticsLocations2 };
  obj8 = { object: basePlanId.BUTTON_CTA, object_type: constants3.BUY };
  const getBasePurchaseFlowAnalyticsFields = tmp5(tmp6[39]).getBasePurchaseFlowAnalyticsFields;
  tmp5(tmp6[39]);
  let merged = Object.assign(analyticsLocation);
  basePurchaseFlowAnalyticsFields = getBasePurchaseFlowAnalyticsFields(obj7);
  basePlanId = null;
  if (null != first) {
    basePlanId = first.basePlanId;
  }
  const tmp5Result19 = tmp5(tmp6[40]);
  let result = tmp5Result19.isMobileWebRedirectCheckoutEnabled();
  constants3 = result;
  premiumType(tmp6[41])(() => {
    let customCheckoutFlowForAnalytics;
    obj = { application_id: require, subscription_plan_id: basePlanId, sku_id: memo, custom_checkout_flow: customCheckoutFlowForAnalytics };
    const trackPaymentFlowStartedAnalyticsAndCTP = PaymentFlowStartedTriggerPoint.trackPaymentFlowStartedAnalyticsAndCTP;
    PaymentFlowStartedTriggerPoint;
    const merged = Object.assign(basePurchaseFlowAnalyticsFields);
    customCheckoutFlowForAnalytics = undefined;
    if (c27) {
      const tmpResult = MobileWebRedirectCheckoutUtils;
      customCheckoutFlowForAnalytics = tmpResult.getCustomCheckoutFlowForAnalytics();
    }
    const result = trackPaymentFlowStartedAnalyticsAndCTP(obj);
  });
  const items5 = [tmp2, tmp3];
  onDismiss = obj3.useCallback(() => {
    const tmp = closure_7 && null != ref.current;
    if (tmp) {
      const _Date = Date;
      obj = { product_id, duration_ms: Date.now() - ref.current };
      const track = AnalyticsUtilsDefault.track;
      const PREMIUM_ACTIVATED_SHEET_DISMISSED = basePurchaseFlowAnalyticsFields.PREMIUM_ACTIVATED_SHEET_DISMISSED;
      AnalyticsUtilsDefault;
      track(PREMIUM_ACTIVATED_SHEET_DISMISSED, obj);
    }
    authStore3();
  }, items5);
  const items6 = [onDismiss];
  callback1 = obj3.useCallback(() => {
    callback();
    obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet();
  }, items6);
  const items7 = [memo, basePurchaseFlowAnalyticsFields, tmp35, analyticsLocations2, handlePremiumPurchase, result, callback1, onPaymentDismiss, onPaymentStart, onPaymentSuccess, tmp17, first];
  const items8 = [tmp23, result];
  const callback2 = obj3.useCallback(onPaymentDismiss(function*(arg0, value) {
    let closure_0;
    let closure_1;
    let closure_2;
    let id;
    let intl;
    let intl2;
    let shouldRedirectToMobileWeb;
    let tmp;
    application_id = arg0;
    if (1 === tmp4) {
      if (arg0 === 1) {
        let c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c6 = 3;
        const obj7 = { value, done: true };
        return obj7;
      } else {
        let EXTERNAL_PAYMENT;
        premiumType(premiumItems[20])(null != closure_130_19, "cannot start payment without a selectedItem");
        basePlanId = closure_130_19.basePlanId;
        const tmp31 = closure_130_27 && shouldRedirectToMobileWeb;
        premiumItems = tmp31;
        const PaymentFlowStep = application_id(premiumItems[39]).PaymentFlowStep;
        if (premiumItems) {
          EXTERNAL_PAYMENT = PaymentFlowStep.MOBILE_WEB_REDIRECT_CHECKOUT;
        } else {
          EXTERNAL_PAYMENT = PaymentFlowStep.EXTERNAL_PAYMENT;
        }
        const obj8 = { from_step: application_id(premiumItems[39]).PaymentFlowStep.PLAN_SELECT, to_step: EXTERNAL_PAYMENT, subscription_plan_gateway_plan_id: closure_130_19.productId, sku_id: closure_130_24 };
        const getPaymentFlowStepAnalyticsFields = application_id(premiumItems[39]).getPaymentFlowStepAnalyticsFields;
        const tmp41 = application_id(premiumItems[39]);
        let closure_4 = getPaymentFlowStepAnalyticsFields(closure_130_25, obj8);
        const tmp48 = premiumItems;
        if (!tmp48) {
          const obj5 = premiumType(premiumItems[43]);
          const trackResult = obj5.track(constants.PAYMENT_FLOW_STEP, closure_4);
        }
        const obj10 = { productId: closure_130_19.productId, onPaymentStart: closure_130_3, onPaymentSuccess: closure_130_4, onPaymentDismiss: closure_130_5 };
        closure_1_13(obj10);
        const tmp64 = premiumItems;
        if (tmp64) {
          const obj9 = application_id(premiumItems[45]);
          const obj11 = { planId: basePlanId, isGift: false, loadId: closure_130_23 };
          const str = "premium_plan_selection_action_sheet";
          const result = obj9.goToStandalonePremiumCheckoutFromMobileApp("premium_plan_selection_action_sheet", obj11, () => {
            obj = require("MetaQuestUtils");
            const tmp = premiumItems;
            if (obj.isMetaQuest()) {
              callback1();
            } else {
              c14("in_mobile_web");
              const obj2 = premiumType(tmp[43]);
              obj2.track(basePurchaseFlowAnalyticsFields.PAYMENT_FLOW_STEP, closure_1_4);
            }
          }, () => {
            let intl;
            let intl2;
            obj = { title: intl.string(closure_1_0(closure_1_2[19]).t.NrBVjw), body: intl2.string(closure_1_0(closure_1_2[19]).t["gD+grx"]), hideActionSheet: true };
            const show = closure_1_1(closure_1_2[47]).show;
            closure_1_1(closure_1_2[47]);
            intl = closure_1_0(closure_1_2[19]).intl;
            intl2 = closure_1_0(closure_1_2[19]).intl;
            show(obj);
          });
        } else {
          let c4 = 1;
          const obj12 = { productId: closure_130_19.productId, analyticsLocation: closure_130_25.location, analyticsLoadId: closure_130_23, analyticsLocations: closure_130_22, orderId: id };
          id = undefined;
          const tmp66 = closure_130_12;
          if (closure_130_13 != null) {
            id = closure_130_13.id;
          }
          let c5 = 3;
          c6 = 1;
          const obj13 = { value: tmp66(obj12), done: false };
          return obj13;
        }
      }
    } else if (2 === tmp4) {
      c4 = 0;
      let closure_5 = closure_3;
      if (closure_5 instanceof premiumType(premiumItems[48])) {
        let obj2 = application_id(premiumItems[49]);
        const subscriptions = obj2.fetchSubscriptions();
        const obj14 = { title: intl.string(application_id(premiumItems[19]).t["U+H+kd"]), body: intl2.string(application_id(premiumItems[19]).t.F9ktNa), hideActionSheet: true };
        let show = premiumType(premiumItems[47]).show;
        const tmp20 = premiumType(premiumItems[47]);
        intl = application_id(premiumItems[19]).intl;
        intl2 = application_id(premiumItems[19]).intl;
        const showResult = show(obj14);
      } else {
        throw closure_5;
      }
    } else if (arg0 === 1) {
      c6 = 3;
      throw value;
    } else if (arg0 === 2) {
      c4 = 0;
      c6 = 3;
      obj = { value, done: true };
      return obj;
    } else {
      c4 = 0;
    }
    yield "HermesInternal";
    premiumItems = tmp;
    let obj6 = application_id;
    if (application_id === undefined) {
      obj6 = { shouldRedirectToMobileWeb: false };
    }
    shouldRedirectToMobileWeb = obj6.shouldRedirectToMobileWeb;
    return "flex";
  }), items7);
  memo1 = obj3.useMemo(() => {
    let stringResult;
    const tmp = c27;
    if (tmp) {
      const intl3 = intl9.intl;
      stringResult = intl3.string(intl9.t.rylrdY);
    } else if (closure_17) {
      let stringResult1;
      const tmp3Result = PlatformUtils;
      const isAndroidResult = tmp3Result.isAndroid();
      const intl2 = intl9.intl;
      const string = intl2.string;
      const t = intl9.t;
      if (isAndroidResult) {
        stringResult1 = string(t.rKD72m);
      } else {
        stringResult1 = string(t.bboTul);
      }
      stringResult = stringResult1;
    } else {
      const intl = tmp3(1115).intl;
      stringResult = intl.string(intl9.t.nIlrxd);
    }
    return stringResult;
  }, items8);
  const items9 = [tmp2, first, tmp23, discountedPriceString, memo1, tmp.legalDisclaimerText];
  let tmp48 = closure_35;
  const memo2 = obj3.useMemo(() => {
    let format;
    let format2;
    let format3;
    let obj11;
    let obj12;
    let obj13;
    let obj3;
    let obj4;
    let obj6;
    let obj7;
    let obj8;
    let obj9;
    let tmp3;
    let tmp43;
    let v3uC7vj;
    if (closure_7) {
      return null;
    } else {
      let interval;
      if (first != null) {
        interval = first.interval;
      }
      if (null == interval) {
        return null;
      } else {
        const tmp50 = closure_17;
        if (tmp50) {
          const obj2 = { style: closure_6.legalDisclaimerText, variant: "text-xxs/medium", children: format3(tmp43, obj4) };
          const Text3 = Text_Text.Text;
          const intl3 = intl9.intl;
          format3 = intl3.format;
          const obj10 = PlatformUtils;
          const isAndroidResult = obj10.isAndroid();
          const t = intl9.t;
          obj4 = { paidURL: onDismiss.PAID_TERMS, interval: obj12.getIntervalStringAsNoun(interval), cancelURL: obj13.getArticleURL(callback1.PREMIUM_DETAILS_CANCEL_SUB) };
          tmp43 = isAndroidResult ? t.tINI9V : t.ZWXtAj;
          obj12 = PremiumUtilsDefault;
          obj13 = HelpdeskUtilsDefault;
          return __initData5(Text3, obj2);
        } else if (null != discountedPriceString) {
          const obj5 = { style: closure_6.legalDisclaimerText, variant: "text-xxs/medium", children: format2(v3uC7vj, obj9) };
          const Text2 = Text_Text.Text;
          const intl2 = intl9.intl;
          format2 = intl2.format;
          obj9 = { buttonText: memo1, interval: obj6.formatInterval(interval), cancelSubscriptionArticle: obj7.getArticleURL(callback1.PREMIUM_DETAILS_CANCEL_SUB), paidServiceTermsArticle: obj8.getArticleURL(callback1.PAID_TERMS) };
          v3uC7vj = intl9.t["3uC7vj"];
          obj6 = PremiumUtilsDefault;
          obj7 = HelpdeskUtilsDefault;
          obj8 = HelpdeskUtilsDefault;
          return __initData5(Text2, obj5);
        } else {
          const obj14 = PlatformUtils;
          const isAndroidResult1 = obj14.isAndroid();
          const t2 = intl9.t;
          obj = { style: closure_6.legalDisclaimerText, variant: "text-xxs/medium", children: format(tmp3, obj11) };
          tmp3 = isAndroidResult1 ? t2.COObWR : t2["7wpqfj"];
          const Text = Text_Text.Text;
          const intl = intl9.intl;
          format = intl.format;
          obj11 = { paidURL: onDismiss.PAID_TERMS, interval: obj3.getIntervalStringAsNoun(interval), ctaText: memo1 };
          obj3 = PremiumUtilsDefault;
          return __initData5(Text, obj);
        }
      }
    }
  }, items9);
  let obj9 = { ref: bottomSheetRef, handleDisabled: true, onDismiss, startExpanded: true, children: tmp49Result };
  BottomSheet = tmp5(tmp6[60]).BottomSheet;
  if (isPaymentsBlocked) {
    let obj10 = { style: tmp.blockedPaymentContainer, children: items10 };
    items10 = [tmp48(tmp15(tmp6[61]), {}), ];
    let obj11 = { variant: "floating", onPress: callback1 };
    items10[1] = tmp48(tmp5(tmp6[62]).ActionSheetHeaderBar, obj11);
    tmp49Result = tmp49(product_id, obj10);
  } else {
    let tmp49Result3;
    let tmp50 = closure_37;
    let obj12 = { premiumType, isPaymentSuccess: tmp2, selectedPremiumType: premiumTier, trialOffer: premiumTrialOffer, discountOffer: tmp53 };
    premiumTier = undefined;
    const tmp51 = Header;
    if (first != null) {
      premiumTier = first.premiumTier;
    }
    tmp53 = null;
    if (null != discountedPriceString) {
      tmp53 = premiumDiscountOffer;
    }
    const items11 = [tmp48(tmp51, obj12), , ];
    let obj13 = { style: tmp.body, children: items19 };
    let str = "in_mobile_web";
    if ("in_mobile_web" === tmp4) {
      let obj14 = { size: "large", style: tmp.loadingIndicator };
      tmp49Result3 = tmp48(isScreenReaderEnabled, obj14);
    } else {
      let tmp49Result2;
      if (tmp2) {
        let tmp76;
        const obj15 = { style: tmp.contentActivated, children: items12 };
        const obj16 = { ref, accessible: true, accessibilityRole: "image", accessibilityLabel: intl5.string(tmp5(tmp6[19]).t["Q+BB2w"]), children: tmp48(tmp15Result9, obj17) };
        intl5 = tmp5(tmp6[19]).intl;
        let premiumTier1;
        tmp15Result9 = premiumType(tmp6[63]);
        if (first != null) {
          premiumTier1 = first.premiumTier;
        }
        if (first.TIER_0 === premiumTier1) {
          let tmp15Result10;
          const tmp5Result20 = tmp5(tmp6[51]);
          if (tmp5Result20.isThemeDark(tmp16)) {
            tmp15Result10 = tmp15(tmp6[52]);
          } else {
            tmp15Result10 = tmp15(tmp6[53]);
          }
          tmp76 = tmp15Result10;
        } else if (first.TIER_1 === premiumTier1) {
          let tmp15Result11;
          const tmp5Result21 = tmp5(tmp6[51]);
          if (tmp5Result21.isThemeDark(tmp16)) {
            tmp15Result11 = tmp15(tmp6[54]);
          } else {
            tmp15Result11 = tmp15(tmp6[55]);
          }
          tmp76 = tmp15Result11;
        } else if (first.TIER_2 === premiumTier1) {
          let tmp15Result12;
          const tmp5Result22 = tmp5(tmp6[51]);
          if (tmp5Result22.isThemeDark(tmp16)) {
            tmp15Result12 = tmp15(tmp6[56]);
          } else {
            tmp15Result12 = tmp15(tmp6[57]);
          }
          tmp76 = tmp15Result12;
        }
        obj17 = { source: tmp76 };
        items12 = [tmp48(tmp54, obj16), ];
        let premiumTier2;
        const obj18 = { style: tmp.contentActivatedText, variant: "text-md/semibold", children: stringResult };
        let Text3 = tmp5(tmp6[18]).Text;
        if (first != null) {
          premiumTier2 = first.premiumTier;
        }
        if (first.TIER_0 === premiumTier2) {
          const intl7 = tmp5(tmp6[19]).intl;
          stringResult = intl7.string(tmp5(tmp6[19]).t["6WWrVM"]);
        } else if (first.TIER_1 === premiumTier2) {
          const intl6 = tmp5(tmp6[19]).intl;
          stringResult = intl6.string(tmp5(tmp6[19]).t.LAAgsy);
        } else if (first.TIER_2 === premiumTier2) {
          const intl8 = tmp5(tmp6[19]).intl;
          stringResult = intl8.string(tmp5(tmp6[19]).t.I7xNzI);
        }
        items12[1] = tmp48(Text3, obj18);
        tmp49Result2 = tmp49(tmp54, obj15);
      } else {
        let tmp48Result3;
        const obj19 = { convertToMajorUnits: tmp5Result23.isAndroid() };
        tmp5Result23 = tmp5(tmp6[58]);
        if (flag) {
          flag = !tmp23;
        }
        const obj20 = { style: tmp.contentSelectPlan, children: items15 };
        if (tmp23) {
          const obj21 = { variant: "text-md/normal", color: "text-strong", style: tmp.trialDisclaimer, children: intl2.string(tmp5(tmp6[19]).t.u95Dt4) };
          let Text2 = tmp5(tmp6[18]).Text;
          intl2 = tmp5(tmp6[19]).intl;
          tmp48Result3 = tmp48(Text2, obj21);
        } else {
          tmp48Result3 = null;
          if (null != checkoutPlanDiscountPrices) {
            tmp48Result3 = null;
            if (null != premiumType) {
              const obj22 = { children: items13 };
              const obj23 = { variant: "text-md/normal", color: "text-strong", style: tmp.discountDisclaimer, children: intl.format(tmp5(tmp6[19]).t.yBn7uz, checkoutPlanDiscountPrices) };
              let Text = tmp5(tmp6[18]).Text;
              intl = tmp5(tmp6[19]).intl;
              items13 = [tmp48(Text, obj23), ];
              const obj24 = { style: items14 };
              items14 = [, ];
              ({ divider: arr14[0], offerDividerMargin: arr14[1] } = tmp);
              items13[1] = tmp48(product_id, obj24);
              tmp48Result3 = tmp49(tmp54, obj22);
            }
          }
        }
        items15 = [tmp48Result3, ];
        let stringResult1;
        const tmp15Result13 = premiumType(tmp6[64]);
        if (flag) {
          let intl3 = tmp5(tmp6[19]).intl;
          stringResult1 = intl3.string(tmp5(tmp6[19]).t.u95Dt4);
        }
        const obj25 = { title: stringResult1, titleStyleType: obj.NO_BORDER_OR_MARGIN, titleViewStyle: tmp.formTitle, sectionBodyStyle: items16, inset: true, children: items17 };
        items16 = [tmp.formSectionBody, !flag && tmp.formSectionBodyWithNoTitle];
        let tmp48Result4 = null != stateFromStores1;
        if (tmp48Result4) {
          tmp48Result4 = "HR" === stateFromStores1.countryCode;
        }
        if (tmp48Result4) {
          const str3 = stateFromStores1.currencyCode;
          tmp48Result4 = str3.toLowerCase() === constants6.EUR;
        }
        if (tmp48Result4) {
          const obj26 = { message: formatToPlainString(v9hnZoK, obj27) };
          const tmp15Result14 = premiumType(tmp6[65]);
          const intl4 = tmp5(tmp6[19]).intl;
          formatToPlainString = intl4.formatToPlainString;
          obj27 = { kunaPriceWithCurrency: tmp5Result24.formatPrice(stateFromStores1.price * memo1, constants6.HRK, obj19) };
          v9hnZoK = tmp5(tmp6[19]).t["9hnZoK"];
          let tmp64 = constants6;
          tmp5Result24 = tmp5(tmp6[25]);
          tmp48Result4 = tmp48(tmp15Result14, obj26);
        }
        items17 = [tmp48Result4, ];
        let str4 = "auto";
        let str5 = "auto";
        if (isPatchOrderLoading) {
          str5 = "none";
        }
        const obj28 = { pointerEvents: str5, accessibilityElementsHidden: isPatchOrderLoading, importantForAccessibility: str4, style: planOptionsBusy, children: tmp48(RadioGroup, obj29) };
        if (isPatchOrderLoading) {
          str4 = "no-hide-descendants";
        }
        planOptionsBusy = null;
        if (isPatchOrderLoading) {
          planOptionsBusy = tmp.planOptionsBusy;
        }
        let productId1;
        RadioGroup = tmp5(tmp6[66]).RadioGroup;
        if (first != null) {
          productId1 = first.productId;
        }
        let productId2;
        obj29 = {
          value: productId1,
          options: premiumItems.map((premiumItem) => {
                  let tmp3;
                  obj = { premiumItem, selectedProductId: productId2, optionNeedsProductNameLabel, trialOffer: premiumTrialOffer, discountOffer: premiumDiscountOffer, discountedPriceString: tmp3, userIsEligibleForBogoPromotion, selectedPremiumType: premiumType };
                  tmp3 = null;
                  const tmp = closure_2_35;
                  const tmp2 = PlanOption;
                  if (premiumItem.productId === identifier) {
                    tmp3 = discountedPriceString;
                  }
                  const obj2 = { name: tmp(tmp2, obj), value: premiumItem.productId };
                  return obj2;
                }),
          onChange(value) {
                  function onPlanSelectionChange(value) {
                    return obj(...arguments);
                  }
                  return onPlanSelectionChange(value.value);
                },
          withDividers: false,
          style: tmp.planOptionRowContainer,
          disabled: stateFromStores,
          indicatorLeft: true
        };
        if (first != null) {
          productId2 = first.productId;
        }
        let identifier;
        if (discountedProduct != null) {
          identifier = discountedProduct.identifier;
        }
        const _Set = Set;
        const self = this;
        const self2 = this;
        react = new Set(premiumItems.map(f83178)).size > 1;
        set = new Set(premiumItems.map(f83178));
        items17[1] = tmp48(product_id, obj28);
        items15[1] = closure_36(tmp15Result13, obj25);
        tmp49Result2 = tmp49(tmp54, obj20);
      }
      const items18 = [tmp49Result2, ];
      const obj30 = { isPaymentSuccess: tmp2, onClose: callback1, ctaText: memo1, onStartPayment: callback2, shouldUseMobileWebRedirectCheckout: result, disabled: tmp83, loading: stateFromStores };
      tmp83 = stateFromStores;
      const tmp82 = PremiumPlanSelectionActionSheetCTA;
      if (!stateFromStores) {
        tmp83 = isPatchOrderLoading;
      }
      if (!stateFromStores) {
        stateFromStores = isPatchOrderLoading;
      }
      const obj31 = { children: items18 };
      items18[1] = tmp48(tmp82, obj30);
      tmp49Result3 = tmp49(tmp50, obj31);
    }
    items19 = [tmp49Result3, ];
    const obj32 = { children: items11 };
    const tmp86 = !result && memo2;
    items19[1] = tmp86;
    items11[1] = closure_36(product_id, obj13);
    const obj33 = { variant: "floating", onPress: callback1 };
    items11[2] = tmp48(tmp5(tmp6[62]).ActionSheetHeaderBar, obj33);
    tmp49Result = tmp49(tmp50, obj32);
  }
  return tmp48(BottomSheet, obj9);
}
let closure_3 = ["predicate", "initialSelectedCriteria", "sortFn"];
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
({ View: metroImportAll, ActivityIndicator: c9 } = react_native2);
const useNativeCheckoutStore = NativeCheckoutStore.useNativeCheckoutStore;
({ setInitiatedPurchaseFromNewFlow: map1, setMobileWebRedirectCheckoutStatus: closure_14, usePremiumPlanPurchasedStore: closure_15, reset: closure_16 } = PremiumPlanPurchasedStore);
({ DISCOUNTS: closure_17, PRICE_PLACEHOLDER: closure_18, PremiumTypes: closure_19, SubscriptionIntervalTypes: closure_20, SubscriptionPlans: closure_21, SubscriptionPlanInfo: closure_22, PremiumSubscriptionSKUs: closure_23, PREMIUM_PLAN_SELECTION_ACTION_SHEET_KEY: closure_24 } = PremiumConstants);
let Constants = Constants_mod2;
({ AnalyticEvents: closure_25, AnalyticsObjects: closure_26, AnalyticsObjectTypes: closure_27, MarketingURLs: closure_28, HelpdeskArticles: closure_29 } = Constants);
const TitleStyleType = FormConstants.TitleStyleType;
({ EUR_TO_HRK_CONVERSION_RATE: closure_31, ItemPurchaseType: closure_32 } = PaymentConstants);
Constants = Constants_mod2;
({ CurrencyCodes: closure_33, PaymentGateways: closure_34 } = Constants);
({ jsx: closure_35, jsxs: closure_36, Fragment: closure_37 } = Fragment);
let createStyles = createStyles_mod;
let obj = { body: { padding: 16 }, headerText: { paddingTop: 30, paddingHorizontal: 20 }, contentSelectPlan: { marginBottom: 16 }, contentActivated: { alignItems: "center", paddingTop: 40, paddingBottom: 56 }, contentActivatedText: { width: 328, marginTop: 16, textAlign: "center" }, formTitle: { paddingTop: 0, paddingLeft: 0 }, formSectionBody: { backgroundColor: "none" }, formSectionBodyWithNoTitle: { marginTop: -24 }, planOptionRowContainer: { paddingHorizontal: 10 }, planOptionsBusy: { opacity: 0.5 }, planOptionContainer: { display: "flex", flexDirection: "row", alignItems: "center" }, planOptionPriceContainer: { flexGrow: 1, flexShrink: 1, display: "flex", flexDirection: "column", alignItems: "flex-end" }, planOptionDiscountContainer: { display: "flex", flexDirection: "row", flexShrink: 1 }, planOptionDiscount: obj2, planOptionDiscountWhite: obj3, planOptionDiscountText: { textTransform: "uppercase" }, blockedPaymentContainer: { marginVertical: 40 }, legalDisclaimerText: { marginTop: 16 }, divider: size, offerDividerMargin: { marginBottom: 8 }, trialDisclaimer: { marginBottom: 8 }, discountDisclaimer: { marginBottom: 20 }, loadingIndicator: { marginVertical: 30 }, discountSubTextContainer: { alignItems: "flex-end" }, priceText: { flexShrink: 1 } };
obj2 = { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.unsafe_rawColors.GREEN_360, paddingVertical: 2, paddingHorizontal: 8, marginRight: 8 };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.WHITE };
size = { height: 1, width: "100%", backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
let closure_38 = createStyles(obj);
size = size_mod;
let result = size.fileFinishedImporting("modules/premium/native/PremiumPlanSelectionActionSheet.tsx");

export default function PremiumPlanSelectionActionSheetWithOrderCTX(predicate) {
  let GOOGLE;
  let mapped;
  let obj4;
  let obj7;
  let premiumBundlesWithPredicate;
  let tmp4;
  let tmpResult10;
  let tmp = require;
  const NitroACOMSubscriptionExperiment = ACOMExperiments.NitroACOMSubscriptionExperiment;
  const enabled = NitroACOMSubscriptionExperiment.useConfig({ location: "PremiumPlanSelectionActionSheetWithOrderCTX" }).enabled;
  let obj = PlatformUtils;
  if (obj.isIOS()) {
    let APPLE;
    let tmp5;
    if (enabled) {
      APPLE = tmp3.APPLE_ADVANCED_COMMERCE;
      tmp5 = tmp3;
    } else {
      APPLE = tmp3.APPLE;
      tmp5 = tmp3;
    }
    tmp4 = tmp5;
    GOOGLE = APPLE;
  } else {
    GOOGLE = tmp3.GOOGLE;
    tmp4 = tmp3;
  }
  let fn = predicate.predicate;
  if (undefined === fn) {
    TIER_2 = predicate.premiumType;
    if (TIER_2 == null) {
      TIER_2 = TIER_2.TIER_2;
    }
    fn = (additionalPlans) => {
      let numPremiumGuild;
      let premiumTier;
      let tmp = 0 === additionalPlans.additionalPlans.length;
      ({ numPremiumGuild, premiumTier } = additionalPlans);
      if (tmp) {
        tmp = !additionalPlans.isDeprecated;
      }
      if (tmp) {
        tmp = 0 === numPremiumGuild;
      }
      if (tmp) {
        tmp = premiumTier === TIER_2;
      }
      return tmp;
    };
  }
  let fn2 = predicate.initialSelectedCriteria;
  if (undefined === fn2) {
    fn2 = (interval) => interval.interval === constants.YEAR;
  }
  let fn3 = predicate.sortFn;
  if (undefined === fn3) {
    fn3 = (interval, interval2) => interval2.interval - interval.interval;
  }
  const tmp8 = _objectWithoutProperties(predicate, closure_3);
  const tmpResult = usePremiumTrialOffer;
  const premiumTrialOffer = tmpResult.usePremiumTrialOffer();
  const premiumType = predicate.premiumType;
  let tmp10 = null != premiumTrialOffer && null != premiumType;
  if (tmp10) {
    const subscriptionTrial = premiumTrialOffer.subscriptionTrial;
    let skuId;
    if (subscriptionTrial != null) {
      skuId = subscriptionTrial.skuId;
    }
    const obj3 = PremiumUtilsDefault;
    tmp10 = skuId === obj3.getSkuIdForPremiumType(premiumType);
  }
  let tmp13;
  if (tmp10) {
    let obj2 = { subscription_preview: obj4 };
    tmp13 = obj2;
    obj4 = { subscription_trial_id: premiumTrialOffer.trialId };
  }
  const tmpResult6 = useIsEligibleForBogoOffer;
  const isEligibleForBogoOffer = tmpResult6.useIsEligibleForBogoOffer();
  if (null == fn3) {
    const tmpResult7 = PremiumBundledPlansUtils;
    premiumBundlesWithPredicate = tmpResult7.getPremiumBundlesWithPredicate(fn);
  } else {
    const tmpResult8 = PremiumBundledPlansUtils;
    const premiumBundlesWithPredicate1 = tmpResult8.getPremiumBundlesWithPredicate(fn);
    premiumBundlesWithPredicate = premiumBundlesWithPredicate1.sort(fn3);
  }
  if (isEligibleForBogoOffer) {
    fn2 = (interval) => interval.interval === constants.MONTH;
  }
  const found = premiumBundlesWithPredicate.find(fn2);
  if (null != found) {
    const tmpResult9 = PremiumBundledPlansUtils;
    const subscriptionItemsForProduct = tmpResult9.getSubscriptionItemsForProduct(found.productId);
    mapped = subscriptionItemsForProduct.map((planId) => {
      let castPremiumSubscriptionAsSkuId;
      let obj2;
      const obj = { subscriptionPlanId: planId.planId, skuId: castPremiumSubscriptionAsSkuId(obj2.getSkuIdForPlan(planId.planId)), quantity: planId.quantity };
      castPremiumSubscriptionAsSkuId = PremiumUtils.castPremiumSubscriptionAsSkuId;
      PremiumUtils;
      obj2 = PremiumUtilsDefault;
      return obj;
    });
  } else {
    const obj5 = { subscriptionPlanId: closure_21.PREMIUM_YEAR_TIER_2, skuId: tmpResult10.castPremiumSubscriptionAsSkuId(TIER_22.TIER_2), quantity: 1 };
    mapped = [obj5];
    tmpResult10 = PremiumUtils;
  }
  const obj6 = {
    paymentGateway: GOOGLE,
    orderRequired: GOOGLE === tmp4.APPLE_ADVANCED_COMMERCE,
    skuIds: [],
    defaultPlans: mapped,
    isGift: false,
    activeSubscription: null,
    initialSubscriptionFacet: tmp13,
    onOrderRetryCancellation() {
      const obj = ActionSheetActionCreatorsDefault;
      return obj.hideActionSheet(closure_1_24);
    },
    children: __initData5(PremiumPlanSelectionActionSheet, obj7)
  };
  obj7 = { premiumItems: premiumBundlesWithPredicate, userIsEligibleForBogoPromotion: isEligibleForBogoOffer, initialSelectedItem: found };
  const tmp18 = NativeCheckoutStoreProviderDefault;
  const merged = Object.assign(tmp8);
  return __initData5(tmp18, obj6);
};
export function getItemsByPremiumTypePredicate(arg0) {
  let closure_0 = arg0;
  return (additionalPlans) => {
    let numPremiumGuild;
    let premiumTier;
    let tmp = 0 === additionalPlans.additionalPlans.length;
    ({ numPremiumGuild, premiumTier } = additionalPlans);
    if (tmp) {
      tmp = !additionalPlans.isDeprecated;
    }
    if (tmp) {
      tmp = 0 === numPremiumGuild;
    }
    if (tmp) {
      tmp = premiumTier === TIER_2;
    }
    return tmp;
  };
}
