// Module ID: 13961
// Function ID: 13962
// Name: FinalizeTraitTabs
// Dependencies: [19, 17, 6231, 21, 5406, 13962, 2118, 5170, 575, 1377, 1113, 13938, 5783, 6598, 13963, 3248, 5756, 13964, 11587, 2]
// Exports: FinalizeTraitTabs

// Module 13961 (FinalizeTraitTabs)
import nativeDefault from "native" /* 575 */;
import PlatformUtils from "PlatformUtils" /* 1377 */;
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5406 */;
import CheckpointPressable from "CheckpointPressable" /* 13938 */;
import showNitroLockedToastDefault from "showNitroLockedToast" /* 13964 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import CheckpointConstants from "CheckpointConstants" /* 6231 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5170 */;
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
  const Text = tmp2(5783).Text;
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
  let customizationOptionName;
  let items;
  let obj2;
  let str2;
  let stringResult;
  let tabCount;
  let tmp15;
  let tmp16;
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
  let isMoreMenuActive;
  let moreTabOption;
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
  const tmp2Result6 = tmp2(tmp3[14]);
  const finalizeMoreTabOption = tmp2Result6.useFinalizeMoreTabOption(activeCustomizationOption);
  isMoreMenuActive = finalizeMoreTabOption.isMoreMenuActive;
  moreTabOption = finalizeMoreTabOption.moreTabOption;
  if (isMoreMenuActive) {
    const intl = tmp2(tmp3[10]).intl;
    stringResult = intl.string(onSelectOption(tmp3[15])["8cGmXF"]);
  }
  const tmp2Result7 = tmp2(tmp3[16]);
  const token = tmp2Result7.useToken("text-subtle");
  let tmp12 = token;
  if (!flag) {
    tmp12 = token;
    if (!flag2) {
      let BLACK;
      if (isMoreMenuActive) {
        BLACK = c6;
      } else {
        BLACK = tmp6(tmp3[8]).colors.BLACK;
      }
      tmp12 = BLACK;
    }
  }
  let str;
  const tmp14 = flag2;
  const tmp2Result8 = tmp2(tmp3[9]);
  if (tmp2Result8.isIOS()) {
    str = "tabbar";
  }
  let obj = { horizontal: true, accessibilityRole: str, alwaysBounceHorizontal: false, style: tmp.scroll, contentContainerStyle: tmp.scrollContent, children: tmp15(tmp16, obj2) };
  obj2 = { style: tmp.row, accessibilityRole: str2, children: items };
  str2 = undefined;
  tmp15 = moreTabOption;
  tmp16 = closure_4;
  const tmp2Result9 = tmp2(tmp3[9]);
  if (tmp2Result9.isAndroid()) {
    str2 = "tablist";
  }
  items = [
    arr.map((item, index) => {
      let obj2;
      let closure_0 = item;
      const tmp = isMoreMenuActive;
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
    label: customizationOptionName,
    isActive: isMoreMenuActive,
    disabled: flag,
    accessibilityHint: nitroLockedMessage,
    onPress: function handleMorePress() {
      const tmp = flag2;
      if (!tmp) {
        const tmp2 = flag;
        if (tmp2) {
          showNitroLockedToastDefault(closure_4);
        } else {
          const tmp3 = isMoreMenuActive;
          if (!tmp3) {
            if (null != moreTabOption) {
              onSelectOption(tmp4);
            }
          }
          const obj = { selectedOption: activeCustomizationOption, onSelectOption };
          const obj2 = ActionSheetActionCreatorsDefault;
          obj2.openLazy(asyncRequire(13962, dependencyMap.paths), "CheckpointFinalizeTraitPicker", obj);
        }
      }
    },
    trailing: isMoreMenuActive(tmp2(tmp3[18]).ChevronSmallDownIcon, { color: tmp12, size: "xs" })
  };
  const tmp17 = TraitTab;
  if (null != moreTabOption) {
    const tmp2Result10 = tmp2(tmp3[13]);
    customizationOptionName = tmp2Result10.getCustomizationOptionName(moreTabOption);
  } else {
    const intl2 = tmp2(tmp3[10]).intl;
    customizationOptionName = intl2.string(tmp6(tmp3[15])["iXpQc+"]);
  }
  if (!flag) {
    flag = flag2;
  }
  if (nitroLockedMessage == null) {
    nitroLockedMessage = stringResult;
  }
  items[1] = isMoreMenuActive(tmp17, obj3);
  return isMoreMenuActive(tmp14, obj);
}
