// Module ID: 8949
// Function ID: 70510
// Name: XboxLinkDiscordConsent
// Dependencies: [31, 8938, 653, 8950, 33, 1456, 8951, 8979, 2]
// Exports: default

// Module 8949 (XboxLinkDiscordConsent)
import result from "result";
import { XboxLinkModalScenes } from "XboxLinkModalScenes";
import { PlatformTypes } from "ME";
import { XBOX_CLIENT_SCOPES } from "XBOX_URL_BASE";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("ME").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/xbox/XboxLinkDiscordConsent.tsx");

export default function XboxLinkDiscordConsent(arg0) {
  let callbackCode;
  let callbackState;
  ({ callbackCode, callbackState } = arg0);
  let obj = navigation(1456);
  navigation = obj.useNavigation();
  const items = [navigation];
  const items1 = [navigation];
  const callback = React.useCallback(() => {
    navigation.push(outer1_3.SUCCESS);
  }, items);
  const callback1 = React.useCallback(() => {
    navigation.push(outer1_3.ERROR);
  }, items1);
  obj = { platformType: PlatformTypes.XBOX, callbackCode, callbackState, clientId: navigation(8979).ConsoleOAuthApplications.XBOX_APPLICATION_ID, scopes: XBOX_CLIENT_SCOPES, onNext: callback, onError: callback1 };
  return jsx(navigation(8951).TwoWayLinkDiscordConsent, { platformType: PlatformTypes.XBOX, callbackCode, callbackState, clientId: navigation(8979).ConsoleOAuthApplications.XBOX_APPLICATION_ID, scopes: XBOX_CLIENT_SCOPES, onNext: callback, onError: callback1 });
};
