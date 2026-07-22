// Module ID: 14309
// Function ID: 108081
// Name: items
// Dependencies: []
// Exports: default

// Module 14309 (items)
let closure_3 = importAll(dependencyMap[0]);
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[1]));
const items = [{ "Null": "add", "Null": "it" }, { "Null": "text-sm/medium", "Null": "text-subtle" }, {}];
const items1 = [{ name: 25407041, rawSpec: 1106731264 }, { name: true, rawSpec: true }];
const tmp2 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemButtonActionSheet.tsx");

export default function UserSettingsDesignSystemButtonActionSheet() {
  const tmp = importDefault(closure_2[2])();
  const arg1 = tmp;
  const importDefault = React.useCallback((arg0) => {
    arg0(closure_2[3]).batchUpdates(() => {
      let obj = callback(closure_2[2]);
      obj = { buttonSize: arg0 };
      return obj.setState(obj);
    });
  }, []);
  closure_2 = React.useCallback((arg0) => {
    arg0(closure_2[3]).batchUpdates(() => {
      let obj = callback(closure_2[2]);
      obj = { buttonScale: arg0 };
      return obj.setState(obj);
    });
  }, []);
  const React = React.useCallback((arg0) => {
    arg0(closure_2[3]).batchUpdates(() => {
      let obj = callback(closure_2[2]);
      obj = { showDisabled: arg0 };
      return obj.setState(obj);
    });
  }, []);
  const callback = React.useCallback((arg0) => {
    arg0(closure_2[3]).batchUpdates(() => {
      let obj = callback(closure_2[2]);
      obj = { showIcon: arg0 };
      return obj.setState(obj);
    });
  }, []);
  const callback2 = React.useCallback((arg0) => {
    arg0(closure_2[3]).batchUpdates(() => {
      let obj = callback(closure_2[2]);
      obj = { iconPosition: arg0 };
      return obj.setState(obj);
    });
  }, []);
  let items = React.useCallback((arg0) => {
    arg0(closure_2[3]).batchUpdates(() => {
      let obj = callback(closure_2[2]);
      obj = { enableLoadingState: arg0 };
      return obj.setState(obj);
    });
  }, []);
  let obj = {};
  items = [callback(arg1(closure_2[5]).BottomSheetTitleHeader, { title: "Button Settings" }), ];
  obj = {};
  obj = {
    "Null": null,
    "Null": "Secondary Row Button",
    children: items.map((label) => {
      const value = label.value;
      let obj = {};
      obj = {
        align: "right",
        selected: tmp.buttonSize === value,
        label: label.label,
        onPress() {
          return callback(value);
        }
      };
      const items = [callback(value(closure_2[6]).FormRadioRow, obj), callback(value(closure_2[6]).FormDivider, {})];
      obj.children = items;
      return callback2(React.Fragment, obj, value);
    })
  };
  const items1 = [callback(arg1(closure_2[6]).FormSection, obj), , , , , ];
  const obj1 = { "Null": null, "Null": null };
  const items2 = [
    callback(arg1(closure_2[6]).FormHint, { children: "The amount in pixels that the button width will scale when pressed" }),
    items1.map((label) => {
      const value = label.value;
      let obj = {};
      obj = {
        align: "right",
        selected: tmp.buttonScale === value,
        label: label.label,
        onPress() {
          return callback(value);
        }
      };
      const items = [callback(value(closure_2[6]).FormRadioRow, obj), callback(value(closure_2[6]).FormDivider, {})];
      obj.children = items;
      return callback2(React.Fragment, obj, value);
    })
  ];
  obj1.children = items2;
  items1[1] = callback2(arg1(closure_2[6]).FormSection, obj1);
  const obj2 = {
    children: callback(arg1(closure_2[6]).FormSwitchRow, {
      label: "Disabled",
      value: tmp.showDisabled,
      onValueChange(arg0) {
        return React(arg0);
      }
    })
  };
  items1[2] = callback(arg1(closure_2[6]).FormSection, obj2);
  const obj4 = {
    children: callback(arg1(closure_2[6]).FormSwitchRow, {
      label: "Show Icons",
      value: tmp.showIcon,
      onValueChange(arg0) {
        return callback(arg0);
      }
    })
  };
  items1[3] = callback(arg1(closure_2[6]).FormSection, obj4);
  const obj6 = { "Null": null, "Null": null };
  const items3 = [callback(arg1(closure_2[6]).FormHint, { children: "Whether to show the example icon on the left (default) or right." }), ];
  const items4 = [false, false];
  items3[1] = items4.map((label) => {
    let obj = {};
    obj = {
      align: "right",
      selected: tmp.iconPosition === label,
      label,
      onPress() {
        return callback(arg0);
      }
    };
    const items = [callback(label(closure_2[6]).FormRadioRow, obj), callback(label(closure_2[6]).FormDivider, {})];
    obj.children = items;
    return callback2(React.Fragment, obj, label);
  });
  obj6.children = items3;
  items1[4] = callback2(arg1(closure_2[6]).FormSection, obj6);
  const obj7 = { "Null": "Row Button", "Null": "With a custom RowButton.Icon" };
  const items5 = [callback(arg1(closure_2[6]).FormHint, { children: "Whether or not to show a loading state when a button is pressed" }), ];
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
      return callback(arg0);
    };
    const items = [callback(tmp(closure_2[6]).FormRadioRow, obj), callback(tmp(closure_2[6]).FormDivider, {})];
    obj.children = items;
    let str2 = "disabled";
    if (true === arg0) {
      str2 = "enabled";
    }
    return tmp(React.Fragment, obj, str2);
  });
  obj7.children = items5;
  items1[5] = callback2(arg1(closure_2[6]).FormSection, obj7);
  obj.children = items1;
  items[1] = callback2(arg1(closure_2[6]).Form, obj);
  obj.children = items;
  return callback2(arg1(closure_2[4]).BottomSheet, obj);
};
