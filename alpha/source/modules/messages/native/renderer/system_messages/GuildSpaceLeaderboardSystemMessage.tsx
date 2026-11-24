// Module ID: 14270
// Function ID: 14271
// Name: GuildSpaceLeaderboardSystemMessage
// Dependencies: [4766, 1386, 4917, 575, 4837, 10472, 6681, 11853, 1112, 14197, 8680, 8659, 14198, 2]
// Exports: createGuildSpaceLeaderboardSystemMessage

// Module 14270 (GuildSpaceLeaderboardSystemMessage)
import nativeDefault from "native" /* 575 */;
import GuildLeaderboardTypes from "GuildLeaderboardTypes" /* 4837 */;
import NicknameUtilsDefault from "NicknameUtils" /* 6681 */;
import AssetRegistryDefault from "AssetRegistry" /* 8659 */;
import renderer_EmbedUtils from "renderer/EmbedUtils" /* 8680 */;
import GuildLeaderboardSystemMessageCopy from "GuildLeaderboardSystemMessageCopy" /* 10472 */;
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 11853 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 14197 */;
import ChannelStore from "ChannelStore" /* 4766 */;
import UserStore from "UserStore" /* 1386 */;
import createStyles from "createStyles" /* 4917 */;
import size from "module_2" /* 2 */;

let obj = { iconTintColor: nativeDefault.colors.ICON_MUTED };
let closure_5 = createStyles.createNativeStyleProperties(obj);
let result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/GuildSpaceLeaderboardSystemMessage.tsx");

export function createGuildSpaceLeaderboardSystemMessage(theme) {
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
          const intl = tmp(1112).intl;
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
          const merged1 = Object.assign(tmp26(14198)(theme));
          return obj5;
        }
      }
    }
  }
  return null;
}
