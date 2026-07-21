// Module ID: 14556
// Function ID: 109696
// Name: fuzzySearchToggle
// Dependencies: []
// Exports: default

// Module 14556 (fuzzySearchToggle)
function fuzzySearchToggle(str, str2, str3) {
  let tmp = 0 === str.length;
  if (!tmp) {
    const formatted = str.toLowerCase();
    let tmp9Result = importDefault(dependencyMap[6])(formatted, str2.toLowerCase());
    if (!tmp9Result) {
      const formatted1 = str.toLowerCase();
      tmp9Result = importDefault(dependencyMap[6])(formatted1, str3.toLowerCase());
      const tmp9 = importDefault(dependencyMap[6]);
    }
    tmp = tmp9Result;
    const tmp4 = importDefault(dependencyMap[6]);
  }
  return tmp;
}
function ToggleTableRow(toggleName) {
  let onValueChange;
  let value;
  toggleName = toggleName.toggleName;
  const arg1 = toggleName;
  const description = toggleName.description;
  const importDefault = description;
  ({ value, onValueChange } = toggleName);
  const obj = {
    label: description,
    labelLineClamp: 1,
    subLabel: toggleName,
    subLabelLineClamp: 1,
    onPress() {
      let obj = description(closure_2[10]);
      obj = { content: description, key: toggleName };
      obj.open(obj);
    },
    trailing: callback2(arg1(dependencyMap[11]).FormSwitch, { value, onValueChange })
  };
  return callback2(arg1(dependencyMap[9]).TableRow, obj, toggleName);
}
function DevTogglesForCategory(category) {
  const arr = function useFilteredDevTogglesForCategory(category, query) {
    const items = [closure_7];
    const items1 = [query, category];
    return category(closure_2[12]).useStateFromStores(items, () => closure_7.allByCategory(arg0).filter((arg0) => {
      let tmp;
      [tmp, , ] = arg0;
      return callback(closure_1, tmp, tmp2);
    }), items1, category(closure_2[12]).statesWillNeverBeEqual);
  }(category.category, category.query);
  let tmp = null;
  if (0 !== arr.length) {
    const obj = {
      title: category.title,
      hasIcons: false,
      children: arr.map((arg0) => {
          let tmp;
          let tmp2;
          [tmp, tmp2, ] = arg0;
          return callback(closure_13, {
            toggleName: tmp,
            description: tmp3,
            value: tmp2,
            onValueChange(arg0) {
              return callback(closure_2[14]).toggle(callback, arg0);
            }
          }, tmp);
        })
    };
    tmp = callback2(arg1(dependencyMap[13]).TableRowGroup, obj);
  }
  return tmp;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const ScrollView = arg1(dependencyMap[2]).ScrollView;
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
const CATEGORY_LABELS = arg1(dependencyMap[4]).CATEGORY_LABELS;
({ jsx: closure_9, jsxs: closure_10 } = arg1(dependencyMap[5]));
let obj = arg1(dependencyMap[7]);
obj = {};
obj = { backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_BASE_LOW, paddingHorizontal: importDefault(dependencyMap[8]).space.PX_16 };
obj.wrap = obj;
const tmp2 = arg1(dependencyMap[5]);
obj.container = { paddingVertical: importDefault(dependencyMap[8]).space.PX_16 };
let closure_11 = obj.createStyles(obj);
const obj1 = { paddingVertical: importDefault(dependencyMap[8]).space.PX_16 };
const result = arg1(dependencyMap[19]).fileFinishedImporting("modules/devtools/native/components/screens/DevToolsTogglesScreen.tsx");

export default function DevToolsTogglesScreen() {
  const tmp = callback4();
  const tmp2 = callback(React.useState(""), 2);
  const first = tmp2[0];
  const arg1 = first;
  let obj = arg1(dependencyMap[12]);
  const items = [closure_6];
  const items1 = [first];
  const stateFromStores = obj.useStateFromStores(items, () => closure_6.allWithDescriptions().filter((arg0) => {
    let tmp;
    let tmp2;
    [tmp, , tmp2] = arg0;
    return callback(closure_0, tmp, tmp2);
  }), items1, arg1(dependencyMap[12]).statesWillNeverBeEqual);
  obj = { style: tmp.wrap };
  const items2 = [tmp.container, ];
  obj = { paddingBottom: importDefault(dependencyMap[8]).space.PX_16 + importDefault(dependencyMap[15])({ includeKeyboardHeight: true }).insets.bottom };
  items2[1] = obj;
  obj.contentContainerStyle = items2;
  const obj1 = { spacing: 16 };
  const obj2 = { "Bool(false)": null, "Bool(false)": null };
  const items3 = [
    callback2(arg1(dependencyMap[9]).TableRow, {
      onPress() {
        first(closure_2[17]).clearAll();
        const obj = first(closure_2[17]);
        first(closure_2[14]).clearAll();
      }
    }),

  ];
  const obj4 = { label: callback2(arg1(dependencyMap[18]).SearchField, { onChange: tmp2[1] }) };
  items3[1] = callback2(arg1(dependencyMap[9]).TableRow, obj4);
  obj2.children = items3;
  const items4 = [callback3(arg1(dependencyMap[13]).TableRowGroup, obj2), , ];
  let tmp7 = null;
  if (stateFromStores.length > 0) {
    const obj5 = {
      children: stateFromStores.map((arg0) => {
          let tmp;
          let tmp2;
          let tmp3;
          [tmp, tmp2, tmp3] = arg0;
          return callback(closure_13, {
            toggleName: tmp,
            description: tmp3,
            value: tmp2,
            onValueChange(arg0) {
              return callback(closure_2[17]).toggle(callback, arg0);
            }
          }, tmp);
        })
    };
    tmp7 = callback2(arg1(dependencyMap[13]).TableRowGroup, obj5);
  }
  items4[1] = tmp7;
  const entries = Object.entries(CATEGORY_LABELS);
  items4[2] = entries.map((arg0) => {
    let tmp;
    let tmp2;
    [tmp, tmp2] = arg0;
    return callback(closure_14, { category: parseInt(tmp), title: tmp2, query: first }, tmp);
  });
  obj1.children = items4;
  obj.children = callback3(arg1(dependencyMap[16]).Stack, obj1);
  return callback2(ScrollView, obj);
};
