// Module ID: 18605
// Function ID: 18606
// Name: isGuildSelectable
// Dependencies: [4826, 6627, 6799, 6689, 2]
// Exports: default

// Module 18605 (isGuildSelectable)
import StageInstanceStore from "StageInstanceStore" /* 4826 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 6627 */;
import GuildReadStateStore from "GuildReadStateStore" /* 6799 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 6689 */;
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
