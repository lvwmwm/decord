// Module ID: 14672
// Function ID: 14673
// Name: confirmConjureYouBarPin
// Dependencies: [19, 21, 5959, 1114, 3865, 572, 5707, 10960, 14673, 5955, 2]
// Exports: default

// Module 14672 (confirmConjureYouBarPin)
import DispatcherDefault from "Dispatcher" /* 572 */;
import intl5 from "intl" /* 1114 */;
import _modDef3865 from "module_3865" /* 3865 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5707 */;
import useAlertStore from "useAlertStore" /* 5955 */;
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
  const AlertModal = pin(5959).AlertModal;
  let intl = pin(1114).intl;
  const tmp4 = importDefault;
  let string = intl.string;
  const tmp5 = _modDef3865;
  if (pin) {
    D9HywZ = tmp5.M0Nuhc;
    tmp6 = tmp4;
  } else {
    D9HywZ = tmp5.D9HywZ;
    tmp6 = tmp4;
  }
  let obj = { title: string(D9HywZ), content: string2(pin ? tmp6Result.nLv5dy : tmp6Result.f0k4Er), actions: closure_5(closure_4, obj2) };
  const intl2 = tmp2(1114).intl;
  string2 = intl2.string;
  tmp6Result = tmp6(3865);
  const AlertActionButton = tmp2(5959).AlertActionButton;
  const intl3 = tmp2(1114).intl;
  const string3 = intl3.string;
  const tmp6Result2 = tmp6(3865);
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
      const tmp6 = _modDef3865;
      const obj3 = { text: string(pin ? tmp6["VM+k4c"] : tmp6["0EEfRN"]), icon: PinUprightSlashIcon };
      const tmp2 = pin;
      if (tmp2) {
        PinUprightSlashIcon = tmp5(10960).PinIcon;
      } else {
        PinUprightSlashIcon = tmp5(14673).PinUprightSlashIcon;
      }
      open("CONJURE_YOU_BAR_PIN", obj3);
    }
  };
  items = [tmp(AlertActionButton, obj3), ];
  const obj4 = { variant: "secondary", text: intl4.string(tmp2(1114).t["ETE/oC"]) };
  const AlertActionButton2 = tmp2(5959).AlertActionButton;
  intl4 = tmp2(1114).intl;
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
