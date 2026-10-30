// Module ID: 17864
// Function ID: 17865
// Name: useAllowFriendsFromMutualGuildsOnly
// Dependencies: [19, 4834, 7159, 2]
// Exports: useAllowFriendsFromMutualGuildsOnly

// Module 17864 (useAllowFriendsFromMutualGuildsOnly)
import UserSettingsUtils from "UserSettingsUtils" /* 7159 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_settings/content_and_social/useAllowFriendsFromMutualGuildsOnly.tsx");

export function useAllowFriendsFromMutualGuildsOnly() {
  let setting;
  const FriendSourceFlagsSetting = setting(4834).FriendSourceFlagsSetting;
  setting = FriendSourceFlagsSetting.useSetting();
  const items = [setting];
  const memo = react.useMemo(() => {
    const obj = UserSettingsUtils;
    return obj.computeFlags(setting);
  }, items);
  return memo.mutualGuilds && !memo.all;
}
