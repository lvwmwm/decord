// Module ID: 14968
// Function ID: 14969
// Name: useUserProfileWidgets
// Dependencies: [502, 7772, 14958, 504, 2]
// Exports: default

// Module 14968 (useUserProfileWidgets)
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import UserProfileStore from "UserProfileStore" /* 7772 */;
import WidgetStore from "WidgetStore" /* 14958 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const result = size.fileFinishedImporting("modules/user_profile/hooks/useUserProfileWidgets.tsx");

export default function useUserProfileWidgets(arg0) {
  let closure_0;
  let pendingWidgets;
  _require = arg0;
  const items = [AuthenticationStore];
  const items1 = [arg0];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, () => {
    const tmp = null != closure_0 && AuthenticationStore.getId() === closure_0;
    return tmp;
  }, items1);
  const items2 = [WidgetStore];
  const obj2 = require("get initialized");
  const stateFromStores1 = obj2.useStateFromStores(items2, () => pendingWidgets.getPendingWidgets());
  const items3 = [UserProfileStore];
  const items4 = [arg0];
  const obj3 = require("get initialized");
  const stateFromStoresArray = obj3.useStateFromStoresArray(items3, () => {
    if (null == closure_0) {
      return [];
    } else {
      const userProfile = UserProfileStore.getUserProfile(tmp);
      let widgets;
      if (userProfile != null) {
        widgets = userProfile.widgets;
      }
      if (widgets == null) {
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
