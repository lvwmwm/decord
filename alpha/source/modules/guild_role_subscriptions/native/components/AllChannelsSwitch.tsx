// Module ID: 19913
// Function ID: 19914
// Name: AllChannelsSwitch
// Dependencies: [19, 17, 17148, 21, 7052, 7055, 6969, 19914, 1114, 19915, 2]
// Exports: default

// Module 19913 (AllChannelsSwitch)
import react_native from "react-native" /* 17 */;
import intl3 from "intl" /* 1114 */;
import TableRow from "TableRow" /* 6969 */;
import TableRadioGroup2 from "TableRadioGroup" /* 7052 */;
import TableRadioRow3 from "TableRadioRow" /* 7055 */;
import GuildRoleSubscriptionEditStore from "GuildRoleSubscriptionEditStore" /* 17148 */;
import AssetRegistryDefault from "AssetRegistry" /* 19914 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 19915 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
const View = react_native.View;
const AllChannelAccessOptions = GuildRoleSubscriptionEditStore.AllChannelAccessOptions;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/AllChannelsSwitch.tsx");

export default function AllChannelsSwitch(channelAccessFormat) {
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
};
