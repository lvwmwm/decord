// Module ID: 13122
// Function ID: 13123
// Name: useIsHubForGuild
// Dependencies: [4665, 1071, 504, 2]
// Exports: default

// Module 13122 (useIsHubForGuild)
import Constants from "Constants" /* 1071 */;
import GuildStore from "GuildStore" /* 4665 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const GuildFeatures = Constants.GuildFeatures;
const result = size.fileFinishedImporting("modules/hub/useIsHubForGuild.tsx");

export default function useIsHubForGuild(arg0) {
  let closure_0;
  _require = arg0;
  const items = [GuildStore];
  const items1 = [arg0];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
    if (null == closure_0) {
      return false;
    } else {
      const guild = GuildStore.getGuild(tmp);
      let flag;
      if (guild != null) {
        const features = guild.features;
        flag = features.has(GuildFeatures.HUB);
      }
      if (flag == null) {
        flag = false;
      }
      return flag;
    }
  }, items1);
};
