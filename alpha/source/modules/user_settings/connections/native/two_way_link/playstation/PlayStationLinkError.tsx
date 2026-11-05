// Module ID: 14871
// Function ID: 14872
// Name: PlayStationLinkError
// Dependencies: [19, 14863, 1072, 21, 1499, 14857, 1113, 14858, 2]
// Exports: PlayStationLinkError

// Module 14871 (PlayStationLinkError)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1072 */;
import intl4 from "intl" /* 1113 */;
import useNavigation from "useNavigation" /* 1499 */;
import react2 from "react" /* 14857 */;
import PlayStationLinkConstants from "PlayStationLinkConstants" /* 14863 */;
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
    const intl2 = tmp(1113).intl;
    stringResult = intl2.string(tmp(1113).t["3dIn2A"]);
  } else {
    const intl = tmp(1113).intl;
    stringResult = intl.string(tmp(1113).t.qE9nqE);
  }
  const TwoWayLinkError = tmp(14858).TwoWayLinkError;
  const intl3 = tmp(1113).intl;
  return <TwoWayLinkError title={intl3.string(intl4.t.eY3qHd)} body={stringResult} onClose={onClose} onRetry={connectRetry} />;
}
