// Module ID: 9077
// Function ID: 71222
// Name: XboxLinkDiscordError
// Dependencies: [31, 8977, 33, 1456, 9023, 9024, 1212, 2]
// Exports: default

// Module 9077 (XboxLinkDiscordError)
import "result";
import { XboxLinkModalScenes } from "XboxLinkModalScenes";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/xbox/XboxLinkError.tsx");

export default function XboxLinkDiscordError(onClose) {
  let obj = require(1456) /* useNavigation */;
  const navigation = obj.useNavigation();
  const connectRetry = require(9023) /* useConnectRetry */.useConnectRetry(navigation, XboxLinkModalScenes.PRE_CONNECT);
  obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.title = intl.string(require(1212) /* getSystemLocale */.t.INwPCV);
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.body = intl2.string(require(1212) /* getSystemLocale */.t.GyXRRz);
  obj.onClose = onClose.onClose;
  obj.onRetry = connectRetry;
  return jsx(require(9024) /* TwoWayLinkError */.TwoWayLinkError, {});
};
