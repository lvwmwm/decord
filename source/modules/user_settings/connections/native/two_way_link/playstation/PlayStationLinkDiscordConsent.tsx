// Module ID: 8966
// Function ID: 70711
// Name: PlayStationLinkDiscordConsent
// Dependencies: []
// Exports: PlayStationLinkDiscordConsent

// Module 8966 (PlayStationLinkDiscordConsent)
let closure_2 = importAll(dependencyMap[0]);
let closure_3 = arg1(dependencyMap[1]).PlayStationLinkModalScenes;
const PlatformTypes = arg1(dependencyMap[2]).PlatformTypes;
const PLAYSTATION_CLIENT_SCOPES = arg1(dependencyMap[3]).PLAYSTATION_CLIENT_SCOPES;
const jsx = arg1(dependencyMap[4]).jsx;
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/user_settings/connections/native/two_way_link/playstation/PlayStationLinkDiscordConsent.tsx");

export const PlayStationLinkDiscordConsent = function PlayStationLinkDiscordConsent(platformType) {
  let callbackCode;
  let callbackState;
  platformType = platformType.platformType;
  ({ callbackCode, callbackState } = platformType);
  let obj = arg1(dependencyMap[5]);
  const navigation = obj.useNavigation();
  const arg1 = navigation;
  const items = [navigation];
  const items1 = [navigation];
  const callback = React.useCallback(() => {
    navigation.push(constants.SUCCESS);
  }, items);
  const callback1 = React.useCallback((errorCode) => {
    navigation.push(constants.ERROR, { errorCode });
  }, items1);
  if (platformType === PlatformTypes.PLAYSTATION_STAGING) {
    let PLAYSTATION_APPLICATION_ID = arg1(dependencyMap[6]).ConsoleOAuthApplications.PLAYSTATION_STAGING_APPLICATION_ID;
  } else {
    PLAYSTATION_APPLICATION_ID = arg1(dependencyMap[6]).ConsoleOAuthApplications.PLAYSTATION_APPLICATION_ID;
  }
  if (platformType === PlatformTypes.PLAYSTATION_STAGING) {
    let PLAYSTATION = arg1(dependencyMap[7]).ConsoleAuthorizationRedirectURIs.PLAYSTATION_STAGING;
  } else {
    PLAYSTATION = arg1(dependencyMap[7]).ConsoleAuthorizationRedirectURIs.PLAYSTATION;
  }
  obj = { platformType, callbackCode, callbackState, clientId: PLAYSTATION_APPLICATION_ID, scopes: PLAYSTATION_CLIENT_SCOPES, onNext: callback, onError: callback1, redirectUri: PLAYSTATION };
  return jsx(arg1(dependencyMap[8]).TwoWayLinkDiscordConsent, obj);
};
