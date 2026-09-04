// Module ID: 11082
// Function ID: 11083
// Name: useCustomStatusActivityForUser
// Dependencies: [1215, 4572, 673, 586, 11042, 2]
// Exports: default

// Module 11082 (useCustomStatusActivityForUser)
import closure_2 from "fetchFingerprint" /* 1215 */;
import closure_3 from "sortActivity" /* 4572 */;
import { ActivityTypes } from "ME" /* 673 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/custom_status/utils/useCustomStatusActivityForUser.tsx");

export default function useCustomStatusActivityForUser(arg0) {
  const _require = arg0;
  const items = [closure_2];
  const stateFromStores = _require(586).useStateFromStores(items, () => closure_1_2.getId() === closure_0);
  const obj = _require(586);
  const customStatusActivity = _require(11042).useCustomStatusActivity();
  const obj2 = _require(11042);
  const items1 = [closure_3];
  let stateFromStores1 = _require(586).useStateFromStores(items1, () => closure_1_3.findActivity(closure_0, (type) => type.type === constants.CUSTOM_STATUS));
  if (stateFromStores) {
    stateFromStores1 = customStatusActivity;
  }
  return stateFromStores1;
};
