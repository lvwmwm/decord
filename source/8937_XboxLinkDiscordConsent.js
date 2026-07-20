// Module ID: 8937
// Function ID: 70433
// Name: XboxLinkDiscordConsent
// Dependencies: []
// Exports: default

// Module 8937 (XboxLinkDiscordConsent)
let closure_2 = importAll(dependencyMap[0]);
const XboxLinkModalScenes = arg1(dependencyMap[1]).XboxLinkModalScenes;
const PlatformTypes = arg1(dependencyMap[2]).PlatformTypes;
const XBOX_CLIENT_SCOPES = arg1(dependencyMap[3]).XBOX_CLIENT_SCOPES;
const jsx = arg1(dependencyMap[4]).jsx;
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/user_settings/connections/native/two_way_link/xbox/XboxLinkDiscordConsent.tsx");

export default function XboxLinkDiscordConsent(arg0) {
  let callbackCode;
  let callbackState;
  ({ callbackCode, callbackState } = arg0);
  let obj = arg1(dependencyMap[5]);
  const navigation = obj.useNavigation();
  const arg1 = navigation;
  const items = [navigation];
  const items1 = [navigation];
  const callback = React.useCallback(() => {
    navigation.push(constants.SUCCESS);
  }, items);
  const callback1 = React.useCallback(() => {
    navigation.push(constants.ERROR);
  }, items1);
  obj = { platformType: PlatformTypes.XBOX, callbackCode, callbackState, clientId: arg1(dependencyMap[7]).ConsoleOAuthApplications.XBOX_APPLICATION_ID, scopes: XBOX_CLIENT_SCOPES, onNext: callback, onError: callback1 };
  return jsx(arg1(dependencyMap[6]).TwoWayLinkDiscordConsent, obj);
};
