// Module ID: 11571
// Function ID: 89993
// Name: usePowerupGroupConfig
// Dependencies: []
// Exports: default

// Module 11571 (usePowerupGroupConfig)
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/premium/powerups/native/hooks/usePowerupGroupConfig.tsx");

export default function usePowerupGroupConfig(arg0, arg1) {
  arg1 = arg0;
  const importDefault = arg1;
  const items = [closure_4];
  const stateFromStores = arg1(dependencyMap[2]).useStateFromStores(items, () => {
    const guild = guild.getGuild(arg0);
    let guildSupportsTagsResult = null != guild;
    if (guildSupportsTagsResult) {
      guildSupportsTagsResult = arg0(stateFromStores[3]).guildSupportsTags(guild);
      const obj = arg0(stateFromStores[3]);
    }
    return guildSupportsTagsResult;
  });
  const dependencyMap = stateFromStores;
  const items1 = [arg1, stateFromStores];
  return React.useMemo(() => {
    if ("guildTagsBadgePacks" === arg1.group) {
      let obj = {};
      const intl = arg0(stateFromStores[4]).intl;
      obj.title = intl.string(arg1(stateFromStores[5]).KC9HRW);
      const intl2 = arg0(stateFromStores[4]).intl;
      obj.description = intl2.string(arg1(stateFromStores[5]).GJiSmP);
      obj = { staticUrl: arg1(stateFromStores[6]), animatedUrl: arg1(stateFromStores[7]) };
      obj.image = obj;
      let stringResult;
      if (!stateFromStores) {
        const intl3 = arg0(stateFromStores[4]).intl;
        stringResult = intl3.string(arg1(stateFromStores[5]).lvk1Gc);
      }
      obj.disabledReason = stringResult;
      obj.badge = undefined;
      obj.forceStaticImages = true;
      return obj;
    } else {
      obj = arg0(stateFromStores[8]);
      obj.assertNever(arg1.group);
    }
  }, items1);
};
