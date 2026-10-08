// Module ID: 9172
// Function ID: 9173
// Name: CrunchyrollLinkDiscordConsent
// Dependencies: [19, 9167, 1085, 8432, 21, 558, 576, 1502, 9128, 2]

// Module 9172 (CrunchyrollLinkDiscordConsent)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1085 */;
import CrunchyrollLinkConstants from "CrunchyrollLinkConstants" /* 9167 */;
import react from "react" /* 19 */;
import CrunchyrollConnectionConstants from "CrunchyrollConnectionConstants" /* 8432 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let navigation;

let hasOwnProperty;
let metroRequire;
let closure_3 = CrunchyrollLinkConstants.CrunchyrollLinkModalScenes;
const PlatformTypes = Constants.PlatformTypes;
({ CRUNCHYROLL_CLIENT_ID: hasOwnProperty, CRUNCHYROLL_CLIENT_SCOPES: metroRequire } = CrunchyrollConnectionConstants);
const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function CrunchyrollLinkDiscordConsent(arg0) {
  let callbackCode;
  let callbackState;
  let tmp5;
  let tmp6;
  const obj = navigation(576);
  const cResult = obj.c(9);
  ({ callbackCode, callbackState } = arg0);
  const obj2 = navigation(1502);
  const tmp = navigation;
  navigation = obj2.useNavigation();
  if (cResult[0] !== navigation) {
    const fn = function c() {
      navigation.push(constants.SUCCESS);
    };
    cResult[0] = navigation;
    cResult[1] = fn;
    tmp5 = fn;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] !== navigation) {
    const fn2 = function p() {
      navigation.push(constants.ERROR);
    };
    cResult[2] = navigation;
    cResult[3] = fn2;
    tmp6 = fn2;
  } else {
    tmp6 = cResult[3];
  }
  if (cResult[4] === callbackCode) {
    if (cResult[5] === callbackState) {
      if (cResult[6] === tmp6) {
        let tmp7;
        if (cResult[7] === tmp5) {
          tmp7 = cResult[8];
        }
        return tmp7;
      }
    }
  }
  const tmp8 = jsx(tmp(9128).TwoWayLinkDiscordConsent, { platformType: PlatformTypes.CRUNCHYROLL, callbackCode, callbackState, clientId, scopes, onNext: tmp5, onError: tmp6 });
  cResult[4] = callbackCode;
  cResult[5] = callbackState;
  cResult[6] = tmp6;
  cResult[7] = tmp5;
  cResult[8] = tmp8;
  tmp7 = tmp8;
}) : (function CrunchyrollLinkDiscordConsent(arg0) {
  let callbackCode;
  let callbackState;
  navigation = undefined;
  ({ callbackCode, callbackState } = arg0);
  const obj = navigation(1502);
  navigation = obj.useNavigation();
  const items = [navigation];
  const items1 = [navigation];
  const callback = react.useCallback(() => {
    navigation.push(constants.SUCCESS);
  }, items);
  const callback1 = react.useCallback(() => {
    navigation.push(constants.ERROR);
  }, items1);
  return jsx(navigation(9128).TwoWayLinkDiscordConsent, { platformType: PlatformTypes.CRUNCHYROLL, callbackCode, callbackState, clientId, scopes, onNext: callback, onError: callback1 });
});
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/crunchyroll/CrunchyrollLinkDiscordConsent.tsx");

export default tmp3;
