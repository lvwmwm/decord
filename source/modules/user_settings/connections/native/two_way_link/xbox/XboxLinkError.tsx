// Module ID: 9037
// Function ID: 9038
// Name: XboxLinkDiscordError
// Dependencies: [19, 8933, 21, 1480, 8979, 8980, 1236, 2]
// Exports: default

// Module 9037 (XboxLinkDiscordError)
import "noop";
import { XboxLinkModalScenes } from "XboxLinkModalScenes";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/xbox/XboxLinkError.tsx");

export default function XboxLinkDiscordError(onClose) {
  let obj = require(1480) /* useNavigation */;
  const navigation = obj.useNavigation();
  const connectRetry = require(8979) /* useConnectRetry */.useConnectRetry(navigation, XboxLinkModalScenes.PRE_CONNECT);
  obj = { title: null, body: null, onClose: null, onRetry: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[0] = intl.string(require(1236) /* getSystemLocale */.t.INwPCV);
  const intl2 = require(1236) /* getSystemLocale */.intl;
  obj[1] = intl2.string(require(1236) /* getSystemLocale */.t.GyXRRz);
  obj[2] = onClose.onClose;
  obj[3] = connectRetry;
  return jsx(require(8980) /* TwoWayLinkError */.TwoWayLinkError, { title: null, body: null, onClose: null, onRetry: null });
};
