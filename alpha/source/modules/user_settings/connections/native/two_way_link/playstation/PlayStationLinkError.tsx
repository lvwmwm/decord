// Module ID: 9383
// Function ID: 9384
// Name: PlayStationLinkError
// Dependencies: [19, 9375, 1074, 21, 1484, 9369, 1115, 9370, 2]
// Exports: PlayStationLinkError

// Module 9383 (PlayStationLinkError)
import util from "util" /* 1115 */;
import useNavigation from "useNavigation" /* 1484 */;
import useConnectRetry from "useConnectRetry" /* 9369 */;
import TwoWayLinkError from "TwoWayLinkError" /* 9370 */;
import noop from "module_19" /* 19 */;

require = fn;
const constants = fn(9375).PlayStationLinkModalScenes;
const AbortCodes = fn(1074).AbortCodes;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/playstation/PlayStationLinkError.tsx");

export const PlayStationLinkError = function PlayStationLinkError(arg0) {
  ({ onClose, errorCode } = arg0);
  const navigation = useNavigation.useNavigation();
  const connectRetry = useConnectRetry.useConnectRetry(navigation, constants.PRE_CONNECT);
  if (errorCode === AbortCodes.UNDER_MINIMUM_AGE) {
    const intl2 = tmp(1115).intl;
    let stringResult = intl2.string(tmp(1115).t["3dIn2A"]);
  } else {
    const intl = tmp(1115).intl;
    stringResult = intl.string(tmp(1115).t.qE9nqE);
  }
  const obj3 = { title: null, body: null, onClose: null, onRetry: null };
  const intl3 = tmp(1115).intl;
  obj3.title = intl3.string(util.t.eY3qHd);
  obj3.body = stringResult;
  obj3.onClose = onClose;
  obj3.onRetry = connectRetry;
  return jsx(TwoWayLinkError.TwoWayLinkError, { title: null, body: null, onClose: null, onRetry: null });
};
