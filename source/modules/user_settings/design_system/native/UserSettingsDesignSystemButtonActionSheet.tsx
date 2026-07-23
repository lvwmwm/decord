// Module ID: 14423
// Function ID: 110234
// Name: items
// Dependencies: [31, 33, 14421, 682, 5187, 5186, 7495, 2]
// Exports: default

// Module 14423 (items)
import result from "result";
import jsxProd from "jsxProd";

let closure_4;
let closure_5;
let require = arg1;
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
let items = [{ label: "Small", value: "sm" }, { label: "Medium", value: "md" }, { label: "Large", value: "lg" }];
let items1 = [{ value: 6, label: "6" }, { value: 8, label: "8" }];
const result = require("keys").fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemButtonActionSheet.tsx");

export default function UserSettingsDesignSystemButtonActionSheet() {
  let tmp = importDefault(14421)();
  const require = tmp;
  importDefault = React.useCallback((arg0) => {
    arg0(682).batchUpdates(() => {
      let obj = callback(table[2]);
      obj = { buttonSize: closure_0 };
      return obj.setState(obj);
    });
  }, []);
  const dependencyMap = React.useCallback((arg0) => {
    arg0(682).batchUpdates(() => {
      let obj = callback(table[2]);
      obj = { buttonScale: closure_0 };
      return obj.setState(obj);
    });
  }, []);
  React = React.useCallback((arg0) => {
    arg0(682).batchUpdates(() => {
      let obj = callback(table[2]);
      obj = { showDisabled: closure_0 };
      return obj.setState(obj);
    });
  }, []);
  const callback = React.useCallback((arg0) => {
    arg0(682).batchUpdates(() => {
      let obj = callback(table[2]);
      obj = { showIcon: closure_0 };
      return obj.setState(obj);
    });
  }, []);
  const callback2 = React.useCallback((arg0) => {
    arg0(682).batchUpdates(() => {
      let obj = callback(table[2]);
      obj = { iconPosition: closure_0 };
      return obj.setState(obj);
    });
  }, []);
  let items = React.useCallback((arg0) => {
    arg0(682).batchUpdates(() => {
      let obj = callback(table[2]);
      obj = { enableLoadingState: closure_0 };
      return obj.setState(obj);
    });
  }, []);
  let obj = {};
  items = [callback(require(5186) /* RedesignBottomSheetTitleHeaderBase */.BottomSheetTitleHeader, { title: "Button Settings" }), ];
  obj = {};
  obj = {
    title: "Button Size",
    accessibilityRole: "radiogroup",
    children: items.map((label) => {
      const value = label.value;
      let obj = {};
      obj = {
        align: "right",
        selected: tmp.buttonSize === value,
        label: label.label,
        onPress() {
          return outer1_1(closure_0);
        }
      };
      const items = [callback(value(7495).FormRadioRow, obj), callback(value(7495).FormDivider, {})];
      obj.children = items;
      return callback2(React.Fragment, obj, value);
    })
  };
  const items1 = [callback(require(7495) /* Form */.FormSection, obj), , , , , ];
  const obj1 = { title: "Button Scale", accessibilityRole: "radiogroup" };
  const items2 = [
    callback(require(7495) /* Form */.FormHint, { children: "The amount in pixels that the button width will scale when pressed" }),
    items1.map((label) => {
      const value = label.value;
      let obj = {};
      obj = {
        align: "right",
        selected: tmp.buttonScale === value,
        label: label.label,
        onPress() {
          return outer1_2(closure_0);
        }
      };
      const items = [callback(value(7495).FormRadioRow, obj), callback(value(7495).FormDivider, {})];
      obj.children = items;
      return callback2(React.Fragment, obj, value);
    })
  ];
  obj1.children = items2;
  items1[1] = callback2(require(7495) /* Form */.FormSection, obj1);
  const obj2 = {
    children: callback(require(7495) /* Form */.FormSwitchRow, {
      label: "Disabled",
      value: tmp.showDisabled,
      onValueChange(arg0) {
        return React(arg0);
      }
    })
  };
  items1[2] = callback(require(7495) /* Form */.FormSection, obj2);
  const obj4 = {
    children: callback(require(7495) /* Form */.FormSwitchRow, {
      label: "Show Icons",
      value: tmp.showIcon,
      onValueChange(arg0) {
        return callback(arg0);
      }
    })
  };
  items1[3] = callback(require(7495) /* Form */.FormSection, obj4);
  const obj6 = { title: "Icon Position", accessibilityRole: "radiogroup" };
  const items3 = [callback(require(7495) /* Form */.FormHint, { children: "Whether to show the example icon on the left (default) or right." }), ];
  const items4 = ["start", "end"];
  items3[1] = items4.map((label) => {
    let obj = {};
    obj = {
      align: "right",
      selected: tmp.iconPosition === label,
      label,
      onPress() {
        return outer1_5(closure_0);
      }
    };
    const items = [callback(label(7495).FormRadioRow, obj), callback(label(7495).FormDivider, {})];
    obj.children = items;
    return callback2(React.Fragment, obj, label);
  });
  obj6.children = items3;
  items1[4] = callback2(require(7495) /* Form */.FormSection, obj6);
  const obj7 = { title: "Loading state", accessibilityRole: "radiogroup" };
  const items5 = [callback(require(7495) /* Form */.FormHint, { children: "Whether or not to show a loading state when a button is pressed" }), ];
  const items6 = [true, false];
  items5[1] = items6.map((arg0) => {
    let tmp = arg0;
    let obj = {};
    tmp = closure_5;
    obj = { align: "right", selected: tmp.enableLoadingState === arg0 };
    let str = "Disabled";
    if (true === arg0) {
      str = "Enabled";
    }
    obj.label = str;
    obj.onPress = function onPress() {
      return outer1_6(closure_0);
    };
    const items = [callback(tmp(7495).FormRadioRow, obj), callback(tmp(7495).FormDivider, {})];
    obj.children = items;
    let str2 = "disabled";
    if (true === arg0) {
      str2 = "enabled";
    }
    return tmp(React.Fragment, obj, str2);
  });
  obj7.children = items5;
  items1[5] = callback2(require(7495) /* Form */.FormSection, obj7);
  obj.children = items1;
  items[1] = callback2(require(7495) /* Form */.Form, obj);
  obj.children = items;
  return callback2(require(5187) /* Background */.BottomSheet, obj);
};
