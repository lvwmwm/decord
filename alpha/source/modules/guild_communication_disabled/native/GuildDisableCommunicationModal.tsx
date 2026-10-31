// Module ID: 13253
// Function ID: 13254
// Name: GuildDisableCommunicationModal
// Dependencies: [19, 21, 10141, 10143, 1113, 6041, 13254, 2]
// Exports: default

// Module 13253 (GuildDisableCommunicationModal)
import Fragment from "Fragment" /* 21 */;
import GuildDisableCommunicationDefault from "GuildDisableCommunication" /* 13254 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/guild_communication_disabled/native/GuildDisableCommunicationModal.tsx");

export default function GuildDisableCommunicationModal(onBeforeGoBack) {
  let obj3;
  const guildId = onBeforeGoBack.guildId;
  const user = onBeforeGoBack.user;
  let onGoBack;
  onGoBack = user(onGoBack[2])({ onBeforeGoBack: onBeforeGoBack.cancelButtonCallback }).onGoBack;
  user(onGoBack[3]);
  const intl = guildId(onGoBack[4]).intl;
  const formatToPlainString = intl.formatToPlainString;
  const obj2 = { user: obj3.getName(guildId, null, user) };
  const FN7NIS = guildId(onGoBack[4]).t.FN7NIS;
  obj3 = user(onGoBack[5]);
  return <tmp screenKey="disableCommunication" title={formatToPlainString(FN7NIS, obj2)} render={function render() {
    return jsx(GuildDisableCommunicationDefault, { user, guildId, onClose: onGoBack });
  }} />;
};
