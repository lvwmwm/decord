// Module ID: 11920
// Function ID: 92270
// Name: useCustomStatusActivityForUser
// Dependencies: [1194, 4217, 653, 566, 8283, 2]
// Exports: default

// Module 11920 (useCustomStatusActivityForUser)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";
import { ActivityTypes } from "ME";

const require = arg1;
const result = require("ME").fileFinishedImporting("modules/custom_status/utils/useCustomStatusActivityForUser.tsx");

export default function useCustomStatusActivityForUser(arg0) {
  const _require = arg0;
  const items = [_isNativeReflectConstruct];
  const stateFromStores = _require(566).useStateFromStores(items, () => outer1_2.getId() === closure_0);
  const obj = _require(566);
  const customStatusActivity = _require(8283).useCustomStatusActivity();
  const obj2 = _require(8283);
  const items1 = [closure_3];
  let stateFromStores1 = _require(566).useStateFromStores(items1, () => outer1_3.findActivity(closure_0, (type) => type.type === outer2_4.CUSTOM_STATUS));
  if (stateFromStores) {
    stateFromStores1 = customStatusActivity;
  }
  return stateFromStores1;
};
