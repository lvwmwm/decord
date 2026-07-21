// Module ID: 11556
// Function ID: 89907
// Name: useCanGuildPowerupBeToggled
// Dependencies: [0, 0, 0, 4294967295, 0, 0, 0, 0]
// Exports: default

// Module 11556 (useCanGuildPowerupBeToggled)
import __exportStarResult1 from "__exportStarResult1";
import closure_4 from "__exportStarResult1";
import { PowerupActiveStatusType } from "__exportStarResult1";

const result = require("__exportStarResult1").fileFinishedImporting("modules/premium/powerups/hooks/useCanGuildPowerupBeToggled.tsx");

export default function useCanGuildPowerupBeToggled(arg0, arg1, arg2) {
  arg1 = arg0;
  const importDefault = arg1;
  const dependencyMap = arg2;
  const items = [closure_4];
  const stateFromStores = arg1(dependencyMap[3]).useStateFromStores(items, () => tmp2.getStateForGuild(arg0));
  const React = stateFromStores;
  const tmp2 = importDefault(dependencyMap[4])(arg0, arg1);
  closure_4 = tmp2;
  const items1 = [stateFromStores, , , , ];
  ({ skuId: arr2[1], dependencies: arr2[2] } = arg1);
  items1[3] = arg2;
  items1[4] = tmp2.type;
  return React.useMemo(() => {
    let allPowerups;
    let unlockedPowerups;
    if (null == stateFromStores) {
      let obj = { disabled: true, reason: undefined };
      return obj;
    } else {
      if (tmp2.type !== constants.LEVEL_ACTIVATED) {
        if (tmp2.type !== constants.TIER_OVERRIDE_ACTIVATED) {
          ({ allPowerups, unlockedPowerups } = stateFromStores);
          const arg0 = unlockedPowerups;
          if (arg2) {
            const _Object = Object;
            const values = Object.values(unlockedPowerups);
            const found = values.find((sku) => {
              sku = sku.sku;
              let dependent_sku_id;
              if (null != sku) {
                dependent_sku_id = sku.dependent_sku_id;
              }
              return dependent_sku_id === skuId.skuId;
            });
            let sku_id;
            if (null != found) {
              sku_id = found.sku_id;
            }
            let found1 = sku_id;
          } else {
            const dependencies = arg1.dependencies;
            found1 = dependencies.find((arg0) => null == unlockedPowerups[arg0]);
          }
          obj = { disabled: null != found1 };
          let formatToPlainStringResult;
          if (null != found1) {
            if (null != allPowerups[found1]) {
              const intl = arg0(arg2[5]).intl;
              const tmp12 = arg1(arg2[6]);
              obj = {};
              let title;
              if (null != allPowerups[found1]) {
                title = tmp14.title;
              }
              obj.perk = title;
              formatToPlainStringResult = intl.formatToPlainString(arg2 ? tmp12.vCEBiS : tmp12.1B8AZr, obj);
              const tmp13 = arg2 ? tmp12.vCEBiS : tmp12.1B8AZr;
            }
          }
          obj.reason = formatToPlainStringResult;
          return obj;
        }
      }
      const obj1 = { disabled: true, reason: undefined };
      return obj1;
    }
  }, items1);
};
