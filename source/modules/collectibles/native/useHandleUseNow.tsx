// Module ID: 9770
// Function ID: 75965
// Name: useHandleUseNow
// Dependencies: []
// Exports: useHandleUseNow

// Module 9770 (useHandleUseNow)
let closure_3 = importAll(dependencyMap[0]);
const RootNavigatorScreen = arg1(dependencyMap[1]).RootNavigatorScreen;
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/collectibles/native/useHandleUseNow.tsx");

export const useHandleUseNow = function useHandleUseNow(onSuccess) {
  let analyticsLocations;
  let canUseNow;
  let handleUseNow;
  let isApplying;
  let product;
  onSuccess = onSuccess.onSuccess;
  const arg1 = onSuccess;
  const items = [onSuccess];
  ({ product, analyticsLocations } = onSuccess);
  const callback = React.useCallback(() => {
    if (null == onSuccess) {
      closure_2(closure_2[2]).hideActionSheet();
      const obj = closure_2(closure_2[2]);
      closure_2(closure_2[3]).popAll();
      const obj2 = closure_2(closure_2[3]);
      const rootNavigationRef = onSuccess(closure_2[4]).getRootNavigationRef();
      const obj3 = onSuccess(closure_2[4]);
      if (tmp8) {
        rootNavigationRef.navigate(constants.YOU);
      }
      const tmp8 = null != rootNavigationRef && rootNavigationRef.isReady();
    } else {
      onSuccess();
    }
  }, items);
  const callback1 = React.useCallback(() => {
    let obj = tmp4(closure_2[5]);
    obj = { key: "collectible shop apply error" };
    const intl = onSuccess(closure_2[6]).intl;
    obj.content = intl.string(onSuccess(closure_2[6]).t.CKsXk3);
    obj.open(obj);
  }, []);
  let obj = arg1(dependencyMap[7]);
  handleUseNow = obj.useHandleUseNow({ product, onSuccess: callback, onError: callback1 });
  ({ handleUseNow, isApplying, canUseNow } = handleUseNow);
  const tmp4 = importDefault(dependencyMap[8])({ analyticsLocations });
  const importDefault = tmp4;
  obj = {
    handleUseNow,
    isApplying,
    canUseNow,
    handleEditProfile: React.useCallback(() => {
      tmp4();
      if (null == onSuccess) {
        tmp4(closure_2[2]).hideActionSheet();
        const obj = tmp4(closure_2[2]);
        tmp4(closure_2[3]).popAll();
        const obj2 = tmp4(closure_2[3]);
      } else {
        onSuccess();
      }
    }, items1)
  };
  const items1 = [tmp4, onSuccess];
  return obj;
};
