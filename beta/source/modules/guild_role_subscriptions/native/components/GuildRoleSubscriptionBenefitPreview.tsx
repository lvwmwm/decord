// Module ID: 17588
// Function ID: 17589
// Name: GuildRoleSubscriptionBenefitPreview
// Dependencies: [19, 17, 14750, 21, 4836, 14785, 1177, 9396, 4832, 4483, 14778, 4989, 5335, 1115, 2]
// Exports: GuildRoleSubscriptionBenefitPreview

// Module 17588 (GuildRoleSubscriptionBenefitPreview)
import react_native from "react-native" /* 17 */;
import intl2 from "intl" /* 1115 */;
import native from "native" /* 1177 */;
import UnicodeEmojisDefault from "UnicodeEmojis" /* 4483 */;
import Text_Text from "Text/Text" /* 4832 */;
import useChannelNameDefault from "useChannelName" /* 4989 */;
import utils_ChannelUtils from "utils/ChannelUtils" /* 5335 */;
import GuildRoleSubscriptionsConstants from "GuildRoleSubscriptionsConstants" /* 14750 */;
import GuildRoleSubscriptionTierTemplatesUtils from "GuildRoleSubscriptionTierTemplatesUtils" /* 14778 */;
import EmojiIconDefault from "EmojiIcon" /* 14785 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let tmp5;
const AssetRegistryDefault = tmp5(9396);
function BaseBenefitRow(isInteractive) {
  let children;
  let contentStyle;
  let emoji;
  let guildId;
  let items;
  let items1;
  let flag = isInteractive.isInteractive;
  ({ emoji, children, contentStyle, guildId } = isInteractive);
  if (flag === undefined) {
    flag = true;
  }
  const tmp = closure_7();
  const obj = { style: tmp.container, children: items };
  items = [, , ];
  const obj2 = { style: tmp.emojiContainer, children: hasOwnProperty(EmojiIconDefault, { guildId, id: emoji }) };
  items[0] = hasOwnProperty(View, obj2);
  const obj3 = { style: items1, children };
  items1 = [tmp.benefitColumn, contentStyle];
  items[1] = hasOwnProperty(View, obj3);
  let tmp4Result = true === flag;
  const tmp2 = metroRequire;
  const tmp3 = View;
  const tmp4 = hasOwnProperty;
  if (tmp4Result) {
    const obj4 = { source: AssetRegistryDefault };
    const Icon = native.Icon;
    tmp4Result = tmp4(Icon, obj4);
  }
  items[2] = tmp4Result;
  return tmp2(tmp3, obj);
}
function DescriptiveBenefitRow(benefit) {
  let children;
  let guildId;
  let isInteractive;
  let items;
  benefit = benefit.benefit;
  ({ children, guildId, isInteractive } = benefit);
  let tmp2 = null;
  if (null != benefit.description) {
    const obj = { style: tmp.benefitDescription, variant: "text-sm/medium", color: "interactive-text-default", children: benefit.description };
    tmp2 = hasOwnProperty(Text_Text.Text, obj);
  }
  let emoji_id = benefit.emoji_id;
  if (emoji_id == null) {
    let str = "";
    if (null != benefit.emoji_name) {
      const obj2 = UnicodeEmojisDefault;
      str = obj2.convertSurrogateToName(benefit.emoji_name, false);
    }
    emoji_id = str;
  }
  const obj3 = { emoji: emoji_id, guildId, isInteractive, children: items };
  items = [children, tmp2];
  return metroRequire(BaseBenefitRow, obj3);
}
function ChannelBenefitRow(benefit) {
  let guildId;
  let intl;
  let isInteractive;
  let items;
  let obj4;
  let tmp9;
  benefit = benefit.benefit;
  ({ guildId, isInteractive } = benefit);
  const tmp = closure_7();
  const obj = GuildRoleSubscriptionTierTemplatesUtils;
  const channelWithTemplateFallback = obj.useChannelWithTemplateFallback(benefit.ref_id);
  let channelIcon = null;
  const tmp5 = useChannelNameDefault(channelWithTemplateFallback);
  if (null != channelWithTemplateFallback) {
    const tmp2Result = utils_ChannelUtils;
    channelIcon = tmp2Result.getChannelIcon(channelWithTemplateFallback);
  }
  if (null == channelWithTemplateFallback) {
    const obj2 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: "[" + intl.string(intl2.t.bz1PZX) + "]" };
    const Text = tmp2(4832).Text;
    intl = tmp2(1115).intl;
    const _HermesInternal = HermesInternal;
    tmp9 = hasOwnProperty(Text, obj2);
  } else {
    const obj3 = { benefit, guildId, isInteractive, children: metroRequire(View, obj4) };
    obj4 = { style: tmp.channelRow, children: items };
    const obj5 = { style: tmp.channelIcon, size: native.Icon.Sizes.CUSTOM, source: channelIcon };
    const Icon = tmp2(1177).Icon;
    items = [hasOwnProperty(Icon, obj5), ];
    const obj6 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: tmp5 };
    items[1] = hasOwnProperty(Text_Text.Text, obj6);
    tmp9 = hasOwnProperty(DescriptiveBenefitRow, obj3);
  }
  return tmp9;
}
function IntangibleBenefitRow(benefit) {
  let obj2;
  benefit = benefit.benefit;
  const obj = { benefit, guildId: benefit.guildId, isInteractive: benefit.isInteractive, children: hasOwnProperty(Text_Text.Text, obj2) };
  obj2 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: benefit.name };
  return hasOwnProperty(DescriptiveBenefitRow, obj);
}
function EmojiBenefitRow(benefit) {
  let guildId;
  let isInteractive;
  let items;
  benefit = benefit.benefit;
  ({ guildId, isInteractive } = benefit);
  const tmp = closure_7();
  const obj = { emoji: benefit.id, guildId, contentStyle: tmp.emojiRow, isInteractive, children: items };
  items = [, , ];
  const obj2 = { style: tmp.emojiColons, variant: "text-md/medium", color: "text-muted", children: ":" };
  items[0] = hasOwnProperty(Text_Text.Text, obj2);
  const obj3 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: benefit.name };
  items[1] = hasOwnProperty(Text_Text.Text, obj3);
  const obj4 = { style: tmp.emojiColons, variant: "text-md/medium", color: "text-muted", children: ":" };
  items[2] = hasOwnProperty(Text_Text.Text, obj4);
  return metroRequire(BaseBenefitRow, obj);
}
const View = react_native.View;
const constants = GuildRoleSubscriptionsConstants.GuildRoleSubscriptionBenefitTypes;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let closure_7 = createStyles.createStyles({ container: { flexDirection: "row", justifyContent: "flex-start" }, emojiContainer: { width: 24, height: 24, alignSelf: "flex-start", alignItems: "center", justifyContent: "center", marginEnd: 16 }, benefitColumn: { flexDirection: "column", flexGrow: 1, flex: 1, alignItems: "flex-start", justifyContent: "center" }, benefitDescription: { flex: 1, marginTop: 2 }, channelRow: { flexDirection: "row", alignItems: "center", justifyContent: "center" }, channelIcon: { width: 16, height: 16, marginEnd: 8 }, emojiRow: { flexDirection: "row", justifyContent: "flex-start", alignItems: "center" }, emojiColons: { paddingHorizontal: 2 } });
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionBenefitPreview.tsx");

export const GuildRoleSubscriptionBenefitPreview = function GuildRoleSubscriptionBenefitPreview(arg0) {
  let benefit;
  let guildId;
  let isInteractive;
  let tmp4;
  ({ benefit, guildId, isInteractive } = arg0);
  if ("roles" in benefit) {
    const obj2 = { benefit, guildId, isInteractive };
    tmp4 = hasOwnProperty(EmojiBenefitRow, obj2);
  } else if (benefit.ref_type === constants.CHANNEL) {
    const obj3 = { benefit, guildId, isInteractive };
    tmp4 = hasOwnProperty(ChannelBenefitRow, obj3);
  } else {
    const obj = { benefit, guildId, isInteractive };
    tmp4 = hasOwnProperty(IntangibleBenefitRow, obj);
  }
  return tmp4;
};
