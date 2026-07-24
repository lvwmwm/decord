// Module ID: 9144
// Function ID: 71579
// Name: ChatGDMCustomizeActionSheet
// Dependencies: [31, 33, 9145, 9148, 1212, 10192, 2]
// Exports: default

// Module 9144 (ChatGDMCustomizeActionSheet)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("useNavigatorConfirmChangesOnBack").fileFinishedImporting("modules/group_dm/native/ChatGDMCustomizeActionSheet.tsx");

export default function ChatGDMCustomizeActionSheet(channelId) {
  let dependencyMap;
  let importDefault;
  channelId = channelId.channelId;
  ({ onGoBack: importDefault, ref: dependencyMap } = importDefault(9145)());
  const obj = { screenKey: "kick" };
  const tmp = importDefault(9145)();
  const intl = channelId(1212).intl;
  obj.title = intl.string(channelId(1212).t["1r5E+m"]);
  obj.render = function render() {
    return outer1_3(outer1_1(outer1_2[5]), { ref: closure_2, onFinish: closure_1, channelId });
  };
  return jsx(importDefault(9148), { screenKey: "kick" });
};
