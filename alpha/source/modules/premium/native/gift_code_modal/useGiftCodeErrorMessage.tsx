// Module ID: 11344
// Function ID: 11345
// Name: useGiftCodeErrorMessage
// Dependencies: [32, 7728, 11333, 504, 1114, 6438, 2]
// Exports: default

// Module 11344 (useGiftCodeErrorMessage)
import _slicedToArray from "_slicedToArray" /* 32 */;
import CollectiblesPurchaseStore from "CollectiblesPurchaseStore" /* 7728 */;
import GiftCodeStore from "GiftCodeStore" /* 11333 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const result = size.fileFinishedImporting("modules/premium/native/gift_code_modal/useGiftCodeErrorMessage.tsx");

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
  let userId;
  const obj2 = require("get initialized");
  const stateFromStores = obj2.useStateFromStores(items1, () => {
    let skuId;
    const getPurchase = CollectiblesPurchaseStore.getPurchase;
    if (first != null) {
      skuId = first.skuId;
    }
    return getPurchase(skuId);
  });
  if (first != null) {
    userId = first.userId;
  }
  id = undefined;
  if (id != null) {
    id = id.id;
  }
  if (userId === id) {
    const intl3 = tmp(tmp2[4]).intl;
    stringResult = intl3.string(tmp(tmp2[4]).t.JZxgJX);
  } else {
    let isClaimed;
    if (first != null) {
      isClaimed = first.isClaimed;
    }
    if (isClaimed) {
      const intl2 = tmp(tmp2[4]).intl;
      stringResult = intl2.string(tmp(tmp2[4]).t.ilcBeX);
    } else if (null != stateFromStores) {
      const intl = tmp(tmp2[4]).intl;
      stringResult = intl.string(tmp(tmp2[4]).t.mdLtb5);
    } else {
      stringResult = null;
      if (null != tmp3[1]) {
        const tmpResult = require("GiftCodeUtils");
        stringResult = tmpResult.getGiftCodeRedeemError(tmp5);
      }
    }
  }
  return stringResult;
};
