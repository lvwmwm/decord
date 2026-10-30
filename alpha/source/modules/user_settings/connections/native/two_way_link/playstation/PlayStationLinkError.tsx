// Module ID: 14594
// Function ID: 14595
// Name: PlayStationLinkError
// Dependencies: [19, 14586, 1072, 21, 1498, 14580, 1114, 14581, 2]
// Exports: PlayStationLinkError

// Module 14594 (PlayStationLinkError)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1072 */;
import intl4 from "intl" /* 1114 */;
import useNavigation from "useNavigation" /* 1498 */;
import react2 from "react" /* 14580 */;
import PlayStationLinkConstants from "PlayStationLinkConstants" /* 14586 */;
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
    const intl2 = tmp(1114).intl;
    stringResult = intl2.string(tmp(1114).t["3dIn2A"]);
  } else {
    const intl = tmp(1114).intl;
    stringResult = intl.string(tmp(1114).t.qE9nqE);
  }
  const TwoWayLinkError = tmp(14581).TwoWayLinkError;
  const intl3 = tmp(1114).intl;
  return <TwoWayLinkError title={intl3.string(intl4.t.eY3qHd)} body={stringResult} onClose={onClose} onRetry={connectRetry} />;
}
