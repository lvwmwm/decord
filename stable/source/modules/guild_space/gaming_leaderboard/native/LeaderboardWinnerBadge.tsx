// Module ID: 10409
// Function ID: 10410
// Name: LeaderboardWinnerBadge
// Dependencies: [19, 17, 2111, 21, 4837, 558, 576, 504, 10410, 8170, 588, 2]

// Module 10409 (LeaderboardWinnerBadge)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react from "react" /* 19 */;
import GuildMemberStore from "GuildMemberStore" /* 2111 */;
import createStyles from "createStyles" /* 4837 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let guildId;

const View = react_native.View;
const jsx = Fragment.jsx;
let closure_6 = createStyles.createStyles({ container: { marginLeft: 4 } });
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  let first;
  const obj = guildId(576);
  const cResult = obj.c(11);
  guildId = guildId.guildId;
  const userId = guildId.userId;
  const tmp4 = closure_6();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildMemberStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === guildId) {
    let tmp7;
    let tmp8;
    if (cResult[2] === userId) {
      tmp7 = cResult[3];
      tmp8 = cResult[4];
    }
    const tmpResult = guildId(504);
    const stateFromStores = tmpResult.useStateFromStores(first, tmp7, tmp8);
    if (null == stateFromStores) {
      return null;
    } else {
      let tmp11;
      let tmp13;
      const container = tmp4.container;
      if (cResult[5] !== stateFromStores) {
        const tmpResult2 = guildId(10410);
        const leaderboardWinnerBadgeText = tmpResult2.getLeaderboardWinnerBadgeText(stateFromStores);
        cResult[5] = stateFromStores;
        cResult[6] = leaderboardWinnerBadgeText;
        tmp11 = leaderboardWinnerBadgeText;
      } else {
        tmp11 = cResult[6];
      }
      const _Symbol = Symbol;
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        const TrophyIcon = tmp(8170).TrophyIcon;
        const tmp16 = <TrophyIcon size="xs" color={userId(588).colors.TEXT_FEEDBACK_WARNING} />;
        cResult[7] = tmp16;
        tmp13 = tmp16;
      } else {
        tmp13 = cResult[7];
      }
      if (cResult[8] === tmp4.container) {
        let tmp17;
        if (cResult[9] === tmp11) {
          tmp17 = cResult[10];
        }
        return tmp17;
      }
      const tmp20 = <View style={container} accessible accessibilityLabel={tmp11}>{tmp13}</View>;
      cResult[8] = tmp4.container;
      cResult[9] = tmp11;
      cResult[10] = tmp20;
      tmp17 = tmp20;
    }
  }
  const fn = function u() {
    const member = GuildMemberStore.getMember(guildId, userId);
    let prop;
    if (member != null) {
      prop = member.gamingLeaderboardData;
    }
    return prop;
  };
  const items1 = [guildId, userId];
  cResult[1] = guildId;
  cResult[2] = userId;
  cResult[3] = fn;
  cResult[4] = items1;
  tmp8 = items1;
  tmp7 = fn;
}) : ((guildId) => {
  guildId = guildId.guildId;
  const userId = guildId.userId;
  const items = [GuildMemberStore];
  const items1 = [guildId, userId];
  const tmp = closure_6();
  const obj = guildId(504);
  const stateFromStores = obj.useStateFromStores(items, () => {
    const member = GuildMemberStore.getMember(guildId, userId);
    let prop;
    if (member != null) {
      prop = member.gamingLeaderboardData;
    }
    return prop;
  }, items1);
  let tmp5 = null;
  if (null != stateFromStores) {
    const tmp2Result = guildId(10410);
    ({ size: "xs", color: userId(588).colors.TEXT_FEEDBACK_WARNING });
    const TrophyIcon = tmp2(8170).TrophyIcon;
    tmp5 = <View style={tmp.container} accessible accessibilityLabel={tmp2Result.getLeaderboardWinnerBadgeText(stateFromStores)}>{null}</View>;
  }
  return tmp5;
});
const result = size.fileFinishedImporting("modules/guild_space/gaming_leaderboard/native/LeaderboardWinnerBadge.tsx");

export default tmp3;
