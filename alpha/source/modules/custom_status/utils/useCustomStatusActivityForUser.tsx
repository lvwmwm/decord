// Module ID: 11549
// Function ID: 11550
// Name: useCustomStatusActivityForUser
// Dependencies: [502, 5881, 504, 11532, 5882, 2]
// Exports: default

// Module 11549 (useCustomStatusActivityForUser)
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import PresenceStore from "PresenceStore" /* 5881 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const result = size.fileFinishedImporting("modules/custom_status/utils/useCustomStatusActivityForUser.tsx");

export default function useCustomStatusActivityForUser(arg0) {
  let closure_0;
  _require = arg0;
  const items = [AuthenticationStore];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, () => AuthenticationStore.getId() === closure_0);
  const obj2 = require("userSettingToActivity");
  const customStatusActivity = obj2.useCustomStatusActivity();
  const items1 = [PresenceStore];
  const obj3 = require("get initialized");
  let stateFromStores1 = obj3.useStateFromStores(items1, () => PresenceStore.findActivity(closure_0, (type) => type.type === closure_1_0(closure_1_1[4]).ActivityTypes.CUSTOM_STATUS));
  if (stateFromStores) {
    stateFromStores1 = customStatusActivity;
  }
  return stateFromStores1;
};
