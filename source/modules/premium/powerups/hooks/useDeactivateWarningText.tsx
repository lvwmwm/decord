// Module ID: 11602
// Function ID: 90268
// Name: useDeactivateWarningText
// Dependencies: [31, 4051, 1910, 1838, 566, 5148, 4021, 1212, 2230, 2]
// Exports: default

// Module 11602 (useDeactivateWarningText)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_6 from "_createForOfIteratorHelperLoose";

const require = arg1;
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/premium/powerups/hooks/useDeactivateWarningText.tsx");

export default function useDeactivateWarningText(arg0, skuId) {
  const _require = arg0;
  const importDefault = skuId;
  let items = [stateFromStores1];
  stateFromStores = _require(stateFromStores[4]).useStateFromStores(items, () => stateFromStores1.getMemberCount(closure_0));
  const tmp2 = importDefault(stateFromStores[5])(arg0);
  const React = tmp2;
  let obj = _require(stateFromStores[4]);
  const items1 = [closure_6];
  stateFromStores1 = _require(stateFromStores[4]).useStateFromStores(items1, () => {
    const guild = outer1_6.getGuild(closure_0);
    let vanityURLCode;
    if (null != guild) {
      vanityURLCode = guild.vanityURLCode;
    }
    return null != vanityURLCode;
  });
  let obj2 = _require(stateFromStores[4]);
  const items2 = [stateFromStores2];
  const items3 = [arg0, skuId.skuId, tmp2];
  stateFromStores2 = _require(stateFromStores[4]).useStateFromStores(items2, () => {
    let num = 0;
    if (skuId.skuId === callback(stateFromStores[6]).GUILD_POWERUP_ROLE_COLOR_SKU_ID) {
      num = 0;
      if (null != result) {
        const sortedRoles = stateFromStores2.getSortedRoles(callback);
        num = sortedRoles.reduce((arg0, colorStrings) => {
          colorStrings = colorStrings.colorStrings;
          let secondaryColor;
          if (null != colorStrings) {
            secondaryColor = colorStrings.secondaryColor;
          }
          let sum = arg0;
          if (null != secondaryColor) {
            let num = 0;
            if (null != outer1_3[colorStrings.id]) {
              num = tmp4;
            }
            sum = arg0 + num;
          }
          return sum;
        }, 0);
      }
    }
    return num;
  }, items3);
  const items4 = [skuId, stateFromStores2, stateFromStores, stateFromStores1];
  return React.useMemo(() => {
    skuId = skuId.skuId;
    if (callback(stateFromStores[6]).GUILD_POWERUP_ROLE_COLOR_SKU_ID === skuId) {
      if (stateFromStores2 > 0) {
        const intl5 = callback(stateFromStores[7]).intl;
        let obj = { perk: skuId.title, memberCount: stateFromStores2 };
        let formatToPlainStringResult = intl5.formatToPlainString(skuId(stateFromStores[8])["4jSvr1"], obj);
      } else {
        const intl4 = callback(stateFromStores[7]).intl;
        obj = { perk: skuId.title };
        formatToPlainStringResult = intl4.formatToPlainString(skuId(stateFromStores[8]).cavtEo, obj);
      }
    } else {
      if (callback(stateFromStores[6]).VANITY_URL_POWERUP_SKU_ID === skuId) {
        const intl3 = callback(stateFromStores[7]).intl;
        const string = intl3.string;
        const tmp15 = skuId(stateFromStores[8]);
        if (stateFromStores1) {
          let stringResult = string(tmp15.hN75yb);
        } else {
          stringResult = string(tmp15.Du91Rb);
        }
        let formatToPlainStringResult1 = stringResult;
      } else {
        if (callback(stateFromStores[6]).GUILD_TAGS_BADGE_PACK_PETS_POWERUP_SKU_ID !== skuId) {
          if (callback(stateFromStores[6]).GUILD_TAGS_BADGE_PACK_FLEX_POWERUP_SKU_ID !== skuId) {
            if (callback(stateFromStores[6]).GUILD_TAGS_BADGE_PACK_PLANT_POWERUP_SKU_ID !== skuId) {
              if (callback(stateFromStores[6]).GUILD_TAGS_BADGE_PACK_CREEPY_CRAWLIES_POWERUP_SKU_ID !== skuId) {
                const intl = callback(stateFromStores[7]).intl;
                obj = { perk: skuId.title };
                let num3 = 0;
                if (null != stateFromStores) {
                  num3 = stateFromStores;
                }
                obj.memberCount = num3;
                formatToPlainStringResult1 = intl.formatToPlainString(skuId(stateFromStores[8])["4jSvr1"], obj);
              }
            }
          }
        }
        const intl2 = callback(stateFromStores[7]).intl;
        formatToPlainStringResult1 = intl2.string(skuId(stateFromStores[8]).Vf2ZcR);
      }
      const obj1 = { text: formatToPlainStringResult1, critical: skuId.skuId === callback(stateFromStores[6]).VANITY_URL_POWERUP_SKU_ID };
      const items = [obj1];
      let tmp32 = stateFromStores1;
      if (stateFromStores1) {
        tmp32 = skuId.skuId === callback(stateFromStores[6]).GUILD_POWERUP_LEVEL_3_SKU_ID;
      }
      if (tmp32) {
        const obj2 = {};
        const intl6 = callback(stateFromStores[7]).intl;
        obj2.text = intl6.string(skuId(stateFromStores[8]).M4XL5n);
        obj2.critical = true;
        items.push(obj2);
      }
      return items;
    }
  }, items4);
};
