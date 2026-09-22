// Module ID: 13363
// Function ID: 13364
// Name: VibegrationsCustomWidgetAddOption
// Dependencies: [19, 17, 21, 4757, 576, 8514, 13364, 4724, 13365, 5341, 1115, 3678, 10414, 4753, 7456, 2]
// Exports: default

// Module 13363 (VibegrationsCustomWidgetAddOption)
import nativeDefault from "native" /* 576 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 4724 */;
import UserProfileSharedStylesDefault from "UserProfileSharedStyles" /* 8514 */;
import VibegrationsCustomWidget from "VibegrationsCustomWidget" /* 13364 */;
import VibegrationsCustomWidgetSheet from "VibegrationsCustomWidgetSheet" /* 13365 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4757);
let obj2 = { row: { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12, marginBottom: nativeDefault.space.PX_16 }, copy: null };
let obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12, marginBottom: nativeDefault.space.PX_16 };
obj2.copy = { flex: 1, gap: nativeDefault.space.PX_4 };
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsCustomWidgetAddOption.tsx");

export default function VibegrationsCustomWidgetAddOption() {
  const tmp = closure_7();
  const tmp4 = UserProfileSharedStylesDefault();
  const canConjureVibegrationsCustomWidget = VibegrationsCustomWidget.useCanConjureVibegrationsCustomWidget("VibegrationsCustomWidgetAddOption");
  let tmp8 = null;
  if (canConjureVibegrationsCustomWidget) {
    const obj2 = { accessibilityRole: "button", accessibilityLabel: null, style: null, onPress: null, children: null };
    const intl = tmp5(1115).intl;
    obj2.accessibilityLabel = intl.string(tmp2(3678)["27bu14"]);
    const items = [tmp4.card, tmp.row];
    obj2.style = items;
    obj2.onPress = tmp7;
    const obj3 = { size: "sm", color: tmp2(576).colors.ICON_MUTED };
    const items1 = [hasOwnProperty(tmp5(10414).MagicWandIcon, obj3), , ];
    const obj4 = { style: tmp.copy, children: null };
    const obj5 = { variant: "text-sm/semibold", color: "text-strong", children: null };
    const intl2 = tmp5(1115).intl;
    obj5.children = intl2.string(tmp2(3678)["4OR+L+"]);
    const items2 = [hasOwnProperty(tmp5(4753).Text, obj5), ];
    const obj6 = { variant: "text-xs/normal", color: "text-muted", children: null };
    const intl3 = tmp5(1115).intl;
    obj6.children = intl3.string(tmp2(3678)["27bu14"]);
    items2[1] = hasOwnProperty(tmp5(4753).Text, obj6);
    obj4.children = items2;
    items1[1] = timestampProducer(View, obj4);
    const obj7 = { size: "xs", color: tmp2(576).colors.ICON_MUTED };
    items1[2] = hasOwnProperty(tmp5(7456).ChevronSmallRightIcon, obj7);
    obj2.children = items1;
    tmp8 = timestampProducer(tmp5(5341).PressableOpacity, obj2);
  }
  return tmp8;
};
