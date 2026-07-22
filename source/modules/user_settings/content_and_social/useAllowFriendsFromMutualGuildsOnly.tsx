// Module ID: 14424
// Function ID: 108788
// Name: useAllowFriendsFromMutualGuildsOnly
// Dependencies: []
// Exports: useAllowFriendsFromMutualGuildsOnly

// Module 14424 (useAllowFriendsFromMutualGuildsOnly)
let closure_2 = importAll(dependencyMap[0]);
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/user_settings/content_and_social/useAllowFriendsFromMutualGuildsOnly.tsx");

export const useAllowFriendsFromMutualGuildsOnly = function useAllowFriendsFromMutualGuildsOnly() {
  const FriendSourceFlagsSetting = arg1(dependencyMap[1]).FriendSourceFlagsSetting;
  const setting = FriendSourceFlagsSetting.useSetting();
  const arg1 = setting;
  const items = [setting];
  const memo = React.useMemo(() => setting(closure_1[2]).computeFlags(setting), items);
  return memo.mutualGuilds && !memo.all;
};
