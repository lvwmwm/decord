// Module ID: 7727
// Function ID: 7728
// Name: GuildSpaceLeaderboardSystemMessage
// Dependencies: [2045, 1372, 4866, 576, 4487, 7634, 5018, 7597, 1115, 7599, 7583, 7728, 7601, 2]
// Exports: createGuildSpaceLeaderboardSystemMessage

// Module 7727 (GuildSpaceLeaderboardSystemMessage)
import nativeDefault from "native" /* 576 */;
import GuildLeaderboardTypes from "GuildLeaderboardTypes" /* 4487 */;
import NicknameUtilsDefault from "NicknameUtils" /* 5018 */;
import GuildLeaderboardSystemMessageCopy from "GuildLeaderboardSystemMessageCopy" /* 7634 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import UserStore from "UserStore" /* 1372 */;

require = fn;
const createStyles = fn(4866);
let closure_5 = createStyles.createNativeStyleProperties({ iconTintColor: nativeDefault.colors.ICON_MUTED });
const size = fn(2);
let result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/GuildSpaceLeaderboardSystemMessage.tsx");

export const createGuildSpaceLeaderboardSystemMessage = function createGuildSpaceLeaderboardSystemMessage(theme) {
  ({ message, roleStyle } = theme);
  const guildSpaceData = message.guildSpaceData;
  let leaderboard;
  if (guildSpaceData != null) {
    leaderboard = guildSpaceData.leaderboard;
  }
  const result = GuildLeaderboardTypes.parseGuildSpaceLeaderboardMessageData(leaderboard);
  let userId;
  if (result != null) {
    userId = result.userId;
  }
  let previousUserId;
  const user = UserStore.getUser(userId);
  if (result != null) {
    previousUserId = result.previousUserId;
  }
  const guildSpaceLeaderboardMessage = GuildLeaderboardSystemMessageCopy.resolveGuildSpaceLeaderboardMessage(result, user, UserStore.getUser(previousUserId));
  const channel = ChannelStore.getChannel(message.channel_id);
  if (channel != null) {
    const guildId = channel.getGuildId();
  }
  if (null != guildSpaceLeaderboardMessage) {
    if (null != channel) {
      if (null != guildId) {
        ({ subject, previousLeader } = guildSpaceLeaderboardMessage);
        const obj2 = { username: null, previousUsername: null };
        const tmpResult5 = tmp(7634);
        obj2.username = NicknameUtilsDefault.getName(guildId, channel.id, subject);
        let str = "";
        if (null != previousLeader) {
          str = tmp18(5018).getName(guildId, channel.id, previousLeader);
          const tmp18Result = tmp18(5018);
        }
        obj2.previousUsername = str;
        const mobileLeaderboardSystemMessage = tmpResult5.getMobileLeaderboardSystemMessage(guildSpaceLeaderboardMessage.data, obj2);
        if (null == mobileLeaderboardSystemMessage) {
          return null;
        } else {
          let userAuthorWithProcessedColor1 = null;
          const userAuthorWithProcessedColor = tmp(7597).getUserAuthorWithProcessedColor(subject, channel);
          if (null != previousLeader) {
            userAuthorWithProcessedColor1 = tmp(7597).getUserAuthorWithProcessedColor(previousLeader, channel);
            const tmpResult7 = tmp(7597);
          }
          const tmpResult6 = tmp(7597);
          const intl = tmp(1115).intl;
          const obj4 = {};
          const merged = Object.assign(mobileLeaderboardSystemMessage.values);
          const obj5 = { userId: subject.id, message, author: userAuthorWithProcessedColor, roleStyle };
          obj4.usernameOnClick = tmp18(7599)(obj5);
          if (null != userAuthorWithProcessedColor1) {
            if (null != previousLeader) {
              const obj6 = { userId: previousLeader.id, message, author: userAuthorWithProcessedColor1, roleStyle };
              let obj8 = tmp18(7599)(obj6);
            }
            const obj7 = { content: null, iconUrl: null, iconTintColor: null };
            obj4.previousUsernameOnClick = obj8;
            obj7.content = intl.formatToParts(mobileLeaderboardSystemMessage.message, obj4);
            obj7.iconUrl = tmp(7583).getAssetUriForEmbed(tmp18(7728));
            obj7.iconTintColor = tmp13.iconTintColor;
            const merged1 = Object.assign(tmp18(7601)(theme));
            return obj7;
          }
          obj8 = {};
          tmp13 = closure_5(theme.theme);
        }
      }
    }
  }
  return null;
};
