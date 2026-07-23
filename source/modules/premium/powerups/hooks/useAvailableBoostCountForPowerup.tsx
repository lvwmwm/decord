// Module ID: 11570
// Function ID: 90002
// Name: useAvailableBoostCountForPowerup
// Dependencies: [31, 1838, 4017, 4018, 566, 4037, 1327, 2]
// Exports: default

// Module 11570 (useAvailableBoostCountForPowerup)
import result from "result";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import BoostedGuildTiers from "BoostedGuildTiers";

let closure_6;
let closure_7;
let closure_8;
const require = arg1;
({ GuildPowerupType: closure_6, POWERUPS_INCLUDED_IN_LEVEL: closure_7, LEVEL_SKU_ID_TO_BOOSTING_TIER: closure_8 } = BoostedGuildTiers);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/premium/powerups/hooks/useAvailableBoostCountForPowerup.tsx");

export default function useAvailableBoostCountForPowerup(arg0, arg1) {
  const _require = arg0;
  const importDefault = arg1;
  let items = [_createForOfIteratorHelperLoose];
  const stateFromStores = _require(stateFromStores1[4]).useStateFromStores(items, () => outer1_4.getGuild(closure_0));
  const obj = _require(stateFromStores1[4]);
  const items1 = [_isNativeReflectConstruct];
  stateFromStores1 = _require(stateFromStores1[4]).useStateFromStores(items1, () => outer1_5.getStateForGuild(closure_0));
  const items2 = [arg1, stateFromStores1];
  const memo = React.useMemo(() => {
    if (null != closure_1) {
      if (closure_1.type === outer1_6.LEVEL) {
        if (null != stateFromStores1) {
          const callback = tmp10;
          if (null == outer1_8[closure_1.skuId]) {
            let items = [];
          } else {
            const _Object = Object;
            const entries = Object.entries(outer1_7);
            const found = entries.filter((arg0) => {
              let tmp;
              let tmp2;
              [tmp, tmp2] = arg0;
              let tmp3 = tmp2 === closure_0;
              if (tmp3) {
                tmp3 = null != outer1_2.unlockedPowerups[tmp];
              }
              return tmp3;
            });
            const mapped = found.map((arg0) => {
              let tmp;
              [tmp] = arg0;
              return outer1_2.allPowerups[tmp];
            });
            items = mapped.filter(callback(stateFromStores1[6]).isNotNullish);
          }
          return items;
        }
      }
    }
    return [];
  }, items2);
  let reduced;
  if (null != memo) {
    reduced = memo.reduce((arg0, cost) => arg0 + cost.cost, 0);
  }
  let prop;
  if (null != stateFromStores) {
    prop = stateFromStores.premiumSubscriberCount;
  }
  let num2 = 0;
  if (null != prop) {
    num2 = prop;
  }
  let num3 = 0;
  const diff = num2 - importDefault(stateFromStores1[5])(arg0).spent;
  if (null != reduced) {
    num3 = reduced;
  }
  return Math.max(diff + num3, 0);
};
