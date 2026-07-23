// Module ID: 12103
// Function ID: 94829
// Name: useUserProfileWidgets
// Dependencies: [1194, 6856, 6861, 566, 2]
// Exports: default

// Module 12103 (useUserProfileWidgets)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/user_profile/hooks/useUserProfileWidgets.tsx");

export default function useUserProfileWidgets(arg0) {
  const _require = arg0;
  const items = [_isNativeReflectConstruct];
  const items1 = [arg0];
  const stateFromStores = _require(566).useStateFromStores(items, () => {
    let tmp2 = null != closure_0;
    if (tmp2) {
      tmp2 = tmp === closure_0;
    }
    return tmp2;
  }, items1);
  const obj = _require(566);
  const items2 = [_createForOfIteratorHelperLoose];
  const stateFromStores1 = _require(566).useStateFromStores(items2, () => outer1_4.getPendingWidgets());
  const obj2 = _require(566);
  const items3 = [closure_3];
  const items4 = [arg0];
  const stateFromStoresArray = _require(566).useStateFromStoresArray(items3, () => {
    if (null == closure_0) {
      return [];
    } else {
      const userProfile = outer1_3.getUserProfile(closure_0);
      let widgets;
      if (null != userProfile) {
        widgets = userProfile.widgets;
      }
      if (null == widgets) {
        widgets = [];
      }
      return widgets;
    }
  }, items4);
  let tmp4 = stateFromStoresArray;
  if (stateFromStores) {
    tmp4 = stateFromStoresArray;
    if (null !== stateFromStores1) {
      tmp4 = stateFromStores1;
    }
  }
  return tmp4;
};
