// Module ID: 14643
// Function ID: 14644
// Name: CrunchyrollLinkError
// Dependencies: [19, 14635, 21, 1497, 14618, 14619, 1113, 2]
// Exports: default

// Module 14643 (CrunchyrollLinkError)
import Fragment from "Fragment" /* 21 */;
import intl3 from "intl" /* 1113 */;
import useNavigation from "useNavigation" /* 1497 */;
import react2 from "react" /* 14618 */;
import TwoWayLinkError2 from "TwoWayLinkError" /* 14619 */;
import CrunchyrollLinkConstants from "CrunchyrollLinkConstants" /* 14635 */;
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
