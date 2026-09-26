// Module ID: 9423
// Function ID: 9424
// Name: CrunchyrollLinkDiscordConsent
// Dependencies: [19, 9418, 1074, 8641, 21, 1484, 9391, 2]
// Exports: default

// Module 9423 (CrunchyrollLinkDiscordConsent)
import noop from "module_19" /* 19 */;

const require = fn;
let closure_3 = fn(9418).CrunchyrollLinkModalScenes;
const PlatformTypes = fn(1074).PlatformTypes;
const CrunchyrollConnectionConstants = fn(8641);
({ CRUNCHYROLL_CLIENT_ID: hasOwnProperty, CRUNCHYROLL_CLIENT_SCOPES: metroRequire } = CrunchyrollConnectionConstants);
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/crunchyroll/CrunchyrollLinkDiscordConsent.tsx");

export default function CrunchyrollLinkDiscordConsent(arg0) {
  let navigation;
  ({ callbackCode, callbackState } = arg0);
  navigation = navigation(1484).useNavigation();
  const items = [navigation];
  const items1 = [navigation];
  const callback = noop.useCallback(() => {
    navigation.push(constants.SUCCESS);
  }, items);
  const callback1 = noop.useCallback(() => {
    navigation.push(constants.ERROR);
  }, items1);
  return jsx(navigation(9391).TwoWayLinkDiscordConsent, { platformType: PlatformTypes.CRUNCHYROLL, callbackCode, callbackState, clientId, scopes, onNext: callback, onError: callback1 });
};
