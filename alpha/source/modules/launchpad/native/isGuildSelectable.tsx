// Module ID: 19378
// Function ID: 19379
// Name: isGuildSelectable
// Dependencies: [5024, 6794, 6966, 6855, 2]
// Exports: default

// Module 19378 (isGuildSelectable)
import StageInstanceStore from "StageInstanceStore" /* 5024 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 6794 */;
import GuildReadStateStore from "GuildReadStateStore" /* 6966 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 6855 */;
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
