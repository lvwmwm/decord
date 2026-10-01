// Module ID: 15308
// Function ID: 15309
// Name: DevToolsTogglesScreen
// Dependencies: [32, 19, 17, 5939, 4835, 21, 5829, 4836, 576, 5917, 4528, 6622, 504, 5999, 15292, 6402, 13986, 5279, 15309, 6471, 2]
// Exports: default

// Module 15308 (DevToolsTogglesScreen)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4528 */;
import DevSettingsStore2 from "DevSettingsStore" /* 4835 */;
import fuzzysearchDefault from "fuzzysearch" /* 5829 */;
import useSafeAreaInsetsKeyboardAwareDefault from "useSafeAreaInsetsKeyboardAware" /* 6402 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import DesignTogglesStore from "DesignTogglesStore" /* 5939 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const DevSettingsStore = DevSettingsStore2;

let c10;
let c9;
let obj2;
let obj3;
function fuzzySearchToggle(str, str2, str3) {
  let tmp = 0 === str.length;
  if (!tmp) {
    const tmp5 = fuzzysearchDefault;
    const formatted = str.toLowerCase();
    let tmp3ResultResult = tmp5(formatted, str2.toLowerCase());
    const tmp3 = importDefault;
    if (!tmp3ResultResult) {
      const tmp3Result = tmp3(5829);
      const formatted1 = str.toLowerCase();
      tmp3ResultResult = tmp3Result(formatted1, str3.toLowerCase());
    }
    tmp = tmp3ResultResult;
  }
  return tmp;
}
function ToggleTableRow(toggleName) {
  let onValueChange;
  let value;
  toggleName = toggleName.toggleName;
  const description = toggleName.description;
  ({ value, onValueChange } = toggleName);
  let obj = {
    label: description,
    labelLineClamp: 1,
    subLabel: toggleName,
    subLabelLineClamp: 1,
    onPress() {
      const obj = ToastActionCreatorsDefault;
      const obj2 = { content: description, key: toggleName };
      obj.open(obj2);
    },
    trailing: closure_9(toggleName(6622).FormSwitch, { value, onValueChange })
  };
  const TableRow = toggleName(5917).TableRow;
  return closure_9(TableRow, obj, toggleName);
}
function DevTogglesForCategory(title) {
  let category;
  let query;
  ({ category, query } = title);
  title = title.title;
  const tmp = category;
  const tmp2 = dependencyMap;
  let obj = category(504);
  const items = [DevSettingsStore];
  const items1 = [query, category];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const allByCategoryResult = DevSettingsStore.allByCategory(category);
    return allByCategoryResult.filter((item) => {
      let tmp;
      [tmp, , ] = item;
      return fuzzySearchToggle(query, tmp, tmp2);
    });
  }, items1, category(504).statesWillNeverBeEqual);
  let tmp3 = null;
  if (0 !== stateFromStores.length) {
    const obj2 = {
      title,
      hasIcons: false,
      children: stateFromStores.map((item) => {
          let tmp;
          let tmp2;
          [tmp, tmp2, ] = item;
          let obj = {
            toggleName: tmp,
            description: tmp3,
            value: tmp2,
            onValueChange(arg0) {
              const obj = category(dependencyMap[14]);
              return obj.toggle(closure_1_0, arg0);
            }
          };
          return closure_9(closure_13, obj, tmp);
        })
    };
    const TableRowGroup = tmp(5999).TableRowGroup;
    tmp3 = closure_9(TableRowGroup, obj2);
  }
  return tmp3;
}
const ScrollView = react_native.ScrollView;
const CATEGORY_LABELS = DevSettingsStore2.CATEGORY_LABELS;
({ jsx: c9, jsxs: c10 } = Fragment);
let createStyles = createStyles_mod;
let obj = { wrap: obj2, container: obj3 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, paddingHorizontal: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { paddingVertical: nativeDefault.space.PX_16 };
let closure_12 = createStyles(obj);
const result = size.fileFinishedImporting("modules/devtools/native/components/screens/DevToolsTogglesScreen.tsx");

export default function DevToolsTogglesScreen() {
  let Stack;
  let items2;
  let items3;
  let obj9;
  let query;
  let tmp10;
  let tmp5;
  let tmp = closure_12();
  let tmp2 = dependencyMap;
  const insets = useSafeAreaInsetsKeyboardAwareDefault({ includeKeyboardHeight: true }).insets;
  [query, tmp5] = react.useState("");
  let obj = query(13986);
  const manaTextMigrationHighlightRestartNotice = obj.useManaTextMigrationHighlightRestartNotice();
  let obj2 = query(504);
  const items = [DesignTogglesStore];
  const items1 = [query];
  const stateFromStores = obj2.useStateFromStores(items, () => {
    let length;
    const allWithDescriptionsResult = DesignTogglesStore.allWithDescriptions();
    return allWithDescriptionsResult.filter((item) => {
      let str;
      let str2;
      [str, , str2] = item;
      let tmp = 0 === length.length;
      if (!tmp) {
        const tmp4 = fuzzysearchDefault;
        const formatted = str3.toLowerCase();
        let tmp2ResultResult = tmp4(formatted, str.toLowerCase());
        const tmp2 = importDefault;
        const tmp3 = dependencyMap;
        if (!tmp2ResultResult) {
          const tmp2Result = tmp2(tmp3[6]);
          const formatted1 = str3.toLowerCase();
          tmp2ResultResult = tmp2Result(formatted1, str2.toLowerCase());
        }
        tmp = tmp2ResultResult;
      }
      return tmp;
    });
  }, items1, query(504).statesWillNeverBeEqual);
  const obj3 = { style: tmp.wrap, contentContainerStyle: items2, children: tmp10(Stack, obj9) };
  items2 = [tmp.container, { paddingBottom: nativeDefault.space.PX_16 + insets.bottom }];
  ({ paddingBottom: nativeDefault.space.PX_16 + insets.bottom });
  Stack = query(5279).Stack;
  const obj5 = { title: "Actions", hasIcons: false, children: items3 };
  const TableRowGroup = query(5999).TableRowGroup;
  items3 = [, ];
  const obj6 = {
    label: "Clear All",
    variant: "danger",
    onPress() {
      const obj = first(dependencyMap[18]);
      obj.clearAll();
      const obj2 = first(dependencyMap[14]);
      obj2.clearAll();
    },
    arrow: true
  };
  items3[0] = closure_9(query(5917).TableRow, obj6);
  const obj7 = { label: closure_9(query(6471).SearchField, { size: "md", placeholder: "Search design toggles", onChange: tmp5 }) };
  const TableRow = query(5917).TableRow;
  items3[1] = closure_9(TableRow, obj7);
  const items4 = [closure_10(TableRowGroup, obj5), , ];
  let tmp8Result = null;
  tmp10 = closure_10;
  const tmp6 = query;
  const tmp9 = ScrollView;
  if (stateFromStores.length > 0) {
    const obj8 = {
      title: "Design Toggles",
      hasIcons: false,
      children: stateFromStores.map((item) => {
          let tmp;
          let tmp2;
          let tmp3;
          [tmp, tmp2, tmp3] = item;
          let obj = {
            toggleName: tmp,
            description: tmp3,
            value: tmp2,
            onValueChange(arg0) {
              const obj = first(dependencyMap[18]);
              return obj.toggle(query, arg0);
            }
          };
          return closure_9(closure_13, obj, tmp);
        })
    };
    const TableRowGroup2 = tmp6(5999).TableRowGroup;
    tmp8Result = tmp8(TableRowGroup2, obj8);
  }
  obj9 = { spacing: 16, children: items4 };
  items4[1] = tmp8Result;
  const entries = Object.entries(CATEGORY_LABELS);
  items4[2] = entries.map((item) => {
    let tmp;
    let tmp2;
    [tmp, tmp2] = item;
    const obj = { category: parseInt(tmp), title: tmp2, query };
    return React4(DevTogglesForCategory, obj, tmp);
  });
  return closure_9(tmp9, obj3);
};
