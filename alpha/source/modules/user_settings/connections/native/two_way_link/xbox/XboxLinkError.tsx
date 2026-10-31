// Module ID: 14617
// Function ID: 14618
// Name: XboxLinkError
// Dependencies: [19, 9723, 21, 1497, 14618, 14619, 1113, 2]
// Exports: default

// Module 14617 (XboxLinkError)
import Fragment from "Fragment" /* 21 */;
import intl3 from "intl" /* 1113 */;
import useNavigation from "useNavigation" /* 1497 */;
import XboxLinkConstants from "XboxLinkConstants" /* 9723 */;
import react2 from "react" /* 14618 */;
import TwoWayLinkError2 from "TwoWayLinkError" /* 14619 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let navigation;

const XboxLinkModalScenes = XboxLinkConstants.XboxLinkModalScenes;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/xbox/XboxLinkError.tsx");

export default function XboxLinkDiscordError(onClose) {
  onClose = onClose.onClose;
  const obj = useNavigation;
  navigation = obj.useNavigation();
  const obj2 = react2;
  const connectRetry = obj2.useConnectRetry(navigation, XboxLinkModalScenes.PRE_CONNECT);
  const TwoWayLinkError = TwoWayLinkError2.TwoWayLinkError;
  const intl = intl3.intl;
  const intl2 = intl3.intl;
  return <TwoWayLinkError title={intl.string(intl3.t.INwPCV)} body={intl2.string(intl3.t.GyXRRz)} onClose={onClose} onRetry={connectRetry} />;
};
