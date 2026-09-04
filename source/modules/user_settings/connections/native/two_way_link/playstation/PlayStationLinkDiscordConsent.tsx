// Module ID: 9189
// Function ID: 9190
// Name: PlayStationLinkDiscordConsent
// Dependencies: [19, 9184, 673, 9162, 21, 1498, 9190, 9191, 9163, 2]
// Exports: PlayStationLinkDiscordConsent

// Module 9189 (PlayStationLinkDiscordConsent)
import closure_2 from "noop" /* 19 */;
import { PlayStationLinkModalScenes as closure_3 } from "PlayStationLinkModalScenes" /* 9184 */;
import { PlatformTypes } from "ME" /* 673 */;
import { PLAYSTATION_CLIENT_SCOPES } from "XBOX_URL_BASE" /* 9162 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/playstation/PlayStationLinkDiscordConsent.tsx");

export const PlayStationLinkDiscordConsent = function PlayStationLinkDiscordConsent(platformType) {
  platformType = platformType.platformType;
  let navigation;
  ({ callbackCode, callbackState } = platformType);
  let obj = navigation(1498);
  navigation = obj.useNavigation();
  const items = [navigation];
  const items1 = [navigation];
  const callback = React.useCallback(() => {
    navigation.push(closure_1_3.SUCCESS);
  }, items);
  const callback1 = React.useCallback((errorCode) => {
    navigation.push(closure_1_3.ERROR, { errorCode });
  }, items1);
  if (platformType === PlatformTypes.PLAYSTATION_STAGING) {
    let PLAYSTATION_APPLICATION_ID = tmp(9190).ConsoleOAuthApplications.PLAYSTATION_STAGING_APPLICATION_ID;
  } else {
    PLAYSTATION_APPLICATION_ID = tmp(9190).ConsoleOAuthApplications.PLAYSTATION_APPLICATION_ID;
  }
  if (platformType === PlatformTypes.PLAYSTATION_STAGING) {
    let PLAYSTATION = tmp(9191).ConsoleAuthorizationRedirectURIs.PLAYSTATION_STAGING;
  } else {
    PLAYSTATION = tmp(9191).ConsoleAuthorizationRedirectURIs.PLAYSTATION;
  }
  obj = { platformType, callbackCode, callbackState, clientId: PLAYSTATION_APPLICATION_ID, scopes: PLAYSTATION_CLIENT_SCOPES, onNext: callback, onError: callback1, redirectUri: PLAYSTATION };
  return jsx(navigation(9163).TwoWayLinkDiscordConsent, { platformType, callbackCode, callbackState, clientId: PLAYSTATION_APPLICATION_ID, scopes: PLAYSTATION_CLIENT_SCOPES, onNext: callback, onError: callback1, redirectUri: PLAYSTATION });
};
