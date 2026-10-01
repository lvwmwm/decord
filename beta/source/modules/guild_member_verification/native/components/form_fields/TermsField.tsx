// Module ID: 5912
// Function ID: 5913
// Name: TermsField
// Dependencies: [19, 17, 21, 4836, 5913, 5916, 1115, 2]
// Exports: default

// Module 5912 (TermsField)
import react_native from "react-native" /* 17 */;
import intl2 from "intl" /* 1115 */;
import TermsFieldListDefault from "TermsFieldList" /* 5913 */;
import TableCheckboxRow2 from "TableCheckboxRow" /* 5916 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let closure_6 = createStyles.createStyles({ container: { marginVertical: 12, flexDirection: "column" } });
const result = size.fileFinishedImporting("modules/guild_member_verification/native/components/form_fields/TermsField.tsx");

export default function TermsField(field) {
  let intl;
  let items;
  let onChange;
  let rulesChannelId;
  field = field.field;
  ({ onChange, rulesChannelId } = field);
  let flag = field.response;
  const obj = { style: closure_6().container, children: items };
  items = [React3(TermsFieldListDefault, { rules: field.values, rulesChannelId }), ];
  const TableCheckboxRow = TableCheckboxRow2.TableCheckboxRow;
  const tmp = hasOwnProperty;
  const tmp2 = View;
  const tmp3 = React3;
  if (flag == null) {
    flag = false;
  }
  const obj2 = { start: true, end: true, checked: flag, label: intl.string(intl2.t["2EXfGJ"]), onPress: onChange };
  intl = tmp5(1115).intl;
  items[1] = tmp3(TableCheckboxRow, obj2);
  return tmp(tmp2, obj);
};
