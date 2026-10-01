// Module ID: 12030
// Function ID: 12031
// Name: useCanGuildPowerupBeToggled
// Dependencies: [19, 4723, 4724, 504, 11996, 1115, 2519, 2]
// Exports: default

// Module 12030 (useCanGuildPowerupBeToggled)
import GuildPowerupsConstants from "GuildPowerupsConstants" /* 4724 */;
import usePowerupActiveStatusDefault from "usePowerupActiveStatus" /* 11996 */;
import react from "react" /* 19 */;
import GuildPowerupsStore from "GuildPowerupsStore" /* 4723 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, closure_4, dependencyMap, importDefault, sku;

const PowerupActiveStatusType = GuildPowerupsConstants.PowerupActiveStatusType;
const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useCanGuildPowerupBeToggled.tsx");

export default function useCanGuildPowerupBeToggled(arg0, arg1, arg2) {
  let closure_0;
  let closure_1;
  let closure_2;
  _require = arg0;
  importDefault = arg1;
  dependencyMap = arg2;
  let obj = require("get initialized");
  const items = [closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => GuildPowerupsStore.getStateForGuild(closure_0));
  const tmp2 = usePowerupActiveStatusDefault(arg0, arg1);
  closure_4 = tmp2;
  const items1 = [stateFromStores, , , , ];
  ({ skuId: arr2[1], dependencies: arr2[2] } = arg1);
  items1[3] = arg2;
  items1[4] = tmp2.type;
  return stateFromStores.useMemo(() => {
    let allPowerups;
    let formatToPlainStringResult;
    let unlockedPowerups;
    const tmp = stateFromStores;
    if (null == stateFromStores) {
      return { disabled: true, reason: "a" };
    } else {
      if (closure_4.type !== constants.LEVEL_ACTIVATED) {
        if (closure_4.type !== tmp15.TIER_OVERRIDE_ACTIVATED) {
          let found1;
          ({ allPowerups, unlockedPowerups } = tmp);
          if (closure_2) {
            const _Object = Object;
            const values = Object.values(unlockedPowerups);
            const found = values.find((sku) => {
              sku = sku.sku;
              let dependent_sku_id;
              if (sku != null) {
                dependent_sku_id = sku.dependent_sku_id;
              }
              return dependent_sku_id === skuId.skuId;
            });
            let sku_id;
            if (found != null) {
              sku_id = found.sku_id;
            }
            found1 = sku_id;
          } else {
            const dependencies = skuId.dependencies;
            found1 = dependencies.find((item) => null == unlockedPowerups[item]);
          }
          const obj = { disabled: null != found1, reason: formatToPlainStringResult };
          formatToPlainStringResult = undefined;
          if (null != found1) {
            if (null != allPowerups[found1]) {
              const intl = closure_0(closure_2[5]).intl;
              const formatToPlainString = intl.formatToPlainString;
              const tmp11 = skuId(closure_2[6]);
              let title;
              const tmp12 = closure_2 ? tmp11.vCEBiS : tmp11["1B8AZr"];
              if (allPowerups[found1] != null) {
                title = tmp13.title;
              }
              const obj2 = { perk: title };
              formatToPlainStringResult = formatToPlainString(tmp12, obj2);
            }
          }
          return obj;
        }
      }
      return { disabled: true, reason: "a" };
    }
  }, items1);
};
