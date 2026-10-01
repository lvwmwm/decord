// Module ID: 12639
// Function ID: 12640
// Name: VibegrationsCustomWidgetAddOption
// Dependencies: [19, 17, 21, 4836, 576, 7687, 12640, 4800, 12641, 5435, 1115, 3715, 9611, 4832, 6630, 2]
// Exports: default

// Module 12639 (VibegrationsCustomWidgetAddOption)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import _modDef3715 from "module_3715" /* 3715 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 4800 */;
import UserProfileSharedStylesDefault from "UserProfileSharedStyles" /* 7687 */;
import VibegrationsCustomWidget from "VibegrationsCustomWidget" /* 12640 */;
import VibegrationsCustomWidgetSheet from "VibegrationsCustomWidgetSheet" /* 12641 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { row: obj2, copy: obj3 };
obj2 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12, marginBottom: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { flex: 1, gap: nativeDefault.space.PX_4 };
let closure_7 = createStyles(obj);
const result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsCustomWidgetAddOption.tsx");

export default function VibegrationsCustomWidgetAddOption() {
  let intl;
  let intl2;
  let intl3;
  let items;
  let items1;
  let items2;
  const tmp = closure_7();
  const tmp4 = UserProfileSharedStylesDefault();
  let obj = VibegrationsCustomWidget;
  const canConjureVibegrationsCustomWidget = obj.useCanConjureVibegrationsCustomWidget("VibegrationsCustomWidgetAddOption");
  let tmp8 = null;
  if (canConjureVibegrationsCustomWidget) {
    let obj2 = { accessibilityRole: "button", accessibilityLabel: intl.string(_modDef3715["27bu14"]), style: items, onPress: tmp7, children: items1 };
    const PressableOpacity = tmp5(5435).PressableOpacity;
    intl = tmp5(1115).intl;
    items = [tmp4.card, tmp.row];
    const obj3 = { size: "sm", color: nativeDefault.colors.ICON_MUTED };
    const MagicWandIcon = tmp5(9611).MagicWandIcon;
    items1 = [hasOwnProperty(MagicWandIcon, obj3), , ];
    const obj4 = { style: tmp.copy, children: items2 };
    const obj5 = { variant: "text-sm/semibold", color: "text-strong", children: intl2.string(_modDef3715["4OR+L+"]) };
    const Text = tmp5(4832).Text;
    intl2 = tmp5(1115).intl;
    items2 = [hasOwnProperty(Text, obj5), ];
    const obj6 = { variant: "text-xs/normal", color: "text-muted", children: intl3.string(_modDef3715["27bu14"]) };
    const Text2 = tmp5(4832).Text;
    intl3 = tmp5(1115).intl;
    items2[1] = hasOwnProperty(Text2, obj6);
    items1[1] = metroRequire(View, obj4);
    const obj7 = { size: "xs", color: nativeDefault.colors.ICON_MUTED };
    const ChevronSmallRightIcon = tmp5(6630).ChevronSmallRightIcon;
    items1[2] = hasOwnProperty(ChevronSmallRightIcon, obj7);
    tmp8 = metroRequire(PressableOpacity, obj2);
  }
  return tmp8;
};
