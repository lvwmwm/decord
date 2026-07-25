// Module ID: 8969
// Function ID: 70707
// Name: XboxLinkDiscordError
// Dependencies: [31, 8865, 33, 1456, 8911, 8912, 1212, 2]
// Exports: default

// Module 8969 (XboxLinkDiscordError)
import "result";
import { XboxLinkModalScenes } from "XboxLinkModalScenes";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/xbox/XboxLinkError.tsx");

export default function XboxLinkDiscordError(onClose) {
  let obj = require(1456) /* useNavigation */;
  const navigation = obj.useNavigation();
  const connectRetry = require(8911) /* useConnectRetry */.useConnectRetry(navigation, XboxLinkModalScenes.PRE_CONNECT);
  obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.title = intl.string(require(1212) /* getSystemLocale */.t.INwPCV);
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.body = intl2.string(require(1212) /* getSystemLocale */.t.GyXRRz);
  obj.onClose = onClose.onClose;
  obj.onRetry = connectRetry;
  return jsx(require(8912) /* TwoWayLinkError */.TwoWayLinkError, {});
};
