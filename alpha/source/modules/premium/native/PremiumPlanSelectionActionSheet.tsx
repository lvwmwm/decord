// Module ID: 9118
// Function ID: 9119
// Name: PremiumPlanSelectionActionSheet
// Dependencies: [109, 5, 32, 19, 17, 9119, 2189, 9105, 9116, 1389, 1071, 1190, 5760, 1082, 21, 5043, 575, 2174, 5634, 1112, 38, 9126, 2026, 504, 9151, 6325, 5641, 6380, 9153, 5273, 6109, 9154, 9110, 5252, 9137, 9160, 9258, 8725, 6379, 5622, 9230, 5838, 5604, 9260, 1256, 5257, 9262, 1626, 6047, 9156, 5806, 9152, 5050, 9247, 9248, 9249, 9250, 9251, 9252, 1379, 2188, 5271, 9264, 5606, 5730, 8097, 9267, 1186, 7941, 9268, 9162, 9269, 2]
// Exports: getItemsByPremiumTypePredicate

// Module 9118 (PremiumPlanSelectionActionSheet)
import _modDef38 from "module_38" /* 38 */;
import nativeDefault from "native" /* 575 */;
import intl12 from "intl" /* 1112 */;
import FormConstants from "FormConstants" /* 1190 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1256 */;
import PlatformUtils from "PlatformUtils" /* 1379 */;
import PremiumUtils from "PremiumUtils" /* 2174 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2188 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5257 */;
import Text_Text from "Text/Text" /* 5634 */;
import components_Button_Button from "components/Button/Button" /* 5641 */;
import react_native from "react-native" /* 6109 */;
import NativeCheckoutStore from "NativeCheckoutStore" /* 9119 */;
import PremiumPlanActionSheetHeaderDefault from "PremiumPlanActionSheetHeader" /* 9126 */;
import PaymentFlowStartedTriggerPoint from "PaymentFlowStartedTriggerPoint" /* 9260 */;
import NativeCheckoutStoreProviderDefault from "NativeCheckoutStoreProvider" /* 9269 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native2 from "react-native" /* 17 */;
import LocaleStore from "LocaleStore" /* 2189 */;
import IAPStore from "IAPStore" /* 9105 */;
import PremiumPlanPurchasedStore from "PremiumPlanPurchasedStore" /* 9116 */;
import PremiumConstants from "PremiumConstants" /* 1389 */;
import Constants_mod from "Constants" /* 1071 */;
import PaymentConstants from "PaymentConstants" /* 5760 */;
import Constants_mod2 from "Constants" /* 1082 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5043 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
const PremiumUtilsDefault = PremiumUtils;
let TIER_2, _require, application_id, constants, dependencyMap, importDefault, set;

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
let obj4;
let size;
let tmp;
const MobileWebRedirectCheckoutUtils = tmp(5838);
function Header(arg0) {
  let discountOffer;
  let intl;
  let isPaymentSuccess;
  let orderRecord;
  let orderRequired;
  let premiumType;
  let selectedPremiumType;
  let trialOffer;
  const f95426 = (orderRequired) => ({ orderRequired: orderRequired.orderRequired, orderRecord: orderRequired.orderRecord });
  ({ premiumType, isPaymentSuccess, trialOffer } = arg0);
  ({ selectedPremiumType, discountOffer } = arg0);
  const tmp = closure_38();
  ({ orderRequired, orderRecord } = useNativeCheckoutStore(f95426));
  useNativeCheckoutStore(f95426);
  if (null == premiumType) {
    if (!isPaymentSuccess) {
      const obj = { style: tmp.headerText, variant: "body-md/semibold", color: "text-default", accessibilityRole: "header", children: intl.string(intl12.t.vLz3Zs) };
      const Text = Text_Text.Text;
      intl = intl12.intl;
      return keyExtractor(Text, obj);
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
  return keyExtractor(PremiumPlanActionSheetHeaderDefault, { premiumType, trialOffer: trialOffer2, discountOffer });
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
  const obj = { style: items, children: keyExtractor(Text, obj2) };
  obj2 = { style: tmp.planOptionDiscountText, variant: "body-xs/semibold", color: str2, children: text };
  str2 = "text-overlay-light";
  Text = Text_Text.Text;
  if ("white" === str) {
    str2 = "text-overlay-dark";
  }
  return keyExtractor(tmp3, obj);
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
  const f95428 = (orderRequired) => ({ orderRequired: orderRequired.orderRequired, orderRecord: orderRequired.orderRecord });
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
  const obj2 = premiumItem(9151);
  let checkoutPlanPriceString = obj2.useCheckoutPlanPriceString(premiumItem.productId, stateFromStores);
  const obj3 = { discountedPriceString, regularPriceString: priceString };
  priceString = undefined;
  const useCheckoutPlanDiscountPrices = premiumItem(9151).useCheckoutPlanDiscountPrices;
  const productId = premiumItem.productId;
  premiumItem(9151);
  if (stateFromStores != null) {
    priceString = stateFromStores.priceString;
  }
  const checkoutPlanDiscountPrices = useCheckoutPlanDiscountPrices(productId, obj3);
  ({ orderRequired, orderRecord } = useNativeCheckoutStore(f95428));
  const premiumTier = premiumItem.premiumTier;
  let tmp12 = null != trialOffer && null != premiumTier;
  useNativeCheckoutStore(f95428);
  if (tmp12) {
    const subscriptionTrial = trialOffer.subscriptionTrial;
    let skuId;
    if (subscriptionTrial != null) {
      skuId = subscriptionTrial.skuId;
    }
    const obj4 = first(2174);
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
  const tmp4Result = premiumItem(2174);
  const tierDisplayNameByPlanId = tmp4Result.getTierDisplayNameByPlanId(premiumItem.basePlanId);
  const obj6 = first(2174);
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
    USD = constants5.USD;
  } else {
    const str = stateFromStores.currencyCode;
    if (str.toLowerCase() in constants5) {
      const str2 = stateFromStores.currencyCode;
      USD = str2.toLowerCase();
    } else {
      USD = tmp25.USD;
    }
  }
  let formatRateResult = null;
  if (null != checkoutPlanDiscountPrices) {
    const tmp4Result5 = premiumItem(6325);
    formatRateResult = tmp4Result5.formatRate(checkoutPlanDiscountPrices.discountedPrice, tmp27.interval, tmp27.intervalCount);
  }
  if (tmp15) {
    const intl = tmp4(1112).intl;
    const formatToPlainString = intl.formatToPlainString;
    const obj5 = { price: tmp4Result6.formatPrice(0, USD, { minimumFractionDigits: 0, maximumFractionDigits: 0 }) };
    const hXcaLT = tmp4(1112).t.hXcaLT;
    tmp4Result6 = premiumItem(6325);
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
  const formatRate = premiumItem(6325).formatRate;
  premiumItem(6325);
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
  const Text = tmp4(5634).Text;
  if (null != discountOffer) {
    str3 = "body-lg/medium";
  } else {
    str3 = "body-md/medium";
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
        const obj13 = { text: intl3.string(premiumItem(1112).t.iQTfWx) };
        intl3 = tmp4(1112).intl;
        tmp35Result = tmp35(PlanOptionBadgeComponent, obj13);
      } else {
        tmp35Result = null;
        if (null != tmp23) {
          const obj14 = { text: format(IAybsG, obj15) };
          const intl2 = tmp4(1112).intl;
          format = intl2.format;
          obj15 = { discount: tmp4Result8.formatPercent(locale, tmp23 / 100) };
          IAybsG = tmp4(1112).t.IAybsG;
          tmp4Result8 = premiumItem(2026);
          tmp35Result = tmp35(PlanOptionBadgeComponent, obj14);
        }
      }
      tmp42 = tmp35Result;
    }
    customBadgeComponent = tmp42;
  }
  items4 = [customBadgeComponent, ];
  const obj16 = { style: tmp.priceText, variant: "body-lg/medium", color: str8, children: formatToPlainStringResult };
  str8 = str4;
  const Text2 = tmp4(5634).Text;
  if (productId2 === selectedProductId) {
    str8 = "interactive-text-active";
  }
  items4[1] = closure_35(Text2, obj16);
  items5 = [closure_36(closure_8, obj12), , ];
  let tmp35Result4 = null;
  if (tmp15) {
    let str9 = str4;
    const Text3 = tmp4(5634).Text;
    if (productId2 === selectedProductId) {
      str9 = "text-default";
    }
    const obj17 = { variant: "body-xs/medium", color: str9, children: formatToPlainString3Result };
    if (premiumItem.interval === constants.YEAR) {
      const intl5 = tmp4(1112).intl;
      const formatToPlainString3 = intl5.formatToPlainString;
      const ECT4A5 = tmp4(1112).t.ECT4A5;
      if (checkoutPlanPriceString == null) {
        checkoutPlanPriceString = closure_18;
      }
      const obj18 = { price: checkoutPlanPriceString };
      formatToPlainString3Result = formatToPlainString3(ECT4A5, obj18);
    } else {
      const intl4 = tmp4(1112).intl;
      const formatToPlainString2 = intl4.formatToPlainString;
      let tmp45 = checkoutPlanPriceString;
      const v9QeON = tmp4(1112).t.v9QeON;
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
        const Text4 = tmp4(5634).Text;
        if (productId2 === selectedProductId) {
          str10 = "text-default";
        }
        const obj21 = { variant: "body-sm/medium", color: str10, children: formatToPlainString4(v02Gmgm, obj22) };
        const intl6 = tmp4(1112).intl;
        formatToPlainString4 = intl6.formatToPlainString;
        const discount = discountOffer.discount;
        obj22 = { discountedPrice: formatRateResult, numMonths: num2 };
        num2 = undefined;
        v02Gmgm = tmp4(1112).t["02Gmgm"];
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
    const Text5 = tmp4(5634).Text;
    if (productId2 === selectedProductId) {
      str4 = "text-default";
    }
    const obj23 = { variant: "body-sm/medium", color: str4, children: formatToPlainString5(prop, obj24) };
    const intl7 = tmp4(1112).intl;
    formatToPlainString5 = intl7.formatToPlainString;
    const discount2 = discountOffer.discount;
    obj24 = { regularPrice: formatRateResult1, numMonths: num3 };
    num3 = undefined;
    prop = tmp4(1112).t["vZk+c/"];
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
    const obj2 = { text: intl.string(intl12.t.WAI6xu), size: "md", grow: true, onPress: tmp };
    const Button2 = components_Button_Button.Button;
    intl = intl12.intl;
    return keyExtractor(Button2, obj2);
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
    return keyExtractor(Button, obj);
  }
}
function PremiumPlanSelectionActionSheet(premiumItems) {
  let InlineNotice;
  let RadioGroup;
  let _undefined;
  let _undefined2;
  let analyticsLocation;
  let analyticsLocations;
  let c16;
  let closure_7;
  let discountedPlan;
  let discountedPriceString;
  let discountedProduct;
  let formatToPlainString;
  let initialSelectedItem;
  let intl;
  let intl2;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let isPatchOrderLoading;
  let items10;
  let items12;
  let items13;
  let items14;
  let items15;
  let items16;
  let items17;
  let items19;
  let obj14;
  let obj24;
  let obj26;
  let obj28;
  let obj29;
  let obj5;
  let onPaymentStart;
  let orderRequired;
  let planOptionsBusy;
  let premiumTier;
  let premiumType;
  let priceString;
  let product_id;
  let require;
  let stringResult;
  let tmp2Result9;
  let tmp51Result;
  let tmp55;
  let tmp5Result31;
  let tmp5Result32;
  let tmp86;
  let userIsEligibleForBogoPromotion;
  let v9hnZoK;
  ({ applicationId: require, analyticsLocation, analyticsLocations, premiumType } = premiumItems);
  premiumItems = premiumItems.premiumItems;
  ({ onSwitchPremiumType: closure_3, onPaymentStart } = premiumItems);
  const onPaymentSuccess = premiumItems.onPaymentSuccess;
  const onPaymentDismiss = premiumItems.onPaymentDismiss;
  let flag = premiumItems.showFormTitle;
  ({ userIsEligibleForBogoPromotion, initialSelectedItem } = premiumItems);
  if (flag === undefined) {
    flag = true;
  }
  let ref;
  let closure_15;
  c16 = undefined;
  orderRequired = undefined;
  isPatchOrderLoading = undefined;
  TIER_2 = undefined;
  discountedPriceString = undefined;
  let first;
  let closure_22;
  let closure_23;
  let analyticsLocations2;
  constants = undefined;
  let memo;
  let basePurchaseFlowAnalyticsFields;
  let basePlanId;
  let c29;
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
                      const obj5 = closure_0(closure_2[51]);
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
            closure_130_23.current = false;
            throw closure_3;
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            closure_130_23.current = false;
            c6 = 3;
            obj = { value, done: true };
            return obj;
          } else if (null == value) {
            c4 = 0;
            closure_130_23.current = false;
            c6 = 3;
            return { value: "HermesInternal", done: null };
          }
          closure_130_22(found);
          c4 = 0;
          closure_130_23.current = false;
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
  react = tmp;
  let tmp2 = premiumType;
  let tmp3 = premiumItems;
  const hasItem = analyticsLocations.includes(premiumType(premiumItems[27]).USER_SETTINGS_TRY_OUT_PREMIUM);
  let tmp5 = require;
  obj = require("UserProfilePremiumTryItOutMobileRefreshExperiment");
  const showNitroBasicPurchaseWarning = obj.useTryItOutMobileRefreshConfig("PremiumPlanSelectionActionSheet", hasItem).showNitroBasicPurchaseWarning;
  let tmp50Result6 = undefined !== showNitroBasicPurchaseWarning && showNitroBasicPurchaseWarning && hasItem;
  let closure_8 = tmp50Result6;
  const tmp7 = closure_15((isPaymentSuccess) => isPaymentSuccess.isPaymentSuccess);
  let closure_9 = tmp7;
  let tmp8 = closure_15((productId) => productId.productId);
  useNativeCheckoutStore = tmp8;
  let tmp9 = closure_15((mobileWebRedirectCheckoutStatus) => mobileWebRedirectCheckoutStatus.mobileWebRedirectCheckoutStatus);
  const items = [ref];
  const tmp5Result = tmp5(tmp3[23]);
  let stateFromStores = tmp5Result.useStateFromStores(items, () => ref.isBusy());
  const tmp5Result17 = tmp5(tmp3[29]);
  const isScreenReaderEnabled = tmp5Result17.useIsScreenReaderEnabled();
  let obj4 = react;
  const tmp10 = ref;
  react.useRef(null);
  ref = react.useRef(null);
  const items1 = [tmp7];
  const effect = react.useEffect(() => {
    const tmp = closure_9;
    if (tmp) {
      const _Date = Date;
      ref.current = Date.now();
    }
  }, items1);
  const items2 = [tmp7, isScreenReaderEnabled];
  const effect1 = react.useEffect(() => {
    const tmp = closure_9 && isScreenReaderEnabled;
    if (tmp) {
      const obj2 = { ref, delay: 100 };
      obj = react_native;
      const result = obj.setAccessibilityFocus(obj2);
    }
  }, items2);
  const tmp5Result18 = tmp5(tmp3[31]);
  const handlePremiumPurchase = tmp5Result18.useHandlePremiumPurchase();
  const tmp5Result19 = tmp5(tmp3[32]);
  const isPaymentsBlocked = tmp5Result19.useIsPaymentsBlocked();
  const tmp18 = tmp2(tmp3[33])();
  const tmp19 = useNativeCheckoutStore((orderRecord) => orderRecord.orderRecord);
  closure_15 = tmp19;
  let tmp20 = useNativeCheckoutStore((patchOrderLineItems) => ({ patchOrderLineItems: patchOrderLineItems.patchOrderLineItems, isPatchOrderLoading: patchOrderLineItems.isPatchOrderLoading, orderRequired: patchOrderLineItems.orderRequired }));
  ({ patchOrderLineItems: c16, isPatchOrderLoading, orderRequired } = tmp20);
  if (!isPatchOrderLoading) {
    isPatchOrderLoading = useNativeCheckoutStore((isCreateOrderLoading) => isCreateOrderLoading.isCreateOrderLoading);
  }
  const tmp5Result20 = tmp5(tmp3[34]);
  const premiumTrialOffer = tmp5Result20.usePremiumTrialOffer();
  const tmp5Result21 = tmp5(tmp3[35]);
  const premiumDiscountOffer = tmp5Result21.usePremiumDiscountOffer();
  let tmp23 = null != premiumTrialOffer && null != premiumType;
  if (tmp23) {
    const subscriptionTrial = premiumTrialOffer.subscriptionTrial;
    let skuId;
    if (subscriptionTrial != null) {
      skuId = subscriptionTrial.skuId;
    }
    const tmp2Result = tmp2(tmp3[17]);
    tmp23 = skuId === tmp2Result.getSkuIdForPremiumType(premiumType);
  }
  let tmp25 = tmp23;
  if (tmp25) {
    let tmp26 = !orderRequired;
    if (orderRequired) {
      let subscriptionTrialId;
      const trialId = premiumTrialOffer.trialId;
      if (tmp19 != null) {
        const subscriptionFacet = tmp19.subscriptionFacet;
        if (subscriptionFacet != null) {
          const subscriptionPreview = subscriptionFacet.subscriptionPreview;
          if (subscriptionPreview != null) {
            subscriptionTrialId = subscriptionPreview.subscriptionTrialId;
          }
        }
      }
      tmp26 = trialId === subscriptionTrialId;
    }
    tmp25 = tmp26;
  }
  TIER_2 = tmp25;
  const tmp5Result22 = tmp5(tmp3[36]);
  const discountedPremiumProductInfo = tmp5Result22.useDiscountedPremiumProductInfo(premiumDiscountOffer, premiumItems);
  ({ discountedPlan, discountedProduct, discountedPriceString } = discountedPremiumProductInfo);
  let productId;
  const useCheckoutPlanDiscountPrices = tmp5(tmp3[24]).useCheckoutPlanDiscountPrices;
  tmp5(tmp3[24]);
  if (discountedPlan != null) {
    productId = discountedPlan.productId;
  }
  let obj2 = { discountedPriceString, regularPriceString: priceString };
  priceString = undefined;
  if (discountedProduct != null) {
    priceString = discountedProduct.priceString;
  }
  const checkoutPlanDiscountPrices = useCheckoutPlanDiscountPrices(productId, obj2);
  const tmp33 = onPaymentDismiss(obj4.useState(initialSelectedItem), 2);
  first = tmp33[0];
  closure_22 = tmp33[1];
  closure_23 = obj4.useRef(false);
  const items3 = [tmp10];
  const tmp5Result24 = tmp5(tmp3[23]);
  const stateFromStores1 = tmp5Result24.useStateFromStores(items3, () => {
    let product = null;
    if (null != first) {
      product = IAPStore.getProduct(tmp.productId);
    }
    return product;
  });
  const tmp5Result25 = tmp5(tmp3[37]);
  const bottomSheetRef = tmp5Result25.useBottomSheetRef().bottomSheetRef;
  const tmp2Result8 = tmp2(tmp3[38]);
  analyticsLocations2 = tmp2Result8(analyticsLocations, tmp2(tmp3[27]).PREMIUM_PAYMENT_ACTION_SHEET).analyticsLocations;
  let tmp37 = tmp2(tmp3[39])(() => {
    obj = require("PremiumAnalyticsUtils");
    return obj.getNewAnalyticsLoadId();
  });
  constants = tmp37;
  const items4 = [premiumType];
  memo = obj4.useMemo(() => {
    const castPremiumSubscriptionAsSkuId = PremiumUtils.castPremiumSubscriptionAsSkuId;
    PremiumUtils;
    obj = PremiumUtilsDefault;
    return castPremiumSubscriptionAsSkuId(obj.getSkuIdForPremiumType(premiumType));
  }, items4);
  let obj3 = { analyticsLoadId: tmp37, analyticsLocation: obj5, analyticsLocations: analyticsLocations2 };
  obj5 = { object: memo.BUTTON_CTA, object_type: basePurchaseFlowAnalyticsFields.BUY };
  const getBasePurchaseFlowAnalyticsFields = tmp5(tmp3[40]).getBasePurchaseFlowAnalyticsFields;
  tmp5(tmp3[40]);
  let merged = Object.assign(analyticsLocation);
  basePurchaseFlowAnalyticsFields = getBasePurchaseFlowAnalyticsFields(obj3);
  basePlanId = null;
  if (null != first) {
    basePlanId = first.basePlanId;
  }
  const tmp5Result27 = tmp5(tmp3[41]);
  let result = tmp5Result27.isMobileWebRedirectCheckoutEnabled();
  c29 = result;
  tmp2(tmp3[42])(() => {
    let customCheckoutFlowForAnalytics;
    obj = { application_id: require, subscription_plan_id: basePlanId, sku_id: memo, custom_checkout_flow: customCheckoutFlowForAnalytics };
    const trackPaymentFlowStartedAnalyticsAndCTP = PaymentFlowStartedTriggerPoint.trackPaymentFlowStartedAnalyticsAndCTP;
    PaymentFlowStartedTriggerPoint;
    const merged = Object.assign(basePurchaseFlowAnalyticsFields);
    customCheckoutFlowForAnalytics = undefined;
    if (c29) {
      const tmpResult = MobileWebRedirectCheckoutUtils;
      customCheckoutFlowForAnalytics = tmpResult.getCustomCheckoutFlowForAnalytics();
    }
    const result = trackPaymentFlowStartedAnalyticsAndCTP(obj);
  });
  const items5 = [tmp7, tmp8];
  onDismiss = obj4.useCallback(() => {
    const tmp = closure_9 && null != ref.current;
    if (tmp) {
      const _Date = Date;
      obj = { product_id, duration_ms: Date.now() - ref.current };
      const track = AnalyticsUtilsDefault.track;
      const PREMIUM_ACTIVATED_SHEET_DISMISSED = constants.PREMIUM_ACTIVATED_SHEET_DISMISSED;
      AnalyticsUtilsDefault;
      track(PREMIUM_ACTIVATED_SHEET_DISMISSED, obj);
    }
    authStore3();
  }, items5);
  const items6 = [onDismiss];
  callback1 = obj4.useCallback(() => {
    callback();
    obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet();
  }, items6);
  const items7 = [memo, basePurchaseFlowAnalyticsFields, tmp37, analyticsLocations2, handlePremiumPurchase, result, callback1, onPaymentDismiss, onPaymentStart, onPaymentSuccess, tmp19, first];
  const items8 = [tmp25, tmp50Result6, result, premiumType];
  const callback2 = obj4.useCallback(onPaymentSuccess(function*(arg0, value) {
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
        premiumType(premiumItems[20])(null != closure_130_21, "cannot start payment without a selectedItem");
        basePlanId = closure_130_21.basePlanId;
        const tmp31 = closure_130_29 && shouldRedirectToMobileWeb;
        premiumItems = tmp31;
        const PaymentFlowStep = application_id(premiumItems[40]).PaymentFlowStep;
        if (premiumItems) {
          EXTERNAL_PAYMENT = PaymentFlowStep.MOBILE_WEB_REDIRECT_CHECKOUT;
        } else {
          EXTERNAL_PAYMENT = PaymentFlowStep.EXTERNAL_PAYMENT;
        }
        const obj8 = { from_step: application_id(premiumItems[40]).PaymentFlowStep.PLAN_SELECT, to_step: EXTERNAL_PAYMENT, subscription_plan_gateway_plan_id: closure_130_21.productId, sku_id: closure_130_26 };
        const getPaymentFlowStepAnalyticsFields = application_id(premiumItems[40]).getPaymentFlowStepAnalyticsFields;
        const tmp41 = application_id(premiumItems[40]);
        let closure_4 = getPaymentFlowStepAnalyticsFields(closure_130_27, obj8);
        const tmp48 = premiumItems;
        if (!tmp48) {
          const obj5 = premiumType(premiumItems[44]);
          const trackResult = obj5.track(constants.PAYMENT_FLOW_STEP, closure_4);
        }
        const obj10 = { productId: closure_130_21.productId, onPaymentStart: closure_130_4, onPaymentSuccess: closure_130_5, onPaymentDismiss: closure_130_6 };
        ref(obj10);
        const tmp64 = premiumItems;
        if (tmp64) {
          const obj9 = application_id(premiumItems[46]);
          const obj11 = { planId: basePlanId, isGift: false, loadId: closure_130_25 };
          const str = "premium_plan_selection_action_sheet";
          const result = obj9.goToStandalonePremiumCheckoutFromMobileApp("premium_plan_selection_action_sheet", obj11, () => {
            obj = require("MetaQuestUtils");
            const tmp = premiumItems;
            if (obj.isMetaQuest()) {
              callback1();
            } else {
              handlePremiumPurchase("in_mobile_web");
              const obj2 = premiumType(tmp[44]);
              obj2.track(constants.PAYMENT_FLOW_STEP, closure_1_4);
            }
          }, () => {
            let intl;
            let intl2;
            obj = { title: intl.string(closure_1_0(closure_1_2[19]).t.NrBVjw), body: intl2.string(closure_1_0(closure_1_2[19]).t["gD+grx"]), hideActionSheet: true };
            const show = closure_1_1(closure_1_2[48]).show;
            closure_1_1(closure_1_2[48]);
            intl = closure_1_0(closure_1_2[19]).intl;
            intl2 = closure_1_0(closure_1_2[19]).intl;
            show(obj);
          });
        } else {
          let c4 = 1;
          const obj12 = { productId: closure_130_21.productId, analyticsLocation: closure_130_27.location, analyticsLoadId: closure_130_25, analyticsLocations: closure_130_24, orderId: id };
          id = undefined;
          const tmp66 = closure_130_14;
          if (closure_130_15 != null) {
            id = closure_130_15.id;
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
      if (closure_5 instanceof premiumType(premiumItems[49])) {
        let obj2 = application_id(premiumItems[50]);
        const subscriptions = obj2.fetchSubscriptions();
        const obj14 = { title: intl.string(application_id(premiumItems[19]).t["U+H+kd"]), body: intl2.string(application_id(premiumItems[19]).t.F9ktNa), hideActionSheet: true };
        let show = premiumType(premiumItems[48]).show;
        const tmp20 = premiumType(premiumItems[48]);
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
    return "Path";
  }), items7);
  memo1 = obj4.useMemo(() => {
    let obj2;
    let stringResult;
    const tmp = c29;
    if (tmp) {
      const intl4 = intl12.intl;
      stringResult = intl4.string(intl12.t.rylrdY);
    } else {
      const tmp2 = TIER_2;
      if (tmp2) {
        let stringResult1;
        const obj3 = PlatformUtils;
        const isAndroidResult = obj3.isAndroid();
        const intl3 = intl12.intl;
        const string = intl3.string;
        const t = intl12.t;
        if (isAndroidResult) {
          stringResult1 = string(t.rKD72m);
        } else {
          stringResult1 = string(t.bboTul);
        }
        stringResult = stringResult1;
      } else {
        const tmp3 = closure_8;
        if (tmp3) {
          if (null != premiumType) {
            const intl2 = intl12.intl;
            const formatToPlainString = intl2.formatToPlainString;
            obj = { planName: obj2.getPremiumTypeDisplayName(tmp4) };
            const v4UNoeD = intl12.t["4UNoeD"];
            obj2 = PremiumUtils;
            stringResult = formatToPlainString(v4UNoeD, obj);
          }
        }
        const intl = intl12.intl;
        stringResult = intl.string(intl12.t.nIlrxd);
      }
    }
    return stringResult;
  }, items8);
  const items9 = [tmp7, first, tmp25, discountedPriceString, memo1, tmp.legalDisclaimerText];
  let tmp50 = closure_35;
  const memo2 = obj4.useMemo(() => {
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
    if (closure_9) {
      return null;
    } else {
      let interval;
      if (first != null) {
        interval = first.interval;
      }
      if (null == interval) {
        return null;
      } else {
        const tmp50 = TIER_2;
        if (tmp50) {
          const obj2 = { style: closure_7.legalDisclaimerText, variant: "footnote/medium", children: format3(tmp43, obj4) };
          const Text3 = Text_Text.Text;
          const intl3 = intl12.intl;
          format3 = intl3.format;
          const obj10 = PlatformUtils;
          const isAndroidResult = obj10.isAndroid();
          const t = intl12.t;
          obj4 = { paidURL: basePlanId.PAID_TERMS, interval: obj12.getIntervalStringAsNoun(interval), cancelURL: obj13.getArticleURL(_undefined2.PREMIUM_DETAILS_CANCEL_SUB) };
          tmp43 = isAndroidResult ? t.tINI9V : t.ZWXtAj;
          obj12 = PremiumUtilsDefault;
          obj13 = HelpdeskUtilsDefault;
          return keyExtractor(Text3, obj2);
        } else if (null != discountedPriceString) {
          const obj5 = { style: closure_7.legalDisclaimerText, variant: "footnote/medium", children: format2(v3uC7vj, obj9) };
          const Text2 = Text_Text.Text;
          const intl2 = intl12.intl;
          format2 = intl2.format;
          obj9 = { buttonText: memo1, interval: obj6.formatInterval(interval), cancelSubscriptionArticle: obj7.getArticleURL(_undefined2.PREMIUM_DETAILS_CANCEL_SUB), paidServiceTermsArticle: obj8.getArticleURL(_undefined2.PAID_TERMS) };
          v3uC7vj = intl12.t["3uC7vj"];
          obj6 = PremiumUtilsDefault;
          obj7 = HelpdeskUtilsDefault;
          obj8 = HelpdeskUtilsDefault;
          return keyExtractor(Text2, obj5);
        } else {
          const obj14 = PlatformUtils;
          const isAndroidResult1 = obj14.isAndroid();
          const t2 = intl12.t;
          obj = { style: closure_7.legalDisclaimerText, variant: "footnote/medium", children: format(tmp3, obj11) };
          tmp3 = isAndroidResult1 ? t2.COObWR : t2["7wpqfj"];
          const Text = Text_Text.Text;
          const intl = intl12.intl;
          format = intl.format;
          obj11 = { paidURL: basePlanId.PAID_TERMS, interval: obj3.getIntervalStringAsNoun(interval), ctaText: memo1 };
          obj3 = PremiumUtilsDefault;
          return keyExtractor(Text, obj);
        }
      }
    }
  }, items9);
  let obj6 = { ref: bottomSheetRef, handleDisabled: true, onDismiss, startExpanded: true, children: tmp51Result };
  const BottomSheet = tmp5(tmp3[61]).BottomSheet;
  if (isPaymentsBlocked) {
    let obj7 = { style: tmp.blockedPaymentContainer, children: items10 };
    items10 = [tmp50(tmp2(tmp3[62]), {}), ];
    let obj8 = { variant: "floating", onPress: callback1 };
    items10[1] = tmp50(tmp5(tmp3[63]).ActionSheetHeaderBar, obj8);
    tmp51Result = tmp51(closure_8, obj7);
  } else {
    let tmp51Result3;
    let obj9 = { premiumType, isPaymentSuccess: tmp7, selectedPremiumType: premiumTier, trialOffer: premiumTrialOffer, discountOffer: tmp55 };
    premiumTier = undefined;
    const tmp53 = Header;
    if (first != null) {
      premiumTier = first.premiumTier;
    }
    tmp55 = null;
    if (null != discountedPriceString) {
      tmp55 = premiumDiscountOffer;
    }
    const items11 = [tmp50(tmp53, obj9), , ];
    let obj10 = { style: tmp.body, children: items19 };
    let str = "in_mobile_web";
    if ("in_mobile_web" === tmp9) {
      let obj11 = { size: "large", style: tmp.loadingIndicator };
      tmp51Result3 = tmp50(closure_9, obj11);
    } else {
      let tmp51Result2;
      if (tmp7) {
        let tmp79;
        let obj12 = { style: tmp.contentActivated, children: items12 };
        let obj13 = { ref, accessible: true, accessibilityRole: "image", accessibilityLabel: intl8.string(tmp5(tmp3[19]).t["Q+BB2w"]), children: tmp50(tmp2Result9, obj14) };
        intl8 = tmp5(tmp3[19]).intl;
        let premiumTier1;
        tmp2Result9 = tmp2(tmp3[64]);
        if (first != null) {
          premiumTier1 = first.premiumTier;
        }
        if (TIER_2.TIER_0 === premiumTier1) {
          let tmp2Result10;
          const tmp5Result28 = tmp5(tmp3[52]);
          if (tmp5Result28.isThemeDark(tmp18)) {
            tmp2Result10 = tmp2(tmp3[53]);
          } else {
            tmp2Result10 = tmp2(tmp3[54]);
          }
          tmp79 = tmp2Result10;
        } else if (TIER_2.TIER_1 === premiumTier1) {
          let tmp2Result11;
          const tmp5Result29 = tmp5(tmp3[52]);
          if (tmp5Result29.isThemeDark(tmp18)) {
            tmp2Result11 = tmp2(tmp3[55]);
          } else {
            tmp2Result11 = tmp2(tmp3[56]);
          }
          tmp79 = tmp2Result11;
        } else if (TIER_2.TIER_2 === premiumTier1) {
          let tmp2Result12;
          const tmp5Result30 = tmp5(tmp3[52]);
          if (tmp5Result30.isThemeDark(tmp18)) {
            tmp2Result12 = tmp2(tmp3[57]);
          } else {
            tmp2Result12 = tmp2(tmp3[58]);
          }
          tmp79 = tmp2Result12;
        }
        obj14 = { source: tmp79 };
        items12 = [tmp50(tmp56, obj13), ];
        let premiumTier2;
        const obj15 = { style: tmp.contentActivatedText, variant: "body-md/semibold", children: stringResult };
        let Text3 = tmp5(tmp3[18]).Text;
        if (first != null) {
          premiumTier2 = first.premiumTier;
        }
        if (TIER_2.TIER_0 === premiumTier2) {
          const intl10 = tmp5(tmp3[19]).intl;
          stringResult = intl10.string(tmp5(tmp3[19]).t["6WWrVM"]);
        } else if (TIER_2.TIER_1 === premiumTier2) {
          const intl9 = tmp5(tmp3[19]).intl;
          stringResult = intl9.string(tmp5(tmp3[19]).t.LAAgsy);
        } else if (TIER_2.TIER_2 === premiumTier2) {
          const intl11 = tmp5(tmp3[19]).intl;
          stringResult = intl11.string(tmp5(tmp3[19]).t.I7xNzI);
        }
        items12[1] = tmp50(Text3, obj15);
        tmp51Result2 = tmp51(tmp56, obj12);
      } else {
        let tmp50Result4;
        const obj16 = { convertToMajorUnits: tmp5Result31.isAndroid() };
        tmp5Result31 = tmp5(tmp3[59]);
        if (flag) {
          flag = !tmp25;
        }
        const obj17 = { style: tmp.contentSelectPlan, children: items15 };
        if (tmp25) {
          const obj18 = { variant: "body-md/normal", color: "text-strong", style: tmp.trialDisclaimer, children: intl2.string(tmp5(tmp3[19]).t.u95Dt4) };
          let Text2 = tmp5(tmp3[18]).Text;
          intl2 = tmp5(tmp3[19]).intl;
          tmp50Result4 = tmp50(Text2, obj18);
        } else {
          tmp50Result4 = null;
          if (null != checkoutPlanDiscountPrices) {
            tmp50Result4 = null;
            if (null != premiumType) {
              const obj19 = { children: items13 };
              const obj20 = { variant: "body-md/normal", color: "text-strong", style: tmp.discountDisclaimer, children: intl.format(tmp5(tmp3[19]).t.yBn7uz, checkoutPlanDiscountPrices) };
              let Text = tmp5(tmp3[18]).Text;
              intl = tmp5(tmp3[19]).intl;
              items13 = [tmp50(Text, obj20), ];
              const obj21 = { style: items14 };
              items14 = [, ];
              ({ divider: arr14[0], offerDividerMargin: arr14[1] } = tmp);
              items13[1] = tmp50(closure_8, obj21);
              tmp50Result4 = tmp51(tmp56, obj19);
            }
          }
        }
        items15 = [tmp50Result4, , ];
        let stringResult1;
        const tmp2Result13 = tmp2(tmp3[65]);
        if (flag) {
          let intl3 = tmp5(tmp3[19]).intl;
          stringResult1 = intl3.string(tmp5(tmp3[19]).t.u95Dt4);
        }
        const obj22 = { title: stringResult1, titleStyleType: onDismiss.NO_BORDER_OR_MARGIN, titleViewStyle: tmp.formTitle, sectionBodyStyle: items16, inset: true, children: items17 };
        items16 = [tmp.formSectionBody, !flag && tmp.formSectionBodyWithNoTitle];
        let tmp50Result5 = null != stateFromStores1;
        if (tmp50Result5) {
          tmp50Result5 = "HR" === stateFromStores1.countryCode;
        }
        if (tmp50Result5) {
          const str3 = stateFromStores1.currencyCode;
          tmp50Result5 = str3.toLowerCase() === memo1.EUR;
        }
        if (tmp50Result5) {
          const obj23 = { message: formatToPlainString(v9hnZoK, obj24) };
          const tmp2Result14 = tmp2(tmp3[66]);
          let intl4 = tmp5(tmp3[19]).intl;
          formatToPlainString = intl4.formatToPlainString;
          obj24 = { kunaPriceWithCurrency: tmp5Result32.formatPrice(stateFromStores1.price * callback1, memo1.HRK, obj16) };
          v9hnZoK = tmp5(tmp3[19]).t["9hnZoK"];
          let tmp66 = memo1;
          tmp5Result32 = tmp5(tmp3[25]);
          tmp50Result5 = tmp50(tmp2Result14, obj23);
        }
        items17 = [tmp50Result5, ];
        let str4 = "auto";
        let str5 = "auto";
        if (isPatchOrderLoading) {
          str5 = "none";
        }
        const obj25 = { pointerEvents: str5, accessibilityElementsHidden: isPatchOrderLoading, importantForAccessibility: str4, style: planOptionsBusy, children: tmp50(RadioGroup, obj26) };
        if (isPatchOrderLoading) {
          str4 = "no-hide-descendants";
        }
        planOptionsBusy = null;
        if (isPatchOrderLoading) {
          planOptionsBusy = tmp.planOptionsBusy;
        }
        let productId1;
        RadioGroup = tmp5(tmp3[67]).RadioGroup;
        if (first != null) {
          productId1 = first.productId;
        }
        let productId2;
        obj26 = {
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
        set = new Set(premiumItems.map((premiumTier) => premiumTier.premiumTier));
        react = set.size > 1;
        items17[1] = tmp50(closure_8, obj25);
        items15[1] = closure_36(tmp2Result13, obj22);
        if (tmp50Result6) {
          tmp50Result6 = premiumType === TIER_2.TIER_0;
        }
        if (tmp50Result6) {
          const obj27 = { style: tmp.profileWarning, children: tmp50(InlineNotice, obj28) };
          obj28 = { type: "warning", role: "none", title: intl5.string(tmp5(tmp3[19]).t.INiT2j), message: intl6.string(tmp5(tmp3[19]).t.HdDf7r), action: obj29 };
          InlineNotice = tmp5(tmp3[68]).InlineNotice;
          intl5 = tmp5(tmp3[19]).intl;
          intl6 = tmp5(tmp3[19]).intl;
          obj29 = {
            text: intl7.string(tmp5(tmp3[19]).t.NQWezR),
            onPress() {
                      let interval;
                      TIER_2 = TIER_2.TIER_2;
                      const tmp = closure_3;
                      if (first != null) {
                        interval = first.interval;
                      }
                      return tmp(TIER_2, interval);
                    },
            loading: stateFromStores || isPatchOrderLoading
          };
          intl7 = tmp5(tmp3[19]).intl;
          tmp50Result6 = tmp50(tmp56, obj27);
        }
        items15[2] = tmp50Result6;
        tmp51Result2 = tmp51(tmp56, obj17);
      }
      const items18 = [tmp51Result2, ];
      const obj30 = { isPaymentSuccess: tmp7, onClose: callback1, ctaText: memo1, onStartPayment: callback2, shouldUseMobileWebRedirectCheckout: result, disabled: tmp86, loading: stateFromStores };
      tmp86 = stateFromStores;
      const tmp85 = PremiumPlanSelectionActionSheetCTA;
      if (!stateFromStores) {
        tmp86 = isPatchOrderLoading;
      }
      if (!stateFromStores) {
        stateFromStores = isPatchOrderLoading;
      }
      const obj31 = { children: items18 };
      items18[1] = tmp50(tmp85, obj30);
      tmp51Result3 = tmp51(tmp52, obj31);
    }
    items19 = [tmp51Result3, ];
    const obj32 = { children: items11 };
    const tmp89 = !result && memo2;
    items19[1] = tmp89;
    items11[1] = closure_36(closure_8, obj10);
    const obj33 = { variant: "floating", onPress: callback1 };
    items11[2] = tmp50(tmp5(tmp3[63]).ActionSheetHeaderBar, obj33);
    tmp51Result = tmp51(tmp52, obj32);
  }
  return tmp50(BottomSheet, obj6);
}
let closure_3 = ["predicate", "initialSelectedCriteria", "initialSelectedInterval", "sortFn"];
let react = react_mod;
({ View: metroImportAll, ActivityIndicator: c9 } = react_native2);
let useNativeCheckoutStore = NativeCheckoutStore.useNativeCheckoutStore;
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
let obj = { body: { padding: 16 }, headerText: { paddingTop: 30, paddingHorizontal: 20 }, contentSelectPlan: { marginBottom: 16 }, profileWarning: obj2, contentActivated: { alignItems: "center", paddingTop: 40, paddingBottom: 56 }, contentActivatedText: { width: 328, marginTop: 16, textAlign: "center" }, formTitle: { paddingTop: 0, paddingLeft: 0 }, formSectionBody: { backgroundColor: "none" }, formSectionBodyWithNoTitle: { marginTop: -24 }, planOptionRowContainer: { paddingHorizontal: 10 }, planOptionsBusy: { opacity: 0.5 }, planOptionContainer: { display: "flex", flexDirection: "row", alignItems: "center" }, planOptionPriceContainer: { flexGrow: 1, flexShrink: 1, display: "flex", flexDirection: "column", alignItems: "flex-end" }, planOptionDiscountContainer: { display: "flex", flexDirection: "row", flexShrink: 1 }, planOptionDiscount: obj3, planOptionDiscountWhite: obj4, planOptionDiscountText: { textTransform: "uppercase" }, blockedPaymentContainer: { marginVertical: 40 }, legalDisclaimerText: { marginTop: 16 }, divider: size, offerDividerMargin: { marginBottom: 8 }, trialDisclaimer: { marginBottom: 8 }, discountDisclaimer: { marginBottom: 20 }, loadingIndicator: { marginVertical: 30 }, discountSubTextContainer: { alignItems: "flex-end" }, priceText: { flexShrink: 1 } };
obj2 = { marginTop: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
obj3 = { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.unsafe_rawColors.GREEN_360, paddingVertical: 2, paddingHorizontal: 8, marginRight: 8 };
obj4 = { backgroundColor: nativeDefault.colors.WHITE };
size = { height: 1, width: "100%", backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
let closure_38 = createStyles(obj);
class PremiumPlanSelectionActionSheetWithOrderCTX {
  constructor(predicate) {
    let GOOGLE;
    let closure_1;
    let mapped;
    let obj4;
    let obj7;
    let premiumBundlesWithPredicate;
    let sortFn;
    let tmp4;
    let tmpResult10;
    _require = predicate;
    let tmp = _require;
    const NitroACOMSubscriptionExperiment = require("ACOMExperiments").NitroACOMSubscriptionExperiment;
    const enabled = NitroACOMSubscriptionExperiment.useConfig({ location: "PremiumPlanSelectionActionSheetWithOrderCTX" }).enabled;
    let obj = require("PlatformUtils");
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
    importDefault = react.useRef(null);
    const effect = react.useEffect(() => {
      let ref;
      return () => {
        const current = ref.current;
        if (null != current) {
          const obj = ref(dependencyMap[45]);
          obj.openLazy(() => Promise.resolve(closure_1_44), closure_2_24, current);
        }
      };
    }, []);
    let fn = predicate.predicate;
    if (undefined === fn) {
      TIER_2 = predicate.premiumType;
      if (TIER_2 == null) {
        TIER_2 = closure_19.TIER_2;
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
    ({ initialSelectedInterval: dependencyMap, sortFn } = predicate);
    if (undefined === sortFn) {
      sortFn = (interval, interval2) => interval2.interval - interval.interval;
    }
    const tmp8 = _objectWithoutProperties(predicate, closure_3);
    const tmpResult = tmp(9137);
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
    const tmpResult6 = tmp(9162);
    const isEligibleForBogoOffer = tmpResult6.useIsEligibleForBogoOffer();
    if (null == sortFn) {
      const tmpResult7 = tmp(9152);
      premiumBundlesWithPredicate = tmpResult7.getPremiumBundlesWithPredicate(fn);
    } else {
      const tmpResult8 = tmp(9152);
      const premiumBundlesWithPredicate1 = tmpResult8.getPremiumBundlesWithPredicate(fn);
      premiumBundlesWithPredicate = premiumBundlesWithPredicate1.sort(sortFn);
    }
    if (isEligibleForBogoOffer) {
      fn2 = (interval) => interval.interval === constants.MONTH;
    }
    let found = premiumBundlesWithPredicate.find((interval) => interval.interval === dependencyMap);
    if (found == null) {
      found = premiumBundlesWithPredicate.find(fn2);
    }
    if (null != found) {
      const tmpResult9 = tmp(9152);
      const subscriptionItemsForProduct = tmpResult9.getSubscriptionItemsForProduct(found.productId);
      mapped = subscriptionItemsForProduct.map((planId) => {
        let castPremiumSubscriptionAsSkuId;
        let obj2;
        const obj = { subscriptionPlanId: planId.planId, skuId: castPremiumSubscriptionAsSkuId(obj2.getSkuIdForPlan(planId.planId)), quantity: planId.quantity };
        castPremiumSubscriptionAsSkuId = predicate(dependencyMap[17]).castPremiumSubscriptionAsSkuId;
        predicate(dependencyMap[17]);
        obj2 = closure_1(dependencyMap[17]);
        return obj;
      });
    } else {
      const obj5 = { subscriptionPlanId: closure_21.PREMIUM_YEAR_TIER_2, skuId: tmpResult10.castPremiumSubscriptionAsSkuId(TIER_2.TIER_2), quantity: 1 };
      mapped = [obj5];
      tmpResult10 = tmp(2174);
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
        const obj = closure_1(dependencyMap[45]);
        return obj.hideActionSheet(closure_1_24);
      },
      children: closure_35(PremiumPlanSelectionActionSheet, obj7)
    };
    obj7 = {
      onSwitchPremiumType(premiumType, initialSelectedInterval) {
        const obj = { premiumType, predicate: undefined, initialSelectedInterval };
        const merged = Object.assign(predicate);
        closure_1.current = obj;
        const obj2 = ActionSheetActionCreatorsDefault;
        obj2.hideActionSheet(closure_24);
      },
      premiumItems: premiumBundlesWithPredicate,
      userIsEligibleForBogoPromotion: isEligibleForBogoOffer,
      initialSelectedItem: found
    };
    const tmp18 = NativeCheckoutStoreProviderDefault;
    let merged = Object.assign(tmp8);
    return closure_35(tmp18, obj6);
  }
}
size = size_mod;
let result = size.fileFinishedImporting("modules/premium/native/PremiumPlanSelectionActionSheet.tsx");

export default PremiumPlanSelectionActionSheetWithOrderCTX;
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
