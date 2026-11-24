// Module ID: 13364
// Function ID: 13365
// Name: usePowerupGroupConfig
// Dependencies: [19, 4788, 504, 8437, 1112, 2856, 13365, 13366, 1254, 2]
// Exports: default

// Module 13364 (usePowerupGroupConfig)
import intl4 from "intl" /* 1112 */;
import GlobalUtils from "GlobalUtils" /* 1254 */;
import _modDef2856 from "module_2856" /* 2856 */;
import GuildTagUtils from "GuildTagUtils" /* 8437 */;
import _modDef13365 from "module_13365" /* 13365 */;
import _modDef13366 from "module_13366" /* 13366 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 4788 */;
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
      const obj2 = { title: intl.string(_modDef2856.KC9HRW), description: intl2.string(_modDef2856.GJiSmP), image: obj3, disabledReason: stringResult, badge: "HermesInternal", forceStaticImages: "HermesInternal" };
      intl = intl4.intl;
      intl2 = intl4.intl;
      stringResult = undefined;
      obj3 = { staticUrl: _modDef13365, animatedUrl: _modDef13366 };
      const tmp7 = importDefault;
      if (!stateFromStores) {
        const intl3 = intl4.intl;
        stringResult = intl3.string(tmp7(2856).lvk1Gc);
      }
      return obj2;
    } else {
      const obj = GlobalUtils;
      obj.assertNever(tmp.group);
    }
  }, items1);
};
