// Module ID: 16502
// Function ID: 128572
// Name: BaseBenefitRow
// Dependencies: [31, 27, 14144, 33, 4130, 14179, 1273, 10710, 4126, 3771, 14172, 4320, 4593, 1212, 2]
// Exports: GuildRoleSubscriptionBenefitPreview

// Module 16502 (BaseBenefitRow)
import "result";
import { View } from "get ActivityIndicator";
import { GuildRoleSubscriptionBenefitTypes as closure_4 } from "MAX_SUBSCRIPTION_TIERS";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
const require = arg1;
function BaseBenefitRow(isInteractive) {
  let children;
  let contentStyle;
  let emoji;
  let guildId;
  let flag = isInteractive.isInteractive;
  ({ emoji, children, contentStyle, guildId } = isInteractive);
  if (flag === undefined) {
    flag = true;
  }
  const tmp = callback3();
  let obj = { style: tmp.container };
  obj = { style: tmp.emojiContainer, children: callback(importDefault(14179), { guildId, id: emoji }) };
  const items = [callback(View, obj), , ];
  const items1 = [tmp.benefitColumn, contentStyle];
  items[1] = callback(View, { style: items1, children });
  let tmp4 = true === flag;
  if (tmp4) {
    obj = { source: importDefault(10710) };
    tmp4 = callback(require(1273) /* Button */.Icon, obj);
  }
  items[2] = tmp4;
  obj.children = items;
  return closure_6(View, obj);
}
function DescriptiveBenefitRow(benefit) {
  let children;
  let guildId;
  let isInteractive;
  benefit = benefit.benefit;
  ({ children, guildId, isInteractive } = benefit);
  let tmp2 = null;
  if (null != benefit.description) {
    let obj = { style: tmp.benefitDescription, variant: "text-sm/medium", color: "interactive-text-default", children: benefit.description };
    tmp2 = callback(require(4126) /* Text */.Text, obj);
  }
  let emoji_id = benefit.emoji_id;
  if (null == emoji_id) {
    let str = "";
    if (null != benefit.emoji_name) {
      str = importDefault(3771).convertSurrogateToName(benefit.emoji_name, false);
      const obj2 = importDefault(3771);
    }
    emoji_id = str;
  }
  obj = { emoji: emoji_id, guildId, isInteractive };
  const items = [children, tmp2];
  obj.children = items;
  return callback2(BaseBenefitRow, obj);
}
function ChannelBenefitRow(benefit) {
  let guildId;
  let isInteractive;
  benefit = benefit.benefit;
  ({ guildId, isInteractive } = benefit);
  const tmp = callback3();
  let obj = require(14172) /* _createForOfIteratorHelperLoose */;
  const channelWithTemplateFallback = obj.useChannelWithTemplateFallback(benefit.ref_id);
  let channelIcon = null;
  if (null != channelWithTemplateFallback) {
    let obj1 = require(4593) /* getThreadChannelIcon */;
    channelIcon = obj1.getChannelIcon(channelWithTemplateFallback);
  }
  if (null == channelWithTemplateFallback) {
    obj = { variant: "text-md/semibold", color: "mobile-text-heading-primary" };
    const intl = require(1212) /* getSystemLocale */.intl;
    const _HermesInternal = HermesInternal;
    obj.children = "[" + intl.string(require(1212) /* getSystemLocale */.t.bz1PZX) + "]";
    let tmp11 = callback(require(4126) /* Text */.Text, obj);
  } else {
    obj = { benefit, guildId, isInteractive };
    obj1 = { style: tmp.channelRow };
    const obj2 = { style: tmp.channelIcon, size: require(1273) /* Button */.Icon.Sizes.CUSTOM, source: channelIcon };
    const items = [callback(require(1273) /* Button */.Icon, obj2), ];
    const obj3 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: tmp3 };
    items[1] = callback(require(4126) /* Text */.Text, obj3);
    obj1.children = items;
    obj.children = callback2(View, obj1);
    tmp11 = callback(DescriptiveBenefitRow, obj);
  }
  return tmp11;
}
function IntangibleBenefitRow(benefit) {
  benefit = benefit.benefit;
  obj = { benefit, guildId: benefit.guildId, isInteractive: benefit.isInteractive, children: callback(require(4126) /* Text */.Text, obj) };
  obj = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: benefit.name };
  return callback(DescriptiveBenefitRow, obj);
}
function EmojiBenefitRow(benefit) {
  let guildId;
  let isInteractive;
  benefit = benefit.benefit;
  ({ guildId, isInteractive } = benefit);
  const tmp = callback3();
  let obj = { emoji: benefit.id, guildId, contentStyle: tmp.emojiRow, isInteractive };
  obj = { style: tmp.emojiColons, variant: "text-md/medium", color: "text-muted", children: ":" };
  const items = [callback(require(4126) /* Text */.Text, obj), , ];
  obj = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: benefit.name };
  items[1] = callback(require(4126) /* Text */.Text, obj);
  const obj1 = { style: tmp.emojiColons, variant: "text-md/medium", color: "text-muted", children: ":" };
  items[2] = callback(require(4126) /* Text */.Text, obj1);
  obj.children = items;
  return callback2(BaseBenefitRow, obj);
}
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
let closure_7 = _createForOfIteratorHelperLoose.createStyles({ container: { flexDirection: "row", justifyContent: "flex-start" }, emojiContainer: { width: 24, height: 24, alignSelf: "flex-start", alignItems: "center", justifyContent: "center", marginEnd: 16 }, benefitColumn: { flexDirection: "column", flexGrow: 1, flex: 1, alignItems: "flex-start", justifyContent: "center" }, benefitDescription: { flex: 1, marginTop: 2 }, channelRow: { flexDirection: "row", alignItems: "center", justifyContent: "center" }, channelIcon: { width: 16, height: 16, marginEnd: 8 }, emojiRow: { flexDirection: "row", justifyContent: "flex-start", alignItems: "center" }, emojiColons: { paddingHorizontal: 2 } });
const result = require("MAX_SUBSCRIPTION_TIERS").fileFinishedImporting("modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionBenefitPreview.tsx");

export const GuildRoleSubscriptionBenefitPreview = function GuildRoleSubscriptionBenefitPreview(arg0) {
  let benefit;
  let guildId;
  let isInteractive;
  ({ benefit, guildId, isInteractive } = arg0);
  if ("roles" in benefit) {
    let obj = { benefit, guildId, isInteractive };
    let tmp4 = callback(EmojiBenefitRow, obj);
  } else if (benefit.ref_type === constants.CHANNEL) {
    obj = { benefit, guildId, isInteractive };
    tmp4 = callback(ChannelBenefitRow, obj);
  } else {
    obj = { benefit, guildId, isInteractive };
    tmp4 = callback(IntangibleBenefitRow, obj);
  }
  return tmp4;
};
