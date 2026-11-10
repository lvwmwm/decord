// Module ID: 13950
// Function ID: 13951
// Name: FinalizeTraitTabs
// Dependencies: [19, 17, 6201, 21, 5376, 13951, 2118, 5142, 575, 1377, 1113, 13927, 5753, 6568, 13952, 5726, 13953, 3248, 11564, 2]
// Exports: FinalizeTraitTabs

// Module 13950 (FinalizeTraitTabs)
import nativeDefault from "native" /* 575 */;
import PlatformUtils from "PlatformUtils" /* 1377 */;
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5376 */;
import CheckpointPressable from "CheckpointPressable" /* 13927 */;
import showNitroLockedToastDefault from "showNitroLockedToast" /* 13953 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import CheckpointConstants from "CheckpointConstants" /* 6201 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5142 */;
import size from "module_2" /* 2 */;

const CheckpointPressableDefault = CheckpointPressable;

let CHECKPOINT_PRIMARY;
let c3;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
function TraitTab(arg0) {
  let accessibilityHint;
  let disabled;
  let isActive;
  let items1;
  let items2;
  let items3;
  let label;
  let onPress;
  let position;
  let tabCount;
  let trailing;
  ({ isActive, disabled } = arg0);
  ({ label, position, tabCount } = arg0);
  if (disabled === undefined) {
    disabled = false;
  }
  ({ accessibilityHint, onPress, trailing } = arg0);
  const tmp = closure_9();
  let formatToPlainStringResult;
  const obj = PlatformUtils;
  if (obj.isAndroid()) {
    const intl = tmp2(1113).intl;
    const obj2 = { position, tabCount };
    formatToPlainStringResult = intl.formatToPlainString(tmp2(1113).t["4EsQA1"], obj2);
  }
  const items = [formatToPlainStringResult, accessibilityHint];
  const found = items.filter((item) => null != item);
  let joined;
  if (found.length > 0) {
    joined = found.join(", ");
  }
  let tabContainerActive = isActive;
  const tmp6 = metroImportAll;
  const tmp7 = CheckpointPressableDefault;
  if (isActive) {
    tabContainerActive = tmp.tabContainerActive;
  }
  const obj3 = { size: "sm", containerStyle: tabContainerActive, style: items1, disabled: isActive || disabled, onPress, accessibilityRole: "tab", accessibilityHint: joined, accessibilityState: { selected: isActive, disabled }, shadowColor: hasOwnProperty, children: items3 };
  items1 = [tmp.tab, isActive && tmp.tabActive, disabled && tmp.tabDisabled];
  const obj4 = { variant: CheckpointPressable.CHECKPOINT_PRESSABLE_SIZES.sm.textVariant, style: items2, children: label };
  const Text = tmp2(5753).Text;
  items2 = [tmp.tabLabel, , ];
  const tmp8 = metroImportDefault;
  if (isActive) {
    isActive = tmp.tabLabelActive;
  }
  items2[1] = isActive;
  if (disabled) {
    disabled = tmp.tabLabelDisabled;
  }
  items2[2] = disabled;
  items3 = [tmp8(Text, obj4), trailing];
  return tmp6(tmp7, obj3);
}
({ ScrollView: c3, View: closure_4 } = react_native);
({ CHECKPOINT_DARK_CYAN: hasOwnProperty, CHECKPOINT_PRIMARY } = CheckpointConstants);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { scroll: { flexGrow: 0 }, scrollContent: obj2, row: obj3, tabContainerActive: { paddingRight: 0, paddingBottom: 0 }, tab: obj4, tabActive: { backgroundColor: nativeDefault.colors.BLACK, borderWidth: 1, borderColor: CHECKPOINT_PRIMARY }, tabDisabled: { backgroundColor: nativeDefault.colors.BLACK, borderColor: nativeDefault.colors.BORDER_NORMAL }, tabLabel: { color: nativeDefault.colors.BLACK, textTransform: "uppercase" }, tabLabelActive: { color: CHECKPOINT_PRIMARY, textTransform: "uppercase" }, tabLabelDisabled: { color: nativeDefault.colors.TEXT_SUBTLE } };
obj2 = { paddingHorizontal: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", gap: nativeDefault.space.PX_8 };
obj4 = { backgroundColor: CHECKPOINT_PRIMARY, borderWidth: 1, borderColor: nativeDefault.colors.BLACK };
({ backgroundColor: nativeDefault.colors.BLACK, borderWidth: 1, borderColor: CHECKPOINT_PRIMARY });
({ backgroundColor: nativeDefault.colors.BLACK, borderColor: nativeDefault.colors.BORDER_NORMAL });
({ color: nativeDefault.colors.BLACK, textTransform: "uppercase" });
({ color: nativeDefault.colors.TEXT_SUBTLE });
let closure_9 = createStyles(obj);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/customization/FinalizeTraitTabs.tsx");

export function FinalizeTraitTabs(activeCustomizationOption) {
  let items;
  let obj2;
  let str2;
  let stringResult;
  let tabCount;
  let tmp14;
  let tmp15;
  activeCustomizationOption = activeCustomizationOption.activeCustomizationOption;
  const onSelectOption = activeCustomizationOption.onSelectOption;
  let flag = activeCustomizationOption.disableSwitching;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = activeCustomizationOption.disabled;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let c6;
  let tmp = closure_9();
  let tmp2 = activeCustomizationOption;
  let tmp3 = flag;
  const tmp4 = activeCustomizationOption(flag[13]).CUSTOMIZATION_OPTION_TO_TRAIT[activeCustomizationOption];
  let closure_4 = tmp4;
  let nitroLockedMessage;
  if (flag) {
    if (!flag2) {
      const tmp2Result = tmp2(tmp3[13]);
      nitroLockedMessage = tmp2Result.getNitroLockedMessage(tmp4);
    }
  }
  const arr = onSelectOption(tmp3[14])(activeCustomizationOption, onSelectOption);
  const sum = arr.length + 1;
  c6 = sum;
  const FINALIZE_TRAIT_TAB_ITEMS = tmp2(tmp3[14]).FINALIZE_TRAIT_TAB_ITEMS;
  const hasItem = FINALIZE_TRAIT_TAB_ITEMS.includes(activeCustomizationOption);
  const tmp9 = !hasItem;
  const tmp2Result5 = tmp2(tmp3[15]);
  const token = tmp2Result5.useToken("text-subtle");
  let tmp11 = token;
  if (!flag) {
    tmp11 = token;
    if (!flag2) {
      let BLACK;
      if (hasItem) {
        BLACK = tmp6(tmp3[8]).colors.BLACK;
      } else {
        BLACK = c6;
      }
      tmp11 = BLACK;
    }
  }
  let str;
  const tmp13 = flag2;
  const tmp2Result6 = tmp2(tmp3[9]);
  if (tmp2Result6.isIOS()) {
    str = "tabbar";
  }
  let obj = { horizontal: true, accessibilityRole: str, alwaysBounceHorizontal: false, style: tmp.scroll, contentContainerStyle: tmp.scrollContent, children: tmp14(tmp15, obj2) };
  obj2 = { style: tmp.row, accessibilityRole: str2, children: items };
  str2 = undefined;
  tmp14 = closure_8;
  tmp15 = closure_4;
  const tmp2Result7 = tmp2(tmp3[9]);
  if (tmp2Result7.isAndroid()) {
    str2 = "tablist";
  }
  items = [
    arr.map((item, index) => {
      let obj2;
      let closure_0 = item;
      const tmp = closure_1_7;
      let tmp2 = TraitTab;
      const obj = {
        label: obj2.getCustomizationOptionName(item),
        position: index + 1,
        tabCount,
        isActive: closure_0 === item,
        disabled: flag || flag2,
        accessibilityHint: nitroLockedMessage,
        onPress() {
          const tmp2 = flag2;
          if (!tmp2) {
            const tmp3 = flag;
            if (tmp3) {
              showNitroLockedToastDefault(closure_4);
            } else {
              onSelectOption(tmp);
            }
          }
        }
      };
      obj2 = activeCustomizationOption(flag[13]);
      return tmp(tmp2, obj, item);
    }),

  ];
  const obj3 = {
    position: sum,
    tabCount: sum,
    label: stringResult,
    isActive: tmp9,
    disabled: flag,
    accessibilityHint: nitroLockedMessage,
    onPress: function handleMorePress() {
      const tmp = flag2;
      if (!tmp) {
        const tmp2 = flag;
        if (tmp2) {
          showNitroLockedToastDefault(closure_4);
        } else {
          const obj = { selectedOption: activeCustomizationOption, onSelectOption };
          const obj2 = ActionSheetActionCreatorsDefault;
          obj2.openLazy(asyncRequire(13951, dependencyMap.paths), "CheckpointFinalizeTraitPicker", obj);
        }
      }
    },
    trailing: closure_7(tmp2(tmp3[18]).ChevronSmallDownIcon, { color: tmp11, size: "xs" })
  };
  const tmp16 = TraitTab;
  if (hasItem) {
    const intl = tmp2(tmp3[10]).intl;
    stringResult = intl.string(tmp6(tmp3[17])["iXpQc+"]);
  } else {
    const tmp2Result8 = tmp2(tmp3[13]);
    stringResult = tmp2Result8.getCustomizationOptionName(activeCustomizationOption);
  }
  if (!flag) {
    flag = flag2;
  }
  if (nitroLockedMessage == null) {
    const intl2 = tmp2(tmp3[10]).intl;
    nitroLockedMessage = intl2.string(tmp6(tmp3[17])["8cGmXF"]);
  }
  items[1] = closure_7(tmp16, obj3);
  return closure_7(tmp13, obj);
}
