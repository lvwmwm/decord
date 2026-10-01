// Module ID: 10612
// Function ID: 10613
// Name: useCustomStatusActivityForUser
// Dependencies: [502, 4876, 1074, 504, 8819, 2]
// Exports: default

// Module 10612 (useCustomStatusActivityForUser)
import Constants from "Constants" /* 1074 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import PresenceStore from "PresenceStore" /* 4876 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const ActivityTypes = Constants.ActivityTypes;
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
  let stateFromStores1 = obj3.useStateFromStores(items1, () => PresenceStore.findActivity(closure_0, (type) => type.type === constants.CUSTOM_STATUS));
  if (stateFromStores) {
    stateFromStores1 = customStatusActivity;
  }
  return stateFromStores1;
};
