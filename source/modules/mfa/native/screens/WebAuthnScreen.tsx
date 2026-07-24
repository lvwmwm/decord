// Module ID: 14688
// Function ID: 111875
// Name: AndroidAuthRadioGroup
// Dependencies: [57, 31, 27, 33, 4130, 689, 1212, 1273, 477, 507, 9239, 14689, 13693, 9237, 14692, 2]
// Exports: default

// Module 14688 (AndroidAuthRadioGroup)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { NativeModules } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
function AndroidAuthRadioGroup(setAuthenticator) {
  let authenticatorSelection;
  let inProgress;
  setAuthenticator = setAuthenticator.setAuthenticator;
  ({ authenticatorSelection, inProgress } = setAuthenticator);
  let obj = { value: obj1.ANDROID_PASSKEY };
  const intl = setAuthenticator(1212).intl;
  obj.name = intl.string(setAuthenticator(1212).t.PVVXRI);
  const items = [obj, ];
  obj = { value: obj1.AUTHENTICATE };
  const intl2 = setAuthenticator(1212).intl;
  obj.name = intl2.string(setAuthenticator(1212).t.TKop3X);
  items[1] = obj;
  obj = {
    style: _createForOfIteratorHelperLoose().radioItem,
    options: items,
    onChange(value) {
      return setAuthenticator(value.value);
    },
    value: authenticatorSelection,
    disabled: inProgress,
    withSpacing: true
  };
  return jsx(setAuthenticator(1273).RadioGroup, {
    style: _createForOfIteratorHelperLoose().radioItem,
    options: items,
    onChange(value) {
      return setAuthenticator(value.value);
    },
    value: authenticatorSelection,
    disabled: inProgress,
    withSpacing: true
  });
}
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH, borderRadius: require("_createForOfIteratorHelperLoose").radii.md };
_createForOfIteratorHelperLoose.radioItem = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj1 = { AUTHENTICATE: 0, [0]: "AUTHENTICATE", ANDROID_PASSKEY: 1, [1]: "ANDROID_PASSKEY" };
let closure_8 = { [obj1.AUTHENTICATE]: NativeModules.DCDSecurityKeyManager.authenticate, [obj1.ANDROID_PASSKEY]: NativeModules.DCDSecurityKeyManager.authenticatePasskey };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/mfa/native/screens/WebAuthnScreen.tsx");

export default function WebAuthnScreen(arg0) {
  let c4;
  let finish;
  let mfaChallenge;
  let tmp9;
  ({ mfaChallenge, finish } = arg0);
  let first1;
  let React;
  let challenge;
  let memo;
  const tmp2 = first1(React.useState(false), 2);
  let first = tmp2[0];
  const importDefault = tmp2[1];
  const tmp4 = first1(React.useState(undefined), 2);
  const dependencyMap = tmp4[1];
  let obj = finish(477);
  const tmp6 = first1(React.useState(obj.isAndroid() ? obj1.ANDROID_PASSKEY : obj1.AUTHENTICATE), 2);
  first1 = tmp6[0];
  [tmp9, c4] = first1(React.useState(false), 2);
  const methods = mfaChallenge.methods;
  challenge = methods.find((type) => "webauthn" === type.type).challenge;
  const items = [first1];
  memo = React.useMemo(() => outer1_8[first1], items);
  const items1 = [memo, challenge, finish];
  const callback = React.useCallback(() => {
    callback2(undefined);
    callback(true);
    const promise = memo(challenge);
    const nextPromise = memo(challenge).then((data) => outer1_0({ mfaType: "webauthn", data }));
    const nextPromise1 = memo(challenge).then((data) => outer1_0({ mfaType: "webauthn", data })).then(() => outer1_4(true));
    memo(challenge).then((data) => outer1_0({ mfaType: "webauthn", data })).then(() => outer1_4(true)).catch((message) => {
      if (message instanceof finish(507).HTTPResponseError) {
        const intl = finish(1212).intl;
        outer1_2(intl.string(finish(1212).t.xSCvBf));
      } else {
        const result = finish(9239).captureWebAuthnException(message, {});
        outer1_2(message.message);
        const obj = finish(9239);
      }
    }).finally(() => outer1_1(false));
  }, items1);
  obj = {};
  const tmp12 = challenge;
  const tmp8 = first1(React.useState(false), 2);
  let intl = finish(1212).intl;
  obj.headerText = intl.string(finish(1212).t.saHocI);
  const intl2 = finish(1212).intl;
  obj.subtitle = intl2.string(finish(1212).t.YpMrqM);
  obj.headerImage = challenge(finish(13693).KeyImage, {});
  let shouldDisplayAndroidFidoSelector = importDefault(9237).shouldDisplayAndroidFidoSelector;
  if (shouldDisplayAndroidFidoSelector) {
    obj = { authenticatorSelection: first1, setAuthenticator: tmp6[1] };
    let tmp16 = first;
    if (!first) {
      tmp16 = tmp9;
    }
    obj.inProgress = tmp16;
    shouldDisplayAndroidFidoSelector = challenge(AndroidAuthRadioGroup, obj);
    const tmp14 = challenge;
    const tmp15 = AndroidAuthRadioGroup;
  }
  obj.content = shouldDisplayAndroidFidoSelector;
  obj1 = { variant: "primary" };
  const tmp13 = importDefault(14689);
  const tmp17 = challenge;
  const intl3 = finish(1212).intl;
  obj1.text = intl3.string(finish(1212).t.Xr3Eks);
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
  obj.submit = tmp17(importDefault(14692), obj1);
  obj.screenProps = { mfaChallenge, finish };
  obj.mfaMethod = "webauthn";
  obj.error = tmp4[0];
  return tmp12(tmp13, obj);
};
export const AuthenticatorOption = obj1;
