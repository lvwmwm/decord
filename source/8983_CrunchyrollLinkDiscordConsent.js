// Module ID: 8983
// Function ID: 70764
// Name: CrunchyrollLinkDiscordConsent
// Dependencies: []
// Exports: default

// Module 8983 (CrunchyrollLinkDiscordConsent)
let closure_2 = importAll(dependencyMap[0]);
let closure_3 = arg1(dependencyMap[1]).CrunchyrollLinkModalScenes;
const PlatformTypes = arg1(dependencyMap[2]).PlatformTypes;
({ CRUNCHYROLL_CLIENT_ID: closure_5, CRUNCHYROLL_CLIENT_SCOPES: closure_6 } = arg1(dependencyMap[3]));
const jsx = arg1(dependencyMap[4]).jsx;
const tmp2 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/user_settings/connections/native/two_way_link/crunchyroll/CrunchyrollLinkDiscordConsent.tsx");

export default function CrunchyrollLinkDiscordConsent(arg0) {
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
  obj = { platformType: PlatformTypes.CRUNCHYROLL, callbackCode, callbackState, clientId: closure_5, scopes: closure_6, onNext: callback, onError: callback1 };
  return jsx(arg1(dependencyMap[6]).TwoWayLinkDiscordConsent, obj);
};
