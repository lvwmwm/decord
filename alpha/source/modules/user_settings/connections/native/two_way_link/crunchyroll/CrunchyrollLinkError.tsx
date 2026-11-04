// Module ID: 14869
// Function ID: 14870
// Name: CrunchyrollLinkError
// Dependencies: [19, 14861, 21, 1499, 14844, 14845, 1113, 2]
// Exports: default

// Module 14869 (CrunchyrollLinkError)
import Fragment from "Fragment" /* 21 */;
import intl3 from "intl" /* 1113 */;
import useNavigation from "useNavigation" /* 1499 */;
import react2 from "react" /* 14844 */;
import TwoWayLinkError2 from "TwoWayLinkError" /* 14845 */;
import CrunchyrollLinkConstants from "CrunchyrollLinkConstants" /* 14861 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let navigation;

const constants = CrunchyrollLinkConstants.CrunchyrollLinkModalScenes;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/crunchyroll/CrunchyrollLinkError.tsx");

export default function CrunchyrollLinkDiscordError(onClose) {
  onClose = onClose.onClose;
  const obj = useNavigation;
  navigation = obj.useNavigation();
  const obj2 = react2;
  const connectRetry = obj2.useConnectRetry(navigation, constants.PRE_CONNECT);
  const TwoWayLinkError = TwoWayLinkError2.TwoWayLinkError;
  const intl = intl3.intl;
  const intl2 = intl3.intl;
  return <TwoWayLinkError title={intl.string(intl3.t["8YK70c"])} body={intl2.string(intl3.t.moyYLf)} onClose={onClose} onRetry={connectRetry} />;
};
