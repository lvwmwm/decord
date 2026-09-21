// Module ID: 16192
// Function ID: 16193
// Name: useAllowFriendsFromMutualGuildsOnly
// Dependencies: [19, 558, 568, 2023, 7241, 2]

// Module 16192 (useAllowFriendsFromMutualGuildsOnly)
import c from "c" /* 568 */;
import UserSettings from "UserSettings" /* 2023 */;
import UserSettingsUtils from "UserSettingsUtils" /* 7241 */;
import noop from "module_19" /* 19 */;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/content_and_social/useAllowFriendsFromMutualGuildsOnly.tsx");

export const useAllowFriendsFromMutualGuildsOnly = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(2);
  const FriendSourceFlagsSetting = UserSettings.FriendSourceFlagsSetting;
  const setting = FriendSourceFlagsSetting.useSetting();
  if (cResult[0] !== setting) {
    const flags = UserSettingsUtils.computeFlags(setting);
    cResult[0] = setting;
    cResult[1] = flags;
    let tmp5 = flags;
    const tmpResult = UserSettingsUtils;
  } else {
    tmp5 = cResult[1];
  }
  return tmp5.mutualGuilds && !tmp5.all;
}) : (() => {
  const FriendSourceFlagsSetting = setting(2023).FriendSourceFlagsSetting;
  setting = FriendSourceFlagsSetting.useSetting();
  const items = [setting];
  const memo = noop.useMemo(() => UserSettingsUtils.computeFlags(setting), items);
  return memo.mutualGuilds && !memo.all;
});
