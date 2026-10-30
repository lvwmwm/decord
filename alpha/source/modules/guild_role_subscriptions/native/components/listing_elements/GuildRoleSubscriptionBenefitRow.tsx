// Module ID: 17162
// Function ID: 17163
// Name: GuildRoleSubscriptionBenefitRow
// Dependencies: [19, 17, 4858, 21, 5009, 17160, 1188, 5619, 504, 5647, 1114, 8595, 17163, 2]
// Exports: ChannelBenefitRow, IntangibleBenefitRow

// Module 17162 (GuildRoleSubscriptionBenefitRow)
import react_native from "react-native" /* 17 */;
import native from "native" /* 1188 */;
import useChannelNameDefault from "useChannelName" /* 5647 */;
import EmojiIconDefault from "EmojiIcon" /* 17160 */;
import GuildRoleSubscriptionBenefitUtils from "GuildRoleSubscriptionBenefitUtils" /* 17163 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 4858 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let tmp6;
const Text_Text = tmp6(5619);
function BenefitRow(description) {
  let emojiId;
  let guildId;
  let items;
  let items1;
  let title;
  description = description.description;
  ({ emojiId, guildId, title } = description);
  const tmp = closure_7();
  const obj = { style: tmp.container, children: items };
  items = [hasOwnProperty(EmojiIconDefault, { guildId, id: emojiId, size: 22, fontSize: 18 }), hasOwnProperty(native.Spacer, { size: 16 }), ];
  const obj2 = { style: tmp.textContainer, children: items1 };
  items1 = [title, ];
  let tmp4Result = null;
  const tmp4 = hasOwnProperty;
  if (null != description) {
    const obj3 = { style: tmp.description, variant: "text-sm/normal", color: "interactive-text-default", children: description };
    tmp4Result = tmp4(Text_Text.Text, obj3);
  }
  items1[1] = tmp4Result;
  items[2] = metroRequire(View, obj2);
  return metroRequire(View, obj);
}
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let closure_7 = createStyles.createStyles({ container: { flexDirection: "row", justifyContent: "flex-start" }, textContainer: { flex: 1, justifyContent: "center" }, description: { marginTop: 2 }, channelTitle: { flexDirection: "row", alignItems: "center" }, channelIcon: { width: 16, height: 16, marginEnd: 8 } });
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/listing_elements/GuildRoleSubscriptionBenefitRow.tsx");

export function ChannelBenefitRow(benefit) {
  let intl;
  let items2;
  let tmp2Result;
  let tmp2Result2;
  benefit = benefit.benefit;
  const guildId = benefit.guildId;
  const tmp = closure_7();
  const items = [ChannelStore];
  const items1 = [benefit.ref_id];
  const obj = benefit(504);
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(benefit.ref_id), items1);
  const obj2 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: "[" + intl.string(benefit(1114).t.bz1PZX) + "]" };
  const tmp5 = useChannelNameDefault(stateFromStores);
  const Text = benefit(5619).Text;
  intl = benefit(1114).intl;
  let tmp7 = closure_5(Text, obj2);
  if (null != stateFromStores) {
    const obj3 = { style: tmp.channelTitle, children: items2 };
    const obj4 = { style: tmp.channelIcon, size: benefit(1188).Icon.Sizes.CUSTOM, source: tmp2Result.getChannelIcon(stateFromStores) };
    const Icon = tmp2(1188).Icon;
    tmp2Result = benefit(8595);
    items2 = [closure_5(Icon, obj4), ];
    const obj5 = { variant: "text-md/medium", color: "mobile-text-heading-primary", children: tmp5 };
    items2[1] = closure_5(benefit(5619).Text, obj5);
    tmp7 = closure_6(View, obj3);
  }
  const obj6 = { emojiId: tmp2Result2.getBenefitEmojiId(benefit), guildId, title: tmp7, description: benefit.description };
  tmp2Result2 = benefit(17163);
  return closure_5(BenefitRow, obj6);
}
export function IntangibleBenefitRow(benefit) {
  let guildId;
  let obj2;
  let obj3;
  benefit = benefit.benefit;
  const obj = { emojiId: obj2.getBenefitEmojiId(benefit), guildId, title: hasOwnProperty(Text_Text.Text, obj3), description: benefit.description };
  guildId = benefit.guildId;
  obj2 = GuildRoleSubscriptionBenefitUtils;
  obj3 = { variant: "text-md/medium", color: "mobile-text-heading-primary", children: benefit.name };
  return hasOwnProperty(BenefitRow, obj);
}
