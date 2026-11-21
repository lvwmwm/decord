// Module ID: 11973
// Function ID: 11974
// Name: conjureSharedProjectCoverTarget
// Dependencies: [11974, 11975, 2]
// Exports: default

// Module 11973 (conjureSharedProjectCoverTarget)
import conjureSharedProjectHome from "conjureSharedProjectHome" /* 11974 */;
import findLoadedAppChannelDefault from "findLoadedAppChannel" /* 11975 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/share/conjureSharedProjectCoverTarget.tsx");

export default function readConjureSharedProjectCoverTarget(arg0, guild_id, channelId) {
  channelId = channelId.channelId;
  const obj = conjureSharedProjectHome;
  const sharedProjectHomeGuildId = obj.getSharedProjectHomeGuildId(guild_id);
  if (null != sharedProjectHomeGuildId) {
    if (null != channelId) {
      const tmpResult = conjureSharedProjectHome;
      if (tmpResult.canLaunchSharedProject(guild_id)) {
        return { type: "launch" };
      } else {
        const tmp6 = findLoadedAppChannelDefault(sharedProjectHomeGuildId, arg0, channelId);
        let tmp7 = null;
        if (null != tmp6) {
          tmp7 = { type: "open", appChannel: tmp6 };
          const obj2 = { type: "open", appChannel: tmp6 };
        }
        return tmp7;
      }
    }
  }
  return null;
};
