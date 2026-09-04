// Module ID: 10851
// Function ID: 10852
// Name: ChatGDMCustomizeActionSheet
// Dependencies: [19, 21, 10852, 10855, 1233, 10857, 2]
// Exports: default

// Module 10851 (ChatGDMCustomizeActionSheet)
import noopAll from "noop" /* 19 */;
import useNavigatorConfirmChangesOnBackDefault from "useNavigatorConfirmChangesOnBack" /* 10852 */;
import _modDef10855 from "module_10855" /* 10855 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/group_dm/native/ChatGDMCustomizeActionSheet.tsx");

export default function ChatGDMCustomizeActionSheet(channelId) {
  channelId = channelId.channelId;
  importDefault = undefined;
  dependencyMap = undefined;
  ({ onGoBack: c1, ref: c2 } = useNavigatorConfirmChangesOnBackDefault());
  const obj = { screenKey: "kick", title: null, render: null };
  const tmp = useNavigatorConfirmChangesOnBackDefault();
  const intl = channelId(1233).intl;
  obj[1] = intl.string(channelId(1233).t["1r5E+m"]);
  obj[2] = function render() {
    return closure_1_3(_undefined(_undefined2[5]), { ref: _undefined2, onFinish: _undefined, channelId });
  };
  return jsx(_modDef10855, { screenKey: "kick", title: null, render: null });
};
