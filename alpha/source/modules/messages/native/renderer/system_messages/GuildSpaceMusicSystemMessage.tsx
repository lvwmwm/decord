// Module ID: 8681
// Function ID: 8682
// Name: GuildSpaceMusicSystemMessage
// Dependencies: [4990, 6880, 1385, 5141, 575, 8532, 8533, 6161, 8542, 1113, 8544, 8520, 8682, 8546, 2]
// Exports: createGuildSpaceMusicSystemMessage

// Module 8681 (GuildSpaceMusicSystemMessage)
import nativeDefault from "native" /* 575 */;
import NicknameUtilsDefault from "NicknameUtils" /* 6161 */;
import renderer_EmbedUtils from "renderer/EmbedUtils" /* 8520 */;
import PopularMusicSystemMessageTypes from "PopularMusicSystemMessageTypes" /* 8532 */;
import PopularMusicSystemMessageCopy from "PopularMusicSystemMessageCopy" /* 8533 */;
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 8542 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 8544 */;
import createCommonMessageDefault from "createCommonMessage" /* 8546 */;
import AssetRegistryDefault from "AssetRegistry" /* 8682 */;
import ChannelStore from "ChannelStore" /* 4990 */;
import GuildMemberRequesterStore from "GuildMemberRequesterStore" /* 6880 */;
import UserStore from "UserStore" /* 1385 */;
import createStyles from "createStyles" /* 5141 */;
import size from "module_2" /* 2 */;

let obj = { iconTintColor: nativeDefault.colors.ICON_MUTED };
let closure_6 = createStyles.createNativeStyleProperties(obj);
let result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/GuildSpaceMusicSystemMessage.tsx");

export function createGuildSpaceMusicSystemMessage(message) {
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
          const intl = tmp(1113).intl;
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
}
