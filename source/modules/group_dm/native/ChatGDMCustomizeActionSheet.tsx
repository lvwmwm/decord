// Module ID: 9679
// Function ID: 9680
// Name: ChatGDMCustomizeActionSheet
// Dependencies: [19, 21, 9680, 9682, 1236, 9684, 2]
// Exports: default

// Module 9679 (ChatGDMCustomizeActionSheet)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("useNavigatorConfirmChangesOnBack").fileFinishedImporting("modules/group_dm/native/ChatGDMCustomizeActionSheet.tsx");

export default function ChatGDMCustomizeActionSheet(channelId) {
  let c1;
  let c2;
  channelId = channelId.channelId;
  let importDefault;
  let dependencyMap;
  ({ onGoBack: c1, ref: c2 } = importDefault(9680)());
  const obj = { screenKey: "kick", title: null, render: null };
  const tmp = importDefault(9680)();
  const intl = channelId(1236).intl;
  obj[1] = intl.string(channelId(1236).t["1r5E+m"]);
  obj[2] = function render() {
    return outer1_3(_undefined(_undefined2[5]), { ref: _undefined2, onFinish: _undefined, channelId });
  };
  return jsx(importDefault(9682), { screenKey: "kick", title: null, render: null });
};
