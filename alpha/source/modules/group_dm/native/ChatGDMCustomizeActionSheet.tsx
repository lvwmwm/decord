// Module ID: 10119
// Function ID: 10120
// Name: ChatGDMCustomizeActionSheet
// Dependencies: [19, 21, 10120, 10123, 1114, 10125, 2]
// Exports: default

// Module 10119 (ChatGDMCustomizeActionSheet)
import Fragment from "Fragment" /* 21 */;
import useNavigatorConfirmChangesOnBackDefault from "useNavigatorConfirmChangesOnBack" /* 10120 */;
import ModalStackNavigatorDefault from "ModalStackNavigator" /* 10123 */;
import ChatGDMCustomizeDefault from "ChatGDMCustomize" /* 10125 */;
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
  const intl = channelId(1114).intl;
  return <tmp2 screenKey="kick" title={intl.string(channelId(1114).t["1r5E+m"])} render={function render() {
    return jsx(ChatGDMCustomizeDefault, { ref, onFinish, channelId });
  }} />;
};
