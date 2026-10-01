// Module ID: 15362
// Function ID: 15363
// Name: UserSettingsDesignSystemButtonActionSheet
// Dependencies: [19, 21, 15360, 1248, 6571, 6570, 8053, 2]
// Exports: default

// Module 15362 (UserSettingsDesignSystemButtonActionSheet)
import useDesignSystemSettingsStateDefault from "useDesignSystemSettingsState" /* 15360 */;
import react_mod from "react" /* 19 */;
import Fragment_mod from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let BottomSheet, _require, closure_0, dependencyMap, importDefault;

let closure_4;
let hasOwnProperty;
let react = react_mod;
let Fragment = Fragment_mod;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let items = [{ label: "Small", value: "sm" }, { label: "Medium", value: "md" }, { label: "Large", value: "lg" }];
let items1 = [{ value: 6, label: "6" }, { value: 8, label: "8" }];
const result = size.fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemButtonActionSheet.tsx");

export default function UserSettingsDesignSystemButtonActionSheet() {
  let closure_1;
  let closure_2;
  let closure_6;
  let items2;
  let items3;
  let items5;
  let obj6;
  let obj8;
  let tmp = useDesignSystemSettingsStateDefault();
  _require = tmp;
  importDefault = react.useCallback((buttonSize) => {
    let obj = buttonSize(closure_2[3]);
    obj.batchUpdates(() => {
      const obj = closure_1(closure_2[2]);
      const obj2 = { buttonSize };
      return obj.setState(obj2);
    });
  }, []);
  dependencyMap = react.useCallback((buttonScale) => {
    let obj = buttonScale(closure_2[3]);
    obj.batchUpdates(() => {
      const obj = closure_1(closure_2[2]);
      const obj2 = { buttonScale };
      return obj.setState(obj2);
    });
  }, []);
  react = react.useCallback((showDisabled) => {
    let obj = showDisabled(closure_2[3]);
    obj.batchUpdates(() => {
      const obj = closure_1(closure_2[2]);
      const obj2 = { showDisabled };
      return obj.setState(obj2);
    });
  }, []);
  let closure_4 = react.useCallback((showIcon) => {
    let obj = showIcon(closure_2[3]);
    obj.batchUpdates(() => {
      const obj = closure_1(closure_2[2]);
      const obj2 = { showIcon };
      return obj.setState(obj2);
    });
  }, []);
  let closure_5 = react.useCallback((iconPosition) => {
    let obj = iconPosition(closure_2[3]);
    obj.batchUpdates(() => {
      const obj = closure_1(closure_2[2]);
      const obj2 = { iconPosition };
      return obj.setState(obj2);
    });
  }, []);
  items = react.useCallback((enableLoadingState) => {
    let obj = enableLoadingState(closure_2[3]);
    obj.batchUpdates(() => {
      const obj = closure_1(closure_2[2]);
      const obj2 = { enableLoadingState };
      return obj.setState(obj2);
    });
  }, []);
  let obj = { children: items };
  BottomSheet = require("Sheet/BottomSheet").BottomSheet;
  items = [closure_4(require("BottomSheetTitleHeader").BottomSheetTitleHeader, { title: "Button Settings" }), ];
  let obj2 = { children: items1 };
  const Form = require("Form").Form;
  const obj3 = {
    title: "Button Size",
    accessibilityRole: "radiogroup",
    children: items.map((label) => {
      const value = label.value;
      closure_0 = value;
      const Fragment = React.Fragment;
      const obj = { children: items };
      items = [, ];
      const obj2 = {
        align: "right",
        selected: closure_0.buttonSize === value,
        label: label.label,
        onPress() {
          return closure_1(closure_0);
        }
      };
      items[0] = closure_4(closure_0(closure_2[6]).FormRadioRow, obj2);
      items[1] = closure_4(closure_0(closure_2[6]).FormDivider, {});
      return closure_5(Fragment, obj, value);
    })
  };
  const FormSection = require("Form").FormSection;
  items1 = [closure_4(FormSection, obj3), , , , , ];
  const obj4 = { title: "Button Scale", accessibilityRole: "radiogroup", children: items2 };
  const FormSection2 = require("Form").FormSection;
  items2 = [
    closure_4(require("Form").FormHint, { children: "The amount in pixels that the button width will scale when pressed" }),
    items1.map((label) => {
      const value = label.value;
      closure_0 = value;
      const Fragment = React.Fragment;
      const obj = { children: items };
      items = [, ];
      const obj2 = {
        align: "right",
        selected: closure_0.buttonScale === value,
        label: label.label,
        onPress() {
          return closure_2(closure_0);
        }
      };
      items[0] = closure_4(closure_0(closure_2[6]).FormRadioRow, obj2);
      items[1] = closure_4(closure_0(closure_2[6]).FormDivider, {});
      return closure_5(Fragment, obj, value);
    })
  ];
  items1[1] = closure_5(FormSection2, obj4);
  const obj5 = { children: closure_4(require("Form").FormSwitchRow, obj6) };
  const FormSection3 = require("Form").FormSection;
  obj6 = {
    label: "Disabled",
    value: tmp.showDisabled,
    onValueChange(arg0) {
      return React(arg0);
    }
  };
  items1[2] = closure_4(FormSection3, obj5);
  const obj7 = { children: closure_4(require("Form").FormSwitchRow, obj8) };
  const FormSection4 = require("Form").FormSection;
  obj8 = {
    label: "Show Icons",
    value: tmp.showIcon,
    onValueChange(arg0) {
      return closure_4(arg0);
    }
  };
  items1[3] = closure_4(FormSection4, obj7);
  const obj9 = { title: "Icon Position", accessibilityRole: "radiogroup", children: items3 };
  const FormSection5 = require("Form").FormSection;
  items3 = [closure_4(require("Form").FormHint, { children: "Whether to show the example icon on the left (default) or right." }), ];
  const items4 = ["start", "end"];
  items3[1] = items4.map((label) => {
    closure_0 = label;
    const Fragment = React.Fragment;
    const obj = { children: items };
    items = [, ];
    const obj2 = {
      align: "right",
      selected: closure_0.iconPosition === label,
      label,
      onPress() {
        return closure_5(label);
      }
    };
    items[0] = closure_4(closure_0(closure_2[6]).FormRadioRow, obj2);
    items[1] = closure_4(closure_0(closure_2[6]).FormDivider, {});
    return closure_5(Fragment, obj, label);
  });
  items1[4] = closure_5(FormSection5, obj9);
  const obj10 = { title: "Loading state", accessibilityRole: "radiogroup", children: items5 };
  const FormSection6 = require("Form").FormSection;
  items5 = [closure_4(require("Form").FormHint, { children: "Whether or not to show a loading state when a button is pressed" }), ];
  const items6 = [true, false];
  items5[1] = items6.map((item) => {
    let str;
    closure_0 = item;
    const Fragment = React.Fragment;
    const obj = {
      align: "right",
      selected: closure_0.enableLoadingState === item,
      label: str,
      onPress() {
        return closure_6(item);
      }
    };
    str = "Disabled";
    const FormRadioRow = closure_0(closure_2[6]).FormRadioRow;
    const tmp = closure_5;
    const tmp3 = closure_0;
    const tmp4 = closure_2;
    if (true === item) {
      str = "Enabled";
    }
    const obj2 = { children: items };
    items = [closure_4(FormRadioRow, obj), closure_4(tmp3(tmp4[6]).FormDivider, {})];
    let str2 = "disabled";
    if (true === item) {
      str2 = "enabled";
    }
    return tmp(Fragment, obj2, str2);
  });
  items1[5] = closure_5(FormSection6, obj10);
  items[1] = closure_5(Form, obj2);
  return closure_5(BottomSheet, obj);
};
