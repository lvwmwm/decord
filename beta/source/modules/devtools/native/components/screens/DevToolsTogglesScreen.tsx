// Module ID: 16023
// Function ID: 16024
// Name: DevToolsTogglesScreen
// Dependencies: [32, 19, 17, 5876, 4787, 21, 5766, 4788, 576, 5854, 4486, 7478, 504, 5936, 16007, 7258, 16024, 5216, 16025, 7327, 2]
// Exports: default

// Module 16023 (DevToolsTogglesScreen)
import nativeDefault from "native" /* 576 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4486 */;
import fuzzysearchDefault from "fuzzysearch" /* 5766 */;
import useSafeAreaInsetsKeyboardAwareDefault from "useSafeAreaInsetsKeyboardAware" /* 7258 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import DesignTogglesStore from "DesignTogglesStore" /* 5876 */;
import DevSettingsStore from "DevSettingsStore" /* 4787 */;

const require = fn;
function fuzzySearchToggle(str, str2, str3) {
  let tmp = 0 === str.length;
  if (!tmp) {
    const formatted = str.toLowerCase();
    let tmp3ResultResult = fuzzysearchDefault(formatted, str2.toLowerCase());
    if (!tmp3ResultResult) {
      const formatted1 = str.toLowerCase();
      tmp3ResultResult = tmp3(5766)(formatted1, str3.toLowerCase());
      const tmp3Result = tmp3(5766);
    }
    tmp = tmp3ResultResult;
    tmp3 = importDefault;
  }
  return tmp;
}
function ToggleTableRow(toggleName) {
  toggleName = toggleName.toggleName;
  const description = toggleName.description;
  ({ value, onValueChange } = toggleName);
  return closure_9(toggleName(5854).TableRow, {
    label: description,
    labelLineClamp: 1,
    subLabel: toggleName,
    subLabelLineClamp: 1,
    onPress() {
      ToastActionCreatorsDefault.open({ content: description, key: toggleName });
    },
    trailing: closure_9(toggleName(7478).FormSwitch, { value, onValueChange })
  }, toggleName);
}
function DevTogglesForCategory(title) {
  ({ category, query } = title);
  const items = [DevSettingsStore];
  const items1 = [query, category];
  const stateFromStores = category(504).useStateFromStores(items, () => DevSettingsStore.allByCategory(category).filter((item) => {
    [tmp, , ] = item;
    return fuzzySearchToggle(query, tmp, tmp2);
  }), items1, category(504).statesWillNeverBeEqual);
  let tmp3 = null;
  if (0 !== stateFromStores.length) {
    const obj2 = {
      title: title.title,
      hasIcons: false,
      children: stateFromStores.map((item) => {
          [tmp, tmp2, ] = item;
          return closure_9(closure_13, {
            toggleName: tmp,
            description: tmp3,
            value: tmp2,
            onValueChange(arg0) {
              return category(dependencyMap[14]).toggle(closure_1_0, arg0);
            }
          }, tmp);
        })
    };
    tmp3 = closure_9(category(5936).TableRowGroup, obj2);
  }
  return tmp3;
}
const ScrollView = fn(17).ScrollView;
const CATEGORY_LABELS = fn(4787).CATEGORY_LABELS;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4788);
let obj2 = { wrap: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, paddingHorizontal: nativeDefault.space.PX_16 }, container: null };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, paddingHorizontal: nativeDefault.space.PX_16 };
obj2.container = { paddingVertical: nativeDefault.space.PX_16 };
let closure_12 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/devtools/native/components/screens/DevToolsTogglesScreen.tsx");

export default function DevToolsTogglesScreen() {
  let tmp = closure_12();
  const tmp3 = _slicedToArray(noop.useState(""), 2);
  const query = tmp3[0];
  const manaTextMigrationHighlightRestartNotice = query(16024).useManaTextMigrationHighlightRestartNotice();
  let obj = query(16024);
  const tmp5 = query;
  const items = [DesignTogglesStore];
  const items1 = [query];
  const stateFromStores = query(504).useStateFromStores(items, () => DesignTogglesStore.allWithDescriptions().filter((item) => {
    [str, , str2] = item;
    let tmp = 0 === length.length;
    if (!tmp) {
      const formatted = str3.toLowerCase();
      let tmp2ResultResult = fuzzysearchDefault(formatted, str.toLowerCase());
      if (!tmp2ResultResult) {
        const formatted1 = str3.toLowerCase();
        tmp2ResultResult = tmp2(5766)(formatted1, str2.toLowerCase());
        const tmp2Result = tmp2(5766);
      }
      tmp = tmp2ResultResult;
      tmp2 = importDefault;
    }
    return tmp;
  }), items1, query(504).statesWillNeverBeEqual);
  const obj3 = { style: tmp.wrap, contentContainerStyle: null, children: null };
  const items2 = [tmp.container, ];
  const obj2 = query(504);
  items2[1] = { paddingBottom: nativeDefault.space.PX_16 + useSafeAreaInsetsKeyboardAwareDefault({ includeKeyboardHeight: true }).insets.bottom };
  obj3.contentContainerStyle = items2;
  const obj5 = { title: "Actions", hasIcons: false, children: null };
  const items3 = [
    closure_9(query(5854).TableRow, {
      label: "Clear All",
      variant: "danger",
      onPress() {
        first(16025).clearAll();
        const obj = first(16025);
        first(16007).clearAll();
      },
      arrow: true
    }),

  ];
  const obj4 = { paddingBottom: nativeDefault.space.PX_16 + useSafeAreaInsetsKeyboardAwareDefault({ includeKeyboardHeight: true }).insets.bottom };
  const obj6 = {
    label: "Clear All",
    variant: "danger",
    onPress() {
      first(16025).clearAll();
      const obj = first(16025);
      first(16007).clearAll();
    },
    arrow: true
  };
  const tmp8 = ScrollView;
  const tmp9 = closure_10;
  items3[1] = closure_9(query(5854).TableRow, { label: closure_9(query(7327).SearchField, { size: "md", placeholder: "Search design toggles", onChange: tmp3[1] }) });
  obj5.children = items3;
  const items4 = [closure_10(query(5936).TableRowGroup, obj5), , ];
  let tmp7Result = null;
  if (stateFromStores.length > 0) {
    const obj8 = {
      title: "Design Toggles",
      hasIcons: false,
      children: stateFromStores.map((item) => {
          [tmp, tmp2, tmp3] = item;
          return closure_9(closure_13, {
            toggleName: tmp,
            description: tmp3,
            value: tmp2,
            onValueChange(arg0) {
              return first(16025).toggle(query, arg0);
            }
          }, tmp);
        })
    };
    tmp7Result = tmp7(tmp5(5936).TableRowGroup, obj8);
  }
  const obj9 = { spacing: 16, children: null };
  items4[1] = tmp7Result;
  const entries = Object.entries(CATEGORY_LABELS);
  items4[2] = entries.map((item) => {
    [tmp, tmp2] = item;
    return React7(DevTogglesForCategory, { category: parseInt(tmp), title: tmp2, query }, tmp);
  });
  obj9.children = items4;
  obj3.children = tmp9(query(5216).Stack, obj9);
  return closure_9(tmp8, obj3);
};
