// Module ID: 7519
// Function ID: 59956
// Name: BuyNitroPurchaseButton
// Dependencies: [57, 31, 27, 5619, 1851, 33, 4130, 5482, 6644, 1212, 477, 7520, 5450, 7156, 7430, 566, 5462, 4471, 4543, 7521, 7522, 2]
// Exports: default

// Module 7519 (BuyNitroPurchaseButton)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { PremiumTypes } from "GuildFeatures";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_8;
let closure_9;
const require = arg1;
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
let closure_10 = _createForOfIteratorHelperLoose.createStyles({ container: { width: "100%" }, buttonStack: { width: "100%" }, hiddenFlow: { position: "absolute", width: 0, height: 0, overflow: "hidden", opacity: 0 } });
let result = require("get ActivityIndicator").fileFinishedImporting("modules/premium_marketing/native/components/purchase_button/BuyNitroPurchaseButton.tsx");

export default function BuyNitroPurchaseButton(sourceAnalyticsLocations) {
  let _location;
  let applicationId;
  let c5;
  let onHostSheetClose;
  let onPaymentDismiss;
  let onPaymentSuccess;
  let planSelection;
  let tmp26;
  ({ planSelection, location: _location } = sourceAnalyticsLocations);
  ({ onPaymentSuccess, onPaymentDismiss } = sourceAnalyticsLocations);
  if (_location === undefined) {
    _location = priceStringByProductId(applyOrderPriceOverride[7]).PREMIUM_MARKETING_FOOTER;
  }
  let prop = sourceAnalyticsLocations.sourceAnalyticsLocations;
  let selection;
  priceStringByProductId = undefined;
  applyOrderPriceOverride = undefined;
  let first;
  let React;
  c5 = undefined;
  let _isNativeReflectConstruct;
  let callback;
  ({ applicationId, onHostSheetClose } = sourceAnalyticsLocations);
  const tmp3 = callback2();
  selection = planSelection.selection;
  priceStringByProductId = planSelection.priceStringByProductId;
  applyOrderPriceOverride = planSelection.applyOrderPriceOverride;
  let obj = selection(applyOrderPriceOverride[8]);
  const result = obj.isMobileWebRedirectCheckoutEnabled();
  if (result) {
    const intl4 = selection(applyOrderPriceOverride[9]).intl;
    let stringResult = intl4.string(selection(applyOrderPriceOverride[9]).t.rylrdY);
  } else if (selection.isTrial) {
    const intl3 = selection(applyOrderPriceOverride[9]).intl;
    let obj2 = selection(applyOrderPriceOverride[10]);
    const t = selection(applyOrderPriceOverride[9]).t;
    intl3.string(obj2.isAndroid() ? t.rKD72m : t.bboTul);
    const isAndroidResult = obj2.isAndroid();
  } else if (null != selection.priceString) {
    let intl2 = selection(applyOrderPriceOverride[9]).intl;
    obj = { rate: selection.priceString };
    stringResult = intl2.formatToPlainString(selection(applyOrderPriceOverride[9]).t.i4T8vz, obj);
  } else {
    let intl = selection(applyOrderPriceOverride[9]).intl;
    stringResult = intl.string(selection(applyOrderPriceOverride[9]).t.uuzaAK);
  }
  const item = selection.item;
  let premiumTier;
  if (null != item) {
    premiumTier = item.premiumTier;
  }
  let str = "experimental_premium-primary";
  if (premiumTier === callback.TIER_0) {
    str = "experimental_premium-basic";
  }
  let obj3 = selection(applyOrderPriceOverride[11]);
  const buyNitroButtonCrossfade = obj3.useBuyNitroButtonCrossfade(str, stringResult);
  const outgoing = buyNitroButtonCrossfade.outgoing;
  const tmp21 = priceStringByProductId(applyOrderPriceOverride[12])(() => selection(applyOrderPriceOverride[13]).getNewAnalyticsLoadId());
  const tmp23 = first(React.useState(null), 2);
  first = tmp23[0];
  React = tmp23[1];
  const ref = React.useRef(false);
  [tmp26, c5] = first(React.useState(null), 2);
  _isNativeReflectConstruct = React.useRef(first);
  const items = [first];
  const effect = React.useEffect(() => {
    _isNativeReflectConstruct.current = first;
  }, items);
  const effect1 = React.useEffect(() => () => {
    if (null != outer1_6.current) {
      const BuyNitroPurchaseLock = selection(applyOrderPriceOverride[14]).BuyNitroPurchaseLock;
      BuyNitroPurchaseLock.end();
    }
  }, []);
  let obj4 = selection(applyOrderPriceOverride[15]);
  const items1 = [_isNativeReflectConstruct];
  let stateFromStores = null != first;
  if (!stateFromStores) {
    stateFromStores = obj4.useStateFromStores(items1, () => busy.isBusy());
  }
  let obj5 = selection(applyOrderPriceOverride[14]);
  let isBuyNitroPurchaseBlocked = stateFromStores;
  if (!stateFromStores) {
    isBuyNitroPurchaseBlocked = obj5.useIsBuyNitroPurchaseBlocked();
  }
  if (!isBuyNitroPurchaseBlocked) {
    isBuyNitroPurchaseBlocked = !result && null == selection.priceString;
    const tmp31 = !result && null == selection.priceString;
  }
  const tmp25 = first(React.useState(null), 2);
  if (null == prop) {
    prop = [];
  }
  callback = React.useCallback(() => {
    callback(null);
    _undefined(null);
    const BuyNitroPurchaseLock = selection(applyOrderPriceOverride[14]).BuyNitroPurchaseLock;
    BuyNitroPurchaseLock.end();
  }, []);
  const items2 = [selection.item, applyOrderPriceOverride, callback];
  const items3 = [selection.item, priceStringByProductId];
  const callback1 = React.useCallback((arg0) => {
    if (null != selection.item) {
      applyOrderPriceOverride(selection.item.productId, arg0);
    }
    let obj = priceStringByProductId(applyOrderPriceOverride[17]);
    obj = {};
    const intl = selection(applyOrderPriceOverride[9]).intl;
    obj.title = intl.string(selection(applyOrderPriceOverride[9]).t["2DyOxw"]);
    const intl2 = selection(applyOrderPriceOverride[9]).intl;
    obj.body = intl2.string(selection(applyOrderPriceOverride[9]).t["Xr94E+"]);
    obj.hideActionSheet = false;
    obj.show(obj);
    callback();
  }, items2);
  obj = { style: tmp3.container };
  const obj1 = { style: tmp3.buttonStack };
  callback2 = React.useCallback(() => {
    let beginResult = null != selection.item;
    if (beginResult) {
      const BuyNitroPurchaseLock = selection(applyOrderPriceOverride[14]).BuyNitroPurchaseLock;
      beginResult = BuyNitroPurchaseLock.begin();
    }
    if (beginResult) {
      const value = priceStringByProductId.get(selection.item.productId);
      let tmp8 = null;
      if (null != value) {
        tmp8 = value;
      }
      c5(tmp8);
      callback(selection.item);
      const tmp4 = c5;
    }
  }, items3);
  obj2 = { text: stringResult, variant: str, size: "lg", grow: true, onPress: callback2, loading: stateFromStores, disabled: isBuyNitroPurchaseBlocked };
  const items4 = [callback(selection(applyOrderPriceOverride[18]).Button, obj2), ];
  let tmp38 = null != outgoing;
  if (tmp38) {
    obj3 = { snapshot: outgoing.snapshot, onDone: buyNitroButtonCrossfade.onOutgoingDone };
    tmp38 = callback(priceStringByProductId(applyOrderPriceOverride[11]), obj3, outgoing.key);
  }
  items4[1] = tmp38;
  obj1.children = items4;
  const items5 = [closure_9(c5, obj1), , ];
  let tmp42 = !result;
  if (tmp42) {
    obj4 = { item: selection.item, ctaText: stringResult };
    ({ isTrial: obj11.isTrial, isDiscounted: obj11.isDiscounted } = selection);
    tmp42 = callback(priceStringByProductId(applyOrderPriceOverride[19]), obj4);
  }
  items5[1] = tmp42;
  let tmp46 = null != first;
  if (tmp46) {
    obj5 = { style: tmp3.hiddenFlow, pointerEvents: "none" };
    const obj6 = { item: first, analyticsLocations: tmp32(prop, _location, priceStringByProductId(applyOrderPriceOverride[7]).PREMIUM_PAYMENT_ACTION_SHEET).analyticsLocations, analyticsLoadId: tmp21, hasEmittedPaymentFlowStartedRef: ref, applicationId, expectedPriceString: tmp26, onExit: callback, onOrderPriceMismatch: callback1, onHostSheetClose, onPaymentSuccess, onPaymentDismiss };
    obj5.children = callback(priceStringByProductId(applyOrderPriceOverride[20]), obj6);
    tmp46 = callback(c5, obj5);
  }
  items5[2] = tmp46;
  obj.children = items5;
  return closure_9(c5, obj);
};
