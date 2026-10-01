// Module ID: 15388
// Function ID: 15389
// Name: UserSettingsDesignSystemTextInput
// Dependencies: [32, 19, 17, 21, 4836, 576, 5919, 5279, 6024, 5404, 13988, 6571, 6570, 6506, 4832, 5394, 6025, 6471, 7363, 6798, 6031, 5281, 4800, 6385, 2]
// Exports: default

// Module 15388 (UserSettingsDesignSystemTextInput)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import Text_Text from "Text/Text" /* 4832 */;
import Stack_Stack from "Stack/Stack" /* 5279 */;
import components_Button_Button from "components/Button/Button" /* 5281 */;
import TextIcon from "TextIcon" /* 5394 */;
import Card_Card from "Card/Card" /* 5919 */;
import TextInput_TextInput from "TextInput/TextInput" /* 6024 */;
import Input2 from "Input" /* 6025 */;
import TextField from "TextField" /* 6031 */;
import SplitTextInput from "SplitTextInput" /* 6385 */;
import SearchField from "SearchField" /* 6471 */;
import TextArea from "TextArea" /* 6506 */;
import BottomSheetTitleHeader from "BottomSheetTitleHeader" /* 6570 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 6571 */;
import SettingsIcon from "SettingsIcon" /* 6798 */;
import IconButton2 from "IconButton" /* 7363 */;
import GhostInput2 from "GhostInput" /* 13988 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let BottomSheet;

let metroImportDefault;
let metroRequire;
let obj2;
let tmp6;
const AtIcon = tmp6(5404);
function Sample(children) {
  children = children.children;
  const obj = { shadow: "low", style: closure_8().sample, children: metroRequire(Stack_Stack.Stack, { spacing: 24, children }) };
  const Card = Card_Card.Card;
  return metroRequire(Card, obj);
}
function InputUsername(defaultValue) {
  let closure_129_0;
  let str3;
  let tmp4;
  defaultValue = defaultValue.defaultValue;
  let hasItem;
  let tmp = react;
  const useState = react.useState;
  if (defaultValue != null) {
    let str = " ";
    hasItem = defaultValue.includes(" ");
  }
  let str2 = "default";
  if (hasItem) {
    str2 = "error";
  }
  [tmp4, closure_129_0] = useState(str2);
  const obj = {
    status: tmp4,
    errorMessage: str3,
    label: "Username",
    leadingIcon: AtIcon.AtIcon,
    onChange(arr) {
      let str = "default";
      const tmp = closure_1_0;
      if (arr.includes(" ")) {
        str = "error";
      }
      tmp(str);
    }
  };
  _slicedToArray(useState(str2), 2);
  const TextInput = TextInput_TextInput.TextInput;
  const merged = Object.assign(defaultValue);
  str3 = undefined;
  const tmp5 = metroRequire;
  if ("error" === tmp4) {
    str3 = "Username can't contain spaces";
  }
  return tmp5(TextInput, obj);
}
function GhostInputUsername(defaultValue) {
  let closure_129_0;
  let str3;
  let tmp4;
  defaultValue = defaultValue.defaultValue;
  let hasItem;
  let tmp = react;
  const useState = react.useState;
  if (defaultValue != null) {
    let str = " ";
    hasItem = defaultValue.includes(" ");
  }
  let str2 = "default";
  if (hasItem) {
    str2 = "error";
  }
  [tmp4, closure_129_0] = useState(str2);
  const obj = {
    status: tmp4,
    errorMessage: str3,
    onChange(arr) {
      let str = "default";
      const tmp = closure_1_0;
      if (arr.includes(" ")) {
        str = "error";
      }
      tmp(str);
    }
  };
  _slicedToArray(useState(str2), 2);
  const GhostInput = GhostInput2.GhostInput;
  const merged = Object.assign(defaultValue);
  str3 = undefined;
  const tmp5 = metroRequire;
  if ("error" === tmp4) {
    str3 = "Username can't contain spaces";
  }
  return tmp5(GhostInput, obj);
}
function GhostInputActionSheet() {
  let items;
  let obj3;
  const obj = { children: items };
  BottomSheet = Sheet_BottomSheet.BottomSheet;
  items = [metroRequire(BottomSheetTitleHeader.BottomSheetTitleHeader, { title: "Ghost Input - Centered" }), ];
  const obj2 = { style: { padding: 12 }, children: metroRequire(Sample, obj3) };
  obj3 = { children: metroRequire(GhostInputUsername, { placeholder: "@wumpus", description: "You can use up to 16 alpha-numeric characters" }) };
  const Stack = Stack_Stack.Stack;
  items[1] = metroRequire(Stack, obj2);
  return metroImportDefault(BottomSheet, obj);
}
function GhostInputActionSheetLeftAligned() {
  let items;
  let obj3;
  const obj = { children: items };
  BottomSheet = Sheet_BottomSheet.BottomSheet;
  items = [metroRequire(BottomSheetTitleHeader.BottomSheetTitleHeader, { title: "Ghost Input - Left Aligned" }), ];
  const obj2 = { style: { padding: 12 }, children: metroRequire(Sample, obj3) };
  obj3 = { children: metroRequire(GhostInputUsername, { placeholder: "@wumpus", description: "You can use up to 16 alpha-numeric characters", centered: false, size: "md" }) };
  const Stack = Stack_Stack.Stack;
  items[1] = metroRequire(Stack, obj2);
  return metroImportDefault(BottomSheet, obj);
}
function CustomAttachmentExample() {
  let closure_129_0;
  let closure_129_1;
  let str;
  let tmp2;
  let tmp4;
  [tmp2, closure_129_0] = _slicedToArray(react.useState("default"), 2);
  const tmp = _slicedToArray(react.useState("default"), 2);
  [tmp4, closure_129_1] = react.useState("");
  const obj = {
    status: tmp2,
    errorMessage: str,
    label: "Pressable Attachment",
    value: tmp4,
    trailingPressableProps: {
      onPress() {
        return closure_1_1("You pressed the icon");
      },
      accessibilityLabel: "Press"
    },
    trailingIcon: AtIcon.AtIcon,
    onChange(arr) {
      closure_1_1(arr);
      let str = "default";
      const tmp2 = closure_1_0;
      if (arr.includes(" ")) {
        str = "error";
      }
      tmp2(str);
    }
  };
  str = undefined;
  _slicedToArray(react.useState(""), 2);
  const TextInput = TextInput_TextInput.TextInput;
  const tmp5 = metroRequire;
  if ("error" === tmp2) {
    str = "Username can't contain spaces";
  }
  return tmp5(TextInput, obj);
}
const ScrollView = react_native.ScrollView;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let obj = { container: { padding: 16 }, sample: obj2 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderRadius: nativeDefault.radii.xl };
let closure_8 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemTextInput.tsx");

export default function UserSettingsDesignSystemTextInput() {
  let Input;
  let Stack;
  let items;
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let obj11;
  let obj18;
  let obj2;
  let obj20;
  let obj = { children: metroImportDefault(Stack, obj2) };
  obj2 = { spacing: 24, style: closure_8().container, children: items1 };
  const obj3 = { children: items };
  Stack = Stack_Stack.Stack;
  items = [metroRequire(TextInput_TextInput.TextInput, { label: "Input Label", placeholder: "Placeholder text", description: "Descriptions give context for the input.", errorMessage: "Error messages communicate invalid states." }), metroRequire(TextArea.TextArea, { label: "Text Area", maxLength: 100, placeholder: "Multiline inputs use TextArea" }), metroRequire(TextInput_TextInput.TextInput, { label: "Password", secureTextEntry: true, placeholder: "Password", clearable: true }), metroRequire(TextInput_TextInput.TextInput, { label: "Required Field", placeholder: "Placeholder", description: "Required inputs are indicated with an asterisk.", required: true })];
  items1 = [metroImportDefault(Sample, obj3), metroRequire(Text_Text.Text, { variant: "heading-lg/bold", children: "Sizing" }), metroRequire(Text_Text.Text, { variant: "text-md/normal", children: "All inputs except TextArea accept a size prop, either sm, md, or lg. By default, inputs will use the large variant." }), , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ];
  const obj4 = { children: items2 };
  items2 = [metroRequire(TextInput_TextInput.TextInput, { label: "Small", size: "sm" }), metroRequire(TextInput_TextInput.TextInput, { label: "Medium", size: "md" }), metroRequire(TextInput_TextInput.TextInput, { label: "Large (default)" })];
  items1[3] = metroImportDefault(Sample, obj4);
  items1[4] = metroRequire(Text_Text.Text, { variant: "heading-lg/bold", children: "Attachments" });
  items1[5] = metroRequire(Text_Text.Text, { variant: "text-md/normal", children: "Inputs can have either text and icon attachments, either on the leading or trailing edge. If both text and icon are given for a single side, the icon will take precedence." });
  const obj5 = { children: items3 };
  const obj6 = { label: "Leading icon", leadingIcon: TextIcon.TextIcon };
  const TextInput = TextInput_TextInput.TextInput;
  items3 = [metroRequire(TextInput, obj6), , , ];
  const obj7 = { label: "Trailing icon", trailingIcon: TextIcon.TextIcon };
  const TextInput2 = TextInput_TextInput.TextInput;
  items3[1] = metroRequire(TextInput2, obj7);
  items3[2] = metroRequire(TextInput_TextInput.TextInput, { label: "Leading text", leadingText: "To:" });
  const obj8 = { label: "Combination", leadingText: "To:", trailingIcon: AtIcon.AtIcon };
  const TextInput3 = TextInput_TextInput.TextInput;
  items3[3] = metroRequire(TextInput3, obj8);
  items1[6] = metroImportDefault(Sample, obj5);
  items1[7] = metroRequire(Text_Text.Text, { variant: "text-md/normal", children: "Text attachments should be kept as short as possible to preserve space for the user to see their input value while editing." });
  items1[8] = metroRequire(Text_Text.Text, { variant: "heading-lg/bold", children: "Pressable Attachments" });
  items1[9] = metroRequire(Text_Text.Text, { variant: "text-md/normal", children: "Inputs do not allow custom nodes to be passed as leading or trailing attachments, but they can be made interactive by passing `*PressableProps` respectively. If given, the attachment will be wrapped by a Pressable and have the props passed to it." });
  const obj9 = { children: metroRequire(CustomAttachmentExample, {}) };
  items1[10] = metroRequire(Sample, obj9);
  items1[11] = metroRequire(Text_Text.Text, { variant: "text-md/normal", children: "Note that the props do not allow for changing the styling of the pressable. Styling is instead handled by the Input itself." });
  items1[12] = metroRequire(Text_Text.Text, { variant: "heading-lg/bold", children: "Rounding" });
  items1[13] = metroRequire(Text_Text.Text, { variant: "text-md/normal", children: "All inputs except TextArea can use the round prop to fully round out the sides. Round variants should only be used when adjacent to another round element, like an IconButton." });
  const obj10 = { children: metroImportDefault(Input, obj11) };
  obj11 = { children: items4 };
  Input = Input2.Input;
  items4 = [metroRequire(SearchField.SearchField, { size: "md", round: true }), ];
  const obj12 = {
    icon: metroRequire(SettingsIcon.SettingsIcon, { size: "sm" }),
    accessibilityLabel: "Settings",
    onPress() {
      return null;
    },
    variant: "tertiary"
  };
  const IconButton = IconButton2.IconButton;
  items4[1] = metroRequire(IconButton, obj12);
  items1[14] = metroRequire(Sample, obj10);
  items1[15] = metroRequire(Text_Text.Text, { variant: "heading-lg/bold", children: "Error States" });
  items1[16] = metroRequire(Text_Text.Text, { variant: "text-md/normal", children: "The status prop communicates the overall state of the input. Setting status to \"error\" will render a red ring around the input. Note that errorMessage will always be displayed regardless of status." });
  const obj13 = { children: items5 };
  items5 = [metroRequire(InputUsername, { defaultValue: "a space" }), metroRequire(TextArea.TextArea, { label: "About me", maxLength: 100, placeholder: "Long form text use TextArea", errorMessage: "This is an example of a multiline error message to showcase the icon alignment to this text" })];
  items1[17] = metroImportDefault(Sample, obj13);
  items1[18] = metroRequire(Text_Text.Text, { variant: "heading-lg/bold", children: "Clearable" });
  items1[19] = metroRequire(Text_Text.Text, { variant: "text-md/normal", children: "Inputs can use the clearable prop to let users immediately empty the input value with a button. The button is automatically rendered when the input contains a non-empty value. When pressed, the onClear callback is called, as well as the onChange with the new empty value." });
  const obj14 = { children: metroRequire(TextField.TextField, { defaultValue: "Clear this text", clearable: true }) };
  items1[20] = metroRequire(Sample, obj14);
  items1[21] = metroRequire(Text_Text.Text, { variant: "text-md/normal", children: "Certain input types automatically control the clearable prop. For example, SearchInput is always clearable. Most inputs will also replace any trailing attachment with the clear button when it is present." });
  items1[22] = metroRequire(Text_Text.Text, { variant: "heading-lg/bold", children: "Disableable" });
  items1[23] = metroRequire(Text_Text.Text, { variant: "text-md/normal", children: "The disabled prop prevents users from interacting with an input in any way. The input container will be visually dimmed." });
  const obj15 = { children: metroRequire(TextInput_TextInput.TextInput, { defaultValue: "Can't edit this value", disabled: true }) };
  items1[24] = metroRequire(Sample, obj15);
  items1[25] = metroRequire(Text_Text.Text, { variant: "text-md/normal", children: "The disabled prop prevents users from interacting with an input in any way. The input container will be visually dimmed." });
  items1[26] = metroRequire(Text_Text.Text, { variant: "heading-lg/bold", children: "Max Length" });
  items1[27] = metroRequire(Text_Text.Text, { variant: "text-md/normal", children: "Inputs can specify a maxLength prop to limit how long the user's input value can be. For TextAreas, setting a maxLength will also render an indicator in the bottom corner of how much of that length the current value takes up." });
  const obj16 = { children: metroRequire(TextArea.TextArea, { label: "Limited length", maxLength: 124 }) };
  items1[28] = metroRequire(Sample, obj16);
  items1[29] = metroRequire(Text_Text.Text, { variant: "text-md/normal", children: "Exceeding the maxLength will prevent the user from inputting any more text for the value until it has been shortened under the maximum length." });
  items1[30] = metroRequire(Text_Text.Text, { variant: "heading-lg/bold", children: "Ghost Inputs (Deprecated)" });
  items1[31] = metroRequire(Text_Text.Text, { variant: "text-md/normal", children: "GhostInput is deprecated and should not be used in new work; prefer TextInput. It is a minimal version of TextInput with no container shape, intended for cases where a single input is the primary focus of the surrounding area." });
  const obj17 = { children: metroRequire(components_Button_Button.Button, obj18) };
  obj18 = {
    onPress() {
      const obj = ActionSheetActionCreatorsDefault;
      obj.openLazy(() => Promise.resolve(closure_1_12), "ghost-input-sheet");
    },
    text: "Show example"
  };
  items1[32] = metroRequire(Sample, obj17);
  items1[33] = metroRequire(Text_Text.Text, { variant: "text-md/normal", children: "GhostInputs can also appear left-aligned by setting `centered` to false." });
  const obj19 = { children: metroRequire(components_Button_Button.Button, obj20) };
  obj20 = {
    onPress() {
      const obj = ActionSheetActionCreatorsDefault;
      obj.openLazy(() => Promise.resolve(closure_1_13), "ghost-input-sheet-left");
    },
    text: "Show left-aligned example"
  };
  items1[34] = metroRequire(Sample, obj19);
  items1[35] = metroRequire(Text_Text.Text, { variant: "heading-lg/bold", children: "Split Text Input" });
  items1[36] = metroRequire(Text_Text.Text, { variant: "text-md/normal", children: "SplitTextInput is a special TextInput extension that is primarily used for inputs that require selecting a prefix value." });
  const obj21 = { children: items6 };
  items6 = [metroRequire(SplitTextInput.SplitTextInput, { label: "Small", size: "sm", placeholder: "Placeholder", leadingText: "Click", leadingPressableProps: { accessibilityLabel: "Click" } }), metroRequire(SplitTextInput.SplitTextInput, { label: "Medium", size: "md", placeholder: "Placeholder", leadingText: "Me", leadingPressableProps: { accessibilityLabel: "Me" } }), metroRequire(SplitTextInput.SplitTextInput, { label: "Large", size: "lg", placeholder: "Placeholder", leadingText: "Here", leadingPressableProps: { accessibilityLabel: "Here" } })];
  items1[37] = metroImportDefault(Sample, obj21);
  items1[38] = metroRequire(Text_Text.Text, { variant: "heading-lg/bold", children: "Data Types" });
  items1[39] = metroRequire(Text_Text.Text, { variant: "text-md/normal", children: "Many special input types will have their own components. All inputs use a similar interface and support roughly the same set of props for styling and functionality. Examples will be added as these different types get implemented." });
  return metroRequire(ScrollView, obj);
};
