// Module ID: 17322
// Function ID: 17323
// Name: useAllowFriendsFromMutualGuildsOnly
// Dependencies: [19, 558, 576, 4800, 7093, 2]

// Module 17322 (useAllowFriendsFromMutualGuildsOnly)
import react2 from "react" /* 576 */;
import UserSettings from "UserSettings" /* 4800 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp;
const UserSettingsUtils = tmp(7093);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useAllowFriendsFromMutualGuildsOnly() {
  let tmp5;
  const obj = react2;
  const cResult = obj.c(2);
  const FriendSourceFlagsSetting = UserSettings.FriendSourceFlagsSetting;
  const setting = FriendSourceFlagsSetting.useSetting();
  if (cResult[0] !== setting) {
    const tmpResult = UserSettingsUtils;
    const flags = tmpResult.computeFlags(setting);
    cResult[0] = setting;
    cResult[1] = flags;
    tmp5 = flags;
  } else {
    tmp5 = cResult[1];
  }
  return tmp5.mutualGuilds && !tmp5.all;
}) : (function useAllowFriendsFromMutualGuildsOnly() {
  let setting;
  const FriendSourceFlagsSetting = setting(4800).FriendSourceFlagsSetting;
  setting = FriendSourceFlagsSetting.useSetting();
  const items = [setting];
  const memo = react.useMemo(() => {
    const obj = UserSettingsUtils;
    return obj.computeFlags(setting);
  }, items);
  return memo.mutualGuilds && !memo.all;
});
const result = size.fileFinishedImporting("modules/user_settings/content_and_social/useAllowFriendsFromMutualGuildsOnly.tsx");

export const useAllowFriendsFromMutualGuildsOnly = tmp2;
