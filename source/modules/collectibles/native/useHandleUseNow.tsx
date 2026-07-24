// Module ID: 9810
// Function ID: 76224
// Name: useHandleUseNow
// Dependencies: [31, 8811, 4098, 4337, 3982, 3831, 1212, 9811, 9814, 2]
// Exports: useHandleUseNow

// Module 9810 (useHandleUseNow)
import result from "result";
import { RootNavigatorScreen } from "MODE_CHANGE_PHYSICS";

const require = arg1;
const result = require("showActionSheet").fileFinishedImporting("modules/collectibles/native/useHandleUseNow.tsx");

export const useHandleUseNow = function useHandleUseNow(onSuccess) {
  let analyticsLocations;
  let canUseNow;
  let handleUseNow;
  let isApplying;
  let product;
  onSuccess = onSuccess.onSuccess;
  const items = [onSuccess];
  ({ product, analyticsLocations } = onSuccess);
  const callback = React.useCallback(() => {
    if (null == onSuccess) {
      outer1_2(outer1_2[2]).hideActionSheet();
      const obj = outer1_2(outer1_2[2]);
      outer1_2(outer1_2[3]).popAll();
      const obj2 = outer1_2(outer1_2[3]);
      const rootNavigationRef = onSuccess(outer1_2[4]).getRootNavigationRef();
      const obj3 = onSuccess(outer1_2[4]);
      if (tmp8) {
        rootNavigationRef.navigate(outer1_4.YOU);
      }
      tmp8 = null != rootNavigationRef && rootNavigationRef.isReady();
    } else {
      onSuccess();
    }
  }, items);
  const callback1 = React.useCallback(() => {
    let obj = tmp4(outer1_2[5]);
    obj = { key: "collectible shop apply error" };
    const intl = onSuccess(outer1_2[6]).intl;
    obj.content = intl.string(onSuccess(outer1_2[6]).t.CKsXk3);
    obj.open(obj);
  }, []);
  let obj = onSuccess(9811);
  handleUseNow = obj.useHandleUseNow({ product, onSuccess: callback, onError: callback1 });
  ({ handleUseNow, isApplying, canUseNow } = handleUseNow);
  const tmp4 = importDefault(9814)({ analyticsLocations });
  importDefault = tmp4;
  obj = {
    handleUseNow,
    isApplying,
    canUseNow,
    handleEditProfile: React.useCallback(() => {
      tmp4();
      if (null == onSuccess) {
        tmp4(outer1_2[2]).hideActionSheet();
        const obj = tmp4(outer1_2[2]);
        tmp4(outer1_2[3]).popAll();
        const obj2 = tmp4(outer1_2[3]);
      } else {
        onSuccess();
      }
    }, items1)
  };
  items1 = [tmp4, onSuccess];
  return obj;
};
