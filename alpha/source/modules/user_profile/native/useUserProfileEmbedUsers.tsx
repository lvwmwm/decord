// Module ID: 11824
// Function ID: 11825
// Name: useUserProfileEmbedUsers
// Dependencies: [19, 4766, 4829, 4859, 1386, 6037, 11825, 504, 1450, 11827, 2]
// Exports: default

// Module 11824 (useUserProfileEmbedUsers)
import UserProfileEmbedUsers from "UserProfileEmbedUsers" /* 11825 */;
import UserProfileEmbedRenderingMobileExperiment from "UserProfileEmbedRenderingMobileExperiment" /* 11827 */;
import react_mod from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 4766 */;
import GuildMemberStore from "GuildMemberStore" /* 4829 */;
import RelationshipStore from "RelationshipStore" /* 4859 */;
import UserStore from "UserStore" /* 1386 */;
import UserProfileStore from "UserProfileStore" /* 6037 */;
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
  const items1 = [require("ApexExperiment").ApexExperimentStore, UserStore, UserProfileStore, GuildMemberStore, memo, RelationshipStore];
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
