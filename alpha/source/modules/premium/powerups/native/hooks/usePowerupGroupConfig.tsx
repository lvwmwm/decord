// Module ID: 10693
// Function ID: 10694
// Name: usePowerupGroupConfig
// Dependencies: [19, 5114, 504, 8343, 1113, 2717, 10694, 10695, 1380, 2]
// Exports: default

// Module 10693 (usePowerupGroupConfig)
import intl4 from "intl" /* 1113 */;
import GlobalUtils from "GlobalUtils" /* 1380 */;
import _modDef2717 from "module_2717" /* 2717 */;
import GuildTagUtils from "GuildTagUtils" /* 8343 */;
import _modDef10694 from "module_10694" /* 10694 */;
import _modDef10695 from "module_10695" /* 10695 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 5114 */;
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
      const obj2 = { title: intl.string(_modDef2717.KC9HRW), description: intl2.string(_modDef2717.GJiSmP), image: obj3, disabledReason: stringResult, badge: "HermesInternal", forceStaticImages: "HermesInternal" };
      intl = intl4.intl;
      intl2 = intl4.intl;
      stringResult = undefined;
      obj3 = { staticUrl: _modDef10694, animatedUrl: _modDef10695 };
      const tmp7 = importDefault;
      if (!stateFromStores) {
        const intl3 = intl4.intl;
        stringResult = intl3.string(tmp7(2717).lvk1Gc);
      }
      return obj2;
    } else {
      const obj = GlobalUtils;
      obj.assertNever(tmp.group);
    }
  }, items1);
};
