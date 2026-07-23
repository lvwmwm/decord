// Module ID: 8978
// Function ID: 70788
// Name: PlayStationLinkDiscordConsent
// Dependencies: [31, 8973, 653, 8950, 33, 1456, 8979, 8980, 8951, 2]
// Exports: PlayStationLinkDiscordConsent

// Module 8978 (PlayStationLinkDiscordConsent)
import result from "result";
import { PlayStationLinkModalScenes as closure_3 } from "PlayStationLinkModalScenes";
import { PlatformTypes } from "ME";
import { PLAYSTATION_CLIENT_SCOPES } from "XBOX_URL_BASE";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("ME").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/playstation/PlayStationLinkDiscordConsent.tsx");

export const PlayStationLinkDiscordConsent = function PlayStationLinkDiscordConsent(platformType) {
  let callbackCode;
  let callbackState;
  platformType = platformType.platformType;
  ({ callbackCode, callbackState } = platformType);
  let obj = navigation(1456);
  navigation = obj.useNavigation();
  const items = [navigation];
  const items1 = [navigation];
  const callback = React.useCallback(() => {
    navigation.push(outer1_3.SUCCESS);
  }, items);
  const callback1 = React.useCallback((errorCode) => {
    navigation.push(outer1_3.ERROR, { errorCode });
  }, items1);
  if (platformType === PlatformTypes.PLAYSTATION_STAGING) {
    let PLAYSTATION_APPLICATION_ID = navigation(8979).ConsoleOAuthApplications.PLAYSTATION_STAGING_APPLICATION_ID;
  } else {
    PLAYSTATION_APPLICATION_ID = navigation(8979).ConsoleOAuthApplications.PLAYSTATION_APPLICATION_ID;
  }
  if (platformType === PlatformTypes.PLAYSTATION_STAGING) {
    let PLAYSTATION = navigation(8980).ConsoleAuthorizationRedirectURIs.PLAYSTATION_STAGING;
  } else {
    PLAYSTATION = navigation(8980).ConsoleAuthorizationRedirectURIs.PLAYSTATION;
  }
  obj = { platformType, callbackCode, callbackState, clientId: PLAYSTATION_APPLICATION_ID, scopes: PLAYSTATION_CLIENT_SCOPES, onNext: callback, onError: callback1, redirectUri: PLAYSTATION };
  return jsx(navigation(8951).TwoWayLinkDiscordConsent, { platformType, callbackCode, callbackState, clientId: PLAYSTATION_APPLICATION_ID, scopes: PLAYSTATION_CLIENT_SCOPES, onNext: callback, onError: callback1, redirectUri: PLAYSTATION });
};
