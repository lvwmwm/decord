// Module ID: 17163
// Function ID: 17164
// Name: GuildRoleSubscriptionBenefitUtils
// Dependencies: [19, 21, 4955, 8595, 8644, 2]
// Exports: getBenefitEmojiId, getChannelIconComponentOrDefault, renderChannelIcon

// Module 17163 (GuildRoleSubscriptionBenefitUtils)
import Fragment from "Fragment" /* 21 */;
import UnicodeEmojisDefault from "UnicodeEmojis" /* 4955 */;
import utils_ChannelUtils from "utils/ChannelUtils" /* 8595 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let tmp;
const TextIcon2 = tmp(8644);
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionBenefitUtils.tsx");

export function getBenefitEmojiId(benefit) {
  let emoji_id = benefit.emoji_id;
  if (emoji_id == null) {
    let str = "";
    if (null != benefit.emoji_name) {
      const obj = UnicodeEmojisDefault;
      str = obj.convertSurrogateToName(benefit.emoji_name, false);
    }
    emoji_id = str;
  }
  return emoji_id;
}
export function getChannelIconComponentOrDefault(channel, guild) {
  let TextIcon;
  let tmp;
  if (null != guild) {
    const obj2 = utils_ChannelUtils;
    TextIcon = obj2.getChannelIconComponentWithGuild(channel, guild);
    tmp = require;
  } else {
    tmp = require;
    const obj = utils_ChannelUtils;
    TextIcon = obj.getChannelIconComponent(channel);
  }
  if (TextIcon == null) {
    TextIcon = tmp(8644).TextIcon;
  }
  return TextIcon;
}
export function renderChannelIcon(channel, arg1) {
  const obj = utils_ChannelUtils;
  let TextIcon = obj.getChannelIconComponent(channel);
  if (TextIcon == null) {
    TextIcon = TextIcon2.TextIcon;
  }
  const merged = Object.assign(arg1);
  return <TextIcon />;
}
