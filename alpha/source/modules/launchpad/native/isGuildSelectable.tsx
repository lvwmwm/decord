// Module ID: 16772
// Function ID: 16773
// Name: isGuildSelectable
// Dependencies: [2049, 4851, 7045, 5010, 2]
// Exports: default

// Module 16772 (isGuildSelectable)
import StageInstanceStore from "StageInstanceStore" /* 2049 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4851 */;
import GuildReadStateStore from "GuildReadStateStore" /* 7045 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5010 */;

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
