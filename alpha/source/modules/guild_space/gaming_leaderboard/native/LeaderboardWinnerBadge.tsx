// Module ID: 10271
// Function ID: 10272
// Name: LeaderboardWinnerBadge
// Dependencies: [19, 17, 21, 5092, 558, 576, 10272, 10273, 10275, 587, 8925, 2]

// Module 10271 (LeaderboardWinnerBadge)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import useActiveLeaderboardWinnerData from "useActiveLeaderboardWinnerData" /* 10272 */;
import GuildLeaderboardUtils from "GuildLeaderboardUtils" /* 10273 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5092 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const useActiveLeaderboardWinnerDataDefault = useActiveLeaderboardWinnerData;

const View = react_native.View;
const jsx = Fragment.jsx;
let closure_5 = createStyles.createStyles({ container: { marginLeft: 4 } });
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function LeaderboardWinnerBadge(arg0) {
  let guildId;
  let userId;
  const obj = react2;
  const cResult = obj.c(12);
  ({ guildId, userId } = arg0);
  const tmp4 = closure_5();
  const tmp6 = useActiveLeaderboardWinnerDataDefault(guildId, userId);
  const obj2 = useActiveLeaderboardWinnerData;
  const activeLeaderboardLeaderData = obj2.useActiveLeaderboardLeaderData(guildId, userId);
  if (null == tmp6) {
    if (null == activeLeaderboardLeaderData) {
      return null;
    } else {
      let tmp18;
      let tmp21;
      const container2 = tmp4.container;
      if (cResult[0] !== activeLeaderboardLeaderData) {
        const tmpResult = GuildLeaderboardUtils;
        const leaderboardLeaderBadgeText = tmpResult.getLeaderboardLeaderBadgeText(activeLeaderboardLeaderData);
        cResult[0] = activeLeaderboardLeaderData;
        cResult[1] = leaderboardLeaderBadgeText;
        tmp18 = leaderboardLeaderBadgeText;
      } else {
        tmp18 = cResult[1];
      }
      const _Symbol2 = Symbol;
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const MedalIcon = tmp(10275).MedalIcon;
        const tmp23 = <MedalIcon size="xs" color={nativeDefault.colors.TEXT_FEEDBACK_WARNING} />;
        cResult[2] = tmp23;
        tmp21 = tmp23;
      } else {
        tmp21 = cResult[2];
      }
      if (cResult[3] === tmp4.container) {
        let tmp24;
        if (cResult[4] === tmp18) {
          tmp24 = cResult[5];
        }
        return tmp24;
      }
      const tmp27 = <View style={container2} accessible accessibilityLabel={tmp18}>{tmp21}</View>;
      cResult[3] = tmp4.container;
      cResult[4] = tmp18;
      cResult[5] = tmp27;
      tmp24 = tmp27;
    }
  } else {
    let tmp8;
    let tmp11;
    const container = tmp4.container;
    if (cResult[6] !== tmp6) {
      const tmpResult2 = GuildLeaderboardUtils;
      const leaderboardWinnerBadgeText = tmpResult2.getLeaderboardWinnerBadgeText(tmp6);
      cResult[6] = tmp6;
      cResult[7] = leaderboardWinnerBadgeText;
      tmp8 = leaderboardWinnerBadgeText;
    } else {
      tmp8 = cResult[7];
    }
    const _Symbol = Symbol;
    if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
      const TrophyIcon = tmp(8925).TrophyIcon;
      const tmp13 = <TrophyIcon size="xs" color={nativeDefault.colors.TEXT_FEEDBACK_WARNING} />;
      cResult[8] = tmp13;
      tmp11 = tmp13;
    } else {
      tmp11 = cResult[8];
    }
    if (cResult[9] === tmp4.container) {
      let tmp14;
      if (cResult[10] === tmp8) {
        tmp14 = cResult[11];
      }
      return tmp14;
    }
    const tmp17 = <View style={container} accessible accessibilityLabel={tmp8}>{tmp11}</View>;
    cResult[9] = tmp4.container;
    cResult[10] = tmp8;
    cResult[11] = tmp17;
    tmp14 = tmp17;
  }
}) : (function LeaderboardWinnerBadge(arg0) {
  let guildId;
  let tmp10;
  let userId;
  ({ guildId, userId } = arg0);
  const tmp = closure_5();
  const tmp4 = useActiveLeaderboardWinnerDataDefault(guildId, userId);
  const obj = useActiveLeaderboardWinnerData;
  const activeLeaderboardLeaderData = obj.useActiveLeaderboardLeaderData(guildId, userId);
  if (null == tmp4) {
    let tmp7 = null;
    if (null != activeLeaderboardLeaderData) {
      const tmp5Result = GuildLeaderboardUtils;
      ({ size: "xs", color: nativeDefault.colors.TEXT_FEEDBACK_WARNING });
      const MedalIcon = tmp5(10275).MedalIcon;
      tmp7 = <View style={tmp.container} accessible accessibilityLabel={tmp5Result.getLeaderboardLeaderBadgeText(activeLeaderboardLeaderData)}>{null}</View>;
    }
    tmp10 = tmp7;
  } else {
    const tmp5Result2 = GuildLeaderboardUtils;
    ({ size: "xs", color: nativeDefault.colors.TEXT_FEEDBACK_WARNING });
    const TrophyIcon = tmp5(8925).TrophyIcon;
    tmp10 = <View style={tmp.container} accessible accessibilityLabel={tmp5Result2.getLeaderboardWinnerBadgeText(tmp4)}>{null}</View>;
  }
  return tmp10;
});
const result = size.fileFinishedImporting("modules/guild_space/gaming_leaderboard/native/LeaderboardWinnerBadge.tsx");

export default tmp3;
