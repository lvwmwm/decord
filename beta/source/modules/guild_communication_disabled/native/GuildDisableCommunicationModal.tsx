// Module ID: 11319
// Function ID: 11320
// Name: GuildDisableCommunicationModal
// Dependencies: [19, 21, 10383, 10385, 1115, 4988, 11320, 2]
// Exports: default

// Module 11319 (GuildDisableCommunicationModal)
import GuildDisableCommunicationDefault from "GuildDisableCommunication" /* 11320 */;
import noop from "module_19" /* 19 */;

const require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_communication_disabled/native/GuildDisableCommunicationModal.tsx");

export default function GuildDisableCommunicationModal(onBeforeGoBack) {
  const guildId = onBeforeGoBack.guildId;
  const user = onBeforeGoBack.user;
  let onGoBack;
  onGoBack = user(onGoBack[2])({ onBeforeGoBack: onBeforeGoBack.cancelButtonCallback }).onGoBack;
  const obj = { screenKey: "disableCommunication", title: null, render: null };
  const intl = guildId(onGoBack[4]).intl;
  const obj2 = { user: null };
  const tmp = user(onGoBack[3]);
  obj2.user = user(onGoBack[5]).getName(guildId, null, user);
  obj.title = intl.formatToPlainString(guildId(onGoBack[4]).t.FN7NIS, obj2);
  obj.render = function render() {
    return jsx(GuildDisableCommunicationDefault, { user, guildId, onClose: onGoBack });
  };
  return <tmp screenKey="disableCommunication" title={null} render={null} />;
};
