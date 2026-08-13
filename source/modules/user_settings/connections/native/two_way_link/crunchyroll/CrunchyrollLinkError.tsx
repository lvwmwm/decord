// Module ID: 10541
// Function ID: 10542
// Name: CrunchyrollLinkDiscordError
// Dependencies: [19, 10533, 21, 1499, 10516, 10517, 1236, 2]
// Exports: default

// Module 10541 (CrunchyrollLinkDiscordError)
import "noop";
import { CrunchyrollLinkModalScenes as closure_2 } from "CrunchyrollLinkModalScenes";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/crunchyroll/CrunchyrollLinkError.tsx");

export default function CrunchyrollLinkDiscordError(onClose) {
  let obj = require(1499) /* useNavigation */;
  const navigation = obj.useNavigation();
  const connectRetry = require(10516) /* useConnectRetry */.useConnectRetry(navigation, constants.PRE_CONNECT);
  obj = { title: null, body: null, onClose: null, onRetry: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[0] = intl.string(require(1236) /* getSystemLocale */.t["8YK70c"]);
  const intl2 = require(1236) /* getSystemLocale */.intl;
  obj[1] = intl2.string(require(1236) /* getSystemLocale */.t.moyYLf);
  obj[2] = onClose.onClose;
  obj[3] = connectRetry;
  return jsx(require(10517) /* TwoWayLinkError */.TwoWayLinkError, { title: null, body: null, onClose: null, onRetry: null });
};
