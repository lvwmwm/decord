// Module ID: 9394
// Function ID: 9395
// Name: PlayStationLinkError
// Dependencies: [19, 9384, 1074, 21, 1483, 9395, 1114, 9396, 2]
// Exports: PlayStationLinkError

// Module 9394 (PlayStationLinkError)
import util from "util" /* 1114 */;
import useNavigation from "useNavigation" /* 1483 */;
import useConnectRetry from "useConnectRetry" /* 9395 */;
import TwoWayLinkError from "TwoWayLinkError" /* 9396 */;
import noop from "module_19" /* 19 */;

require = fn;
const constants = fn(9384).PlayStationLinkModalScenes;
const AbortCodes = fn(1074).AbortCodes;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/playstation/PlayStationLinkError.tsx");

export const PlayStationLinkError = function PlayStationLinkError(arg0) {
  ({ onClose, errorCode } = arg0);
  const navigation = useNavigation.useNavigation();
  const connectRetry = useConnectRetry.useConnectRetry(navigation, constants.PRE_CONNECT);
  if (errorCode === AbortCodes.UNDER_MINIMUM_AGE) {
    const intl2 = tmp(1114).intl;
    let stringResult = intl2.string(tmp(1114).t["3dIn2A"]);
  } else {
    const intl = tmp(1114).intl;
    stringResult = intl.string(tmp(1114).t.qE9nqE);
  }
  const obj3 = { title: null, body: null, onClose: null, onRetry: null };
  const intl3 = tmp(1114).intl;
  obj3.title = intl3.string(util.t.eY3qHd);
  obj3.body = stringResult;
  obj3.onClose = onClose;
  obj3.onRetry = connectRetry;
  return jsx(TwoWayLinkError.TwoWayLinkError, { title: null, body: null, onClose: null, onRetry: null });
};
