// Module ID: 13507
// Function ID: 13508
// Name: HeadlessCollectiblesPurchaseFlow
// Dependencies: [19, 1078, 1089, 21, 558, 568, 9509, 9151, 11345, 1368, 4463, 4757, 8482, 13508, 11157, 11139, 2]

// Module 13507 (HeadlessCollectiblesPurchaseFlow)
import c from "c" /* 568 */;
import PlatformUtils from "PlatformUtils" /* 1368 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4757 */;
import openProductDetailsActionSheet from "openProductDetailsActionSheet" /* 8482 */;
import useProductPurchaseState from "useProductPurchaseState" /* 9151 */;
import ACOMExperiments from "ACOMExperiments" /* 9509 */;
import NativePaymentContext from "NativePaymentContext" /* 11157 */;
import useCollectiblesExternalGatewayFacetDefault from "useCollectiblesExternalGatewayFacet" /* 11345 */;
import HeadlessCollectiblesPurchaseRunner from "HeadlessCollectiblesPurchaseRunner" /* 13508 */;
import noop from "module_19" /* 19 */;

const NativeCheckoutStoreProviderDefault = tmp5(11139);
require = fn;
const application_id = fn(1078).COLLECTIBLES_APPLICATION_ID;
const PaymentGateways = fn(1089).PaymentGateways;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/native/headless_components/HeadlessCollectiblesPurchaseFlow.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(25);
  ({ product, attempt, analyticsLocations, onBuy, onBuySettled, stageCollectibleChangeForEditProfile } = arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { location: "CollectiblesPurchaseFlow" };
    cResult[0] = obj2;
    let first = obj2;
  } else {
    first = cResult[0];
  }
  const OTPACOMOrderExperiment = tmp(9509).OTPACOMOrderExperiment;
  const enabled = OTPACOMOrderExperiment.useConfig(first).enabled;
  const isPurchased = useProductPurchaseState.useProductPurchaseState(product).isPurchased;
  const tmp6 = useCollectiblesExternalGatewayFacetDefault(product);
  const tmpResult = useProductPurchaseState;
  if (tmpResult3.isIOS()) {
    let GOOGLE = tmp7.APPLE_ADVANCED_COMMERCE;
    let tmp8 = tmp7;
  } else {
    GOOGLE = tmp7.GOOGLE;
    tmp8 = tmp7;
  }
  if (cResult[1] === isPurchased) {
    if (cResult[2] === enabled) {
      let tmp9 = cResult[3];
    }
    const _Symbol = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const items = [];
      cResult[4] = items;
      let tmp13 = items;
    } else {
      tmp13 = cResult[4];
    }
    if (cResult[5] !== product.skuId) {
      const items1 = [product.skuId];
      cResult[5] = product.skuId;
      cResult[6] = items1;
      let tmp14 = items1;
    } else {
      tmp14 = cResult[6];
    }
    const _Symbol2 = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      const fn = function b() {
        return ActionSheetActionCreatorsDefault.hideActionSheet(openProductDetailsActionSheet.PRODUCT_DETAILS_ACTION_SHEET_KEY);
      };
      cResult[7] = fn;
      let tmp15 = fn;
    } else {
      tmp15 = cResult[7];
    }
    if (cResult[8] === analyticsLocations) {
      if (cResult[9] === product.skuId) {
        let tmp16 = cResult[10];
      }
      if (cResult[11] === analyticsLocations) {
        if (cResult[12] === attempt) {
          if (cResult[13] === onBuy) {
            if (cResult[14] === onBuySettled) {
              if (cResult[15] === product) {
                if (cResult[16] === stageCollectibleChangeForEditProfile) {
                  let tmp18 = cResult[17];
                }
                if (cResult[18] === tmp6) {
                  if (cResult[19] === tmp9) {
                    if (cResult[20] === product.skuId) {
                      if (cResult[21] === tmp14) {
                        if (cResult[22] === tmp16) {
                          if (cResult[23] === tmp18) {
                            let tmp21 = cResult[24];
                          }
                          return tmp21;
                        }
                      }
                    }
                  }
                }
                const obj3 = { skuIDs: tmp13, activeSubscription: null, children: null };
                const obj4 = { headless: true, paymentGateway: GOOGLE, orderRequired: tmp9, skuIds: tmp14, isGift: false, activeSubscription: null, initialExternalGatewayFacet: tmp6, onOrderRetryCancellation: tmp15, checkoutAnalyticsFields: tmp16, children: tmp18 };
                obj3.children = jsx(NativeCheckoutStoreProviderDefault, { headless: true, paymentGateway: GOOGLE, orderRequired: tmp9, skuIds: tmp14, isGift: false, activeSubscription: null, initialExternalGatewayFacet: tmp6, onOrderRetryCancellation: tmp15, checkoutAnalyticsFields: tmp16, children: tmp18 }, product.skuId);
                const tmp23 = jsx(tmp(11157).NativePaymentContextProvider, { skuIDs: tmp13, activeSubscription: null, children: null });
                cResult[18] = tmp6;
                cResult[19] = tmp9;
                cResult[20] = product.skuId;
                cResult[21] = tmp14;
                cResult[22] = tmp16;
                cResult[23] = tmp18;
                cResult[24] = tmp23;
                tmp21 = tmp23;
              }
            }
          }
        }
      }
      const obj5 = { product, attempt, analyticsLocations, onBuy, onBuySettled, stageCollectibleChangeForEditProfile };
      const tmp20 = jsx(tmp(13508).HeadlessCollectiblesPurchaseRunner, { product, attempt, analyticsLocations, onBuy, onBuySettled, stageCollectibleChangeForEditProfile });
      cResult[11] = analyticsLocations;
      cResult[12] = attempt;
      cResult[13] = onBuy;
      cResult[14] = onBuySettled;
      cResult[15] = product;
      cResult[16] = stageCollectibleChangeForEditProfile;
      cResult[17] = tmp20;
      tmp18 = tmp20;
    }
    const obj6 = { is_gift: false, location_stack: analyticsLocations, payment_type: "sku", sku_id: product.skuId, application_id };
    cResult[8] = analyticsLocations;
    cResult[9] = product.skuId;
    cResult[10] = obj6;
    tmp16 = obj6;
  }
  let tmp10 = !isPurchased;
  if (!isPurchased) {
    let tmp11 = GOOGLE === tmp8.APPLE_ADVANCED_COMMERCE && enabled;
    if (!tmp11) {
      let result = GOOGLE === tmp8.GOOGLE;
      if (result) {
        result = tmp(4463).isGooglePlayBillingSupported();
        const tmpResult4 = tmp(4463);
      }
      tmp11 = result;
    }
    tmp10 = tmp11;
  }
  cResult[1] = isPurchased;
  cResult[2] = enabled;
  cResult[3] = tmp10;
  tmp9 = tmp10;
}) : ((arg0) => {
  ({ product, analyticsLocations } = arg0);
  ({ attempt, onBuy, onBuySettled, stageCollectibleChangeForEditProfile } = arg0);
  const OTPACOMOrderExperiment = ACOMExperiments.OTPACOMOrderExperiment;
  const isPurchased = useProductPurchaseState.useProductPurchaseState(product).isPurchased;
  const tmp4 = useCollectiblesExternalGatewayFacetDefault(product);
  if (obj2.isIOS()) {
    let GOOGLE = tmp5.APPLE_ADVANCED_COMMERCE;
    let tmp6 = tmp5;
  } else {
    GOOGLE = tmp5.GOOGLE;
    tmp6 = tmp5;
  }
  let tmp7 = !isPurchased;
  if (!isPurchased) {
    let tmp8 = GOOGLE === tmp6.APPLE_ADVANCED_COMMERCE && OTPACOMOrderExperiment.useConfig({ location: "CollectiblesPurchaseFlow" }).enabled;
    if (!tmp8) {
      let result = GOOGLE === tmp6.GOOGLE;
      if (result) {
        result = tmp(4463).isGooglePlayBillingSupported();
        const tmpResult = tmp(4463);
      }
      tmp8 = result;
    }
    tmp7 = tmp8;
  }
  const obj3 = { skuIDs: [], activeSubscription: null, children: null };
  const obj4 = {
    headless: true,
    paymentGateway: GOOGLE,
    orderRequired: tmp7,
    skuIds: null,
    isGift: false,
    activeSubscription: null,
    initialExternalGatewayFacet: tmp4,
    onOrderRetryCancellation() {
      return ActionSheetActionCreatorsDefault.hideActionSheet(openProductDetailsActionSheet.PRODUCT_DETAILS_ACTION_SHEET_KEY);
    },
    checkoutAnalyticsFields: { is_gift: false, location_stack: analyticsLocations, payment_type: "sku", sku_id: product.skuId, application_id },
    children: null
  };
  const items = [product.skuId];
  obj4.skuIds = items;
  obj2 = PlatformUtils;
  const obj5 = { is_gift: false, location_stack: analyticsLocations, payment_type: "sku", sku_id: product.skuId, application_id };
  obj4.children = jsx(HeadlessCollectiblesPurchaseRunner.HeadlessCollectiblesPurchaseRunner, { product, attempt, analyticsLocations, onBuy, onBuySettled, stageCollectibleChangeForEditProfile });
  obj3.children = jsx(NativeCheckoutStoreProviderDefault, {
    headless: true,
    paymentGateway: GOOGLE,
    orderRequired: tmp7,
    skuIds: null,
    isGift: false,
    activeSubscription: null,
    initialExternalGatewayFacet: tmp4,
    onOrderRetryCancellation() {
      return ActionSheetActionCreatorsDefault.hideActionSheet(openProductDetailsActionSheet.PRODUCT_DETAILS_ACTION_SHEET_KEY);
    },
    checkoutAnalyticsFields: { is_gift: false, location_stack: analyticsLocations, payment_type: "sku", sku_id: product.skuId, application_id },
    children: null
  }, product.skuId);
  return jsx(NativePaymentContext.NativePaymentContextProvider, { skuIDs: [], activeSubscription: null, children: null });
});
