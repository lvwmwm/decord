// Module ID: 14160
// Function ID: 14161
// Name: KickConfirmModal
// Dependencies: [19, 21, 10905, 10907, 1113, 14151, 2]
// Exports: default

// Module 14160 (KickConfirmModal)
import Fragment from "Fragment" /* 21 */;
import KickConfirmDefault from "KickConfirm" /* 14151 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/guild_moderation/native/KickConfirmModal.tsx");

export default function KickConfirmModal(onBeforeGoBack) {
  let guildId;
  let userId;
  ({ guildId: require, userId: importDefault } = onBeforeGoBack);
  let onGoBack;
  onGoBack = require("useNavigatorBackHandler")({ onBeforeGoBack: onBeforeGoBack.cancelButtonCallback }).onGoBack;
  require("ModalStackNavigator");
  const intl = require("intl").intl;
  return <tmp screenKey="kick" title={intl.string(require("intl").t.R3QeLQ)} render={function render() {
    return jsx(KickConfirmDefault, { onKick: onGoBack, guildId: require, userId: importDefault });
  }} />;
};
