// Module ID: 11184
// Function ID: 11185
// Name: ChatGDMCustomizeActionSheet
// Dependencies: [19, 21, 11185, 11188, 1115, 11190, 2]
// Exports: default

// Module 11184 (ChatGDMCustomizeActionSheet)
import useNavigatorConfirmChangesOnBackDefault from "useNavigatorConfirmChangesOnBack" /* 11185 */;
import ModalStackNavigatorDefault from "ModalStackNavigator" /* 11188 */;
import ChatGDMCustomizeDefault from "ChatGDMCustomize" /* 11190 */;
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
