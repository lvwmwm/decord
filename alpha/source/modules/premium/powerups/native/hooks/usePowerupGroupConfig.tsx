// Module ID: 14354
// Function ID: 14355
// Name: usePowerupGroupConfig
// Dependencies: [19, 5014, 504, 8882, 1113, 2699, 14355, 14356, 1380, 2]
// Exports: default

// Module 14354 (usePowerupGroupConfig)
import intl4 from "intl" /* 1113 */;
import GlobalUtils from "GlobalUtils" /* 1380 */;
import _modDef2699 from "module_2699" /* 2699 */;
import GuildTagUtils from "GuildTagUtils" /* 8882 */;
import _modDef14355 from "module_14355" /* 14355 */;
import _modDef14356 from "module_14356" /* 14356 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 5014 */;
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
      const obj2 = { title: intl.string(_modDef2699.KC9HRW), description: intl2.string(_modDef2699.GJiSmP), image: obj3, disabledReason: stringResult, badge: "HermesInternal", forceStaticImages: "HermesInternal" };
      intl = intl4.intl;
      intl2 = intl4.intl;
      stringResult = undefined;
      obj3 = { staticUrl: _modDef14355, animatedUrl: _modDef14356 };
      const tmp7 = importDefault;
      if (!stateFromStores) {
        const intl3 = intl4.intl;
        stringResult = intl3.string(tmp7(2699).lvk1Gc);
      }
      return obj2;
    } else {
      const obj = GlobalUtils;
      obj.assertNever(tmp.group);
    }
  }, items1);
};
