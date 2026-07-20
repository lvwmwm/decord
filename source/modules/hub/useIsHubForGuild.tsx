// Module ID: 11400
// Function ID: 88696
// Name: useIsHubForGuild
// Dependencies: []
// Exports: default

// Module 11400 (useIsHubForGuild)
let closure_2 = importDefault(dependencyMap[0]);
const GuildFeatures = arg1(dependencyMap[1]).GuildFeatures;
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/hub/useIsHubForGuild.tsx");

export default function useIsHubForGuild(arg0) {
  const arg1 = arg0;
  const items = [closure_2];
  const items1 = [arg0];
  return arg1(dependencyMap[2]).useStateFromStores(items, () => {
    if (null == arg0) {
      return false;
    } else {
      const guild = guild.getGuild(arg0);
      let hasItem;
      if (null != guild) {
        const features = guild.features;
        hasItem = features.has(constants.HUB);
      }
      return null != hasItem && hasItem;
    }
  }, items1);
};
