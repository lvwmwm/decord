// Module ID: 18723
// Function ID: 18724
// Name: isGuildSelectable
// Dependencies: [4860, 6674, 6846, 6736, 2]
// Exports: default

// Module 18723 (isGuildSelectable)
import StageInstanceStore from "StageInstanceStore" /* 4860 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 6674 */;
import GuildReadStateStore from "GuildReadStateStore" /* 6846 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 6736 */;
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
