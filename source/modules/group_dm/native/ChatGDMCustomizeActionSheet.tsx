// Module ID: 9080
// Function ID: 71216
// Name: ChatGDMCustomizeActionSheet
// Dependencies: [31, 33, 9081, 9084, 1212, 10164, 2]
// Exports: default

// Module 9080 (ChatGDMCustomizeActionSheet)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("useNavigatorConfirmChangesOnBack").fileFinishedImporting("modules/group_dm/native/ChatGDMCustomizeActionSheet.tsx");

export default function ChatGDMCustomizeActionSheet(channelId) {
  let dependencyMap;
  let importDefault;
  channelId = channelId.channelId;
  ({ onGoBack: importDefault, ref: dependencyMap } = importDefault(9081)());
  const obj = { screenKey: "kick" };
  const tmp = importDefault(9081)();
  const intl = channelId(1212).intl;
  obj.title = intl.string(channelId(1212).t["1r5E+m"]);
  obj.render = function render() {
    return outer1_3(outer1_1(outer1_2[5]), { ref: closure_2, onFinish: closure_1, channelId });
  };
  return jsx(importDefault(9084), { screenKey: "kick" });
};
