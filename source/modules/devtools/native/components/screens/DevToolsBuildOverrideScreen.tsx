// Module ID: 13397
// Function ID: 101845
// Name: jsx
// Dependencies: []

// Module 13397 (jsx)
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
const ScrollView = arg1(dependencyMap[2]).ScrollView;
let closure_6 = importDefault(dependencyMap[3]);
const tmp2 = arg1(dependencyMap[4]);
const jsx = tmp2.jsx;
const jsxs = tmp2.jsxs;
let obj1 = arg1(dependencyMap[5]);
let obj = {};
obj = { backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_BASE_LOW, flex: 1 };
obj.content = obj;
obj1 = { padding: importDefault(dependencyMap[6]).space.PX_16 };
obj.contentContainer = obj1;
let closure_9 = obj1.createStyles(obj);
const obj2 = { "Null": 24, "Null": 24, icon: jsx(arg1(dependencyMap[7]).TagIcon, {}) };
const items = [obj2, ];
const obj3 = { "Null": "true", "Null": "vkt", icon: jsx(arg1(dependencyMap[8]).HashmarkIcon, {}) };
items[1] = obj3;
const memoResult = importAllResult.memo(() => {
  function getLabel(first) {
    const stateFromStores = first;
    const found = closure_10.find((value) => value.value === value.type);
    let label;
    if (null != found) {
      label = found.label;
    }
    return label;
  }
  const tmp = callback2();
  let obj = arg1(closure_2[10]);
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const overrides = currentBuildOverride.getCurrentBuildOverride().overrides;
    let tmp;
    if (null != overrides) {
      tmp = overrides[closure_0(undefined, closure_2[11]).DEVICE_FIELD];
    }
    return tmp;
  });
  const arg1 = stateFromStores;
  const tmp3 = callback(importAllResult.useState({ "Null": true, "Null": true }), 2);
  const first = tmp3[0];
  const importDefault = first;
  closure_2 = tmp3[1];
  obj = { style: tmp.content };
  obj = {};
  const merged = Object.assign(tmp.contentContainer);
  obj["paddingBottom"] = tmp.contentContainer.padding + importDefault(closure_2[9])({ includeKeyboardHeight: true }).insets.bottom;
  obj.contentContainerStyle = obj;
  const obj1 = { spacing: 16 };
  let tmp9 = null;
  if (null != stateFromStores) {
    const obj2 = {};
    const obj3 = {
      icon: jsx(arg1(closure_2[15]).CopyIcon, {}),
      label: getLabel(stateFromStores),
      subLabel: stateFromStores.id,
      onPress() {
          stateFromStores(closure_2[16]).copy(stateFromStores.id);
          const obj = stateFromStores(closure_2[16]);
          const result = stateFromStores(closure_2[17]).presentCopiedToClipboard();
        }
    };
    const items1 = [jsx(arg1(closure_2[14]).TableRow, obj3), , ];
    const obj4 = { icon: jsx(arg1(closure_2[18]).RefreshIcon, {}), label: "Refresh Override", onPress: arg1(closure_2[11]).refreshBuildOverride, arrow: true };
    items1[1] = jsx(arg1(closure_2[14]).TableRow, obj4);
    const obj5 = {};
    const obj6 = { color: "text-feedback-critical" };
    obj5.icon = jsx(arg1(closure_2[19]).TrashIcon, obj6);
    obj5.onPress = arg1(closure_2[11]).clearBuildOverride;
    items1[2] = jsx(arg1(closure_2[14]).TableRow, obj5);
    obj2.children = items1;
    tmp9 = jsxs(arg1(closure_2[13]).TableRowGroup, obj2);
  }
  const items2 = [tmp9, , , ];
  const obj7 = {};
  let str3 = "";
  if (null != stateFromStores) {
    str3 = "New";
  }
  obj7.title = `${str3} Override Type`;
  obj7.defaultValue = first.type;
  obj7.onChange = function onChange(type) {
    callback({ type, id: "" });
  };
  obj7.hasIcons = true;
  obj7.children = items.map((value) => {
    let icon;
    let label;
    value = value.value;
    ({ icon, label } = value);
    return callback2(stateFromStores(closure_2[21]).TableRadioRow, { value, label, icon }, value);
  });
  items2[1] = jsx(arg1(closure_2[20]).TableRadioGroup, obj7);
  const obj8 = { title: getLabel(first), hasIcons: true };
  const obj9 = {};
  const found = items.find((value) => value.value === first.type);
  let icon;
  if (null != found) {
    icon = found.icon;
  }
  obj9.icon = icon;
  const obj10 = {
    placeholder: "Enter " + getLabel(first),
    onChange(arg0) {
      const obj = {};
      const merged = Object.assign(first);
      obj["id"] = arg0;
      callback(obj);
    }
  };
  obj9.label = jsx(arg1(closure_2[22]).TextInput, obj10);
  obj8.children = jsx(arg1(closure_2[14]).TableRow, obj9);
  items2[2] = jsx(arg1(closure_2[13]).TableRowGroup, obj8);
  items2[3] = jsx(arg1(closure_2[23]).Button, {
    text: "Apply Build Override",
    disabled: "" === first.id,
    onPress() {
      const type = first.type;
      if ("branch" === type) {
        const result = stateFromStores(closure_2[11]).setBuildOverrideForBranch(first.id);
        const obj3 = stateFromStores(closure_2[11]);
      } else if ("id" === type) {
        const result1 = stateFromStores(closure_2[11]).setBuildOverrideForId(first.id);
        const obj2 = stateFromStores(closure_2[11]);
      } else {
        stateFromStores(closure_2[24]).assertNever(first.type);
        const obj = stateFromStores(closure_2[24]);
      }
    }
  });
  obj1.children = items2;
  obj.children = jsxs(arg1(closure_2[12]).Stack, obj1);
  return <ScrollView {...obj} />;
});
const result = arg1(dependencyMap[25]).fileFinishedImporting("modules/devtools/native/components/screens/DevToolsBuildOverrideScreen.tsx");

export default memoResult;
