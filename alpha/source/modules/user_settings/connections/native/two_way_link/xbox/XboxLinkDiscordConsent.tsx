// Module ID: 9892
// Function ID: 9893
// Name: XboxLinkDiscordConsent
// Dependencies: [19, 9879, 1072, 9893, 21, 1499, 9895, 14406, 2]
// Exports: default

// Module 9892 (XboxLinkDiscordConsent)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1072 */;
import XboxLinkConstants from "XboxLinkConstants" /* 9879 */;
import GameConsoleConstants from "GameConsoleConstants" /* 9893 */;
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
  const obj = navigation(1499);
  navigation = obj.useNavigation();
  const items = [navigation];
  const items1 = [navigation];
  const callback = react.useCallback(() => {
    navigation.push(XboxLinkModalScenes.SUCCESS);
  }, items);
  const callback1 = react.useCallback(() => {
    navigation.push(XboxLinkModalScenes.ERROR);
  }, items1);
  const TwoWayLinkDiscordConsent = navigation(9895).TwoWayLinkDiscordConsent;
  return <TwoWayLinkDiscordConsent platformType={PlatformTypes.XBOX} callbackCode={callbackCode} callbackState={callbackState} clientId={navigation(14406).ConsoleOAuthApplications.XBOX_APPLICATION_ID} scopes={XBOX_CLIENT_SCOPES} onNext={callback} onError={callback1} />;
};
