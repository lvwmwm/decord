// Module ID: 14665
// Function ID: 111763
// Name: GiftPurchaseSKUView
// Dependencies: [5, 57, 31, 27, 1849, 4175, 653, 1851, 33, 3, 1557, 8809, 566, 8206, 6773, 1872, 7160, 11817, 4098, 4471, 6786, 4541, 4126, 5167, 4543, 8782, 491, 7156, 5187, 8769, 2]
// Exports: default

// Module 14665 (GiftPurchaseSKUView)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _slicedToArray from "_slicedToArray";
import result from "result";
import { View } from "getBaseAnalyticsFields";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import { PriceSetAssignmentPurchaseTypes as closure_9 } from "ME";
import { PremiumTypes } from "GuildFeatures";
import jsxProd from "jsxProd";
import importDefaultResult from "get ActivityIndicator";

let closure_11;
let closure_12;
let require = arg1;
function GiftPurchaseSKUView(selectedSkuId) {
  let giftMessage;
  let giftRecipientId;
  let tmp12;
  let tmp13;
  selectedSkuId = selectedSkuId.selectedSkuId;
  ({ giftRecipientId, giftMessage } = selectedSkuId);
  let React;
  let memo;
  let closure_8;
  function _submitGiftPurchase() {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = currentUser(tmp);
    return obj(...arguments);
  }
  const rect = first(1557)();
  let tmp = callback(React.useState(false), 2);
  first = tmp[0];
  const dependencyMap = tmp[1];
  const currentUser = memo1.getCurrentUser();
  callback = React.useRef({});
  let obj = selectedSkuId(8809);
  const giftStyle = obj.useNativeGiftContext().giftStyle;
  let obj1 = selectedSkuId(566);
  let items = [closure_8];
  const stateFromStores = obj1.useStateFromStores(items, () => closure_8.get(selectedSkuId));
  let obj2 = selectedSkuId(8206);
  const fetchCollectiblesProduct = obj2.useFetchCollectiblesProduct(selectedSkuId);
  const product = fetchCollectiblesProduct.product;
  React = product;
  let isFetching = fetchCollectiblesProduct.isFetching;
  const items1 = [selectedSkuId];
  const effect = React.useEffect(() => {
    if (null != selectedSkuId) {
      const collectiblesProduct = selectedSkuId(6773).fetchCollectiblesProduct(selectedSkuId);
      const obj = selectedSkuId(6773);
    }
  }, items1);
  const items2 = [product, currentUser, selectedSkuId];
  memo = React.useMemo(() => {
    if (null != _undefined) {
      if (null != _undefined.googleSkuIds) {
        const googleSkuIds = _undefined.googleSkuIds;
        if (obj.isPremium(currentUser, outer1_10.TIER_2)) {
          let tmp = googleSkuIds[tmp12.MOBILE_PREMIUM_TIER_2];
        } else {
          tmp = googleSkuIds[tmp12.MOBILE];
        }
        if (null == tmp) {
          const items = [tmp];
          let values = items;
        } else {
          const _Object = Object;
          values = Object.values(_undefined.googleSkuIds);
        }
        return values;
      }
    }
    outer1_13.warn("No googleSkuIds available for product: " + selectedSkuId);
    return [];
  }, items2);
  const items3 = [memo];
  memo1 = React.useMemo(() => {
    const sorted = memo.sort();
    return sorted.join(",");
  }, items3);
  const items4 = [memo, first, memo1];
  const effect1 = React.useEffect(() => {
    function _loadGoogleSkus() {
      // CreateGeneratorClosureLongIndex (0x67)
      const obj = currentUser(tmp);
      return obj(...arguments);
    }
    !(function loadGoogleSkus() {
      return _loadGoogleSkus(...arguments);
    })();
  }, items4);
  let tmp10 = product;
  if (null == product) {
    obj = { skuId: selectedSkuId, googleSkuIds: {} };
    tmp10 = obj;
  }
  obj = {
    product: tmp10,
    onPurchaseComplete() {
      first(4098).hideActionSheet();
    },
    onPurchaseError() {
      outer1_13.error("Purchase error occurred");
    },
    onPurchasePending() {
      outer1_13.info("Purchase is pending");
    },
    giftParams: { isGift: true, options: { recipient_id: giftRecipientId, custom_message: giftMessage, gift_style: giftStyle } }
  };
  closure_8 = first(11817)(obj);
  const items5 = [product];
  [tmp12, tmp13] = callback(React.useMemo(() => {
    if (null == c5) {
      let items = ["Loading...", "Loading..."];
    } else {
      items = [selectedSkuId(6786).getFormattedPriceForCollectiblesProduct(c5, true, true), ];
      const obj = selectedSkuId(6786);
      items[1] = selectedSkuId(6786).getFormattedPriceForCollectiblesProduct(c5, false, true);
      const obj2 = selectedSkuId(6786);
    }
    return items;
  }, items5), 2);
  if (!isFetching) {
    isFetching = first;
  }
  if (!isFetching) {
    isFetching = null == product;
  }
  obj1 = { spacing: 24, style: obj2 };
  obj2 = { paddingTop: rect.top, paddingBottom: rect.bottom, paddingHorizontal: 12 };
  const obj3 = { variant: "text-md/medium", color: "text-overlay-light" };
  let name;
  if (null != stateFromStores) {
    name = stateFromStores.name;
  }
  const items6 = ["Gifting ", name, " to ", giftRecipientId, " ", "\n", "Regular price: ", tmp13, " ", "\n", "Premium price: ", tmp12, " ", "\n"];
  let str = "No message";
  if (null != giftMessage) {
    str = "No message";
    if ("" !== giftMessage) {
      const _HermesInternal = HermesInternal;
      str = "Message: " + giftMessage;
    }
  }
  items6[14] = str;
  obj3.children = items6;
  const items7 = [callback2(selectedSkuId(4126).Text, obj3), , ];
  const obj4 = {};
  const obj5 = { variant: "primary" };
  let str4 = "Send Gift";
  if (isFetching) {
    str4 = "Loading...";
  }
  obj5.text = str4;
  obj5.onPress = function submitGiftPurchase() {
    return _submitGiftPurchase(...arguments);
  };
  obj5.disabled = isFetching;
  obj4.children = callback3(selectedSkuId(4543).Button, obj5);
  items7[1] = callback3(selectedSkuId(5167).Card, obj4);
  const obj6 = {};
  const obj7 = { variant: "text-md/medium", color: "text-overlay-light" };
  const items8 = ["Select style: ", giftStyle];
  obj7.children = items8;
  const items9 = [callback2(selectedSkuId(4126).Text, obj7), callback3(first(8782), {})];
  obj6.children = items9;
  items7[2] = callback2(selectedSkuId(5167).Card, obj6);
  obj1.children = items7;
  return callback2(selectedSkuId(4541).Stack, obj1);
}
function SimpleRequestOTPActionSheet(giftMessage) {
  let giftRecipientId;
  let requestType;
  let selectedSkuId;
  ({ selectedSkuId, requestType, giftRecipientId } = giftMessage);
  let obj = require(491) /* v1 */;
  const v4Result = obj.v4();
  require = v4Result;
  [][0] = v4Result;
  if ("giftSku" === requestType) {
    if (null != selectedSkuId) {
      if (null != giftRecipientId) {
        obj = {
          basePurchaseAnalytics: tmp2,
          onClose() {

                },
          setCurrentAnalyticsStep(PLAN_SELECT) {

                }
        };
        obj = { selectedSkuId, giftRecipientId, giftMessage: giftMessage.giftMessage };
        obj.children = callback3(GiftPurchaseSKUView, obj);
        let tmp4Result = callback3(require(8809) /* importDefaultResult1 */.NativeGiftContextProvider, obj);
      }
      const obj1 = { children: tmp4Result };
      return callback3(require(5187) /* Background */.BottomSheet, obj1);
    }
  }
  const obj2 = {};
  const items = [callback3(require(4126) /* Text */.Text, { variant: "text-lg/bold", color: "text-feedback-warning", children: "Gift purchasing is the only supported feature on Android in this version." }), ];
  const obj3 = { variant: "text-md/normal", color: "text-feedback-warning" };
  let str = "none";
  if (null != requestType) {
    str = requestType;
  }
  const items1 = ["Request type: ", str];
  obj3.children = items1;
  items[1] = closure_11(require(4126) /* Text */.Text, obj3);
  obj2.children = items;
  tmp4Result = closure_11(View, obj2);
}
({ jsxs: closure_11, jsx: closure_12 } = jsxProd);
importDefaultResult = new importDefaultResult("PaymentFlowTest.android");
const result = require("result").fileFinishedImporting("modules/billing/native/otp/SimpleRequestOTPActionSheet.tsx");

export default function SimpleCreateOTPActionSheetWrapper(arg0) {
  let obj = { skuIDs: [], activeSubscription: null };
  obj = {};
  const merged = Object.assign(arg0);
  obj.children = callback3(SimpleRequestOTPActionSheet, obj);
  return callback3(require(8769) /* NativePaymentContextProvider */.NativePaymentContextProvider, obj);
};
