// Module ID: 11001
// Function ID: 85595
// Name: KickConfirmModal
// Dependencies: [31, 33, 9110, 9112, 1212, 10994, 2]
// Exports: default

// Module 11001 (KickConfirmModal)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("useNavigatorBackHandler").fileFinishedImporting("modules/guild_moderation/native/KickConfirmModal.tsx");

export default function KickConfirmModal(onBeforeGoBack) {
  let importDefault;
  let require;
  ({ guildId: require, userId: importDefault } = onBeforeGoBack);
  onGoBack = importDefault(onGoBack[2])({ onBeforeGoBack: onBeforeGoBack.cancelButtonCallback }).onGoBack;
  const obj = { screenKey: "kick" };
  const intl = require(onGoBack[4]).intl;
  obj.title = intl.string(require(onGoBack[4]).t.R3QeLQ);
  obj.render = function render() {
    return outer1_3(outer1_1(onGoBack[5]), { onKick: onGoBack, guildId: closure_0, userId: closure_1 });
  };
  return jsx(importDefault(onGoBack[3]), { screenKey: "kick" });
};
