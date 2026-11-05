// Module ID: 19386
// Function ID: 19387
// Name: isGuildSelectable
// Dependencies: [4997, 6852, 7024, 6913, 2]
// Exports: default

// Module 19386 (isGuildSelectable)
import StageInstanceStore from "StageInstanceStore" /* 4997 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 6852 */;
import GuildReadStateStore from "GuildReadStateStore" /* 7024 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 6913 */;
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
