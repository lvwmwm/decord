// Module ID: 9734
// Function ID: 9735
// Name: ChatGDMCustomizeActionSheet
// Dependencies: [19, 21, 9735, 9737, 1236, 9739, 2]
// Exports: default

// Module 9734 (ChatGDMCustomizeActionSheet)
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
  ({ onGoBack: c1, ref: c2 } = importDefault(9735)());
  const obj = { screenKey: "kick", title: null, render: null };
  const tmp = importDefault(9735)();
  const intl = channelId(1236).intl;
  obj[1] = intl.string(channelId(1236).t["1r5E+m"]);
  obj[2] = function render() {
    return outer1_3(_undefined(_undefined2[5]), { ref: _undefined2, onFinish: _undefined, channelId });
  };
  return jsx(importDefault(9737), { screenKey: "kick", title: null, render: null });
};
