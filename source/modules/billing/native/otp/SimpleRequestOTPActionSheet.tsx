// Module ID: 14540
// Function ID: 109528
// Name: GiftPurchaseSKUView
// Dependencies: []
// Exports: default

// Module 14540 (GiftPurchaseSKUView)
function GiftPurchaseSKUView(selectedSkuId) {
  let giftMessage;
  let giftRecipientId;
  let tmp12;
  let tmp13;
  selectedSkuId = selectedSkuId.selectedSkuId;
  const arg1 = selectedSkuId;
  ({ giftRecipientId, giftMessage } = selectedSkuId);
  let React;
  let View;
  let closure_8;
  function _submitGiftPurchase() {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = currentUser(tmp);
    const _submitGiftPurchase = obj;
    return obj(...arguments);
  }
  const rect = importDefault(closure_2[10])();
  const tmp = callback(React.useState(false), 2);
  const first = tmp[0];
  const importDefault = first;
  closure_2 = tmp[1];
  let currentUser = currentUser.getCurrentUser();
  let closure_3 = currentUser;
  const callback = React.useRef({});
  let obj = arg1(closure_2[11]);
  const giftStyle = obj.useNativeGiftContext().giftStyle;
  let obj1 = arg1(closure_2[12]);
  const items = [closure_8];
  const stateFromStores = obj1.useStateFromStores(items, () => closure_8.get(selectedSkuId));
  let obj2 = arg1(closure_2[13]);
  const fetchCollectiblesProduct = obj2.useFetchCollectiblesProduct(selectedSkuId);
  const product = fetchCollectiblesProduct.product;
  React = product;
  let isFetching = fetchCollectiblesProduct.isFetching;
  const items1 = [selectedSkuId];
  const effect = React.useEffect(() => {
    if (null != selectedSkuId) {
      const collectiblesProduct = selectedSkuId(closure_2[14]).fetchCollectiblesProduct(selectedSkuId);
      const obj = selectedSkuId(closure_2[14]);
    }
  }, items1);
  const items2 = [product, currentUser, selectedSkuId];
  const memo = React.useMemo(() => {
    if (null != product) {
      if (null != product.googleSkuIds) {
        const googleSkuIds = product.googleSkuIds;
        if (obj.isPremium(currentUser, TIER_2.TIER_2)) {
          let tmp = googleSkuIds[tmp12.MOBILE_PREMIUM_TIER_2];
        } else {
          tmp = googleSkuIds[tmp12.MOBILE];
        }
        if (null == tmp) {
          const items = [tmp];
          let values = items;
        } else {
          const _Object = Object;
          values = Object.values(product.googleSkuIds);
        }
        return values;
      }
    }
    closure_13.warn("No googleSkuIds available for product: " + selectedSkuId);
    return [];
  }, items2);
  View = memo;
  const items3 = [memo];
  const memo1 = React.useMemo(() => {
    const sorted = memo.sort();
    return sorted.join(",");
  }, items3);
  currentUser = memo1;
  const items4 = [memo, first, memo1];
  const effect1 = React.useEffect(() => {
    function _loadGoogleSkus() {
      // CreateGeneratorClosureLongIndex (0x67)
      const obj = callback(tmp);
      const _loadGoogleSkus = obj;
      return obj(...arguments);
    }
    !function loadGoogleSkus() {
      return _loadGoogleSkus(...arguments);
    }();
  }, items4);
  let tmp10 = product;
  if (null == product) {
    obj = { skuId: selectedSkuId, googleSkuIds: {} };
    tmp10 = obj;
  }
  obj = {
    product: tmp10,
    onPurchaseComplete() {
      first(closure_2[18]).hideActionSheet();
    },
    onPurchaseError() {
      closure_13.error("Purchase error occurred");
    },
    onPurchasePending() {
      closure_13.info("Purchase is pending");
    },
    giftParams: { isGift: true, options: { recipient_id: giftRecipientId, custom_message: giftMessage, gift_style: giftStyle } }
  };
  closure_8 = importDefault(closure_2[17])(obj);
  const items5 = [product];
  [tmp12, tmp13] = callback(React.useMemo(() => {
    if (null == product) {
      let items = [];
    } else {
      items = [selectedSkuId(closure_2[20]).getFormattedPriceForCollectiblesProduct(product, true, true), ];
      const obj = selectedSkuId(closure_2[20]);
      items[1] = selectedSkuId(closure_2[20]).getFormattedPriceForCollectiblesProduct(product, false, true);
      const obj2 = selectedSkuId(closure_2[20]);
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
  const obj3 = {};
  let name;
  if (null != stateFromStores) {
    name = stateFromStores.name;
  }
  const items6 = [null, name, " to ", giftRecipientId, " ", "\n", "Regular price: ", tmp13, " ", "\n", "Premium price: ", tmp12, " ", "\n"];
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
  const items7 = [callback2(arg1(closure_2[22]).Text, obj3), , ];
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
  obj4.children = callback3(arg1(closure_2[24]).Button, obj5);
  items7[1] = callback3(arg1(closure_2[23]).Card, obj4);
  const obj6 = {};
  const items8 = [null, giftStyle];
  const items9 = [callback2(arg1(closure_2[22]).Text, { children: items8 }), callback3(importDefault(closure_2[25]), {})];
  obj6.children = items9;
  items7[2] = callback2(arg1(closure_2[23]).Card, obj6);
  obj1.children = items7;
  return callback2(arg1(closure_2[21]).Stack, obj1);
}
function SimpleRequestOTPActionSheet(giftMessage) {
  let giftRecipientId;
  let requestType;
  let selectedSkuId;
  ({ selectedSkuId, requestType, giftRecipientId } = giftMessage);
  let obj = arg1(dependencyMap[26]);
  const v4Result = obj.v4();
  const arg1 = v4Result;
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
        let tmp4Result = callback3(arg1(dependencyMap[11]).NativeGiftContextProvider, obj);
      }
      const obj1 = { children: tmp4Result };
      return callback3(arg1(dependencyMap[28]).BottomSheet, obj1);
    }
  }
  const obj2 = {};
  const items = [callback3(arg1(dependencyMap[22]).Text, {}), ];
  const obj3 = {};
  let str = "none";
  if (null != requestType) {
    str = requestType;
  }
  const items1 = [null, str];
  obj3.children = items1;
  items[1] = closure_11(arg1(dependencyMap[22]).Text, obj3);
  obj2.children = items;
  tmp4Result = closure_11(View, obj2);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importAll(dependencyMap[2]);
const View = arg1(dependencyMap[3]).View;
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = arg1(dependencyMap[6]).PriceSetAssignmentPurchaseTypes;
const PremiumTypes = arg1(dependencyMap[7]).PremiumTypes;
({ jsxs: closure_11, jsx: closure_12 } = arg1(dependencyMap[8]));
let importDefaultResult = importDefault(dependencyMap[9]);
importDefaultResult = new importDefaultResult("PaymentFlowTest.android");
const tmp2 = arg1(dependencyMap[8]);
const result = arg1(dependencyMap[30]).fileFinishedImporting("modules/billing/native/otp/SimpleRequestOTPActionSheet.tsx");

export default function SimpleCreateOTPActionSheetWrapper(arg0) {
  let obj = { skuIDs: [], activeSubscription: null };
  obj = {};
  const merged = Object.assign(arg0);
  obj.children = callback3(SimpleRequestOTPActionSheet, obj);
  return callback3(arg1(dependencyMap[29]).NativePaymentContextProvider, obj);
};
