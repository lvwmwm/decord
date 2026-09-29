// Module ID: 5849
// Function ID: 5850
// Name: TermsField
// Dependencies: [19, 17, 21, 4788, 5850, 5853, 1115, 2]
// Exports: default

// Module 5849 (TermsField)
import util from "util" /* 1115 */;
import TermsFieldListDefault from "TermsFieldList" /* 5850 */;
import TableCheckboxRow from "TableCheckboxRow" /* 5853 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4788);
let closure_6 = createStyles.createStyles({ container: { marginVertical: 12, flexDirection: "column" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_member_verification/native/components/form_fields/TermsField.tsx");

export default function TermsField(field) {
  field = field.field;
  ({ onChange, rulesChannelId } = field);
  let flag = field.response;
  const obj = { style: closure_6().container, children: null };
  const items = [React4(TermsFieldListDefault, { rules: field.values, rulesChannelId }), ];
  if (flag == null) {
    flag = false;
  }
  const obj2 = { start: true, end: true, checked: flag, label: null, onPress: null };
  const intl = tmp5(1115).intl;
  obj2.label = intl.string(util.t["2EXfGJ"]);
  obj2.onPress = onChange;
  items[1] = React4(TableCheckboxRow.TableCheckboxRow, obj2);
  obj.children = items;
  return hasOwnProperty(View, obj);
};
