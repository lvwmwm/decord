// Module ID: 12722
// Function ID: 12723
// Name: FinalizeTraitTabs
// Dependencies: [19, 17, 4824, 5877, 21, 575, 5037, 12723, 2121, 4823, 1380, 1113, 12659, 5414, 6244, 504, 5387, 12666, 3339, 12724, 2]
// Exports: FinalizeTraitTabs

// Module 12722 (FinalizeTraitTabs)
import nativeDefault from "native" /* 575 */;
import PlatformUtils from "PlatformUtils" /* 1380 */;
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5037 */;
import CheckpointPressable from "CheckpointPressable" /* 12659 */;
import showNitroLockedToastDefault from "showNitroLockedToast" /* 12666 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 4824 */;
import CheckpointConstants from "CheckpointConstants" /* 5877 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4823 */;
import size from "module_2" /* 2 */;

const CheckpointPressableDefault = CheckpointPressable;
let map;

let CHECKPOINT_PRIMARY;
let c10;
let c9;
let closure_4;
let hasOwnProperty;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
function TraitTab(arg0) {
  let accessibilityHint;
  let accessibilityLabel;
  let disabled;
  let isActive;
  let isBlocked;
  let items1;
  let items2;
  let items3;
  let label;
  let obj4;
  let obj5;
  let onLayout;
  let onPress;
  let position;
  let tabCount;
  let tmp8;
  let tmp9;
  let trailing;
  ({ label, isActive, isBlocked } = arg0);
  ({ accessibilityLabel, position, tabCount, disabled, accessibilityHint, onPress, onLayout, trailing } = arg0);
  const tmp = closure_12();
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
  const obj3 = { onLayout, children: tmp8(tmp9, obj4) };
  const tmp7 = hasOwnProperty;
  tmp8 = authStore;
  tmp9 = CheckpointPressableDefault;
  if (isActive) {
    tabContainerActive = tmp.tabContainerActive;
  }
  obj4 = { size: "sm", containerStyle: tabContainerActive, style: items1, disabled: isActive || isBlocked, onPress, accessibilityRole: "tab", accessibilityLabel, accessibilityHint: joined, accessibilityState: obj5, shadowColor: metroImportDefault, children: items3 };
  items1 = [tmp.tab, isActive && tmp.tabActive, isBlocked && tmp.tabDisabled];
  let tmp6Result = null != label;
  obj5 = { selected: isActive, disabled: isBlocked || disabled };
  if (tmp6Result) {
    const obj6 = { variant: CheckpointPressable.CHECKPOINT_PRESSABLE_SIZES.sm.textVariant, style: items2, children: label };
    const Text = tmp2(5414).Text;
    items2 = [tmp.tabLabel, , ];
    if (isActive) {
      isActive = tmp.tabLabelActive;
    }
    items2[1] = isActive;
    if (isBlocked) {
      isBlocked = tmp.tabLabelDisabled;
    }
    items2[2] = isBlocked;
    tmp6Result = tmp6(Text, obj6);
  }
  items3 = [tmp6Result, trailing];
  return React4(tmp7, obj3);
}
({ ScrollView: closure_4, View: hasOwnProperty } = react_native);
({ CHECKPOINT_DARK_CYAN: metroImportDefault, CHECKPOINT_PRIMARY } = CheckpointConstants);
({ jsx: c9, jsxs: c10 } = Fragment);
const PX_16 = nativeDefault.space.PX_16;
let createStyles = createStyles_mod;
let obj = { scroll: { flexGrow: 0 }, scrollContent: { paddingHorizontal: PX_16 }, row: obj2, tabContainerActive: { paddingRight: 0, paddingBottom: 0 }, tab: obj3, tabActive: obj4, tabDisabled: obj5, tabLabel: obj6, tabLabelActive: { color: CHECKPOINT_PRIMARY, textTransform: "uppercase" }, tabLabelDisabled: { color: nativeDefault.colors.TEXT_SUBTLE } };
obj2 = { flexDirection: "row", gap: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: CHECKPOINT_PRIMARY, borderWidth: 1, borderColor: nativeDefault.colors.BLACK };
obj4 = { backgroundColor: nativeDefault.colors.BLACK, borderWidth: 1, borderColor: CHECKPOINT_PRIMARY };
obj5 = { backgroundColor: nativeDefault.colors.BLACK, borderColor: nativeDefault.colors.BORDER_NORMAL };
obj6 = { color: nativeDefault.colors.BLACK, textTransform: "uppercase" };
({ color: nativeDefault.colors.TEXT_SUBTLE });
let closure_12 = createStyles(obj);
let result = size.fileFinishedImporting("modules/checkpoint/native/components/customization/FinalizeTraitTabs.tsx");

export function FinalizeTraitTabs(activeCustomizationOption) {
  let formatToPlainStringResult;
  let isCurrentTraitBlocked;
  let items2;
  let obj2;
  let onSelectOption;
  let str2;
  let str3;
  let tabCount;
  let tmp18;
  let tmp19;
  let tmp21;
  activeCustomizationOption = activeCustomizationOption.activeCustomizationOption;
  const moreTabOption = activeCustomizationOption.moreTabOption;
  ({ onSelectOption: dependencyMap, isCurrentTraitBlocked } = activeCustomizationOption);
  if (isCurrentTraitBlocked === undefined) {
    isCurrentTraitBlocked = false;
  }
  let flag = activeCustomizationOption.disabled;
  if (flag === undefined) {
    flag = false;
  }
  let c7;
  let closure_8;
  let str;
  let stateFromStores;
  let ref;
  let ref2;
  let ref3;
  function handleTabLayout(more, nativeEvent) {
    const layout = nativeEvent.nativeEvent.layout;
    const current = ref.current;
    const obj = { x: layout.x, width: layout.width };
    const result = current.set(more, obj);
    const tmp = ref;
    if (more === str) {
      const current3 = tmp.current;
      const value = current3.get(tmp3);
      const current4 = ref3.current;
      if (null != value) {
        if (0 !== current4) {
          let x = value.x;
          const diff = value.x + value.width + 2 * PX_16 - current4;
          const current5 = ref2.current;
          if (current5 <= x) {
            let tmp4 = null;
            if (current5 < diff) {
              tmp4 = diff;
            }
            x = tmp4;
          }
          if (null != x) {
            const current2 = ref.current;
            if (current2 != null) {
              const obj2 = { x, animated: !stateFromStores };
              current2.scrollTo(obj2);
            }
          }
        }
      }
    }
  }
  let tmp = ref();
  let tmp2 = activeCustomizationOption;
  let tmp3 = dependencyMap;
  let tmp4 = activeCustomizationOption(6244).CUSTOMIZATION_OPTION_TO_TRAIT[activeCustomizationOption];
  let closure_5 = tmp4;
  let nitroLockedMessage;
  if (isCurrentTraitBlocked) {
    if (!flag) {
      const tmp2Result = tmp2(6244);
      nitroLockedMessage = tmp2Result.getNitroLockedMessage(tmp4);
    }
  }
  const sum = tmp2(6244).FINALIZE_TAB_OPTIONS.length + 1;
  c7 = sum;
  const FINALIZE_MORE_OPTIONS = tmp2(6244).FINALIZE_MORE_OPTIONS;
  const hasItem = FINALIZE_MORE_OPTIONS.includes(activeCustomizationOption);
  let customizationOptionName;
  if (null != moreTabOption) {
    const tmp2Result6 = tmp2(6244);
    customizationOptionName = tmp2Result6.getCustomizationOptionName(moreTabOption);
  }
  closure_8 = tmp9;
  str = "more";
  if (!hasItem) {
    str = activeCustomizationOption;
  }
  function scrollActiveTabIntoView() {
    const current = ref.current;
    const value = current.get(str);
    const current2 = ref3.current;
    if (null != value) {
      if (0 !== current2) {
        let x = value.x;
        const diff = value.x + value.width + 2 * PX_16 - current2;
        const current4 = ref2.current;
        if (current4 <= x) {
          let tmp2 = null;
          if (current4 < diff) {
            tmp2 = diff;
          }
          x = tmp2;
        }
        if (null != x) {
          const current3 = ref.current;
          if (current3 != null) {
            const obj = { x, animated: !stateFromStores };
            current3.scrollTo(obj);
          }
        }
      }
    }
  }
  const items = [nitroLockedMessage];
  const tmp2Result7 = tmp2(504);
  stateFromStores = tmp2Result7.useStateFromStores(items, () => nitroLockedMessage.useReducedMotion);
  isCurrentTraitBlocked.useRef(null);
  const useRef = isCurrentTraitBlocked.useRef;
  map = new Map();
  ref = useRef(map);
  ref2 = isCurrentTraitBlocked.useRef(0);
  ref3 = isCurrentTraitBlocked.useRef(0);
  const items1 = [str, stateFromStores];
  const effect = isCurrentTraitBlocked.useEffect(scrollActiveTabIntoView, items1);
  const tmp2Result8 = tmp2(5387);
  let token = tmp2Result8.useToken("text-subtle");
  if (!isCurrentTraitBlocked) {
    let BLACK;
    if (hasItem) {
      BLACK = closure_8;
    } else {
      BLACK = moreTabOption(575).colors.BLACK;
    }
    token = BLACK;
  }
  let obj = {
    ref,
    horizontal: true,
    onLayout: function handleLayout(nativeEvent) {
      ref3.current = nativeEvent.nativeEvent.layout.width;
      const current = ref.current;
      const value = current.get(str);
      const current2 = ref3.current;
      if (null != value) {
        if (0 !== current2) {
          let x = value.x;
          const diff = value.x + value.width + 2 * PX_16 - current2;
          const current4 = ref2.current;
          if (current4 <= x) {
            let tmp2 = null;
            if (current4 < diff) {
              tmp2 = diff;
            }
            x = tmp2;
          }
          if (null != x) {
            const current3 = ref.current;
            if (current3 != null) {
              const obj = { x, animated: !stateFromStores };
              current3.scrollTo(obj);
            }
          }
        }
      }
    },
    onScroll: function handleScroll(nativeEvent) {
      ref2.current = nativeEvent.nativeEvent.contentOffset.x;
    },
    scrollEventThrottle: 16,
    accessibilityRole: str2,
    alwaysBounceHorizontal: false,
    showsHorizontalScrollIndicator: false,
    style: null,
    contentContainerStyle: null,
    children: tmp18(tmp19, obj2)
  };
  str2 = undefined;
  const tmp17 = flag;
  const tmp2Result9 = tmp2(1380);
  if (tmp2Result9.isIOS()) {
    str2 = "tabbar";
  }
  ({ scroll: obj5.style, scrollContent: obj5.contentContainerStyle } = tmp);
  obj2 = { style: tmp.row, accessibilityRole: str3, children: items2 };
  str3 = undefined;
  tmp18 = stateFromStores;
  tmp19 = closure_5;
  const tmp2Result10 = tmp2(1380);
  if (tmp2Result10.isAndroid()) {
    str3 = "tablist";
  }
  const FINALIZE_TAB_OPTIONS = tmp2(6244).FINALIZE_TAB_OPTIONS;
  items2 = [
    FINALIZE_TAB_OPTIONS.map((item, index) => {
      let obj2;
      let closure_0 = item;
      const obj = {
        label: obj2.getCustomizationOptionName(item),
        position: index + 1,
        tabCount,
        isActive: closure_0 === item,
        isBlocked: isCurrentTraitBlocked,
        disabled: flag,
        accessibilityHint: nitroLockedMessage,
        onPress() {
          const tmp2 = flag;
          if (!tmp2) {
            const tmp3 = isCurrentTraitBlocked;
            if (tmp3) {
              showNitroLockedToastDefault(closure_5);
            } else {
              dependencyMap(tmp);
            }
          }
        },
        onLayout(nativeEvent) {
          handleTabLayout(item, nativeEvent);
        }
      };
      obj2 = activeCustomizationOption(dependencyMap[14]);
      return str(ref2, obj, item);
    }),

  ];
  const obj3 = {
    position: sum,
    tabCount: sum,
    label: customizationOptionName,
    accessibilityLabel: formatToPlainStringResult,
    isActive: hasItem,
    isBlocked: isCurrentTraitBlocked,
    disabled: flag,
    accessibilityHint: nitroLockedMessage,
    onPress: function handleMorePress() {
      const tmp = flag;
      if (!tmp) {
        const tmp2 = isCurrentTraitBlocked;
        if (tmp2) {
          showNitroLockedToastDefault(closure_5);
        } else {
          const tmp3 = closure_8;
          if (tmp3) {
            const obj = { selectedOption: activeCustomizationOption, onSelectOption: dependencyMap };
            const obj2 = ActionSheetActionCreatorsDefault;
            obj2.openLazy(asyncRequire(12723, dependencyMap.paths), "CheckpointFinalizeTraitPicker", obj);
          } else if (null != moreTabOption) {
            dependencyMap(tmp4);
          }
        }
      }
    },
    onLayout(nativeEvent) {
      handleTabLayout("more", nativeEvent);
    },
    trailing: str(tmp2(12724).ChevronSmallDownIcon, { color: token, size: "xs" })
  };
  const tmp20 = ref2;
  if (null != customizationOptionName) {
    const intl2 = tmp2(1113).intl;
    const obj4 = { category: customizationOptionName };
    formatToPlainStringResult = intl2.formatToPlainString(moreTabOption(3339).QX1VPx, obj4);
    tmp21 = moreTabOption;
  } else {
    const intl = tmp2(1113).intl;
    tmp21 = moreTabOption;
    formatToPlainStringResult = intl.string(moreTabOption(3339).jepsQ6);
  }
  if (nitroLockedMessage == null) {
    let stringResult;
    if (null == moreTabOption || hasItem) {
      const intl3 = tmp2(1113).intl;
      stringResult = intl3.string(tmp21(3339)["8cGmXF"]);
    }
    nitroLockedMessage = stringResult;
  }
  items2[1] = str(tmp20, obj3);
  return str(tmp17, obj);
}
