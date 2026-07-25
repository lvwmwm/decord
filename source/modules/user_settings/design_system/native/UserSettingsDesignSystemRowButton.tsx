// Module ID: 14490
// Function ID: 110740
// Name: UserSettingsDesignSystemRowButton
// Dependencies: [31, 27, 33, 7575, 4542, 689, 4127, 7578, 8944, 2]
// Exports: default

// Module 14490 (UserSettingsDesignSystemRowButton)
import "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";

let closure_3;
let closure_4;
let closure_5;
let closure_6;
const require = arg1;
({ View: closure_3, ScrollView: closure_4 } = get_ActivityIndicator);
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
const result = require("jsxProd").fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemRowButton.tsx");

export default function UserSettingsDesignSystemRowButton() {
  let obj = {};
  obj = { title: "Row Buttons" };
  obj = {};
  const obj1 = { padding: importDefault(689).space.PX_16 };
  obj.style = obj1;
  const items = [callback(require(4127) /* Text */.Text, { variant: "text-sm/normal", children: "Row Button Row Buttons are full-width, high-emphasis buttons that are used as primary CTAs in a page." }), callback(require(4127) /* Text */.Text, { variant: "text-sm/normal", children: "Only stack up to 2 Row Buttons in a row to to prevent decision fatigue." })];
  obj.children = items;
  obj.description = callback2(require(4542) /* Stack */.Stack, obj);
  obj.children = callback(closure_3, {});
  const items1 = [callback(require(7575) /* Form */.FormSection, obj), ];
  const obj2 = { style: { padding: 16 } };
  const obj3 = {};
  const obj4 = {
    variant: "primary",
    icon: importDefault(8944),
    label: "Primary Row Button",
    onPress() {

    }
  };
  const items2 = [callback(require(7578) /* RowButtonWrapper */.RowButton, obj4), , , , , , ];
  const obj5 = {
    variant: "primary",
    icon: importDefault(8944),
    label: "Primary Row Button",
    subLabel: "I am a high emphasis button with a subLabel",
    onPress() {

    }
  };
  items2[1] = callback(require(7578) /* RowButtonWrapper */.RowButton, obj5);
  const obj6 = {
    variant: "secondary",
    icon: importDefault(8944),
    label: "Secondary Row Button",
    onPress() {

    }
  };
  items2[2] = callback(require(7578) /* RowButtonWrapper */.RowButton, obj6);
  const obj7 = {
    icon: importDefault(8944),
    label: "Secondary Row Button",
    subLabel: "I am a high emphasis button with a subLabel",
    onPress() {

    }
  };
  items2[3] = callback(require(7578) /* RowButtonWrapper */.RowButton, obj7);
  const obj8 = {
    icon: importDefault(8944),
    label: "Secondary Row Button",
    subLabel: "I am a high-emphasis button with more text. You can fit quite a lot of text in a row button. The text will continue to wrap",
    onPress() {

    }
  };
  items2[4] = callback(require(7578) /* RowButtonWrapper */.RowButton, obj8);
  const obj9 = { icon: null, label: "Row Button", subLabel: "With a custom RowButton.Icon" };
  const obj10 = { source: importDefault(8944) };
  obj9.icon = callback(require(7578) /* RowButtonWrapper */.RowButton.Icon, obj10);
  obj9.onPress = function onPress() {

  };
  items2[5] = callback(require(7578) /* RowButtonWrapper */.RowButton, obj9);
  const obj11 = {
    icon: importDefault(8944),
    label: "Row Button",
    subLabel: "I am disabled",
    onPress() {

    },
    disabled: true
  };
  items2[6] = callback(require(7578) /* RowButtonWrapper */.RowButton, obj11);
  obj3.children = items2;
  obj2.children = callback2(require(4542) /* Stack */.Stack, obj3);
  items1[1] = callback(closure_3, obj2);
  obj.children = items1;
  return callback2(closure_4, obj);
};
