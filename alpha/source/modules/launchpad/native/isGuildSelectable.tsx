// Module ID: 19023
// Function ID: 19024
// Name: isGuildSelectable
// Dependencies: [4863, 6708, 6880, 6769, 2]
// Exports: default

// Module 19023 (isGuildSelectable)
import StageInstanceStore from "StageInstanceStore" /* 4863 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 6708 */;
import GuildReadStateStore from "GuildReadStateStore" /* 6880 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 6769 */;
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
