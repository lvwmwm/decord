// Module ID: 13564
// Function ID: 104328
// Name: jsx
// Dependencies: [57, 31, 27, 10469, 33, 4130, 689, 7512, 13565, 5160, 566, 10966, 4541, 5501, 5165, 4078, 5490, 3830, 13562, 4089, 7654, 7653, 7574, 4543, 1327, 2]

// Module 13564 (jsx)
import _slicedToArray from "_slicedToArray";
import importAllResult from "result";
import { ScrollView } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
const jsx = jsxProd.jsx;
const jsxs = jsxProd.jsxs;
let obj = {};
obj = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, flex: 1 };
obj.content = obj;
_createForOfIteratorHelperLoose = { padding: require("_createForOfIteratorHelperLoose").space.PX_16 };
obj.contentContainer = _createForOfIteratorHelperLoose;
let closure_9 = _createForOfIteratorHelperLoose.createStyles(obj);
let obj2 = { label: "Branch Name", value: "branch", icon: jsx(require("TagIcon").TagIcon, {}) };
let items = [obj2, ];
let obj3 = { label: "Commit SHA", value: "id", icon: jsx(require("HashmarkIcon").HashmarkIcon, {}) };
items[1] = obj3;
const memoResult = importAllResult.memo(() => {
  function getLabel(first) {
    let closure_0 = first;
    const found = outer1_10.find((value) => value.value === type.type);
    let label;
    if (null != found) {
      label = found.label;
    }
    return label;
  }
  let tmp = callback2();
  let obj = stateFromStores(566);
  const items = [_isNativeReflectConstruct];
  stateFromStores = obj.useStateFromStores(items, () => {
    const overrides = outer1_6.getCurrentBuildOverride().overrides;
    let tmp;
    if (null != overrides) {
      tmp = overrides[stateFromStores(undefined, 10966).DEVICE_FIELD];
    }
    return tmp;
  });
  const tmp3 = callback(importAllResult.useState({ type: "branch", id: "" }), 2);
  const first = tmp3[0];
  const dependencyMap = tmp3[1];
  obj = { style: tmp.content };
  obj = {};
  let merged = Object.assign(tmp.contentContainer);
  obj["paddingBottom"] = tmp.contentContainer.padding + first(5160)({ includeKeyboardHeight: true }).insets.bottom;
  obj.contentContainerStyle = obj;
  const obj1 = { spacing: 16 };
  let tmp9 = null;
  if (null != stateFromStores) {
    let obj2 = { title: "Current Override", hasIcons: true };
    let obj3 = {
      icon: jsx(stateFromStores(4078).CopyIcon, {}),
      label: getLabel(stateFromStores),
      subLabel: stateFromStores.id,
      onPress() {
          stateFromStores(5490).copy(stateFromStores.id);
          const obj = stateFromStores(5490);
          const result = stateFromStores(3830).presentCopiedToClipboard();
        }
    };
    const items1 = [
      jsx(stateFromStores(5165).TableRow, {
          icon: jsx(stateFromStores(4078).CopyIcon, {}),
          label: getLabel(stateFromStores),
          subLabel: stateFromStores.id,
          onPress() {
              stateFromStores(5490).copy(stateFromStores.id);
              const obj = stateFromStores(5490);
              const result = stateFromStores(3830).presentCopiedToClipboard();
            }
        }),
  ,

    ];
    const obj4 = { icon: jsx(stateFromStores(13562).RefreshIcon, {}), label: "Refresh Override", onPress: stateFromStores(10966).refreshBuildOverride, arrow: true };
    items1[1] = jsx(stateFromStores(5165).TableRow, { icon: jsx(stateFromStores(13562).RefreshIcon, {}), label: "Refresh Override", onPress: stateFromStores(10966).refreshBuildOverride, arrow: true });
    const obj5 = { icon: null, label: "Clear Override", variant: "danger", onPress: null, arrow: true };
    const obj6 = { color: "text-feedback-critical" };
    obj5.icon = jsx(stateFromStores(4089).TrashIcon, { color: "text-feedback-critical" });
    obj5.onPress = stateFromStores(10966).clearBuildOverride;
    items1[2] = jsx(stateFromStores(5165).TableRow, { icon: null, label: "Clear Override", variant: "danger", onPress: null, arrow: true });
    obj2.children = items1;
    tmp9 = jsxs(stateFromStores(5501).TableRowGroup, { title: "Current Override", hasIcons: true });
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
    dependencyMap({ type, id: "" });
  };
  obj7.hasIcons = true;
  obj7.children = items.map((value) => {
    let icon;
    let label;
    value = value.value;
    ({ icon, label } = value);
    return outer1_7(stateFromStores(7653).TableRadioRow, { value, label, icon }, value);
  });
  items2[1] = jsx(stateFromStores(7654).TableRadioGroup, {});
  const obj8 = { title: getLabel(first), hasIcons: true };
  const obj9 = {};
  let found = items.find((value) => value.value === first.type);
  let icon;
  if (null != found) {
    icon = found.icon;
  }
  obj9.icon = icon;
  const obj10 = {
    size: "md",
    placeholder: "Enter " + getLabel(first),
    onChange(arg0) {
      const obj = {};
      const merged = Object.assign(first);
      obj["id"] = arg0;
      dependencyMap(obj);
    },
    autoCapitalize: "none",
    autoCorrect: false,
    autoComplete: "off",
    isClearable: true
  };
  obj9.label = jsx(stateFromStores(7574).TextInput, {
    size: "md",
    placeholder: "Enter " + getLabel(first),
    onChange(arg0) {
      const obj = {};
      const merged = Object.assign(first);
      obj["id"] = arg0;
      dependencyMap(obj);
    },
    autoCapitalize: "none",
    autoCorrect: false,
    autoComplete: "off",
    isClearable: true
  });
  obj8.children = jsx(stateFromStores(5165).TableRow, {});
  items2[2] = jsx(stateFromStores(5501).TableRowGroup, { title: getLabel(first), hasIcons: true });
  items2[3] = jsx(stateFromStores(4543).Button, {
    text: "Apply Build Override",
    disabled: "" === first.id,
    onPress() {
      const type = first.type;
      if ("branch" === type) {
        const result = stateFromStores(10966).setBuildOverrideForBranch(first.id);
        const obj3 = stateFromStores(10966);
      } else if ("id" === type) {
        const result1 = stateFromStores(10966).setBuildOverrideForId(first.id);
        const obj2 = stateFromStores(10966);
      } else {
        stateFromStores(1327).assertNever(first.type);
        const obj = stateFromStores(1327);
      }
    }
  });
  obj1.children = items2;
  obj.children = jsxs(stateFromStores(4541).Stack, { spacing: 16 });
  return <ScrollView />;
});
let result = require("get ActivityIndicator").fileFinishedImporting("modules/devtools/native/components/screens/DevToolsBuildOverrideScreen.tsx");

export default memoResult;
