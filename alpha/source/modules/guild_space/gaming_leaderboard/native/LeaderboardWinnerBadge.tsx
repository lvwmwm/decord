// Module ID: 10588
// Function ID: 10589
// Name: LeaderboardWinnerBadge
// Dependencies: [19, 17, 21, 4945, 558, 576, 10589, 10590, 10592, 10596, 10600, 2]

// Module 10588 (LeaderboardWinnerBadge)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import useActiveLeaderboardWinnerData from "useActiveLeaderboardWinnerData" /* 10589 */;
import GuildLeaderboardUtils from "GuildLeaderboardUtils" /* 10590 */;
import MedalFirstBadge from "MedalFirstBadge" /* 10592 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4945 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const useActiveLeaderboardWinnerDataDefault = useActiveLeaderboardWinnerData;

const View = react_native.View;
const jsx = Fragment.jsx;
let c5 = 16;
let closure_6 = createStyles.createStyles({ container: { marginLeft: 4 } });
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function LeaderboardWinnerBadge(arg0) {
  let guildId;
  let userId;
  const obj = react2;
  const cResult = obj.c(14);
  ({ guildId, userId } = arg0);
  const tmp4 = closure_6();
  const tmp5 = useActiveLeaderboardWinnerDataDefault(guildId, userId);
  const obj2 = useActiveLeaderboardWinnerData;
  const activeLeaderboardLeaderData = obj2.useActiveLeaderboardLeaderData(guildId, userId);
  if (null == tmp5) {
    if (null == activeLeaderboardLeaderData) {
      return null;
    } else {
      let tmp17;
      let tmp20;
      const container2 = tmp4.container;
      if (cResult[0] !== activeLeaderboardLeaderData) {
        const tmpResult = GuildLeaderboardUtils;
        const leaderboardLeaderBadgeText = tmpResult.getLeaderboardLeaderBadgeText(activeLeaderboardLeaderData);
        cResult[0] = activeLeaderboardLeaderData;
        cResult[1] = leaderboardLeaderBadgeText;
        tmp17 = leaderboardLeaderBadgeText;
      } else {
        tmp17 = cResult[1];
      }
      const _Symbol = Symbol;
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp23 = jsx(MedalFirstBadge.MedalFirstBadge, { width: v16, height: v16 });
        cResult[2] = tmp23;
        tmp20 = tmp23;
      } else {
        tmp20 = cResult[2];
      }
      if (cResult[3] === tmp4.container) {
        let tmp24;
        if (cResult[4] === tmp17) {
          tmp24 = cResult[5];
        }
        return tmp24;
      }
      const tmp27 = <View style={container2} accessible accessibilityLabel={tmp17}>{tmp20}</View>;
      cResult[3] = tmp4.container;
      cResult[4] = tmp17;
      cResult[5] = tmp27;
      tmp24 = tmp27;
    }
  } else {
    let WinnerTrophyBadge;
    let tmp7;
    let tmp9;
    let num = tmp5.winningStreak;
    if (num == null) {
      num = 0;
    }
    if (num > 1) {
      WinnerTrophyBadge = tmp(10596).StreakTrophyBadge;
    } else {
      WinnerTrophyBadge = tmp(10600).WinnerTrophyBadge;
    }
    const container = tmp4.container;
    if (cResult[6] !== tmp5) {
      const tmpResult2 = GuildLeaderboardUtils;
      const leaderboardWinnerBadgeText = tmpResult2.getLeaderboardWinnerBadgeText(tmp5);
      cResult[6] = tmp5;
      cResult[7] = leaderboardWinnerBadgeText;
      tmp7 = leaderboardWinnerBadgeText;
    } else {
      tmp7 = cResult[7];
    }
    if (cResult[8] !== WinnerTrophyBadge) {
      const tmp12 = <WinnerTrophyBadge width={c5} height={c5} />;
      cResult[8] = WinnerTrophyBadge;
      cResult[9] = tmp12;
      tmp9 = tmp12;
    } else {
      tmp9 = cResult[9];
    }
    if (cResult[10] === tmp4.container) {
      if (cResult[11] === tmp7) {
        let tmp13;
        if (cResult[12] === tmp9) {
          tmp13 = cResult[13];
        }
        return tmp13;
      }
    }
    const tmp16 = <View style={container} accessible accessibilityLabel={tmp7}>{tmp9}</View>;
    cResult[10] = tmp4.container;
    cResult[11] = tmp7;
    cResult[12] = tmp9;
    cResult[13] = tmp16;
    tmp13 = tmp16;
  }
}) : (function LeaderboardWinnerBadge(arg0) {
  let guildId;
  let userId;
  ({ guildId, userId } = arg0);
  const tmp = closure_6();
  const tmp3 = useActiveLeaderboardWinnerDataDefault(guildId, userId);
  const obj = useActiveLeaderboardWinnerData;
  const activeLeaderboardLeaderData = obj.useActiveLeaderboardLeaderData(guildId, userId);
  if (null == tmp3) {
    let tmp9 = null;
    if (null != activeLeaderboardLeaderData) {
      size = { width: v16, height: v16 };
      tmp9 = <View style={tmp.container} accessible accessibilityLabel={GuildLeaderboardUtils.getLeaderboardLeaderBadgeText(activeLeaderboardLeaderData)}>{null}</View>;
      const tmp4Result = GuildLeaderboardUtils;
    }
    return tmp9;
  } else {
    let num = tmp3.winningStreak;
    if (num == null) {
      num = 0;
    }
    if (num > 1) {
      let WinnerTrophyBadge = tmp4(10596).StreakTrophyBadge;
    } else {
      WinnerTrophyBadge = tmp4(10600).WinnerTrophyBadge;
    }
    const size1 = { width: v16, height: v16 };
    const tmp4Result2 = GuildLeaderboardUtils;
    return <View style={tmp.container} accessible accessibilityLabel={tmp4Result2.getLeaderboardWinnerBadgeText(tmp3)}>{null}</View>;
  }
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/guild_space/gaming_leaderboard/native/LeaderboardWinnerBadge.tsx");

export default tmp3;
