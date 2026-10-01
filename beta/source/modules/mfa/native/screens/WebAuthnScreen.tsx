// Module ID: 15228
// Function ID: 15229
// Name: WebAuthnScreen
// Dependencies: [32, 19, 21, 4836, 576, 6017, 1115, 1177, 1364, 1271, 6370, 15229, 14235, 6368, 15232, 2]
// Exports: default

// Module 15228 (WebAuthnScreen)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import intl4 from "intl" /* 1115 */;
import native from "native" /* 1177 */;
import react_nativeDefault from "react-native" /* 6017 */;
import NativeCeremoniesDefault from "NativeCeremonies" /* 6368 */;
import MfaOptionScreenDefault from "MfaOptionScreen" /* 15229 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let dependencyMap, importDefault;

let ANDROID_PASSKEY;
let AUTHENTICATE;
let obj2;
let tmp17;
const buttonDefault = tmp17(15232);
function AndroidAuthRadioGroup(setAuthenticator) {
  let authenticatorSelection;
  let inProgress;
  let intl;
  let intl2;
  function onChange(value) {
    return setAuthenticator(value.value);
  }
  setAuthenticator = setAuthenticator.setAuthenticator;
  ({ authenticatorSelection, inProgress } = setAuthenticator);
  const obj = { value: obj3.ANDROID_PASSKEY, name: intl.string(intl4.t.PVVXRI) };
  const tmp = closure_6();
  intl = intl4.intl;
  const items = [obj, ];
  const obj2 = { value: obj3.AUTHENTICATE, name: intl2.string(intl4.t.TKop3X) };
  intl2 = intl4.intl;
  items[1] = obj2;
  obj3 = { style: tmp.radioItem, options: items, onChange, value: authenticatorSelection, disabled: inProgress, withSpacing: true };
  return jsx(native.RadioGroup, { style: tmp.radioItem, options: items, onChange, value: authenticatorSelection, disabled: inProgress, withSpacing: true });
}
let react = react_mod;
const jsx = Fragment.jsx;
let obj = { radioItem: obj2 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.md };
let closure_6 = createStyles.createStyles(obj);
let obj3 = { AUTHENTICATE: 0, [0]: "AUTHENTICATE", ANDROID_PASSKEY: 1, [1]: "ANDROID_PASSKEY" };
let obj4 = { [AUTHENTICATE]: react_nativeDefault.authenticate, [ANDROID_PASSKEY]: react_nativeDefault.authenticatePasskey };
({ AUTHENTICATE, ANDROID_PASSKEY } = obj3);
let result = size.fileFinishedImporting("modules/mfa/native/screens/WebAuthnScreen.tsx");

export default function WebAuthnScreen(arg0) {
  let _undefined;
  let c1;
  let c4;
  let closure_2;
  let finish;
  let intl;
  let intl2;
  let intl3;
  let mfaChallenge;
  let obj5;
  let shouldDisplayAndroidFidoSelector;
  let tmp13;
  let tmp17Result;
  let tmp20;
  let tmp3;
  ({ mfaChallenge, finish } = arg0);
  importDefault = undefined;
  let first1;
  react = undefined;
  let obj = react;
  let tmp = first1;
  let tmp2 = first1(react.useState(false), 2);
  [tmp3, c1] = tmp2;
  const tmp4 = first1(react.useState(undefined), 2);
  dependencyMap = tmp4[1];
  const first = tmp4[0];
  const useState = react.useState;
  const obj2 = finish(1364);
  let tmpResult = tmp(useState(obj2.isAndroid() ? tmp8.ANDROID_PASSKEY : tmp8.AUTHENTICATE), 2);
  first1 = tmpResult[0];
  const tmp11 = tmpResult[1];
  [tmp13, c4] = tmp(obj.useState(false), 2);
  const methods = mfaChallenge.methods;
  tmp(obj.useState(false), 2);
  const challenge = methods.find((type) => "webauthn" === type.type).challenge;
  const items = [first1];
  const memo = obj.useMemo(() => obj4[first1], items);
  const items1 = [memo, challenge, finish];
  const callback = obj.useCallback(() => {
    const tmp = closure_2(undefined);
    const tmp2 = _undefined(true);
    const promise = memo(challenge);
    const nextPromise = promise.then((data) => {
      const obj = { mfaType: "webauthn", data };
      return finish(obj);
    });
    const nextPromise1 = nextPromise.then(() => closure_1_4(true));
    const catchPromise = nextPromise1.catch((error) => {
      if (error instanceof finish(closure_2[9]).HTTPResponseError) {
        const intl = tmp(tmp2[6]).intl;
        closure_1_2(intl.string(finish(closure_2[6]).t.xSCvBf));
      } else {
        const tmpResult = finish(closure_2[10]);
        const result = tmpResult.captureWebAuthnException(error, {});
        closure_1_2(error.message);
      }
    });
    catchPromise.finally(() => _undefined(false));
  }, items1);
  obj3 = { headerText: intl.string(finish(1115).t.saHocI), subtitle: intl2.string(finish(1115).t.YpMrqM), headerImage: challenge(finish(14235).KeyImage, {}), content: shouldDisplayAndroidFidoSelector, submit: challenge(tmp17Result, obj5), screenProps: { mfaChallenge, finish }, mfaMethod: "webauthn", error: first };
  const tmp18 = MfaOptionScreenDefault;
  intl = tmp6(1115).intl;
  intl2 = tmp6(1115).intl;
  shouldDisplayAndroidFidoSelector = NativeCeremoniesDefault.shouldDisplayAndroidFidoSelector;
  if (shouldDisplayAndroidFidoSelector) {
    obj4 = { authenticatorSelection: first1, setAuthenticator: tmp11, inProgress: tmp20 };
    tmp20 = tmp3;
    const tmp19 = AndroidAuthRadioGroup;
    if (!tmp3) {
      tmp20 = tmp13;
    }
    shouldDisplayAndroidFidoSelector = tmp16(tmp19, obj4);
  }
  obj5 = { variant: "primary", text: intl3.string(finish(1115).t.Xr3Eks), loading: tmp3 || tmp13, disabled: tmp3, onPress: callback };
  tmp17Result = buttonDefault;
  intl3 = tmp6(1115).intl;
  return challenge(tmp18, obj3);
};
export const AuthenticatorOption = obj3;
