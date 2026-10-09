// Module ID: 17859
// Function ID: 17860
// Name: isGuildSelectable
// Dependencies: [2069, 5894, 6084, 5973, 2]
// Exports: default

// Module 17859 (isGuildSelectable)
import StageInstanceStore from "StageInstanceStore" /* 2069 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 5894 */;
import GuildReadStateStore from "GuildReadStateStore" /* 6084 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5973 */;
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
