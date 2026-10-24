// Module ID: 18681
// Function ID: 18682
// Name: isGuildSelectable
// Dependencies: [4828, 6642, 6814, 6704, 2]
// Exports: default

// Module 18681 (isGuildSelectable)
import StageInstanceStore from "StageInstanceStore" /* 4828 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 6642 */;
import GuildReadStateStore from "GuildReadStateStore" /* 6814 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 6704 */;
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
