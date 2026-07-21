// Module ID: 11583
// Function ID: 90027
// Name: useGuildPowerupsWarningConfig
// Dependencies: []
// Exports: default

// Module 11583 (useGuildPowerupsWarningConfig)
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/premium/powerups/hooks/useGuildPowerupsWarningConfig.tsx");

export default function useGuildPowerupsWarningConfig(arg0, arg1) {
  arg1 = arg0;
  const importDefault = arg1;
  const items = [closure_4];
  const items1 = [arg0];
  const stateFromStores = arg1(dependencyMap[3]).useStateFromStores(items, () => appliedGuildBoostsForGuild.getAppliedGuildBoostsForGuild(arg0), items1);
  const dependencyMap = stateFromStores;
  const items2 = [stateFromStores];
  const diff = importDefault(dependencyMap[2])(arg0).spent - React.useMemo(() => {
    let length;
    if (null != stateFromStores) {
      if (null != stateFromStores.filter) {
        const found = stateFromStores.filter((ended) => {
          let tmp = !ended.ended;
          if (tmp) {
            tmp = null == ended.endsAt;
          }
          return tmp;
        });
        if (null != found) {
          length = found.length;
        }
      }
    }
    let num = 0;
    if (null != length) {
      num = length;
    }
    return num;
  }, items2);
  const React = diff;
  const items3 = [diff, arg1];
  return React.useMemo(() => {
    if (diff <= 0) {
      let obj = {};
    } else {
      obj = { shouldShow: true };
      const intl = arg0(stateFromStores[4]).intl;
      obj.title = intl.string(arg1(stateFromStores[5]).n5hQhc);
      const intl2 = arg0(stateFromStores[4]).intl;
      obj = { boostCount: diff, perksString: arg1.join(", ") };
      obj.description = intl2.formatToPlainString(arg1(stateFromStores[5]).iAaAiG, obj);
      obj.requiredBoostCount = diff;
    }
    return obj;
  }, items3);
};
