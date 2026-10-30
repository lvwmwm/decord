// Module ID: 13639
// Function ID: 13640
// Name: FinalizeTraitTabs
// Dependencies: [19, 17, 6061, 21, 6429, 5253, 13640, 1995, 5009, 575, 1376, 1114, 13627, 5619, 5591, 13641, 3091, 11377, 2]
// Exports: FinalizeTraitTabs

// Module 13639 (FinalizeTraitTabs)
import nativeDefault from "native" /* 575 */;
import PlatformUtils from "PlatformUtils" /* 1376 */;
import asyncRequire from "asyncRequire" /* 1995 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import CheckpointCustomizationUtils from "CheckpointCustomizationUtils" /* 6429 */;
import CheckpointPressable from "CheckpointPressable" /* 13627 */;
import showNitroLockedToastDefault from "showNitroLockedToast" /* 13641 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import CheckpointConstants from "CheckpointConstants" /* 6061 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
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
  let trailing;
  ({ isActive, disabled } = arg0);
  ({ label, position } = arg0);
  if (disabled === undefined) {
    disabled = false;
  }
  ({ accessibilityHint, onPress, trailing } = arg0);
  const tmp = closure_11();
  let formatToPlainStringResult;
  const obj = PlatformUtils;
  if (obj.isAndroid()) {
    const intl = tmp2(1114).intl;
    const obj2 = { position, tabCount };
    formatToPlainStringResult = intl.formatToPlainString(tmp2(1114).t["4EsQA1"], obj2);
  }
  items = [formatToPlainStringResult, accessibilityHint];
  const found = items.filter((item) => null != item);
  let joined;
  if (found.length > 0) {
    joined = found.join(", ");
  }
  let tabContainerActive = isActive;
  const tmp7 = metroImportAll;
  const tmp8 = CheckpointPressableDefault;
  if (isActive) {
    tabContainerActive = tmp.tabContainerActive;
  }
  const obj3 = { size: "sm", containerStyle: tabContainerActive, style: items1, disabled: isActive || disabled, onPress, accessibilityRole: "tab", accessibilityHint: joined, accessibilityState: { selected: isActive, disabled }, shadowColor: hasOwnProperty, children: items3 };
  items1 = [tmp.tab, isActive && tmp.tabActive, disabled && tmp.tabDisabled];
  const obj4 = { variant: CheckpointPressable.CHECKPOINT_PRESSABLE_SIZES.sm.textVariant, style: items2, children: label };
  const Text = tmp2(5619).Text;
  items2 = [tmp.tabLabel, , ];
  const tmp9 = metroImportDefault;
  if (isActive) {
    isActive = tmp.tabLabelActive;
  }
  items2[1] = isActive;
  if (disabled) {
    disabled = tmp.tabLabelDisabled;
  }
  items2[2] = disabled;
  items3 = [tmp9(Text, obj4), trailing];
  return tmp7(tmp8, obj3);
}
({ ScrollView: c3, View: closure_4 } = react_native);
({ CHECKPOINT_DARK_CYAN: hasOwnProperty, CHECKPOINT_PRIMARY } = CheckpointConstants);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let items = [CheckpointCustomizationUtils.CheckpointCustomizationOption.BASE, CheckpointCustomizationUtils.CheckpointCustomizationOption.OUTFIT_COLOR];
let closure_10 = items.length + 1;
let createStyles = createStyles_mod;
let obj = { scrollContent: obj2, row: obj3, tabContainerActive: { paddingRight: 0, paddingBottom: 0 }, tab: obj4, tabActive: { backgroundColor: nativeDefault.colors.BLACK, borderWidth: 1, borderColor: CHECKPOINT_PRIMARY }, tabDisabled: { backgroundColor: nativeDefault.colors.BLACK, borderColor: nativeDefault.colors.BORDER_NORMAL }, tabLabel: { color: nativeDefault.colors.BLACK, textTransform: "uppercase" }, tabLabelActive: { color: CHECKPOINT_PRIMARY, textTransform: "uppercase" }, tabLabelDisabled: { color: nativeDefault.colors.TEXT_SUBTLE } };
obj2 = { paddingHorizontal: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", gap: nativeDefault.space.PX_8 };
obj4 = { backgroundColor: CHECKPOINT_PRIMARY, borderWidth: 1, borderColor: nativeDefault.colors.BLACK };
({ backgroundColor: nativeDefault.colors.BLACK, borderWidth: 1, borderColor: CHECKPOINT_PRIMARY });
({ backgroundColor: nativeDefault.colors.BLACK, borderColor: nativeDefault.colors.BORDER_NORMAL });
({ color: nativeDefault.colors.BLACK, textTransform: "uppercase" });
({ color: nativeDefault.colors.TEXT_SUBTLE });
let closure_11 = createStyles(obj);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/customization/FinalizeTraitTabs.tsx");

export function FinalizeTraitTabs(activeCustomizationOption) {
  let disableSwitching;
  let obj2;
  let onSelectOption;
  let str2;
  let stringResult;
  let tmp13;
  let tmp14;
  activeCustomizationOption = activeCustomizationOption.activeCustomizationOption;
  ({ onSelectOption: importDefault, disableSwitching } = activeCustomizationOption);
  if (disableSwitching === undefined) {
    disableSwitching = false;
  }
  let flag = activeCustomizationOption.disabled;
  if (flag === undefined) {
    flag = false;
  }
  let tmp = closure_11();
  let tmp2 = activeCustomizationOption;
  let tmp3 = disableSwitching;
  const tmp4 = activeCustomizationOption(disableSwitching[4]).CUSTOMIZATION_OPTION_TO_TRAIT[activeCustomizationOption];
  let closure_4 = tmp4;
  let nitroLockedMessage;
  if (disableSwitching) {
    if (!flag) {
      const tmp2Result = tmp2(tmp3[4]);
      nitroLockedMessage = tmp2Result.getNitroLockedMessage(tmp4);
    }
  }
  const hasItem = items.includes(activeCustomizationOption);
  const tmp7 = !hasItem;
  const tmp2Result5 = tmp2(tmp3[14]);
  const token = tmp2Result5.useToken("text-subtle");
  let tmp9 = token;
  const arr = items;
  if (!disableSwitching) {
    tmp9 = token;
    if (!flag) {
      let BLACK;
      if (hasItem) {
        BLACK = require("native").colors.BLACK;
      } else {
        BLACK = CHECKPOINT_PRIMARY;
      }
      tmp9 = BLACK;
    }
  }
  let str;
  const tmp12 = flag;
  const tmp2Result6 = tmp2(tmp3[10]);
  if (tmp2Result6.isIOS()) {
    str = "tabbar";
  }
  let obj = { horizontal: true, accessibilityRole: str, alwaysBounceHorizontal: false, contentContainerStyle: tmp.scrollContent, children: tmp13(tmp14, obj2) };
  obj2 = { style: tmp.row, accessibilityRole: str2, children: items };
  str2 = undefined;
  tmp13 = closure_8;
  tmp14 = closure_4;
  const tmp2Result7 = tmp2(tmp3[10]);
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
        isActive: closure_0 === item,
        disabled: disableSwitching || flag,
        accessibilityHint: nitroLockedMessage,
        onPress() {
          const tmp2 = flag;
          if (!tmp2) {
            const tmp3 = disableSwitching;
            if (tmp3) {
              showNitroLockedToastDefault(closure_4);
            } else {
              importDefault(tmp);
            }
          }
        }
      };
      obj2 = activeCustomizationOption(disableSwitching[4]);
      return tmp(tmp2, obj, item);
    }),

  ];
  const obj3 = {
    position,
    label: stringResult,
    isActive: tmp7,
    disabled: disableSwitching,
    accessibilityHint: nitroLockedMessage,
    onPress: function handleMorePress() {
      const tmp = flag;
      if (!tmp) {
        const tmp2 = disableSwitching;
        if (tmp2) {
          showNitroLockedToastDefault(closure_4);
        } else {
          const obj = { selectedOption: activeCustomizationOption, onSelectOption: importDefault };
          const obj2 = ActionSheetActionCreatorsDefault;
          obj2.openLazy(asyncRequire(13640, dependencyMap.paths), "CheckpointFinalizeTraitPicker", obj);
        }
      }
    },
    trailing: closure_7(tmp2(tmp3[17]).ChevronSmallDownIcon, { color: tmp9, size: "xs" })
  };
  const tmp15 = TraitTab;
  if (hasItem) {
    const intl = tmp2(tmp3[11]).intl;
    stringResult = intl.string(require("module_3091")["iXpQc+"]);
  } else {
    const tmp2Result8 = tmp2(tmp3[4]);
    stringResult = tmp2Result8.getCustomizationOptionName(activeCustomizationOption);
  }
  if (!disableSwitching) {
    disableSwitching = flag;
  }
  if (nitroLockedMessage == null) {
    const intl2 = tmp2(tmp3[11]).intl;
    nitroLockedMessage = intl2.string(require("module_3091")["8cGmXF"]);
  }
  items[1] = closure_7(tmp15, obj3);
  return closure_7(tmp12, obj);
}
