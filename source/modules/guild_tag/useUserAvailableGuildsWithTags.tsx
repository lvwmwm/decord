// Module ID: 13714
// Function ID: 105176
// Name: useUserAvailableGuildsWithTags
// Dependencies: [1918, 1838, 566, 7917, 2]
// Exports: useUserAvailableGuildsWithTags

// Module 13714 (useUserAvailableGuildsWithTags)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/guild_tag/useUserAvailableGuildsWithTags.tsx");

export const useUserAvailableGuildsWithTags = function useUserAvailableGuildsWithTags() {
  const items = [_createForOfIteratorHelperLoose, _isNativeReflectConstruct];
  return require(566) /* initialize */.useStateFromStoresArray(items, () => {
    const guildsArray = outer1_3.getGuildsArray();
    return guildsArray.filter((id) => {
      const selfMember = outer2_2.getSelfMember(id.id);
      let guildSupportsTagsResult = outer2_0(outer2_1[3]).guildSupportsTags(id);
      if (guildSupportsTagsResult) {
        let joinedAt;
        if (null != selfMember) {
          joinedAt = selfMember.joinedAt;
        }
        guildSupportsTagsResult = null != joinedAt;
      }
      if (guildSupportsTagsResult) {
        guildSupportsTagsResult = true !== selfMember.isPending;
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
