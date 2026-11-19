// Module ID: 13349
// Function ID: 13350
// Name: usePowerupGroupConfig
// Dependencies: [19, 4663, 504, 7880, 1113, 2755, 13350, 13351, 1255, 2]
// Exports: default

// Module 13349 (usePowerupGroupConfig)
import intl4 from "intl" /* 1113 */;
import GlobalUtils from "GlobalUtils" /* 1255 */;
import _modDef2755 from "module_2755" /* 2755 */;
import GuildTagUtils from "GuildTagUtils" /* 7880 */;
import _modDef13350 from "module_13350" /* 13350 */;
import _modDef13351 from "module_13351" /* 13351 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 4663 */;
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
      const obj2 = { title: intl.string(_modDef2755.KC9HRW), description: intl2.string(_modDef2755.GJiSmP), image: obj3, disabledReason: stringResult, badge: "HermesInternal", forceStaticImages: "HermesInternal" };
      intl = intl4.intl;
      intl2 = intl4.intl;
      stringResult = undefined;
      obj3 = { staticUrl: _modDef13350, animatedUrl: _modDef13351 };
      const tmp7 = importDefault;
      if (!stateFromStores) {
        const intl3 = intl4.intl;
        stringResult = intl3.string(tmp7(2755).lvk1Gc);
      }
      return obj2;
    } else {
      const obj = GlobalUtils;
      obj.assertNever(tmp.group);
    }
  }, items1);
};
