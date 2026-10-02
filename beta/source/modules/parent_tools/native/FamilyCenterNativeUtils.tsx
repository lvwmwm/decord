// Module ID: 11267
// Function ID: 11268
// Name: FamilyCenterNativeUtils
// Dependencies: [5050, 6962, 1086, 1253, 6963, 5040, 11268, 1987, 2]
// Exports: handleFamilyCenterQRCodeScan, resumeFamilyCenterConnection

// Module 11267 (FamilyCenterNativeUtils)
import Constants from "Constants" /* 1086 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1253 */;
import asyncRequire from "asyncRequire" /* 1987 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5040 */;
import FamilyCenterActionCreatorsDefault from "FamilyCenterActionCreators" /* 6963 */;
import FamilyCenterPendingConnectionStore from "FamilyCenterPendingConnectionStore" /* 5050 */;
import FamilyCenterConstants from "FamilyCenterConstants" /* 6962 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
({ FAMILY_CENTER_LINK_REQUEST_REGEX: closure_4, FamilyCenterAction: hasOwnProperty } = FamilyCenterConstants);
const AnalyticEvents = Constants.AnalyticEvents;
let c7 = "family-center-request-modal";
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterNativeUtils.tsx");

export const FAMILY_CENTER_REQUEST_MODAL_KEY = "family-center-request-modal";
export const handleFamilyCenterQRCodeScan = function handleFamilyCenterQRCodeScan(pathname, FamilyCenterQRCodeScan) {
  const match = pathname.match(React3);
  if (null === match) {
    return null;
  } else {
    const obj2 = { action: hasOwnProperty.ScanQRCode, selected_teen_id: match[1], source: FamilyCenterQRCodeScan };
    const obj = AnalyticsUtilsDefault;
    obj.track(AnalyticEvents.FAMILY_CENTER_ACTION, obj2);
    const obj3 = FamilyCenterActionCreatorsDefault;
    obj3.setPendingConnection(match[1], match[2]);
    const obj5 = { userId: match[1], linkCode: match[2] };
    const obj4 = ModalActionCreatorsDefault;
    obj4.pushLazy(asyncRequire(11268, dependencyMap.paths), obj5, c7);
  }
};
export const resumeFamilyCenterConnection = function resumeFamilyCenterConnection() {
  const pendingConnection = FamilyCenterPendingConnectionStore.getPendingConnection();
  let flag = null != pendingConnection;
  if (flag) {
    const obj = ModalActionCreatorsDefault;
    obj.popWithKey(c7);
    const obj4 = { userId: null, linkCode: null };
    ({ teenId: obj3.userId, linkCode: obj3.linkCode } = pendingConnection);
    const obj2 = ModalActionCreatorsDefault;
    obj2.pushLazy(asyncRequire(11268, dependencyMap.paths), obj4, c7);
    flag = true;
  }
  return flag;
};
