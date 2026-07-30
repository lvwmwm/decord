// Module ID: 9793
// Function ID: 9794
// Name: useHandleUseNow
// Dependencies: [19, 8763, 4157, 4395, 4041, 3890, 1236, 9794, 9797, 2]
// Exports: useHandleUseNow

// Module 9793 (useHandleUseNow)
import noop from "noop";
import { RootNavigatorScreen } from "MODE_CHANGE_PHYSICS";

const require = arg1;
const result = require("ACTION_SHEET_HEIGHT_HALF").fileFinishedImporting("modules/collectibles/native/useHandleUseNow.tsx");

export const useHandleUseNow = function useHandleUseNow(onSuccess) {
  let analyticsLocations;
  let canUseNow;
  let handleUseNow;
  let isApplying;
  let product;
  onSuccess = onSuccess.onSuccess;
  let importDefault;
  const items = [onSuccess];
  ({ product, analyticsLocations } = onSuccess);
  const callback = React.useCallback(() => {
    if (null == onSuccess) {
      _undefined(outer1_2[2]).hideActionSheet();
      const obj = _undefined(outer1_2[2]);
      _undefined(outer1_2[3]).popAll();
      const obj2 = _undefined(outer1_2[3]);
      const rootNavigationRef = onSuccess(outer1_2[4]).getRootNavigationRef();
      const obj3 = onSuccess(outer1_2[4]);
      if (tmp8) {
        rootNavigationRef.navigate(outer1_4.YOU);
      }
      tmp8 = null != rootNavigationRef && rootNavigationRef.isReady();
    } else {
      tmp();
    }
  }, items);
  const callback1 = React.useCallback(() => {
    let obj = _undefined(3890);
    obj = { key: "collectible shop apply error", content: null };
    const intl = onSuccess(1236).intl;
    obj[1] = intl.string(onSuccess(1236).t.CKsXk3);
    obj.open(obj);
  }, []);
  let obj = onSuccess(9794);
  handleUseNow = obj.useHandleUseNow({ product, onSuccess: callback, onError: callback1 });
  ({ handleUseNow, isApplying, canUseNow } = handleUseNow);
  const tmp4 = importDefault(9797)({ analyticsLocations });
  importDefault = tmp4;
  obj = {
    handleUseNow,
    isApplying,
    canUseNow,
    handleEditProfile: React.useCallback(() => {
      _undefined();
      if (null == onSuccess) {
        _undefined(outer1_2[2]).hideActionSheet();
        const obj = _undefined(outer1_2[2]);
        _undefined(outer1_2[3]).popAll();
        const obj2 = _undefined(outer1_2[3]);
      } else {
        tmp2();
      }
    }, items1)
  };
  items1 = [tmp4, onSuccess];
  return obj;
};
