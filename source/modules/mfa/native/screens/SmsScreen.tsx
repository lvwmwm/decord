// Module ID: 14536
// Function ID: 109457
// Name: SmsScreen
// Dependencies: []
// Exports: default

// Module 14536 (SmsScreen)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importAll(dependencyMap[2]);
const View = arg1(dependencyMap[3]).View;
const Endpoints = arg1(dependencyMap[4]).Endpoints;
({ jsx: closure_8, jsxs: closure_9 } = arg1(dependencyMap[5]));
const tmp2 = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[15]).fileFinishedImporting("modules/mfa/native/screens/SmsScreen.tsx");

export default function SmsScreen(mfaChallenge) {
  let tmp10;
  let tmp5;
  let tmp8;
  mfaChallenge = mfaChallenge.mfaChallenge;
  const arg1 = mfaChallenge;
  const finish = mfaChallenge.finish;
  const importDefault = finish;
  let closure_2;
  let closure_3;
  let React;
  let closure_6;
  let closure_7;
  function handleChange(Button, arg1) {
    return _handleChange(...arguments);
  }
  function _handleChange(closure_6, arg1) {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = _undefined(tmp);
    const _handleChange = obj;
    return obj(...arguments);
  }
  function _handleResend() {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = _undefined(tmp);
    const _handleResend = obj;
    return obj(...arguments);
  }
  let obj = importDefault(closure_2[7]);
  const screenStyles = obj.useScreenStyles(importDefault(closure_2[6])());
  const tmp3 = callback(React.useState(null), 2);
  closure_2 = tmp3[1];
  const tmp = importDefault(closure_2[6])();
  [tmp5, closure_3] = callback(React.useState(false), 2);
  const tmp6 = callback(React.useState(""), 2);
  const first = tmp6[0];
  const callback = first;
  React = tmp6[1];
  const intl = arg1(closure_2[8]).intl;
  const tmp4 = callback(React.useState(false), 2);
  [tmp8, closure_6] = callback(React.useState(intl.string(arg1(closure_2[8]).t.LQdCQE)), 2);
  const tmp7 = callback(React.useState(intl.string(arg1(closure_2[8]).t.LQdCQE)), 2);
  [tmp10, closure_7] = callback(React.useState(false), 2);
  const items = [mfaChallenge.ticket];
  const effect = React.useEffect(() => {
    callback(null);
    const HTTP = mfaChallenge(callback[9]).HTTP;
    let obj = { url: constants.LOGIN_SMS_SEND, body: obj, oldFormErrors: true, rejectWithError: false };
    obj = { ticket: mfaChallenge.ticket };
    const postResult = HTTP.post(obj);
    HTTP.post(obj).then((body) => {
      const intl = callback(closure_2[8]).intl;
      callback2(intl.formatToPlainString(callback(closure_2[8]).t.8r6h7+, { phoneNumber: body.body.phone }));
    }).catch((body) => {
      body = body.body;
      let message;
      if (null != body) {
        message = body.message;
      }
      if (null == message) {
        message = body.message;
      }
      closure_2(message);
      callback2(undefined);
    });
  }, items);
  obj = {};
  const tmp9 = callback(React.useState(false), 2);
  const intl2 = arg1(closure_2[8]).intl;
  obj.headerText = intl2.string(arg1(closure_2[8]).t.o4JNrO);
  obj.subtitle = tmp8;
  obj = { style: screenStyles.inputContainer };
  const obj1 = { maxLength: arg1(closure_2[10]).SMS_CODE_LENGTH, onChange: handleChange };
  const intl3 = arg1(closure_2[8]).intl;
  obj1.label = intl3.string(arg1(closure_2[8]).t./sHnXc);
  const intl4 = arg1(closure_2[8]).intl;
  obj1.accessibilityLabel = intl4.string(arg1(closure_2[8]).t.HZPBOd);
  const intl5 = arg1(closure_2[8]).intl;
  obj1.placeholder = intl5.string(arg1(closure_2[8]).t.tARzgo);
  obj1.errorMessage = tmp3[0];
  const items1 = [handleChange(arg1(closure_2[12]).TextInput, obj1), ];
  const obj2 = { EMOJI_PICKER_EMOJI_CLICKED: 44, overflow: null, getOwnPropertyNames: true };
  const intl6 = arg1(closure_2[8]).intl;
  obj2.text = intl6.string(arg1(closure_2[8]).t.WbaP3r);
  obj2.onPress = function handleResend() {
    return _handleResend(...arguments);
  };
  items1[1] = handleChange(arg1(closure_2[13]).Button, obj2);
  obj.children = items1;
  obj.input = _handleChange(closure_6, obj);
  const obj3 = { variant: "primary" };
  const tmp13 = importDefault(closure_2[11]);
  const intl7 = arg1(closure_2[8]).intl;
  obj3.text = intl7.string(arg1(closure_2[8]).t.geKm7t);
  let tmp15 = tmp5;
  if (!tmp5) {
    tmp15 = tmp10;
  }
  obj3.loading = tmp15;
  obj3.onPress = function onPress() {
    handleChange(first);
  };
  if (!tmp5) {
    tmp5 = tmp10;
  }
  if (!tmp5) {
    tmp5 = first.length !== arg1(closure_2[10]).SMS_CODE_LENGTH;
  }
  obj3.disabled = tmp5;
  obj.submit = handleChange(importDefault(closure_2[14]), obj3);
  obj.screenProps = { mfaChallenge, finish };
  obj.mfaMethod = "sms";
  return handleChange(tmp13, obj);
};
