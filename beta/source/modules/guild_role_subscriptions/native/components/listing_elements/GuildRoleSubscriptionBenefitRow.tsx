// Module ID: 14787
// Function ID: 14788
// Name: GuildRoleSubscriptionBenefitRow
// Dependencies: [19, 17, 2045, 21, 4836, 4483, 14785, 1177, 4832, 504, 4989, 1115, 5335, 2]
// Exports: ChannelBenefitRow, IntangibleBenefitRow

// Module 14787 (GuildRoleSubscriptionBenefitRow)
import react_native from "react-native" /* 17 */;
import native from "native" /* 1177 */;
import useChannelNameDefault from "useChannelName" /* 4989 */;
import EmojiIconDefault from "EmojiIcon" /* 14785 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let tmp5;
let tmp6;
const UnicodeEmojisDefault = tmp5(4483);
const Text_Text = tmp6(4832);
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

export const ChannelBenefitRow = function ChannelBenefitRow(benefit) {
  let intl;
  let items2;
  let str;
  let tmp2Result;
  benefit = benefit.benefit;
  const guildId = benefit.guildId;
  const tmp = closure_7();
  const items = [ChannelStore];
  const items1 = [benefit.ref_id];
  const obj = benefit(504);
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(benefit.ref_id), items1);
  const obj2 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: "[" + intl.string(benefit(1115).t.bz1PZX) + "]" };
  const tmp6 = useChannelNameDefault(stateFromStores);
  const Text = benefit(4832).Text;
  intl = benefit(1115).intl;
  let tmp8 = closure_5(Text, obj2);
  if (null != stateFromStores) {
    const obj3 = { style: tmp.channelTitle, children: items2 };
    const obj4 = { style: tmp.channelIcon, size: benefit(1177).Icon.Sizes.CUSTOM, source: tmp2Result.getChannelIcon(stateFromStores) };
    const Icon = tmp2(1177).Icon;
    tmp2Result = benefit(5335);
    items2 = [closure_5(Icon, obj4), ];
    const obj5 = { variant: "text-md/medium", color: "mobile-text-heading-primary", children: tmp6 };
    items2[1] = closure_5(benefit(4832).Text, obj5);
    tmp8 = closure_6(View, obj3);
  }
  const tmp9 = BenefitRow;
  if (null != benefit.emoji_id) {
    str = benefit.emoji_id;
  } else {
    str = "";
    if (null != benefit.emoji_name) {
      const tmp5Result = UnicodeEmojisDefault;
      str = tmp5Result.convertSurrogateToName(benefit.emoji_name, false);
    }
  }
  const obj6 = { emojiId: str, guildId, title: tmp8, description: benefit.description };
  return closure_5(tmp9, obj6);
};
export const IntangibleBenefitRow = function IntangibleBenefitRow(benefit) {
  let obj3;
  let str;
  benefit = benefit.benefit;
  const guildId = benefit.guildId;
  const tmp2 = BenefitRow;
  if (null != benefit.emoji_id) {
    str = benefit.emoji_id;
  } else {
    str = "";
    if (null != benefit.emoji_name) {
      const obj = UnicodeEmojisDefault;
      str = obj.convertSurrogateToName(benefit.emoji_name, false);
    }
  }
  const obj2 = { emojiId: str, guildId, title: hasOwnProperty(Text_Text.Text, obj3), description: benefit.description };
  obj3 = { variant: "text-md/medium", color: "mobile-text-heading-primary", children: benefit.name };
  return hasOwnProperty(tmp2, obj2);
};
