// Module ID: 19139
// Function ID: 19140
// Name: isGuildSelectable
// Dependencies: [4767, 6400, 6664, 6552, 2]
// Exports: default

// Module 19139 (isGuildSelectable)
import StageInstanceStore from "StageInstanceStore" /* 4767 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 6400 */;
import GuildReadStateStore from "GuildReadStateStore" /* 6664 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 6552 */;
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
