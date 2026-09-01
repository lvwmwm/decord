// Module ID: 9323
// Function ID: 9324
// Name: XboxLinkDiscordError
// Dependencies: [19, 9302, 21, 1499, 9324, 9325, 1236, 2]
// Exports: default

// Module 9323 (XboxLinkDiscordError)
import noopAll from "noop" /* 19 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import useNavigation from "useNavigation" /* 1499 */;
import useConnectRetry from "useConnectRetry" /* 9324 */;
import TwoWayLinkError from "TwoWayLinkError" /* 9325 */;
import { XboxLinkModalScenes } from "XboxLinkModalScenes" /* 9302 */;
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
