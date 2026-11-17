// Module ID: 15128
// Function ID: 15129
// Name: LeaderboardWinnerBadge
// Dependencies: [19, 17, 5181, 21, 5310, 504, 7250, 15129, 12974, 15130, 15134, 15138, 2]
// Exports: default

// Module 15128 (LeaderboardWinnerBadge)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import canUseGuildSpace from "canUseGuildSpace" /* 7250 */;
import useActiveLeaderboardWinnerDataDefault from "useActiveLeaderboardWinnerData" /* 15129 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 5181 */;
import createStyles from "createStyles" /* 5310 */;
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
  const obj2 = guildId(15129);
  const activeLeaderboardLeaderData = obj2.useActiveLeaderboardLeaderData(guildId, userId);
  if (stateFromStores) {
    if (null == tmp5) {
      let tmp9 = null;
      if (null != activeLeaderboardLeaderData) {
        tmp9 = <View style={tmp.container} accessible accessibilityLabel={guildId(12974).getLeaderboardLeaderBadgeText(activeLeaderboardLeaderData)}>{null}</View>;
        const tmp2Result = guildId(12974);
      }
      return tmp9;
    } else {
      let num = tmp5.winningStreak;
      if (num == null) {
        num = 0;
      }
      if (num > 1) {
        let WinnerTrophyBadge = tmp2(15134).StreakTrophyBadge;
      } else {
        WinnerTrophyBadge = tmp2(15138).WinnerTrophyBadge;
      }
      const tmp2Result2 = guildId(12974);
      return <View style={tmp.container} accessible accessibilityLabel={tmp2Result2.getLeaderboardWinnerBadgeText(tmp5)}>{null}</View>;
    }
  } else {
    return null;
  }
};
