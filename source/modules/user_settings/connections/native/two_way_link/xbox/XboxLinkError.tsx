// Module ID: 10599
// Function ID: 10600
// Name: XboxLinkDiscordError
// Dependencies: [19, 10541, 21, 1499, 10600, 10601, 1236, 2]
// Exports: default

// Module 10599 (XboxLinkDiscordError)
import "noop";
import { XboxLinkModalScenes } from "XboxLinkModalScenes";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/xbox/XboxLinkError.tsx");

export default function XboxLinkDiscordError(onClose) {
  let obj = require(1499) /* useNavigation */;
  const navigation = obj.useNavigation();
  const connectRetry = require(10600) /* useConnectRetry */.useConnectRetry(navigation, XboxLinkModalScenes.PRE_CONNECT);
  obj = { title: null, body: null, onClose: null, onRetry: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[0] = intl.string(require(1236) /* getSystemLocale */.t.INwPCV);
  const intl2 = require(1236) /* getSystemLocale */.intl;
  obj[1] = intl2.string(require(1236) /* getSystemLocale */.t.GyXRRz);
  obj[2] = onClose.onClose;
  obj[3] = connectRetry;
  return jsx(require(10601) /* TwoWayLinkError */.TwoWayLinkError, { title: null, body: null, onClose: null, onRetry: null });
};
