// Module ID: 10366
// Function ID: 10367
// Name: LeaderboardWinnerBadge
// Dependencies: [19, 17, 2108, 21, 4836, 504, 10367, 8173, 576, 2]
// Exports: default

// Module 10366 (LeaderboardWinnerBadge)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react from "react" /* 19 */;
import GuildMemberStore from "GuildMemberStore" /* 2108 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const View = react_native.View;
const jsx = Fragment.jsx;
let closure_6 = createStyles.createStyles({ container: { marginLeft: 4 } });
const result = size.fileFinishedImporting("modules/guild_space/gaming_leaderboard/native/LeaderboardWinnerBadge.tsx");

export default function LeaderboardWinnerBadge(guildId) {
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
    const tmp2Result = guildId(10367);
    ({ size: "xs", color: userId(576).colors.TEXT_FEEDBACK_WARNING });
    const TrophyIcon = tmp2(8173).TrophyIcon;
    tmp5 = <View style={tmp.container} accessible accessibilityLabel={tmp2Result.getLeaderboardWinnerBadgeText(stateFromStores)}>{null}</View>;
  }
  return tmp5;
};
