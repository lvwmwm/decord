// Module ID: 10095
// Function ID: 78186
// Name: ConfirmStartCall
// Dependencies: []
// Exports: confirmStartCall

// Module 10095 (ConfirmStartCall)
function ConfirmStartCall(onConfirm) {
  let obj = {};
  const intl = arg1(dependencyMap[3]).intl;
  obj.title = intl.string(arg1(dependencyMap[3]).t.HlAPoq);
  const intl2 = arg1(dependencyMap[3]).intl;
  obj.content = intl2.string(arg1(dependencyMap[3]).t.cRW4D/);
  obj = {};
  obj = { variant: "active" };
  const intl3 = arg1(dependencyMap[3]).intl;
  obj.text = intl3.string(arg1(dependencyMap[3]).t.rimG2R);
  obj.onPress = onConfirm.onConfirm;
  const items = [callback(arg1(dependencyMap[2]).AlertActionButton, obj, "confirm"), ];
  const obj1 = { variant: "secondary" };
  const intl4 = arg1(dependencyMap[3]).intl;
  obj1.text = intl4.string(arg1(dependencyMap[3]).t.ETE/oC);
  items[1] = callback(arg1(dependencyMap[2]).AlertActionButton, obj1, "cancel");
  obj.children = items;
  obj.actions = callback2(arg1(dependencyMap[4]).AlertActions, obj);
  return callback(arg1(dependencyMap[2]).AlertModal, obj);
}
importAll(dependencyMap[0]);
({ jsx: closure_2, jsxs: closure_3 } = arg1(dependencyMap[1]));
const tmp3 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/voice_calls/native/ConfirmStartCall.tsx");

export const confirmStartCall = function confirmStartCall(fn) {
  let obj = arg1(dependencyMap[5]);
  obj = { onConfirm: fn };
  obj.openAlert("start-voice-call", callback(ConfirmStartCall, obj));
};
