// Module ID: 19878
// Function ID: 19879
// Name: isGuildSelectable
// Dependencies: [5160, 6810, 7060, 6948, 2]
// Exports: default

// Module 19878 (isGuildSelectable)
import StageInstanceStore from "StageInstanceStore" /* 5160 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 6810 */;
import GuildReadStateStore from "GuildReadStateStore" /* 7060 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 6948 */;
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
