// Module ID: 7430
// Function ID: 59737
// Name: useIsBuyNitroPurchaseBlocked
// Dependencies: [5619, 621, 566, 2]
// Exports: useIsBuyNitroPurchaseBlocked

// Module 7430 (useIsBuyNitroPurchaseBlocked)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import keys from "keys";

const require = arg1;
let closure_3 = keys.create(() => ({ isLocked: false, hasCompletedInitialLoad: false }));
keys = {
  begin(TableRowGroup, arg1) {
    const state = store.getState();
    let isBusyResult = !state.hasCompletedInitialLoad || state.isLocked;
    if (!isBusyResult) {
      isBusyResult = busy.isBusy();
    }
    let flag = !isBusyResult;
    if (flag) {
      const obj = { isLocked: true };
      store.setState(obj);
      flag = true;
    }
    return flag;
  },
  end() {
    store.setState({ isLocked: false });
  },
  setInitialLoadComplete(closure_1) {
    store.setState({ hasCompletedInitialLoad: closure_1 });
  }
};
const result = require("initialize").fileFinishedImporting("modules/premium_marketing/native/hooks/useBuyNitroPurchaseLock.tsx");

export const useIsBuyNitroPurchaseBlocked = function useIsBuyNitroPurchaseBlocked() {
  let stateFromStores = store((hasCompletedInitialLoad) => !hasCompletedInitialLoad.hasCompletedInitialLoad || hasCompletedInitialLoad.isLocked);
  const items = [_isNativeReflectConstruct];
  if (!stateFromStores) {
    stateFromStores = obj.useStateFromStores(items, () => outer1_2.isBusy());
  }
  return stateFromStores;
};
export const BuyNitroPurchaseLock = keys;
