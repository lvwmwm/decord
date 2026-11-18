// Module ID: 10493
// Function ID: 10494
// Name: ChatGDMCustomizeActionSheet
// Dependencies: [19, 21, 10494, 10497, 1113, 10499, 2]
// Exports: default

// Module 10493 (ChatGDMCustomizeActionSheet)
import Fragment from "Fragment" /* 21 */;
import useNavigatorConfirmChangesOnBackDefault from "useNavigatorConfirmChangesOnBack" /* 10494 */;
import ModalStackNavigatorDefault from "ModalStackNavigator" /* 10497 */;
import ChatGDMCustomizeDefault from "ChatGDMCustomize" /* 10499 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let dependencyMap, importDefault;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/group_dm/native/ChatGDMCustomizeActionSheet.tsx");

export default function ChatGDMCustomizeActionSheet(channelId) {
  let c1;
  let c2;
  let onFinish;
  let ref;
  channelId = channelId.channelId;
  importDefault = undefined;
  dependencyMap = undefined;
  ({ onGoBack: c1, ref: c2 } = useNavigatorConfirmChangesOnBackDefault());
  useNavigatorConfirmChangesOnBackDefault();
  ModalStackNavigatorDefault;
  const intl = channelId(1113).intl;
  return <tmp2 screenKey="kick" title={intl.string(channelId(1113).t["1r5E+m"])} render={function render() {
    return jsx(ChatGDMCustomizeDefault, { ref, onFinish, channelId });
  }} />;
};
