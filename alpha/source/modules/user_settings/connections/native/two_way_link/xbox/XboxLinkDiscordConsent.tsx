// Module ID: 9193
// Function ID: 9194
// Name: XboxLinkDiscordConsent
// Dependencies: [19, 9180, 1085, 9194, 21, 558, 576, 1503, 9195, 12294, 2]

// Module 9193 (XboxLinkDiscordConsent)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1085 */;
import XboxLinkConstants from "XboxLinkConstants" /* 9180 */;
import GameConsoleConstants from "GameConsoleConstants" /* 9194 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let navigation;

const XboxLinkModalScenes = XboxLinkConstants.XboxLinkModalScenes;
const PlatformTypes = Constants.PlatformTypes;
const XBOX_CLIENT_SCOPES = GameConsoleConstants.XBOX_CLIENT_SCOPES;
const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function XboxLinkDiscordConsent(arg0) {
  let callbackCode;
  let callbackState;
  let tmp5;
  let tmp6;
  const obj = navigation(576);
  const cResult = obj.c(9);
  ({ callbackCode, callbackState } = arg0);
  const obj2 = navigation(1503);
  navigation = obj2.useNavigation();
  if (cResult[0] !== navigation) {
    const fn = function l() {
      navigation.push(XboxLinkModalScenes.SUCCESS);
    };
    cResult[0] = navigation;
    cResult[1] = fn;
    tmp5 = fn;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] !== navigation) {
    const fn2 = function k() {
      navigation.push(XboxLinkModalScenes.ERROR);
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
  const TwoWayLinkDiscordConsent = tmp(9195).TwoWayLinkDiscordConsent;
  const tmp8 = <TwoWayLinkDiscordConsent platformType={PlatformTypes.XBOX} callbackCode={callbackCode} callbackState={callbackState} clientId={navigation(12294).ConsoleOAuthApplications.XBOX_APPLICATION_ID} scopes={XBOX_CLIENT_SCOPES} onNext={tmp5} onError={tmp6} />;
  cResult[4] = callbackCode;
  cResult[5] = callbackState;
  cResult[6] = tmp6;
  cResult[7] = tmp5;
  cResult[8] = tmp8;
  tmp7 = tmp8;
}) : (function XboxLinkDiscordConsent(arg0) {
  let callbackCode;
  let callbackState;
  navigation = undefined;
  ({ callbackCode, callbackState } = arg0);
  const obj = navigation(1503);
  navigation = obj.useNavigation();
  const items = [navigation];
  const items1 = [navigation];
  const callback = react.useCallback(() => {
    navigation.push(XboxLinkModalScenes.SUCCESS);
  }, items);
  const callback1 = react.useCallback(() => {
    navigation.push(XboxLinkModalScenes.ERROR);
  }, items1);
  const TwoWayLinkDiscordConsent = navigation(9195).TwoWayLinkDiscordConsent;
  return <TwoWayLinkDiscordConsent platformType={PlatformTypes.XBOX} callbackCode={callbackCode} callbackState={callbackState} clientId={navigation(12294).ConsoleOAuthApplications.XBOX_APPLICATION_ID} scopes={XBOX_CLIENT_SCOPES} onNext={callback} onError={callback1} />;
});
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/xbox/XboxLinkDiscordConsent.tsx");

export default tmp2;
