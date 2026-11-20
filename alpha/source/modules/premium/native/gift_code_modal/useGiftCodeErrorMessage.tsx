// Module ID: 11793
// Function ID: 11794
// Name: useGiftCodeErrorMessage
// Dependencies: [32, 7970, 11785, 504, 11791, 1112, 6228, 2]
// Exports: default

// Module 11793 (useGiftCodeErrorMessage)
import _slicedToArray from "_slicedToArray" /* 32 */;
import CollectiblesPurchaseStore from "CollectiblesPurchaseStore" /* 7970 */;
import GiftCodeStore from "GiftCodeStore" /* 11785 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let result = size.fileFinishedImporting("modules/premium/native/gift_code_modal/useGiftCodeErrorMessage.tsx");

export default function useGiftCodeErrorMessage(arg0, id) {
  let closure_0;
  let first;
  let stringResult;
  _require = arg0;
  let items = [GiftCodeStore];
  const obj = require("get initialized");
  const tmp3 = _slicedToArray(obj.useStateFromStoresArray(items, () => {
    const items = [GiftCodeStore.get(closure_0), GiftCodeStore.getError(closure_0)];
    return items;
  }), 2);
  first = tmp3[0];
  const items1 = [CollectiblesPurchaseStore];
  let result = null != first;
  const obj2 = require("get initialized");
  const stateFromStores = obj2.useStateFromStores(items1, () => {
    let skuId;
    const getPurchase = CollectiblesPurchaseStore.getPurchase;
    if (first != null) {
      skuId = first.skuId;
    }
    return getPurchase(skuId);
  });
  if (result) {
    const tmpResult = require("GiftSubscriptionCodeUtils");
    result = tmpResult.needsGiftSubscriptionAgreement(first);
  }
  let userId;
  if (first != null) {
    userId = first.userId;
  }
  id = undefined;
  if (id != null) {
    id = id.id;
  }
  if (userId === id) {
    let tmp10Result;
    if (!result) {
      const intl = tmp(tmp2[5]).intl;
      if (null != first) {
        let JZxgJX;
        const tmpResult3 = require("GiftSubscriptionCodeUtils");
        if (tmpResult3.isPendingGiftSubscriptionCode(first)) {
          JZxgJX = tmp(tmp2[5]).t.wa9h7F;
        }
        tmp10Result = tmp10(JZxgJX);
      }
      JZxgJX = tmp(tmp2[5]).t.JZxgJX;
    }
    return tmp10Result;
  }
  let isClaimed;
  if (first != null) {
    isClaimed = first.isClaimed;
  }
  if (isClaimed) {
    const intl3 = tmp(tmp2[5]).intl;
    stringResult = intl3.string(tmp(tmp2[5]).t.ilcBeX);
  } else if (null != stateFromStores) {
    const intl2 = tmp(tmp2[5]).intl;
    stringResult = intl2.string(tmp(tmp2[5]).t.mdLtb5);
  } else {
    stringResult = null;
    if (null != tmp3[1]) {
      if (!result) {
        const tmpResult4 = require("GiftCodeUtils");
        stringResult = tmpResult4.getGiftCodeRedeemError(tmp5);
      } else {
        stringResult = null;
      }
    }
  }
  tmp10Result = stringResult;
};
