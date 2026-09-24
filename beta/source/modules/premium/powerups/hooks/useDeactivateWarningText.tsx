// Module ID: 12743
// Function ID: 12744
// Name: useDeactivateWarningText
// Dependencies: [19, 4710, 2103, 2067, 558, 568, 504, 7406, 4683, 1119, 2518, 2]

// Module 12743 (useDeactivateWarningText)
import _modDef2518 from "module_2518" /* 2518 */;
import Powerups from "Powerups" /* 4683 */;
import useGuildRoleMemberCountsDefault from "useGuildRoleMemberCounts" /* 7406 */;
import noop from "module_19" /* 19 */;
import GuildMemberCountStore from "GuildMemberCountStore" /* 4710 */;
import GuildRoleStore from "GuildRoleStore" /* 2103 */;
import GuildStore from "GuildStore" /* 2067 */;

const require = globalThis.__r;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useDeactivateWarningText.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, skuId) => {
  _require = arg0;
  importDefault = skuId;
  const cResult = require("c").c(29);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildMemberCountStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    class S {
      constructor() {
        return closure_4.getMemberCount(closure_0);
      }
    }
    cResult[1] = arg0;
    cResult[2] = S;
    const tmp6 = S;
  } else {
    class S {
      constructor() {
        return closure_4.getMemberCount(closure_0);
      }
    }
  }
  const obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(first, tmp6);
  const tmp8 = useGuildRoleMemberCountsDefault(arg0);
  dependencyMap = tmp8;
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    class S {
      constructor() {
        return closure_4.getMemberCount(closure_0);
      }
    }
    const items1 = [GuildStore];
    cResult[3] = items1;
    const tmp9 = items1;
  } else {
    class S {
      constructor() {
        return closure_4.getMemberCount(closure_0);
      }
    }
  }
  if (cResult[4] !== arg0) {
    class U {
      constructor() {
        guild = closure_6.getGuild(closure_0);
        vanityURLCode = undefined;
        if (guild != null) {
          vanityURLCode = guild.vanityURLCode;
        }
        return null != vanityURLCode;
      }
    }
    cResult[4] = arg0;
    cResult[5] = U;
    const tmp10 = U;
  } else {
    class U {
      constructor() {
        guild = closure_6.getGuild(closure_0);
        vanityURLCode = undefined;
        if (guild != null) {
          vanityURLCode = guild.vanityURLCode;
        }
        return null != vanityURLCode;
      }
    }
  }
  const tmpResult = require("initialize");
  const stateFromStores1 = require("initialize").useStateFromStores(tmp9, tmp10);
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    class U {
      constructor() {
        guild = closure_6.getGuild(closure_0);
        vanityURLCode = undefined;
        if (guild != null) {
          vanityURLCode = guild.vanityURLCode;
        }
        return null != vanityURLCode;
      }
    }
    const items2 = [GuildRoleStore];
    cResult[6] = items2;
  } else {
    class U {
      constructor() {
        guild = closure_6.getGuild(closure_0);
        vanityURLCode = undefined;
        if (guild != null) {
          vanityURLCode = guild.vanityURLCode;
        }
        return null != vanityURLCode;
      }
    }
  }
  if (cResult[7] === arg0) {
    class U {
      constructor() {
        guild = closure_6.getGuild(closure_0);
        vanityURLCode = undefined;
        if (guild != null) {
          vanityURLCode = guild.vanityURLCode;
        }
        return null != vanityURLCode;
      }
    }
  }
  class D {
    constructor() {
      num = 0;
      if (closure_1.skuId === closure_0(closure_2[8]).GUILD_POWERUP_ROLE_COLOR_SKU_ID) {
        tmp = closure_2;
        tmp2 = null;
        num = 0;
        if (null != closure_2) {
          tmp3 = closure_5;
          tmp4 = closure_0;
          sortedRoles = closure_5.getSortedRoles(closure_0);
          num = sortedRoles.reduce(() => { ... }, 0);
        }
      }
      return num;
    }
  }
  const items3 = [arg0, skuId.skuId, tmp8];
  cResult[7] = arg0;
  cResult[8] = skuId.skuId;
  cResult[9] = tmp8;
  cResult[10] = D;
  cResult[11] = items3;
}) : ((arg0, skuId) => {
  _require = arg0;
  importDefault = skuId;
  let items = [stateFromStores1];
  stateFromStores = require("initialize").useStateFromStores(items, () => GuildMemberCountStore.getMemberCount(closure_0));
  const tmp2 = require("useGuildRoleMemberCounts")(arg0);
  noop = tmp2;
  let obj = require("initialize");
  const items1 = [GuildStore];
  stateFromStores1 = require("initialize").useStateFromStores(items1, () => {
    guild = GuildStore.getGuild(closure_0);
    let vanityURLCode;
    if (guild != null) {
      vanityURLCode = guild.vanityURLCode;
    }
    return null != vanityURLCode;
  });
  let obj2 = require("initialize");
  const items2 = [stateFromStores2];
  const items3 = [arg0, skuId.skuId, tmp2];
  stateFromStores2 = require("initialize").useStateFromStores(items2, () => {
    let num = 0;
    if (skuId.skuId === Powerups.GUILD_POWERUP_ROLE_COLOR_SKU_ID) {
      num = 0;
      if (null != closure_3) {
        const sortedRoles = GuildRoleStore.getSortedRoles(closure_0);
        num = sortedRoles.reduce((acc, colorStrings) => {
          colorStrings = colorStrings.colorStrings;
          let secondaryColor;
          if (colorStrings != null) {
            secondaryColor = colorStrings.secondaryColor;
          }
          let sum = acc;
          if (null != secondaryColor) {
            let num = closure_1_3[colorStrings.id];
            if (num == null) {
              num = 0;
            }
            sum = acc + num;
          }
          return sum;
        }, 0);
      }
    }
    return num;
  }, items3);
  const items4 = [skuId, stateFromStores2, stateFromStores, stateFromStores1];
  return noop.useMemo(() => {
    skuId = skuId.skuId;
    if (Powerups.GUILD_POWERUP_ROLE_COLOR_SKU_ID === skuId) {
      if (stateFromStores2 > 0) {
        const intl5 = tmp2(1119).intl;
        const obj2 = { perk: tmp.title, memberCount: tmp14 };
        let formatToPlainStringResult = intl5.formatToPlainString(_modDef2518["4jSvr1"], obj2);
      } else {
        const intl4 = tmp2(1119).intl;
        const obj3 = { perk: tmp.title };
        formatToPlainStringResult = intl4.formatToPlainString(_modDef2518.cavtEo, obj3);
      }
    } else {
      if (tmp2(4683).VANITY_URL_POWERUP_SKU_ID === skuId) {
        const intl3 = tmp2(1119).intl;
        const string = intl3.string;
        const tmp11 = _modDef2518;
        if (stateFromStores1) {
          let stringResult = string(tmp11.hN75yb);
          let tmp13 = tmp10;
        } else {
          stringResult = string(tmp11.Du91Rb);
          tmp13 = tmp10;
        }
        let tmp7 = tmp13;
        let formatToPlainStringResult1 = stringResult;
      } else {
        if (tmp2(4683).GUILD_TAGS_BADGE_PACK_PETS_POWERUP_SKU_ID !== skuId) {
          if (tmp2(4683).GUILD_TAGS_BADGE_PACK_FLEX_POWERUP_SKU_ID !== skuId) {
            if (tmp2(4683).GUILD_TAGS_BADGE_PACK_PLANT_POWERUP_SKU_ID !== skuId) {
              if (tmp2(4683).GUILD_TAGS_BADGE_PACK_CREEPY_CRAWLIES_POWERUP_SKU_ID !== skuId) {
                const intl = tmp2(1119).intl;
                const obj = { perk: tmp.title, memberCount: null };
                let num = stateFromStores;
                if (stateFromStores == null) {
                  num = 0;
                }
                obj.memberCount = num;
                formatToPlainStringResult1 = intl.formatToPlainString(_modDef2518["4jSvr1"], obj);
                tmp7 = importDefault;
              }
            }
          }
        }
        const intl2 = tmp2(1119).intl;
        formatToPlainStringResult1 = intl2.string(_modDef2518.Vf2ZcR);
        tmp7 = importDefault;
      }
      const obj4 = { text: formatToPlainStringResult1, critical: tmp.skuId === tmp2(4683).VANITY_URL_POWERUP_SKU_ID };
      const items = [obj4];
      let tmp20 = stateFromStores1;
      if (stateFromStores1) {
        tmp20 = tmp.skuId === tmp2(4683).GUILD_POWERUP_LEVEL_3_SKU_ID;
      }
      if (tmp20) {
        const obj5 = { text: null, critical: true };
        const intl6 = tmp2(1119).intl;
        obj5.text = intl6.string(tmp7(2518).M4XL5n);
        items.push(obj5);
      }
      return items;
    }
  }, items4);
});
