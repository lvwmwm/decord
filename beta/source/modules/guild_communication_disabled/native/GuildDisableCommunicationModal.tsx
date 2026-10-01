// Module ID: 11319
// Function ID: 11320
// Name: GuildDisableCommunicationModal
// Dependencies: [19, 21, 10383, 10385, 1115, 4988, 11320, 2]
// Exports: default

// Module 11319 (GuildDisableCommunicationModal)
import Fragment from "Fragment" /* 21 */;
import GuildDisableCommunicationDefault from "GuildDisableCommunication" /* 11320 */;
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
