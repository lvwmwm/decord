// Module ID: 17689
// Function ID: 17690
// Name: isGuildSelectable
// Dependencies: [2050, 4812, 7909, 4971, 2]
// Exports: default

// Module 17689 (isGuildSelectable)
import StageInstanceStore from "StageInstanceStore" /* 2050 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4812 */;
import GuildReadStateStore from "GuildReadStateStore" /* 7909 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 4971 */;

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
