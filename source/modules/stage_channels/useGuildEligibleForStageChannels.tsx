// Module ID: 15387
// Function ID: 117384
// Name: isGuildEligibleForStageChannels
// Dependencies: []
// Exports: useGuildEligibleForStageChannels

// Module 15387 (isGuildEligibleForStageChannels)
function isGuildEligibleForStageChannels(id) {
  let obj;
  let tmp = arg1;
  if (arg1 === undefined) {
    const items = [closure_2];
    tmp = items;
  }
  [obj] = tmp;
  const guild = obj.getGuild(id);
  let hasItem;
  if (null != guild) {
    const features = guild.features;
    hasItem = features.has(GuildFeatures.COMMUNITY);
  }
  return Boolean(hasItem);
}
let closure_2 = importDefault(dependencyMap[0]);
const GuildFeatures = arg1(dependencyMap[1]).GuildFeatures;
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/stage_channels/useGuildEligibleForStageChannels.tsx");

export { isGuildEligibleForStageChannels };
export const useGuildEligibleForStageChannels = function useGuildEligibleForStageChannels(arg0) {
  const arg1 = arg0;
  const items = [closure_2];
  const items1 = [arg0];
  return arg1(dependencyMap[2]).useStateFromStores(items, () => {
    const items = [closure_2];
    return callback(arg0, items);
  }, items1);
};
