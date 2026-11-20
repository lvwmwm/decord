// Module ID: 17248
// Function ID: 17249
// Name: useAllowFriendsFromMutualGuildsOnly
// Dependencies: [19, 4619, 7295, 2]
// Exports: useAllowFriendsFromMutualGuildsOnly

// Module 17248 (useAllowFriendsFromMutualGuildsOnly)
import UserSettingsUtils from "UserSettingsUtils" /* 7295 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_settings/content_and_social/useAllowFriendsFromMutualGuildsOnly.tsx");

export function useAllowFriendsFromMutualGuildsOnly() {
  let setting;
  const FriendSourceFlagsSetting = setting(4619).FriendSourceFlagsSetting;
  setting = FriendSourceFlagsSetting.useSetting();
  const items = [setting];
  const memo = react.useMemo(() => {
    const obj = UserSettingsUtils;
    return obj.computeFlags(setting);
  }, items);
  return memo.mutualGuilds && !memo.all;
}
