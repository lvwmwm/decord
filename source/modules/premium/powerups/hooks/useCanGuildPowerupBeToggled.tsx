// Module ID: 11567
// Function ID: 89981
// Name: useCanGuildPowerupBeToggled
// Dependencies: [31, 4017, 4018, 566, 11531, 1212, 2230, 2]
// Exports: default

// Module 11567 (useCanGuildPowerupBeToggled)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { PowerupActiveStatusType } from "BoostedGuildTiers";

const require = arg1;
const result = require("BoostedGuildTiers").fileFinishedImporting("modules/premium/powerups/hooks/useCanGuildPowerupBeToggled.tsx");

export default function useCanGuildPowerupBeToggled(arg0, arg1, arg2) {
  const _require = arg0;
  const importDefault = arg1;
  const dependencyMap = arg2;
  const items = [_isNativeReflectConstruct];
  const stateFromStores = _require(566).useStateFromStores(items, () => tmp2.getStateForGuild(closure_0));
  const tmp2 = importDefault(11531)(arg0, arg1);
  _isNativeReflectConstruct = tmp2;
  const items1 = [stateFromStores, , , , ];
  ({ skuId: arr2[1], dependencies: arr2[2] } = arg1);
  items1[3] = arg2;
  items1[4] = tmp2.type;
  return stateFromStores.useMemo(() => {
    let allPowerups;
    let unlockedPowerups;
    if (null == stateFromStores) {
      let obj = { disabled: true, reason: undefined };
      return obj;
    } else {
      if (tmp2.type !== outer1_5.LEVEL_ACTIVATED) {
        if (tmp2.type !== outer1_5.TIER_OVERRIDE_ACTIVATED) {
          ({ allPowerups, unlockedPowerups } = stateFromStores);
          if (dependencyMap) {
            const _Object = Object;
            const values = Object.values(unlockedPowerups);
            const found = values.find((sku) => {
              sku = sku.sku;
              let dependent_sku_id;
              if (null != sku) {
                dependent_sku_id = sku.dependent_sku_id;
              }
              return dependent_sku_id === outer1_1.skuId;
            });
            let sku_id;
            if (null != found) {
              sku_id = found.sku_id;
            }
            let found1 = sku_id;
          } else {
            const dependencies = lib.dependencies;
            found1 = dependencies.find((arg0) => null == unlockedPowerups[arg0]);
          }
          obj = { disabled: null != found1 };
          let formatToPlainStringResult;
          if (null != found1) {
            if (null != allPowerups[found1]) {
              const intl = callback(1212).intl;
              const tmp12 = lib(2230);
              obj = {};
              let title;
              if (null != allPowerups[found1]) {
                title = tmp14.title;
              }
              obj.perk = title;
              formatToPlainStringResult = intl.formatToPlainString(dependencyMap ? tmp12.vCEBiS : tmp12["1B8AZr"], obj);
              const tmp13 = dependencyMap ? tmp12.vCEBiS : tmp12["1B8AZr"];
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
