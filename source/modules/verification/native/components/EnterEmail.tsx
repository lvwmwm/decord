// Module ID: 9220
// Function ID: 72098
// Name: EnterEmail
// Dependencies: []
// Exports: default

// Module 9220 (EnterEmail)
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
let closure_6 = importAll(dependencyMap[2]);
({ View: closure_7, ScrollView: closure_8 } = arg1(dependencyMap[3]));
let closure_9 = importDefault(dependencyMap[4]);
const tmp2 = arg1(dependencyMap[3]);
({ useChangeEmailError: closure_10, useChangeEmailStore: closure_11, ChangeEmailFields: closure_12 } = arg1(dependencyMap[5]));
const AnalyticEvents = arg1(dependencyMap[6]).AnalyticEvents;
const tmp3 = arg1(dependencyMap[5]);
({ jsx: closure_14, jsxs: closure_15 } = arg1(dependencyMap[7]));
let obj = arg1(dependencyMap[8]);
obj = {};
obj = { backgroundColor: importDefault(dependencyMap[9]).colors.BACKGROUND_BASE_LOW };
obj.background = obj;
obj.container = { paddingHorizontal: "166185917b52ede00e3e20d3f1f7faeb", accessible: "CheckmarkSmallIcon" };
obj.title = { textAlign: "center" };
obj.prompt = {};
obj.input = {};
let closure_16 = obj.createStyles(obj);
const tmp4 = arg1(dependencyMap[7]);
const result = arg1(dependencyMap[19]).fileFinishedImporting("modules/verification/native/components/EnterEmail.tsx");

export default function EnterEmail(isChangeEmail) {
  isChangeEmail = isChangeEmail.isChangeEmail;
  const arg1 = isChangeEmail;
  const changeEmailReason = isChangeEmail.changeEmailReason;
  const importDefault = changeEmailReason;
  const tmp = callback5();
  let obj = arg1(dependencyMap[10]);
  const navigation = obj.useNavigation();
  const importAll = navigation;
  let obj1 = arg1(dependencyMap[11]);
  const items = [closure_9];
  const stateFromStores = obj1.useStateFromStores(items, () => currentUser.getCurrentUser());
  const dependencyMap = stateFromStores;
  const tmp4 = callback(React.useState(""), 2);
  const first = tmp4[0];
  let closure_4 = first;
  const tmp6 = callback(callback2(constants.EMAIL), 2);
  let callback = tmp7;
  const emailToken = callback3().emailToken;
  const React = emailToken;
  const items1 = [navigation];
  callback = React.useCallback((arg0) => {
    const isChangeEmail = arg0;
    const routes = navigation.getState().routes;
    return routes.findIndex((name) => name.name === name);
  }, items1);
  const items2 = [navigation, stateFromStores, tmp6[1], first, emailToken, callback, isChangeEmail, changeEmailReason];
  const callback1 = React.useCallback(() => {
    const obj = {};
    // CreateGeneratorClosureLongIndex (0x67)
    const isChangeEmail = first(tmp);
    obj.onSubmit = function() {
      return callback(...arguments);
    };
    obj.onSuccess = function onSuccess() {
      if (closure_0) {
        let obj = { change_email_reason_enum: callback2 };
        callback2(closure_3[14]).track(constants.USER_ACCOUNT_EMAIL_CHANGE_SAVE_NEW_EMAIL, obj);
        const obj2 = callback2(closure_3[14]);
        const result = callback3(closure_3[13]).finishChangeEmailFlow(callback3, closure_4);
        const obj4 = callback3(closure_3[13]);
      } else {
        obj = callback3(closure_3[13]);
        const result1 = obj.finishVerifyEmailFlow(callback3, closure_7);
      }
    };
    obj.hideUnverifiedBanner = true;
    navigation.push(isChangeEmail(stateFromStores[12]).VerificationModalScenes.VERIFY_PASSWORD, obj);
  }, items2);
  let tmp11Result = null;
  if (null != stateFromStores) {
    obj = { style: tmp.background };
    obj = { style: tmp.container };
    obj1 = { Opened: 24, marginVertical: 24, marginStart: null, marginEnd: "aa9c26c29990ba7a6584e51ab5c56efa", style: tmp.title };
    if (null != stateFromStores.email) {
      const intl2 = arg1(dependencyMap[16]).intl;
      let stringResult = intl2.string(arg1(dependencyMap[16]).t.Vm8akB);
    } else {
      const intl = arg1(dependencyMap[16]).intl;
      stringResult = intl.string(arg1(dependencyMap[16]).t.CDTD/K);
    }
    obj1.children = stringResult;
    const items3 = [callback4(arg1(dependencyMap[15]).Text, obj1), , , ];
    const obj2 = { style: tmp.prompt };
    if (null != stateFromStores.email) {
      const intl4 = arg1(dependencyMap[16]).intl;
      const obj3 = { email: stateFromStores.email };
      let formatToPlainStringResult = intl4.formatToPlainString(arg1(dependencyMap[16]).t.Z7CaI7, obj3);
    } else {
      const intl3 = arg1(dependencyMap[16]).intl;
      formatToPlainStringResult = intl3.string(arg1(dependencyMap[16]).t.YXXMxK);
    }
    obj2.children = formatToPlainStringResult;
    items3[1] = callback4(arg1(dependencyMap[15]).Text, obj2);
    const obj4 = { style: tmp.input };
    const intl5 = arg1(dependencyMap[16]).intl;
    obj4.label = intl5.string(arg1(dependencyMap[16]).t.w/qqKK);
    obj4.textContentType = "emailAddress";
    obj4.keyboardType = "email-address";
    obj4.value = first;
    obj4.onChangeText = tmp4[1];
    obj4.onSubmitEditing = callback1;
    const intl6 = arg1(dependencyMap[16]).intl;
    obj4.placeholder = intl6.string(arg1(dependencyMap[16]).t.dI4d4S);
    obj4.returnKeyType = "done";
    obj4.autoCapitalize = "none";
    obj4.error = tmp6[0];
    obj4.autoFocus = true;
    items3[2] = callback4(importDefault(dependencyMap[17]), obj4);
    const obj5 = {};
    const intl7 = arg1(dependencyMap[16]).intl;
    obj5.text = intl7.string(arg1(dependencyMap[16]).t.Vm8akB);
    obj5.onPress = callback1;
    obj5.disabled = "" === first || first === stateFromStores.email;
    items3[3] = callback4(arg1(dependencyMap[18]).Button, obj5);
    obj.children = items3;
    obj.children = closure_15(callback, obj);
    tmp11Result = tmp11(closure_8, obj);
    const tmp12 = closure_8;
    const tmp13 = closure_15;
    const tmp14 = callback;
    const tmp22 = callback4;
    const tmp30 = callback4;
    const tmp33 = importDefault(dependencyMap[17]);
  }
  return tmp11Result;
};
