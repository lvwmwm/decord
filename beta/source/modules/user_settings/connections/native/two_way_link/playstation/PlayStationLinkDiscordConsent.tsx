// Module ID: 14878
// Function ID: 14879
// Name: PlayStationLinkDiscordConsent
// Dependencies: [19, 14873, 1072, 9827, 21, 1499, 14418, 14879, 9829, 2]
// Exports: PlayStationLinkDiscordConsent

// Module 14878 (PlayStationLinkDiscordConsent)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1072 */;
import GameConsoleConstants from "GameConsoleConstants" /* 9827 */;
import PlayStationLinkConstants from "PlayStationLinkConstants" /* 14873 */;
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
  let obj = navigation(1499);
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
    PLAYSTATION_APPLICATION_ID = tmp(14418).ConsoleOAuthApplications.PLAYSTATION_STAGING_APPLICATION_ID;
  } else {
    PLAYSTATION_APPLICATION_ID = tmp(14418).ConsoleOAuthApplications.PLAYSTATION_APPLICATION_ID;
  }
  if (platformType === tmp6.PLAYSTATION_STAGING) {
    PLAYSTATION = tmp(14879).ConsoleAuthorizationRedirectURIs.PLAYSTATION_STAGING;
  } else {
    PLAYSTATION = tmp(14879).ConsoleAuthorizationRedirectURIs.PLAYSTATION;
  }
  return jsx(navigation(9829).TwoWayLinkDiscordConsent, { platformType, callbackCode, callbackState, clientId: PLAYSTATION_APPLICATION_ID, scopes: PLAYSTATION_CLIENT_SCOPES, onNext: callback, onError: callback1, redirectUri: PLAYSTATION });
}
