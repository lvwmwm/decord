// Module ID: 7612
// Function ID: 7613
// Name: CrunchyrollLinkDiscordConsent
// Dependencies: [19, 7604, 1072, 7610, 21, 1502, 7473, 2]
// Exports: default

// Module 7612 (CrunchyrollLinkDiscordConsent)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1072 */;
import CrunchyrollLinkConstants from "CrunchyrollLinkConstants" /* 7604 */;
import react from "react" /* 19 */;
import CrunchyrollConnectionConstants from "CrunchyrollConnectionConstants" /* 7610 */;
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
  const obj = navigation(1502);
  navigation = obj.useNavigation();
  const items = [navigation];
  const items1 = [navigation];
  const callback = react.useCallback(() => {
    navigation.push(constants.SUCCESS);
  }, items);
  const callback1 = react.useCallback(() => {
    navigation.push(constants.ERROR);
  }, items1);
  return jsx(navigation(7473).TwoWayLinkDiscordConsent, { platformType: PlatformTypes.CRUNCHYROLL, callbackCode, callbackState, clientId, scopes, onNext: callback, onError: callback1 });
};
