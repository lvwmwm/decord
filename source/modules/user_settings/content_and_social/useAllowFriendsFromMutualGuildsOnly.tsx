// Module ID: 15441
// Function ID: 15442
// Name: useAllowFriendsFromMutualGuildsOnly
// Dependencies: [19, 4136, 6210, 2]
// Exports: useAllowFriendsFromMutualGuildsOnly

// Module 15441 (useAllowFriendsFromMutualGuildsOnly)
import closure_2 from "noop" /* 19 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/user_settings/content_and_social/useAllowFriendsFromMutualGuildsOnly.tsx");

export const useAllowFriendsFromMutualGuildsOnly = function useAllowFriendsFromMutualGuildsOnly() {
  const FriendSourceFlagsSetting = setting(4136).FriendSourceFlagsSetting;
  setting = FriendSourceFlagsSetting.useSetting();
  const items = [setting];
  const memo = React.useMemo(() => setting(closure_1_1[2]).computeFlags(setting), items);
  return memo.mutualGuilds && !memo.all;
};
