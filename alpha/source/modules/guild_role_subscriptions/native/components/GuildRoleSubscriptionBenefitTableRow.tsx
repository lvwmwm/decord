// Module ID: 19849
// Function ID: 19850
// Name: GuildRoleSubscriptionBenefitTableRow
// Dependencies: [19, 17, 17071, 21, 5005, 587, 558, 576, 17099, 5641, 5271, 1125, 17109, 17106, 6963, 2]

// Module 19849 (GuildRoleSubscriptionBenefitTableRow)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl2 from "intl" /* 1125 */;
import Text_Text from "Text/Text" /* 5271 */;
import useChannelNameDefault from "useChannelName" /* 5641 */;
import TableRow2 from "TableRow" /* 6963 */;
import GuildRoleSubscriptionsConstants from "GuildRoleSubscriptionsConstants" /* 17071 */;
import GuildRoleSubscriptionTierTemplatesUtils from "GuildRoleSubscriptionTierTemplatesUtils" /* 17099 */;
import EmojiIconDefault from "EmojiIcon" /* 17106 */;
import GuildRoleSubscriptionBenefitUtils from "GuildRoleSubscriptionBenefitUtils" /* 17109 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5005 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let obj2;
const View = react_native.View;
const constants = GuildRoleSubscriptionsConstants.GuildRoleSubscriptionBenefitTypes;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let obj = { channelLabel: { flexDirection: "row", alignItems: "center" }, channelIcon: obj2 };
obj2 = { marginEnd: nativeDefault.space.PX_4 };
let closure_7 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? (function ChannelBenefitLabel(benefit) {
  let intl;
  let items;
  const obj = react2;
  const cResult = obj.c(10);
  benefit = benefit.benefit;
  const tmp4 = closure_7();
  const obj2 = GuildRoleSubscriptionTierTemplatesUtils;
  const channelWithTemplateFallback = obj2.useChannelWithTemplateFallback(benefit.ref_id);
  const tmp6 = useChannelNameDefault(channelWithTemplateFallback);
  if (null == channelWithTemplateFallback) {
    let first;
    const _Symbol = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const obj3 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: "[" + intl.string(intl2.t.bz1PZX) + "]" };
      const Text = tmp(5271).Text;
      intl = tmp(1125).intl;
      const _HermesInternal = HermesInternal;
      const tmp19 = hasOwnProperty(Text, obj3);
      cResult[0] = tmp19;
      first = tmp19;
    } else {
      first = cResult[0];
    }
    return first;
  } else {
    if (cResult[1] === channelWithTemplateFallback) {
      let tmp7;
      let tmp9;
      if (cResult[2] === tmp4.channelIcon) {
        tmp7 = cResult[3];
      }
      if (cResult[4] !== tmp6) {
        const obj4 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", lineClamp: 1, children: tmp6 };
        const tmp11 = hasOwnProperty(Text_Text.Text, obj4);
        cResult[4] = tmp6;
        cResult[5] = tmp11;
        tmp9 = tmp11;
      } else {
        tmp9 = cResult[5];
      }
      if (cResult[6] === tmp4.channelLabel) {
        if (cResult[7] === tmp7) {
          let tmp12;
          if (cResult[8] === tmp9) {
            tmp12 = cResult[9];
          }
          return tmp12;
        }
      }
      const obj5 = { style: tmp20, children: items };
      items = [tmp7, tmp9];
      const tmp15 = metroRequire(View, obj5);
      cResult[6] = tmp4.channelLabel;
      cResult[7] = tmp7;
      cResult[8] = tmp9;
      cResult[9] = tmp15;
      tmp12 = tmp15;
    }
    const obj6 = { style: tmp4.channelIcon, size: "xs", color: "interactive-text-default" };
    const tmpResult = GuildRoleSubscriptionBenefitUtils;
    const renderChannelIconResult = tmpResult.renderChannelIcon(channelWithTemplateFallback, obj6);
    cResult[1] = channelWithTemplateFallback;
    cResult[2] = tmp4.channelIcon;
    cResult[3] = renderChannelIconResult;
    tmp7 = renderChannelIconResult;
  }
}) : (function ChannelBenefitLabel(benefit) {
  let intl;
  let items;
  let tmp8;
  benefit = benefit.benefit;
  const tmp = closure_7();
  const obj = GuildRoleSubscriptionTierTemplatesUtils;
  const channelWithTemplateFallback = obj.useChannelWithTemplateFallback(benefit.ref_id);
  if (null == channelWithTemplateFallback) {
    const obj2 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: "[" + intl.string(intl2.t.bz1PZX) + "]" };
    const Text = tmp2(5271).Text;
    intl = tmp2(1125).intl;
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
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildRoleSubscriptionBenefitTableRow(arg0) {
  let benefit;
  let disabled;
  let end;
  let guildId;
  let onPress;
  let start;
  let tmp4;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(15);
  ({ guildId, benefit, onPress, disabled, start, end } = arg0);
  if (cResult[0] !== benefit) {
    let name;
    if (benefit.ref_type === constants.CHANNEL) {
      const obj2 = { benefit };
      name = hasOwnProperty(closure_8, obj2);
    } else {
      name = benefit.name;
    }
    cResult[0] = benefit;
    cResult[1] = name;
    tmp4 = name;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] !== benefit) {
    const tmpResult = GuildRoleSubscriptionBenefitUtils;
    const benefitEmojiId = tmpResult.getBenefitEmojiId(benefit);
    cResult[2] = benefit;
    cResult[3] = benefitEmojiId;
    tmp8 = benefitEmojiId;
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] === guildId) {
    let tmp10;
    if (cResult[5] === tmp8) {
      tmp10 = cResult[6];
    }
    const description = benefit.description;
    if (cResult[7] === disabled) {
      if (cResult[8] === end) {
        if (cResult[9] === tmp4) {
          if (cResult[10] === onPress) {
            if (cResult[11] === start) {
              if (cResult[12] === tmp10) {
                let tmp13;
                if (cResult[13] === description) {
                  tmp13 = cResult[14];
                }
                return tmp13;
              }
            }
          }
        }
      }
    }
    const obj3 = { start, end, icon: tmp10, label: tmp4, subLabel: description, subLabelLineClamp: 3, arrow: true, onPress, disabled };
    const tmp15 = hasOwnProperty(TableRow2.TableRow, obj3);
    cResult[7] = disabled;
    cResult[8] = end;
    cResult[9] = tmp4;
    cResult[10] = onPress;
    cResult[11] = start;
    cResult[12] = tmp10;
    cResult[13] = description;
    cResult[14] = tmp15;
    tmp13 = tmp15;
  }
  const tmp11 = hasOwnProperty(EmojiIconDefault, { guildId, id: tmp8 });
  cResult[4] = guildId;
  cResult[5] = tmp8;
  cResult[6] = tmp11;
  tmp10 = tmp11;
}) : (function GuildRoleSubscriptionBenefitTableRow(benefit) {
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
    name = hasOwnProperty(closure_8, obj);
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
});
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionBenefitTableRow.tsx");

export default tmp4;
