// Module ID: 14663
// Function ID: 14664
// Name: useAllowFriendsFromMutualGuildsOnly
// Dependencies: [19, 3862, 6503, 2]
// Exports: useAllowFriendsFromMutualGuildsOnly

// Module 14663 (useAllowFriendsFromMutualGuildsOnly)
import noop from "noop";

const require = arg1;
const result = require("getSanitizedRestrictedGuilds").fileFinishedImporting("modules/user_settings/content_and_social/useAllowFriendsFromMutualGuildsOnly.tsx");

export const useAllowFriendsFromMutualGuildsOnly = function useAllowFriendsFromMutualGuildsOnly() {
  const FriendSourceFlagsSetting = setting(3862).FriendSourceFlagsSetting;
  setting = FriendSourceFlagsSetting.useSetting();
  const items = [setting];
  const memo = React.useMemo(() => setting(outer1_1[2]).computeFlags(setting), items);
  return memo.mutualGuilds && !memo.all;
};
