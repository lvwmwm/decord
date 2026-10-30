// Module ID: 14518
// Function ID: 14519
// Name: ConfirmStartCall
// Dependencies: [19, 21, 5959, 1114, 5959, 5955, 2]
// Exports: confirmStartCall

// Module 14518 (ConfirmStartCall)
import intl5 from "intl" /* 1114 */;
import useAlertStore from "useAlertStore" /* 5955 */;
import AlertModal2 from "AlertModal" /* 5959 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let c2;
let c3;
function ConfirmStartCall(onConfirm) {
  let AlertActions;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items;
  let obj2;
  onConfirm = onConfirm.onConfirm;
  const obj = { title: intl.string(intl5.t.HlAPoq), content: intl2.string(intl5.t["cRW4D/"]), actions: _false(AlertActions, obj2) };
  const AlertModal = AlertModal2.AlertModal;
  intl = intl5.intl;
  intl2 = intl5.intl;
  obj2 = { children: items };
  AlertActions = AlertModal2.AlertActions;
  const obj3 = { variant: "active", text: intl3.string(intl5.t.rimG2R), onPress: onConfirm };
  const AlertActionButton = AlertModal2.AlertActionButton;
  intl3 = intl5.intl;
  items = [React2(AlertActionButton, obj3, "confirm"), ];
  const obj4 = { variant: "secondary", text: intl4.string(intl5.t["ETE/oC"]) };
  const AlertActionButton2 = AlertModal2.AlertActionButton;
  intl4 = intl5.intl;
  items[1] = React2(AlertActionButton2, obj4, "cancel");
  return React2(AlertModal, obj);
}
({ jsx: c2, jsxs: c3 } = Fragment);
const result = size.fileFinishedImporting("modules/voice_calls/native/ConfirmStartCall.tsx");

export function confirmStartCall(fn) {
  const obj = useAlertStore;
  const obj2 = { onConfirm: fn };
  obj.openAlert("start-voice-call", React2(ConfirmStartCall, obj2));
}
