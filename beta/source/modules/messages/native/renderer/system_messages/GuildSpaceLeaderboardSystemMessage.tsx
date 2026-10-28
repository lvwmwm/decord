// Module ID: 8490
// Function ID: 8491
// Name: GuildSpaceLeaderboardSystemMessage
// Dependencies: [4855, 1392, 5003, 587, 4923, 8388, 6021, 8350, 1128, 8352, 8309, 8491, 8354, 2]
// Exports: createGuildSpaceLeaderboardSystemMessage

// Module 8490 (GuildSpaceLeaderboardSystemMessage)
import nativeDefault from "native" /* 587 */;
import GuildLeaderboardTypes from "GuildLeaderboardTypes" /* 4923 */;
import NicknameUtilsDefault from "NicknameUtils" /* 6021 */;
import renderer_EmbedUtils from "renderer/EmbedUtils" /* 8309 */;
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 8350 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 8352 */;
import GuildLeaderboardSystemMessageCopy from "GuildLeaderboardSystemMessageCopy" /* 8388 */;
import AssetRegistryDefault from "AssetRegistry" /* 8491 */;
import ChannelStore from "ChannelStore" /* 4855 */;
import UserStore from "UserStore" /* 1392 */;
import createStyles from "createStyles" /* 5003 */;
import size from "module_2" /* 2 */;

let obj = { iconTintColor: nativeDefault.colors.ICON_MUTED };
let closure_5 = createStyles.createNativeStyleProperties(obj);
let result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/GuildSpaceLeaderboardSystemMessage.tsx");

export const createGuildSpaceLeaderboardSystemMessage = function createGuildSpaceLeaderboardSystemMessage(theme) {
  let data;
  let guildId;
  let message;
  let obj12;
  let obj3;
  let previousLeader;
  let roleStyle;
  let str;
  let subject;
  let tmp26Result2Result;
  let tmp26Result3;
  let tmpResult10;
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
        ({ subject, previousLeader, data } = guildSpaceLeaderboardMessage);
        const obj = { username: obj12.getName(guildId, channel.id, subject), previousUsername: str };
        const getMobileLeaderboardSystemMessage = GuildLeaderboardSystemMessageCopy.getMobileLeaderboardSystemMessage;
        GuildLeaderboardSystemMessageCopy;
        str = "";
        obj12 = NicknameUtilsDefault;
        if (data.event === GuildLeaderboardTypes.GuildSpaceLeaderboardEvent.LEADER_CHANGED) {
          const tmp26Result = NicknameUtilsDefault;
          str = tmp26Result.getName(guildId, channel.id, previousLeader);
        }
        const mobileLeaderboardSystemMessage = getMobileLeaderboardSystemMessage(data, obj);
        if (null == mobileLeaderboardSystemMessage) {
          return null;
        } else {
          let userAuthorWithProcessedColor1 = null;
          const tmpResult7 = useAuthorWithProcessedColor;
          const userAuthorWithProcessedColor = tmpResult7.getUserAuthorWithProcessedColor(subject, channel);
          if (null != previousLeader) {
            const tmpResult8 = useAuthorWithProcessedColor;
            userAuthorWithProcessedColor1 = tmpResult8.getUserAuthorWithProcessedColor(previousLeader, channel);
          }
          const tmp16 = closure_5(theme);
          const intl = tmp(1128).intl;
          const formatToParts = intl.formatToParts;
          const message2 = mobileLeaderboardSystemMessage.message;
          const obj2 = { usernameOnClick: tmp26Result3(obj3), previousUsernameOnClick: tmp26Result2Result };
          const merged = Object.assign(mobileLeaderboardSystemMessage.values);
          let id;
          tmp26Result3 = formatUsernameOnClickDefault;
          if (subject != null) {
            id = subject.id;
          }
          if (id == null) {
            id = data.userId;
          }
          obj3 = { userId: id, message, author: userAuthorWithProcessedColor, roleStyle };
          if (data.event === GuildLeaderboardTypes.GuildSpaceLeaderboardEvent.LEADER_CHANGED) {
            let id1;
            const tmp26Result4 = formatUsernameOnClickDefault;
            if (previousLeader != null) {
              id1 = previousLeader.id;
            }
            if (id1 == null) {
              id1 = data.secondaryUserId;
            }
            const obj4 = { userId: id1, message, author: userAuthorWithProcessedColor1, roleStyle };
            if (userAuthorWithProcessedColor1 == null) {
              const tmpResult9 = useAuthorWithProcessedColor;
              userAuthorWithProcessedColor1 = tmpResult9.getUserAuthorWithProcessedColor(null, channel);
            }
            tmp26Result2Result = tmp26Result4(obj4);
          } else {
            tmp26Result2Result = {};
          }
          const obj5 = { content: formatToParts(message2, obj2), iconUrl: tmpResult10.getAssetUriForEmbed(AssetRegistryDefault), iconTintColor: tmp16.iconTintColor };
          tmpResult10 = renderer_EmbedUtils;
          const merged1 = Object.assign(tmp26(8354)(theme));
          return obj5;
        }
      }
    }
  }
  return null;
};
