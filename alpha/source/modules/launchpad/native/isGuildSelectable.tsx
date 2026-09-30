// Module ID: 17027
// Function ID: 17028
// Name: isGuildSelectable
// Dependencies: [2050, 4888, 7245, 5047, 2]
// Exports: default

// Module 17027 (isGuildSelectable)
import StageInstanceStore from "StageInstanceStore" /* 2050 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4888 */;
import GuildReadStateStore from "GuildReadStateStore" /* 7245 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5047 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/launchpad/native/isGuildSelectable.tsx");

export default function isGuildSelectable(id) {
  closure_0 = id;
  const isMutedResult = UserGuildSettingsStore.isMuted(id);
  let tmp2 = !isMutedResult;
  if (!isMutedResult) {
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
