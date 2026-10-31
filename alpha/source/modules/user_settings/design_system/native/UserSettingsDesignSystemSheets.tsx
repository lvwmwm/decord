// Module ID: 17801
// Function ID: 17802
// Name: UserSettingsDesignSystemSheets
// Dependencies: [32, 19, 17, 1072, 21, 5014, 7366, 7321, 9010, 7367, 6027, 7082, 7368, 5258, 5634, 1113, 10837, 17802, 6977, 5624, 2]
// Exports: default

// Module 17801 (UserSettingsDesignSystemSheets)
import react_native from "react-native" /* 17 */;
import Constants from "Constants" /* 1072 */;
import intl2 from "intl" /* 1113 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5258 */;
import Text_Text from "Text/Text" /* 5624 */;
import components_Button_Button from "components/Button/Button" /* 5634 */;
import Stack_Stack from "Stack/Stack" /* 6027 */;
import Card_Card from "Card/Card" /* 6977 */;
import TextInput_TextInput from "TextInput/TextInput" /* 7082 */;
import BottomSheetTitleHeader2 from "BottomSheetTitleHeader" /* 7321 */;
import ActionSheet2 from "ActionSheet" /* 7366 */;
import ActionSheetRow from "ActionSheetRow" /* 7368 */;
import PromoSheet2 from "PromoSheet" /* 10837 */;
import _modDef17802 from "module_17802" /* 17802 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let metroImportAll;
let metroImportDefault;
function DemoActionSheet() {
  let Stack;
  let first;
  let first1;
  let items;
  let items1;
  let items2;
  let obj5;
  let tmp11;
  let tmp12;
  let tmp14;
  let tmp15;
  let tmp16Result;
  let tmp16Result2;
  let tmp19;
  let tmp2;
  let tmp3;
  let tmp6;
  let tmp9;
  [tmp2, tmp3] = react.useState(false);
  _slicedToArray(react.useState(false), 2);
  [first, tmp6] = react.useState(false);
  [first1, tmp9] = react.useState("Header title");
  [tmp11, tmp12] = react.useState("Header subtitle");
  let closure_0 = tmp12;
  _slicedToArray(react.useState("Header subtitle"), 2);
  [tmp14, tmp15] = react.useState("Reset");
  let closure_1 = tmp15;
  _slicedToArray(react.useState("Reset"), 2);
  const ActionSheet = ActionSheet2.ActionSheet;
  const obj = { title: first1, subtitle: tmp19, leading: tmp16Result, trailing: tmp16Result2 };
  tmp19 = undefined;
  const BottomSheetTitleHeader = BottomSheetTitleHeader2.BottomSheetTitleHeader;
  if ("" !== tmp11) {
    tmp19 = tmp11;
  }
  tmp16Result = first;
  if (tmp16Result) {
    const obj2 = { onPress: NOOP, label: tmp14 };
    tmp16Result = tmp16(tmp17(9010).ActionSheetHeaderPressableText, obj2);
  }
  tmp16Result2 = tmp2;
  if (tmp16Result2) {
    const obj3 = { onPress: NOOP };
    tmp16Result2 = tmp16(tmp17(7367).ActionSheetCloseButton, obj3);
  }
  const obj4 = { header: metroImportDefault(BottomSheetTitleHeader, obj), children: metroImportAll(Stack, obj5) };
  obj5 = { spacing: 24, children: items1 };
  Stack = tmp17(6027).Stack;
  const obj6 = { children: items };
  const Stack2 = tmp17(6027).Stack;
  items = [metroImportDefault(TextInput_TextInput.TextInput, { value: first1, onChange: tmp9, label: "Title" }), ];
  const obj7 = {
    value: tmp11,
    onChange: tmp12,
    label: "Subtitle",
    maxLength: 100,
    clearable: true,
    onClear() {
      return tmp12("");
    }
  };
  items[1] = metroImportDefault(TextInput_TextInput.TextInput, obj7);
  items1 = [metroImportAll(Stack2, obj6), , ];
  const obj8 = { hasIcons: false, children: items2 };
  const Group = tmp17(7368).ActionSheetRow.Group;
  items2 = [metroImportDefault(ActionSheetRow.ActionSheetSwitchRow, { value: first, onValueChange: tmp6, label: "Show Leading" }), metroImportDefault(ActionSheetRow.ActionSheetSwitchRow, { value: tmp2, onValueChange: tmp3, label: "Show Trailing" })];
  items1[1] = metroImportAll(Group, obj8);
  const obj9 = {
    value: tmp14,
    onChange: tmp15,
    label: "Leading",
    disabled: !first,
    clearable: true,
    onClear() {
      return tmp15("");
    }
  };
  items1[2] = metroImportDefault(TextInput_TextInput.TextInput, obj9);
  return metroImportDefault(ActionSheet, obj4);
}
function showDemoPromoSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(() => Promise.resolve(DemoPromoSheet), "promo-sheet-demo");
}
function DemoPromoSheet() {
  let intl;
  let obj3;
  let obj4;
  let tmp;
  let obj = {
    size: "lg",
    onPress() {
      const obj = ActionSheetActionCreatorsDefault;
      return obj.hideActionSheet("promo-sheet-demo");
    },
    text: intl.string(intl2.t.BddRzS)
  };
  const Button = components_Button_Button.Button;
  intl = intl2.intl;
  const obj2 = { graphic: obj3, gradientColor: "purple", title: "Here's a Promo Sheet", description: "You can use this to promote new features, products, or anything else you'd like!", actions: tmp };
  obj3 = { type: "image", src: obj4, aspectRatio: "16/9" };
  obj4 = { uri: _modDef17802 };
  tmp = metroImportDefault(Button, obj);
  const PromoSheet = PromoSheet2.PromoSheet;
  return metroImportDefault(PromoSheet, obj2);
}
const ScrollView = react_native.ScrollView;
const NOOP = Constants.NOOP;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let closure_9 = createStyles.createStyles({ container: { padding: 16, alignItems: "center" } });
const result = size.fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemSheets.tsx");

export default function UserSettingsDesignSystemSheets() {
  let Stack;
  let Stack2;
  let Stack3;
  let items;
  let items1;
  let items2;
  let obj2;
  let obj4;
  let obj7;
  let obj = { contentContainerStyle: closure_9().container, children: metroImportAll(Stack, obj2) };
  obj2 = { children: items1 };
  Stack = Stack_Stack.Stack;
  const obj3 = { children: metroImportAll(Stack2, obj4) };
  const Card = Card_Card.Card;
  obj4 = { children: items };
  Stack2 = Stack_Stack.Stack;
  items = [metroImportDefault(Text_Text.Text, { variant: "text-lg/bold", children: "Action Sheet with Title Header" }), metroImportDefault(Text_Text.Text, { variant: "text-md/medium", color: "text-subtle", children: "An action sheet with a centered title and subtitle, with optional leading and Trailing elements." }), ];
  const obj5 = {
    onPress() {
      const obj = ActionSheetActionCreatorsDefault;
      obj.openLazy(() => Promise.resolve(closure_1_10), "demo-sheet");
    },
    text: "Show Action Sheet"
  };
  items[2] = metroImportDefault(components_Button_Button.Button, obj5);
  items1 = [metroImportDefault(Card, obj3), ];
  const obj6 = { children: metroImportAll(Stack3, obj7) };
  const Card2 = Card_Card.Card;
  obj7 = { children: items2 };
  Stack3 = Stack_Stack.Stack;
  items2 = [metroImportDefault(Text_Text.Text, { variant: "text-lg/bold", children: "Promo Sheet" }), metroImportDefault(Text_Text.Text, { variant: "text-md/medium", color: "text-subtle", children: "A sheet with an illustration, title, description, and actions." }), ];
  const obj8 = { onPress: showDemoPromoSheet, text: "Show Promo Sheet" };
  items2[2] = metroImportDefault(components_Button_Button.Button, obj8);
  items1[1] = metroImportDefault(Card2, obj6);
  return metroImportDefault(ScrollView, obj);
};
