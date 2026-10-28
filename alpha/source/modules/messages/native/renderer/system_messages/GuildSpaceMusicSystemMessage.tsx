// Module ID: 8493
// Function ID: 8494
// Name: GuildSpaceMusicSystemMessage
// Dependencies: [4856, 6724, 1389, 5004, 587, 8387, 8388, 6025, 8351, 1125, 8353, 8309, 8494, 8355, 2]
// Exports: createGuildSpaceMusicSystemMessage

// Module 8493 (GuildSpaceMusicSystemMessage)
import nativeDefault from "native" /* 587 */;
import NicknameUtilsDefault from "NicknameUtils" /* 6025 */;
import renderer_EmbedUtils from "renderer/EmbedUtils" /* 8309 */;
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 8351 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 8353 */;
import createCommonMessageDefault from "createCommonMessage" /* 8355 */;
import PopularMusicSystemMessageTypes from "PopularMusicSystemMessageTypes" /* 8387 */;
import PopularMusicSystemMessageCopy from "PopularMusicSystemMessageCopy" /* 8388 */;
import AssetRegistryDefault from "AssetRegistry" /* 8494 */;
import ChannelStore from "ChannelStore" /* 4856 */;
import GuildMemberRequesterStore from "GuildMemberRequesterStore" /* 6724 */;
import UserStore from "UserStore" /* 1389 */;
import createStyles from "createStyles" /* 5004 */;
import size from "module_2" /* 2 */;

let obj = { iconTintColor: nativeDefault.colors.ICON_MUTED };
let closure_6 = createStyles.createNativeStyleProperties(obj);
let result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/GuildSpaceMusicSystemMessage.tsx");

export const createGuildSpaceMusicSystemMessage = function createGuildSpaceMusicSystemMessage(message) {
  let guildId;
  let roleStyle;
  let theme;
  let tmpResult4;
  message = message.message;
  ({ roleStyle, theme } = message);
  const guildSpaceData = message.guildSpaceData;
  let music;
  const parseGuildSpaceMusicMessageData = PopularMusicSystemMessageTypes.parseGuildSpaceMusicMessageData;
  PopularMusicSystemMessageTypes;
  if (guildSpaceData != null) {
    music = guildSpaceData.music;
  }
  const result = parseGuildSpaceMusicMessageData(music);
  const channel = ChannelStore.getChannel(message.channel_id);
  if (channel != null) {
    guildId = channel.getGuildId();
  }
  if (null != result) {
    if (null != channel) {
      if (null != guildId) {
        if (null != result.userId) {
          const member = GuildMemberRequesterStore.requestMember(guildId, result.userId);
        }
        const user = UserStore.getUser(result.userId);
        let name = null;
        const getMobileMusicSystemMessage = PopularMusicSystemMessageCopy.getMobileMusicSystemMessage;
        PopularMusicSystemMessageCopy;
        if (null != user) {
          const obj2 = NicknameUtilsDefault;
          name = obj2.getName(guildId, channel.id, user);
        }
        const mobileMusicSystemMessage = getMobileMusicSystemMessage(result, name);
        if (null == mobileMusicSystemMessage) {
          return null;
        } else {
          let userAuthorWithProcessedColor = null;
          if (null != user) {
            const tmpResult3 = useAuthorWithProcessedColor;
            userAuthorWithProcessedColor = tmpResult3.getUserAuthorWithProcessedColor(user, channel);
          }
          const tmp17 = closure_6(theme);
          const intl = tmp(1125).intl;
          const obj = {};
          const formatToParts = intl.formatToParts;
          const message2 = mobileMusicSystemMessage.message;
          const merged = Object.assign(mobileMusicSystemMessage.values);
          if (null != user) {
            let obj5;
            if (null != userAuthorWithProcessedColor) {
              const obj3 = { userId: user.id, message, author: userAuthorWithProcessedColor, roleStyle };
              obj5 = formatUsernameOnClickDefault(obj3);
            }
            obj.usernameOnClick = obj5;
            const obj4 = { content: formatToParts(message2, obj), iconUrl: tmpResult4.getAssetUriForEmbed(AssetRegistryDefault), iconTintColor: tmp17.iconTintColor };
            tmpResult4 = renderer_EmbedUtils;
            const merged1 = Object.assign(createCommonMessageDefault(message));
            return obj4;
          }
          obj5 = {};
        }
      }
    }
  }
  return null;
};
