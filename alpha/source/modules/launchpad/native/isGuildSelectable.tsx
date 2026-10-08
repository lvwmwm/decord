// Module ID: 17707
// Function ID: 17708
// Name: isGuildSelectable
// Dependencies: [2068, 5893, 6082, 5971, 2]
// Exports: default

// Module 17707 (isGuildSelectable)
import StageInstanceStore from "StageInstanceStore" /* 2068 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 5893 */;
import GuildReadStateStore from "GuildReadStateStore" /* 6082 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5971 */;
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
