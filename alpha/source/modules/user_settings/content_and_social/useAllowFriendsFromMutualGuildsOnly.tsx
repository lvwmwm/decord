// Module ID: 18452
// Function ID: 18453
// Name: useAllowFriendsFromMutualGuildsOnly
// Dependencies: [19, 5068, 7747, 2]
// Exports: useAllowFriendsFromMutualGuildsOnly

// Module 18452 (useAllowFriendsFromMutualGuildsOnly)
import UserSettingsUtils from "UserSettingsUtils" /* 7747 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_settings/content_and_social/useAllowFriendsFromMutualGuildsOnly.tsx");

export function useAllowFriendsFromMutualGuildsOnly() {
  let setting;
  const FriendSourceFlagsSetting = setting(5068).FriendSourceFlagsSetting;
  setting = FriendSourceFlagsSetting.useSetting();
  const items = [setting];
  const memo = react.useMemo(() => {
    const obj = UserSettingsUtils;
    return obj.computeFlags(setting);
  }, items);
  return memo.mutualGuilds && !memo.all;
}
