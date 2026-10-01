// Module ID: 8570
// Function ID: 8571
// Name: PlayStationLinkError
// Dependencies: [19, 8562, 1074, 21, 1485, 8556, 1115, 8557, 2]
// Exports: PlayStationLinkError

// Module 8570 (PlayStationLinkError)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1074 */;
import intl4 from "intl" /* 1115 */;
import useNavigation from "useNavigation" /* 1485 */;
import react2 from "react" /* 8556 */;
import PlayStationLinkConstants from "PlayStationLinkConstants" /* 8562 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let navigation;

const constants = PlayStationLinkConstants.PlayStationLinkModalScenes;
const AbortCodes = Constants.AbortCodes;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/playstation/PlayStationLinkError.tsx");

export const PlayStationLinkError = function PlayStationLinkError(arg0) {
  let errorCode;
  let onClose;
  let stringResult;
  ({ onClose, errorCode } = arg0);
  const obj = useNavigation;
  navigation = obj.useNavigation();
  const obj2 = react2;
  const connectRetry = obj2.useConnectRetry(navigation, constants.PRE_CONNECT);
  if (errorCode === AbortCodes.UNDER_MINIMUM_AGE) {
    const intl2 = tmp(1115).intl;
    stringResult = intl2.string(tmp(1115).t["3dIn2A"]);
  } else {
    const intl = tmp(1115).intl;
    stringResult = intl.string(tmp(1115).t.qE9nqE);
  }
  const TwoWayLinkError = tmp(8557).TwoWayLinkError;
  const intl3 = tmp(1115).intl;
  return <TwoWayLinkError title={intl3.string(intl4.t.eY3qHd)} body={stringResult} onClose={onClose} onRetry={connectRetry} />;
};
