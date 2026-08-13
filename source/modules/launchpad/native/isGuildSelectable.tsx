// Module ID: 16126
// Function ID: 16127
// Name: isGuildSelectable
// Dependencies: [1396, 4364, 7143, 4540, 2]
// Exports: default

// Module 16126 (isGuildSelectable)
import handleStageInstanceCreateOrUpdate from "handleStageInstanceCreateOrUpdate";
import reset from "reset";
import updateGuildUnreadSentinel from "updateGuildUnreadSentinel";
import updateUserGuildSettingsInternal from "updateUserGuildSettingsInternal";

const result = require("updateGuildUnreadSentinel").fileFinishedImporting("modules/launchpad/native/isGuildSelectable.tsx");

export default function isGuildSelectable(id) {
  const stageInstancesByGuild = id;
  const isMutedResult = muted.isMuted(id);
  let tmp2 = !isMutedResult;
  if (!isMutedResult) {
    let hasUnreadResult = updateGuildUnreadSentinel.hasUnread(id);
    if (!hasUnreadResult) {
      const _Object = Object;
      let someResult = Object.keys(stageInstancesByGuild.getStageInstancesByGuild(id)).length > 0;
      if (!someResult) {
        allApplicationStreams = allApplicationStreams.getAllApplicationStreams();
        someResult = allApplicationStreams.some((guildId) => guildId.guildId === handleStageInstanceCreateOrUpdate);
      }
      hasUnreadResult = someResult;
    }
    tmp2 = hasUnreadResult;
  }
  return tmp2;
};
