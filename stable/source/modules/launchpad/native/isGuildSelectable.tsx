// Module ID: 17092
// Function ID: 17093
// Name: isGuildSelectable
// Dependencies: [1962, 4658, 7738, 4817, 2]
// Exports: default

// Module 17092 (isGuildSelectable)
import StageInstanceStore from "StageInstanceStore" /* 1962 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4658 */;
import GuildReadStateStore from "GuildReadStateStore" /* 7738 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 4817 */;

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
