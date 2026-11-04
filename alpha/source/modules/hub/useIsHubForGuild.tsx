// Module ID: 14149
// Function ID: 14150
// Name: useIsHubForGuild
// Dependencies: [5012, 1072, 504, 2]
// Exports: default

// Module 14149 (useIsHubForGuild)
import Constants from "Constants" /* 1072 */;
import GuildStore from "GuildStore" /* 5012 */;
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
