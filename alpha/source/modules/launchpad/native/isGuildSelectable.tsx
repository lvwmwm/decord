// Module ID: 18268
// Function ID: 18269
// Name: isGuildSelectable
// Dependencies: [2070, 6113, 6300, 6182, 2]
// Exports: default

// Module 18268 (isGuildSelectable)
import StageInstanceStore from "StageInstanceStore" /* 2070 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 6113 */;
import GuildReadStateStore from "GuildReadStateStore" /* 6300 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 6182 */;
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
