// Module ID: 13539
// Function ID: 13540
// Name: usePowerupGroupConfig
// Dependencies: [19, 4914, 504, 8578, 1112, 2879, 13540, 13541, 1255, 2]
// Exports: default

// Module 13539 (usePowerupGroupConfig)
import intl4 from "intl" /* 1112 */;
import GlobalUtils from "GlobalUtils" /* 1255 */;
import _modDef2879 from "module_2879" /* 2879 */;
import GuildTagUtils from "GuildTagUtils" /* 8578 */;
import _modDef13540 from "module_13540" /* 13540 */;
import _modDef13541 from "module_13541" /* 13541 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 4914 */;
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
      const obj2 = { title: intl.string(_modDef2879.KC9HRW), description: intl2.string(_modDef2879.GJiSmP), image: obj3, disabledReason: stringResult, badge: "HermesInternal", forceStaticImages: "HermesInternal" };
      intl = intl4.intl;
      intl2 = intl4.intl;
      stringResult = undefined;
      obj3 = { staticUrl: _modDef13540, animatedUrl: _modDef13541 };
      const tmp7 = importDefault;
      if (!stateFromStores) {
        const intl3 = intl4.intl;
        stringResult = intl3.string(tmp7(2879).lvk1Gc);
      }
      return obj2;
    } else {
      const obj = GlobalUtils;
      obj.assertNever(tmp.group);
    }
  }, items1);
};
