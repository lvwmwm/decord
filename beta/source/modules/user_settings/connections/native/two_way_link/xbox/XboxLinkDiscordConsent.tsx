// Module ID: 9387
// Function ID: 9388
// Name: XboxLinkDiscordConsent
// Dependencies: [19, 9374, 1078, 9388, 21, 558, 568, 1488, 9389, 9390, 2]

// Module 9387 (XboxLinkDiscordConsent)
import noop from "module_19" /* 19 */;

const require = fn;
const XboxLinkModalScenes = fn(9374).XboxLinkModalScenes;
const PlatformTypes = fn(1078).PlatformTypes;
const XBOX_CLIENT_SCOPES = fn(9388).XBOX_CLIENT_SCOPES;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/xbox/XboxLinkDiscordConsent.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = navigation(568).c(9);
  ({ callbackCode, callbackState } = arg0);
  const obj = navigation(568);
  navigation = navigation(1488).useNavigation();
  if (cResult[0] !== navigation) {
    const fn = function s() {
      navigation.push(XboxLinkModalScenes.SUCCESS);
    };
    cResult[0] = navigation;
    cResult[1] = fn;
    let tmp5 = fn;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] !== navigation) {
    const fn2 = function k() {
      navigation.push(XboxLinkModalScenes.ERROR);
    };
    cResult[2] = navigation;
    cResult[3] = fn2;
    let tmp6 = fn2;
  } else {
    tmp6 = cResult[3];
  }
  if (cResult[4] === callbackCode) {
    if (cResult[5] === callbackState) {
      if (cResult[6] === tmp6) {
        if (cResult[7] === tmp5) {
          let tmp7 = cResult[8];
        }
        return tmp7;
      }
    }
  }
  const obj2 = navigation(1488);
  const tmp8 = jsx(navigation(9389).TwoWayLinkDiscordConsent, { platformType: PlatformTypes.XBOX, callbackCode, callbackState, clientId: navigation(9390).ConsoleOAuthApplications.XBOX_APPLICATION_ID, scopes: XBOX_CLIENT_SCOPES, onNext: tmp5, onError: tmp6 });
  cResult[4] = callbackCode;
  cResult[5] = callbackState;
  cResult[6] = tmp6;
  cResult[7] = tmp5;
  cResult[8] = tmp8;
  tmp7 = tmp8;
}) : ((arg0) => {
  let navigation;
  ({ callbackCode, callbackState } = arg0);
  navigation = navigation(1488).useNavigation();
  const items = [navigation];
  const items1 = [navigation];
  const callback = noop.useCallback(() => {
    navigation.push(XboxLinkModalScenes.SUCCESS);
  }, items);
  const callback1 = noop.useCallback(() => {
    navigation.push(XboxLinkModalScenes.ERROR);
  }, items1);
  const obj = navigation(1488);
  return jsx(navigation(9389).TwoWayLinkDiscordConsent, { platformType: PlatformTypes.XBOX, callbackCode, callbackState, clientId: navigation(9390).ConsoleOAuthApplications.XBOX_APPLICATION_ID, scopes: XBOX_CLIENT_SCOPES, onNext: callback, onError: callback1 });
});
