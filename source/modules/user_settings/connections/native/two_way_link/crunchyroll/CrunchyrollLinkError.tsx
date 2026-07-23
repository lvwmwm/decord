// Module ID: 8998
// Function ID: 70848
// Name: CrunchyrollLinkDiscordError
// Dependencies: [31, 8990, 33, 1456, 8984, 8985, 1212, 2]
// Exports: default

// Module 8998 (CrunchyrollLinkDiscordError)
import "result";
import { CrunchyrollLinkModalScenes as closure_2 } from "CrunchyrollLinkModalScenes";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/crunchyroll/CrunchyrollLinkError.tsx");

export default function CrunchyrollLinkDiscordError(onClose) {
  let obj = require(1456) /* useNavigation */;
  const navigation = obj.useNavigation();
  const connectRetry = require(8984) /* useConnectRetry */.useConnectRetry(navigation, constants.PRE_CONNECT);
  obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.title = intl.string(require(1212) /* getSystemLocale */.t["8YK70c"]);
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.body = intl2.string(require(1212) /* getSystemLocale */.t.moyYLf);
  obj.onClose = onClose.onClose;
  obj.onRetry = connectRetry;
  return jsx(require(8985) /* TwoWayLinkError */.TwoWayLinkError, {});
};
