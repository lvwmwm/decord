// Module ID: 13786
// Function ID: 13787
// Name: confirmConjureYouBarPin
// Dependencies: [19, 21, 5866, 1112, 4190, 572, 5595, 11671, 13787, 5862, 2]
// Exports: default

// Module 13786 (confirmConjureYouBarPin)
import DispatcherDefault from "Dispatcher" /* 572 */;
import intl5 from "intl" /* 1112 */;
import _modDef4190 from "module_4190" /* 4190 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5595 */;
import useAlertStore from "useAlertStore" /* 5862 */;
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
  const AlertModal = pin(5866).AlertModal;
  let intl = pin(1112).intl;
  const tmp4 = importDefault;
  let string = intl.string;
  const tmp5 = _modDef4190;
  if (pin) {
    D9HywZ = tmp5.M0Nuhc;
    tmp6 = tmp4;
  } else {
    D9HywZ = tmp5.D9HywZ;
    tmp6 = tmp4;
  }
  let obj = { title: string(D9HywZ), content: string2(pin ? tmp6Result.nLv5dy : tmp6Result.f0k4Er), actions: closure_5(closure_4, obj2) };
  const intl2 = tmp2(1112).intl;
  string2 = intl2.string;
  tmp6Result = tmp6(4190);
  const AlertActionButton = tmp2(5866).AlertActionButton;
  const intl3 = tmp2(1112).intl;
  const string3 = intl3.string;
  const tmp6Result2 = tmp6(4190);
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
      const tmp6 = _modDef4190;
      const obj3 = { text: string(pin ? tmp6["VM+k4c"] : tmp6["0EEfRN"]), icon: PinUprightSlashIcon };
      const tmp2 = pin;
      if (tmp2) {
        PinUprightSlashIcon = tmp5(11671).PinIcon;
      } else {
        PinUprightSlashIcon = tmp5(13787).PinUprightSlashIcon;
      }
      open("CONJURE_YOU_BAR_PIN", obj3);
    }
  };
  items = [tmp(AlertActionButton, obj3), ];
  const obj4 = { variant: "secondary", text: intl4.string(tmp2(1112).t["ETE/oC"]) };
  const AlertActionButton2 = tmp2(5866).AlertActionButton;
  intl4 = tmp2(1112).intl;
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
