// Module ID: 14678
// Function ID: 111899
// Name: fuzzySearchToggle
// Dependencies: [57, 31, 27, 5090, 4129, 33, 5045, 4130, 689, 5165, 3831, 5505, 566, 5503, 14662, 5160, 14679, 4541, 14680, 5772, 2]
// Exports: default

// Module 14678 (fuzzySearchToggle)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { ScrollView } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import { CATEGORY_LABELS } from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_9;
const require = arg1;
function fuzzySearchToggle(str, str2, str3) {
  let tmp = 0 === str.length;
  if (!tmp) {
    const formatted = str.toLowerCase();
    let tmp9Result = importDefault(5045)(formatted, str2.toLowerCase());
    if (!tmp9Result) {
      const formatted1 = str.toLowerCase();
      tmp9Result = importDefault(5045)(formatted1, str3.toLowerCase());
      const tmp9 = importDefault(5045);
    }
    tmp = tmp9Result;
    const tmp4 = importDefault(5045);
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
      let obj = description(outer1_2[10]);
      obj = { content: description, key: toggleName };
      obj.open(obj);
    },
    trailing: callback2(toggleName(5505).FormSwitch, { value, onValueChange })
  };
  return callback2(toggleName(5165).TableRow, obj, toggleName);
}
function DevTogglesForCategory(category) {
  const arr = (function useFilteredDevTogglesForCategory(category, query) {
    let closure_0 = category;
    let closure_1 = query;
    const items = [outer1_7];
    const items1 = [query, category];
    return outer1_0(outer1_2[12]).useStateFromStores(items, () => outer2_7.allByCategory(closure_0).filter((arg0) => {
      let tmp;
      [tmp, , ] = arg0;
      return outer3_12(outer1_1, tmp, tmp2);
    }), items1, outer1_0(outer1_2[12]).statesWillNeverBeEqual);
  })(category.category, category.query);
  let tmp = null;
  if (0 !== arr.length) {
    const obj = {
      title: category.title,
      hasIcons: false,
      children: arr.map((arg0) => {
          let tmp;
          let tmp2;
          [tmp, tmp2, ] = arg0;
          return outer1_9(outer1_13, {
            toggleName: tmp,
            description: tmp3,
            value: tmp2,
            onValueChange(arg0) {
              return outer2_0(outer2_2[14]).toggle(closure_0, arg0);
            }
          }, tmp);
        })
    };
    tmp = callback2(require(5503) /* TableRowGroupTitle */.TableRowGroup, obj);
  }
  return tmp;
}
({ jsx: closure_9, jsxs: closure_10 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.wrap = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.container = { paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj1 = { paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_16 };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/devtools/native/components/screens/DevToolsTogglesScreen.tsx");

export default function DevToolsTogglesScreen() {
  const tmp = _createForOfIteratorHelperLoose();
  const tmp2 = callback(React.useState(""), 2);
  const first = tmp2[0];
  let obj = first(14679);
  const manaTextMigrationHighlightRestartNotice = obj.useManaTextMigrationHighlightRestartNotice();
  let obj1 = first(566);
  const items = [_isNativeReflectConstruct];
  const items1 = [first];
  const stateFromStores = obj1.useStateFromStores(items, () => outer1_6.allWithDescriptions().filter((arg0) => {
    let tmp;
    let tmp2;
    [tmp, , tmp2] = arg0;
    return outer2_12(outer1_0, tmp, tmp2);
  }), items1, first(566).statesWillNeverBeEqual);
  obj = { style: tmp.wrap };
  const items2 = [tmp.container, ];
  obj = { paddingBottom: importDefault(689).space.PX_16 + importDefault(5160)({ includeKeyboardHeight: true }).insets.bottom };
  items2[1] = obj;
  obj.contentContainerStyle = items2;
  obj1 = { spacing: 16 };
  const obj2 = { title: "Actions", hasIcons: false };
  const obj3 = {
    label: "Clear All",
    variant: "danger",
    onPress() {
      first(outer1_2[18]).clearAll();
      const obj = first(outer1_2[18]);
      first(outer1_2[14]).clearAll();
    },
    arrow: true
  };
  const items3 = [callback2(first(5165).TableRow, obj3), ];
  const obj4 = {};
  const obj5 = { size: "md", placeholder: "Search design toggles", onChange: tmp2[1] };
  obj4.label = callback2(first(5772).SearchField, obj5);
  items3[1] = callback2(first(5165).TableRow, obj4);
  obj2.children = items3;
  const items4 = [callback3(first(5503).TableRowGroup, obj2), , ];
  let tmp8 = null;
  if (stateFromStores.length > 0) {
    const obj6 = {
      title: "Design Toggles",
      hasIcons: false,
      children: stateFromStores.map((arg0) => {
          let tmp;
          let tmp2;
          let tmp3;
          [tmp, tmp2, tmp3] = arg0;
          return outer1_9(outer1_13, {
            toggleName: tmp,
            description: tmp3,
            value: tmp2,
            onValueChange(arg0) {
              return first(outer2_2[18]).toggle(closure_0, arg0);
            }
          }, tmp);
        })
    };
    tmp8 = callback2(first(5503).TableRowGroup, obj6);
  }
  items4[1] = tmp8;
  const entries = Object.entries(CATEGORY_LABELS);
  items4[2] = entries.map((arg0) => {
    let tmp;
    let tmp2;
    [tmp, tmp2] = arg0;
    return outer1_9(outer1_14, { category: parseInt(tmp), title: tmp2, query: first }, tmp);
  });
  obj1.children = items4;
  obj.children = callback3(first(4541).Stack, obj1);
  return callback2(ScrollView, obj);
};
