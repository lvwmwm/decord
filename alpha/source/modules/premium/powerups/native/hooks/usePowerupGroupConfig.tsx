// Module ID: 13290
// Function ID: 13291
// Name: usePowerupGroupConfig
// Dependencies: [19, 4822, 558, 576, 8591, 504, 1128, 2558, 13291, 13292, 1388, 2]

// Module 13290 (usePowerupGroupConfig)
import intl4 from "intl" /* 1128 */;
import GlobalUtils from "GlobalUtils" /* 1388 */;
import _modDef2558 from "module_2558" /* 2558 */;
import GuildTagUtils from "GuildTagUtils" /* 8591 */;
import _modDef13291 from "module_13291" /* 13291 */;
import _modDef13292 from "module_13292" /* 13292 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 4822 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function usePowerupGroupConfig(arg0, group) {
  let closure_0;
  let first;
  let tmp17;
  let tmp6;
  _require = arg0;
  let obj = require("react");
  const cResult = obj.c(10);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function u() {
      const guild = GuildStore.getGuild(closure_0);
      let guildSupportsTagsResult = null != guild;
      if (guildSupportsTagsResult) {
        const obj = GuildTagUtils;
        guildSupportsTagsResult = obj.guildSupportsTags(guild);
      }
      return guildSupportsTagsResult;
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = require("get initialized");
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
  if ("guildTagsBadgePacks" !== group.group) {
    const tmpResult2 = require("GlobalUtils");
    tmpResult2.assertNever(group.group);
  } else {
    let tmp10;
    let tmp9;
    let tmp8;
    let tmp14;
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = tmp(1128).intl;
      const stringResult = intl.string(_modDef2558.KC9HRW);
      const intl2 = tmp(1128).intl;
      const stringResult1 = intl2.string(_modDef2558.GJiSmP);
      const obj2 = { staticUrl: _modDef13291, animatedUrl: _modDef13292 };
      cResult[3] = stringResult;
      cResult[4] = stringResult1;
      cResult[5] = obj2;
      tmp10 = obj2;
      tmp9 = stringResult1;
      tmp8 = stringResult;
    } else {
      tmp8 = cResult[3];
      tmp9 = cResult[4];
      tmp10 = cResult[5];
    }
    if (cResult[6] !== stateFromStores) {
      let stringResult2;
      if (!stateFromStores) {
        const intl3 = tmp(1128).intl;
        stringResult2 = intl3.string(_modDef2558.lvk1Gc);
      }
      cResult[6] = stateFromStores;
      cResult[7] = stringResult2;
      tmp14 = stringResult2;
    } else {
      tmp14 = cResult[7];
    }
    if (cResult[8] !== tmp14) {
      const obj3 = { title: tmp8, description: tmp9, image: tmp10, disabledReason: tmp14, badge: "IconComponent", forceStaticImages: "IconComponent" };
      cResult[8] = tmp14;
      cResult[9] = obj3;
      tmp17 = obj3;
    } else {
      tmp17 = cResult[9];
    }
  }
  return tmp17;
}) : (function usePowerupGroupConfig(arg0, arg1) {
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
      const obj2 = { title: intl.string(_modDef2558.KC9HRW), description: intl2.string(_modDef2558.GJiSmP), image: obj3, disabledReason: stringResult, badge: "IconComponent", forceStaticImages: "IconComponent" };
      intl = intl4.intl;
      intl2 = intl4.intl;
      stringResult = undefined;
      obj3 = { staticUrl: _modDef13291, animatedUrl: _modDef13292 };
      const tmp7 = importDefault;
      if (!stateFromStores) {
        const intl3 = intl4.intl;
        stringResult = intl3.string(tmp7(2558).lvk1Gc);
      }
      return obj2;
    } else {
      const obj = GlobalUtils;
      obj.assertNever(tmp.group);
    }
  }, items1);
});
const result = size.fileFinishedImporting("modules/premium/powerups/native/hooks/usePowerupGroupConfig.tsx");

export default tmp2;
