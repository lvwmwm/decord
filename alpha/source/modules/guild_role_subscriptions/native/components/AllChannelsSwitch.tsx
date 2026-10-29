// Module ID: 19850
// Function ID: 19851
// Name: AllChannelsSwitch
// Dependencies: [19, 17, 17094, 21, 558, 576, 6963, 19851, 1125, 7044, 19852, 7045, 2]

// Module 19850 (AllChannelsSwitch)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import intl3 from "intl" /* 1125 */;
import TableRow from "TableRow" /* 6963 */;
import TableRadioRow3 from "TableRadioRow" /* 7044 */;
import TableRadioGroup2 from "TableRadioGroup" /* 7045 */;
import GuildRoleSubscriptionEditStore from "GuildRoleSubscriptionEditStore" /* 17094 */;
import AssetRegistryDefault from "AssetRegistry" /* 19851 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 19852 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
const View = react_native.View;
const AllChannelAccessOptions = GuildRoleSubscriptionEditStore.AllChannelAccessOptions;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function AllChannelsSwitch(channelAccessFormat) {
  let disabled;
  let items;
  let style;
  const obj = react2;
  const cResult = obj.c(19);
  channelAccessFormat = channelAccessFormat.channelAccessFormat;
  const setChannelAccessFormat = channelAccessFormat.setChannelAccessFormat;
  ({ style, disabled } = channelAccessFormat);
  if (cResult[0] === channelAccessFormat) {
    let tmp5;
    let tmp8;
    let tmp7;
    let tmp13;
    let tmp18;
    let tmp17;
    let tmp23;
    if (cResult[1] === setChannelAccessFormat) {
      tmp5 = cResult[2];
    }
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const obj2 = { source: AssetRegistryDefault };
      const Icon = tmp(6963).TableRow.Icon;
      const tmp11 = hasOwnProperty(Icon, obj2);
      const intl = tmp(1125).intl;
      const stringResult = intl.string(intl3.t["vs2T+B"]);
      cResult[3] = tmp11;
      cResult[4] = stringResult;
      tmp8 = stringResult;
      tmp7 = tmp11;
    } else {
      tmp7 = cResult[3];
      tmp8 = cResult[4];
    }
    if (cResult[5] !== (undefined !== disabled && disabled)) {
      const obj3 = { value: AllChannelAccessOptions.SOME_CHANNELS_ACCESS, icon: tmp7, label: tmp8, disabled: undefined !== disabled && disabled };
      const tmp16 = hasOwnProperty(TableRadioRow3.TableRadioRow, obj3);
      cResult[5] = undefined !== disabled && disabled;
      cResult[6] = tmp16;
      tmp13 = tmp16;
    } else {
      tmp13 = cResult[6];
    }
    const _Symbol2 = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      const obj4 = { source: AssetRegistryDefault2 };
      const Icon2 = tmp(6963).TableRow.Icon;
      const tmp21 = hasOwnProperty(Icon2, obj4);
      const intl2 = tmp(1125).intl;
      const stringResult1 = intl2.string(intl3.t.l4Tr7X);
      cResult[7] = tmp21;
      cResult[8] = stringResult1;
      tmp18 = stringResult1;
      tmp17 = tmp21;
    } else {
      tmp17 = cResult[7];
      tmp18 = cResult[8];
    }
    if (cResult[9] !== (undefined !== disabled && disabled)) {
      const obj5 = { value: AllChannelAccessOptions.ALL_CHANNELS_ACCESS, icon: tmp17, label: tmp18, disabled: undefined !== disabled && disabled };
      const tmp26 = hasOwnProperty(TableRadioRow3.TableRadioRow, obj5);
      cResult[9] = undefined !== disabled && disabled;
      cResult[10] = tmp26;
      tmp23 = tmp26;
    } else {
      tmp23 = cResult[10];
    }
    if (cResult[11] === channelAccessFormat) {
      if (cResult[12] === tmp5) {
        if (cResult[13] === tmp13) {
          let tmp27;
          if (cResult[14] === tmp23) {
            tmp27 = cResult[15];
          }
          if (cResult[16] === style) {
            let tmp30;
            if (cResult[17] === tmp27) {
              tmp30 = cResult[18];
            }
            return tmp30;
          }
          const obj6 = { style, children: tmp27 };
          const tmp33 = hasOwnProperty(View, obj6);
          cResult[16] = style;
          cResult[17] = tmp27;
          cResult[18] = tmp33;
          tmp30 = tmp33;
        }
      }
    }
    const obj7 = { hasIcons: true, value: channelAccessFormat, onChange: tmp5, children: items };
    items = [tmp13, tmp23];
    const tmp29 = metroRequire(TableRadioGroup2.TableRadioGroup, obj7);
    cResult[11] = channelAccessFormat;
    cResult[12] = tmp5;
    cResult[13] = tmp13;
    cResult[14] = tmp23;
    cResult[15] = tmp29;
    tmp27 = tmp29;
  }
  const fn = function t(arg0) {
    if (arg0 !== channelAccessFormat) {
      setChannelAccessFormat(arg0);
    }
  };
  cResult[0] = channelAccessFormat;
  cResult[1] = setChannelAccessFormat;
  cResult[2] = fn;
  tmp5 = fn;
}) : (function AllChannelsSwitch(channelAccessFormat) {
  let Icon;
  let Icon2;
  let TableRadioGroup;
  let closure_129_1;
  let disabled;
  let intl;
  let intl2;
  let items;
  let obj2;
  let obj4;
  let obj6;
  channelAccessFormat = channelAccessFormat.channelAccessFormat;
  ({ setChannelAccessFormat: closure_129_1, disabled } = channelAccessFormat);
  const style = channelAccessFormat.style;
  if (disabled === undefined) {
    disabled = false;
  }
  const obj = { style, children: metroRequire(TableRadioGroup, obj2) };
  obj2 = {
    hasIcons: true,
    value: channelAccessFormat,
    onChange(arg0) {
      if (arg0 !== channelAccessFormat) {
        closure_1_1(arg0);
      }
    },
    children: items
  };
  TableRadioGroup = TableRadioGroup2.TableRadioGroup;
  const obj3 = { value: AllChannelAccessOptions.SOME_CHANNELS_ACCESS, icon: hasOwnProperty(Icon, obj4), label: intl.string(intl3.t["vs2T+B"]), disabled };
  const TableRadioRow = TableRadioRow3.TableRadioRow;
  obj4 = { source: AssetRegistryDefault };
  Icon = TableRow.TableRow.Icon;
  intl = intl3.intl;
  items = [hasOwnProperty(TableRadioRow, obj3), ];
  const obj5 = { value: AllChannelAccessOptions.ALL_CHANNELS_ACCESS, icon: hasOwnProperty(Icon2, obj6), label: intl2.string(intl3.t.l4Tr7X), disabled };
  const TableRadioRow2 = TableRadioRow3.TableRadioRow;
  obj6 = { source: AssetRegistryDefault2 };
  Icon2 = TableRow.TableRow.Icon;
  intl2 = intl3.intl;
  items[1] = hasOwnProperty(TableRadioRow2, obj5);
  return hasOwnProperty(View, obj);
});
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/AllChannelsSwitch.tsx");

export default tmp4;
