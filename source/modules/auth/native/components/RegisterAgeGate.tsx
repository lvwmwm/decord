// Module ID: 14641
// Function ID: 110399
// Name: RegisterAgeGate
// Dependencies: []
// Exports: default

// Module 14641 (RegisterAgeGate)
import subtractResult from "module_100";

let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
let closure_6 = importDefault(dependencyMap[3]);
({ updateRegistrationOptions: closure_7, useRegistrationUIStore: closure_8 } = arg1(dependencyMap[4]));
const tmp2 = arg1(dependencyMap[4]);
({ RegisterTransitionSteps: closure_9, RegistrationTransitionActionTypes: closure_10 } = arg1(dependencyMap[5]));
const AuthStates = arg1(dependencyMap[6]).AuthStates;
const tmp3 = arg1(dependencyMap[5]);
({ jsx: closure_12, jsxs: closure_13, Fragment: closure_14 } = arg1(dependencyMap[7]));
let obj = arg1(dependencyMap[8]);
obj = { inputGroup: {}, flexGrow: { flexGrow: 1 }, button: { <string:2698835749>: false, <string:3429211292>: false, <string:4221622371>: false, <string:2578216786>: false } };
obj = { color: importDefault(dependencyMap[9]).colors.INTERACTIVE_TEXT_DEFAULT };
obj.datePickerButton = obj;
obj.page = { flex: 1 };
let closure_15 = obj.createStyles(obj);
const tmp4 = arg1(dependencyMap[7]);
const utcResult = importDefault(dependencyMap[10]).utc();
let closure_17 = utcResult.toDate();
const importDefaultResult = importDefault(dependencyMap[10]);
const cloneResult = utcResult.clone();
let closure_18 = utcResult.clone().endOf("year").toDate();
const endOfResult = utcResult.clone().endOf("year");
const cloneResult1 = utcResult.clone();
let closure_19 = require("module_100").toDate();
const result = arg1(dependencyMap[29]).fileFinishedImporting("modules/auth/native/components/RegisterAgeGate.tsx");

export default function RegisterAgeGate() {
  const tmp = callback4();
  let obj = callback(dependencyMap[12]);
  let obj1 = callback(dependencyMap[13]);
  const callback = obj1.useNavigation();
  let obj2 = React;
  const context = React.useContext(callback(dependencyMap[14]).TrackRegistrationContext);
  const importDefault = context;
  const birthday = store.getState().registrationOptions.birthday;
  let tmp5 = null;
  if (null != birthday) {
    tmp5 = null;
    if (importDefault(dependencyMap[11])(birthday)) {
      tmp5 = birthday;
    }
  }
  const tmp9 = callback2(React.useState(tmp5), 2);
  const first = tmp9[0];
  const dependencyMap = first;
  const callback2 = tmp9[1];
  const consent = store.getState().registrationOptions.consent;
  let tmp8Result = tmp8(obj2.useState(null != consent && consent), 2);
  const first1 = tmp8Result[0];
  const React = first1;
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
  let closure_6 = tmp8Result[1];
  const tmp10 = null != consent && consent;
  const tmp15 = store((submitting) => submitting.submitting);
  const tmp2 = callback;
  const items1 = [closure_6];
  const stateFromStores = callback(dependencyMap[15]).useStateFromStores(items1, () => authenticationConsentRequired.getAuthenticationConsentRequired());
  const tmp17 = store((errors) => errors.errors);
  let message = importDefault(tmp3[16])("consent", tmp17);
  if (null == message) {
    message = tmp17.message;
  }
  const tmp2Result = callback(dependencyMap[15]);
  let obj5 = callback(dependencyMap[18]);
  importDefault(dependencyMap[17])(obj5.getPreviousRegistrationTransitionStep(AuthStates.AGE_GATE));
  const items2 = [context];
  const effect = React.useEffect(() => {
    context({ step: constants.AGE_GATE, actionType: constants2.VIEWED });
  }, items2);
  const tmp21 = !importDefault(dependencyMap[11])(first);
  obj = {};
  obj = { style: tmp.page };
  obj1 = {};
  const tmp18 = importDefault(dependencyMap[17]);
  const tmp23 = closure_14;
  const intl = callback(dependencyMap[21]).intl;
  obj1.headerText = intl.string(callback(dependencyMap[21]).t.NgL2GX);
  obj1.contentStyle = tmp.flexGrow;
  obj2 = { style: tmp.inputGroup };
  const obj3 = {};
  const intl2 = callback(dependencyMap[21]).intl;
  obj3.label = intl2.string(callback(dependencyMap[21]).t.xNpFJ6);
  let stringResult = null;
  if (tmp21) {
    stringResult = null;
    if (null != first) {
      const intl3 = callback(dependencyMap[21]).intl;
      stringResult = intl3.string(callback(dependencyMap[21]).t.udnqh6);
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
  const intl4 = callback(dependencyMap[21]).intl;
  obj4.accessibilityLabel = intl4.string(callback(dependencyMap[21]).t.xNpFJ6);
  const intl5 = callback(dependencyMap[21]).intl;
  obj4.accessibilityHint = intl5.string(callback(dependencyMap[21]).t.hZaF/O);
  obj3.children = callback3(callback(dependencyMap[23]).InputButton, obj4);
  obj2.children = callback3(callback(dependencyMap[22]).Input, obj3);
  const items3 = [callback3(closure_5, obj2), , , ];
  obj5 = {};
  const tmp26 = importDefault(dependencyMap[20]);
  const tmp30 = callback3;
  obj5.consentRequired = Boolean(stateFromStores);
  obj5.consent = first1;
  obj5.onToggleConsent = function onToggleConsent() {
    return callback3((arg0) => !arg0);
  };
  items3[1] = callback3(importDefault(dependencyMap[24]), obj5);
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
      obj = { step: constants.AGE_GATE, actionType: constants2.SUBMITTED };
      context(obj);
      const result = callback(first[18]).handleRegistrationSubmit(constants3.AGE_GATE, callback, context);
    }
  };
  const intl6 = callback(dependencyMap[21]).intl;
  obj7.text = intl6.string(callback(dependencyMap[21]).t.825cFy);
  obj6.children = callback3(callback(dependencyMap[25]).Button, obj7);
  items3[2] = callback3(closure_5, obj6);
  let tmp33 = null;
  if (null != message) {
    tmp33 = null;
    if ("" !== message) {
      const obj8 = { children: message };
      tmp33 = callback3(importDefault(dependencyMap[26]), obj8);
    }
  }
  items3[3] = tmp33;
  obj1.children = items3;
  obj.children = closure_13(tmp26, obj1);
  const items4 = [callback3(closure_5, obj), ];
  const obj9 = { modal: true, open: tmp8Result[0] };
  const tmp32 = importDefault(dependencyMap[24]);
  const tmp37 = callback3;
  const intl7 = callback(dependencyMap[21]).intl;
  obj9.title = intl7.string(callback(dependencyMap[21]).t.xNpFJ6);
  obj9.mode = "date";
  const tmp38 = importDefault(dependencyMap[27]);
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
