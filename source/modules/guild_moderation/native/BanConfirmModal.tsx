// Module ID: 11003
// Function ID: 85600
// Name: BanConfirmModal
// Dependencies: [31, 33, 9110, 9112, 1212, 10996, 2]
// Exports: default

// Module 11003 (BanConfirmModal)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("useNavigatorBackHandler").fileFinishedImporting("modules/guild_moderation/native/BanConfirmModal.tsx");

export default function BanConfirmModal(onBeforeGoBack) {
  let importDefault;
  let require;
  ({ guildId: require, userId: importDefault } = onBeforeGoBack);
  onGoBack = importDefault(onGoBack[2])({ onBeforeGoBack: onBeforeGoBack.cancelButtonCallback }).onGoBack;
  const obj = { screenKey: "ban" };
  const intl = require(onGoBack[4]).intl;
  obj.title = intl.string(require(onGoBack[4]).t.R3QeLQ);
  obj.render = function render() {
    return outer1_3(outer1_1(onGoBack[5]), { onBan: onGoBack, guildId: closure_0, userId: closure_1 });
  };
  return jsx(importDefault(onGoBack[3]), { screenKey: "ban" });
};
