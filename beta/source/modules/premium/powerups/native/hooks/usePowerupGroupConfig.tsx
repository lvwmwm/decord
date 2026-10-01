// Module ID: 12045
// Function ID: 12046
// Name: usePowerupGroupConfig
// Dependencies: [19, 2067, 504, 7610, 1115, 2519, 12046, 12047, 1370, 2]
// Exports: default

// Module 12045 (usePowerupGroupConfig)
import intl4 from "intl" /* 1115 */;
import GlobalUtils from "GlobalUtils" /* 1370 */;
import _modDef2519 from "module_2519" /* 2519 */;
import GuildTagUtils from "GuildTagUtils" /* 7610 */;
import _modDef12046 from "module_12046" /* 12046 */;
import _modDef12047 from "module_12047" /* 12047 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 2067 */;
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
      const obj2 = { title: intl.string(_modDef2519.KC9HRW), description: intl2.string(_modDef2519.GJiSmP), image: obj3, disabledReason: stringResult, badge: "HermesInternal", forceStaticImages: "HermesInternal" };
      intl = intl4.intl;
      intl2 = intl4.intl;
      stringResult = undefined;
      obj3 = { staticUrl: _modDef12046, animatedUrl: _modDef12047 };
      const tmp7 = importDefault;
      if (!stateFromStores) {
        const intl3 = intl4.intl;
        stringResult = intl3.string(tmp7(2519).lvk1Gc);
      }
      return obj2;
    } else {
      const obj = GlobalUtils;
      obj.assertNever(tmp.group);
    }
  }, items1);
};
