// Module ID: 15704
// Function ID: 121111
// Name: isGuildSelectable
// Dependencies: [1353, 4149, 6878, 4325, 2]
// Exports: default

// Module 15704 (isGuildSelectable)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_1 from "_isNativeReflectConstruct";
import closure_2 from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";

const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/launchpad/native/isGuildSelectable.tsx");

export default function isGuildSelectable(id) {
  const stageInstancesByGuild = id;
  let tmp = !muted.isMuted(id);
  if (tmp) {
    const tmp3 = !closure_2.hasUnread(id);
    let tmp4 = !tmp3;
    if (tmp3) {
      const _Object = Object;
      let someResult = Object.keys(stageInstancesByGuild.getStageInstancesByGuild(id)).length > 0;
      if (!someResult) {
        allApplicationStreams = allApplicationStreams.getAllApplicationStreams();
        someResult = allApplicationStreams.some((guildId) => guildId.guildId === _isNativeReflectConstruct);
      }
      tmp4 = someResult;
    }
    tmp = tmp4;
  }
  return tmp;
};
