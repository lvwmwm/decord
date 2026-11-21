// Module ID: 7203
// Function ID: 7204
// Name: PlayStationLinkError
// Dependencies: [19, 7195, 1071, 21, 1500, 7088, 1112, 7089, 2]
// Exports: PlayStationLinkError

// Module 7203 (PlayStationLinkError)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1071 */;
import intl4 from "intl" /* 1112 */;
import useNavigation from "useNavigation" /* 1500 */;
import react2 from "react" /* 7088 */;
import PlayStationLinkConstants from "PlayStationLinkConstants" /* 7195 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let navigation;

const constants = PlayStationLinkConstants.PlayStationLinkModalScenes;
const AbortCodes = Constants.AbortCodes;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/playstation/PlayStationLinkError.tsx");

export function PlayStationLinkError(arg0) {
  let errorCode;
  let onClose;
  let stringResult;
  ({ onClose, errorCode } = arg0);
  const obj = useNavigation;
  navigation = obj.useNavigation();
  const obj2 = react2;
  const connectRetry = obj2.useConnectRetry(navigation, constants.PRE_CONNECT);
  if (errorCode === AbortCodes.UNDER_MINIMUM_AGE) {
    const intl2 = tmp(1112).intl;
    stringResult = intl2.string(tmp(1112).t["3dIn2A"]);
  } else {
    const intl = tmp(1112).intl;
    stringResult = intl.string(tmp(1112).t.qE9nqE);
  }
  const TwoWayLinkError = tmp(7089).TwoWayLinkError;
  const intl3 = tmp(1112).intl;
  return <TwoWayLinkError title={intl3.string(intl4.t.eY3qHd)} body={stringResult} onClose={onClose} onRetry={connectRetry} />;
}
