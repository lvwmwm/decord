// Module ID: 10843
// Function ID: 84197
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: createSocialLayerStorefrontProductDetailsEmbed, useFetchSocialLayerStorefrontProductDetailsEmbedData

// Module 10843 (_createForOfIteratorHelperLoose)
function _createForOfIteratorHelperLoose(@@iterator) {
  let arg1 = Symbol_iterator;
  @@iterator = "undefined" !== typeof Symbol;
  if (Symbol_iterator) {
    const _Symbol = Symbol;
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (!Symbol_iterator) {
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (Symbol_iterator) {
    const iter = Symbol_iterator.call(Symbol_iterator);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = Symbol_iterator;
    if (!Array.isArray(Symbol_iterator)) {
      let tmp2;
      if (Symbol_iterator) {
        if ("string" === typeof Symbol_iterator) {
          tmp2 = _arrayLikeToArray(Symbol_iterator, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(Symbol_iterator).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = Symbol_iterator.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(Symbol_iterator, undefined);
              } else {
                const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(Symbol_iterator);
          const callResult = toString.call(Symbol_iterator);
          const tmp3 = "Object" === substr && Symbol_iterator.constructor;
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
      arg1 = tmp;
    }
    let closure_1 = 0;
    return () => {
      if (closure_1 >= tmp.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = tmp[+closure_1];
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
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
const PaymentGateways = arg1(dependencyMap[4]).PaymentGateways;
const InviteTypes = arg1(dependencyMap[5]).InviteTypes;
const result = arg1(dependencyMap[20]).fileFinishedImporting("modules/slayer_storefront/native/createSocialLayerStorefrontProductDetailsEmbed.tsx");

export const createSocialLayerStorefrontProductDetailsEmbed = function createSocialLayerStorefrontProductDetailsEmbed(theme) {
  let baseColors;
  let colors;
  let guildOrApplication;
  let skuId;
  ({ skuId, guildOrApplication } = theme);
  ({ colors, baseColors } = importDefault(dependencyMap[6])(theme.theme));
  const value = closure_6.get(skuId);
  let applicationId;
  if (null != value) {
    applicationId = value.applicationId;
  }
  const application = closure_5.getApplication(applicationId);
  const isFetchingResult = closure_6.isFetching(skuId);
  let result = null != applicationId;
  const tmp = importDefault(dependencyMap[6])(theme.theme);
  if (result) {
    result = closure_5.isFetchingApplication(applicationId);
  }
  let result1 = null != applicationId;
  if (result1) {
    result1 = closure_5.didFetchingApplicationFail(applicationId);
  }
  let name;
  if (null != application) {
    name = application.name;
  }
  if (null == name) {
    const intl = arg1(dependencyMap[7]).intl;
    let str = intl.string(arg1(dependencyMap[7]).t.vyaWs7);
    name = str.toUpperCase();
  }
  if (!isFetchingResult) {
    if (null == value) {
      return null;
    } else {
      if (null != application) {
        if (importDefault(dependencyMap[8])(application)) {
          if ("guild" !== guildOrApplication.type) {
            const result2 = arg1(dependencyMap[9]).isSlayerSkuAvailableOnThisPlatform(value);
            const obj2 = arg1(dependencyMap[9]);
            const str4 = arg1(dependencyMap[10]).getCardImageURL(value);
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
            const intl2 = arg1(dependencyMap[7]).intl;
            obj["subtitle"] = intl2.string(arg1(dependencyMap[7]).t.V91tvy);
            obj["subtitleColor"] = colors.subtitleColor;
            obj["thumbnailUrl"] = tmp17;
            obj["thumbnailBackgroundColor"] = colors.thumbnailBackgroundColor;
            const intl3 = arg1(dependencyMap[7]).intl;
            const string = intl3.string;
            if (result2) {
              let stringResult = string(arg1(tmp24[7]).t.boqtTA);
            } else {
              stringResult = string(importDefault(tmp24[11]).BKf0MM);
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
  const arg1 = stateFromStores;
  const isEligibleForSocialLayerStorefrontMobilePurchasing = arg1(dependencyMap[12]).useIsEligibleForSocialLayerStorefrontMobilePurchasing({ location: "use_fetch_social_layer_storefront_product_details_embed_data" });
  const importDefault = isEligibleForSocialLayerStorefrontMobilePurchasing;
  const obj = arg1(dependencyMap[12]);
  const storeFront = importDefault(dependencyMap[13]).useNativeIAPPayments().storeFront;
  let country;
  if (null != storeFront) {
    country = storeFront.country;
  }
  const dependencyMap = country;
  const items = [isEligibleForSocialLayerStorefrontMobilePurchasing, stateFromStores];
  const tmp3 = callback(React.useMemo(() => {
    const items = [];
    const items1 = [, ];
    if (isEligibleForSocialLayerStorefrontMobilePurchasing) {
      items1[0] = items;
      items1[1] = [];
      let reduced = arg0.reduce((arg0, codedLinks) => {
        let arr;
        let arr2;
        let code;
        let iter2;
        let type;
        [arr, arr2] = arg0;
        const tmp = callback(codedLinks.codedLinks);
        let iter = tmp();
        if (!iter.done) {
          do {
            ({ type, code } = iter.value);
            let tmp2 = closure_0;
            let tmp3 = closure_2;
            if (type === closure_0(closure_2[14]).CodedLinkType.SOCIAL_LAYER_STOREFRONT) {
              arr = arr.push(code.split("-"));
            } else {
              let tmp4 = closure_0;
              let tmp5 = closure_2;
              if (type === closure_0(closure_2[14]).CodedLinkType.SOCIAL_LAYER_STOREFRONT_APP) {
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
  const first = tmp3[0];
  const callback = first;
  const React = tmp5;
  const items1 = [first, tmp3[1], country];
  const effect = React.useEffect(() => {
    let first;
    let iter2;
    let iter4;
    let tmp5;
    const tmp = callback(first);
    let iter = tmp();
    if (!iter.done) {
      do {
        let tmp2 = closure_3;
        let tmp3 = closure_3(iter.value, 2);
        first = tmp3[0];
        tmp5 = closure_6;
        let isFetchingResult = null != closure_6.get(first);
        if (!isFetchingResult) {
          let tmp7 = closure_6;
          isFetchingResult = closure_6.isFetching(first);
        }
        if (!isFetchingResult) {
          let tmp8 = closure_6;
          isFetchingResult = closure_6.didFetchingSkuFail(first);
        }
        if (!isFetchingResult) {
          let tmp9 = closure_0;
          let tmp10 = closure_2;
          let obj = closure_0(closure_2[15]);
          obj = {};
          let obj3 = closure_0(closure_2[16]);
          obj.withGoogleSkuIds = obj3.isAndroid();
          let tmp11 = closure_2;
          obj.countryCode = closure_2;
          let obj4 = closure_0(closure_2[16]);
          let APPLE;
          if (obj4.isIOS()) {
            let tmp13 = closure_7;
            APPLE = closure_7.APPLE;
          }
          obj.paymentGateway = APPLE;
          let socialLayerStorefrontSku = obj.fetchSocialLayerStorefrontSku(tmp3[1], first, obj);
        }
        iter2 = tmp();
        iter = iter2;
      } while (!iter2.done);
    }
    const tmp15 = callback(tmp5);
    let iter3 = tmp15();
    if (!iter3.done) {
      do {
        let tmp16 = closure_3;
        let tmp17 = closure_3(iter3.value, 2);
        let first1 = tmp17[0];
        let tmp19 = closure_6;
        let isFetchingResult1 = null != closure_6.get(first1);
        if (!isFetchingResult1) {
          let tmp21 = closure_6;
          isFetchingResult1 = closure_6.isFetching(first1);
        }
        if (!isFetchingResult1) {
          let tmp22 = closure_6;
          isFetchingResult1 = closure_6.didFetchingSkuFail(first1);
        }
        if (!isFetchingResult1) {
          let tmp23 = closure_0;
          let tmp24 = closure_2;
          let obj5 = closure_0(closure_2[15]);
          obj = {};
          let obj7 = closure_0(closure_2[16]);
          obj.withGoogleSkuIds = obj7.isAndroid();
          let tmp25 = closure_2;
          obj.countryCode = closure_2;
          let obj8 = closure_0(closure_2[16]);
          let APPLE1;
          if (obj8.isIOS()) {
            let tmp27 = closure_7;
            APPLE1 = closure_7.APPLE;
          }
          obj.paymentGateway = APPLE1;
          let socialLayerStorefrontSkuForApplication = obj5.fetchSocialLayerStorefrontSkuForApplication(tmp17[1], first1, obj);
        }
        iter4 = tmp15();
        iter3 = iter4;
      } while (!iter4.done);
    }
  }, items1);
  const obj2 = importDefault(dependencyMap[13]);
  const items2 = [closure_6];
  const items3 = [tmp3[1], first];
  const stateFromStoresArray = arg1(dependencyMap[17]).useStateFromStoresArray(items2, () => {
    const items = [
      ...closure_3.map((arg0) => {
        let tmp;
        [tmp] = arg0;
        return store.get(tmp);
      }),
      ...closure_4.map((arg0) => {
        let tmp;
        [tmp] = arg0;
        return store.get(tmp);
      })
    ];
    const found = items.filter(arg0(country[18]).isNotNullish);
    const items1 = [...new Set(found.map((applicationId) => applicationId.applicationId))];
    return items1;
  }, items3);
  importDefault(dependencyMap[19])(stateFromStoresArray);
};
