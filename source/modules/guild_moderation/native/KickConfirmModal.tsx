// Module ID: 11856
// Function ID: 11857
// Name: KickConfirmModal
// Dependencies: [19, 21, 10922, 10924, 1114, 11849, 2]
// Exports: default

// Module 11856 (KickConfirmModal)
import noopAll from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/guild_moderation/native/KickConfirmModal.tsx");

export default function KickConfirmModal(onBeforeGoBack) {
  ({ guildId: require, userId: importDefault } = onBeforeGoBack);
  let onGoBack;
  onGoBack = importDefault(onGoBack[2])({ onBeforeGoBack: onBeforeGoBack.cancelButtonCallback }).onGoBack;
  const obj = { screenKey: "kick", title: null, render: null };
  const intl = require(onGoBack[4]).intl;
  obj[1] = intl.string(require(onGoBack[4]).t.R3QeLQ);
  obj[2] = function render() {
    return closure_1_3(closure_1_1(onGoBack[5]), { onKick: onGoBack, guildId: closure_0, userId: closure_1 });
  };
  return jsx(importDefault(onGoBack[3]), { screenKey: "kick", title: null, render: null });
};
