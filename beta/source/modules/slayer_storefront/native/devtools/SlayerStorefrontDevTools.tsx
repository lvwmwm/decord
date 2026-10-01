// Module ID: 15321
// Function ID: 15322
// Name: SlayerStorefrontDevTools
// Dependencies: [32, 5, 19, 17, 1372, 5822, 6658, 1074, 21, 4836, 576, 1271, 6402, 504, 10263, 1364, 10262, 8668, 5279, 5999, 6024, 5917, 2]
// Exports: default

// Module 15321 (SlayerStorefrontDevTools)
import nativeDefault from "native" /* 576 */;
import HTTPUtils from "HTTPUtils" /* 1271 */;
import GPlayActionCreators from "GPlayActionCreators" /* 8668 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _asyncToGenerator_mod from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import UserStore from "UserStore" /* 1372 */;
import SKUStore from "SKUStore" /* 5822 */;
import IAPStore from "IAPStore" /* 6658 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c4, c5, c8, c9;

let closure_12;
let closure_14;
let map1;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let unpackModuleId;
let obj = function _describeStorefrontSkuFailure() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let closure_0 = arg0;
    let closure_1 = value;
    if (c9 === 2) {
      c9 = 3;
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
      let c7;
      try {
        let status;
        let body;
        let length;
        c9 = 2;
        if (0 === c8) {
          if (arg0 === 1) {
            c9 = 3;
            throw value;
          } else if (arg0 === 2) {
            c9 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_5 = tmp;
            let closure_4 = tmp4;
            closure_0 = undefined;
            status = undefined;
            body = undefined;
            length = undefined;
            c7 = 1;
            const result = unpackModuleId.SOCIAL_LAYER_APPLICATION_STOREFRONT_SKU_BY_APPLICATION_ID(closure_0, closure_1);
            const HTTP = HTTPUtils.HTTP;
            const obj5 = { url: result, rejectWithError: false };
            c8 = 2;
            c9 = 1;
            const obj6 = { value: HTTP.get(obj5), done: false };
            return obj6;
          }
        } else if (1 === c8) {
          let json;
          c7 = 0;
          let closure_2 = closure_6;
          if (closure_6 == null) {
            closure_2 = {};
          }
          closure_0 = closure_2;
          status = closure_0.status;
          body = closure_0.body;
          const obj2 = closure_133_0(closure_133_2[11]);
          length = obj2.stringifyErrors(body);
          let c3 = status;
          if (status == null) {
            c3 = "?";
          }
          const tmp17 = c3;
          if (length.length > 0) {
            json = length;
          } else {
            const _JSON = JSON;
            json = JSON.stringify(body);
          }
          const _HermesInternal = HermesInternal;
          c9 = 3;
          const obj7 = { value: "HTTP " + tmp17 + " \u00B7 " + json, done: true };
          return obj7;
        } else if (arg0 === 1) {
          c9 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 0;
          c9 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          c7 = 0;
          c9 = 3;
          return { value: "retry succeeded, but the SKU never landed in SKUStore", done: true };
        }
      } catch (tmp23) {
        closure_6 = tmp23;
        if (0 === c7) {
          c9 = 3;
          throw tmp23;
        } else {
          c8 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
let _asyncToGenerator = _asyncToGenerator_mod;
({ ScrollView: metroRequire, View: metroImportDefault } = react_native);
({ Endpoints: unpackModuleId, PriceSetAssignmentPurchaseTypes: closure_12 } = Constants);
({ jsx: map1, jsxs: closure_14 } = Fragment);
let createStyles = createStyles_mod;
obj = { wrap: obj2, inputRow: obj3 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, paddingHorizontal: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { padding: nativeDefault.space.PX_12 };
let closure_15 = createStyles(obj);
let result = size.fileFinishedImporting("modules/slayer_storefront/native/devtools/SlayerStorefrontDevTools.tsx");

export default function SlayerStorefrontDevTools() {
  let Stack;
  let TableRow;
  let closure_4;
  let currentUser;
  let first;
  let first1;
  let items11;
  let obj10;
  let obj11;
  let obj5;
  let stateFromStores;
  let stateFromStores2;
  let stateFromStores3;
  let str;
  let str2;
  let tmp25;
  let tmp6;
  let tmp8;
  let trimmed1;
  let tmp = closure_15();
  let tmp2 = trimmed1;
  const tmp3 = stateFromStores;
  obj = first1;
  const insets = trimmed1(stateFromStores[12])({ includeKeyboardHeight: true }).insets;
  const tmp4 = first;
  const tmp5 = first(first1.useState(""), 2);
  [str, tmp6] = tmp5;
  [str2, tmp8] = first(first1.useState(""), 2);
  const tmp7 = first(first1.useState(""), 2);
  const trimmed = str.trim();
  trimmed1 = str2.trim();
  let obj2 = trimmed(stateFromStores[13]);
  let items = [stateFromStores2];
  stateFromStores = obj2.useStateFromStores(items, () => {
    let value;
    if (trimmed.length > 0) {
      value = SKUStore.get(tmp);
    }
    return value;
  });
  const tmp11 = first(first1.useState(false), 2);
  first = tmp11[0];
  _asyncToGenerator = tmp11[1];
  const tmp13 = first(first1.useState(null), 2);
  first1 = tmp13[0];
  let closure_6 = tmp13[1];
  let obj3 = trimmed(stateFromStores[13]);
  const items1 = [c8];
  const stateFromStores1 = obj3.useStateFromStores(items1, () => currentUser.getCurrentUser());
  let tmp16;
  if (stateFromStores != null) {
    const googleSkuIds = stateFromStores.googleSkuIds;
    if (googleSkuIds != null) {
      tmp16 = googleSkuIds[constants.DEFAULT];
    }
  }
  if (tmp16 == null) {
    tmp16 = null;
  }
  c8 = tmp16;
  const items2 = [stateFromStores3];
  const items3 = [tmp16];
  const tmp9Result = trimmed(tmp3[13]);
  stateFromStores2 = tmp9Result.useStateFromStores(items2, () => {
    let product = null;
    if (null != c8) {
      product = IAPStore.getProduct(tmp);
    }
    return product;
  }, items3);
  const items4 = [stateFromStores3];
  const tmp9Result3 = trimmed(tmp3[13]);
  stateFromStores3 = tmp9Result3.useStateFromStores(items4, () => stateFromStores3.isReady());
  const useCallback = obj.useCallback;
  let closure_0 = _asyncToGenerator(async (arg0, value) => {
    let obj5;
    let v2;
    function describeStorefrontSkuFailure() {
      return closure_1_16(...arguments);
    }
    closure_0 = arg0;
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_3 = tmp4;
            let closure_2 = tmp;
            const tmp18 = 0 !== closure_0.length && 0 !== closure_1.length;
            if (tmp18) {
              closure_1_6(null);
              c4(true);
              const obj4 = { withGoogleSkuIds: obj5.isAndroid() };
              const fetchSocialLayerStorefrontSkuForApplication = closure_0(stateFromStores[14]).fetchSocialLayerStorefrontSkuForApplication;
              const tmp26 = closure_0(stateFromStores[14]);
              obj5 = closure_0(stateFromStores[15]);
              c4 = 1;
              c5 = 1;
              const obj6 = { value: fetchSocialLayerStorefrontSkuForApplication(closure_1, closure_0, obj4), done: false };
              return obj6;
            }
          }
        } else if (1 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else {
            c4(false);
            if (null != stateFromStores2.get(closure_0)) {
              closure_0(closure_0);
            } else {
              closure_1 = closure_1_6;
              c4 = 2;
              c5 = 1;
              const obj8 = { value: describeStorefrontSkuFailure(closure_1, closure_0), done: false };
              return obj8;
            }
          }
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_1(value);
        }
        c5 = 3;
        return { value: "HermesInternal", done: null };
      } catch (tmp29) {
        c5 = 3;
        throw tmp29;
      }
    }
  });
  const items5 = [trimmed, trimmed1];
  const callback = useCallback(function() {
    return closure_0(...arguments);
  }, items5);
  const items6 = [callback];
  const items7 = [callback];
  const callback1 = obj.useCallback(() => {
    callback((skuId) => {
      obj = trimmed(stateFromStores[16]);
      const obj2 = { skuId };
      const result = obj.openSocialLayerStorefrontProductDetailsModal(obj2);
    });
  }, items6);
  const items8 = [callback, stateFromStores1];
  const callback2 = obj.useCallback(() => {
    callback((skuId) => {
      obj = trimmed(stateFromStores[16]);
      const obj2 = { skuId };
      const result = obj.openSocialLayerStorefrontProductSelfPurchaseSuccessModal(obj2);
    });
  }, items7);
  const callback3 = obj.useCallback(() => {
    const tmp = callback((skuId) => {
      let tmp2;
      obj = { skuId, recipient: tmp2 };
      const openSocialLayerStorefrontProductGiftPurchaseSuccessModal = trimmed(stateFromStores[16]).openSocialLayerStorefrontProductGiftPurchaseSuccessModal;
      trimmed(stateFromStores[16]);
      const result = openSocialLayerStorefrontProductGiftPurchaseSuccessModal(obj);
      tmp2 = stateFromStores1;
    });
  }, items8);
  [tmp25, closure_12] = tmp4(obj.useState(null), 2);
  const items9 = [tmp16];
  let tmp27 = trimmed.length > 0;
  tmp4(obj.useState(null), 2);
  const callback4 = obj.useCallback(() => {
    let tmp;
    if (null != c8) {
      let str = "Querying Play\u2026";
      constants("Querying Play\u2026");
      obj = GPlayActionCreators;
      const items = [tmp];
      const inAppSkus = obj.loadInAppSkus(items);
      const nextPromise = inAppSkus.then((result) => {
        if (null != result) {
          let combined;
          if (result.length > 0) {
            const _HermesInternal = HermesInternal;
            combined = "Play returned " + result.length + " product(s) for " + _null;
          }
          tmp(combined);
        }
        combined = "Play returned no products for " + _null;
      });
      nextPromise.catch((error) => {
        let code;
        let message;
        obj = error;
        if (error == null) {
          obj = {};
        }
        ({ code, message } = obj);
        let str = "";
        const tmp = closure_1_12;
        if (null != code) {
          const _HermesInternal = HermesInternal;
          str = " [" + code + "]";
        }
        if (message == null) {
          const _String = String;
          message = String(error);
        }
        tmp("Play query failed" + str + ": " + message);
      });
    }
  }, items9);
  if (tmp27) {
    tmp27 = trimmed1.length > 0;
  }
  let closure_13 = tmp27;
  let tmp28 = !tmp27;
  if (tmp27) {
    tmp28 = first;
  }
  const items10 = [first1, first, stateFromStores, tmp27, tmp16, stateFromStores2, stateFromStores3];
  let obj4 = { style: tmp.wrap, contentContainerStyle: obj5, children: tmp32(Stack, obj11) };
  obj5 = { paddingVertical: tmp2(tmp3[10]).space.PX_16, paddingBottom: tmp2(tmp3[10]).space.PX_16 + insets.bottom };
  const memo = obj.useMemo(() => {
    let str12;
    if (null != first1) {
      const _HermesInternal5 = HermesInternal;
      str12 = "Fetch failed: " + tmp;
    } else {
      str12 = "Fetching SKU\u2026";
      if (!first) {
        let str;
        if (null != stateFromStores) {
          let str2 = "no DEFAULT googleSkuId, so nothing to price";
          const name = stateFromStores.name;
          if (null != c8) {
            let combined;
            if (null == stateFromStores2) {
              let str7 = " (billing not connected)";
              if (tmp5) {
                str7 = "";
              }
              const _HermesInternal3 = HermesInternal;
              combined = "play id " + tmp3 + " \u00B7 not in IAPStore" + str7;
            } else if (null == stateFromStores2.priceString) {
              const _HermesInternal2 = HermesInternal;
              combined = "play id " + tmp3 + " \u00B7 product found, no priceString";
            } else {
              const _HermesInternal = HermesInternal;
              combined = "play id " + tmp3 + " \u00B7 " + tmp4.priceString;
            }
            str2 = combined;
          }
          const _HermesInternal4 = HermesInternal;
          str = "" + name + " \u00B7 " + str2;
        } else {
          str = "Paste a SKU ID and its application ID to enable the modals below.";
          if (closure_13) {
            str = "Not fetched yet. Opening a modal fetches it first.";
          }
        }
        str12 = str;
      }
    }
    return str12;
  }, items10);
  Stack = tmp9(tmp3[18]).Stack;
  let obj6 = { title: "SKU", description: memo, hasIcons: false, children: items11 };
  let obj7 = { style: tmp.inputRow, children: closure_13(tmp9(tmp3[20]).TextInput, { label: "Application ID", value: str2, onChange: tmp8, placeholder: "1234567890123456789", autoCapitalize: "none", autoCorrect: false, keyboardType: "number-pad" }) };
  const TableRowGroup = tmp9(tmp3[19]).TableRowGroup;
  items11 = [closure_13(stateFromStores1, obj7), ];
  let obj8 = { style: tmp.inputRow, children: closure_13(tmp9(tmp3[20]).TextInput, { label: "SKU ID", value: str, onChange: tmp6, placeholder: "1234567890123456789", autoCapitalize: "none", autoCorrect: false, keyboardType: "number-pad" }) };
  items11[1] = closure_13(stateFromStores1, obj8);
  const items12 = [closure_14(TableRowGroup, obj6), , ];
  const tmp9Result4 = trimmed(tmp3[15]);
  let isAndroidResult = tmp9Result4.isAndroid();
  const tmp31 = closure_6;
  if (isAndroidResult) {
    const TableRowGroup2 = tmp9(tmp3[19]).TableRowGroup;
    let str3 = "needs a fetched SKU with a DEFAULT googleSkuId";
    const obj9 = { title: "Pricing", description: tmp25, hasIcons: false, children: closure_13(TableRow, obj10) };
    TableRow = tmp9(tmp3[21]).TableRow;
    if (null != tmp16) {
      let _HermesInternal = HermesInternal;
      str3 = "play id " + tmp16;
    }
    obj10 = { label: "Query Play for this SKU's price", subLabel: str3, onPress: callback4, disabled: null == tmp16, arrow: true };
    isAndroidResult = tmp30(TableRowGroup2, obj9);
  }
  items12[1] = isAndroidResult;
  const TableRowGroup3 = tmp9(tmp3[19]).TableRowGroup;
  const items13 = [tmp30(tmp9(tmp3[21]).TableRow, { label: "Product details", subLabel: "The PDP, as opened from a gift-code embed", onPress: callback1, disabled: tmp28, arrow: true }), tmp30(tmp9(tmp3[21]).TableRow, { label: "Purchase success (self)", subLabel: "Redeem / link-account screen shown after buying", onPress: callback2, disabled: tmp28, arrow: true }), ];
  let str5;
  const TableRow2 = tmp9(tmp3[21]).TableRow;
  if (stateFromStores1 != null) {
    str5 = stateFromStores1.username;
  }
  if (str5 == null) {
    str5 = "you";
  }
  obj11 = { spacing: 16, children: items12 };
  const obj12 = { title: "Modals", hasIcons: false, children: items13 };
  const obj13 = { label: "Purchase success (gift)", subLabel: "Recipient: " + str5 + " (self)", onPress: callback3, disabled: tmp28, arrow: true };
  items13[2] = closure_13(TableRow2, obj13);
  items12[2] = closure_14(TableRowGroup3, obj12);
  return closure_13(tmp31, obj4);
};
