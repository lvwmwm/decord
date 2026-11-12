// Module ID: 13551
// Function ID: 13552
// Name: KickConfirmModal
// Dependencies: [19, 21, 10294, 10296, 1113, 13542, 2]
// Exports: default

// Module 13551 (KickConfirmModal)
import Fragment from "Fragment" /* 21 */;
import KickConfirmDefault from "KickConfirm" /* 13542 */;
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
