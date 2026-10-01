// Module ID: 15605
// Function ID: 15606
// Name: RegisterAgeGate
// Dependencies: [32, 19, 17, 6012, 15570, 15571, 1074, 21, 4836, 576, 4421, 15606, 4540, 1485, 15567, 504, 6376, 15586, 15569, 38, 6391, 1115, 6025, 8370, 15607, 5281, 6360, 8997, 4685, 2]
// Exports: default

// Module 15605 (RegisterAgeGate)
import react_native from "react-native" /* 17 */;
import _modDef38 from "module_38" /* 38 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import RegistrationStepsUtils from "RegistrationStepsUtils" /* 15569 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ConsentStore from "ConsentStore" /* 6012 */;
import RegistrationUIStore from "RegistrationUIStore" /* 15570 */;
import RegistrationConstants from "RegistrationConstants" /* 15571 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import module_4421_mod from "module_4421" /* 4421 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let c10;
let c9;
let closure_12;
let closure_14;
let map1;
let metroImportAll;
let metroImportDefault;
let obj2;
const View = react_native.View;
({ updateRegistrationOptions: metroImportDefault, useRegistrationUIStore: metroImportAll } = RegistrationUIStore);
({ RegisterTransitionSteps: c9, RegistrationTransitionActionTypes: c10 } = RegistrationConstants);
const AuthStates = Constants.AuthStates;
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = Fragment);
let obj = { inputGroup: { marginTop: 24, marginBottom: 24 }, flexGrow: { flexGrow: 1 }, button: { flexGrow: 0, marginBottom: 4, marginTop: 16, flexDirection: "column" }, datePickerButton: obj2, page: { flex: 1 } };
obj2 = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
let closure_15 = createStyles.createStyles(obj);
let module_4421 = module_4421_mod;
module_4421 = module_4421.utc();
let closure_17 = module_4421.toDate();
module_4421 = module_4421.clone();
const endOfResult = module_4421.endOf("year");
const maximumDate = endOfResult.toDate();
module_4421 = module_4421.clone();
const subtractResult = module_4421.subtract(100, "years");
const minimumDate = subtractResult.toDate();
let result = size.fileFinishedImporting("modules/auth/native/components/RegisterAgeGate.tsx");

export default function RegisterAgeGate() {
  let Button;
  let Input;
  let InputButton;
  let authenticationConsentRequired;
  let birthday;
  let closure_0;
  let closure_3;
  let first1;
  let intl;
  let intl2;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let items3;
  let obj12;
  let obj6;
  let obj8;
  let obj9;
  let str3;
  let stringResult;
  let tmp14;
  let tmp18Result4;
  let tmp34;
  const tmp = closure_15();
  let tmp3 = birthday;
  let obj = require("native");
  const theme = obj.useThemeContext().theme;
  let obj2 = require("useNavigation");
  _require = obj2.useNavigation();
  let obj3 = first1;
  const context = first1.useContext(require("Auth").TrackRegistrationContext);
  const useState = first1.useState;
  birthday = state.getState().registrationOptions.birthday;
  let tmp5 = null;
  if (null != birthday) {
    tmp5 = null;
    if (context(tmp3[11])(birthday)) {
      tmp5 = birthday;
    }
  }
  [birthday, _slicedToArray] = useState(tmp5);
  const useState2 = obj3.useState;
  const consent = obj4.getState().registrationOptions.consent;
  const tmp9 = null != consent && consent;
  const tmp7Result = _slicedToArray(useState2(tmp9), 2);
  first1 = tmp7Result[0];
  let closure_5 = tmp7Result[1];
  const items = [birthday];
  const memo = obj3.useMemo(() => {
    let toDateResult;
    const obj = first;
    if (first != null) {
      toDateResult = obj.toDate();
    }
    return toDateResult;
  }, items);
  [tmp14, ConsentStore] = _slicedToArray(obj3.useState(false), 2);
  _slicedToArray(obj3.useState(false), 2);
  const items1 = [ConsentStore];
  const obj4Result = state((submitting) => submitting.submitting);
  const tmp2Result = require("get initialized");
  const stateFromStores = tmp2Result.useStateFromStores(items1, () => ConsentStore.getAuthenticationConsentRequired());
  const obj4Result2 = state((errors) => errors.errors);
  let message = context(tmp3[16])("consent", obj4Result2);
  if (message == null) {
    message = obj4Result2.message;
  }
  const tmp18Result = context(tmp3[17]);
  const tmp2Result3 = require("RegistrationStepsUtils");
  tmp18Result(tmp2Result3.getPreviousRegistrationTransitionStep(AuthStates.AGE_GATE));
  const items2 = [context];
  const effect = obj3.useEffect(() => {
    const obj = { step: constants.AGE_GATE, actionType: constants2.VIEWED };
    context(obj);
  }, items2);
  const tmp22 = context(tmp3[11])(birthday);
  const obj5 = { style: tmp.page, children: closure_13(tmp18Result4, obj6) };
  obj6 = { headerText: intl.string(require("intl").t.NgL2GX), contentStyle: tmp.flexGrow, children: items3 };
  const tmp23 = !tmp22;
  tmp18Result4 = context(tmp3[20]);
  intl = tmp2(tmp3[21]).intl;
  const obj7 = { style: tmp.inputGroup, children: closure_12(Input, obj8) };
  obj8 = { label: intl2.string(require("intl").t.xNpFJ6), errorMessage: stringResult, children: closure_12(InputButton, obj9) };
  Input = tmp2(tmp3[22]).Input;
  intl2 = tmp2(tmp3[21]).intl;
  stringResult = null;
  const tmp25 = closure_14;
  if (!tmp22) {
    stringResult = null;
    if (null != birthday) {
      const intl3 = tmp2(tmp3[21]).intl;
      stringResult = intl3.string(tmp2(tmp3[21]).t.udnqh6);
    }
  }
  let formatResult;
  InputButton = tmp2(tmp3[23]).InputButton;
  if (birthday != null) {
    formatResult = birthday.format("L");
  }
  obj9 = {
    value: formatResult,
    text: module_4421.format("L"),
    onPress() {
      return ConsentStore(true);
    },
    accessibilityLabel: intl4.string(require("intl").t.xNpFJ6),
    accessibilityHint: intl5.string(require("intl").t["hZaF/O"])
  };
  intl4 = tmp2(tmp3[21]).intl;
  intl5 = tmp2(tmp3[21]).intl;
  items3 = [closure_12(closure_5, obj7), , , ];
  const obj10 = {
    consentRequired: Boolean(stateFromStores),
    consent: first1,
    onToggleConsent() {
      return closure_5((arg0) => !arg0);
    }
  };
  const tmp18Result5 = context(tmp3[24]);
  items3[1] = closure_12(tmp18Result5, obj10);
  const obj11 = { style: tmp.button, children: closure_12(Button, obj12) };
  obj12 = {
    size: "lg",
    loading: obj4Result,
    disabled: tmp23,
    onPress() {
      let tmp4;
      _modDef38(null != birthday, "birthday was not null");
      const obj = { birthday, consent: tmp4 };
      tmp4 = first1;
      const tmp3 = metroImportDefault;
      if (!first1) {
        tmp4 = !stateFromStores;
      }
      tmp3(obj);
      const obj2 = { step: constants.AGE_GATE, actionType: constants2.SUBMITTED };
      context(obj2);
      const obj3 = RegistrationStepsUtils;
      const result = obj3.handleRegistrationSubmit(AuthStates.AGE_GATE, closure_0, context);
    },
    text: intl6.string(require("intl").t["825cFy"])
  };
  Button = tmp2(tmp3[25]).Button;
  intl6 = tmp2(tmp3[21]).intl;
  items3[2] = closure_12(closure_5, obj11);
  let tmp26Result = null;
  if (null != message) {
    tmp26Result = null;
    if ("" !== message) {
      const obj13 = { children: message };
      tmp26Result = tmp26(tmp18(tmp3[26]), obj13);
    }
  }
  items3[3] = tmp26Result;
  const items4 = [closure_12(closure_5, obj5), ];
  const obj14 = {
    modal: true,
    open: tmp14,
    title: intl7.string(require("intl").t.xNpFJ6),
    mode: "date",
    theme: str3,
    date: tmp34,
    maximumDate,
    minimumDate,
    onConfirm(arg0) {
      ConsentStore(false);
      closure_3(module_4421(arg0));
    },
    onDateChange(date1) {
      closure_3(module_4421(date1));
    },
    onCancel() {
      return ConsentStore(false);
    },
    buttonColor: tmp.datePickerButton.color
  };
  const tmp18Result6 = context(tmp3[27]);
  intl7 = tmp2(tmp3[21]).intl;
  str3 = "dark";
  const tmp2Result4 = require("shared");
  if (tmp2Result4.isThemeLight(theme)) {
    str3 = "light";
  }
  tmp34 = memo;
  if (memo == null) {
    tmp34 = closure_17;
  }
  const obj15 = { children: items4 };
  items4[1] = closure_12(tmp18Result6, obj14);
  return closure_13(tmp25, obj15);
};
