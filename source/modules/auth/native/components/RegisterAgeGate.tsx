// Module ID: 14814
// Function ID: 112959
// Name: RegisterAgeGate
// Dependencies: [57, 31, 27, 5590, 14778, 14779, 653, 33, 4130, 689, 3712, 14815, 3842, 1456, 14776, 566, 9245, 14794, 14777, 44, 9255, 1212, 7575, 8416, 14816, 4543, 9043, 8437, 3976, 2]
// Exports: default

// Module 14814 (RegisterAgeGate)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { View } from "getTheme";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import useRegistrationUIStore from "useRegistrationUIStore";
import RegistrationTransitionActionTypes from "RegistrationTransitionActionTypes";
import { AuthStates } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importDefaultResult from "t";
import subtractResult from "module_100";

let closure_10;
let closure_12;
let closure_13;
let closure_14;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
({ updateRegistrationOptions: closure_7, useRegistrationUIStore: closure_8 } = useRegistrationUIStore);
({ RegisterTransitionSteps: closure_9, RegistrationTransitionActionTypes: closure_10 } = RegistrationTransitionActionTypes);
({ jsx: closure_12, jsxs: closure_13, Fragment: closure_14 } = jsxProd);
_createForOfIteratorHelperLoose = { inputGroup: { marginTop: 24, marginBottom: 24 }, flexGrow: { flexGrow: 1 }, button: { flexGrow: 0, marginBottom: 4, marginTop: 16, flexDirection: "column" } };
_createForOfIteratorHelperLoose = { color: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_TEXT_DEFAULT };
_createForOfIteratorHelperLoose.datePickerButton = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.page = { flex: 1 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const utcResult = require("t").utc();
let closure_17 = utcResult.toDate();
const cloneResult = utcResult.clone();
let closure_18 = utcResult.clone().endOf("year").toDate();
const endOfResult = utcResult.clone().endOf("year");
const cloneResult1 = utcResult.clone();
let closure_19 = require("module_100").toDate();
let result = require("get ActivityIndicator").fileFinishedImporting("modules/auth/native/components/RegisterAgeGate.tsx");

export default function RegisterAgeGate() {
  const tmp = _createForOfIteratorHelperLoose();
  let obj = _require(first[12]);
  let obj1 = _require(first[13]);
  _require = obj1.useNavigation();
  let obj2 = first1;
  const context = first1.useContext(_require(first[14]).TrackRegistrationContext);
  const birthday = store.getState().registrationOptions.birthday;
  let tmp5 = null;
  if (null != birthday) {
    tmp5 = null;
    if (context(first[11])(birthday)) {
      tmp5 = birthday;
    }
  }
  const tmp9 = callback(first1.useState(tmp5), 2);
  first = tmp9[0];
  callback = tmp9[1];
  const consent = store.getState().registrationOptions.consent;
  let tmp8Result = tmp8(obj2.useState(null != consent && consent), 2);
  first1 = tmp8Result[0];
  let closure_5 = tmp8Result[1];
  const items = [first];
  let memo = obj2.useMemo(() => {
    let toDateResult;
    if (null != first) {
      toDateResult = first.toDate();
    }
    return toDateResult;
  }, items);
  tmp8Result = tmp8(obj2.useState(false), 2);
  let _isNativeReflectConstruct = tmp8Result[1];
  const tmp10 = null != consent && consent;
  const tmp15 = store((submitting) => submitting.submitting);
  const tmp2 = _require;
  const items1 = [_isNativeReflectConstruct];
  const stateFromStores = _require(first[15]).useStateFromStores(items1, () => authenticationConsentRequired.getAuthenticationConsentRequired());
  const tmp17 = store((errors) => errors.errors);
  let message = context(tmp3[16])("consent", tmp17);
  if (null == message) {
    message = tmp17.message;
  }
  const tmp2Result = _require(first[15]);
  let obj5 = _require(first[18]);
  context(first[17])(obj5.getPreviousRegistrationTransitionStep(AuthStates.AGE_GATE));
  const items2 = [context];
  const effect = first1.useEffect(() => {
    context({ step: outer1_9.AGE_GATE, actionType: outer1_10.VIEWED });
  }, items2);
  const tmp21 = !context(first[11])(first);
  obj = {};
  obj = { style: tmp.page };
  obj1 = {};
  const tmp18 = context(first[17]);
  const tmp23 = closure_14;
  const intl = _require(first[21]).intl;
  obj1.headerText = intl.string(_require(first[21]).t.NgL2GX);
  obj1.contentStyle = tmp.flexGrow;
  obj2 = { style: tmp.inputGroup };
  const obj3 = {};
  const intl2 = _require(first[21]).intl;
  obj3.label = intl2.string(_require(first[21]).t.xNpFJ6);
  let stringResult = null;
  if (tmp21) {
    stringResult = null;
    if (null != first) {
      const intl3 = _require(first[21]).intl;
      stringResult = intl3.string(_require(first[21]).t.udnqh6);
    }
  }
  obj3.errorMessage = stringResult;
  const obj4 = {};
  let formatResult;
  if (null != first) {
    formatResult = first.format("L");
  }
  obj4.value = formatResult;
  obj4.text = utcResult.format("L");
  obj4.onPress = function onPress() {
    return authenticationConsentRequired(true);
  };
  const intl4 = _require(first[21]).intl;
  obj4.accessibilityLabel = intl4.string(_require(first[21]).t.xNpFJ6);
  const intl5 = _require(first[21]).intl;
  obj4.accessibilityHint = intl5.string(_require(first[21]).t["hZaF/O"]);
  obj3.children = callback2(_require(first[23]).InputButton, obj4);
  obj2.children = callback2(_require(first[22]).Input, obj3);
  const items3 = [callback2(closure_5, obj2), , , ];
  obj5 = {};
  const tmp26 = context(first[20]);
  const tmp30 = callback2;
  obj5.consentRequired = Boolean(stateFromStores);
  obj5.consent = first1;
  obj5.onToggleConsent = function onToggleConsent() {
    return callback3((arg0) => !arg0);
  };
  items3[1] = callback2(context(first[24]), obj5);
  const obj6 = { style: tmp.button };
  const obj7 = {
    size: "lg",
    loading: tmp15,
    disabled: tmp21,
    onPress() {
      context(first[19])(null != first, "birthday was not null");
      let obj = { birthday: first };
      let tmp3 = first1;
      if (!first1) {
        tmp3 = !stateFromStores;
      }
      obj.consent = tmp3;
      stateFromStores(obj);
      obj = { step: outer1_9.AGE_GATE, actionType: outer1_10.SUBMITTED };
      context(obj);
      const result = callback(first[18]).handleRegistrationSubmit(outer1_11.AGE_GATE, callback, context);
    }
  };
  const intl6 = _require(first[21]).intl;
  obj7.text = intl6.string(_require(first[21]).t["825cFy"]);
  obj6.children = callback2(_require(first[25]).Button, obj7);
  items3[2] = callback2(closure_5, obj6);
  let tmp33 = null;
  if (null != message) {
    tmp33 = null;
    if ("" !== message) {
      const obj8 = { children: message };
      tmp33 = callback2(context(first[26]), obj8);
    }
  }
  items3[3] = tmp33;
  obj1.children = items3;
  obj.children = closure_13(tmp26, obj1);
  const items4 = [callback2(closure_5, obj), ];
  const obj9 = { modal: true, open: tmp8Result[0] };
  const tmp32 = context(first[24]);
  const tmp37 = callback2;
  const intl7 = _require(first[21]).intl;
  obj9.title = intl7.string(_require(first[21]).t.xNpFJ6);
  obj9.mode = "date";
  const tmp38 = context(first[27]);
  let str3 = "dark";
  if (obj18.isThemeLight(obj.useThemeContext().theme)) {
    str3 = "light";
  }
  obj9.theme = str3;
  if (null == memo) {
    memo = closure_17;
  }
  obj9.date = memo;
  obj9.maximumDate = closure_18;
  obj9.minimumDate = closure_19;
  obj9.onConfirm = function onConfirm(arg0) {
    authenticationConsentRequired(false);
    callback2(context(first[10])(arg0));
  };
  obj9.onDateChange = function onDateChange(arg0) {
    callback2(context(first[10])(arg0));
  };
  obj9.onCancel = function onCancel() {
    return authenticationConsentRequired(false);
  };
  obj9.buttonColor = tmp.datePickerButton.color;
  items4[1] = tmp37(tmp38, obj9);
  obj.children = items4;
  return closure_13(tmp23, obj);
};
