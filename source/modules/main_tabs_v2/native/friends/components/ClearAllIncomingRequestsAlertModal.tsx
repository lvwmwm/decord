// Module ID: 15338
// Function ID: 116805
// Name: handleConfirm
// Dependencies: []
// Exports: default

// Module 15338 (handleConfirm)
function handleConfirm() {
  return _handleConfirm(...arguments);
}
function _handleConfirm() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _handleConfirm = obj;
  return obj(...arguments);
}
let closure_3 = importDefault(dependencyMap[0]);
importAll(dependencyMap[1]);
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[2]));
const tmp3 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/main_tabs_v2/native/friends/components/ClearAllIncomingRequestsAlertModal.tsx");

export default function ClearAllIncomingRequestsAlertModal(incomingRequestCount) {
  let obj = {};
  const intl = arg1(dependencyMap[5]).intl;
  obj.title = intl.string(arg1(dependencyMap[5]).t.z2pFjo);
  const intl2 = arg1(dependencyMap[5]).intl;
  obj.content = intl2.formatToPlainString(arg1(dependencyMap[5]).t.0nTvEw, { incomingRequestCount: incomingRequestCount.incomingRequestCount });
  obj = {};
  obj = { variant: "destructive", onPress: handleConfirm };
  const intl3 = arg1(dependencyMap[5]).intl;
  obj.text = intl3.string(arg1(dependencyMap[5]).t.cY+Oob);
  const items = [callback2(arg1(dependencyMap[4]).AlertActionButton, obj, "confirm"), ];
  const obj1 = { variant: "secondary" };
  const intl4 = arg1(dependencyMap[5]).intl;
  obj1.text = intl4.string(arg1(dependencyMap[5]).t.ETE/oC);
  items[1] = callback2(arg1(dependencyMap[4]).AlertActionButton, obj1, "cancel");
  obj.children = items;
  obj.actions = callback3(arg1(dependencyMap[6]).AlertActions, obj);
  return callback2(arg1(dependencyMap[4]).AlertModal, obj);
};
