// Module ID: 19341
// Function ID: 19342
// Name: isGuildSelectable
// Dependencies: [4995, 6849, 7021, 6910, 2]
// Exports: default

// Module 19341 (isGuildSelectable)
import StageInstanceStore from "StageInstanceStore" /* 4995 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 6849 */;
import GuildReadStateStore from "GuildReadStateStore" /* 7021 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 6910 */;
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
