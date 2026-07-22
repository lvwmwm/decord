// Module ID: 5627
// Function ID: 48023
// Name: isCreatorMonetizationEnabledGuild
// Dependencies: []
// Exports: default

// Module 5627 (isCreatorMonetizationEnabledGuild)
function isCreatorMonetizationEnabledGuild(guild) {
  const features = guild.features;
  let tmp = !features.has(GuildFeatures.CREATOR_MONETIZABLE_DISABLED);
  if (tmp) {
    const features2 = guild.features;
    let hasItem = features2.has(GuildFeatures.CREATOR_MONETIZABLE);
    if (!hasItem) {
      const features3 = guild.features;
      hasItem = features3.has(GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL);
    }
    tmp = hasItem;
  }
  return tmp;
}
let closure_2 = importDefault(dependencyMap[0]);
const GuildFeatures = arg1(dependencyMap[1]).GuildFeatures;
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/creator_monetization_eligibility/useIsCreatorMonetizationEnabledGuild.tsx");

export default function useIsCreatorMonetizationEnabledGuild(arg0) {
  const arg1 = arg0;
  const items = [closure_2];
  return arg1(dependencyMap[2]).useStateFromStores(items, () => {
    const guild = guild.getGuild(arg0);
    let tmp2 = null != guild;
    if (tmp2) {
      tmp2 = callback(guild);
    }
    return tmp2;
  });
};
export { isCreatorMonetizationEnabledGuild };
