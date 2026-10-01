// Module ID: 12033
// Function ID: 12034
// Name: useAvailableBoostCountForPowerup
// Dependencies: [19, 2067, 4723, 4724, 504, 4743, 1370, 2]
// Exports: default

// Module 12033 (useAvailableBoostCountForPowerup)
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 2067 */;
import GuildPowerupsStore from "GuildPowerupsStore" /* 4723 */;
import GuildPowerupsConstants from "GuildPowerupsConstants" /* 4724 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, closure_0, importDefault;

let metroImportAll;
let metroImportDefault;
let metroRequire;
({ GuildPowerupType: metroRequire, POWERUPS_INCLUDED_IN_LEVEL: metroImportDefault, LEVEL_SKU_ID_TO_BOOSTING_TIER: metroImportAll } = GuildPowerupsConstants);
const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useAvailableBoostCountForPowerup.tsx");

export default function useAvailableBoostCountForPowerup(arg0, arg1) {
  let closure_1;
  let stateFromStores1;
  _require = arg0;
  importDefault = arg1;
  let items = [GuildStore];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(closure_0));
  const items1 = [GuildPowerupsStore];
  const obj2 = require("get initialized");
  stateFromStores1 = obj2.useStateFromStores(items1, () => GuildPowerupsStore.getStateForGuild(closure_0));
  const items2 = [arg1, stateFromStores1];
  const spent = require("useGuildPowerupsBoostCount")(arg0).spent;
  const memo = react.useMemo(() => {
    let allPowerups;
    const tmp = closure_1;
    if (null != closure_1) {
      if (tmp.type === constants.LEVEL) {
        if (null != stateFromStores1) {
          let items;
          closure_0 = tmp9;
          if (null == closure_1_8[tmp.skuId]) {
            items = [];
          } else {
            const tmp2 = globalThis;
            const _Object = Object;
            const entries = Object.entries(closure_1_7);
            const found = entries.filter((item) => {
              let tmp;
              let tmp2;
              [tmp, tmp2] = item;
              return tmp2 === closure_0 && null != stateFromStores1.unlockedPowerups[tmp];
            });
            const mapped = found.map((item) => {
              let tmp;
              [tmp] = item;
              return allPowerups.allPowerups[tmp];
            });
            items = mapped.filter(closure_0(stateFromStores1[6]).isNotNullish);
          }
          return items;
        }
      }
    }
    return [];
  }, items2);
  let num;
  if (memo != null) {
    num = memo.reduce((acc, cost) => acc + cost.cost, 0);
  }
  let num3;
  const _Math = Math;
  if (stateFromStores != null) {
    num3 = stateFromStores.premiumSubscriberCount;
  }
  if (num3 == null) {
    num3 = 0;
  }
  const diff = num3 - spent;
  if (num == null) {
    num = 0;
  }
  return max(diff + num, 0);
};
