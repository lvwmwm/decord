// Module ID: 11923
// Function ID: 11924
// Name: useUserProfileEmbedUsers
// Dependencies: [19, 1230, 4861, 4924, 4954, 1386, 6132, 11924, 504, 1450, 11926, 2]
// Exports: default

// Module 11923 (useUserProfileEmbedUsers)
import UserProfileEmbedUsers from "UserProfileEmbedUsers" /* 11924 */;
import UserProfileEmbedRenderingMobileExperiment from "UserProfileEmbedRenderingMobileExperiment" /* 11926 */;
import react_mod from "react" /* 19 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1230 */;
import ChannelStore from "ChannelStore" /* 4861 */;
import GuildMemberStore from "GuildMemberStore" /* 4924 */;
import RelationshipStore from "RelationshipStore" /* 4954 */;
import UserStore from "UserStore" /* 1386 */;
import UserProfileStore from "UserProfileStore" /* 6132 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

let react = react_mod;
const result = size.fileFinishedImporting("modules/user_profile/native/useUserProfileEmbedUsers.tsx");

export default function useUserProfileEmbedUsers(arg0, arg1, arg2) {
  let closure_0;
  let closure_1;
  let closure_2;
  _require = arg0;
  dependencyMap = arg1;
  react = arg2;
  const items = [arg0];
  const memo = react.useMemo(() => {
    const obj = UserProfileEmbedUsers;
    return obj.collectUserProfileEmbedUserIds(closure_0);
  }, items);
  const useStateFromStores = require("get initialized").useStateFromStores;
  const tmp2 = require("get initialized");
  const items1 = [require("ApexExperiment").ApexExperimentStore, UserStore, UserProfileStore, GuildMemberStore, ChannelStore, RelationshipStore, memo];
  const items2 = [memo, arg1, arg2];
  return useStateFromStores(items1, () => {
    if (memo.length > 0) {
      let NO_USER_PROFILE_EMBED_USERS;
      const obj = UserProfileEmbedRenderingMobileExperiment;
      if (obj.getIsUserProfileEmbedRenderingMobileEnabled("Messages")) {
        const getUserProfileEmbedUsers = UserProfileEmbedUsers.getUserProfileEmbedUsers;
        UserProfileEmbedUsers;
        NO_USER_PROFILE_EMBED_USERS = getUserProfileEmbedUsers(tmp, closure_1, closure_2);
      }
      return NO_USER_PROFILE_EMBED_USERS;
    }
    NO_USER_PROFILE_EMBED_USERS = UserProfileEmbedUsers.NO_USER_PROFILE_EMBED_USERS;
  }, items2, require("UserProfileEmbedUsers").areUserProfileEmbedUsersEqual);
};
