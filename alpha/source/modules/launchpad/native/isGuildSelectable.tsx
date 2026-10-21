// Module ID: 18515
// Function ID: 18516
// Name: isGuildSelectable
// Dependencies: [4826, 6621, 6793, 6683, 2]
// Exports: default

// Module 18515 (isGuildSelectable)
import StageInstanceStore from "StageInstanceStore" /* 4826 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 6621 */;
import GuildReadStateStore from "GuildReadStateStore" /* 6793 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 6683 */;
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
