// Module ID: 10854
// Function ID: 84270
// Name: _createForOfIteratorHelperLoose
// Dependencies: [57, 31, 4167, 4175, 653, 6979, 7633, 1212, 10855, 5615, 5611, 3104, 7791, 8002, 4119, 7459, 478, 566, 1327, 5470, 2]
// Exports: createSocialLayerStorefrontProductDetailsEmbed, useFetchSocialLayerStorefrontProductDetailsEmbedData

// Module 10854 (_createForOfIteratorHelperLoose)
import _slicedToArray from "_slicedToArray";
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import { PaymentGateways } from "ME";
import { InviteTypes } from "InviteSendStates";

const require = arg1;
function _createForOfIteratorHelperLoose(iterable) {
  let closure_0 = iterable;
  iterable = "undefined" !== typeof Symbol;
  if (iterable) {
    const _Symbol = Symbol;
    iterable = iterable[Symbol.iterator];
  }
  if (!iterable) {
    iterable = iterable[Symbol.iterator];
  }
  if (iterable) {
    const iter = iterable.call(iterable);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = iterable;
    if (!Array.isArray(iterable)) {
      let tmp2;
      if (iterable) {
        if ("string" === typeof iterable) {
          tmp2 = _arrayLikeToArray(iterable, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(iterable).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(iterable, undefined);
              } else {
                let obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(iterable);
          const callResult = toString.call(iterable);
          tmp3 = "Object" === substr && iterable.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      closure_0 = tmp;
    }
    let c1 = 0;
    return () => {
      if (closure_1 >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = length[+closure_1];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/slayer_storefront/native/createSocialLayerStorefrontProductDetailsEmbed.tsx");

export const createSocialLayerStorefrontProductDetailsEmbed = function createSocialLayerStorefrontProductDetailsEmbed(theme) {
  let baseColors;
  let colors;
  let guildOrApplication;
  let skuId;
  ({ skuId, guildOrApplication } = theme);
  ({ colors, baseColors } = importDefault(7633)(theme.theme));
  const value = closure_6.get(skuId);
  let applicationId;
  if (null != value) {
    applicationId = value.applicationId;
  }
  const application = _isNativeReflectConstruct.getApplication(applicationId);
  const isFetchingResult = closure_6.isFetching(skuId);
  let result = null != applicationId;
  const tmp = importDefault(7633)(theme.theme);
  if (result) {
    result = _isNativeReflectConstruct.isFetchingApplication(applicationId);
  }
  let result1 = null != applicationId;
  if (result1) {
    result1 = _isNativeReflectConstruct.didFetchingApplicationFail(applicationId);
  }
  let name;
  if (null != application) {
    name = application.name;
  }
  if (null == name) {
    const intl = require(1212) /* getSystemLocale */.intl;
    let str = intl.string(require(1212) /* getSystemLocale */.t.vyaWs7);
    name = str.toUpperCase();
  }
  if (!isFetchingResult) {
    if (null == value) {
      return null;
    } else {
      if (null != application) {
        if (importDefault(10855)(application)) {
          if ("guild" !== guildOrApplication.type) {
            const result2 = require(5615) /* transformStorefrontSKUPricesServer */.isSlayerSkuAvailableOnThisPlatform(value);
            const obj2 = require(5615) /* transformStorefrontSKUPricesServer */;
            const str4 = require(5611) /* _createForOfIteratorHelperLoose */.getCardImageURL(value);
            str = undefined;
            if (null != str4) {
              str = str4.toString();
            }
            if (null == str) {
              str = application.getIconURL(64);
            }
            let tmp17;
            if (null != str) {
              tmp17 = str;
            }
            let obj = {};
            const merged = Object.assign(baseColors);
            obj["headerText"] = name;
            obj["headerColor"] = colors.headerColor;
            obj["titleText"] = value.name;
            obj["titleColor"] = colors.titleColor;
            const intl2 = require(1212) /* getSystemLocale */.intl;
            obj["subtitle"] = intl2.string(require(1212) /* getSystemLocale */.t.V91tvy);
            obj["subtitleColor"] = colors.subtitleColor;
            obj["thumbnailUrl"] = tmp17;
            obj["thumbnailBackgroundColor"] = colors.thumbnailBackgroundColor;
            const intl3 = require(1212) /* getSystemLocale */.intl;
            const string = intl3.string;
            if (result2) {
              let stringResult = string(require(1212) /* getSystemLocale */.t.boqtTA);
            } else {
              stringResult = string(importDefault(3104).BKf0MM);
            }
            obj["acceptLabelText"] = stringResult;
            let prop;
            if (result2) {
              prop = colors.acceptLabelGreenColor;
            }
            obj["acceptLabelColor"] = prop;
            obj["acceptLabelBackgroundColor"] = result2 ? colors.acceptLabelGreenBackgroundColor : colors.acceptBlurpleLabelBackgroundColor;
            obj["embedCanBeTapped"] = true;
            obj["canBeAccepted"] = true;
            obj["type"] = InviteTypes.GUILD;
            return obj;
          }
        }
      }
      return null;
    }
  }
  obj = {};
  const merged1 = Object.assign(baseColors);
  obj["headerText"] = name;
  obj["resolvingGradientEnd"] = colors.resolvingGradientEnd;
  obj["resolvingGradientStart"] = colors.resolvingGradientStart;
  obj["type"] = InviteTypes.GUILD;
  return obj;
};
export const useFetchSocialLayerStorefrontProductDetailsEmbedData = function useFetchSocialLayerStorefrontProductDetailsEmbedData(stateFromStores) {
  const _require = stateFromStores;
  const isEligibleForSocialLayerStorefrontMobilePurchasing = _require(country[12]).useIsEligibleForSocialLayerStorefrontMobilePurchasing({ location: "use_fetch_social_layer_storefront_product_details_embed_data" });
  let obj = _require(country[12]);
  const storeFront = isEligibleForSocialLayerStorefrontMobilePurchasing(country[13]).useNativeIAPPayments().storeFront;
  country = undefined;
  if (null != storeFront) {
    country = storeFront.country;
  }
  let items = [isEligibleForSocialLayerStorefrontMobilePurchasing, stateFromStores];
  let tmp3 = first(React.useMemo(() => {
    let items = [];
    const items1 = [, ];
    if (isEligibleForSocialLayerStorefrontMobilePurchasing) {
      items1[0] = items;
      items1[1] = [];
      let reduced = stateFromStores.reduce((arg0, codedLinks) => {
        let arr;
        let arr2;
        let code;
        let iter2;
        let type;
        [arr, arr2] = arg0;
        const tmp = outer2_9(codedLinks.codedLinks);
        let iter = tmp();
        if (!iter.done) {
          do {
            ({ type, code } = iter.value);
            let tmp2 = callback;
            let tmp3 = country;
            if (type === callback(country[14]).CodedLinkType.SOCIAL_LAYER_STOREFRONT) {
              arr = arr.push(code.split("-"));
            } else {
              let tmp4 = callback;
              let tmp5 = country;
              if (type === callback(country[14]).CodedLinkType.SOCIAL_LAYER_STOREFRONT_APP) {
                arr = arr2.push(code.split("-"));
              }
            }
            iter2 = tmp();
            iter = iter2;
          } while (!iter2.done);
        }
        const items = [arr, arr2];
        return items;
      }, items1);
    } else {
      items1[0] = items;
      items1[1] = [];
      reduced = items1;
    }
    return reduced;
  }, items), 2);
  first = tmp3[0];
  React = tmp5;
  let items1 = [first, tmp3[1], country];
  const effect = React.useEffect(() => {
    let first;
    let iter2;
    let iter4;
    const tmp = outer1_9(first);
    let iter = tmp();
    if (!iter.done) {
      do {
        let tmp2 = first;
        let tmp3 = first(iter.value, 2);
        first = tmp3[0];
        let tmp5 = outer1_6;
        let isFetchingResult = null != outer1_6.get(first);
        if (!isFetchingResult) {
          let tmp7 = outer1_6;
          isFetchingResult = outer1_6.isFetching(first);
        }
        if (!isFetchingResult) {
          let tmp8 = outer1_6;
          isFetchingResult = outer1_6.didFetchingSkuFail(first);
        }
        if (!isFetchingResult) {
          let tmp9 = stateFromStores;
          let tmp10 = country;
          let obj = stateFromStores(country[15]);
          obj = {};
          let obj3 = stateFromStores(country[16]);
          obj.withGoogleSkuIds = obj3.isAndroid();
          let tmp11 = country;
          obj.countryCode = country;
          let obj4 = stateFromStores(country[16]);
          let APPLE;
          if (obj4.isIOS()) {
            let tmp13 = outer1_7;
            APPLE = outer1_7.APPLE;
          }
          obj.paymentGateway = APPLE;
          let socialLayerStorefrontSku = obj.fetchSocialLayerStorefrontSku(tmp3[1], first, obj);
        }
        iter2 = tmp();
        iter = iter2;
      } while (!iter2.done);
    }
    const tmp15 = outer1_9(result);
    let iter3 = tmp15();
    if (!iter3.done) {
      do {
        let tmp16 = first;
        let tmp17 = first(iter3.value, 2);
        let first1 = tmp17[0];
        let tmp19 = outer1_6;
        let isFetchingResult1 = null != outer1_6.get(first1);
        if (!isFetchingResult1) {
          let tmp21 = outer1_6;
          isFetchingResult1 = outer1_6.isFetching(first1);
        }
        if (!isFetchingResult1) {
          let tmp22 = outer1_6;
          isFetchingResult1 = outer1_6.didFetchingSkuFail(first1);
        }
        if (!isFetchingResult1) {
          let tmp23 = stateFromStores;
          let tmp24 = country;
          let obj5 = stateFromStores(country[15]);
          obj = {};
          let obj7 = stateFromStores(country[16]);
          obj.withGoogleSkuIds = obj7.isAndroid();
          let tmp25 = country;
          obj.countryCode = country;
          let obj8 = stateFromStores(country[16]);
          let APPLE1;
          if (obj8.isIOS()) {
            let tmp27 = outer1_7;
            APPLE1 = outer1_7.APPLE;
          }
          obj.paymentGateway = APPLE1;
          let socialLayerStorefrontSkuForApplication = obj5.fetchSocialLayerStorefrontSkuForApplication(tmp17[1], first1, obj);
        }
        iter4 = tmp15();
        iter3 = iter4;
      } while (!iter4.done);
    }
  }, items1);
  const obj2 = isEligibleForSocialLayerStorefrontMobilePurchasing(country[13]);
  const items2 = [closure_6];
  const items3 = [tmp3[1], first];
  const stateFromStoresArray = _require(country[17]).useStateFromStoresArray(items2, () => {
    const items = [
      ...first.map((arg0) => {
        let tmp;
        [tmp] = arg0;
        return outer2_6.get(tmp);
      }),
      ...result.map((arg0) => {
        let tmp;
        [tmp] = arg0;
        return outer2_6.get(tmp);
      })
    ];
    const found = items.filter(stateFromStores(country[18]).isNotNullish);
    const items1 = [...new Set(found.map((applicationId) => applicationId.applicationId))];
    return items1;
  }, items3);
  isEligibleForSocialLayerStorefrontMobilePurchasing(country[19])(stateFromStoresArray);
};
