// Module ID: 19001
// Function ID: 19002
// Name: isGuildSelectable
// Dependencies: [4648, 6281, 6545, 6433, 2]
// Exports: default

// Module 19001 (isGuildSelectable)
import StageInstanceStore from "StageInstanceStore" /* 4648 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 6281 */;
import GuildReadStateStore from "GuildReadStateStore" /* 6545 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 6433 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/launchpad/native/isGuildSelectable.tsx");

export default function isGuildSelectable(id) {
  let closure_0 = id;
  let tmp2 = !UserGuildSettingsStore.isMuted(id);
  UserGuildSettingsStore.isMuted(id);
  if (tmp2) {
    let hasUnreadResult = GuildReadStateStore.hasUnread(id);
    if (!hasUnreadResult) {
      const _Object = Object;
      let someResult = Object.keys(StageInstanceStore.getStageInstancesByGuild(id)).length > 0;
      if (!someResult) {
        const allApplicationStreams = ApplicationStreamingStore.getAllApplicationStreams();
        someResult = allApplicationStreams.some((guildId) => guildId.guildId === closure_0);
      }
      hasUnreadResult = someResult;
    }
    tmp2 = hasUnreadResult;
  }
  return tmp2;
};
