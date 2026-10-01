// Module ID: 17589
// Function ID: 17590
// Name: AllChannelsSwitch
// Dependencies: [19, 17, 14773, 1074, 21, 4836, 576, 5836, 4548, 9203, 1177, 17590, 1115, 17591, 2]
// Exports: default

// Module 17589 (AllChannelsSwitch)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import intl3 from "intl" /* 1115 */;
import native from "native" /* 1177 */;
import react_native2 from "react-native" /* 4548 */;
import TouchableHitBoxDefault from "TouchableHitBox" /* 9203 */;
import GuildRoleSubscriptionEditStore from "GuildRoleSubscriptionEditStore" /* 14773 */;
import AssetRegistryDefault from "AssetRegistry" /* 17590 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 17591 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import TextStyles_mod from "TextStyles" /* 5836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let obj4;
function Row(arg0) {
  let accessibilityRole;
  let accessibilityState;
  let disabled;
  let icon;
  let items;
  let label;
  let onPress;
  let selected;
  let tmp7;
  ({ selected, disabled } = arg0);
  ({ icon, label, onPress } = arg0);
  if (disabled === undefined) {
    disabled = false;
  }
  const tmp = closure_7();
  const obj = react_native2;
  const radioA11yNative = obj.useRadioA11yNative({ selected, disabled });
  ({ accessibilityRole, accessibilityState } = radioA11yNative);
  const obj2 = { style: tmp.row, accessibilityRole, accessibilityState, disabled: tmp7, onPress, children: items };
  tmp7 = selected;
  const tmp5 = metroRequire;
  const tmp6 = TouchableHitBoxDefault;
  if (!selected) {
    tmp7 = disabled;
  }
  const obj3 = { size: native.Icon.Sizes.MEDIUM, source: icon };
  const Icon = tmp2(1177).Icon;
  items = [hasOwnProperty(Icon, obj3), , ];
  const items1 = [tmp.rowLabel, ];
  let rowLabelSelected = selected;
  const LegacyText = tmp2(1177).LegacyText;
  if (selected) {
    rowLabelSelected = tmp.rowLabelSelected;
  }
  items1[1] = rowLabelSelected;
  items[1] = hasOwnProperty(LegacyText, { style: items1, numberOfLines: 1, ellipsizeMode: "tail", children: label });
  const obj4 = { style: tmp.rowIndicator, active: selected };
  items[2] = hasOwnProperty(native.RadioIndicator, obj4);
  return tmp5(tmp6, obj2);
}
const View = react_native.View;
const AllChannelAccessOptions = GuildRoleSubscriptionEditStore.AllChannelAccessOptions;
const Fonts = Constants.Fonts;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, row: { alignSelf: "stretch", alignItems: "center", flexDirection: "row", justifyContent: "flex-start", padding: 16 }, rowLabel: obj3, rowLabelSelected: obj4, rowIndicator: { marginStart: "auto" }, separator: { backgroundColor: nativeDefault.colors.BORDER_SUBTLE, height: 1, marginStart: 56 } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.sm };
createStyles = createStyles.createStyles;
obj3 = { flexShrink: 1, marginHorizontal: 16 };
let TextStyles = TextStyles_mod;
const merged = Object.assign(TextStyles(Fonts.PRIMARY_MEDIUM, nativeDefault.colors.TEXT_SUBTLE, 16));
obj4 = {};
TextStyles = TextStyles_mod;
const merged1 = Object.assign(TextStyles(Fonts.PRIMARY_SEMIBOLD, nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 16));
({ backgroundColor: nativeDefault.colors.BORDER_SUBTLE, height: 1, marginStart: 56 });
let closure_7 = createStyles(obj);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/AllChannelsSwitch.tsx");

export default function AllChannelsSwitch(style) {
  let channelAccessFormat;
  let disabled;
  let intl;
  let intl2;
  let items;
  let items1;
  ({ channelAccessFormat, setChannelAccessFormat: require, disabled } = style);
  style = style.style;
  if (disabled === undefined) {
    disabled = false;
  }
  const tmp = closure_7();
  const obj = { style: items, accessibilityRole: "radiogroup", accessibilityState: { disabled }, children: items1 };
  items = [tmp.container, style];
  const obj2 = {
    icon: AssetRegistryDefault,
    label: intl.string(intl3.t["vs2T+B"]),
    selected: channelAccessFormat === AllChannelAccessOptions.SOME_CHANNELS_ACCESS,
    onPress() {
      return require(AllChannelAccessOptions.SOME_CHANNELS_ACCESS);
    },
    disabled
  };
  intl = intl3.intl;
  items1 = [closure_5(Row, obj2), , ];
  const obj3 = { style: tmp.separator };
  items1[1] = closure_5(View, obj3);
  const obj4 = {
    icon: AssetRegistryDefault2,
    label: intl2.string(intl3.t.l4Tr7X),
    selected: channelAccessFormat === AllChannelAccessOptions.ALL_CHANNELS_ACCESS,
    onPress() {
      return require(AllChannelAccessOptions.ALL_CHANNELS_ACCESS);
    },
    disabled
  };
  intl2 = intl3.intl;
  items1[2] = closure_5(Row, obj4);
  return closure_6(View, obj);
};
