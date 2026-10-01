// Module ID: 12038
// Function ID: 12039
// Name: useDeactivateWarningText
// Dependencies: [19, 4754, 2102, 2067, 504, 6548, 4727, 1115, 2519, 2]
// Exports: default

// Module 12038 (useDeactivateWarningText)
import _modDef2519 from "module_2519" /* 2519 */;
import Powerups from "Powerups" /* 4727 */;
import react_mod from "react" /* 19 */;
import GuildMemberCountStore from "GuildMemberCountStore" /* 4754 */;
import GuildRoleStore from "GuildRoleStore" /* 2102 */;
import GuildStore from "GuildStore" /* 2067 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault, vanityURLCode;

let react = react_mod;
const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useDeactivateWarningText.tsx");

export default function useDeactivateWarningText(arg0, skuId) {
  let closure_0;
  let closure_3;
  let stateFromStores;
  let stateFromStores1;
  let stateFromStores2;
  _require = arg0;
  importDefault = skuId;
  let obj = require("get initialized");
  let items = [stateFromStores1];
  stateFromStores = obj.useStateFromStores(items, () => GuildMemberCountStore.getMemberCount(closure_0));
  const tmp2 = require("useGuildRoleMemberCounts")(arg0);
  react = tmp2;
  let obj2 = require("get initialized");
  const items1 = [GuildStore];
  stateFromStores1 = obj2.useStateFromStores(items1, () => {
    const guild = GuildStore.getGuild(closure_0);
    vanityURLCode = undefined;
    if (guild != null) {
      vanityURLCode = guild.vanityURLCode;
    }
    return null != vanityURLCode;
  });
  let obj3 = require("get initialized");
  const items2 = [stateFromStores2];
  const items3 = [arg0, skuId.skuId, tmp2];
  stateFromStores2 = obj3.useStateFromStores(items2, () => {
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
  return react.useMemo(() => {
    let formatToPlainStringResult1;
    let intl6;
    let num;
    let tmp8;
    skuId = skuId.skuId;
    if (Powerups.GUILD_POWERUP_ROLE_COLOR_SKU_ID === skuId) {
      let formatToPlainStringResult;
      let tmp16;
      if (stateFromStores2 > 0) {
        const intl5 = tmp2(1115).intl;
        const obj2 = { perk: skuId.title, memberCount: tmp15 };
        formatToPlainStringResult = intl5.formatToPlainString(_modDef2519["4jSvr1"], obj2);
        tmp16 = importDefault;
      } else {
        const intl4 = tmp2(1115).intl;
        tmp16 = importDefault;
        const obj3 = { perk: skuId.title };
        formatToPlainStringResult = intl4.formatToPlainString(_modDef2519.cavtEo, obj3);
      }
      tmp8 = tmp16;
      formatToPlainStringResult1 = formatToPlainStringResult;
    } else if (Powerups.VANITY_URL_POWERUP_SKU_ID === skuId) {
      let stringResult;
      let tmp14;
      const intl3 = tmp2(1115).intl;
      const string = intl3.string;
      const tmp12 = _modDef2519;
      if (stateFromStores1) {
        stringResult = string(tmp12.hN75yb);
        tmp14 = tmp11;
      } else {
        stringResult = string(tmp12.Du91Rb);
        tmp14 = tmp11;
      }
      tmp8 = tmp14;
      formatToPlainStringResult1 = stringResult;
    } else {
      if (Powerups.GUILD_TAGS_BADGE_PACK_PETS_POWERUP_SKU_ID !== skuId) {
        if (Powerups.GUILD_TAGS_BADGE_PACK_FLEX_POWERUP_SKU_ID !== skuId) {
          if (Powerups.GUILD_TAGS_BADGE_PACK_PLANT_POWERUP_SKU_ID !== skuId) {
            if (Powerups.GUILD_TAGS_BADGE_PACK_CREEPY_CRAWLIES_POWERUP_SKU_ID !== skuId) {
              const intl = tmp2(1115).intl;
              const formatToPlainString = intl.formatToPlainString;
              const obj = { perk: skuId.title, memberCount: num };
              num = stateFromStores;
              const v4jSvr1 = _modDef2519["4jSvr1"];
              const tmp4 = importDefault;
              if (stateFromStores == null) {
                num = 0;
              }
              formatToPlainStringResult1 = formatToPlainString(v4jSvr1, obj);
              tmp8 = tmp4;
            }
          }
        }
      }
      const intl2 = tmp2(1115).intl;
      formatToPlainStringResult1 = intl2.string(_modDef2519.Vf2ZcR);
      tmp8 = importDefault;
    }
    const items = [{ text: formatToPlainStringResult1, critical: skuId.skuId === Powerups.VANITY_URL_POWERUP_SKU_ID }];
    let tmp19 = stateFromStores1;
    ({ text: formatToPlainStringResult1, critical: skuId.skuId === Powerups.VANITY_URL_POWERUP_SKU_ID });
    if (tmp19) {
      tmp19 = tmp.skuId === tmp2(4727).GUILD_POWERUP_LEVEL_3_SKU_ID;
    }
    if (tmp19) {
      const push = items.push;
      const obj5 = { text: intl6.string(tmp8(2519).M4XL5n), critical: true };
      intl6 = tmp2(1115).intl;
      push(obj5);
    }
    return items;
  }, items4);
};
