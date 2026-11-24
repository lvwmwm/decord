// Module ID: 9419
// Function ID: 9420
// Name: useHandleUseNow
// Dependencies: [19, 9420, 5127, 6429, 5090, 5595, 1112, 9421, 9424, 2]
// Exports: useHandleUseNow

// Module 9419 (useHandleUseNow)
import RootNavigationRef from "RootNavigationRef" /* 5090 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5127 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6429 */;
import MainTabsConstants from "MainTabsConstants" /* 9420 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const RootNavigatorScreen = MainTabsConstants.RootNavigatorScreen;
const result = size.fileFinishedImporting("modules/collectibles/native/useHandleUseNow.tsx");

export function useHandleUseNow(product) {
  let canUseNow;
  let isApplying;
  let items2;
  product = product.product;
  require = product;
  const stageCollectibleChangeForEditProfile = product.stageCollectibleChangeForEditProfile;
  let onSuccess;
  const items = [onSuccess, stageCollectibleChangeForEditProfile];
  const analyticsLocations = product.analyticsLocations;
  onSuccess = onSuccess.useCallback(() => {
    if (null == onSuccess) {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideAllActionSheets();
      const obj2 = ModalActionCreatorsDefault;
      obj2.popAll();
      if (null == stageCollectibleChangeForEditProfile) {
        const obj3 = RootNavigationRef;
        const rootNavigationRef = obj3.getRootNavigationRef();
        const tmp9 = null != rootNavigationRef && rootNavigationRef.isReady();
        if (tmp9) {
          rootNavigationRef.navigate(RootNavigatorScreen.YOU);
        }
      }
    } else {
      tmp();
    }
  }, items);
  const callback1 = onSuccess.useCallback(() => {
    let intl;
    const obj = { text: intl.string(require("intl").t.CKsXk3) };
    const open = onSuccess(stageCollectibleChangeForEditProfile[5]).open;
    onSuccess(stageCollectibleChangeForEditProfile[5]);
    intl = require("intl").intl;
    open("collectible shop apply error", obj);
  }, []);
  let obj = require("hooks/useHandleUseNow");
  const handleUseNow1 = obj.useHandleUseNow({ product, onSuccess, onError: callback1 });
  const handleUseNow = handleUseNow1.handleUseNow;
  const items1 = [stageCollectibleChangeForEditProfile, product, onSuccess, handleUseNow];
  ({ isApplying, canUseNow } = handleUseNow1);
  const callback2 = onSuccess.useCallback(() => {
    if (null != stageCollectibleChangeForEditProfile) {
      tmp(require);
      callback();
    } else {
      handleUseNow();
    }
  }, items1);
  const tmp5 = onSuccess(stageCollectibleChangeForEditProfile[8])({ analyticsLocations });
  let closure_5 = tmp5;
  let obj2 = {
    handleUseNow: callback2,
    isApplying,
    canUseNow,
    handleEditProfile: onSuccess.useCallback(() => {
      closure_5();
      if (null == onSuccess) {
        const obj = ActionSheetActionCreatorsDefault;
        obj.hideAllActionSheets();
        const obj2 = ModalActionCreatorsDefault;
        obj2.popAll();
      } else {
        tmp2();
      }
    }, items2)
  };
  items2 = [tmp5, onSuccess];
  return obj2;
}
