// Module ID: 11557
// Function ID: 89933
// Name: useDeactivateWarningText
// Dependencies: []
// Exports: default

// Module 11557 (useDeactivateWarningText)
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/premium/powerups/hooks/useDeactivateWarningText.tsx");

export default function useDeactivateWarningText(arg0, skuId) {
  skuId = arg0;
  const importDefault = skuId;
  const items = [closure_4];
  const stateFromStores = skuId(dependencyMap[4]).useStateFromStores(items, () => stateFromStores1.getMemberCount(arg0));
  const dependencyMap = stateFromStores;
  const tmp2 = importDefault(dependencyMap[5])(arg0);
  const React = tmp2;
  const obj = skuId(dependencyMap[4]);
  const items1 = [closure_6];
  const stateFromStores1 = skuId(dependencyMap[4]).useStateFromStores(items1, () => {
    const guild = guild.getGuild(arg0);
    let vanityURLCode;
    if (null != guild) {
      vanityURLCode = guild.vanityURLCode;
    }
    return null != vanityURLCode;
  });
  closure_4 = stateFromStores1;
  const obj2 = skuId(dependencyMap[4]);
  const items2 = [closure_5];
  const items3 = [arg0, skuId.skuId, tmp2];
  const stateFromStores2 = skuId(dependencyMap[4]).useStateFromStores(items2, () => {
    let num = 0;
    if (arg1.skuId === arg0(stateFromStores[6]).GUILD_POWERUP_ROLE_COLOR_SKU_ID) {
      num = 0;
      if (null != null) {
        const sortedRoles = stateFromStores2.getSortedRoles(arg0);
        num = sortedRoles.reduce((arg0, colorStrings) => {
          colorStrings = colorStrings.colorStrings;
          let secondaryColor;
          if (null != colorStrings) {
            secondaryColor = colorStrings.secondaryColor;
          }
          let sum = arg0;
          if (null != secondaryColor) {
            let num = 0;
            if (null != closure_3[colorStrings.id]) {
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
  closure_5 = stateFromStores2;
  const items4 = [skuId, stateFromStores2, stateFromStores, stateFromStores1];
  return React.useMemo((arg0, self) => {
    const skuId = self.skuId;
    if (arg0(stateFromStores[6]).GUILD_POWERUP_ROLE_COLOR_SKU_ID === skuId) {
      if (stateFromStores2 > 0) {
        const intl5 = arg0(stateFromStores[7]).intl;
        let obj = { perk: self.title, memberCount: stateFromStores2 };
        let formatToPlainStringResult = intl5.formatToPlainString(self(stateFromStores[8]).4jSvr1, obj);
      } else {
        const intl4 = arg0(stateFromStores[7]).intl;
        obj = { perk: self.title };
        formatToPlainStringResult = intl4.formatToPlainString(self(stateFromStores[8]).cavtEo, obj);
      }
    } else {
      if (arg0(stateFromStores[6]).VANITY_URL_POWERUP_SKU_ID === skuId) {
        const intl3 = arg0(stateFromStores[7]).intl;
        const string = intl3.string;
        const tmp15 = self(stateFromStores[8]);
        if (stateFromStores1) {
          let stringResult = string(tmp15.hN75yb);
        } else {
          stringResult = string(tmp15.Du91Rb);
        }
        let formatToPlainStringResult1 = stringResult;
      } else {
        if (arg0(stateFromStores[6]).GUILD_TAGS_BADGE_PACK_PETS_POWERUP_SKU_ID !== skuId) {
          if (arg0(stateFromStores[6]).GUILD_TAGS_BADGE_PACK_FLEX_POWERUP_SKU_ID !== skuId) {
            if (arg0(stateFromStores[6]).GUILD_TAGS_BADGE_PACK_PLANT_POWERUP_SKU_ID !== skuId) {
              if (arg0(stateFromStores[6]).GUILD_TAGS_BADGE_PACK_CREEPY_CRAWLIES_POWERUP_SKU_ID !== skuId) {
                const intl = arg0(stateFromStores[7]).intl;
                obj = { perk: self.title };
                let num3 = 0;
                if (null != stateFromStores) {
                  num3 = stateFromStores;
                }
                obj.memberCount = num3;
                formatToPlainStringResult1 = intl.formatToPlainString(self(stateFromStores[8]).4jSvr1, obj);
              }
            }
          }
        }
        const intl2 = arg0(stateFromStores[7]).intl;
        formatToPlainStringResult1 = intl2.string(self(stateFromStores[8]).Vf2ZcR);
      }
      const obj1 = { text: formatToPlainStringResult1, critical: self.skuId === arg0(stateFromStores[6]).VANITY_URL_POWERUP_SKU_ID };
      const items = [obj1];
      let tmp32 = stateFromStores1;
      if (stateFromStores1) {
        tmp32 = self.skuId === arg0(stateFromStores[6]).GUILD_POWERUP_LEVEL_3_SKU_ID;
      }
      if (tmp32) {
        const obj2 = {};
        const intl6 = arg0(stateFromStores[7]).intl;
        obj2.text = intl6.string(self(stateFromStores[8]).M4XL5n);
        obj2.critical = true;
        items.push(obj2);
      }
      return items;
    }
  }, items4);
};
