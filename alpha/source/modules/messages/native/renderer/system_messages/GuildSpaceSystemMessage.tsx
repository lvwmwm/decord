// Module ID: 8457
// Function ID: 8458
// Name: GuildSpaceSystemMessage
// Dependencies: [32, 4823, 1392, 1388, 1128, 2440, 8318, 8320, 8322, 8458, 8460, 2]
// Exports: createGuildSpaceSystemMessage

// Module 8457 (GuildSpaceSystemMessage)
import GlobalUtils from "GlobalUtils" /* 1388 */;
import _modDef2440 from "module_2440" /* 2440 */;
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 8318 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 8320 */;
import GuildSpaceLeaderboardSystemMessage from "GuildSpaceLeaderboardSystemMessage" /* 8458 */;
import GuildSpaceMusicSystemMessage from "GuildSpaceMusicSystemMessage" /* 8460 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import ChannelStore from "ChannelStore" /* 4823 */;
import UserStore from "UserStore" /* 1392 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/GuildSpaceSystemMessage.tsx");

export const createGuildSpaceSystemMessage = function createGuildSpaceSystemMessage(message) {
  let guildSpaceLeaderboardSystemMessage;
  let obj4;
  let roleStyle;
  let tmp12;
  let tmp22;
  let tmp23;
  let user;
  const guildSpaceData = message.message.guildSpaceData;
  let whiteboard_busy;
  if (guildSpaceData != null) {
    whiteboard_busy = guildSpaceData.whiteboard_busy;
  }
  if (null != whiteboard_busy) {
    ({ message, roleStyle } = message);
    const sampled_user_ids = whiteboard_busy.sampled_user_ids;
    const mapped = sampled_user_ids.map((item) => user.getUser(item));
    const found = mapped.filter(GlobalUtils.isNotNullish);
    const substr = found.slice(0, 2);
    const diff = whiteboard_busy.connected_user_count - substr.length;
    if (0 !== substr.length) {
      let tmp15;
      let formatToPartsResult;
      if (diff > 0) {
        const channel = ChannelStore.getChannel(message.channel_id);
        [tmp22, tmp23] = substr;
        _slicedToArray(substr, 2);
        const tmp9Result = useAuthorWithProcessedColor;
        const userAuthorWithProcessedColor = tmp9Result.getUserAuthorWithProcessedColor(tmp22, channel);
        const tmp9Result2 = useAuthorWithProcessedColor;
        const userAuthorWithProcessedColor1 = tmp9Result2.getUserAuthorWithProcessedColor(tmp23, channel);
        const intl2 = tmp9(1128).intl;
        tmp15 = importDefault;
        const formatToParts = intl2.formatToParts;
        const obj3 = { displayCount: substr.length, username: userAuthorWithProcessedColor.nick, usernameOnClick: formatUsernameOnClickDefault(obj4), username2: userAuthorWithProcessedColor1.nick, username2OnClick: tmp12, additionalCount: diff };
        const zUiZPF = _modDef2440.zUiZPF;
        tmp12 = undefined;
        obj4 = { userId: tmp22.id, message, author: userAuthorWithProcessedColor, roleStyle };
        if (null != tmp23) {
          const obj5 = { userId: tmp23.id, message, author: userAuthorWithProcessedColor1, roleStyle };
          tmp12 = tmp15(8320)(obj5);
        }
        formatToPartsResult = formatToParts(zUiZPF, obj3);
      }
      const obj6 = { content: formatToPartsResult };
      const merged = Object.assign(tmp15(8322)(message));
      guildSpaceLeaderboardSystemMessage = obj6;
    }
    const intl = tmp9(1128).intl;
    formatToPartsResult = intl.string(_modDef2440.Sxxqdx);
    tmp15 = importDefault;
  } else {
    const guildSpaceData3 = message.message.guildSpaceData;
    let leaderboard;
    if (guildSpaceData3 != null) {
      leaderboard = guildSpaceData3.leaderboard;
    }
    if (null != leaderboard) {
      const obj2 = GuildSpaceLeaderboardSystemMessage;
      guildSpaceLeaderboardSystemMessage = obj2.createGuildSpaceLeaderboardSystemMessage(message);
    } else {
      const guildSpaceData2 = message.message.guildSpaceData;
      let music;
      if (guildSpaceData2 != null) {
        music = guildSpaceData2.music;
      }
      guildSpaceLeaderboardSystemMessage = null;
      if (null != music) {
        const obj = GuildSpaceMusicSystemMessage;
        guildSpaceLeaderboardSystemMessage = obj.createGuildSpaceMusicSystemMessage(message);
      }
    }
  }
  return guildSpaceLeaderboardSystemMessage;
};
