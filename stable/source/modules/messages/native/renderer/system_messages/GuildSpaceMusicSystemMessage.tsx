// Module ID: 8661
// Function ID: 8662
// Name: GuildSpaceMusicSystemMessage
// Dependencies: [5019, 6848, 1385, 5170, 575, 8512, 8513, 6205, 8522, 1113, 8524, 8500, 8662, 8526, 2]
// Exports: createGuildSpaceMusicSystemMessage

// Module 8661 (GuildSpaceMusicSystemMessage)
import nativeDefault from "native" /* 575 */;
import NicknameUtilsDefault from "NicknameUtils" /* 6205 */;
import renderer_EmbedUtils from "renderer/EmbedUtils" /* 8500 */;
import PopularMusicSystemMessageTypes from "PopularMusicSystemMessageTypes" /* 8512 */;
import PopularMusicSystemMessageCopy from "PopularMusicSystemMessageCopy" /* 8513 */;
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 8522 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 8524 */;
import createCommonMessageDefault from "createCommonMessage" /* 8526 */;
import AssetRegistryDefault from "AssetRegistry" /* 8662 */;
import ChannelStore from "ChannelStore" /* 5019 */;
import GuildMemberRequesterStore from "GuildMemberRequesterStore" /* 6848 */;
import UserStore from "UserStore" /* 1385 */;
import createStyles from "createStyles" /* 5170 */;
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
