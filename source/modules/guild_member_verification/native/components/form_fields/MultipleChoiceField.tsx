// Module ID: 9269
// Function ID: 72400
// Name: MultipleChoiceField
// Dependencies: [31, 27, 482, 33, 4130, 5052, 689, 4126, 7519, 7518, 2]
// Exports: default

// Module 9269 (MultipleChoiceField)
import result from "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importDefaultResult from "createTextStyle";

let closure_4;
let closure_5;
const require = arg1;
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
_createForOfIteratorHelperLoose = { container: { marginVertical: 12, flexDirection: "column" } };
_createForOfIteratorHelperLoose = {};
const merged = Object.assign(require("createTextStyle")(require("sum").Fonts.DISPLAY_SEMIBOLD, require("_createForOfIteratorHelperLoose").colors.MOBILE_TEXT_HEADING_PRIMARY, 16, { uppercase: false }));
_createForOfIteratorHelperLoose["paddingBottom"] = 16;
_createForOfIteratorHelperLoose.formHeader = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const obj1 = { uppercase: false };
const result = require("sum").fileFinishedImporting("modules/guild_member_verification/native/components/form_fields/MultipleChoiceField.tsx");

export default function MultipleChoiceField(hasIcons) {
  let field;
  let require;
  ({ field, onChange: require } = hasIcons);
  const tmp = _createForOfIteratorHelperLoose();
  const choices = field.choices;
  const response = field.response;
  const items = [choices];
  const memo = React.useMemo(() => choices.map((name, value) => ({ name, value })), items);
  let obj = { style: tmp.container };
  obj = { style: tmp.formHeader, variant: "heading-md/semibold", color: "mobile-text-heading-primary", children: field.label };
  const items1 = [callback(require(choices[7]).Text, obj), ];
  obj = {};
  let num = -1;
  if (null != response) {
    num = response;
  }
  obj.defaultValue = num;
  obj.onChange = function onChange(arg0) {
    return callback(arg0);
  };
  obj.hasIcons = hasIcons.hasIcons;
  obj.children = memo.map((label) => outer1_4(outer1_0(choices[9]).TableRadioRow, { label: label.name, value: label.value }, label.value));
  items1[1] = callback(require(choices[8]).TableRadioGroup, obj);
  obj.children = items1;
  return closure_5(View, obj);
};
