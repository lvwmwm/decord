// Module ID: 8245
// Function ID: 65088
// Name: useGiftCodeErrorMessage
// Dependencies: [57, 6790, 8237, 566, 1212, 4366, 2]
// Exports: default

// Module 8245 (useGiftCodeErrorMessage)
import _slicedToArray from "_slicedToArray";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";

const require = arg1;
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/premium/native/gift_code_modal/useGiftCodeErrorMessage.tsx");

export default function useGiftCodeErrorMessage(arg0, id) {
  const _require = arg0;
  let items = [closure_4];
  const tmp = callback(_require(first[3]).useStateFromStoresArray(items, () => {
    const items = [outer1_4.get(closure_0), outer1_4.getError(closure_0)];
    return items;
  }), 2);
  first = tmp[0];
  const obj = _require(first[3]);
  const items1 = [_isNativeReflectConstruct];
  let userId;
  const stateFromStores = _require(first[3]).useStateFromStores(items1, () => {
    let skuId;
    if (null != first) {
      skuId = first.skuId;
    }
    return outer1_3.getPurchase(skuId);
  });
  if (null != first) {
    userId = first.userId;
  }
  id = undefined;
  if (null != id) {
    id = id.id;
  }
  if (userId === id) {
    const intl3 = _require(first[4]).intl;
    let stringResult = intl3.string(_require(first[4]).t.JZxgJX);
  } else {
    if (null != first) {
      if (first.isClaimed) {
        const intl2 = _require(first[4]).intl;
        stringResult = intl2.string(_require(first[4]).t.ilcBeX);
      }
    }
    if (null != stateFromStores) {
      const intl = _require(first[4]).intl;
      stringResult = intl.string(_require(first[4]).t.mdLtb5);
    } else {
      stringResult = null;
      if (null != tmp3) {
        stringResult = _require(first[5]).getGiftCodeRedeemError(tmp3);
        const obj3 = _require(first[5]);
      }
    }
  }
  return stringResult;
};
