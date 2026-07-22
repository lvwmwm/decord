// Module ID: 13390
// Function ID: 101774
// Name: DevToolsContentSortButtons
// Dependencies: []

// Module 13390 (DevToolsContentSortButtons)
function DevToolsContentSortButtons(arg0) {
  let end;
  let start;
  ({ screenKey: closure_0, start, end } = arg0);
  const tmp = callback5();
  let obj = { style: tmp.sortingIcons };
  obj = {
    onPress() {
      const result = callback(closure_2[14]).triggerHapticFeedback(callback(closure_2[14]).HapticFeedbackTypes.IMPACT_MEDIUM);
      const obj = callback(closure_2[14]);
      callback(closure_2[11]).updateSortOrder(callback, "up");
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
  obj.children = callback3(arg1(dependencyMap[15]).ArrowSmallUpIcon, {});
  const items1 = [callback3(arg1(dependencyMap[13]).PressableOpacity, obj), ];
  obj = {
    onPress() {
      const result = callback(closure_2[14]).triggerHapticFeedback(callback(closure_2[14]).HapticFeedbackTypes.IMPACT_MEDIUM);
      const obj = callback(closure_2[14]);
      callback(closure_2[11]).updateSortOrder(callback, "down");
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
  obj.children = callback3(arg1(dependencyMap[16]).ArrowSmallDownIcon, {});
  items1[1] = callback3(arg1(dependencyMap[13]).PressableOpacity, obj);
  obj.children = items1;
  return closure_11(closure_5, obj);
}
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
({ View: closure_5, ScrollView: closure_6 } = arg1(dependencyMap[2]));
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
let closure_9 = importDefault(dependencyMap[5]);
const tmp2 = arg1(dependencyMap[2]);
({ jsx: closure_10, jsxs: closure_11 } = arg1(dependencyMap[6]));
let obj1 = arg1(dependencyMap[7]);
let obj = {};
obj = { backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_BASE_LOW, padding: importDefault(dependencyMap[8]).space.PX_16 };
obj.devToolsContainer = obj;
obj1 = { flexDirection: "row", gap: importDefault(dependencyMap[8]).space.PX_8 };
obj.sortingIcons = obj1;
const tmp3 = arg1(dependencyMap[6]);
obj.button = { backgroundColor: importDefault(dependencyMap[8]).colors.CONTROL_SECONDARY_BACKGROUND_DEFAULT, width: importDefault(dependencyMap[8]).space.PX_32, height: importDefault(dependencyMap[8]).space.PX_32, borderRadius: importDefault(dependencyMap[8]).radii.round, justifyContent: "center", alignItems: "center" };
obj.disabledButton = { opacity: 0.5 };
let closure_12 = obj1.createStyles(obj);
const memoResult = importAllResult.memo((arg0) => {
  let label;
  let value;
  ({ label, value } = arg0);
  const obj = { cachedAt: null, edpbxy: null };
  const items = [label, callback3(arg1(dependencyMap[12]).Text, { variant: "text-xs/semibold", children: value })];
  obj.children = items;
  return callback4(arg1(dependencyMap[12]).Text, obj);
});
const obj2 = { backgroundColor: importDefault(dependencyMap[8]).colors.CONTROL_SECONDARY_BACKGROUND_DEFAULT, width: importDefault(dependencyMap[8]).space.PX_32, height: importDefault(dependencyMap[8]).space.PX_32, borderRadius: importDefault(dependencyMap[8]).radii.round, justifyContent: "center", alignItems: "center" };
const memoResult1 = importAllResult.memo(function DevToolsContent(arg0) {
  let embedded;
  let title;
  ({ title, embedded } = arg0);
  let obj = callback(closure_2[17]);
  const callback = obj.useNavigation();
  const tmp = callback5();
  const importDefault = function useDevToolsContentSublabels() {
    const items = [closure_7];
    const callback = callback(closure_2[9]).useStateFromStores(items, () => {
      const overrides = currentBuildOverride.getCurrentBuildOverride().overrides;
      let id;
      if (null != overrides) {
        if (null != overrides[closure_0(undefined, closure_2[10]).DEVICE_FIELD]) {
          id = tmp4.id;
        }
      }
      return id;
    });
    const obj = callback(closure_2[9]);
    const items1 = [closure_8];
    const stateFromStores = callback(closure_2[9]).useStateFromStores(items1, () => Object.keys(allExperimentOverrideDescriptors.getAllExperimentOverrideDescriptors()).length);
    const obj2 = callback(closure_2[9]);
    const items2 = [closure_9];
    const callback2 = stateFromStores + callback(closure_2[9]).useStateFromStores(items2, () => Object.keys(clientOverrides.getClientOverrides()).length);
    const obj3 = callback(closure_2[9]);
    return callback2(closure_2[11])().map((arg0) => {
      let tmp;
      [tmp] = arg0;
      if ("buildOverride" === tmp) {
        let tmp9;
        if (null != closure_0) {
          let obj = { label: "Build override: ", value: closure_0 };
          tmp9 = callback(closure_13, obj);
        }
        return tmp9;
      } else if ("experiments" === tmp) {
        let tmp3;
        if (closure_1 > 0) {
          obj = { label: "Experiments overridden: ", value: closure_1.toString() };
          tmp3 = callback(closure_13, obj);
        }
        return tmp3;
      }
    });
  }();
  const tmp3 = callback2(arr.useState(false), 2);
  closure_2 = tmp3[0];
  const callback2 = tmp3[1];
  const arr = importDefault(closure_2[11])();
  obj = {
    title,
    hasIcons: true,
    children: arr.map((arg0, arg1) => {
      let tmp2;
      [tmp2, ] = arg0;
      let obj = { label: tmp3, subLabel: closure_1[arg1], icon: callback3(callback(closure_2[20]).TableRow.Icon, { IconComponent: tmp4 }), arrow: !closure_2 };
      let tmp6;
      if (closure_2) {
        obj = { screenKey: tmp2, start: 0 === arg1, end: arg1 === arr.length - 1 };
        tmp6 = callback3(closure_14, obj);
      }
      obj.trailing = tmp6;
      obj.onLongPress = function onLongPress() {
        let obj = callback(closure_2[21]);
        obj = {};
        let str = "sorting-enabled";
        if (closure_2) {
          str = "sorting-disabled";
        }
        obj.key = str;
        let str2 = "Sorting enabled";
        if (closure_2) {
          str2 = "Sorting disabled";
        }
        obj.content = str2;
        obj.open(obj);
        const result = arr(closure_2[14]).triggerHapticFeedback(arr(closure_2[14]).HapticFeedbackTypes.IMPACT_MEDIUM);
        callback2((arg0) => !arg0);
      };
      obj.onPress = function onPress() {
        if (!closure_2) {
          if (null != arr.push) {
            const arr = arr.push(arr);
          } else {
            let obj = arr(closure_2[22]);
            obj = { screenKey: arr };
            obj.navigateToDevTools(obj);
          }
        }
      };
      return callback3(callback(closure_2[20]).TableRow, obj, tmp);
    })
  };
  const tmp4 = callback3(callback(closure_2[19]).TableRowGroup, obj);
  let tmp5 = tmp4;
  if (!embedded) {
    obj = { style: tmp.devToolsContainer };
    const obj1 = { paddingBottom: tmp2.bottom + importDefault(closure_2[8]).space.PX_16 };
    obj.contentContainerStyle = obj1;
    obj.children = tmp4;
    tmp5 = callback3(closure_6, obj);
  }
  return tmp5;
});
const result = arg1(dependencyMap[23]).fileFinishedImporting("modules/devtools/native/components/DevToolsContent.tsx");

export default memoResult1;
export const DevToolsContentSubLabel = memoResult;
