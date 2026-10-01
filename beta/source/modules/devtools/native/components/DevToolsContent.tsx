// Module ID: 15346
// Function ID: 15347
// Name: DevToolsContent
// Dependencies: [32, 19, 17, 10969, 4750, 1235, 21, 4836, 576, 504, 11267, 15347, 4832, 5435, 4801, 15348, 15350, 1485, 1613, 5999, 5917, 4528, 14139, 2]

// Module 15346 (DevToolsContent)
import nativeDefault from "native" /* 576 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1613 */;
import HapticUtils from "HapticUtils" /* 4801 */;
import Text_Text from "Text/Text" /* 4832 */;
import Pressables from "Pressables" /* 5435 */;
import DevToolsNavigator from "DevToolsNavigator" /* 14139 */;
import useSortedDevToolsScreens from "useSortedDevToolsScreens" /* 15347 */;
import ArrowSmallUpIcon from "ArrowSmallUpIcon" /* 15348 */;
import ArrowSmallDownIcon from "ArrowSmallDownIcon" /* 15350 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import BuildOverrideStore from "BuildOverrideStore" /* 10969 */;
import ExperimentStore from "ExperimentStore" /* 4750 */;
import ApexExperimentStore from "ApexExperimentStore" /* 1235 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
const useSortedDevToolsScreensDefault = useSortedDevToolsScreens;
let _require, dependencyMap, importDefault;

let c10;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let size;
let unpackModuleId;
function DevToolsContentSortButtons(arg0) {
  let end;
  let items;
  let items1;
  let items2;
  let require;
  let start;
  ({ screenKey: require, start, end } = arg0);
  const tmp = closure_12();
  let obj = { style: tmp.sortingIcons, children: items1 };
  let obj2 = {
    onPress() {
      const obj = HapticUtils;
      const result = obj.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
      const obj2 = useSortedDevToolsScreens;
      obj2.updateSortOrder(_require, "up");
    },
    disabled: start,
    style: items,
    accessibilityRole: "button",
    accessibilityLabel: "Shift up",
    children: closure_10(ArrowSmallUpIcon.ArrowSmallUpIcon, {})
  };
  items = [tmp.button, ];
  const PressableOpacity = Pressables.PressableOpacity;
  const tmp2 = closure_11;
  const tmp3 = closure_5;
  if (start) {
    start = tmp.disabledButton;
  }
  items[1] = start;
  items1 = [closure_10(PressableOpacity, obj2), ];
  const obj3 = {
    onPress() {
      const obj = HapticUtils;
      const result = obj.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
      const obj2 = useSortedDevToolsScreens;
      obj2.updateSortOrder(_require, "down");
    },
    disabled: end,
    style: items2,
    accessibilityRole: "button",
    accessibilityLabel: "Shift down",
    children: closure_10(ArrowSmallDownIcon.ArrowSmallDownIcon, {})
  };
  items2 = [tmp.button, ];
  const PressableOpacity2 = tmp5(5435).PressableOpacity;
  if (end) {
    end = tmp.disabledButton;
  }
  items2[1] = end;
  items1[1] = closure_10(PressableOpacity2, obj3);
  return tmp2(tmp3, obj);
}
let _slicedToArray = _slicedToArray_mod;
({ View: hasOwnProperty, ScrollView: metroRequire } = react_native);
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let createStyles = createStyles_mod;
let obj = { devToolsContainer: obj2, sortingIcons: obj3, button: size, disabledButton: { opacity: 0.5 } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, padding: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", gap: nativeDefault.space.PX_8 };
size = { backgroundColor: nativeDefault.colors.CONTROL_SECONDARY_BACKGROUND_DEFAULT, width: nativeDefault.space.PX_32, height: nativeDefault.space.PX_32, borderRadius: nativeDefault.radii.round, justifyContent: "center", alignItems: "center" };
let closure_12 = createStyles(obj);
const memoResult = react.memo((arg0) => {
  let items;
  let label;
  let value;
  ({ label, value } = arg0);
  const obj = { variant: "text-xs/medium", color: "text-subtle", children: items };
  items = [label, ];
  const Text = Text_Text.Text;
  items[1] = authStore(Text_Text.Text, { variant: "text-xs/semibold", children: value });
  return unpackModuleId(Text, obj);
});
const memoResult1 = react.memo(function DevToolsContent(arg0) {
  let _undefined;
  let allExperimentOverrideDescriptors;
  let c2;
  let c3;
  let clientOverrides;
  let closure_0;
  let closure_1;
  let currentBuildOverride;
  let embedded;
  let obj7;
  let title;
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  let arr5;
  ({ title, embedded } = arg0);
  let tmp = closure_12();
  let tmp2 = dependencyMap;
  let obj = require("useNavigation");
  obj.useNavigation();
  const tmp3 = importDefault;
  _require = undefined;
  let tmp4 = useSafeAreaInsetsDefault();
  let obj2 = require("get initialized");
  const items = [BuildOverrideStore];
  _require = obj2.useStateFromStores(items, () => {
    const overrides = currentBuildOverride.getCurrentBuildOverride().overrides;
    let id;
    if (overrides != null) {
      const tmp4 = overrides[closure_0(undefined, c2[10]).DEVICE_FIELD];
      if (tmp4 != null) {
        id = tmp4.id;
      }
    }
    return id;
  });
  const items1 = [ExperimentStore];
  const obj3 = require("get initialized");
  const stateFromStores = obj3.useStateFromStores(items1, () => Object.keys(allExperimentOverrideDescriptors.getAllExperimentOverrideDescriptors()).length);
  const items2 = [ApexExperimentStore];
  const obj4 = require("get initialized");
  stateFromStores + obj4.useStateFromStores(items2, () => Object.keys(clientOverrides.getClientOverrides()).length);
  const arr4 = useSortedDevToolsScreensDefault();
  importDefault = arr4.map((item) => {
    let tmp;
    [tmp] = item;
    if ("buildOverride" === tmp) {
      let tmp7;
      if (null != closure_0) {
        const obj2 = { label: "Build override: ", value: tmp5 };
        tmp7 = closure_2_10(closure_2_13, obj2, tmp);
      }
      return tmp7;
    } else if ("experiments" === tmp) {
      let tmp2;
      const str2 = closure_1;
      if (closure_1 > 0) {
        const obj = { label: "Experiments overridden: ", value: str2.toString() };
        tmp2 = closure_2_10(closure_2_13, obj, tmp);
      }
      return tmp2;
    }
  });
  const tmp6 = _slicedToArray(arr5.useState(false), 2);
  [c2, c3] = tmp6;
  arr5 = useSortedDevToolsScreensDefault();
  let tmp7 = closure_10;
  const obj5 = {
    title,
    hasIcons: true,
    children: arr5.map((item, index) => {
      let tmp;
      let tmp4Result;
      [tmp, ] = item;
      let obj = {
        label: tmp2,
        subLabel: closure_1[index],
        icon: closure_1_10(screenKey(c2[20]).TableRow.Icon, { IconComponent: tmp3 }),
        arrow: !c2,
        trailing: tmp4Result,
        onLongPress() {
          let str2;
          let str = "sorting-enabled";
          const open = closure_1(c2[21]).open;
          closure_1(c2[21]);
          if (_undefined) {
            str = "sorting-disabled";
          }
          const obj = { key: str, content: str2 };
          str2 = "Sorting enabled";
          if (_undefined) {
            str2 = "Sorting disabled";
          }
          open(obj);
          const obj2 = screenKey(c2[14]);
          const result = obj2.triggerHapticFeedback(screenKey(tmp[14]).HapticFeedbackTypes.IMPACT_MEDIUM);
          closure_1_3((arg0) => !arg0);
        },
        onPress() {
          const tmp = c2;
          if (!tmp) {
            const arr = screenKey;
            if (null != screenKey.push) {
              arr.push(screenKey);
            } else {
              const obj2 = { screenKey };
              const obj = DevToolsNavigator;
              obj.navigateToDevTools(obj2);
            }
          }
        }
      };
      const TableRow = screenKey(c2[20]).TableRow;
      tmp4Result = undefined;
      if (c2) {
        let obj2 = { screenKey: tmp, start: 0 === index, end: index === arr5.length - 1 };
        tmp4Result = tmp4(DevToolsContentSortButtons, obj2);
      }
      return closure_1_10(TableRow, obj, tmp);
    })
  };
  const TableRowGroup = require("TableRowGroup").TableRowGroup;
  const tmp8 = closure_10(TableRowGroup, obj5);
  let tmp7Result = tmp8;
  if (!embedded) {
    const obj6 = { style: tmp.devToolsContainer, contentContainerStyle: obj7, children: tmp8 };
    obj7 = { paddingBottom: tmp4.bottom + nativeDefault.space.PX_16 };
    tmp7Result = tmp7(closure_6, obj6);
  }
  return tmp7Result;
});
size = size_mod;
let result = size.fileFinishedImporting("modules/devtools/native/components/DevToolsContent.tsx");

export default memoResult1;
export const DevToolsContentSubLabel = memoResult;
