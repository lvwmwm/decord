// Module ID: 14059
// Function ID: 14060
// Name: BanConfirmModal
// Dependencies: [19, 21, 10842, 10844, 1113, 14052, 2]
// Exports: default

// Module 14059 (BanConfirmModal)
import Fragment from "Fragment" /* 21 */;
import BanConfirmDefault from "BanConfirm" /* 14052 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/guild_moderation/native/BanConfirmModal.tsx");

export default function BanConfirmModal(onBeforeGoBack) {
  let guildId;
  let userId;
  ({ guildId: require, userId: importDefault } = onBeforeGoBack);
  let onGoBack;
  onGoBack = require("useNavigatorBackHandler")({ onBeforeGoBack: onBeforeGoBack.cancelButtonCallback }).onGoBack;
  require("ModalStackNavigator");
  const intl = require("intl").intl;
  return <tmp screenKey="ban" title={intl.string(require("intl").t.R3QeLQ)} render={function render() {
    return jsx(BanConfirmDefault, { onBan: onGoBack, guildId: require, userId: importDefault });
  }} />;
};
