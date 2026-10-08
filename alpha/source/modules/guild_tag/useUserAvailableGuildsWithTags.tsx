// Module ID: 14716
// Function ID: 14717
// Name: useUserAvailableGuildsWithTags
// Dependencies: [2124, 2086, 558, 576, 8265, 504, 2]

// Module 14716 (useUserAvailableGuildsWithTags)
import react from "react" /* 576 */;
import GuildMemberStore from "GuildMemberStore" /* 2124 */;
import GuildStore from "GuildStore" /* 2086 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let guildsArray, selfMember;

let tmp;
const get_initialized = tmp(504);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useUserAvailableGuildsWithTags() {
  let tmp4;
  let tmp5;
  let obj = react;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore, GuildMemberStore];
    const fn = function u() {
      guildsArray = guildsArray.getGuildsArray();
      return guildsArray.filter((id) => {
        selfMember = selfMember.getSelfMember(id.id);
        const obj = closure_1_0(closure_1_1[4]);
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
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = get_initialized;
  return tmpResult.useStateFromStoresArray(tmp4, tmp5);
}) : (function useUserAvailableGuildsWithTags() {
  let obj = get_initialized;
  const items = [GuildStore, GuildMemberStore];
  return obj.useStateFromStoresArray(items, () => {
    guildsArray = guildsArray.getGuildsArray();
    return guildsArray.filter((id) => {
      selfMember = selfMember.getSelfMember(id.id);
      const obj = closure_1_0(closure_1_1[4]);
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
});
const result = size.fileFinishedImporting("modules/guild_tag/useUserAvailableGuildsWithTags.tsx");

export const useUserAvailableGuildsWithTags = tmp2;
