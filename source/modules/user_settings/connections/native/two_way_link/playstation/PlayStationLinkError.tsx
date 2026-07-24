// Module ID: 9022
// Function ID: 71013
// Name: PlayStationLinkError
// Dependencies: [31, 9012, 653, 33, 1456, 9023, 1212, 9024, 2]
// Exports: PlayStationLinkError

// Module 9022 (PlayStationLinkError)
import "result";
import { PlayStationLinkModalScenes as closure_2 } from "PlayStationLinkModalScenes";
import { AbortCodes } from "ME";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("ME").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/playstation/PlayStationLinkError.tsx");

export const PlayStationLinkError = function PlayStationLinkError(arg0) {
  let errorCode;
  let onClose;
  ({ onClose, errorCode } = arg0);
  let obj = require(1456) /* useNavigation */;
  const navigation = obj.useNavigation();
  const connectRetry = require(9023) /* useConnectRetry */.useConnectRetry(navigation, constants.PRE_CONNECT);
  if (errorCode === AbortCodes.UNDER_MINIMUM_AGE) {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    let stringResult = intl2.string(require(1212) /* getSystemLocale */.t["3dIn2A"]);
  } else {
    const intl = require(1212) /* getSystemLocale */.intl;
    stringResult = intl.string(require(1212) /* getSystemLocale */.t.qE9nqE);
  }
  obj = {};
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj.title = intl3.string(require(1212) /* getSystemLocale */.t.eY3qHd);
  obj.body = stringResult;
  obj.onClose = onClose;
  obj.onRetry = connectRetry;
  return jsx(require(9024) /* TwoWayLinkError */.TwoWayLinkError, {});
};
