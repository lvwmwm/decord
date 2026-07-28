// Module ID: 8969
// Function ID: 70694
// Name: CrunchyrollLinkDiscordError
// Dependencies: [31, 8961, 33, 1456, 8955, 8956, 1212, 2]
// Exports: default

// Module 8969 (CrunchyrollLinkDiscordError)
import "result";
import { CrunchyrollLinkModalScenes as closure_2 } from "CrunchyrollLinkModalScenes";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/crunchyroll/CrunchyrollLinkError.tsx");

export default function CrunchyrollLinkDiscordError(onClose) {
  let obj = require(1456) /* useNavigation */;
  const navigation = obj.useNavigation();
  const connectRetry = require(8955) /* useConnectRetry */.useConnectRetry(navigation, constants.PRE_CONNECT);
  obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.title = intl.string(require(1212) /* getSystemLocale */.t["8YK70c"]);
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.body = intl2.string(require(1212) /* getSystemLocale */.t.moyYLf);
  obj.onClose = onClose.onClose;
  obj.onRetry = connectRetry;
  return jsx(require(8956) /* TwoWayLinkError */.TwoWayLinkError, {});
};
