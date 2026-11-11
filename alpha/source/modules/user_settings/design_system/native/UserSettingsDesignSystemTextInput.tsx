// Module ID: 18320
// Function ID: 18321
// Name: UserSettingsDesignSystemTextInput
// Dependencies: [32, 19, 17, 21, 5243, 575, 7381, 6274, 7553, 8022, 16369, 5503, 7847, 7723, 7793, 5866, 8013, 7554, 7759, 7922, 10502, 7560, 5873, 5489, 16370, 2]
// Exports: default

// Module 18320 (UserSettingsDesignSystemTextInput)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5489 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 5503 */;
import Text_Text from "Text/Text" /* 5866 */;
import components_Button_Button from "components/Button/Button" /* 5873 */;
import Stack_Stack from "Stack/Stack" /* 6274 */;
import Card_Card from "Card/Card" /* 7381 */;
import TextInput_TextInput from "TextInput/TextInput" /* 7553 */;
import Input2 from "Input" /* 7554 */;
import TextField from "TextField" /* 7560 */;
import SearchBar from "SearchBar" /* 7759 */;
import TextArea from "TextArea" /* 7793 */;
import BottomSheetTitleHeader from "BottomSheetTitleHeader" /* 7847 */;
import IconButton2 from "IconButton" /* 7922 */;
import TextIcon from "TextIcon" /* 8013 */;
import SettingsIcon from "SettingsIcon" /* 10502 */;
import GhostInput2 from "GhostInput" /* 16369 */;
import SplitTextInput from "SplitTextInput" /* 16370 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5243 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let metroImportDefault;
let metroRequire;
let obj2;
let tmp6;
const AtIcon = tmp6(8022);
const f116256 = () => {
  let tmp = closure_0((arg0) => {
    let tmp = closure_1_8[(closure_1_8.indexOf(closure_1_8, arg0) + 1) % closure_1_8.length];
    if (tmp == null) {
      tmp = arg0;
    }
    return tmp;
  });
};
function Sample(children) {
  children = children.children;
  const obj = { shadow: "low", style: closure_9().sample, children: metroRequire(Stack_Stack.Stack, { spacing: 24, children }) };
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
    onChange: function handleChange(arr) {
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
    onChange: function handleChange(arr) {
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
  const BottomSheet = Sheet_BottomSheet.BottomSheet;
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
  const BottomSheet = Sheet_BottomSheet.BottomSheet;
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
    onChange: function handleChange(arr) {
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
function CountryCodeExample(label) {
  let closure_0;
  let obj2;
  let tmp4;
  label = label.label;
  const tmp = _slicedToArray(react.useState("US +1"), 2);
  _require = tmp[1];
  const items = [tmp[0], react.useCallback(f116256, [])];
  const tmp2 = _slicedToArray(items, 2);
  const first = tmp2[0];
  const obj = { label, description: "Tap the country code to cycle through a few examples.", placeholder: "Phone number", keyboardType: "phone-pad", leadingText: first, leadingPressableProps: obj2 };
  obj2 = { accessibilityLabel: "Country code " + first, onPress: tmp4 };
  tmp4 = tmp2[1];
  const TextInput = require("TextInput/TextInput").TextInput;
  return closure_6(TextInput, obj);
}
function PhoneOrEmailExample() {
  let closure_0;
  let first;
  let tmp10;
  let tmp4;
  let tmp6;
  let tmp7;
  let tmp = _slicedToArray(react.useState("US +1"), 2);
  _require = tmp[1];
  const items = [tmp[0], react.useCallback(f116256, [])];
  [first, tmp4] = items;
  [tmp6, tmp7] = react.useState("");
  _slicedToArray(react.useState(""), 2);
  const obj = require("PhoneOrEmailUtils");
  const result = obj.shouldShowCountryCodeSelector(undefined, tmp6);
  const obj2 = { label: "Switches like login", description: "Type three or more digits to show the country code, or an email to hide it.", placeholder: "Email or phone number", autoCapitalize: "none", onChange: tmp7, leadingText: tmp10, leadingPressableProps: { accessibilityLabel: "Country code " + first, onPress: tmp4 } };
  tmp10 = undefined;
  const TextInput = require("TextInput/TextInput").TextInput;
  const tmp9 = closure_6;
  if (result) {
    tmp10 = first;
  }
  ({ accessibilityLabel: "Country code " + first, onPress: tmp4 });
  return tmp9(TextInput, obj2);
}
const ScrollView = react_native.ScrollView;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let closure_8 = ["US +1", "CA +1", "GB +44", "JP +81"];
let obj = { container: { padding: 16 }, sample: obj2 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderRadius: nativeDefault.radii.xl };
let closure_9 = createStyles.createStyles(obj);
let result = size.fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemTextInput.tsx");

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
  let items7;
  let obj11;
  let obj19;
  let obj2;
  let obj21;
  let obj = { children: metroImportDefault(Stack, obj2) };
  obj2 = { spacing: 24, style: closure_9().container, children: items1 };
  const obj3 = { children: items };
  Stack = Stack_Stack.Stack;
  items = [metroRequire(TextInput_TextInput.TextInput, { label: "Input Label", placeholder: "Placeholder text", description: "Descriptions give context for the input.", errorMessage: "Error messages communicate invalid states." }), metroRequire(TextArea.TextArea, { label: "Text Area", maxLength: 100, placeholder: "Multiline inputs use TextArea" }), metroRequire(TextInput_TextInput.TextInput, { label: "Password", secureTextEntry: true, placeholder: "Password", clearable: true }), metroRequire(TextInput_TextInput.TextInput, { label: "Required Field", placeholder: "Placeholder", description: "Required inputs are indicated with an asterisk.", required: true })];
  items1 = [metroImportDefault(Sample, obj3), metroRequire(Text_Text.Text, { variant: "heading-lg/semibold", children: "Sizing" }), metroRequire(Text_Text.Text, { variant: "body-md/normal", children: "All inputs except TextArea accept a size prop, either sm, md, or lg. By default, inputs will use the large variant." }), , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ];
  const obj4 = { children: items2 };
  items2 = [metroRequire(TextInput_TextInput.TextInput, { label: "Small", size: "sm" }), metroRequire(TextInput_TextInput.TextInput, { label: "Medium", size: "md" }), metroRequire(TextInput_TextInput.TextInput, { label: "Large (default)" })];
  items1[3] = metroImportDefault(Sample, obj4);
  items1[4] = metroRequire(Text_Text.Text, { variant: "heading-lg/semibold", children: "Attachments" });
  items1[5] = metroRequire(Text_Text.Text, { variant: "body-md/normal", children: "Inputs can have either text and icon attachments, either on the leading or trailing edge. If both text and icon are given for a single side, the icon will take precedence." });
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
  items1[7] = metroRequire(Text_Text.Text, { variant: "body-md/normal", children: "Text attachments should be kept as short as possible to preserve space for the user to see their input value while editing." });
  items1[8] = metroRequire(Text_Text.Text, { variant: "heading-lg/semibold", children: "Pressable Attachments" });
  items1[9] = metroRequire(Text_Text.Text, { variant: "body-md/normal", children: "Inputs do not allow custom nodes to be passed as leading or trailing attachments, but they can be made interactive by passing `*PressableProps` respectively. If given, the attachment will be wrapped by a Pressable and have the props passed to it." });
  const obj9 = { children: metroRequire(CustomAttachmentExample, {}) };
  items1[10] = metroRequire(Sample, obj9);
  items1[11] = metroRequire(Text_Text.Text, { variant: "body-md/normal", children: "Note that the props do not allow for changing the styling of the pressable. Styling is instead handled by the Input itself." });
  items1[12] = metroRequire(Text_Text.Text, { variant: "heading-lg/semibold", children: "Rounding" });
  items1[13] = metroRequire(Text_Text.Text, { variant: "body-md/normal", children: "All inputs except TextArea can use the round prop to fully round out the sides. Round variants should only be used when adjacent to another round element, like an IconButton." });
  const obj10 = { children: metroImportDefault(Input, obj11) };
  obj11 = { children: items4 };
  Input = Input2.Input;
  items4 = [metroRequire(SearchBar.SearchBar, { size: "md", round: true }), ];
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
  items1[15] = metroRequire(Text_Text.Text, { variant: "heading-lg/semibold", children: "Error States" });
  items1[16] = metroRequire(Text_Text.Text, { variant: "body-md/normal", children: "The status prop communicates the overall state of the input. Setting status to \"error\" will render a red ring around the input. Note that errorMessage will always be displayed regardless of status." });
  const obj13 = { children: items5 };
  items5 = [metroRequire(InputUsername, { defaultValue: "a space" }), metroRequire(TextArea.TextArea, { label: "About me", maxLength: 100, placeholder: "Long form text use TextArea", errorMessage: "This is an example of a multiline error message to showcase the icon alignment to this text" })];
  items1[17] = metroImportDefault(Sample, obj13);
  items1[18] = metroRequire(Text_Text.Text, { variant: "heading-lg/semibold", children: "Clearable" });
  items1[19] = metroRequire(Text_Text.Text, { variant: "body-md/normal", children: "Inputs can use the clearable prop to let users immediately empty the input value with a button. The button is automatically rendered when the input contains a non-empty value. When pressed, the onClear callback is called, as well as the onChange with the new empty value." });
  const obj14 = { children: metroRequire(TextField.TextField, { defaultValue: "Clear this text", clearable: true }) };
  items1[20] = metroRequire(Sample, obj14);
  items1[21] = metroRequire(Text_Text.Text, { variant: "body-md/normal", children: "Certain input types automatically control the clearable prop. For example, SearchInput is always clearable. Most inputs will also replace any trailing attachment with the clear button when it is present." });
  items1[22] = metroRequire(Text_Text.Text, { variant: "heading-lg/semibold", children: "Revealable" });
  items1[23] = metroRequire(Text_Text.Text, { variant: "body-md/normal", children: "Inputs with secureTextEntry can use the revealable prop to add a button that shows or hides the value. The button replaces the trailing attachment and the clear button." });
  const obj15 = { children: metroRequire(TextInput_TextInput.TextInput, { label: "Password", secureTextEntry: true, revealable: true, defaultValue: "Hunter2-example!" }) };
  items1[24] = metroRequire(Sample, obj15);
  items1[25] = metroRequire(Text_Text.Text, { variant: "heading-lg/semibold", children: "Disableable" });
  items1[26] = metroRequire(Text_Text.Text, { variant: "body-md/normal", children: "The disabled prop prevents users from interacting with an input in any way. The input container will be visually dimmed." });
  const obj16 = { children: metroRequire(TextInput_TextInput.TextInput, { defaultValue: "Can't edit this value", disabled: true }) };
  items1[27] = metroRequire(Sample, obj16);
  items1[28] = metroRequire(Text_Text.Text, { variant: "body-md/normal", children: "The disabled prop prevents users from interacting with an input in any way. The input container will be visually dimmed." });
  items1[29] = metroRequire(Text_Text.Text, { variant: "heading-lg/semibold", children: "Max Length" });
  items1[30] = metroRequire(Text_Text.Text, { variant: "body-md/normal", children: "Inputs can specify a maxLength prop to limit how long the user's input value can be. For TextAreas, setting a maxLength will also render an indicator in the bottom corner of how much of that length the current value takes up." });
  const obj17 = { children: metroRequire(TextArea.TextArea, { label: "Limited length", maxLength: 124 }) };
  items1[31] = metroRequire(Sample, obj17);
  items1[32] = metroRequire(Text_Text.Text, { variant: "body-md/normal", children: "Exceeding the maxLength will prevent the user from inputting any more text for the value until it has been shortened under the maximum length." });
  items1[33] = metroRequire(Text_Text.Text, { variant: "heading-lg/semibold", children: "Ghost Inputs (Deprecated)" });
  items1[34] = metroRequire(Text_Text.Text, { variant: "body-md/normal", children: "GhostInput is deprecated and should not be used in new work; prefer TextInput. It is a minimal version of TextInput with no container shape, intended for cases where a single input is the primary focus of the surrounding area." });
  const obj18 = { children: metroRequire(components_Button_Button.Button, obj19) };
  obj19 = {
    onPress() {
      const obj = ActionSheetActionCreatorsDefault;
      obj.openLazy(() => Promise.resolve(closure_1_13), "ghost-input-sheet");
    },
    text: "Show example"
  };
  items1[35] = metroRequire(Sample, obj18);
  items1[36] = metroRequire(Text_Text.Text, { variant: "body-md/normal", children: "GhostInputs can also appear left-aligned by setting `centered` to false." });
  const obj20 = { children: metroRequire(components_Button_Button.Button, obj21) };
  obj21 = {
    onPress() {
      const obj = ActionSheetActionCreatorsDefault;
      obj.openLazy(() => Promise.resolve(closure_1_14), "ghost-input-sheet-left");
    },
    text: "Show left-aligned example"
  };
  items1[37] = metroRequire(Sample, obj20);
  items1[38] = metroRequire(Text_Text.Text, { variant: "heading-lg/semibold", children: "Static and Pressable Leading Attachments" });
  items1[39] = metroRequire(Text_Text.Text, { variant: "body-md/normal", children: "Static leading attachments are muted. Passing leadingPressableProps gives them the value color, and pressable leading text is also separated from the value by a divider. Compare the pressable text with the deprecated SplitTextInput below." });
  const obj22 = { children: items6 };
  items6 = [metroRequire(TextInput_TextInput.TextInput, { label: "TextInput: static leading text", leadingText: "https://", placeholder: "discord.com" }), metroRequire(CountryCodeExample, { label: "TextInput: pressable leading text" }), , , ];
  const obj23 = { label: "TextInput: static leading icon", leadingIcon: AtIcon.AtIcon, placeholder: "username" };
  const TextInput4 = TextInput_TextInput.TextInput;
  items6[2] = metroRequire(TextInput4, obj23);
  const obj24 = {
    label: "TextInput: pressable leading icon",
    leadingIcon: AtIcon.AtIcon,
    leadingPressableProps: {
      accessibilityLabel: "Mention",
      onPress() {
        return null;
      }
    },
    placeholder: "username"
  };
  const TextInput5 = TextInput_TextInput.TextInput;
  items6[3] = metroRequire(TextInput5, obj24);
  items6[4] = metroRequire(PhoneOrEmailExample, {});
  items1[40] = metroImportDefault(Sample, obj22);
  items1[41] = metroRequire(Text_Text.Text, { variant: "heading-lg/semibold", children: "Split Text Input (Deprecated)" });
  items1[42] = metroRequire(Text_Text.Text, { variant: "body-md/normal", children: "SplitTextInput is deprecated and should not be used in new work; use TextInput with pressable leading text instead. It's kept here for comparison." });
  const obj25 = { children: items7 };
  items7 = [metroRequire(SplitTextInput.SplitTextInput, { label: "SplitTextInput (deprecated)", placeholder: "Phone number", leadingText: "US +1", leadingPressableProps: { accessibilityLabel: "Country code US +1" } }), metroRequire(SplitTextInput.SplitTextInput, { label: "Small", size: "sm", placeholder: "Placeholder", leadingText: "Click", leadingPressableProps: { accessibilityLabel: "Click" } }), metroRequire(SplitTextInput.SplitTextInput, { label: "Medium", size: "md", placeholder: "Placeholder", leadingText: "Me", leadingPressableProps: { accessibilityLabel: "Me" } }), metroRequire(SplitTextInput.SplitTextInput, { label: "Large", size: "lg", placeholder: "Placeholder", leadingText: "Here", leadingPressableProps: { accessibilityLabel: "Here" } })];
  items1[43] = metroImportDefault(Sample, obj25);
  items1[44] = metroRequire(Text_Text.Text, { variant: "heading-lg/semibold", children: "Data Types" });
  items1[45] = metroRequire(Text_Text.Text, { variant: "body-md/normal", children: "Many special input types will have their own components. All inputs use a similar interface and support roughly the same set of props for styling and functionality. Examples will be added as these different types get implemented." });
  return metroRequire(ScrollView, obj);
};
