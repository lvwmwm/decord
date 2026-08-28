// Module ID: 15408
// Function ID: 15409
// Name: useAllowFriendsFromMutualGuildsOnly
// Dependencies: [19, 4135, 6207, 2]
// Exports: useAllowFriendsFromMutualGuildsOnly

// Module 15408 (useAllowFriendsFromMutualGuildsOnly)
import closure_2 from "noop" /* 19 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/user_settings/content_and_social/useAllowFriendsFromMutualGuildsOnly.tsx");

export const useAllowFriendsFromMutualGuildsOnly = function useAllowFriendsFromMutualGuildsOnly() {
  const FriendSourceFlagsSetting = setting(4135).FriendSourceFlagsSetting;
  setting = FriendSourceFlagsSetting.useSetting();
  const items = [setting];
  const memo = React.useMemo(() => setting(closure_1_1[2]).computeFlags(setting), items);
  return memo.mutualGuilds && !memo.all;
};
