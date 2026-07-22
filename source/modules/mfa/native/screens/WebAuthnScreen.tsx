// Module ID: 14527
// Function ID: 109394
// Name: AndroidAuthRadioGroup
// Dependencies: []
// Exports: default

// Module 14527 (AndroidAuthRadioGroup)
function AndroidAuthRadioGroup(setAuthenticator) {
  let authenticatorSelection;
  let inProgress;
  const arg1 = setAuthenticator.setAuthenticator;
  ({ authenticatorSelection, inProgress } = setAuthenticator);
  let obj = { value: obj1.ANDROID_PASSKEY };
  const intl = arg1(dependencyMap[6]).intl;
  obj.name = intl.string(arg1(dependencyMap[6]).t.PVVXRI);
  const items = [obj, ];
  obj = { value: obj1.AUTHENTICATE };
  const intl2 = arg1(dependencyMap[6]).intl;
  obj.name = intl2.string(arg1(dependencyMap[6]).t.TKop3X);
  items[1] = obj;
  obj = {
    style: callback2().radioItem,
    options: items,
    onChange(value) {
      return setAuthenticator(value.value);
    },
    value: authenticatorSelection,
    disabled: inProgress,
    withSpacing: true
  };
  return jsx(arg1(dependencyMap[7]).RadioGroup, obj);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const NativeModules = arg1(dependencyMap[2]).NativeModules;
const jsx = arg1(dependencyMap[3]).jsx;
let obj = arg1(dependencyMap[4]);
obj = {};
obj = { backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_SURFACE_HIGH, borderRadius: importDefault(dependencyMap[5]).radii.md };
obj.radioItem = obj;
let closure_6 = obj.createStyles(obj);
const obj1 = { AUTHENTICATE: 0, [0]: "AUTHENTICATE", ANDROID_PASSKEY: 1, [1]: "ANDROID_PASSKEY" };
let closure_8 = { [obj1.AUTHENTICATE]: NativeModules.DCDSecurityKeyManager.authenticate, [obj1.ANDROID_PASSKEY]: NativeModules.DCDSecurityKeyManager.authenticatePasskey };
const result = arg1(dependencyMap[15]).fileFinishedImporting("modules/mfa/native/screens/WebAuthnScreen.tsx");

export default function WebAuthnScreen(arg0) {
  let finish;
  let mfaChallenge;
  let tmp9;
  ({ mfaChallenge, finish } = arg0);
  const arg1 = finish;
  let callback;
  let React;
  let jsx;
  let closure_6;
  const tmp2 = callback(React.useState(false), 2);
  let first = tmp2[0];
  const importDefault = tmp2[1];
  const tmp4 = callback(React.useState(undefined), 2);
  let closure_2 = tmp4[1];
  let obj = arg1(closure_2[8]);
  const tmp6 = callback(React.useState(obj.isAndroid() ? obj1.ANDROID_PASSKEY : obj1.AUTHENTICATE), 2);
  const first1 = tmp6[0];
  callback = first1;
  [tmp9, closure_4] = callback(React.useState(false), 2);
  const methods = mfaChallenge.methods;
  const challenge = methods.find((type) => "webauthn" === type.type).challenge;
  jsx = challenge;
  const items = [first1];
  const memo = React.useMemo(() => closure_8[closure_3], items);
  closure_6 = memo;
  const items1 = [memo, challenge, finish];
  callback = React.useCallback(() => {
    callback2(undefined);
    callback(true);
    const promise = memo(challenge);
    const nextPromise = memo(challenge).then((data) => callback({ mfaType: "webauthn", data }));
    const nextPromise1 = memo(challenge).then((data) => callback({ mfaType: "webauthn", data })).then(() => callback4(true));
    memo(challenge).then((data) => callback({ mfaType: "webauthn", data })).then(() => callback4(true)).catch((message) => {
      if (message instanceof callback(callback3[9]).HTTPResponseError) {
        const intl = callback(callback3[6]).intl;
        callback3(intl.string(callback(callback3[6]).t.xSCvBf));
      } else {
        const result = callback(callback3[10]).captureWebAuthnException(message, {});
        callback3(message.message);
        const obj = callback(callback3[10]);
      }
    }).finally(() => callback2(false));
  }, items1);
  obj = {};
  const tmp12 = jsx;
  const tmp8 = callback(React.useState(false), 2);
  const intl = arg1(closure_2[6]).intl;
  obj.headerText = intl.string(arg1(closure_2[6]).t.saHocI);
  const intl2 = arg1(closure_2[6]).intl;
  obj.subtitle = intl2.string(arg1(closure_2[6]).t.YpMrqM);
  obj.headerImage = jsx(arg1(closure_2[12]).KeyImage, {});
  let shouldDisplayAndroidFidoSelector = importDefault(closure_2[13]).shouldDisplayAndroidFidoSelector;
  if (shouldDisplayAndroidFidoSelector) {
    obj = { authenticatorSelection: first1, setAuthenticator: tmp6[1] };
    let tmp16 = first;
    if (!first) {
      tmp16 = tmp9;
    }
    obj.inProgress = tmp16;
    shouldDisplayAndroidFidoSelector = <AndroidAuthRadioGroup {...obj} />;
    const tmp14 = jsx;
    const tmp15 = AndroidAuthRadioGroup;
  }
  obj.content = shouldDisplayAndroidFidoSelector;
  const obj1 = { variant: "primary" };
  const tmp13 = importDefault(closure_2[11]);
  const tmp17 = jsx;
  const intl3 = arg1(closure_2[6]).intl;
  obj1.text = intl3.string(arg1(closure_2[6]).t.Xr3Eks);
  let tmp19 = first;
  if (!first) {
    tmp19 = tmp9;
  }
  obj1.loading = tmp19;
  if (!first) {
    first = tmp9;
  }
  obj1.disabled = first;
  obj1.onPress = callback;
  obj.submit = tmp17(importDefault(closure_2[14]), obj1);
  obj.screenProps = { mfaChallenge, finish };
  obj.mfaMethod = "webauthn";
  obj.error = tmp4[0];
  return tmp12(tmp13, obj);
};
export const AuthenticatorOption = obj1;
