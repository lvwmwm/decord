// Module ID: 7214
// Function ID: 7215
// Name: CrunchyrollLinkDiscordConsent
// Dependencies: [19, 7206, 1071, 7212, 21, 1500, 7075, 2]
// Exports: default

// Module 7214 (CrunchyrollLinkDiscordConsent)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1071 */;
import CrunchyrollLinkConstants from "CrunchyrollLinkConstants" /* 7206 */;
import react from "react" /* 19 */;
import CrunchyrollConnectionConstants from "CrunchyrollConnectionConstants" /* 7212 */;
import size from "module_2" /* 2 */;

let navigation;

let hasOwnProperty;
let metroRequire;
let closure_3 = CrunchyrollLinkConstants.CrunchyrollLinkModalScenes;
const PlatformTypes = Constants.PlatformTypes;
({ CRUNCHYROLL_CLIENT_ID: hasOwnProperty, CRUNCHYROLL_CLIENT_SCOPES: metroRequire } = CrunchyrollConnectionConstants);
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/crunchyroll/CrunchyrollLinkDiscordConsent.tsx");

export default function CrunchyrollLinkDiscordConsent(arg0) {
  let callbackCode;
  let callbackState;
  navigation = undefined;
  ({ callbackCode, callbackState } = arg0);
  const obj = navigation(1500);
  navigation = obj.useNavigation();
  const items = [navigation];
  const items1 = [navigation];
  const callback = react.useCallback(() => {
    navigation.push(constants.SUCCESS);
  }, items);
  const callback1 = react.useCallback(() => {
    navigation.push(constants.ERROR);
  }, items1);
  return jsx(navigation(7075).TwoWayLinkDiscordConsent, { platformType: PlatformTypes.CRUNCHYROLL, callbackCode, callbackState, clientId, scopes, onNext: callback, onError: callback1 });
};
