// Module ID: 17037
// Function ID: 17038
// Name: isGuildSelectable
// Dependencies: [2056, 4859, 7054, 5018, 2]
// Exports: default

// Module 17037 (isGuildSelectable)
import StageInstanceStore from "StageInstanceStore" /* 2056 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4859 */;
import GuildReadStateStore from "GuildReadStateStore" /* 7054 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5018 */;
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
