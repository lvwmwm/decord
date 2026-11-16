// Module ID: 15502
// Function ID: 15503
// Name: OrbCheckoutModalContext
// Dependencies: [19, 9593, 21, 1269, 15503, 7256, 2]
// Exports: OrbCheckoutModalContextProvider, useOrbCheckoutModalContext, useOrbCheckoutModalContextProvider

// Module 15502 (OrbCheckoutModalContext)
import Fragment from "Fragment" /* 21 */;
import OrbCheckoutUtils from "OrbCheckoutUtils" /* 7256 */;
import OrbCheckoutHooks from "OrbCheckoutHooks" /* 15503 */;
import react from "react" /* 19 */;
import OrderRecord from "OrderRecord" /* 9593 */;
import v1_mod from "v1" /* 1269 */;
import size from "module_2" /* 2 */;

let c2;
let c3;
let v1;
({ useContext: c2, useMemo: c3 } = react);
const createContext = react.createContext;
const jsx = Fragment.jsx;
let obj = {
  skuId: "123",
  skuProductLine: null,
  skuApplicationId: "r",
  loadId: v1.v4(),
  analyticsLocations: [],
  analyticsSourceLocation: null,
  isRedeeming: null,
  isCreatingOrder: null,
  orbRedemptionError: false,
  orbCheckoutErrorMessage: null,
  orbProductContext: true,
  orbChargeAmount: null,
  isOrdersCheckout: 500,
  onRedeemVirtualCurrency() {

  }
};
v1 = v1_mod;
let closure_6 = createContext(obj);
let result = size.fileFinishedImporting("modules/virtual_currency/checkout/OrbCheckoutModalContext.tsx");

export function useOrbCheckoutModalContextProvider(arg0) {
  let isOrdersCheckout;
  let loadId;
  let onCheckoutSuccess;
  let onSignFailure;
  let orbProductContext;
  let order;
  let skuApplicationId;
  let skuId;
  let skuProductLine;
  ({ skuId, loadId, isOrdersCheckout } = arg0);
  ({ onCheckoutSuccess, onSignFailure, order } = arg0);
  if (isOrdersCheckout === undefined) {
    isOrdersCheckout = false;
  }
  const obj = OrbCheckoutHooks;
  const orbProductContext1 = obj.useOrbProductContext({ skuId, shouldCaptureExceptions: true });
  ({ orbProductContext, skuProductLine, skuApplicationId } = orbProductContext1);
  const obj2 = OrbCheckoutHooks;
  const orbCheckoutRedemption = obj2.useOrbCheckoutRedemption({ skuId, loadId, useOrdersAPI: isOrdersCheckout, onCheckoutSuccess, onSignFailure, order });
  return { skuId, skuProductLine, skuApplicationId, loadId, orbProductContext, onRedeemVirtualCurrency: orbCheckoutRedemption.onRedeemVirtualCurrency, isRedeeming: orbCheckoutRedemption.isRedeeming, orbRedemptionError: orbCheckoutRedemption.orbRedemptionError };
}
export function OrbCheckoutModalContextProvider(skuId) {
  let isRedeeming;
  let onCheckoutSuccess;
  let onRedeemVirtualCurrency;
  let onSignFailure;
  let orbProductContext;
  let orbRedemptionError;
  let skuApplicationId;
  let skuProductLine;
  let tmp7;
  skuId = skuId.skuId;
  const loadId = skuId.loadId;
  const analyticsSourceLocation = skuId.analyticsSourceLocation;
  const analyticsLocations = skuId.analyticsLocations;
  const order = skuId.order;
  let flag = skuId.isOrdersCheckout;
  ({ onCheckoutSuccess, onSignFailure } = skuId);
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = skuId.isCreatingOrder;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let createOrderError = skuId.createOrderError;
  if (createOrderError === undefined) {
    createOrderError = null;
  }
  onRedeemVirtualCurrency = undefined;
  isRedeeming = undefined;
  orbRedemptionError = undefined;
  skuProductLine = undefined;
  skuApplicationId = undefined;
  let obj3;
  let invoicePreview;
  orbProductContext = undefined;
  let orbPriceAmount;
  let orbCheckoutErrorMessage;
  let flag3 = flag;
  const children = skuId.children;
  if (flag === undefined) {
    flag3 = false;
  }
  let obj = skuId(loadId[4]);
  const orbProductContext1 = obj.useOrbProductContext({ skuId, shouldCaptureExceptions: true });
  ({ orbProductContext, skuProductLine, skuApplicationId } = orbProductContext1);
  let obj2 = skuId(loadId[4]);
  const orbCheckoutRedemption = obj2.useOrbCheckoutRedemption({ skuId, loadId, useOrdersAPI: flag3, onCheckoutSuccess, onSignFailure, order });
  ({ onRedeemVirtualCurrency, isRedeeming, orbRedemptionError } = orbCheckoutRedemption);
  let items = [order];
  obj3 = analyticsLocations(() => {
    let fromServer = null;
    if (null != order) {
      fromServer = OrderRecord.createFromServer(tmp);
    }
    return fromServer;
  }, items);
  invoicePreview = null;
  if (null != obj3) {
    invoicePreview = obj3.getInvoicePreview();
  }
  const items1 = [flag, orbProductContext, invoicePreview, skuId];
  const tmp4Result = analyticsLocations(() => {
    let tmp2;
    const tmp = flag;
    if (tmp) {
      let invoicePreviewLineItemUnitPriceForSku = null;
      const obj = invoicePreview;
      if (null != invoicePreview) {
        invoicePreviewLineItemUnitPriceForSku = obj.getInvoicePreviewLineItemUnitPriceForSku(skuId);
      }
      tmp2 = { orbPriceAmount: invoicePreviewLineItemUnitPriceForSku };
      const obj2 = { orbPriceAmount: invoicePreviewLineItemUnitPriceForSku };
    } else {
      tmp2 = orbProductContext;
    }
    return tmp2;
  }, items1);
  orbProductContext = tmp4Result;
  orbPriceAmount = null;
  if (flag) {
    let total = null;
    if (null != invoicePreview) {
      total = invoicePreview.total;
    }
    orbPriceAmount = total;
    tmp7 = total;
  } else {
    tmp7 = null;
    if (null != orbProductContext) {
      orbPriceAmount = orbProductContext.orbPriceAmount;
      tmp7 = orbPriceAmount;
    }
  }
  const items2 = [flag, orbRedemptionError, createOrderError, obj3];
  const tmp4Result2 = analyticsLocations(() => {
    const tmp = flag;
    if (tmp) {
      let result = null;
      const obj = obj3;
      if (null != obj3) {
        result = obj.firstUnsatisfiedConstraintReasonCode();
      }
      let tmp8 = createOrderError;
      const resolveOrbCheckoutErrorMessage = OrbCheckoutUtils.resolveOrbCheckoutErrorMessage;
      OrbCheckoutUtils;
      if (createOrderError == null) {
        tmp8 = orbRedemptionError;
      }
      return resolveOrbCheckoutErrorMessage(tmp8, result);
    } else {
      let message = null;
      if (null != orbRedemptionError) {
        message = orbRedemptionError.message;
      }
      return message;
    }
  }, items2);
  orbCheckoutErrorMessage = tmp4Result2;
  const items3 = [skuId, skuProductLine, skuApplicationId, loadId, analyticsLocations, analyticsSourceLocation, tmp4Result, tmp7, flag, onRedeemVirtualCurrency, isRedeeming, flag2, orbRedemptionError, tmp4Result2];
  const obj4 = {
    value: analyticsLocations(() => {
      let items;
      const obj = { skuId, skuProductLine, skuApplicationId, loadId, analyticsLocations: items, analyticsSourceLocation, orbProductContext, orbChargeAmount: orbPriceAmount, isOrdersCheckout: flag, onRedeemVirtualCurrency, isRedeeming, isCreatingOrder: flag2, orbRedemptionError, orbCheckoutErrorMessage };
      items = analyticsLocations;
      if (analyticsLocations == null) {
        items = [];
      }
      return obj;
    }, items3),
    children
  };
  return flag(flag2.Provider, obj4);
}
export function useOrbCheckoutModalContext() {
  return React2(closure_6);
}
