// Module ID: 14960
// Function ID: 14961
// Name: useAllowFriendsFromMutualGuildsOnly
// Dependencies: [19, 4034, 6054, 2]
// Exports: useAllowFriendsFromMutualGuildsOnly

// Module 14960 (useAllowFriendsFromMutualGuildsOnly)
import noop from "noop";

const require = arg1;
const result = require("getSanitizedRestrictedGuilds").fileFinishedImporting("modules/user_settings/content_and_social/useAllowFriendsFromMutualGuildsOnly.tsx");

export const useAllowFriendsFromMutualGuildsOnly = function useAllowFriendsFromMutualGuildsOnly() {
  const FriendSourceFlagsSetting = setting(4034).FriendSourceFlagsSetting;
  setting = FriendSourceFlagsSetting.useSetting();
  const items = [setting];
  const memo = React.useMemo(() => setting(outer1_1[2]).computeFlags(setting), items);
  return memo.mutualGuilds && !memo.all;
};
