// Module ID: 14843
// Function ID: 14844
// Name: XboxLinkError
// Dependencies: [19, 9873, 21, 1499, 14844, 14845, 1113, 2]
// Exports: default

// Module 14843 (XboxLinkError)
import Fragment from "Fragment" /* 21 */;
import intl3 from "intl" /* 1113 */;
import useNavigation from "useNavigation" /* 1499 */;
import XboxLinkConstants from "XboxLinkConstants" /* 9873 */;
import react2 from "react" /* 14844 */;
import TwoWayLinkError2 from "TwoWayLinkError" /* 14845 */;
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
