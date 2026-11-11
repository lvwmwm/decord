// Module ID: 12353
// Function ID: 12354
// Name: conjureSharedProjectCoverTarget
// Dependencies: [12354, 12355, 2]
// Exports: default

// Module 12353 (conjureSharedProjectCoverTarget)
import conjureSharedProjectHome from "conjureSharedProjectHome" /* 12354 */;
import findLoadedAppChannelDefault from "findLoadedAppChannel" /* 12355 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/share/conjureSharedProjectCoverTarget.tsx");

export default function readConjureSharedProjectCoverTarget(arg0, install_scope, arg2) {
  let channelId;
  let guildId;
  ({ guildId, channelId } = arg2);
  if (null != guildId) {
    if (null != channelId) {
      const obj3 = conjureSharedProjectHome;
      const tmp6 = require;
      if (obj3.isSharedProjectHomeServer(install_scope, guildId)) {
        const tmp6Result = tmp6(12354);
        if (tmp6Result.canLaunchSharedProject(install_scope, guildId)) {
          return { type: "launch" };
        } else {
          const tmp3 = findLoadedAppChannelDefault(guildId, arg0, channelId);
          let tmp4 = null;
          if (null != tmp3) {
            tmp4 = { type: "open", appChannel: tmp3 };
            const obj = { type: "open", appChannel: tmp3 };
          }
          return tmp4;
        }
      }
    }
  }
  return null;
};
