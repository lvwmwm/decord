// Module ID: 20294
// Function ID: 20295
// Name: AllChannelsSwitch
// Dependencies: [19, 17, 17489, 21, 7202, 7205, 7119, 20295, 1113, 20296, 2]
// Exports: default

// Module 20294 (AllChannelsSwitch)
import react_native from "react-native" /* 17 */;
import intl3 from "intl" /* 1113 */;
import TableRow from "TableRow" /* 7119 */;
import TableRadioGroup2 from "TableRadioGroup" /* 7202 */;
import TableRadioRow3 from "TableRadioRow" /* 7205 */;
import GuildRoleSubscriptionEditStore from "GuildRoleSubscriptionEditStore" /* 17489 */;
import AssetRegistryDefault from "AssetRegistry" /* 20295 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 20296 */;
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
