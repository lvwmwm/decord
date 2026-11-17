// Module ID: 19919
// Function ID: 19920
// Name: isGuildSelectable
// Dependencies: [5164, 6804, 7068, 6956, 2]
// Exports: default

// Module 19919 (isGuildSelectable)
import StageInstanceStore from "StageInstanceStore" /* 5164 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 6804 */;
import GuildReadStateStore from "GuildReadStateStore" /* 7068 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 6956 */;
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
