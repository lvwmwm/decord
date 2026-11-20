// Module ID: 13319
// Function ID: 13320
// Name: usePowerupGroupConfig
// Dependencies: [19, 4665, 504, 7879, 1112, 2757, 13320, 13321, 1254, 2]
// Exports: default

// Module 13319 (usePowerupGroupConfig)
import intl4 from "intl" /* 1112 */;
import GlobalUtils from "GlobalUtils" /* 1254 */;
import _modDef2757 from "module_2757" /* 2757 */;
import GuildTagUtils from "GuildTagUtils" /* 7879 */;
import _modDef13320 from "module_13320" /* 13320 */;
import _modDef13321 from "module_13321" /* 13321 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 4665 */;
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
      const obj2 = { title: intl.string(_modDef2757.KC9HRW), description: intl2.string(_modDef2757.GJiSmP), image: obj3, disabledReason: stringResult, badge: "HermesInternal", forceStaticImages: "HermesInternal" };
      intl = intl4.intl;
      intl2 = intl4.intl;
      stringResult = undefined;
      obj3 = { staticUrl: _modDef13320, animatedUrl: _modDef13321 };
      const tmp7 = importDefault;
      if (!stateFromStores) {
        const intl3 = intl4.intl;
        stringResult = intl3.string(tmp7(2757).lvk1Gc);
      }
      return obj2;
    } else {
      const obj = GlobalUtils;
      obj.assertNever(tmp.group);
    }
  }, items1);
};
