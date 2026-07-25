// Module ID: 14599
// Function ID: 111391
// Name: useAllowFriendsFromMutualGuildsOnly
// Dependencies: [31, 3804, 6449, 2]
// Exports: useAllowFriendsFromMutualGuildsOnly

// Module 14599 (useAllowFriendsFromMutualGuildsOnly)
import result from "result";

const require = arg1;
const result = require("getSanitizedRestrictedGuilds").fileFinishedImporting("modules/user_settings/content_and_social/useAllowFriendsFromMutualGuildsOnly.tsx");

export const useAllowFriendsFromMutualGuildsOnly = function useAllowFriendsFromMutualGuildsOnly() {
  const FriendSourceFlagsSetting = setting(3804).FriendSourceFlagsSetting;
  setting = FriendSourceFlagsSetting.useSetting();
  const items = [setting];
  const memo = React.useMemo(() => setting(outer1_1[2]).computeFlags(setting), items);
  return memo.mutualGuilds && !memo.all;
};
