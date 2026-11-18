// Module ID: 19190
// Function ID: 19191
// Name: isGuildSelectable
// Dependencies: [4677, 6308, 6572, 6460, 2]
// Exports: default

// Module 19190 (isGuildSelectable)
import StageInstanceStore from "StageInstanceStore" /* 4677 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 6308 */;
import GuildReadStateStore from "GuildReadStateStore" /* 6572 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 6460 */;
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
