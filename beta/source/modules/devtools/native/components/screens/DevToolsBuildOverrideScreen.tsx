// Module ID: 15863
// Function ID: 15864
// Name: DevToolsBuildOverrideScreen
// Dependencies: [32, 19, 17, 11717, 21, 4788, 576, 9173, 15864, 7258, 504, 12072, 5216, 5936, 5854, 4734, 7466, 4485, 15428, 4745, 5934, 5937, 6880, 5218, 1370, 2]

// Module 15863 (DevToolsBuildOverrideScreen)
import nativeDefault from "native" /* 576 */;
import GlobalUtils from "GlobalUtils" /* 1370 */;
import ToastUtils from "ToastUtils" /* 4485 */;
import ClipboardUtils from "ClipboardUtils" /* 7466 */;
import build_overrides_BuildOverrideUtils from "build_overrides/BuildOverrideUtils" /* 12072 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import BuildOverrideStore from "BuildOverrideStore" /* 11717 */;

require = fn;
const ScrollView = fn(17).ScrollView;
const jsxProd = fn(21);
const jsx = jsxProd.jsx;
const jsxs = jsxProd.jsxs;
const createStyles = fn(4788);
let obj = { content: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 }, contentContainer: null };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
obj.contentContainer = { padding: nativeDefault.space.PX_16 };
let closure_9 = createStyles.createStyles(obj);
let obj4 = { padding: nativeDefault.space.PX_16 };
let items = [{ label: "Branch Name", value: "branch", icon: jsx(fn(9173).TagIcon, {}) }, ];
let obj5 = { label: "Branch Name", value: "branch", icon: jsx(fn(9173).TagIcon, {}) };
items[1] = { label: "Commit SHA", value: "id", icon: jsx(fn(15864).HashmarkIcon, {}) };
let obj6 = { label: "Commit SHA", value: "id", icon: jsx(fn(15864).HashmarkIcon, {}) };
const size = fn(2);
let result = size.fileFinishedImporting("modules/devtools/native/components/screens/DevToolsBuildOverrideScreen.tsx");

export default noop.memo(() => {
  let tmp = closure_9();
  items = [BuildOverrideStore];
  const stateFromStores = first(504).useStateFromStores(items, () => {
    const overrides = currentBuildOverride.getCurrentBuildOverride().overrides;
    let tmp;
    if (overrides != null) {
      tmp = overrides[first(undefined, 12072).DEVICE_FIELD];
    }
    return tmp;
  });
  first = stateFromStores;
  [first, dependencyMap] = noop.useState({ type: "branch", id: "" });
  let obj2 = { style: tmp.content, contentContainerStyle: null, children: null };
  let obj3 = {};
  let merged = Object.assign(tmp.contentContainer);
  obj3.paddingBottom = tmp.contentContainer.padding + first(7258)({ includeKeyboardHeight: true }).insets.bottom;
  obj2.contentContainerStyle = obj3;
  let tmp10Result = null;
  if (null != stateFromStores) {
    const obj4 = { icon: tmp7(tmp3(4734).CopyIcon, {}), label: null, subLabel: null, onPress: null };
    first = stateFromStores;
    const found = items.find((value) => value.value === first.type);
    let label;
    if (found != null) {
      label = found.label;
    }
    const obj5 = { title: "Current Override", hasIcons: true, children: null };
    obj4.label = label;
    obj4.subLabel = stateFromStores.id;
    obj4.onPress = function onPress() {
      ClipboardUtils.copy(first.id);
      const result = ToastUtils.presentCopiedToClipboard();
    };
    const items1 = [tmp7(tmp3(5854).TableRow, obj4), , ];
    const obj6 = { icon: tmp7(tmp3(15428).RefreshIcon, {}), label: "Refresh Override", onPress: tmp3(12072).refreshBuildOverride, arrow: true };
    items1[1] = tmp7(tmp3(5854).TableRow, obj6);
    const obj7 = { icon: tmp7(tmp3(4745).TrashIcon, { color: "text-feedback-critical" }), label: "Clear Override", variant: "danger", onPress: tmp3(12072).clearBuildOverride, arrow: true };
    items1[2] = tmp7(tmp3(5854).TableRow, obj7);
    obj5.children = items1;
    tmp10Result = tmp10(tmp3(5936).TableRowGroup, obj5);
  }
  const items2 = [tmp10Result, , , ];
  let str = "";
  if (null != stateFromStores) {
    str = "New";
  }
  let obj = first(504);
  items2[1] = jsx(first(5934).TableRadioGroup, {
    title: `${str} Override Type`,
    defaultValue: first.type,
    onChange(type) {
      dependencyMap({ type, id: "" });
    },
    hasIcons: true,
    children: items.map((value) => {
      value = value.value;
      ({ icon, label } = value);
      return jsx(first(5937).TableRadioRow, { value, label, icon }, value);
    })
  });
  const found1 = items.find((value) => value.value === first.type);
  let label1;
  if (found1 != null) {
    label1 = found1.label;
  }
  const obj9 = { title: label1, hasIcons: true, children: null };
  const found2 = arr4.find((value) => value.value === first.type);
  let icon;
  if (found2 != null) {
    icon = found2.icon;
  }
  const obj10 = { icon, label: null };
  const found3 = arr4.find((value) => value.value === first.type);
  let label2;
  if (found3 != null) {
    label2 = found3.label;
  }
  const obj11 = { spacing: 16, children: null };
  const obj8 = {
    title: `${str} Override Type`,
    defaultValue: first.type,
    onChange(type) {
      dependencyMap({ type, id: "" });
    },
    hasIcons: true,
    children: items.map((value) => {
      value = value.value;
      ({ icon, label } = value);
      return jsx(first(5937).TableRadioRow, { value, label, icon }, value);
    })
  };
  obj10.label = jsx(first(6880).TextInput, {
    size: "md",
    placeholder: "Enter " + label2,
    onChange(id) {
      const obj = {};
      const merged = Object.assign(first);
      obj.id = id;
      dependencyMap(obj);
    },
    autoCapitalize: "none",
    autoCorrect: false,
    autoComplete: "off",
    clearable: true
  });
  obj9.children = jsx(first(5854).TableRow, { icon, label: null });
  items2[2] = jsx(first(5936).TableRowGroup, { title: label1, hasIcons: true, children: null });
  items2[3] = jsx(first(5218).Button, {
    text: "Apply Build Override",
    disabled: "" === first.id,
    onPress() {
      const type = first.type;
      if ("branch" === type) {
        const result = build_overrides_BuildOverrideUtils.setBuildOverrideForBranch(tmp.id);
      } else if ("id" === type) {
        const result1 = build_overrides_BuildOverrideUtils.setBuildOverrideForId(tmp.id);
      } else {
        GlobalUtils.assertNever(tmp.type);
      }
    }
  });
  obj11.children = items2;
  obj2.children = jsxs(first(5216).Stack, { spacing: 16, children: null });
  return <tmp8 style={tmp.content} contentContainerStyle={null}>{null}</tmp8>;
});
