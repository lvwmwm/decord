// Module ID: 11559
// Function ID: 89928
// Name: useAvailableBoostCountForPowerup
// Dependencies: []
// Exports: default

// Module 11559 (useAvailableBoostCountForPowerup)
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
({ GuildPowerupType: closure_6, POWERUPS_INCLUDED_IN_LEVEL: closure_7, LEVEL_SKU_ID_TO_BOOSTING_TIER: closure_8 } = arg1(dependencyMap[3]));
const tmp2 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/premium/powerups/hooks/useAvailableBoostCountForPowerup.tsx");

export default function useAvailableBoostCountForPowerup(arg0, arg1) {
  arg1 = arg0;
  const importDefault = arg1;
  const items = [closure_4];
  const stateFromStores = arg1(dependencyMap[4]).useStateFromStores(items, () => guild.getGuild(arg0));
  const obj = arg1(dependencyMap[4]);
  const items1 = [closure_5];
  const stateFromStores1 = arg1(dependencyMap[4]).useStateFromStores(items1, () => stateForGuild.getStateForGuild(arg0));
  const dependencyMap = stateFromStores1;
  const items2 = [arg1, stateFromStores1];
  const memo = React.useMemo(() => {
    if (null != arg1) {
      if (arg1.type === constants.LEVEL) {
        if (null != stateFromStores1) {
          const arg0 = tmp10;
          if (null == closure_8[closure_1.skuId]) {
            let items = [];
          } else {
            const _Object = Object;
            const entries = Object.entries(closure_7);
            const found = entries.filter((arg0) => {
              let tmp;
              let tmp2;
              [tmp, tmp2] = arg0;
              let tmp3 = tmp2 === tmp10;
              if (tmp3) {
                tmp3 = null != closure_2.unlockedPowerups[tmp];
              }
              return tmp3;
            });
            const mapped = found.map((arg0) => {
              let tmp;
              [tmp] = arg0;
              return closure_2.allPowerups[tmp];
            });
            items = mapped.filter(arg0(stateFromStores1[6]).isNotNullish);
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
  const diff = num2 - importDefault(dependencyMap[5])(arg0).spent;
  if (null != reduced) {
    num3 = reduced;
  }
  return Math.max(diff + num3, 0);
};
