// Module ID: 14958
// Function ID: 112577
// Name: useCanSeeNUFChannelsForGuild
// Dependencies: []
// Exports: useCanSeeNUFChannelsForGuild

// Module 14958 (useCanSeeNUFChannelsForGuild)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
const GuildFeatures = arg1(dependencyMap[3]).GuildFeatures;
const GuildMemberFlags = arg1(dependencyMap[4]).GuildMemberFlags;
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/nuf_channels/native/useCanSeeNUFChannelsForGuild.tsx");

export const useCanSeeNUFChannelsForGuild = function useCanSeeNUFChannelsForGuild(id) {
  const arg1 = id;
  const items = [closure_4, closure_3, closure_2];
  const items1 = [id];
  return arg1(dependencyMap[5]).useStateFromStores(items, () => {
    const currentUser = currentUser.getCurrentUser();
    if (null != currentUser) {
      if (obj3.isNewUser(currentUser)) {
        const guild = guild.getGuild(arg0);
        if (null != guild) {
          const features2 = guild.features;
          if (!features2.has(constants.HUB)) {
            const selfMember = selfMember.getSelfMember(arg0);
            const features = guild.features;
            let hasFlagResult = features.has(constants.GUILD_ONBOARDING) && null != selfMember;
            if (hasFlagResult) {
              const flags = selfMember.flags;
              let num2 = 0;
              if (null != flags) {
                num2 = flags;
              }
              hasFlagResult = arg0(closure_1[7]).hasFlag(num2, constants2.STARTED_ONBOARDING);
              const obj = arg0(closure_1[7]);
            }
            if (hasFlagResult) {
              const flags2 = selfMember.flags;
              let num4 = 0;
              if (null != flags2) {
                num4 = flags2;
              }
              hasFlagResult = !arg0(closure_1[7]).hasFlag(num4, constants2.COMPLETED_ONBOARDING);
              const obj2 = arg0(closure_1[7]);
            }
            return !hasFlagResult;
          }
        }
        return false;
      }
      const obj3 = arg0(closure_1[6]);
    }
    return false;
  }, items1);
};
