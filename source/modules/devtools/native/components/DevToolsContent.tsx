// Module ID: 13504
// Function ID: 103930
// Name: DevToolsContentSortButtons
// Dependencies: [57, 31, 27, 10440, 4044, 1188, 33, 4130, 689, 566, 10939, 13505, 4126, 4660, 4099, 13953, 14707, 1456, 1557, 5503, 5165, 3831, 13503, 2]

// Module 13504 (DevToolsContentSortButtons)
import _slicedToArray from "_slicedToArray";
import importAllResult from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_5;
let closure_6;
const require = arg1;
function DevToolsContentSortButtons(arg0) {
  let end;
  let require;
  let start;
  ({ screenKey: require, start, end } = arg0);
  const tmp = callback4();
  let obj = { style: tmp.sortingIcons };
  obj = {
    onPress() {
      const result = outer1_0(outer1_2[14]).triggerHapticFeedback(outer1_0(outer1_2[14]).HapticFeedbackTypes.IMPACT_MEDIUM);
      const obj = outer1_0(outer1_2[14]);
      outer1_0(outer1_2[11]).updateSortOrder(closure_0, "up");
    },
    disabled: start
  };
  const items = [tmp.button, ];
  if (start) {
    start = tmp.disabledButton;
  }
  items[1] = start;
  obj.style = items;
  obj.accessibilityRole = "button";
  obj.accessibilityLabel = "Shift up";
  obj.children = callback2(require(13953) /* ArrowSmallUpIcon */.ArrowSmallUpIcon, {});
  const items1 = [callback2(require(4660) /* PressableBase */.PressableOpacity, obj), ];
  obj = {
    onPress() {
      const result = outer1_0(outer1_2[14]).triggerHapticFeedback(outer1_0(outer1_2[14]).HapticFeedbackTypes.IMPACT_MEDIUM);
      const obj = outer1_0(outer1_2[14]);
      outer1_0(outer1_2[11]).updateSortOrder(closure_0, "down");
    },
    disabled: end
  };
  const items2 = [tmp.button, ];
  if (end) {
    end = tmp.disabledButton;
  }
  items2[1] = end;
  obj.style = items2;
  obj.accessibilityRole = "button";
  obj.accessibilityLabel = "Shift down";
  obj.children = callback2(require(14707) /* ArrowSmallDownIcon */.ArrowSmallDownIcon, {});
  items1[1] = callback2(require(4660) /* PressableBase */.PressableOpacity, obj);
  obj.children = items1;
  return closure_11(closure_5, obj);
}
({ View: closure_5, ScrollView: closure_6 } = get_ActivityIndicator);
({ jsx: closure_10, jsxs: closure_11 } = jsxProd);
let obj = {};
obj = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, padding: require("_createForOfIteratorHelperLoose").space.PX_16 };
obj.devToolsContainer = obj;
_createForOfIteratorHelperLoose = { flexDirection: "row", gap: require("_createForOfIteratorHelperLoose").space.PX_8 };
obj.sortingIcons = _createForOfIteratorHelperLoose;
obj.button = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.CONTROL_SECONDARY_BACKGROUND_DEFAULT, width: require("_createForOfIteratorHelperLoose").space.PX_32, height: require("_createForOfIteratorHelperLoose").space.PX_32, borderRadius: require("_createForOfIteratorHelperLoose").radii.round, justifyContent: "center", alignItems: "center" };
obj.disabledButton = { opacity: 0.5 };
let closure_12 = _createForOfIteratorHelperLoose.createStyles(obj);
const memoResult = importAllResult.memo((arg0) => {
  let label;
  let value;
  ({ label, value } = arg0);
  const obj = { variant: "text-xs/medium", color: "text-subtle" };
  const items = [label, callback2(require(4126) /* Text */.Text, { variant: "text-xs/semibold", children: value })];
  obj.children = items;
  return callback3(require(4126) /* Text */.Text, obj);
});
let obj2 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.CONTROL_SECONDARY_BACKGROUND_DEFAULT, width: require("_createForOfIteratorHelperLoose").space.PX_32, height: require("_createForOfIteratorHelperLoose").space.PX_32, borderRadius: require("_createForOfIteratorHelperLoose").radii.round, justifyContent: "center", alignItems: "center" };
const memoResult1 = importAllResult.memo(function DevToolsContent(arg0) {
  let embedded;
  let title;
  ({ title, embedded } = arg0);
  let obj = _require(1456);
  _require = obj.useNavigation();
  const tmp = callback4();
  const importDefault = (function useDevToolsContentSublabels() {
    const items = [outer1_7];
    callback = callback(566).useStateFromStores(items, () => {
      const overrides = outer2_7.getCurrentBuildOverride().overrides;
      let id;
      if (null != overrides) {
        const tmp4 = overrides[callback(undefined, table[10]).DEVICE_FIELD];
        if (null != tmp4) {
          id = tmp4.id;
        }
      }
      return id;
    });
    let obj = callback(566);
    const items1 = [outer1_8];
    const stateFromStores = callback(566).useStateFromStores(items1, () => Object.keys(outer2_8.getAllExperimentOverrideDescriptors()).length);
    const obj2 = callback(566);
    const items2 = [outer1_9];
    const dependencyMap = stateFromStores + callback(566).useStateFromStores(items2, () => Object.keys(outer2_9.getClientOverrides()).length);
    const obj3 = callback(566);
    return dependencyMap(13505)().map((arg0) => {
      let tmp;
      [tmp] = arg0;
      if ("buildOverride" === tmp) {
        let tmp9;
        if (null != closure_0) {
          let obj = { label: "Build override: ", value: closure_0 };
          tmp9 = outer2_10(outer2_13, obj);
        }
        return tmp9;
      } else if ("experiments" === tmp) {
        let tmp3;
        if (closure_1 > 0) {
          obj = { label: "Experiments overridden: ", value: closure_1.toString() };
          tmp3 = outer2_10(outer2_13, obj);
        }
        return tmp3;
      }
    });
  })();
  let tmp3 = callback(arr.useState(false), 2);
  let dependencyMap = tmp3[0];
  callback = tmp3[1];
  arr = importDefault(13505)();
  obj = {
    title,
    hasIcons: true,
    children: arr.map((arg0, arg1) => {
      let tmp2;
      [tmp2, ] = arg0;
      let obj = { label: tmp3, subLabel: dependencyMap[arg1], icon: outer1_10(callback(5165).TableRow.Icon, { IconComponent: tmp4 }), arrow: !dependencyMap2 };
      let tmp6;
      if (dependencyMap2) {
        obj = { screenKey: tmp2, start: 0 === arg1, end: arg1 === arr.length - 1 };
        tmp6 = outer1_10(outer1_14, obj);
      }
      obj.trailing = tmp6;
      obj.onLongPress = function onLongPress() {
        let obj = callback2(3831);
        obj = {};
        let str = "sorting-enabled";
        if (outer1_2) {
          str = "sorting-disabled";
        }
        obj.key = str;
        let str2 = "Sorting enabled";
        if (outer1_2) {
          str2 = "Sorting disabled";
        }
        obj.content = str2;
        obj.open(obj);
        const result = callback(4099).triggerHapticFeedback(callback(4099).HapticFeedbackTypes.IMPACT_MEDIUM);
        outer1_3((arg0) => !arg0);
      };
      obj.onPress = function onPress() {
        if (!outer1_2) {
          if (null != outer1_0.push) {
            outer1_0.push(callback);
          } else {
            let obj = callback(13503);
            obj = { screenKey: callback };
            obj.navigateToDevTools(obj);
          }
        }
      };
      return outer1_10(callback(5165).TableRow, obj, tmp);
    })
  };
  let tmp4 = callback2(_require(5503).TableRowGroup, obj);
  let tmp5 = tmp4;
  if (!embedded) {
    obj = { style: tmp.devToolsContainer };
    const obj1 = { paddingBottom: tmp2.bottom + importDefault(689).space.PX_16 };
    obj.contentContainerStyle = obj1;
    obj.children = tmp4;
    tmp5 = callback2(closure_6, obj);
  }
  return tmp5;
});
let result = require("get ActivityIndicator").fileFinishedImporting("modules/devtools/native/components/DevToolsContent.tsx");

export default memoResult1;
export const DevToolsContentSubLabel = memoResult;
