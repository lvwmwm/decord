// Module ID: 14588
// Function ID: 111264
// Name: useAllowFriendsFromMutualGuildsOnly
// Dependencies: [31, 3803, 5793, 2]
// Exports: useAllowFriendsFromMutualGuildsOnly

// Module 14588 (useAllowFriendsFromMutualGuildsOnly)
import result from "result";

const require = arg1;
const result = require("getSanitizedRestrictedGuilds").fileFinishedImporting("modules/user_settings/content_and_social/useAllowFriendsFromMutualGuildsOnly.tsx");

export const useAllowFriendsFromMutualGuildsOnly = function useAllowFriendsFromMutualGuildsOnly() {
  const FriendSourceFlagsSetting = setting(3803).FriendSourceFlagsSetting;
  setting = FriendSourceFlagsSetting.useSetting();
  const items = [setting];
  const memo = React.useMemo(() => setting(outer1_1[2]).computeFlags(setting), items);
  return memo.mutualGuilds && !memo.all;
};
