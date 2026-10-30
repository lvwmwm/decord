// Module ID: 8399
// Function ID: 8400
// Name: GuildSpaceSystemMessageUtils
// Dependencies: [4952, 1384, 8400, 8401, 6036, 1114, 4929, 8402, 2]
// Exports: stringifyGuildSpaceSystemMessage

// Module 8399 (GuildSpaceSystemMessageUtils)
import GuildLeaderboardTypes from "GuildLeaderboardTypes" /* 4929 */;
import NicknameUtilsDefault from "NicknameUtils" /* 6036 */;
import PopularMusicSystemMessageTypes from "PopularMusicSystemMessageTypes" /* 8400 */;
import PopularMusicSystemMessageCopy from "PopularMusicSystemMessageCopy" /* 8401 */;
import GuildLeaderboardSystemMessageCopy from "GuildLeaderboardSystemMessageCopy" /* 8402 */;
import MessageRecord from "MessageRecord" /* 4952 */;
import UserStore from "UserStore" /* 1384 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/guild_space/GuildSpaceSystemMessageUtils.tsx");

export function stringifyGuildSpaceSystemMessage(message5, channel) {
  let music;
  let obj6;
  let str;
  const channel_id = message5.channel_id;
  const parseGuildSpaceMusicMessageData = PopularMusicSystemMessageTypes.parseGuildSpaceMusicMessageData;
  PopularMusicSystemMessageTypes;
  const tmp4 = MessageRecord;
  if (message5 instanceof MessageRecord) {
    const guildSpaceData = message5.guildSpaceData;
    let music1;
    if (guildSpaceData != null) {
      music1 = guildSpaceData.music;
    }
    music = music1;
  } else {
    const guild_space_data = message5.guild_space_data;
    if (guild_space_data != null) {
      music = guild_space_data.music;
    }
  }
  const result = parseGuildSpaceMusicMessageData(music);
  if (null != result) {
    let content2;
    const user = UserStore.getUser(result.userId);
    let name = null;
    const getMusicSystemMessage = PopularMusicSystemMessageCopy.getMusicSystemMessage;
    PopularMusicSystemMessageCopy;
    if (null != user) {
      const obj3 = NicknameUtilsDefault;
      name = obj3.getName(channel.getGuildId(), channel_id, user);
    }
    const musicSystemMessage = getMusicSystemMessage(result, name);
    if (null == musicSystemMessage) {
      content2 = message5.content;
    } else {
      const intl2 = tmp(1114).intl;
      const formatToPlainString2 = intl2.formatToPlainString;
      const message2 = musicSystemMessage.message;
      const obj = {
        usernameHook(arg0) {
              return arg0;
            }
      };
      const merged = Object.assign(musicSystemMessage.values);
      content2 = formatToPlainString2(message2, obj);
    }
    return content2;
  } else {
    let leaderboard;
    const parseGuildSpaceLeaderboardMessageData = GuildLeaderboardTypes.parseGuildSpaceLeaderboardMessageData;
    GuildLeaderboardTypes;
    if (message5 instanceof tmp4) {
      const guildSpaceData2 = message5.guildSpaceData;
      let leaderboard1;
      if (guildSpaceData2 != null) {
        leaderboard1 = guildSpaceData2.leaderboard;
      }
      leaderboard = leaderboard1;
    } else {
      const guild_space_data2 = message5.guild_space_data;
      if (guild_space_data2 != null) {
        leaderboard = guild_space_data2.leaderboard;
      }
    }
    const result1 = parseGuildSpaceLeaderboardMessageData(leaderboard);
    let userId;
    const resolveGuildSpaceLeaderboardMessage = GuildLeaderboardSystemMessageCopy.resolveGuildSpaceLeaderboardMessage;
    const getUser = UserStore.getUser;
    GuildLeaderboardSystemMessageCopy;
    const tmp12 = UserStore;
    if (result1 != null) {
      userId = result1.userId;
    }
    let secondaryUserId;
    const user1 = getUser(userId);
    const getUser2 = tmp12.getUser;
    if (result1 != null) {
      secondaryUserId = result1.secondaryUserId;
    }
    const guildSpaceLeaderboardMessage = resolveGuildSpaceLeaderboardMessage(result1, user1, getUser2(secondaryUserId));
    if (null == guildSpaceLeaderboardMessage) {
      return message5.content;
    } else {
      let content;
      const guildId = channel.getGuildId();
      const obj2 = { username: obj6.getName(guildId, channel_id, guildSpaceLeaderboardMessage.subject), previousUsername: str };
      const getLeaderboardSystemMessage = GuildLeaderboardSystemMessageCopy.getLeaderboardSystemMessage;
      const data = guildSpaceLeaderboardMessage.data;
      GuildLeaderboardSystemMessageCopy;
      str = "";
      obj6 = NicknameUtilsDefault;
      const tmp31 = importDefault;
      if (guildSpaceLeaderboardMessage.data.event === GuildLeaderboardTypes.GuildSpaceLeaderboardEvent.LEADER_CHANGED) {
        const tmp31Result = tmp31(6036);
        str = tmp31Result.getName(guildId, channel_id, guildSpaceLeaderboardMessage.previousLeader);
      }
      const leaderboardSystemMessage = getLeaderboardSystemMessage(data, obj2);
      if (null == leaderboardSystemMessage) {
        content = message5.content;
      } else {
        const intl = tmp(1114).intl;
        const formatToPlainString = intl.formatToPlainString;
        const message = leaderboardSystemMessage.message;
        const obj4 = {
          usernameHook(arg0) {
                  return arg0;
                },
          previousUsernameHook(arg0) {
                  return arg0;
                }
        };
        const merged1 = Object.assign(leaderboardSystemMessage.values);
        content = formatToPlainString(message, obj4);
      }
      return content;
    }
  }
}
