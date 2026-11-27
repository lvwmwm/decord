// Module ID: 11414
// Function ID: 11415
// Name: ChatGDMCustomizeActionSheet
// Dependencies: [19, 21, 11415, 11418, 1112, 11420, 2]
// Exports: default

// Module 11414 (ChatGDMCustomizeActionSheet)
import Fragment from "Fragment" /* 21 */;
import useNavigatorConfirmChangesOnBackDefault from "useNavigatorConfirmChangesOnBack" /* 11415 */;
import ModalStackNavigatorDefault from "ModalStackNavigator" /* 11418 */;
import ChatGDMCustomizeDefault from "ChatGDMCustomize" /* 11420 */;
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
  const intl = channelId(1112).intl;
  return <tmp2 screenKey="kick" title={intl.string(channelId(1112).t["1r5E+m"])} render={function render() {
    return jsx(ChatGDMCustomizeDefault, { ref, onFinish, channelId });
  }} />;
};
