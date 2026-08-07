// Module ID: 10064
// Function ID: 10065
// Name: useHandleUseNow
// Dependencies: [19, 9509, 4270, 4507, 4153, 4002, 1236, 10065, 10068, 2]
// Exports: useHandleUseNow

// Module 10064 (useHandleUseNow)
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
    let obj = _undefined(4002);
    obj = { key: "collectible shop apply error", content: null };
    const intl = onSuccess(1236).intl;
    obj[1] = intl.string(onSuccess(1236).t.CKsXk3);
    obj.open(obj);
  }, []);
  let obj = onSuccess(10065);
  handleUseNow = obj.useHandleUseNow({ product, onSuccess: callback, onError: callback1 });
  ({ handleUseNow, isApplying, canUseNow } = handleUseNow);
  const tmp4 = importDefault(10068)({ analyticsLocations });
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
