// Module ID: 7470
// Function ID: 7471
// Name: XboxLinkDiscordConsent
// Dependencies: [19, 7426, 1072, 7471, 21, 1502, 7473, 7477, 2]
// Exports: default

// Module 7470 (XboxLinkDiscordConsent)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1072 */;
import XboxLinkConstants from "XboxLinkConstants" /* 7426 */;
import GameConsoleConstants from "GameConsoleConstants" /* 7471 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let navigation;

const XboxLinkModalScenes = XboxLinkConstants.XboxLinkModalScenes;
const PlatformTypes = Constants.PlatformTypes;
const XBOX_CLIENT_SCOPES = GameConsoleConstants.XBOX_CLIENT_SCOPES;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/xbox/XboxLinkDiscordConsent.tsx");

export default function XboxLinkDiscordConsent(arg0) {
  let callbackCode;
  let callbackState;
  navigation = undefined;
  ({ callbackCode, callbackState } = arg0);
  const obj = navigation(1502);
  navigation = obj.useNavigation();
  const items = [navigation];
  const items1 = [navigation];
  const callback = react.useCallback(() => {
    navigation.push(XboxLinkModalScenes.SUCCESS);
  }, items);
  const callback1 = react.useCallback(() => {
    navigation.push(XboxLinkModalScenes.ERROR);
  }, items1);
  const TwoWayLinkDiscordConsent = navigation(7473).TwoWayLinkDiscordConsent;
  return <TwoWayLinkDiscordConsent platformType={PlatformTypes.XBOX} callbackCode={callbackCode} callbackState={callbackState} clientId={navigation(7477).ConsoleOAuthApplications.XBOX_APPLICATION_ID} scopes={XBOX_CLIENT_SCOPES} onNext={callback} onError={callback1} />;
};
