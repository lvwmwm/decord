// Module ID: 15019
// Function ID: 15020
// Name: useAllowFriendsFromMutualGuildsOnly
// Dependencies: [19, 4066, 7357, 2]
// Exports: useAllowFriendsFromMutualGuildsOnly

// Module 15019 (useAllowFriendsFromMutualGuildsOnly)
import noop from "noop";

const require = arg1;
const result = require("getSanitizedRestrictedGuilds").fileFinishedImporting("modules/user_settings/content_and_social/useAllowFriendsFromMutualGuildsOnly.tsx");

export const useAllowFriendsFromMutualGuildsOnly = function useAllowFriendsFromMutualGuildsOnly() {
  const FriendSourceFlagsSetting = setting(4066).FriendSourceFlagsSetting;
  setting = FriendSourceFlagsSetting.useSetting();
  const items = [setting];
  const memo = React.useMemo(() => setting(outer1_1[2]).computeFlags(setting), items);
  return memo.mutualGuilds && !memo.all;
};
