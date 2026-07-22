// Module ID: 11048
// Function ID: 85988
// Name: FAMILY_CENTER_REQUEST_MODAL_KEY
// Dependencies: []
// Exports: handleFamilyCenterQRCodeScan, resumeFamilyCenterConnection

// Module 11048 (FAMILY_CENTER_REQUEST_MODAL_KEY)
let closure_3 = importDefault(dependencyMap[0]);
({ FAMILY_CENTER_LINK_REQUEST_REGEX: closure_4, FamilyCenterAction: closure_5 } = arg1(dependencyMap[1]));
const AnalyticEvents = arg1(dependencyMap[2]).AnalyticEvents;
const tmp2 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/parent_tools/native/FamilyCenterNativeUtils.tsx");

export const FAMILY_CENTER_REQUEST_MODAL_KEY = "family-center-request-modal";
export const handleFamilyCenterQRCodeScan = function handleFamilyCenterQRCodeScan(pathname, FamilyCenterQRCodeScan) {
  const match = pathname.match(closure_4);
  if (null === match) {
    return null;
  } else {
    let obj = importDefault(dependencyMap[3]);
    obj = { action: ScanQRCode.ScanQRCode, selected_teen_id: match[1], source: FamilyCenterQRCodeScan };
    obj.track(AnalyticEvents.FAMILY_CENTER_ACTION, obj);
    importDefault(dependencyMap[4]).setPendingConnection(match[1], match[2]);
    const obj3 = importDefault(dependencyMap[4]);
    obj = { userId: match[1], linkCode: match[2] };
    importDefault(dependencyMap[5]).pushLazy(FamilyCenterQRCodeScan(dependencyMap[7])(dependencyMap[6], dependencyMap.paths), obj, "family-center-request-modal");
  }
};
export const resumeFamilyCenterConnection = function resumeFamilyCenterConnection() {
  const pendingConnection = pendingConnection.getPendingConnection();
  let flag = null != pendingConnection;
  if (flag) {
    let obj = importDefault(dependencyMap[5]);
    obj.popWithKey("family-center-request-modal");
    obj = {};
    ({ teenId: obj3.userId, linkCode: obj3.linkCode } = pendingConnection);
    importDefault(dependencyMap[5]).pushLazy(arg1(dependencyMap[7])(dependencyMap[6], dependencyMap.paths), obj, "family-center-request-modal");
    flag = true;
    const obj2 = importDefault(dependencyMap[5]);
  }
  return flag;
};
