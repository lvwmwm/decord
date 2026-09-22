// Module ID: 11055
// Function ID: 11056
// Name: ChatGDMCustomizeActionSheet
// Dependencies: [19, 21, 11056, 11059, 1114, 11061, 2]
// Exports: default

// Module 11055 (ChatGDMCustomizeActionSheet)
import useNavigatorConfirmChangesOnBackDefault from "useNavigatorConfirmChangesOnBack" /* 11056 */;
import ModalStackNavigatorDefault from "ModalStackNavigator" /* 11059 */;
import ChatGDMCustomizeDefault from "ChatGDMCustomize" /* 11061 */;
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
  const intl = channelId(1114).intl;
  obj.title = intl.string(channelId(1114).t["1r5E+m"]);
  obj.render = function render() {
    return jsx(ChatGDMCustomizeDefault, { ref, onFinish, channelId });
  };
  return jsx(ModalStackNavigatorDefault, { screenKey: "kick", title: null, render: null });
};
