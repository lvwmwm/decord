// Module ID: 15295
// Function ID: 15296
// Name: SimpleRequestOTPActionSheet
// Dependencies: [5, 32, 19, 17, 1372, 5822, 1074, 1374, 21, 3, 1613, 10162, 504, 10508, 6961, 1970, 8668, 10480, 4800, 5204, 6974, 5279, 4832, 5919, 5281, 10289, 1255, 10126, 6571, 10282, 2]
// Exports: default

// Module 15295 (SimpleRequestOTPActionSheet)
import LoggerDefault from "Logger" /* 3 */;
import react_native from "react-native" /* 17 */;
import Constants from "Constants" /* 1074 */;
import PremiumConstants from "PremiumConstants" /* 1374 */;
import PremiumTypeUtils from "PremiumTypeUtils" /* 1970 */;
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 6961 */;
import CollectiblesUtils from "CollectiblesUtils" /* 6974 */;
import PremiumAnalyticsUtils from "PremiumAnalyticsUtils" /* 10126 */;
import NativePaymentContext from "NativePaymentContext" /* 10282 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import UserStore from "UserStore" /* 1372 */;
import SKUStore from "SKUStore" /* 5822 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c4, dependencyMap, ref;

let closure_12;
let unpackModuleId;
function GiftPurchaseSKUView(selectedSkuId) {
  let _undefined;
  let closure_2;
  let closure_4;
  let first;
  let giftMessage;
  let giftRecipientId;
  let items7;
  let items8;
  let items9;
  let logger;
  let obj10;
  let obj7;
  let tmp16;
  let tmp17;
  const f101556 = () => {
    let items;
    if (null == c5) {
      items = ["Loading...", "Loading..."];
    } else {
      items = [, ];
      obj = CollectiblesUtils;
      items[0] = obj.getFormattedPriceForCollectiblesProduct(c5, true, true);
      const obj2 = CollectiblesUtils;
      items[1] = obj2.getFormattedPriceForCollectiblesProduct(c5, false, true);
    }
    return items;
  };
  selectedSkuId = selectedSkuId.selectedSkuId;
  ({ giftRecipientId, giftMessage } = selectedSkuId);
  first = undefined;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  react = undefined;
  let memo1;
  let closure_8;
  let obj = function _submitGiftPurchase() {
    let length;
    obj = _asyncToGenerator(async (arg0, value) => {
      let closure_1;
      if (1 === c4) {
        let c3 = 0;
        let message = closure_2;
        logger.warn("Error creating gift purchase:", message);
        message = undefined;
        const show = tmp(closure_2[19]).show;
        const tmp14 = tmp(closure_2[19]);
        if (message != null) {
          message = message.message;
        }
        if (!message) {
          const _JSON = JSON;
          message = JSON.stringify(message);
        }
        const obj9 = { title: "Gift Purchase Failed", body: "Error: " + message };
        const _HermesInternal = HermesInternal;
        show(obj9);
      } else if (arg0 === 1) {
        let c5 = 3;
        throw value;
      } else if (arg0 === 2) {
        c3 = 0;
        c5 = 3;
        obj = { value, done: true };
        return obj;
      } else {
        c3 = 0;
      }
      await "HermesInternal";
      message = tmp4;
      if (null == _undefined) {
        logger.error("Cannot proceed with purchase: collectibleProduct is undefined");
        const obj6 = tmp(closure_2[19]);
        obj6.show({ title: "Product Not Found", body: "The product information could not be loaded. Please try again." });
      }
      if (null != _undefined.googleSkuIds) {
        if (0 !== length.length) {
          c4 = 2;
          c5 = 1;
          const obj7 = { value: closure_2_8(), done: false };
          return obj7;
        }
      }
      const _HermesInternal2 = HermesInternal;
      logger.error("No Google SKU IDs available for product " + _undefined.skuId);
      const obj4 = tmp(closure_2[19]);
      obj4.show({ title: "Product Not Available", body: "This product is not available for purchase on Google Play." });
    });
    return obj(...arguments);
  };
  let tmp = first;
  let tmp2 = dependencyMap;
  const rect = first(1613)();
  obj = react;
  const tmp3 = _slicedToArray;
  [first, dependencyMap] = react.useState(false);
  const currentUser = memo1.getCurrentUser();
  _slicedToArray = react.useRef({});
  let obj2 = selectedSkuId(10162);
  const giftStyle = obj2.useNativeGiftContext().giftStyle;
  let obj3 = selectedSkuId(504);
  let items = [closure_8];
  const stateFromStores = obj3.useStateFromStores(items, () => SKUStore.get(selectedSkuId));
  let obj4 = selectedSkuId(10508);
  const fetchCollectiblesProduct = obj4.useFetchCollectiblesProduct(selectedSkuId);
  const product = fetchCollectiblesProduct.product;
  react = product;
  let isFetching = fetchCollectiblesProduct.isFetching;
  const items1 = [selectedSkuId];
  const effect = react.useEffect(() => {
    if (null != selectedSkuId) {
      obj = CollectiblesActionCreators;
      const collectiblesProduct = obj.fetchCollectiblesProduct(tmp);
    }
  }, items1);
  const items2 = [product, currentUser, selectedSkuId];
  const memo = react.useMemo(() => {
    if (null != _undefined) {
      if (null != _undefined.googleSkuIds) {
        let tmp2;
        let values;
        const googleSkuIds = tmp.googleSkuIds;
        obj = PremiumTypeUtils;
        if (obj.isPremium(currentUser, PremiumTypes.TIER_2)) {
          tmp2 = googleSkuIds[tmp10.MOBILE_PREMIUM_TIER_2];
        } else {
          tmp2 = googleSkuIds[tmp10.MOBILE];
        }
        if (null == tmp2) {
          const items = [tmp2];
          values = items;
        } else {
          const _Object = Object;
          values = Object.values(tmp.googleSkuIds);
        }
        return values;
      }
    }
    logger.warn("No googleSkuIds available for product: " + selectedSkuId);
    return [];
  }, items2);
  const items3 = [memo];
  memo1 = react.useMemo(() => {
    const sorted = memo.sort();
    return sorted.join(",");
  }, items3);
  const items4 = [memo, first, memo1];
  const effect1 = react.useEffect(() => {
    function loadGoogleSkus() {
      return obj(...arguments);
    }
    obj = function _loadGoogleSkus() {
      obj = _asyncToGenerator(async (arg0, value) => {
        let obj2;
        if (c5 === 2) {
          c5 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj3 = { value, done: true };
            return obj3;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          let c3;
          try {
            let closure_0;
            c5 = 2;
            if (0 === ref) {
              if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c5 = 3;
                const obj4 = { value, done: true };
                return obj4;
              } else {
                let closure_1 = tmp;
                closure_0 = tmp4;
                if (null == closure_1_7) {
                  if (0 !== length.length) {
                    const tmp25 = closure_1;
                    if (!tmp25) {
                      tmp30(true);
                      c3 = 1;
                      ref = 2;
                      c5 = 1;
                      const obj5 = { value: obj2.loadInAppSkus(tmp24), done: false };
                      obj2 = closure_2_0(closure_2_2[16]);
                      return obj5;
                    }
                  }
                }
              }
            } else if (1 === ref) {
              c3 = 0;
              closure_0 = tmp30;
              logger.error("Unable to fetch product IDs from Google Play store:", closure_0);
              tmp30(false);
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              c5 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              if (null != closure_1_7) {
                ref.current[closure_1_7] = true;
              }
              tmp30(false);
              c3 = 0;
            }
            c5 = 3;
            return { value: "HermesInternal", done: null };
          } catch (tmp30) {
            if (0 === c3) {
              c5 = 3;
              throw tmp30;
            } else {
              ref = 1;
            }
          }
        }
      });
      return obj(...arguments);
    };
    const tmp = !loadGoogleSkus();
  }, items4);
  let tmp14 = product;
  if (null == product) {
    let obj5 = { skuId: selectedSkuId, googleSkuIds: {} };
    tmp14 = obj5;
  }
  let obj6 = {
    product: tmp14,
    onPurchaseComplete() {
      obj = first(closure_2[18]);
      obj.hideActionSheet();
    },
    onPurchaseError() {
      logger.error("Purchase error occurred");
    },
    onPurchasePending() {
      logger.info("Purchase is pending");
    },
    giftParams: obj7
  };
  obj7 = { isGift: true, options: { recipient_id: giftRecipientId, custom_message: giftMessage, gift_style: giftStyle } };
  closure_8 = tmp(10480)(obj6);
  const items5 = [product];
  [tmp16, tmp17] = tmp3(obj.useMemo(f101556, items5), 2);
  tmp3(obj.useMemo(f101556, items5), 2);
  if (!isFetching) {
    isFetching = first;
  }
  if (!isFetching) {
    isFetching = null == product;
  }
  const obj8 = { spacing: 24, style: { paddingTop: rect.top, paddingBottom: rect.bottom, paddingHorizontal: 12 }, children: items7 };
  const Stack = tmp7(5279).Stack;
  let name;
  const Text = tmp7(4832).Text;
  if (stateFromStores != null) {
    name = stateFromStores.name;
  }
  const items6 = ["Gifting ", name, " to ", giftRecipientId, " ", "\n", "Regular price: ", tmp17, " ", "\n", "Premium price: ", tmp16, " ", "\n"];
  let str = "No message";
  if (null != giftMessage) {
    str = "No message";
    if ("" !== giftMessage) {
      let _HermesInternal = HermesInternal;
      str = "Message: " + giftMessage;
    }
  }
  items6[14] = str;
  items7 = [tmp18(Text, { variant: "text-md/medium", color: "text-overlay-light", children: items6 }), , ];
  const Card = tmp7(5919).Card;
  let str4 = "Send Gift";
  const Button = tmp7(5281).Button;
  if (isFetching) {
    str4 = "Loading...";
  }
  let obj9 = { children: tmp21(Button, obj10) };
  obj10 = {
    variant: "primary",
    text: str4,
    onPress: function submitGiftPurchase() {
      return obj(...arguments);
    },
    disabled: isFetching
  };
  items7[1] = closure_12(Card, obj9);
  const obj11 = { children: items9 };
  const Card2 = tmp7(5919).Card;
  const obj12 = { variant: "text-md/medium", color: "text-overlay-light", children: items8 };
  items8 = ["Select style: ", giftStyle];
  items9 = [tmp18(tmp7(4832).Text, obj12), tmp21(tmp(10289), {})];
  items7[2] = closure_11(Card2, obj11);
  return closure_11(Stack, obj8);
}
function SimpleRequestOTPActionSheet(giftMessage) {
  let analyticsLoadId;
  let giftRecipientId;
  let items1;
  let obj3;
  let requestType;
  let selectedSkuId;
  ({ selectedSkuId, requestType, giftRecipientId } = giftMessage);
  _require = undefined;
  giftMessage = giftMessage.giftMessage;
  let obj = require("v1");
  const v4Result = obj.v4();
  _require = v4Result;
  [][0] = v4Result;
  if ("giftSku" === requestType) {
    if (null != selectedSkuId) {
      let tmp6Result;
      let tmp8;
      if (null != giftRecipientId) {
        let obj2 = {
          basePurchaseAnalytics: tmp4,
          onClose() {

                },
          setCurrentAnalyticsStep() {

                },
          children: closure_12(GiftPurchaseSKUView, obj3)
        };
        obj3 = { selectedSkuId, giftRecipientId, giftMessage };
        const NativeGiftContextProvider = tmp(10162).NativeGiftContextProvider;
        tmp6Result = closure_12(NativeGiftContextProvider, obj2);
        tmp8 = closure_12;
      }
      const obj4 = { children: tmp6Result };
      return tmp8(require("Sheet/BottomSheet").BottomSheet, obj4);
    }
  }
  tmp8 = closure_12;
  const items = [closure_12(require("Text/Text").Text, { variant: "text-lg/bold", color: "text-feedback-warning", children: "Gift purchasing is the only supported feature on Android in this version." }), ];
  let str = "none";
  const Text = tmp(4832).Text;
  const tmp7 = View;
  if (null != requestType) {
    str = requestType;
  }
  const obj6 = { variant: "text-md/normal", color: "text-feedback-warning", children: items1 };
  items1 = ["Request type: ", str];
  const obj5 = { children: items };
  items[1] = closure_11(Text, obj6);
  tmp6Result = tmp6(tmp7, obj5);
}
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
const View = react_native.View;
let closure_9 = Constants.PriceSetAssignmentPurchaseTypes;
const PremiumTypes = PremiumConstants.PremiumTypes;
({ jsxs: unpackModuleId, jsx: closure_12 } = Fragment);
let tmp3 = new LoggerDefault("PaymentFlowTest.android");
let closure_13 = tmp3;
const result = size.fileFinishedImporting("modules/billing/native/otp/SimpleRequestOTPActionSheet.tsx");

export default function SimpleCreateOTPActionSheetWrapper(arg0) {
  let obj2;
  const obj = { skuIDs: [], activeSubscription: null, children: closure_12(SimpleRequestOTPActionSheet, obj2) };
  obj2 = {};
  const NativePaymentContextProvider = NativePaymentContext.NativePaymentContextProvider;
  const merged = Object.assign(arg0);
  return closure_12(NativePaymentContextProvider, obj);
};
