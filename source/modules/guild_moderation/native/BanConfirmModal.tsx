// Module ID: 11263
// Function ID: 11264
// Name: BanConfirmModal
// Dependencies: [19, 21, 9681, 9682, 1236, 11256, 2]
// Exports: default

// Module 11263 (BanConfirmModal)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("useNavigatorBackHandler").fileFinishedImporting("modules/guild_moderation/native/BanConfirmModal.tsx");

export default function BanConfirmModal(onBeforeGoBack) {
  let importDefault;
  let require;
  ({ guildId: require, userId: importDefault } = onBeforeGoBack);
  let onGoBack;
  onGoBack = importDefault(onGoBack[2])({ onBeforeGoBack: onBeforeGoBack.cancelButtonCallback }).onGoBack;
  const obj = { screenKey: "ban", title: null, render: null };
  const intl = require(onGoBack[4]).intl;
  obj[1] = intl.string(require(onGoBack[4]).t.R3QeLQ);
  obj[2] = function render() {
    return outer1_3(outer1_1(onGoBack[5]), { onBan: onGoBack, guildId: closure_0, userId: closure_1 });
  };
  return jsx(importDefault(onGoBack[3]), { screenKey: "ban", title: null, render: null });
};
