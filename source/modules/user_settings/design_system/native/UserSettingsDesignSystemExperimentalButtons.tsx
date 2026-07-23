// Module ID: 14431
// Function ID: 110302
// Name: UserSettingsDesignSystemExperimentalButtons
// Dependencies: [31, 27, 33, 3834, 689, 8372, 4541, 5503, 5172, 5787, 4079, 4543, 4126, 3842, 4554, 7498, 5792, 2]
// Exports: default

// Module 14431 (UserSettingsDesignSystemExperimentalButtons)
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
const result = require("jsxProd").fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemExperimentalButtons.tsx");

export default function UserSettingsDesignSystemExperimentalButtons() {
  let obj = require(3834) /* map */;
  const token = obj.useToken(importDefault(689).modules.mobile.TABLE_ROW_PADDING);
  let obj1 = require(8372) /* TwinButtons */;
  const collapsibleFloatingActionButtonState = obj1.useCollapsibleFloatingActionButtonState();
  let obj2 = require(8372) /* TwinButtons */;
  obj = {};
  obj = { onScroll: obj2.useCollapsibleFloatingActionButtonScroll(collapsibleFloatingActionButtonState) };
  obj1 = { spacing: importDefault(689).space.PX_24, style: { paddingHorizontal: token } };
  obj2 = { title: "Header Button", description: "A specialized version of the 'secondary-overlay' Button which functions as both a Header and a button.", hasIcons: false };
  const obj3 = {};
  const obj4 = { alignItems: "center", backgroundColor: importDefault(689).unsafe_rawColors.BG_GRADIENT_CHROMA_GLOW_1, paddingVertical: importDefault(689).space.PX_48 };
  obj3.style = obj4;
  const obj5 = {
    onPress() {

    },
    text: "Channel Name",
    icon: importDefault(5172),
    iconPosition: "end",
    accessibilityHint: "double-tap for more options",
    iconOpticalOffsetMargin: -6
  };
  obj3.children = callback(require(8372) /* TwinButtons */.HeaderButton, obj5);
  obj2.children = callback(closure_3, obj3);
  const items = [callback(require(5503) /* TableRowGroupTitle */.TableRowGroup, obj2), , , , , , ];
  const obj6 = { title: "Input Button", description: "A specialized button which looks like a text field, but functions as a button.", hasIcons: false };
  const obj7 = { spacing: importDefault(689).space.PX_24 };
  const obj8 = {
    onPress() {

    },
    size: "lg",
    text: "Search",
    icon: importDefault(5787),
    isRound: true
  };
  const items1 = [callback(require(8372) /* TwinButtons */.InputButton, obj8), ];
  const obj9 = {
    onPress() {

    },
    size: "lg",
    text: "http://discord.com/xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    icon: importDefault(4079),
    iconPosition: "end",
    accessibilityLabel: "Copy, http://discord.com/xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
  };
  items1[1] = callback(require(8372) /* TwinButtons */.InputButton, obj9);
  obj7.children = items1;
  obj6.children = callback2(require(4541) /* Stack */.Stack, obj7);
  items[1] = callback(require(5503) /* TableRowGroupTitle */.TableRowGroup, obj6);
  const obj10 = { title: "Twin Buttons", description: "TwinButtons is a specialized layout component, which renders two text buttons horizontally next to each other. A horizontal layout for text buttons is often problematic, since internationalization and font size settings can easily render these buttons unreadable. But TwinButtons will force the two buttons to stack vertically under certain conditions to avoid these issues.", hasIcons: false };
  const obj11 = {};
  const items2 = [
    callback(require(4543) /* Button */.Button, {
      onPress() {

      },
      text: "Add Status"
    }),
    callback(require(4543) /* Button */.Button, {
      onPress() {

      },
      text: "Edit Profile"
    })
  ];
  obj11.children = items2;
  obj10.children = callback2(require(8372) /* TwinButtons */.TwinButtons, obj11);
  items[2] = callback(require(5503) /* TableRowGroupTitle */.TableRowGroup, obj10);
  const obj14 = { title: "PressableScale", description: "If no button in our catelog of components is compatible with a particular design, then PressableScale can fill some gaps. It will apply the same onPress animation to a custom button.", hasIcons: false };
  const obj15 = { style: { padding: token } };
  const obj16 = {
    onPress() {

    }
  };
  const obj17 = { style: { borderColor: "pink", borderWidth: 1, borderRadius: 8, padding: 12 }, children: callback(require(4126) /* Text */.Text, { variant: "text-md/semibold", children: "This is a custom button" }) };
  obj16.children = callback(closure_3, obj17);
  obj15.children = callback(require(8372) /* TwinButtons */.PressableScale, obj16);
  obj14.children = callback(closure_3, obj15);
  items[3] = callback(require(5503) /* TableRowGroupTitle */.TableRowGroup, obj14);
  const obj18 = { title: "Experimental Blur Background Row Button", description: "Row Button Row Buttons are full-width, high-emphasis buttons that are used as primary CTAs in a page.", hasIcons: false, children: callback(closure_3, {}) };
  items[4] = callback(require(5503) /* TableRowGroupTitle */.TableRowGroup, obj18);
  const obj19 = { theme: "darker" };
  const obj20 = { style: { padding: 16 }, start: { x: 0, y: 0 }, end: { x: 1, y: 0 }, colors: ["red", "orange", "yellow", "green", "teal", "blue", "purple"] };
  const obj21 = {
    icon: importDefault(5792),
    label: "Row Button",
    subLabel: "With a blur background",
    experimental_withBlurBackground: true,
    onPress() {

    }
  };
  obj20.children = callback(require(7498) /* RowButtonWrapper */.RowButton, obj21);
  obj19.children = callback(importDefault(4554), obj20);
  items[5] = callback(require(3842) /* ManaContext */.ThemeContextProvider, obj19);
  const obj22 = { title: "Collapsible Floating Action Button", description: "A variation of the FloatingActionButton which will display some text until the user scrolls. We currently recommend the use of the FloatingActionButton over the CollapsibleFloatingActionButton, as a singular icon button without animation is more compact, understandable, and predictable.", hasIcons: false, children: callback(closure_3, { style: { padding: 48 } }) };
  items[6] = callback(require(5503) /* TableRowGroupTitle */.TableRowGroup, obj22);
  obj1.children = items;
  obj.children = callback2(require(4541) /* Stack */.Stack, obj1);
  const items3 = [callback(closure_4, obj), ];
  const obj23 = {
    icon: importDefault(5792),
    onPress() {

    },
    positionBottom: 32,
    text: "Floating Action Button",
    state: collapsibleFloatingActionButtonState
  };
  items3[1] = callback(require(8372) /* TwinButtons */.CollapsibleFloatingActionButton, obj23);
  obj.children = items3;
  return callback2(closure_3, obj);
};
