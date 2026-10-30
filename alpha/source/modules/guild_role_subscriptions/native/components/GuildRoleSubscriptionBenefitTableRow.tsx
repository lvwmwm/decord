// Module ID: 19912
// Function ID: 19913
// Name: GuildRoleSubscriptionBenefitTableRow
// Dependencies: [19, 17, 17125, 21, 5009, 575, 17153, 5647, 5619, 1114, 17163, 6969, 17160, 2]
// Exports: default

// Module 19912 (GuildRoleSubscriptionBenefitTableRow)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl2 from "intl" /* 1114 */;
import Text_Text from "Text/Text" /* 5619 */;
import TableRow2 from "TableRow" /* 6969 */;
import GuildRoleSubscriptionsConstants from "GuildRoleSubscriptionsConstants" /* 17125 */;
import GuildRoleSubscriptionTierTemplatesUtils from "GuildRoleSubscriptionTierTemplatesUtils" /* 17153 */;
import EmojiIconDefault from "EmojiIcon" /* 17160 */;
import GuildRoleSubscriptionBenefitUtils from "GuildRoleSubscriptionBenefitUtils" /* 17163 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let obj2;
function ChannelBenefitLabel(benefit) {
  let intl;
  let items;
  let tmp8;
  benefit = benefit.benefit;
  const tmp = closure_7();
  const obj = GuildRoleSubscriptionTierTemplatesUtils;
  const channelWithTemplateFallback = obj.useChannelWithTemplateFallback(benefit.ref_id);
  if (null == channelWithTemplateFallback) {
    const obj2 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: "[" + intl.string(intl2.t.bz1PZX) + "]" };
    const Text = tmp2(5619).Text;
    intl = tmp2(1114).intl;
    const _HermesInternal = HermesInternal;
    tmp8 = hasOwnProperty(Text, obj2);
  } else {
    const obj3 = { style: tmp.channelLabel, children: items };
    items = [, ];
    const obj4 = { style: tmp.channelIcon, size: "xs", color: "interactive-text-default" };
    const tmp2Result = GuildRoleSubscriptionBenefitUtils;
    items[0] = tmp2Result.renderChannelIcon(channelWithTemplateFallback, obj4);
    const obj5 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", lineClamp: 1, children: tmp5 };
    items[1] = hasOwnProperty(Text_Text.Text, obj5);
    tmp8 = metroRequire(View, obj3);
  }
  return tmp8;
}
const View = react_native.View;
const constants = GuildRoleSubscriptionsConstants.GuildRoleSubscriptionBenefitTypes;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let obj = { channelLabel: { flexDirection: "row", alignItems: "center" }, channelIcon: obj2 };
obj2 = { marginEnd: nativeDefault.space.PX_4 };
let closure_7 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionBenefitTableRow.tsx");

export default function GuildRoleSubscriptionBenefitTableRow(benefit) {
  let description;
  let disabled;
  let end;
  let guildId;
  let name;
  let obj3;
  let obj4;
  let onPress;
  let start;
  let tmp4;
  benefit = benefit.benefit;
  ({ guildId, onPress, disabled, start, end } = benefit);
  if (benefit.ref_type === constants.CHANNEL) {
    const obj = { benefit };
    name = hasOwnProperty(ChannelBenefitLabel, obj);
  } else {
    name = benefit.name;
  }
  const obj2 = { start, end, icon: hasOwnProperty(tmp4, obj3), label: name, subLabel: description, subLabelLineClamp: 3, arrow: true, onPress, disabled };
  const TableRow = TableRow2.TableRow;
  obj3 = { guildId, id: obj4.getBenefitEmojiId(benefit) };
  tmp4 = EmojiIconDefault;
  description = benefit.description;
  obj4 = GuildRoleSubscriptionBenefitUtils;
  return hasOwnProperty(TableRow, obj2);
};
