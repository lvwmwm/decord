// Module ID: 13445
// Function ID: 13446
// Name: usePowerupGroupConfig
// Dependencies: [19, 4784, 504, 7999, 1112, 2856, 13446, 13447, 1254, 2]
// Exports: default

// Module 13445 (usePowerupGroupConfig)
import intl4 from "intl" /* 1112 */;
import GlobalUtils from "GlobalUtils" /* 1254 */;
import _modDef2856 from "module_2856" /* 2856 */;
import GuildTagUtils from "GuildTagUtils" /* 7999 */;
import _modDef13446 from "module_13446" /* 13446 */;
import _modDef13447 from "module_13447" /* 13447 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 4784 */;
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
      obj3 = { staticUrl: _modDef13446, animatedUrl: _modDef13447 };
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
