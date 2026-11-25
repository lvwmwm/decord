// Module ID: 11978
// Function ID: 11979
// Name: conjureSharedProjectCoverTarget
// Dependencies: [11979, 11980, 2]
// Exports: default

// Module 11978 (conjureSharedProjectCoverTarget)
import conjureSharedProjectHome from "conjureSharedProjectHome" /* 11979 */;
import findLoadedAppChannelDefault from "findLoadedAppChannel" /* 11980 */;
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
