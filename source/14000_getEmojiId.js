// Module ID: 14000
// Function ID: 106504
// Name: getEmojiId
// Dependencies: []
// Exports: ChannelBenefitRow, IntangibleBenefitRow

// Module 14000 (getEmojiId)
function getEmojiId(benefit) {
  if (null != benefit.emoji_id) {
    let str = benefit.emoji_id;
  } else {
    str = "";
    if (null != benefit.emoji_name) {
      str = importDefault(dependencyMap[5]).convertSurrogateToName(benefit.emoji_name, false);
      const obj = importDefault(dependencyMap[5]);
    }
  }
  return str;
}
function BenefitRow(description) {
  let emojiId;
  let guildId;
  let title;
  description = description.description;
  ({ emojiId, guildId, title } = description);
  const tmp = callback3();
  let obj = { style: tmp.container };
  const items = [callback(importDefault(dependencyMap[6]), { guildId, id: emojiId, size: 22, fontSize: 18 }), callback(arg1(dependencyMap[7]).Spacer, { size: 16 }), ];
  obj = { style: tmp.textContainer };
  const items1 = [title, ];
  let tmp6 = null;
  if (null != description) {
    obj = { style: tmp.description, children: description };
    tmp6 = callback(arg1(dependencyMap[8]).Text, obj);
  }
  items1[1] = tmp6;
  obj.children = items1;
  items[2] = closure_6(View, obj);
  obj.children = items;
  return closure_6(View, obj);
}
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_4 = importDefault(dependencyMap[2]);
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[3]));
const tmp3 = arg1(dependencyMap[3]);
let closure_7 = arg1(dependencyMap[4]).createStyles({ container: {}, textContainer: { -9223372036854775808: 323420161, 0: -2104950783 }, description: { marginTop: 2 }, channelTitle: { -9223372036854775808: true, filter: true }, channelIcon: { -1044603296: "Text", 1740925547: "round", -1130471302: "window" } });
const obj = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/guild_role_subscriptions/native/components/listing_elements/GuildRoleSubscriptionBenefitRow.tsx");

export const ChannelBenefitRow = function ChannelBenefitRow(benefit) {
  benefit = benefit.benefit;
  const arg1 = benefit;
  const tmp = callback3();
  let obj = arg1(dependencyMap[9]);
  const items = [closure_4];
  const items1 = [benefit.ref_id];
  const stateFromStores = obj.useStateFromStores(items, () => channel.getChannel(benefit.ref_id), items1);
  obj = { INTEGRATION_CREATE: 131072.00119209292, ConstraintReasonCode: -293983030121430100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 };
  const intl = arg1(dependencyMap[11]).intl;
  obj.children = "[" + intl.string(arg1(dependencyMap[11]).t.bz1PZX) + "]";
  let tmp4 = callback(arg1(dependencyMap[8]).Text, obj);
  if (null != stateFromStores) {
    obj = { style: tmp.channelTitle };
    const obj1 = { style: tmp.channelIcon, size: arg1(dependencyMap[7]).Icon.Sizes.CUSTOM, source: arg1(dependencyMap[12]).getChannelIcon(stateFromStores) };
    const items2 = [callback(arg1(dependencyMap[7]).Icon, obj1), ];
    const obj2 = { children: tmp3 };
    items2[1] = callback(arg1(dependencyMap[8]).Text, obj2);
    obj.children = items2;
    tmp4 = callback2(View, obj);
    const obj6 = arg1(dependencyMap[12]);
  }
  const obj3 = { emojiId: getEmojiId(benefit), guildId: benefit.guildId, title: tmp4, description: benefit.description };
  return callback(BenefitRow, obj3);
};
export const IntangibleBenefitRow = function IntangibleBenefitRow(benefit) {
  benefit = benefit.benefit;
  let obj = { emojiId: getEmojiId(benefit), guildId: benefit.guildId, title: callback(arg1(dependencyMap[8]).Text, obj), description: benefit.description };
  obj = { children: benefit.name };
  return callback(BenefitRow, obj);
};
