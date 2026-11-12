// Module ID: 16862
// Function ID: 16863
// Name: useUserAvailableGuildsWithTags
// Dependencies: [5082, 5041, 504, 8840, 2]
// Exports: useUserAvailableGuildsWithTags

// Module 16862 (useUserAvailableGuildsWithTags)
import get_initialized from "get initialized" /* 504 */;
import GuildMemberStore from "GuildMemberStore" /* 5082 */;
import GuildStore from "GuildStore" /* 5041 */;
import size from "module_2" /* 2 */;

let guildsArray, selfMember;

const result = size.fileFinishedImporting("modules/guild_tag/useUserAvailableGuildsWithTags.tsx");

export function useUserAvailableGuildsWithTags() {
  let obj = get_initialized;
  const items = [GuildStore, GuildMemberStore];
  return obj.useStateFromStoresArray(items, () => {
    guildsArray = guildsArray.getGuildsArray();
    return guildsArray.filter((id) => {
      selfMember = selfMember.getSelfMember(id.id);
      const obj = closure_1_0(closure_1_1[3]);
      let guildSupportsTagsResult = obj.guildSupportsTags(id);
      if (guildSupportsTagsResult) {
        let joinedAt;
        if (selfMember != null) {
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
        if (profile != null) {
          tag = profile.tag;
        }
        guildSupportsTagsResult = null != tag;
      }
      return guildSupportsTagsResult;
    });
  });
}
