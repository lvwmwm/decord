// Module ID: 16655
// Function ID: 16656
// Name: GuildRoleSubscriptionBenefitUtils
// Dependencies: [19, 21, 4859, 7636, 7681, 2]
// Exports: getBenefitEmojiId, getChannelIconComponentOrDefault, renderChannelIcon

// Module 16655 (GuildRoleSubscriptionBenefitUtils)
import Fragment from "Fragment" /* 21 */;
import UnicodeEmojisDefault from "UnicodeEmojis" /* 4859 */;
import utils_ChannelUtils from "utils/ChannelUtils" /* 7636 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let tmp;
const TextIcon2 = tmp(7681);
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
    TextIcon = tmp(7681).TextIcon;
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
