// Module ID: 8090
// Function ID: 8091
// Name: GuildSpaceLeaderboardSystemMessage
// Dependencies: [2063, 1389, 5090, 587, 4695, 7988, 5405, 7951, 1126, 7953, 7863, 8091, 7955, 2]
// Exports: createGuildSpaceLeaderboardSystemMessage

// Module 8090 (GuildSpaceLeaderboardSystemMessage)
import nativeDefault from "native" /* 587 */;
import GuildLeaderboardTypes from "GuildLeaderboardTypes" /* 4695 */;
import NicknameUtilsDefault from "NicknameUtils" /* 5405 */;
import renderer_EmbedUtils from "renderer/EmbedUtils" /* 7863 */;
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 7951 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 7953 */;
import GuildLeaderboardSystemMessageCopy from "GuildLeaderboardSystemMessageCopy" /* 7988 */;
import AssetRegistryDefault from "AssetRegistry" /* 8091 */;
import ChannelStore from "ChannelStore" /* 2063 */;
import UserStore from "UserStore" /* 1389 */;
import createStyles from "createStyles" /* 5090 */;
import size from "module_2" /* 2 */;

let obj = { iconTintColor: nativeDefault.colors.ICON_MUTED };
let closure_5 = createStyles.createNativeStyleProperties(obj);
let result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/GuildSpaceLeaderboardSystemMessage.tsx");

export const createGuildSpaceLeaderboardSystemMessage = function createGuildSpaceLeaderboardSystemMessage(theme) {
  let guildId;
  let message;
  let obj11;
  let obj3;
  let previousLeader;
  let roleStyle;
  let str;
  let subject;
  let tmpResult8;
  ({ message, roleStyle } = theme);
  theme = theme.theme;
  const guildSpaceData = message.guildSpaceData;
  let leaderboard;
  const parseGuildSpaceLeaderboardMessageData = GuildLeaderboardTypes.parseGuildSpaceLeaderboardMessageData;
  GuildLeaderboardTypes;
  if (guildSpaceData != null) {
    leaderboard = guildSpaceData.leaderboard;
  }
  const result = parseGuildSpaceLeaderboardMessageData(leaderboard);
  let userId;
  const resolveGuildSpaceLeaderboardMessage = GuildLeaderboardSystemMessageCopy.resolveGuildSpaceLeaderboardMessage;
  const getUser = UserStore.getUser;
  GuildLeaderboardSystemMessageCopy;
  const tmp7 = UserStore;
  if (result != null) {
    userId = result.userId;
  }
  let secondaryUserId;
  const user = getUser(userId);
  const getUser2 = tmp7.getUser;
  if (result != null) {
    secondaryUserId = result.secondaryUserId;
  }
  const guildSpaceLeaderboardMessage = resolveGuildSpaceLeaderboardMessage(result, user, getUser2(secondaryUserId));
  const channel = ChannelStore.getChannel(message.channel_id);
  if (channel != null) {
    guildId = channel.getGuildId();
  }
  if (null != guildSpaceLeaderboardMessage) {
    if (null != channel) {
      if (null != guildId) {
        ({ subject, previousLeader } = guildSpaceLeaderboardMessage);
        const obj = { username: obj11.getName(guildId, channel.id, subject), previousUsername: str };
        const getMobileLeaderboardSystemMessage = GuildLeaderboardSystemMessageCopy.getMobileLeaderboardSystemMessage;
        const data = guildSpaceLeaderboardMessage.data;
        GuildLeaderboardSystemMessageCopy;
        str = "";
        obj11 = NicknameUtilsDefault;
        if (null != previousLeader) {
          const tmp22Result = NicknameUtilsDefault;
          str = tmp22Result.getName(guildId, channel.id, previousLeader);
        }
        const mobileLeaderboardSystemMessage = getMobileLeaderboardSystemMessage(data, obj);
        if (null == mobileLeaderboardSystemMessage) {
          return null;
        } else {
          let userAuthorWithProcessedColor1 = null;
          const tmpResult6 = useAuthorWithProcessedColor;
          const userAuthorWithProcessedColor = tmpResult6.getUserAuthorWithProcessedColor(subject, channel);
          if (null != previousLeader) {
            const tmpResult7 = useAuthorWithProcessedColor;
            userAuthorWithProcessedColor1 = tmpResult7.getUserAuthorWithProcessedColor(previousLeader, channel);
          }
          const tmp16 = closure_5(theme);
          const intl = tmp(1126).intl;
          const obj2 = { usernameOnClick: formatUsernameOnClickDefault(obj3) };
          const formatToParts = intl.formatToParts;
          const message2 = mobileLeaderboardSystemMessage.message;
          const merged = Object.assign(mobileLeaderboardSystemMessage.values);
          obj3 = { userId: subject.id, message, author: userAuthorWithProcessedColor, roleStyle };
          if (null != userAuthorWithProcessedColor1) {
            let obj6;
            if (null != previousLeader) {
              const obj4 = { userId: previousLeader.id, message, author: userAuthorWithProcessedColor1, roleStyle };
              obj6 = tmp22(7953)(obj4);
            }
            obj2.previousUsernameOnClick = obj6;
            const obj5 = { content: formatToParts(message2, obj2), iconUrl: tmpResult8.getAssetUriForEmbed(AssetRegistryDefault), iconTintColor: tmp16.iconTintColor };
            tmpResult8 = renderer_EmbedUtils;
            const merged1 = Object.assign(tmp22(7955)(theme));
            return obj5;
          }
          obj6 = {};
        }
      }
    }
  }
  return null;
};
