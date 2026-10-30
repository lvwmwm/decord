// Module ID: 17508
// Function ID: 17509
// Name: DevToolsBuildOverrideScreen
// Dependencies: [32, 19, 17, 11325, 21, 5009, 575, 9544, 17509, 5602, 504, 13142, 6022, 7054, 6969, 5726, 7352, 5706, 12518, 5733, 7052, 7055, 7076, 5629, 1380, 2]

// Module 17508 (DevToolsBuildOverrideScreen)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import GlobalUtils from "GlobalUtils" /* 1380 */;
import ToastUtils from "ToastUtils" /* 5706 */;
import ClipboardUtils from "ClipboardUtils" /* 7352 */;
import TagIcon from "TagIcon" /* 9544 */;
import build_overrides_BuildOverrideUtils from "build_overrides/BuildOverrideUtils" /* 13142 */;
import HashmarkIcon from "HashmarkIcon" /* 17509 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import BuildOverrideStore from "BuildOverrideStore" /* 11325 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
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
const memoResult = react.memo(function UserSettingsBuildOverride() {
  let closure_2;
  let currentBuildOverride;
  let first;
  let items1;
  let stateFromStores;
  const f130153 = (value) => value.value === first.type;
  let tmp = closure_9();
  const insets = first(5602)({ includeKeyboardHeight: true }).insets;
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
  const Stack = stateFromStores(6022).Stack;
  if (null != stateFromStores) {
    const TableRowGroup = tmp3(7054).TableRowGroup;
    const TableRow = tmp3(6969).TableRow;
    const found = items.find(f130153);
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
    const TableRow2 = tmp3(6969).TableRow;
    items1[1] = <TableRow2 icon={null} label="Refresh Override" onPress={stateFromStores(13142).refreshBuildOverride} arrow />;
    const TableRow3 = tmp3(6969).TableRow;
    items1[2] = <TableRow3 icon={null} label="Clear Override" variant="danger" onPress={stateFromStores(13142).clearBuildOverride} arrow />;
    tmp10Result = tmp10(TableRowGroup, obj5);
  }
  const items2 = [tmp10Result, , , ];
  let str = "";
  const TableRadioGroup = tmp3(7052).TableRadioGroup;
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
  const TableRowGroup2 = tmp3(7054).TableRowGroup;
  const found1 = items.find(f130153);
  let label1;
  if (found1 != null) {
    label1 = found1.label;
  }
  const TableRow4 = tmp3(6969).TableRow;
  const found2 = arr4.find((value) => value.value === first.type);
  let icon;
  if (found2 != null) {
    icon = found2.icon;
  }
  const TextInput = tmp3(7076).TextInput;
  const found3 = arr4.find(f130153);
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
  items2[3] = jsx(stateFromStores(5629).Button, {
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
