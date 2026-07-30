// Module ID: 8974
// Function ID: 8975
// Name: PlayStationLinkError
// Dependencies: [19, 8964, 676, 21, 1480, 8975, 1236, 8976, 2]
// Exports: PlayStationLinkError

// Module 8974 (PlayStationLinkError)
import "noop";
import { PlayStationLinkModalScenes as closure_2 } from "PlayStationLinkModalScenes";
import { AbortCodes } from "ME";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("ME").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/playstation/PlayStationLinkError.tsx");

export const PlayStationLinkError = function PlayStationLinkError(arg0) {
  let errorCode;
  let onClose;
  ({ onClose, errorCode } = arg0);
  let obj = require(1480) /* useNavigation */;
  const navigation = obj.useNavigation();
  const connectRetry = require(8975) /* useConnectRetry */.useConnectRetry(navigation, constants.PRE_CONNECT);
  if (errorCode === AbortCodes.UNDER_MINIMUM_AGE) {
    const intl2 = tmp(1236).intl;
    let stringResult = intl2.string(tmp(1236).t["3dIn2A"]);
  } else {
    const intl = tmp(1236).intl;
    stringResult = intl.string(tmp(1236).t.qE9nqE);
  }
  obj = { title: null, body: null, onClose: null, onRetry: null };
  const intl3 = tmp(1236).intl;
  obj[0] = intl3.string(require(1236) /* getSystemLocale */.t.eY3qHd);
  obj[1] = stringResult;
  obj[2] = onClose;
  obj[3] = connectRetry;
  return jsx(require(8976) /* TwoWayLinkError */.TwoWayLinkError, { title: null, body: null, onClose: null, onRetry: null });
};
