// Module ID: 8569
// Function ID: 8570
// Name: GuildProductPurchaseSystemMessage
// Dependencies: [5085, 4991, 1072, 6573, 8493, 1414, 1411, 8528, 8495, 1113, 8497, 2]
// Exports: createGuildProductPurchaseSystemMessage

// Module 8569 (GuildProductPurchaseSystemMessage)
import Constants from "Constants" /* 1072 */;
import intl2 from "intl" /* 1113 */;
import AvatarUtils from "AvatarUtils" /* 1411 */;
import utils_AvatarUtils from "utils/AvatarUtils" /* 1414 */;
import useMessageAuthor from "useMessageAuthor" /* 6573 */;
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 8493 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 8495 */;
import createCommonMessageDefault from "createCommonMessage" /* 8497 */;
import GuildProductSystemMessageUtils from "GuildProductSystemMessageUtils" /* 8528 */;
import MessageRecord from "MessageRecord" /* 5085 */;
import ChannelStore from "ChannelStore" /* 4991 */;
import size from "module_2" /* 2 */;

const MessageTypes = Constants.MessageTypes;
const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/GuildProductPurchaseSystemMessage.tsx");

export function createGuildProductPurchaseSystemMessage(message) {
  let getGuildProductPurchaseSystemMessageContentMobile;
  let intl;
  let obj6;
  let obj7;
  let tmp9Result;
  const obj = { message: new MessageRecord(message.message) };
  const merged = Object.assign(message);
  obj.message.type = MessageTypes.ROLE_SUBSCRIPTION_PURCHASE;
  const purchaseNotification = obj.message.purchaseNotification;
  let product_name;
  new MessageRecord(message.message);
  if (purchaseNotification != null) {
    const guild_product_purchase = purchaseNotification.guild_product_purchase;
    if (guild_product_purchase != null) {
      product_name = guild_product_purchase.product_name;
    }
  }
  if (null == product_name) {
    return null;
  } else {
    let guildId;
    message = obj.message;
    const author = message.author;
    const roleStyle = message.roleStyle;
    const channel = ChannelStore.getChannel(message.getChannelId());
    if (channel != null) {
      guildId = channel.getGuildId();
    }
    const obj2 = useMessageAuthor;
    const guildMemberAvatar = obj2.getMessageAuthor(message).guildMemberAvatar;
    const obj3 = useAuthorWithProcessedColor;
    const messageAuthorWithProcessedColor = obj3.getMessageAuthorWithProcessedColor(message);
    utils_AvatarUtils;
    if (null != guildMemberAvatar) {
      let guildMemberAvatarSource;
      if (null != guildId) {
        const obj4 = { userId: author.id, avatar: guildMemberAvatar, guildId };
        const tmp5Result = AvatarUtils;
        guildMemberAvatarSource = tmp5Result.getGuildMemberAvatarSource(obj4, author);
      }
      const obj5 = { content: getGuildProductPurchaseSystemMessageContentMobile(obj6), totalMonthsSubscribed: 0, username: messageAuthorWithProcessedColor.nick, avatarURL: tmp9Result.uri, welcomeLabel: intl.string(intl2.t.s2N5HS) };
      tmp9Result = tmp9(guildMemberAvatarSource);
      obj6 = { username: messageAuthorWithProcessedColor.nick, usernameOnClickHandler: formatUsernameOnClickDefault(obj7), productName: product_name };
      getGuildProductPurchaseSystemMessageContentMobile = GuildProductSystemMessageUtils.getGuildProductPurchaseSystemMessageContentMobile;
      obj7 = { message, author: messageAuthorWithProcessedColor, roleStyle };
      GuildProductSystemMessageUtils;
      intl = tmp5(1113).intl;
      const merged1 = Object.assign(createCommonMessageDefault(obj));
      return obj5;
    }
    guildMemberAvatarSource = author.getAvatarSource(undefined);
  }
}
