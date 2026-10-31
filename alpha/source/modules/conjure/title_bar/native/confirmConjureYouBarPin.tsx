// Module ID: 14710
// Function ID: 14711
// Name: confirmConjureYouBarPin
// Dependencies: [19, 21, 5964, 1113, 3868, 572, 5712, 10979, 14711, 5960, 2]
// Exports: default

// Module 14710 (confirmConjureYouBarPin)
import DispatcherDefault from "Dispatcher" /* 572 */;
import intl5 from "intl" /* 1113 */;
import _modDef3868 from "module_3868" /* 3868 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5712 */;
import useAlertStore from "useAlertStore" /* 5960 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let hasOwnProperty;
function ConjureYouBarPinAlert(pin) {
  let D9HywZ;
  let intl4;
  let items;
  let obj2;
  let string2;
  let tmp6;
  let tmp6Result;
  pin = pin.pin;
  let tmp2 = pin;
  const AlertModal = pin(5964).AlertModal;
  let intl = pin(1113).intl;
  const tmp4 = importDefault;
  let string = intl.string;
  const tmp5 = _modDef3868;
  if (pin) {
    D9HywZ = tmp5.M0Nuhc;
    tmp6 = tmp4;
  } else {
    D9HywZ = tmp5.D9HywZ;
    tmp6 = tmp4;
  }
  let obj = { title: string(D9HywZ), content: string2(pin ? tmp6Result.nLv5dy : tmp6Result.f0k4Er), actions: closure_5(closure_4, obj2) };
  const intl2 = tmp2(1113).intl;
  string2 = intl2.string;
  tmp6Result = tmp6(3868);
  const AlertActionButton = tmp2(5964).AlertActionButton;
  const intl3 = tmp2(1113).intl;
  const string3 = intl3.string;
  const tmp6Result2 = tmp6(3868);
  obj2 = { children: items };
  let obj3 = {
    variant: "primary",
    text: string3(pin ? tmp6Result2.I9ZELO : tmp6Result2["7FCFOy"]),
    onPress: function confirm() {
      let PinUprightSlashIcon;
      const obj = DispatcherDefault;
      const obj2 = { type: "CONJURE_YOU_BAR_PIN_SET", pinned: pin };
      obj.dispatch(obj2);
      const open = ToastActionCreatorsDefault.open;
      ToastActionCreatorsDefault;
      const intl = intl5.intl;
      const string = intl.string;
      const tmp6 = _modDef3868;
      const obj3 = { text: string(pin ? tmp6["VM+k4c"] : tmp6["0EEfRN"]), icon: PinUprightSlashIcon };
      const tmp2 = pin;
      if (tmp2) {
        PinUprightSlashIcon = tmp5(10979).PinIcon;
      } else {
        PinUprightSlashIcon = tmp5(14711).PinUprightSlashIcon;
      }
      open("CONJURE_YOU_BAR_PIN", obj3);
    }
  };
  items = [tmp(AlertActionButton, obj3), ];
  const obj4 = { variant: "secondary", text: intl4.string(tmp2(1113).t["ETE/oC"]) };
  const AlertActionButton2 = tmp2(5964).AlertActionButton;
  intl4 = tmp2(1113).intl;
  items[1] = closure_3(AlertActionButton2, obj4);
  return closure_3(AlertModal, obj);
}
({ jsx: c3, Fragment: closure_4, jsxs: hasOwnProperty } = Fragment);
const result = size.fileFinishedImporting("modules/conjure/title_bar/native/confirmConjureYouBarPin.tsx");

export default function confirmConjureYouBarPin(pin) {
  const obj = useAlertStore;
  const obj2 = { pin };
  obj.openAlert("ConjureYouBarPin", _false(ConjureYouBarPinAlert, obj2));
};
