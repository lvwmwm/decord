// Module ID: 13477
// Function ID: 102313
// Name: useUserAvailableGuildsWithTags
// Dependencies: []
// Exports: useUserAvailableGuildsWithTags

// Module 13477 (useUserAvailableGuildsWithTags)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/guild_tag/useUserAvailableGuildsWithTags.tsx");

export const useUserAvailableGuildsWithTags = function useUserAvailableGuildsWithTags() {
  const items = [closure_3, closure_2];
  return arg1(dependencyMap[2]).useStateFromStoresArray(items, () => {
    const guildsArray = guildsArray.getGuildsArray();
    return guildsArray.filter((id) => {
      let guildSupportsTagsResult = callback(closure_1[3]).guildSupportsTags(id);
      if (guildSupportsTagsResult) {
        const selfMember = selfMember.getSelfMember(id.id);
        let joinedAt;
        if (null != selfMember) {
          joinedAt = selfMember.joinedAt;
        }
        guildSupportsTagsResult = null != joinedAt;
      }
      if (guildSupportsTagsResult) {
        const profile = id.profile;
        let tag;
        if (null != profile) {
          tag = profile.tag;
        }
        guildSupportsTagsResult = null != tag;
      }
      return guildSupportsTagsResult;
    });
  });
};
