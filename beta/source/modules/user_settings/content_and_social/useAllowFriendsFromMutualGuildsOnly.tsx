// Module ID: 16203
// Function ID: 16204
// Name: useAllowFriendsFromMutualGuildsOnly
// Dependencies: [19, 2019, 7240, 2]
// Exports: useAllowFriendsFromMutualGuildsOnly

// Module 16203 (useAllowFriendsFromMutualGuildsOnly)
import UserSettingsUtils from "UserSettingsUtils" /* 7240 */;
import noop from "module_19" /* 19 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/content_and_social/useAllowFriendsFromMutualGuildsOnly.tsx");

export const useAllowFriendsFromMutualGuildsOnly = function useAllowFriendsFromMutualGuildsOnly() {
  const FriendSourceFlagsSetting = setting(2019).FriendSourceFlagsSetting;
  setting = FriendSourceFlagsSetting.useSetting();
  const items = [setting];
  const memo = noop.useMemo(() => UserSettingsUtils.computeFlags(setting), items);
  return memo.mutualGuilds && !memo.all;
};
