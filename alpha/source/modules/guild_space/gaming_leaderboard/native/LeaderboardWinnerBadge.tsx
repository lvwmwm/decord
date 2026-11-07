// Module ID: 10900
// Function ID: 10901
// Name: LeaderboardWinnerBadge
// Dependencies: [19, 17, 21, 5140, 10901, 10902, 10904, 10908, 10912, 2]
// Exports: default

// Module 10900 (LeaderboardWinnerBadge)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import useActiveLeaderboardWinnerData from "useActiveLeaderboardWinnerData" /* 10901 */;
import GuildLeaderboardUtils from "GuildLeaderboardUtils" /* 10902 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5140 */;
import size from "module_2" /* 2 */;

const useActiveLeaderboardWinnerDataDefault = useActiveLeaderboardWinnerData;

const View = react_native.View;
const jsx = Fragment.jsx;
let closure_5 = createStyles.createStyles({ container: { marginLeft: 4 } });
const result = size.fileFinishedImporting("modules/guild_space/gaming_leaderboard/native/LeaderboardWinnerBadge.tsx");

export default function LeaderboardWinnerBadge(arg0) {
  let guildId;
  let userId;
  ({ guildId, userId } = arg0);
  const tmp = closure_5();
  const tmp3 = useActiveLeaderboardWinnerDataDefault(guildId, userId);
  const obj = useActiveLeaderboardWinnerData;
  const activeLeaderboardLeaderData = obj.useActiveLeaderboardLeaderData(guildId, userId);
  if (null == tmp3) {
    let tmp8 = null;
    if (null != activeLeaderboardLeaderData) {
      tmp8 = <View style={tmp.container} accessible accessibilityLabel={GuildLeaderboardUtils.getLeaderboardLeaderBadgeText(activeLeaderboardLeaderData)}>{null}</View>;
      const tmp4Result = GuildLeaderboardUtils;
    }
    return tmp8;
  } else {
    let num = tmp3.winningStreak;
    if (num == null) {
      num = 0;
    }
    if (num > 1) {
      let WinnerTrophyBadge = tmp4(10908).StreakTrophyBadge;
    } else {
      WinnerTrophyBadge = tmp4(10912).WinnerTrophyBadge;
    }
    const tmp4Result2 = GuildLeaderboardUtils;
    return <View style={tmp.container} accessible accessibilityLabel={tmp4Result2.getLeaderboardWinnerBadgeText(tmp3)}>{null}</View>;
  }
};
