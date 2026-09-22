// Module ID: 11190
// Function ID: 11191
// Name: ChatGDMCustomizeActionSheet
// Dependencies: [19, 21, 11191, 11194, 1115, 11196, 2]
// Exports: default

// Module 11190 (ChatGDMCustomizeActionSheet)
import useNavigatorConfirmChangesOnBackDefault from "useNavigatorConfirmChangesOnBack" /* 11191 */;
import ModalStackNavigatorDefault from "ModalStackNavigator" /* 11194 */;
import ChatGDMCustomizeDefault from "ChatGDMCustomize" /* 11196 */;
import noop from "module_19" /* 19 */;

const require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/group_dm/native/ChatGDMCustomizeActionSheet.tsx");

export default function ChatGDMCustomizeActionSheet(channelId) {
  channelId = channelId.channelId;
  importDefault = undefined;
  dependencyMap = undefined;
  ({ onGoBack: c1, ref: c2 } = useNavigatorConfirmChangesOnBackDefault());
  const obj = { screenKey: "kick", title: null, render: null };
  const tmp = useNavigatorConfirmChangesOnBackDefault();
  const intl = channelId(1115).intl;
  obj.title = intl.string(channelId(1115).t["1r5E+m"]);
  obj.render = function render() {
    return jsx(ChatGDMCustomizeDefault, { ref, onFinish, channelId });
  };
  return jsx(ModalStackNavigatorDefault, { screenKey: "kick", title: null, render: null });
};
