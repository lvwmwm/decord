// Module ID: 16338
// Function ID: 126074
// Name: BaseBenefitRow
// Dependencies: []
// Exports: GuildRoleSubscriptionBenefitPreview

// Module 16338 (BaseBenefitRow)
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
  obj = { style: tmp.emojiContainer, children: callback(importDefault(dependencyMap[5]), { guildId, id: emoji }) };
  const items = [callback(View, obj), , ];
  const items1 = [tmp.benefitColumn, contentStyle];
  items[1] = callback(View, { style: items1, children });
  let tmp4 = true === flag;
  if (tmp4) {
    obj = { source: importDefault(dependencyMap[7]) };
    tmp4 = callback(arg1(dependencyMap[6]).Icon, obj);
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
    let obj = { style: tmp.benefitDescription, children: benefit.description };
    tmp2 = callback(arg1(dependencyMap[8]).Text, obj);
  }
  let emoji_id = benefit.emoji_id;
  if (null == emoji_id) {
    let str = "";
    if (null != benefit.emoji_name) {
      str = importDefault(dependencyMap[9]).convertSurrogateToName(benefit.emoji_name, false);
      const obj2 = importDefault(dependencyMap[9]);
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
  let obj = arg1(dependencyMap[10]);
  const channelWithTemplateFallback = obj.useChannelWithTemplateFallback(benefit.ref_id);
  let channelIcon = null;
  if (null != channelWithTemplateFallback) {
    let obj1 = arg1(dependencyMap[12]);
    channelIcon = obj1.getChannelIcon(channelWithTemplateFallback);
  }
  if (null == channelWithTemplateFallback) {
    obj = {};
    const intl = arg1(dependencyMap[13]).intl;
    const _HermesInternal = HermesInternal;
    obj.children = "[" + intl.string(arg1(dependencyMap[13]).t.bz1PZX) + "]";
    let tmp11 = callback(arg1(dependencyMap[8]).Text, obj);
  } else {
    obj = { benefit, guildId, isInteractive };
    obj1 = { style: tmp.channelRow };
    const obj2 = { style: tmp.channelIcon, size: arg1(dependencyMap[6]).Icon.Sizes.CUSTOM, source: channelIcon };
    const items = [callback(arg1(dependencyMap[6]).Icon, obj2), ];
    const obj3 = { children: tmp3 };
    items[1] = callback(arg1(dependencyMap[8]).Text, obj3);
    obj1.children = items;
    obj.children = callback2(View, obj1);
    tmp11 = callback(DescriptiveBenefitRow, obj);
  }
  return tmp11;
}
function IntangibleBenefitRow(benefit) {
  benefit = benefit.benefit;
  let obj = { benefit, guildId: benefit.guildId, isInteractive: benefit.isInteractive, children: callback(arg1(dependencyMap[8]).Text, obj) };
  obj = { children: benefit.name };
  return callback(DescriptiveBenefitRow, obj);
}
function EmojiBenefitRow(benefit) {
  let guildId;
  let isInteractive;
  benefit = benefit.benefit;
  ({ guildId, isInteractive } = benefit);
  const tmp = callback3();
  let obj = { emoji: benefit.id, guildId, contentStyle: tmp.emojiRow, isInteractive };
  obj = { style: tmp.emojiColons };
  const items = [callback(arg1(dependencyMap[8]).Text, obj), , ];
  obj = { children: benefit.name };
  items[1] = callback(arg1(dependencyMap[8]).Text, obj);
  items[2] = callback(arg1(dependencyMap[8]).Text, { style: tmp.emojiColons });
  obj.children = items;
  return callback2(BaseBenefitRow, obj);
}
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_4 = arg1(dependencyMap[2]).GuildRoleSubscriptionBenefitTypes;
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[3]));
const tmp3 = arg1(dependencyMap[3]);
let closure_7 = arg1(dependencyMap[4]).createStyles({ container: {}, emojiContainer: {}, benefitColumn: {}, benefitDescription: { loginWebAuthn: -2923740127827069600000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, Ŕ: -0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001257033793555892 }, channelRow: {}, channelIcon: { ty: 24, bm: 24, hd: null }, emojiRow: {}, emojiColons: { paddingHorizontal: 2 } });
const obj = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionBenefitPreview.tsx");

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
