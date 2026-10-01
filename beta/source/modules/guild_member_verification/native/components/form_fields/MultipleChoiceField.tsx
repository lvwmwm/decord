// Module ID: 6509
// Function ID: 6510
// Name: MultipleChoiceField
// Dependencies: [19, 17, 1085, 21, 4836, 5836, 576, 4832, 5997, 6000, 2]
// Exports: default

// Module 6509 (MultipleChoiceField)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1085 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import TextStyles from "TextStyles" /* 5836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let closure_4;
let hasOwnProperty;
let obj2;
const View = react_native.View;
const Fonts = Constants.Fonts;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { marginVertical: 12, flexDirection: "column" }, formHeader: obj2 };
obj2 = { paddingBottom: 16 };
createStyles = createStyles.createStyles;
const DISPLAY_SEMIBOLD = Fonts.DISPLAY_SEMIBOLD;
const merged = Object.assign(TextStyles(DISPLAY_SEMIBOLD, nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 16, { uppercase: false }));
let closure_6 = createStyles(obj);
const result = size.fileFinishedImporting("modules/guild_member_verification/native/components/form_fields/MultipleChoiceField.tsx");

export default function MultipleChoiceField(hasIcons) {
  let field;
  let items1;
  ({ field, onChange: require } = hasIcons);
  hasIcons = hasIcons.hasIcons;
  const tmp = closure_6();
  const choices = field.choices;
  let num = field.response;
  const items = [choices];
  const label = field.label;
  const memo = react.useMemo(() => choices.map((name, value) => ({ name, value })), items);
  let obj = { style: tmp.container, children: items1 };
  items1 = [, ];
  const obj2 = { style: tmp.formHeader, variant: "heading-md/semibold", color: "mobile-text-heading-primary", children: label };
  items1[0] = closure_4(require("Text/Text").Text, obj2);
  const TableRadioGroup = require("TableRadioGroup").TableRadioGroup;
  const tmp2 = closure_5;
  const tmp3 = View;
  const tmp4 = closure_4;
  if (num == null) {
    num = -1;
  }
  const obj3 = {
    defaultValue: num,
    onChange(arg0) {
      return require(arg0);
    },
    hasIcons,
    children: memo.map((label) => {
      const obj = { label: label.name, value: label.value };
      return closure_1_4(require("TableRadioRow").TableRadioRow, obj, label.value);
    })
  };
  items1[1] = tmp4(TableRadioGroup, obj3);
  return tmp2(tmp3, obj);
};
