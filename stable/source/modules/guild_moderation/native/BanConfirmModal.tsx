// Module ID: 11992
// Function ID: 11993
// Name: BanConfirmModal
// Dependencies: [19, 21, 11057, 11059, 1114, 11985, 2]
// Exports: default

// Module 11992 (BanConfirmModal)
import BanConfirmDefault from "BanConfirm" /* 11985 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_moderation/native/BanConfirmModal.tsx");

export default function BanConfirmModal(onBeforeGoBack) {
  ({ guildId: require, userId: importDefault } = onBeforeGoBack);
  let onGoBack;
  onGoBack = require("useNavigatorBackHandler")({ onBeforeGoBack: onBeforeGoBack.cancelButtonCallback }).onGoBack;
  const obj = { screenKey: "ban", title: null, render: null };
  const intl = require("util").intl;
  obj.title = intl.string(require("util").t.R3QeLQ);
  obj.render = function render() {
    return jsx(BanConfirmDefault, { onBan: onGoBack, guildId, userId });
  };
  return jsx(require("ModalStackNavigator"), { screenKey: "ban", title: null, render: null });
};
