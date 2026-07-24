// Module ID: 11085
// Function ID: 86227
// Name: FAMILY_CENTER_REQUEST_MODAL_KEY
// Dependencies: [4348, 6770, 653, 675, 6771, 4337, 11086, 1934, 2]
// Exports: handleFamilyCenterQRCodeScan, resumeFamilyCenterConnection

// Module 11085 (FAMILY_CENTER_REQUEST_MODAL_KEY)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import items from "items";
import { AnalyticEvents } from "ME";

let closure_4;
let closure_5;
const require = arg1;
({ FAMILY_CENTER_LINK_REQUEST_REGEX: closure_4, FamilyCenterAction: closure_5 } = items);
const result = require("ME").fileFinishedImporting("modules/parent_tools/native/FamilyCenterNativeUtils.tsx");

export const FAMILY_CENTER_REQUEST_MODAL_KEY = "family-center-request-modal";
export const handleFamilyCenterQRCodeScan = function handleFamilyCenterQRCodeScan(c7, FamilyCenterQRCodeScan) {
  const match = c7.match(closure_4);
  if (null === match) {
    return null;
  } else {
    let obj = importDefault(675);
    obj = { action: ScanQRCode.ScanQRCode, selected_teen_id: match[1], source: FamilyCenterQRCodeScan };
    obj.track(AnalyticEvents.FAMILY_CENTER_ACTION, obj);
    importDefault(6771).setPendingConnection(match[1], match[2]);
    const obj3 = importDefault(6771);
    obj = { userId: match[1], linkCode: match[2] };
    importDefault(4337).pushLazy(require(1934) /* maybeLoadBundle */(11086, dependencyMap.paths), obj, "family-center-request-modal");
  }
};
export const resumeFamilyCenterConnection = function resumeFamilyCenterConnection() {
  pendingConnection = pendingConnection.getPendingConnection();
  let flag = null != pendingConnection;
  if (flag) {
    let obj = importDefault(4337);
    obj.popWithKey("family-center-request-modal");
    obj = {};
    ({ teenId: obj3.userId, linkCode: obj3.linkCode } = pendingConnection);
    importDefault(4337).pushLazy(require(1934) /* maybeLoadBundle */(11086, dependencyMap.paths), obj, "family-center-request-modal");
    flag = true;
    const obj2 = importDefault(4337);
  }
  return flag;
};
