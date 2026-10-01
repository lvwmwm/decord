// Module ID: 15136
// Function ID: 15137
// Name: DevToolsBuildOverrideScreen
// Dependencies: [32, 19, 17, 10969, 21, 4836, 576, 8327, 15137, 6402, 504, 11267, 5279, 5999, 5917, 4779, 6610, 4527, 14506, 4790, 5997, 6000, 6024, 5281, 1370, 2]

// Module 15136 (DevToolsBuildOverrideScreen)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import GlobalUtils from "GlobalUtils" /* 1370 */;
import ToastUtils from "ToastUtils" /* 4527 */;
import ClipboardUtils from "ClipboardUtils" /* 6610 */;
import TagIcon from "TagIcon" /* 8327 */;
import build_overrides_BuildOverrideUtils from "build_overrides/BuildOverrideUtils" /* 11267 */;
import HashmarkIcon from "HashmarkIcon" /* 15137 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import BuildOverrideStore from "BuildOverrideStore" /* 10969 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let obj2;
let obj3;
const ScrollView = react_native.ScrollView;
const jsx = Fragment.jsx;
const jsxs = Fragment.jsxs;
let createStyles = createStyles_mod;
let obj = { content: obj2, contentContainer: obj3 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
createStyles = createStyles.createStyles;
obj3 = { padding: nativeDefault.space.PX_16 };
let closure_9 = createStyles(obj);
let items = [{ label: "Branch Name", value: "branch", icon: jsx(TagIcon.TagIcon, {}) }, ];
const obj4 = { label: "Branch Name", value: "branch", icon: jsx(TagIcon.TagIcon, {}) };
let obj5 = { label: "Commit SHA", value: "id", icon: jsx(HashmarkIcon.HashmarkIcon, {}) };
items[1] = obj5;
const memoResult = react.memo(() => {
  let closure_2;
  let currentBuildOverride;
  let first;
  let items1;
  let stateFromStores;
  const f118785 = (value) => value.value === first.type;
  let tmp = closure_9();
  const insets = first(6402)({ includeKeyboardHeight: true }).insets;
  let obj = stateFromStores(504);
  items = [BuildOverrideStore];
  stateFromStores = obj.useStateFromStores(items, () => {
    const overrides = currentBuildOverride.getCurrentBuildOverride().overrides;
    let tmp;
    if (overrides != null) {
      tmp = overrides[stateFromStores(undefined, closure_2[11]).DEVICE_FIELD];
    }
    return tmp;
  });
  [first, dependencyMap] = react.useState({ type: "branch", id: "" });
  let obj3 = { paddingBottom: tmp.contentContainer.padding + insets.bottom };
  let merged = Object.assign(tmp.contentContainer);
  let tmp10Result = null;
  const Stack = stateFromStores(5279).Stack;
  if (null != stateFromStores) {
    const TableRowGroup = tmp3(5999).TableRowGroup;
    const TableRow = tmp3(5917).TableRow;
    const found = items.find(f118785);
    let label;
    if (found != null) {
      label = found.label;
    }
    const obj5 = { title: "Current Override", hasIcons: true, children: items1 };
    items1 = [
      <TableRow icon={null} label={label} subLabel={stateFromStores.id} onPress={function onPress() {
          const obj = ClipboardUtils;
          obj.copy(stateFromStores.id);
          const obj2 = ToastUtils;
          const result = obj2.presentCopiedToClipboard();
        }} />,
  ,

    ];
    const TableRow2 = tmp3(5917).TableRow;
    items1[1] = <TableRow2 icon={null} label="Refresh Override" onPress={stateFromStores(11267).refreshBuildOverride} arrow />;
    const TableRow3 = tmp3(5917).TableRow;
    items1[2] = <TableRow3 icon={null} label="Clear Override" variant="danger" onPress={stateFromStores(11267).clearBuildOverride} arrow />;
    tmp10Result = tmp10(TableRowGroup, obj5);
  }
  const items2 = [tmp10Result, , , ];
  let str = "";
  const TableRadioGroup = tmp3(5997).TableRadioGroup;
  if (null != stateFromStores) {
    str = "New";
  }
  items2[1] = <TableRadioGroup title={`${str} Override Type`} defaultValue={first.type} onChange={function onChange(type) {
    const obj = { type, id: "" };
    closure_2(obj);
  }} hasIcons>{items.map((value) => {
    let icon;
    let label;
    value = value.value;
    ({ icon, label } = value);
    return jsx(stateFromStores(closure_2[21]).TableRadioRow, { value, label, icon }, value);
  })}</TableRadioGroup>;
  const TableRowGroup2 = tmp3(5999).TableRowGroup;
  const found1 = items.find(f118785);
  let label1;
  if (found1 != null) {
    label1 = found1.label;
  }
  const TableRow4 = tmp3(5917).TableRow;
  const found2 = arr4.find((value) => value.value === first.type);
  let icon;
  if (found2 != null) {
    icon = found2.icon;
  }
  const TextInput = tmp3(6024).TextInput;
  const found3 = arr4.find(f118785);
  let label2;
  if (found3 != null) {
    label2 = found3.label;
  }
  ({
    size: "md",
    placeholder: "Enter " + label2,
    onChange(id) {
      const obj = { id };
      const merged = Object.assign(first);
      closure_2(obj);
    },
    autoCapitalize: "none",
    autoCorrect: false,
    autoComplete: "off",
    clearable: true
  });
  items2[2] = <TableRowGroup2 title={label1} hasIcons>{null}</TableRowGroup2>;
  items2[3] = jsx(stateFromStores(5281).Button, {
    text: "Apply Build Override",
    disabled: "" === first.id,
    onPress() {
      const type = first.type;
      if ("branch" === type) {
        const obj3 = build_overrides_BuildOverrideUtils;
        const result = obj3.setBuildOverrideForBranch(tmp.id);
      } else if ("id" === type) {
        const obj2 = build_overrides_BuildOverrideUtils;
        const result1 = obj2.setBuildOverrideForId(tmp.id);
      } else {
        const obj = GlobalUtils;
        obj.assertNever(first.type);
      }
    }
  });
  return <tmp8 style={tmp.content} contentContainerStyle={obj3}>{null}</tmp8>;
});
let result = size.fileFinishedImporting("modules/devtools/native/components/screens/DevToolsBuildOverrideScreen.tsx");

export default memoResult;
