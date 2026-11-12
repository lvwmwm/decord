// Module ID: 18287
// Function ID: 18288
// Name: useAllowFriendsFromMutualGuildsOnly
// Dependencies: [19, 4995, 7260, 2]
// Exports: useAllowFriendsFromMutualGuildsOnly

// Module 18287 (useAllowFriendsFromMutualGuildsOnly)
import UserSettingsUtils from "UserSettingsUtils" /* 7260 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_settings/content_and_social/useAllowFriendsFromMutualGuildsOnly.tsx");

export function useAllowFriendsFromMutualGuildsOnly() {
  let setting;
  const FriendSourceFlagsSetting = setting(4995).FriendSourceFlagsSetting;
  setting = FriendSourceFlagsSetting.useSetting();
  const items = [setting];
  const memo = react.useMemo(() => {
    const obj = UserSettingsUtils;
    return obj.computeFlags(setting);
  }, items);
  return memo.mutualGuilds && !memo.all;
}
