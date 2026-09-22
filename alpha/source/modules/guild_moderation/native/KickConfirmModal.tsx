// Module ID: 12115
// Function ID: 12116
// Name: KickConfirmModal
// Dependencies: [19, 21, 11192, 11194, 1115, 12108, 2]
// Exports: default

// Module 12115 (KickConfirmModal)
import KickConfirmDefault from "KickConfirm" /* 12108 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_moderation/native/KickConfirmModal.tsx");

export default function KickConfirmModal(onBeforeGoBack) {
  ({ guildId: require, userId: importDefault } = onBeforeGoBack);
  let onGoBack;
  onGoBack = require("useNavigatorBackHandler")({ onBeforeGoBack: onBeforeGoBack.cancelButtonCallback }).onGoBack;
  const obj = { screenKey: "kick", title: null, render: null };
  const intl = require("util").intl;
  obj.title = intl.string(require("util").t.R3QeLQ);
  obj.render = function render() {
    return jsx(KickConfirmDefault, { onKick: onGoBack, guildId, userId });
  };
  return jsx(require("ModalStackNavigator"), { screenKey: "kick", title: null, render: null });
};
