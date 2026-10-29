// Module ID: 14638
// Function ID: 14639
// Name: confirmConjureYouBarPin
// Dependencies: [19, 21, 558, 576, 584, 5701, 1125, 3864, 10935, 14639, 5952, 5948, 2]
// Exports: default

// Module 14638 (confirmConjureYouBarPin)
import DispatcherDefault from "Dispatcher" /* 584 */;
import intl5 from "intl" /* 1125 */;
import _modDef3864 from "module_3864" /* 3864 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5701 */;
import useAlertStore from "useAlertStore" /* 5948 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let hasOwnProperty;
({ jsx: c3, Fragment: closure_4, jsxs: hasOwnProperty } = Fragment);
let closure_6 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureYouBarPinAlert(pin) {
  let intl4;
  let items;
  let tmp13;
  let tmp4;
  let tmp5;
  let tmp9;
  let tmp2 = dependencyMap;
  let obj = pin(576);
  const cResult = obj.c(18);
  pin = pin.pin;
  if (cResult[0] !== pin) {
    function confirm() {
      let PinUprightSlashIcon;
      const obj = DispatcherDefault;
      const obj2 = { type: "CONJURE_YOU_BAR_PIN_SET", pinned: pin };
      obj.dispatch(obj2);
      const open = ToastActionCreatorsDefault.open;
      ToastActionCreatorsDefault;
      const intl = intl5.intl;
      const string = intl.string;
      const tmp6 = _modDef3864;
      const obj3 = { text: string(pin ? tmp6["VM+k4c"] : tmp6["0EEfRN"]), icon: PinUprightSlashIcon };
      const tmp2 = pin;
      if (tmp2) {
        PinUprightSlashIcon = tmp5(10935).PinIcon;
      } else {
        PinUprightSlashIcon = tmp5(14639).PinUprightSlashIcon;
      }
      open("CONJURE_YOU_BAR_PIN", obj3);
    }
    cResult[0] = pin;
    cResult[1] = confirm;
    tmp4 = confirm;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] !== pin) {
    let intl = tmp(1125).intl;
    let tmp6 = importDefault;
    let string = intl.string;
    const tmp7 = _modDef3864;
    const stringResult = string(pin ? tmp7.M0Nuhc : tmp7.D9HywZ);
    cResult[2] = pin;
    cResult[3] = stringResult;
    tmp5 = stringResult;
  } else {
    tmp5 = cResult[3];
  }
  if (cResult[4] !== pin) {
    const intl2 = tmp(1125).intl;
    const string2 = intl2.string;
    const tmp11 = _modDef3864;
    const string2Result = string2(pin ? tmp11.nLv5dy : tmp11.f0k4Er);
    cResult[4] = pin;
    cResult[5] = string2Result;
    tmp9 = string2Result;
  } else {
    tmp9 = cResult[5];
  }
  if (cResult[6] !== pin) {
    const intl3 = tmp(1125).intl;
    const string3 = intl3.string;
    const tmp15 = _modDef3864;
    const string3Result = string3(pin ? tmp15.I9ZELO : tmp15["7FCFOy"]);
    cResult[6] = pin;
    cResult[7] = string3Result;
    tmp13 = string3Result;
  } else {
    tmp13 = cResult[7];
  }
  if (cResult[8] === tmp4) {
    let tmp17;
    let tmp20;
    let tmp23;
    if (cResult[9] === tmp13) {
      tmp17 = cResult[10];
    }
    const _Symbol = Symbol;
    if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
      let obj2 = { variant: "secondary", text: intl4.string(tmp(1125).t["ETE/oC"]) };
      const AlertActionButton = tmp(5952).AlertActionButton;
      intl4 = tmp(1125).intl;
      const tmp22 = closure_3(AlertActionButton, obj2);
      cResult[11] = tmp22;
      tmp20 = tmp22;
    } else {
      tmp20 = cResult[11];
    }
    if (cResult[12] !== tmp17) {
      let obj3 = { children: items };
      items = [tmp17, tmp20];
      const tmp26 = closure_5(closure_4, obj3);
      cResult[12] = tmp17;
      cResult[13] = tmp26;
      tmp23 = tmp26;
    } else {
      tmp23 = cResult[13];
    }
    if (cResult[14] === tmp5) {
      if (cResult[15] === tmp9) {
        let tmp27;
        if (cResult[16] === tmp23) {
          tmp27 = cResult[17];
        }
        return tmp27;
      }
    }
    const obj4 = { title: tmp5, content: tmp9, actions: tmp23 };
    const tmp29 = closure_3(pin(5952).AlertModal, obj4);
    cResult[14] = tmp5;
    cResult[15] = tmp9;
    cResult[16] = tmp23;
    cResult[17] = tmp29;
    tmp27 = tmp29;
  }
  const tmp18 = closure_3(pin(5952).AlertActionButton, { variant: "primary", text: tmp13, onPress: tmp4 });
  cResult[8] = tmp4;
  cResult[9] = tmp13;
  cResult[10] = tmp18;
  tmp17 = tmp18;
}) : (function ConjureYouBarPinAlert(pin) {
  let D9HywZ;
  let intl4;
  let items;
  let obj2;
  let string2;
  let tmp6;
  let tmp6Result;
  pin = pin.pin;
  let tmp2 = pin;
  const AlertModal = pin(5952).AlertModal;
  let intl = pin(1125).intl;
  const tmp4 = importDefault;
  let string = intl.string;
  const tmp5 = _modDef3864;
  if (pin) {
    D9HywZ = tmp5.M0Nuhc;
    tmp6 = tmp4;
  } else {
    D9HywZ = tmp5.D9HywZ;
    tmp6 = tmp4;
  }
  let obj = { title: string(D9HywZ), content: string2(pin ? tmp6Result.nLv5dy : tmp6Result.f0k4Er), actions: closure_5(closure_4, obj2) };
  const intl2 = tmp2(1125).intl;
  string2 = intl2.string;
  tmp6Result = tmp6(3864);
  const AlertActionButton = tmp2(5952).AlertActionButton;
  const intl3 = tmp2(1125).intl;
  const string3 = intl3.string;
  const tmp6Result2 = tmp6(3864);
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
      const tmp6 = _modDef3864;
      const obj3 = { text: string(pin ? tmp6["VM+k4c"] : tmp6["0EEfRN"]), icon: PinUprightSlashIcon };
      const tmp2 = pin;
      if (tmp2) {
        PinUprightSlashIcon = tmp5(10935).PinIcon;
      } else {
        PinUprightSlashIcon = tmp5(14639).PinUprightSlashIcon;
      }
      open("CONJURE_YOU_BAR_PIN", obj3);
    }
  };
  items = [tmp(AlertActionButton, obj3), ];
  const obj4 = { variant: "secondary", text: intl4.string(tmp2(1125).t["ETE/oC"]) };
  const AlertActionButton2 = tmp2(5952).AlertActionButton;
  intl4 = tmp2(1125).intl;
  items[1] = closure_3(AlertActionButton2, obj4);
  return closure_3(AlertModal, obj);
});
const result = size.fileFinishedImporting("modules/conjure/title_bar/native/confirmConjureYouBarPin.tsx");

export default function confirmConjureYouBarPin(pin) {
  const obj = useAlertStore;
  const obj2 = { pin };
  obj.openAlert("ConjureYouBarPin", _false(closure_6, obj2));
};
