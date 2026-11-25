// Module ID: 13487
// Function ID: 13488
// Name: usePowerupGroupConfig
// Dependencies: [19, 4883, 504, 8536, 1112, 2878, 13488, 13489, 1254, 2]
// Exports: default

// Module 13487 (usePowerupGroupConfig)
import intl4 from "intl" /* 1112 */;
import GlobalUtils from "GlobalUtils" /* 1254 */;
import _modDef2878 from "module_2878" /* 2878 */;
import GuildTagUtils from "GuildTagUtils" /* 8536 */;
import _modDef13488 from "module_13488" /* 13488 */;
import _modDef13489 from "module_13489" /* 13489 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 4883 */;
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
      const obj2 = { title: intl.string(_modDef2878.KC9HRW), description: intl2.string(_modDef2878.GJiSmP), image: obj3, disabledReason: stringResult, badge: "HermesInternal", forceStaticImages: "no-hide-descendants" };
      intl = intl4.intl;
      intl2 = intl4.intl;
      stringResult = undefined;
      obj3 = { staticUrl: _modDef13488, animatedUrl: _modDef13489 };
      const tmp7 = importDefault;
      if (!stateFromStores) {
        const intl3 = intl4.intl;
        stringResult = intl3.string(tmp7(2878).lvk1Gc);
      }
      return obj2;
    } else {
      const obj = GlobalUtils;
      obj.assertNever(tmp.group);
    }
  }, items1);
};
