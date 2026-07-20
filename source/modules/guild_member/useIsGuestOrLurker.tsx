// Module ID: 10760
// Function ID: 83637
// Name: _isGuestOrLurkerInGuild
// Dependencies: []
// Exports: default, isGuestOrLurkerInGuild

// Module 10760 (_isGuestOrLurkerInGuild)
function _isGuestOrLurkerInGuild(guild_id, id, closure_3, closure_2) {
  const guild = closure_3.getGuild(guild_id);
  let hasItem;
  if (null != guild) {
    const features = guild.features;
    hasItem = features.has(GuildFeatures.CONFERENCE);
  }
  let isGuestOrLurkerResult = true !== hasItem;
  if (isGuestOrLurkerResult) {
    isGuestOrLurkerResult = closure_2.isGuestOrLurker(guild_id, id);
  }
  return isGuestOrLurkerResult;
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const GuildFeatures = arg1(dependencyMap[2]).GuildFeatures;
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/guild_member/useIsGuestOrLurker.tsx");

export default function useIsGuestOrLurker(arg0, arg1) {
  arg1 = arg0;
  const dependencyMap = arg1;
  const items = [closure_3, closure_2];
  const items1 = [arg0, arg1];
  return arg1(dependencyMap[3]).useStateFromStores(items, () => callback(arg0, arg1, closure_3, closure_2), items1);
};
export const isGuestOrLurkerInGuild = function isGuestOrLurkerInGuild(guild_id, id) {
  return _isGuestOrLurkerInGuild(guild_id, id, closure_3, closure_2);
};
