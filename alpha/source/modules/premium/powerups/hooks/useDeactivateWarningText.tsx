// Module ID: 12882
// Function ID: 12883
// Name: useDeactivateWarningText
// Dependencies: [19, 4746, 2099, 2064, 504, 7458, 4719, 1115, 2516, 2]
// Exports: default

// Module 12882 (useDeactivateWarningText)
import _modDef2516 from "module_2516" /* 2516 */;
import Powerups from "Powerups" /* 4719 */;
import noop from "module_19" /* 19 */;
import GuildMemberCountStore from "GuildMemberCountStore" /* 4746 */;
import GuildRoleStore from "GuildRoleStore" /* 2099 */;
import GuildStore from "GuildStore" /* 2064 */;

const require = globalThis.__r;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useDeactivateWarningText.tsx");

export default function useDeactivateWarningText(arg0, skuId) {
  _require = arg0;
  importDefault = skuId;
  let items = [stateFromStores1];
  stateFromStores = require("initialize").useStateFromStores(items, () => GuildMemberCountStore.getMemberCount(closure_0));
  const tmp2 = require("useGuildRoleMemberCounts")(arg0);
  noop = tmp2;
  let obj = require("initialize");
  const items1 = [GuildStore];
  stateFromStores1 = require("initialize").useStateFromStores(items1, () => {
    const guild = GuildStore.getGuild(closure_0);
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
        const intl5 = tmp2(1115).intl;
        const obj2 = { perk: tmp.title, memberCount: tmp14 };
        let formatToPlainStringResult = intl5.formatToPlainString(_modDef2516["4jSvr1"], obj2);
      } else {
        const intl4 = tmp2(1115).intl;
        const obj3 = { perk: tmp.title };
        formatToPlainStringResult = intl4.formatToPlainString(_modDef2516.cavtEo, obj3);
      }
    } else {
      if (tmp2(4719).VANITY_URL_POWERUP_SKU_ID === skuId) {
        const intl3 = tmp2(1115).intl;
        const string = intl3.string;
        const tmp11 = _modDef2516;
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
        if (tmp2(4719).GUILD_TAGS_BADGE_PACK_PETS_POWERUP_SKU_ID !== skuId) {
          if (tmp2(4719).GUILD_TAGS_BADGE_PACK_FLEX_POWERUP_SKU_ID !== skuId) {
            if (tmp2(4719).GUILD_TAGS_BADGE_PACK_PLANT_POWERUP_SKU_ID !== skuId) {
              if (tmp2(4719).GUILD_TAGS_BADGE_PACK_CREEPY_CRAWLIES_POWERUP_SKU_ID !== skuId) {
                const intl = tmp2(1115).intl;
                const obj = { perk: tmp.title, memberCount: null };
                let num = stateFromStores;
                if (stateFromStores == null) {
                  num = 0;
                }
                obj.memberCount = num;
                formatToPlainStringResult1 = intl.formatToPlainString(_modDef2516["4jSvr1"], obj);
                tmp7 = importDefault;
              }
            }
          }
        }
        const intl2 = tmp2(1115).intl;
        formatToPlainStringResult1 = intl2.string(_modDef2516.Vf2ZcR);
        tmp7 = importDefault;
      }
      const obj4 = { text: formatToPlainStringResult1, critical: tmp.skuId === tmp2(4719).VANITY_URL_POWERUP_SKU_ID };
      const items = [obj4];
      let tmp20 = stateFromStores1;
      if (stateFromStores1) {
        tmp20 = tmp.skuId === tmp2(4719).GUILD_POWERUP_LEVEL_3_SKU_ID;
      }
      if (tmp20) {
        const obj5 = { text: null, critical: true };
        const intl6 = tmp2(1115).intl;
        obj5.text = intl6.string(tmp7(2516).M4XL5n);
        items.push(obj5);
      }
      return items;
    }
  }, items4);
};
