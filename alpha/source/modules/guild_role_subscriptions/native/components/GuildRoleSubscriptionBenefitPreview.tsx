// Module ID: 19977
// Function ID: 19978
// Name: GuildRoleSubscriptionBenefitPreview
// Dependencies: [19, 17, 17183, 21, 5014, 17217, 7378, 5624, 17220, 17209, 5652, 1113, 2]
// Exports: GuildRoleSubscriptionBenefitPreview

// Module 19977 (GuildRoleSubscriptionBenefitPreview)
import react_native from "react-native" /* 17 */;
import intl2 from "intl" /* 1113 */;
import Text_Text from "Text/Text" /* 5624 */;
import ChevronSmallRightIcon from "ChevronSmallRightIcon" /* 7378 */;
import GuildRoleSubscriptionsConstants from "GuildRoleSubscriptionsConstants" /* 17183 */;
import GuildRoleSubscriptionTierTemplatesUtils from "GuildRoleSubscriptionTierTemplatesUtils" /* 17209 */;
import EmojiIconDefault from "EmojiIcon" /* 17217 */;
import GuildRoleSubscriptionBenefitUtils from "GuildRoleSubscriptionBenefitUtils" /* 17220 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
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
    tmp4Result = tmp4(ChevronSmallRightIcon.ChevronSmallRightIcon, { size: "md" });
  }
  items[2] = tmp4Result;
  return tmp2(tmp3, obj);
}
function DescriptiveBenefitRow(benefit) {
  let children;
  let guildId;
  let isInteractive;
  let items;
  let obj3;
  benefit = benefit.benefit;
  ({ children, guildId, isInteractive } = benefit);
  let tmp2 = null;
  if (null != benefit.description) {
    const obj = { style: tmp.benefitDescription, variant: "text-sm/medium", color: "interactive-text-default", children: benefit.description };
    tmp2 = hasOwnProperty(Text_Text.Text, obj);
  }
  const obj2 = { emoji: obj3.getBenefitEmojiId(benefit), guildId, isInteractive, children: items };
  items = [children, tmp2];
  obj3 = GuildRoleSubscriptionBenefitUtils;
  return metroRequire(BaseBenefitRow, obj2);
}
function ChannelBenefitRow(benefit) {
  let guildId;
  let intl;
  let isInteractive;
  let items;
  let obj4;
  let tmp8;
  benefit = benefit.benefit;
  ({ guildId, isInteractive } = benefit);
  const tmp = closure_7();
  const obj = GuildRoleSubscriptionTierTemplatesUtils;
  const channelWithTemplateFallback = obj.useChannelWithTemplateFallback(benefit.ref_id);
  if (null == channelWithTemplateFallback) {
    const obj2 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: "[" + intl.string(intl2.t.bz1PZX) + "]" };
    const Text = tmp2(5624).Text;
    intl = tmp2(1113).intl;
    const _HermesInternal = HermesInternal;
    tmp8 = hasOwnProperty(Text, obj2);
  } else {
    const obj3 = { benefit, guildId, isInteractive, children: metroRequire(View, obj4) };
    obj4 = { style: tmp.channelRow, children: items };
    items = [, ];
    const obj5 = { style: tmp.channelIcon, size: "xs" };
    const tmp2Result = GuildRoleSubscriptionBenefitUtils;
    items[0] = tmp2Result.renderChannelIcon(channelWithTemplateFallback, obj5);
    const obj6 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: tmp5 };
    items[1] = hasOwnProperty(Text_Text.Text, obj6);
    tmp8 = hasOwnProperty(DescriptiveBenefitRow, obj3);
  }
  return tmp8;
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
let closure_7 = createStyles.createStyles({ container: { flexDirection: "row", justifyContent: "flex-start" }, emojiContainer: { width: 24, height: 24, alignSelf: "flex-start", alignItems: "center", justifyContent: "center", marginEnd: 16 }, benefitColumn: { flexDirection: "column", flexGrow: 1, flex: 1, alignItems: "flex-start", justifyContent: "center" }, benefitDescription: { flex: 1, marginTop: 2 }, channelRow: { flexDirection: "row", alignItems: "center", justifyContent: "center" }, channelIcon: { marginEnd: 8 }, emojiRow: { flexDirection: "row", justifyContent: "flex-start", alignItems: "center" }, emojiColons: { paddingHorizontal: 2 } });
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionBenefitPreview.tsx");

export function GuildRoleSubscriptionBenefitPreview(arg0) {
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
}
