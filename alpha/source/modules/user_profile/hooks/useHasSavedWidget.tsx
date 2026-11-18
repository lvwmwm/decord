// Module ID: 10123
// Function ID: 10124
// Name: useHasSavedWidget
// Dependencies: [502, 6867, 504, 2]
// Exports: useHasSavedWidget

// Module 10123 (useHasSavedWidget)
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import UserProfileStore from "UserProfileStore" /* 6867 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const result = size.fileFinishedImporting("modules/user_profile/hooks/useHasSavedWidget.tsx");

export function useHasSavedWidget(type) {
  _require = type;
  const items = [AuthenticationStore, UserProfileStore];
  const items1 = [type];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
    const userProfile = UserProfileStore.getUserProfile(AuthenticationStore.getId());
    let widgets;
    if (userProfile != null) {
      widgets = userProfile.widgets;
    }
    if (widgets == null) {
      widgets = [];
    }
    return widgets.some((type) => type.type === type);
  }, items1);
}
