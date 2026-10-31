// Module ID: 17219
// Function ID: 17220
// Name: GuildRoleSubscriptionBenefitRow
// Dependencies: [19, 17, 4863, 21, 5014, 575, 17217, 1187, 5624, 504, 5652, 1113, 17220, 2]
// Exports: ChannelBenefitRow, IntangibleBenefitRow

// Module 17219 (GuildRoleSubscriptionBenefitRow)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import native from "native" /* 1187 */;
import useChannelNameDefault from "useChannelName" /* 5652 */;
import EmojiIconDefault from "EmojiIcon" /* 17217 */;
import GuildRoleSubscriptionBenefitUtils from "GuildRoleSubscriptionBenefitUtils" /* 17220 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 4863 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let obj2;
let tmp6;
const Text_Text = tmp6(5624);
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
let obj = { container: { flexDirection: "row", justifyContent: "flex-start" }, textContainer: { flex: 1, justifyContent: "center" }, description: { marginTop: 2 }, channelTitle: { flexDirection: "row", alignItems: "center" }, channelIcon: obj2 };
obj2 = { marginEnd: nativeDefault.space.PX_8 };
let closure_7 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/listing_elements/GuildRoleSubscriptionBenefitRow.tsx");

export function ChannelBenefitRow(benefit) {
  let intl;
  let items2;
  let tmp2Result2;
  benefit = benefit.benefit;
  const guildId = benefit.guildId;
  const tmp = closure_7();
  const items = [ChannelStore];
  const items1 = [benefit.ref_id];
  const obj = benefit(504);
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(benefit.ref_id), items1);
  const obj2 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: "[" + intl.string(benefit(1113).t.bz1PZX) + "]" };
  const tmp5 = useChannelNameDefault(stateFromStores);
  const Text = benefit(5624).Text;
  intl = benefit(1113).intl;
  let tmp7 = closure_5(Text, obj2);
  if (null != stateFromStores) {
    const obj3 = { style: tmp.channelTitle, children: items2 };
    items2 = [, ];
    const obj4 = { style: tmp.channelIcon, size: "xs", color: "interactive-text-default" };
    const tmp2Result = benefit(17220);
    items2[0] = tmp2Result.renderChannelIcon(stateFromStores, obj4);
    const obj5 = { variant: "text-md/medium", color: "mobile-text-heading-primary", children: tmp5 };
    items2[1] = closure_5(benefit(5624).Text, obj5);
    tmp7 = closure_6(View, obj3);
  }
  const obj6 = { emojiId: tmp2Result2.getBenefitEmojiId(benefit), guildId, title: tmp7, description: benefit.description };
  tmp2Result2 = benefit(17220);
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
