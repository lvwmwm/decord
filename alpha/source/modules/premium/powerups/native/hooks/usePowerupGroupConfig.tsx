// Module ID: 14331
// Function ID: 14332
// Name: usePowerupGroupConfig
// Dependencies: [19, 5041, 504, 8828, 1113, 2696, 14332, 14333, 1380, 2]
// Exports: default

// Module 14331 (usePowerupGroupConfig)
import intl4 from "intl" /* 1113 */;
import GlobalUtils from "GlobalUtils" /* 1380 */;
import _modDef2696 from "module_2696" /* 2696 */;
import GuildTagUtils from "GuildTagUtils" /* 8828 */;
import _modDef14332 from "module_14332" /* 14332 */;
import _modDef14333 from "module_14333" /* 14333 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 5041 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const result = size.fileFinishedImporting("modules/premium/powerups/native/hooks/usePowerupGroupConfig.tsx");

export default function usePowerupGroupConfig(arg0, arg1) {
  let closure_0;
  let stateFromStores;
  _require = arg0;
  const group = arg1;
  let obj = require("get initialized");
  const items = [GuildStore];
  stateFromStores = obj.useStateFromStores(items, () => {
    const guild = GuildStore.getGuild(closure_0);
    let guildSupportsTagsResult = null != guild;
    if (guildSupportsTagsResult) {
      const obj = GuildTagUtils;
      guildSupportsTagsResult = obj.guildSupportsTags(guild);
    }
    return guildSupportsTagsResult;
  });
  const items1 = [arg1, stateFromStores];
  return react.useMemo(() => {
    let intl;
    let intl2;
    let obj3;
    let stringResult;
    if ("guildTagsBadgePacks" === group.group) {
      const obj2 = { title: intl.string(_modDef2696.KC9HRW), description: intl2.string(_modDef2696.GJiSmP), image: obj3, disabledReason: stringResult, badge: "HermesInternal", forceStaticImages: "HermesInternal" };
      intl = intl4.intl;
      intl2 = intl4.intl;
      stringResult = undefined;
      obj3 = { staticUrl: _modDef14332, animatedUrl: _modDef14333 };
      const tmp7 = importDefault;
      if (!stateFromStores) {
        const intl3 = intl4.intl;
        stringResult = intl3.string(tmp7(2696).lvk1Gc);
      }
      return obj2;
    } else {
      const obj = GlobalUtils;
      obj.assertNever(tmp.group);
    }
  }, items1);
};
