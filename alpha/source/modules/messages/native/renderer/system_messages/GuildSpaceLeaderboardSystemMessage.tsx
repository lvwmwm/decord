// Module ID: 7532
// Function ID: 7533
// Name: GuildSpaceLeaderboardSystemMessage
// Dependencies: [2045, 1372, 4836, 576, 4457, 7439, 4988, 7402, 1115, 7404, 7388, 7533, 7406, 2]
// Exports: createGuildSpaceLeaderboardSystemMessage

// Module 7532 (GuildSpaceLeaderboardSystemMessage)
import nativeDefault from "native" /* 576 */;
import GuildLeaderboardTypes from "GuildLeaderboardTypes" /* 4457 */;
import NicknameUtilsDefault from "NicknameUtils" /* 4988 */;
import GuildLeaderboardSystemMessageCopy from "GuildLeaderboardSystemMessageCopy" /* 7439 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import UserStore from "UserStore" /* 1372 */;

require = fn;
const createStyles = fn(4836);
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
        const tmpResult5 = tmp(7439);
        obj2.username = NicknameUtilsDefault.getName(guildId, channel.id, subject);
        let str = "";
        if (null != previousLeader) {
          str = tmp18(4988).getName(guildId, channel.id, previousLeader);
          const tmp18Result = tmp18(4988);
        }
        obj2.previousUsername = str;
        const mobileLeaderboardSystemMessage = tmpResult5.getMobileLeaderboardSystemMessage(guildSpaceLeaderboardMessage.data, obj2);
        if (null == mobileLeaderboardSystemMessage) {
          return null;
        } else {
          let userAuthorWithProcessedColor1 = null;
          const userAuthorWithProcessedColor = tmp(7402).getUserAuthorWithProcessedColor(subject, channel);
          if (null != previousLeader) {
            userAuthorWithProcessedColor1 = tmp(7402).getUserAuthorWithProcessedColor(previousLeader, channel);
            const tmpResult7 = tmp(7402);
          }
          const tmpResult6 = tmp(7402);
          const intl = tmp(1115).intl;
          const obj4 = {};
          const merged = Object.assign(mobileLeaderboardSystemMessage.values);
          const obj5 = { userId: subject.id, message, author: userAuthorWithProcessedColor, roleStyle };
          obj4.usernameOnClick = tmp18(7404)(obj5);
          if (null != userAuthorWithProcessedColor1) {
            if (null != previousLeader) {
              const obj6 = { userId: previousLeader.id, message, author: userAuthorWithProcessedColor1, roleStyle };
              let obj8 = tmp18(7404)(obj6);
            }
            const obj7 = { content: null, iconUrl: null, iconTintColor: null };
            obj4.previousUsernameOnClick = obj8;
            obj7.content = intl.formatToParts(mobileLeaderboardSystemMessage.message, obj4);
            obj7.iconUrl = tmp(7388).getAssetUriForEmbed(tmp18(7533));
            obj7.iconTintColor = tmp13.iconTintColor;
            const merged1 = Object.assign(tmp18(7406)(theme));
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
