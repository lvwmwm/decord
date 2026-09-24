// Module ID: 11247
// Function ID: 11248
// Name: LeaderboardWinnerBadge
// Dependencies: [19, 17, 2109, 21, 4790, 558, 568, 504, 11248, 9021, 580, 2]

// Module 11247 (LeaderboardWinnerBadge)
import noop from "module_19" /* 19 */;
import GuildMemberStore from "GuildMemberStore" /* 2109 */;

const require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4790);
let closure_6 = createStyles.createStyles({ container: { marginLeft: 4 } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_space/gaming_leaderboard/native/LeaderboardWinnerBadge.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  const cResult = guildId(568).c(11);
  guildId = guildId.guildId;
  const userId = guildId.userId;
  const tmp4 = closure_6();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildMemberStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === guildId) {
    if (cResult[2] === userId) {
      let tmp7 = cResult[3];
      let tmp8 = cResult[4];
    }
    const stateFromStores = tmp(504).useStateFromStores(first, tmp7, tmp8);
    if (null == stateFromStores) {
      return null;
    } else {
      if (cResult[5] !== stateFromStores) {
        const leaderboardWinnerBadgeText = tmp(11248).getLeaderboardWinnerBadgeText(stateFromStores);
        cResult[5] = stateFromStores;
        cResult[6] = leaderboardWinnerBadgeText;
        let tmp11 = leaderboardWinnerBadgeText;
        const tmpResult2 = tmp(11248);
      } else {
        tmp11 = cResult[6];
      }
      const _Symbol = Symbol;
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { size: "xs", color: userId(580).colors.TEXT_FEEDBACK_WARNING };
        const tmp16 = jsx(tmp(9021).TrophyIcon, { size: "xs", color: userId(580).colors.TEXT_FEEDBACK_WARNING });
        cResult[7] = tmp16;
        let tmp13 = tmp16;
      } else {
        tmp13 = cResult[7];
      }
      if (cResult[8] === tmp4.container) {
        if (cResult[9] === tmp11) {
          let tmp17 = cResult[10];
        }
        return tmp17;
      }
      const obj3 = { style: tmp4.container, accessible: true, accessibilityLabel: tmp11, children: tmp13 };
      const tmp20 = <View style={tmp4.container} accessible accessibilityLabel={tmp11}>{tmp13}</View>;
      cResult[8] = tmp4.container;
      cResult[9] = tmp11;
      cResult[10] = tmp20;
      tmp17 = tmp20;
    }
    const tmpResult = tmp(504);
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
  const tmp = closure_6();
  const items = [GuildMemberStore];
  const items1 = [guildId, userId];
  const stateFromStores = guildId(504).useStateFromStores(items, () => {
    const member = GuildMemberStore.getMember(guildId, userId);
    let prop;
    if (member != null) {
      prop = member.gamingLeaderboardData;
    }
    return prop;
  }, items1);
  let tmp5 = null;
  if (null != stateFromStores) {
    const obj2 = { style: tmp.container, accessible: true, accessibilityLabel: tmp2(11248).getLeaderboardWinnerBadgeText(stateFromStores), children: null };
    const obj3 = { size: "xs", color: userId(580).colors.TEXT_FEEDBACK_WARNING };
    obj2.children = jsx(tmp2(9021).TrophyIcon, { size: "xs", color: userId(580).colors.TEXT_FEEDBACK_WARNING });
    tmp5 = <View style={tmp.container} accessible accessibilityLabel={tmp2(11248).getLeaderboardWinnerBadgeText(stateFromStores)}>{null}</View>;
    const tmp2Result = tmp2(11248);
  }
  return tmp5;
});
