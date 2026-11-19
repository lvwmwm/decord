// Module ID: 7081
// Function ID: 7082
// Name: PlayStationLinkDiscordConsent
// Dependencies: [19, 7076, 1072, 6954, 21, 1502, 6960, 7082, 6956, 2]
// Exports: PlayStationLinkDiscordConsent

// Module 7081 (PlayStationLinkDiscordConsent)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1072 */;
import GameConsoleConstants from "GameConsoleConstants" /* 6954 */;
import PlayStationLinkConstants from "PlayStationLinkConstants" /* 7076 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let navigation;

let closure_3 = PlayStationLinkConstants.PlayStationLinkModalScenes;
const PlatformTypes = Constants.PlatformTypes;
const PLAYSTATION_CLIENT_SCOPES = GameConsoleConstants.PLAYSTATION_CLIENT_SCOPES;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/playstation/PlayStationLinkDiscordConsent.tsx");

export function PlayStationLinkDiscordConsent(platformType) {
  let PLAYSTATION;
  let PLAYSTATION_APPLICATION_ID;
  let callbackCode;
  let callbackState;
  platformType = platformType.platformType;
  navigation = undefined;
  ({ callbackCode, callbackState } = platformType);
  let obj = navigation(1502);
  navigation = obj.useNavigation();
  const items = [navigation];
  const items1 = [navigation];
  const callback = react.useCallback(() => {
    navigation.push(constants.SUCCESS);
  }, items);
  const callback1 = react.useCallback((errorCode) => {
    const obj = { errorCode };
    navigation.push(constants.ERROR, obj);
  }, items1);
  const tmp6 = PlatformTypes;
  if (platformType === PlatformTypes.PLAYSTATION_STAGING) {
    PLAYSTATION_APPLICATION_ID = tmp(6960).ConsoleOAuthApplications.PLAYSTATION_STAGING_APPLICATION_ID;
  } else {
    PLAYSTATION_APPLICATION_ID = tmp(6960).ConsoleOAuthApplications.PLAYSTATION_APPLICATION_ID;
  }
  if (platformType === tmp6.PLAYSTATION_STAGING) {
    PLAYSTATION = tmp(7082).ConsoleAuthorizationRedirectURIs.PLAYSTATION_STAGING;
  } else {
    PLAYSTATION = tmp(7082).ConsoleAuthorizationRedirectURIs.PLAYSTATION;
  }
  return jsx(navigation(6956).TwoWayLinkDiscordConsent, { platformType, callbackCode, callbackState, clientId: PLAYSTATION_APPLICATION_ID, scopes: PLAYSTATION_CLIENT_SCOPES, onNext: callback, onError: callback1, redirectUri: PLAYSTATION });
}
