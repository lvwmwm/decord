// Module ID: 11955
// Function ID: 11956
// Name: usePowerupGroupConfig
// Dependencies: [19, 2073, 558, 576, 7614, 504, 1127, 2522, 11956, 11957, 1376, 2]

// Module 11955 (usePowerupGroupConfig)
import intl4 from "intl" /* 1127 */;
import GlobalUtils from "GlobalUtils" /* 1376 */;
import _modDef2522 from "module_2522" /* 2522 */;
import GuildTagUtils from "GuildTagUtils" /* 7614 */;
import _modDef11956 from "module_11956" /* 11956 */;
import _modDef11957 from "module_11957" /* 11957 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 2073 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, group) => {
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
    const fn = function l() {
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
      const intl = tmp(1127).intl;
      const stringResult = intl.string(_modDef2522.KC9HRW);
      const intl2 = tmp(1127).intl;
      const stringResult1 = intl2.string(_modDef2522.GJiSmP);
      const obj2 = { staticUrl: _modDef11956, animatedUrl: _modDef11957 };
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
        const intl3 = tmp(1127).intl;
        stringResult2 = intl3.string(_modDef2522.lvk1Gc);
      }
      cResult[6] = stateFromStores;
      cResult[7] = stringResult2;
      tmp14 = stringResult2;
    } else {
      tmp14 = cResult[7];
    }
    if (cResult[8] !== tmp14) {
      const obj3 = { title: tmp8, description: tmp9, image: tmp10, disabledReason: tmp14, badge: "IconComponent", forceStaticImages: "/assets/.cache/intl/bW9kdWxlcy9jaGVja291dC9tZXNzYWdlcw==" };
      cResult[8] = tmp14;
      cResult[9] = obj3;
      tmp17 = obj3;
    } else {
      tmp17 = cResult[9];
    }
  }
  return tmp17;
}) : ((arg0, arg1) => {
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
      const obj2 = { title: intl.string(_modDef2522.KC9HRW), description: intl2.string(_modDef2522.GJiSmP), image: obj3, disabledReason: stringResult, badge: "IconComponent", forceStaticImages: "/assets/.cache/intl/bW9kdWxlcy9jaGVja291dC9tZXNzYWdlcw==" };
      intl = intl4.intl;
      intl2 = intl4.intl;
      stringResult = undefined;
      obj3 = { staticUrl: _modDef11956, animatedUrl: _modDef11957 };
      const tmp7 = importDefault;
      if (!stateFromStores) {
        const intl3 = intl4.intl;
        stringResult = intl3.string(tmp7(2522).lvk1Gc);
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
