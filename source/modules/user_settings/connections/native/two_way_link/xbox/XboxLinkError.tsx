// Module ID: 9375
// Function ID: 9376
// Name: XboxLinkDiscordError
// Dependencies: [19, 9148, 21, 1498, 9195, 9196, 1233, 2]
// Exports: default

// Module 9375 (XboxLinkDiscordError)
import noopAll from "noop" /* 19 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import useNavigation from "useNavigation" /* 1498 */;
import useConnectRetry from "useConnectRetry" /* 9195 */;
import TwoWayLinkError from "TwoWayLinkError" /* 9196 */;
import { XboxLinkModalScenes } from "XboxLinkModalScenes" /* 9148 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/xbox/XboxLinkError.tsx");

export default function XboxLinkDiscordError(onClose) {
  let obj = useNavigation;
  const navigation = obj.useNavigation();
  const connectRetry = useConnectRetry.useConnectRetry(navigation, XboxLinkModalScenes.PRE_CONNECT);
  obj = { title: null, body: null, onClose: null, onRetry: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t.INwPCV);
  const intl2 = getSystemLocale.intl;
  obj[1] = intl2.string(getSystemLocale.t.GyXRRz);
  obj[2] = onClose.onClose;
  obj[3] = connectRetry;
  return jsx(TwoWayLinkError.TwoWayLinkError, { title: null, body: null, onClose: null, onRetry: null });
};
