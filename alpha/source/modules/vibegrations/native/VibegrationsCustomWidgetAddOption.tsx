// Module ID: 12901
// Function ID: 12902
// Name: VibegrationsCustomWidgetAddOption
// Dependencies: [19, 17, 21, 4890, 587, 558, 576, 7913, 12902, 4854, 12903, 1126, 3723, 12500, 4886, 6708, 5909, 2]

// Module 12901 (VibegrationsCustomWidgetAddOption)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import _modDef3723 from "module_3723" /* 3723 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 4854 */;
import Pressables from "Pressables" /* 5909 */;
import UserProfileSharedStylesDefault from "UserProfileSharedStyles" /* 7913 */;
import VibegrationsCustomWidget from "VibegrationsCustomWidget" /* 12902 */;
import VibegrationsCustomWidgetSheet from "VibegrationsCustomWidgetSheet" /* 12903 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const VibegrationsCustomWidgetSheetDefault = VibegrationsCustomWidgetSheet;

let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
const VibegrationsCustomWidgetAddOption = "VibegrationsCustomWidgetAddOption";
let createStyles = createStyles_mod;
let obj = { row: obj2, copy: obj3 };
obj2 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12, marginBottom: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { flex: 1, gap: nativeDefault.space.PX_4 };
let closure_8 = createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  let intl2;
  let intl3;
  let items;
  let items1;
  let obj = react2;
  const cResult = obj.c(14);
  const tmp4 = closure_8();
  const tmp6 = UserProfileSharedStylesDefault();
  let obj2 = VibegrationsCustomWidget;
  const canConjureVibegrationsCustomWidget = obj2.useCanConjureVibegrationsCustomWidget(VibegrationsCustomWidgetAddOption);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t() {
      const obj = ActionSheetActionCreators;
      const obj2 = { content: closure_1_5(VibegrationsCustomWidgetSheetDefault, {}), key: VibegrationsCustomWidgetSheet.VIBEGRATIONS_CUSTOM_WIDGET_SHEET_KEY, stackingBehavior: "stack" };
      obj.showActionSheet(obj2);
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  let tmp9 = null;
  if (canConjureVibegrationsCustomWidget) {
    let tmp10;
    const _Symbol = Symbol;
    if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = tmp(1126).intl;
      const stringResult = intl.string(_modDef3723["27bu14"]);
      cResult[1] = stringResult;
      tmp10 = stringResult;
    } else {
      tmp10 = cResult[1];
    }
    if (cResult[2] === tmp6.card) {
      let tmp12;
      let tmp13;
      let tmp16;
      let tmp19;
      let tmp22;
      let tmp26;
      if (cResult[3] === tmp4.row) {
        tmp12 = cResult[4];
      }
      const _Symbol2 = Symbol;
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const obj3 = { size: "sm", color: nativeDefault.colors.ICON_MUTED };
        const MagicWandIcon = tmp(12500).MagicWandIcon;
        const tmp15 = hasOwnProperty(MagicWandIcon, obj3);
        cResult[5] = tmp15;
        tmp13 = tmp15;
      } else {
        tmp13 = cResult[5];
      }
      const _Symbol3 = Symbol;
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const obj4 = { variant: "text-sm/semibold", color: "text-strong", children: intl2.string(_modDef3723["4OR+L+"]) };
        const Text = tmp(4886).Text;
        intl2 = tmp(1126).intl;
        const tmp18 = hasOwnProperty(Text, obj4);
        cResult[6] = tmp18;
        tmp16 = tmp18;
      } else {
        tmp16 = cResult[6];
      }
      const _Symbol4 = Symbol;
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        const obj5 = { variant: "text-xs/normal", color: "text-muted", children: intl3.string(_modDef3723["27bu14"]) };
        const Text2 = tmp(4886).Text;
        intl3 = tmp(1126).intl;
        const tmp21 = hasOwnProperty(Text2, obj5);
        cResult[7] = tmp21;
        tmp19 = tmp21;
      } else {
        tmp19 = cResult[7];
      }
      if (cResult[8] !== tmp4.copy) {
        const obj6 = { style: tmp4.copy, children: items };
        items = [tmp16, tmp19];
        const tmp25 = metroRequire(View, obj6);
        cResult[8] = tmp4.copy;
        cResult[9] = tmp25;
        tmp22 = tmp25;
      } else {
        tmp22 = cResult[9];
      }
      const _Symbol5 = Symbol;
      if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
        const obj7 = { size: "xs", color: nativeDefault.colors.ICON_MUTED };
        const ChevronSmallRightIcon = tmp(6708).ChevronSmallRightIcon;
        const tmp28 = hasOwnProperty(ChevronSmallRightIcon, obj7);
        cResult[10] = tmp28;
        tmp26 = tmp28;
      } else {
        tmp26 = cResult[10];
      }
      if (cResult[11] === tmp12) {
        let tmp29;
        if (cResult[12] === tmp22) {
          tmp29 = cResult[13];
        }
        tmp9 = tmp29;
      }
      const obj8 = { accessibilityRole: "button", accessibilityLabel: tmp10, style: tmp12, onPress: first, children: items1 };
      items1 = [tmp13, tmp22, tmp26];
      const tmp31 = metroRequire(Pressables.PressableOpacity, obj8);
      cResult[11] = tmp12;
      cResult[12] = tmp22;
      cResult[13] = tmp31;
      tmp29 = tmp31;
    }
    const items2 = [tmp6.card, tmp4.row];
    cResult[2] = tmp6.card;
    cResult[3] = tmp4.row;
    cResult[4] = items2;
    tmp12 = items2;
  }
  return tmp9;
}) : (() => {
  let intl;
  let intl2;
  let intl3;
  let items;
  let items1;
  let items2;
  const tmp = closure_8();
  const tmp4 = UserProfileSharedStylesDefault();
  let obj = VibegrationsCustomWidget;
  const canConjureVibegrationsCustomWidget = obj.useCanConjureVibegrationsCustomWidget(VibegrationsCustomWidgetAddOption);
  let tmp8 = null;
  if (canConjureVibegrationsCustomWidget) {
    let obj2 = { accessibilityRole: "button", accessibilityLabel: intl.string(_modDef3723["27bu14"]), style: items, onPress: tmp7, children: items1 };
    const PressableOpacity = tmp5(5909).PressableOpacity;
    intl = tmp5(1126).intl;
    items = [tmp4.card, tmp.row];
    const obj3 = { size: "sm", color: nativeDefault.colors.ICON_MUTED };
    const MagicWandIcon = tmp5(12500).MagicWandIcon;
    items1 = [hasOwnProperty(MagicWandIcon, obj3), , ];
    const obj4 = { style: tmp.copy, children: items2 };
    const obj5 = { variant: "text-sm/semibold", color: "text-strong", children: intl2.string(_modDef3723["4OR+L+"]) };
    const Text = tmp5(4886).Text;
    intl2 = tmp5(1126).intl;
    items2 = [hasOwnProperty(Text, obj5), ];
    const obj6 = { variant: "text-xs/normal", color: "text-muted", children: intl3.string(_modDef3723["27bu14"]) };
    const Text2 = tmp5(4886).Text;
    intl3 = tmp5(1126).intl;
    items2[1] = hasOwnProperty(Text2, obj6);
    items1[1] = metroRequire(View, obj4);
    const obj7 = { size: "xs", color: nativeDefault.colors.ICON_MUTED };
    const ChevronSmallRightIcon = tmp5(6708).ChevronSmallRightIcon;
    items1[2] = hasOwnProperty(ChevronSmallRightIcon, obj7);
    tmp8 = metroRequire(PressableOpacity, obj2);
  }
  return tmp8;
});
const result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsCustomWidgetAddOption.tsx");

export default tmp4;
