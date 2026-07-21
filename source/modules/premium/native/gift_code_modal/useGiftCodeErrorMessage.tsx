// Module ID: 8192
// Function ID: 64797
// Name: useGiftCodeErrorMessage
// Dependencies: []
// Exports: default

// Module 8192 (useGiftCodeErrorMessage)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/premium/native/gift_code_modal/useGiftCodeErrorMessage.tsx");

export default function useGiftCodeErrorMessage(arg0, id) {
  id = arg0;
  const items = [closure_4];
  const tmp = callback(id(dependencyMap[3]).useStateFromStoresArray(items, () => {
    const items = [store.get(arg0), store.getError(arg0)];
    return items;
  }), 2);
  const first = tmp[0];
  const dependencyMap = first;
  const obj = id(dependencyMap[3]);
  const items1 = [closure_3];
  let userId;
  const stateFromStores = id(dependencyMap[3]).useStateFromStores(items1, () => {
    let skuId;
    if (null != first) {
      skuId = first.skuId;
    }
    return purchase.getPurchase(skuId);
  });
  if (null != first) {
    userId = first.userId;
  }
  id = undefined;
  if (null != id) {
    id = id.id;
  }
  if (userId === id) {
    const intl3 = id(dependencyMap[4]).intl;
    let stringResult = intl3.string(id(dependencyMap[4]).t.JZxgJX);
  } else {
    if (null != first) {
      if (first.isClaimed) {
        const intl2 = id(dependencyMap[4]).intl;
        stringResult = intl2.string(id(dependencyMap[4]).t.ilcBeX);
      }
    }
    if (null != stateFromStores) {
      const intl = id(dependencyMap[4]).intl;
      stringResult = intl.string(id(dependencyMap[4]).t.mdLtb5);
    } else {
      stringResult = null;
      if (null != tmp3) {
        stringResult = id(dependencyMap[5]).getGiftCodeRedeemError(tmp3);
        const obj3 = id(dependencyMap[5]);
      }
    }
  }
  return stringResult;
};
