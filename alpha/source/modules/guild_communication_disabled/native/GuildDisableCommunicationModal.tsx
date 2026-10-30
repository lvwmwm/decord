// Module ID: 13218
// Function ID: 13219
// Name: GuildDisableCommunicationModal
// Dependencies: [19, 21, 10121, 10123, 1114, 6036, 13219, 2]
// Exports: default

// Module 13218 (GuildDisableCommunicationModal)
import Fragment from "Fragment" /* 21 */;
import GuildDisableCommunicationDefault from "GuildDisableCommunication" /* 13219 */;
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
