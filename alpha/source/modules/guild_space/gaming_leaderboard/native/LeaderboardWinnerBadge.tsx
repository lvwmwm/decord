// Module ID: 13736
// Function ID: 13737
// Name: LeaderboardWinnerBadge
// Dependencies: [19, 17, 4663, 21, 4792, 504, 6725, 13737, 12244, 13738, 13742, 13746, 2]
// Exports: default

// Module 13736 (LeaderboardWinnerBadge)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import canUseGuildSpace from "canUseGuildSpace" /* 6725 */;
import useActiveLeaderboardWinnerDataDefault from "useActiveLeaderboardWinnerData" /* 13737 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 4663 */;
import createStyles from "createStyles" /* 4792 */;
import size from "module_2" /* 2 */;

const View = react_native.View;
const jsx = Fragment.jsx;
let closure_6 = createStyles.createStyles({ container: { marginLeft: 4 } });
let result = size.fileFinishedImporting("modules/guild_space/gaming_leaderboard/native/LeaderboardWinnerBadge.tsx");

export default function LeaderboardWinnerBadge(guildId) {
  guildId = guildId.guildId;
  const userId = guildId.userId;
  const tmp = closure_6();
  let obj = guildId(504);
  const items = [GuildStore];
  const items1 = [guildId];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const guild = GuildStore.getGuild(guildId);
    let result = null != guild;
    if (result) {
      const obj = canUseGuildSpace;
      result = obj.isGuildSpaceVisibleToMembers(guild);
    }
    return result;
  }, items1);
  const tmp5 = useActiveLeaderboardWinnerDataDefault(guildId, userId);
  const obj2 = guildId(13737);
  const activeLeaderboardLeaderData = obj2.useActiveLeaderboardLeaderData(guildId, userId);
  if (stateFromStores) {
    if (null == tmp5) {
      let tmp9 = null;
      if (null != activeLeaderboardLeaderData) {
        tmp9 = <View style={tmp.container} accessible accessibilityLabel={guildId(12244).getLeaderboardLeaderBadgeText(activeLeaderboardLeaderData)}>{null}</View>;
        const tmp2Result = guildId(12244);
      }
      return tmp9;
    } else {
      let num = tmp5.winningStreak;
      if (num == null) {
        num = 0;
      }
      if (num > 1) {
        let WinnerTrophyBadge = tmp2(13742).StreakTrophyBadge;
      } else {
        WinnerTrophyBadge = tmp2(13746).WinnerTrophyBadge;
      }
      const tmp2Result2 = guildId(12244);
      return <View style={tmp.container} accessible accessibilityLabel={tmp2Result2.getLeaderboardWinnerBadgeText(tmp5)}>{null}</View>;
    }
  } else {
    return null;
  }
};
