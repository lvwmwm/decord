// Module ID: 12184
// Function ID: 12185
// Name: ContactSyncSettingsActionSheet
// Dependencies: [19, 17, 12174, 1074, 21, 4836, 576, 8053, 1115, 4832, 12177, 6618, 2]
// Exports: default

// Module 12184 (ContactSyncSettingsActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import react from "react" /* 19 */;
import ContactSyncModalStore from "ContactSyncModalStore" /* 12174 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
const View = react_native.View;
({ setAllowEmail: c3, setAllowPhone: closure_4, setAllowSync: hasOwnProperty, useContactSyncModalStore: metroRequire } = ContactSyncModalStore);
const Fonts = Constants.Fonts;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, formRow: obj3, syncRow: { marginTop: 24 }, formText: obj4, info: obj5 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, paddingBottom: 16 };
createStyles = createStyles.createStyles;
obj3 = { marginTop: 8, paddingVertical: 16, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj4 = { fontFamily: Fonts.PRIMARY_SEMIBOLD, color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
obj5 = { marginTop: 8, fontSize: 14, lineHeight: 18, paddingHorizontal: 16, color: nativeDefault.colors.TEXT_SUBTLE };
let closure_9 = createStyles(obj);
const result = size.fileFinishedImporting("modules/contact_sync/native/components/ContactSyncSettingsActionSheet.tsx");

export default function ContactSyncSettingsActionSheet() {
  let Label;
  let Label2;
  let Label3;
  let Text;
  let Text2;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let intl9;
  let items;
  let items1;
  let obj10;
  let obj11;
  let obj13;
  let obj14;
  let obj3;
  let obj7;
  const tmp = closure_9();
  const tmp2 = closure_6();
  const allowPhone = tmp2.allowPhone;
  const allowEmail = tmp2.allowEmail;
  let closure_2 = tmp3;
  let obj = { style: tmp.container, children: items1 };
  const obj2 = {
    DEPRECATED_style: items,
    label: closure_7(Label, obj3),
    onPress() {
      hasOwnProperty(!closure_2);
    },
    trailing: closure_7(allowPhone(allowEmail[7]).FormRow.Checkbox, { selected: allowPhone || allowEmail })
  };
  items = [, ];
  ({ formRow: arr[0], syncRow: arr[1] } = tmp);
  const FormRow = allowPhone(allowEmail[7]).FormRow;
  obj3 = { style: tmp.formText, text: intl.string(allowPhone(allowEmail[8]).t.a5QL24) };
  Label = allowPhone(allowEmail[7]).FormRow.Label;
  intl = allowPhone(allowEmail[8]).intl;
  items1 = [closure_7(FormRow, obj2), , , , , , ];
  const obj4 = { style: tmp.info, children: intl2.string(allowPhone(allowEmail[8]).t.pfjsB5) };
  const FormText = allowPhone(allowEmail[7]).FormText;
  intl2 = allowPhone(allowEmail[8]).intl;
  items1[1] = closure_7(FormText, obj4);
  const obj5 = { style: tmp.info, children: intl3.string(allowPhone(allowEmail[8]).t.cW1nr9) };
  const FormText2 = allowPhone(allowEmail[7]).FormText;
  intl3 = allowPhone(allowEmail[8]).intl;
  items1[2] = closure_7(FormText2, obj5);
  const obj6 = { style: tmp.info, children: intl4.format(allowPhone(allowEmail[8]).t.eswIfi, obj7) };
  const FormText3 = allowPhone(allowEmail[7]).FormText;
  intl4 = allowPhone(allowEmail[8]).intl;
  obj7 = {
    learnMoreHook(children, arg1) {
      const obj = { onPress: allowPhone(allowEmail[10]).handleOpenLearnMoreLink, variant: "text-sm/medium", color: "text-link", children };
      const Text = allowPhone(allowEmail[9]).Text;
      return closure_1_7(Text, obj, arg1);
    }
  };
  items1[3] = closure_7(FormText3, obj6);
  const obj8 = { title: intl5.string(allowPhone(allowEmail[8]).t["0t2wRW"]), thinTitle: true };
  const FormTitle = allowPhone(allowEmail[7]).FormTitle;
  intl5 = allowPhone(allowEmail[8]).intl;
  items1[4] = closure_7(FormTitle, obj8);
  const obj9 = {
    DEPRECATED_style: tmp.formRow,
    label: closure_7(Label2, obj10),
    subLabel: closure_7(Text, obj11),
    onPress() {
      React3(!allowPhone);
    },
    trailing: closure_7(allowPhone(allowEmail[7]).FormRow.Checkbox, { selected: allowPhone })
  };
  const FormRow2 = allowPhone(allowEmail[7]).FormRow;
  obj10 = { style: tmp.formText, text: intl6.string(allowPhone(allowEmail[8]).t["eJnn0+"]) };
  Label2 = allowPhone(allowEmail[7]).FormRow.Label;
  intl6 = allowPhone(allowEmail[8]).intl;
  obj11 = { variant: "text-sm/medium", color: "text-default", children: intl7.string(allowPhone(allowEmail[8]).t.X7pIKN) };
  Text = allowPhone(allowEmail[9]).Text;
  intl7 = allowPhone(allowEmail[8]).intl;
  items1[5] = closure_7(FormRow2, obj9);
  const obj12 = {
    DEPRECATED_style: tmp.formRow,
    label: closure_7(Label3, obj13),
    subLabel: closure_7(Text2, obj14),
    onPress() {
      _false(!allowEmail);
    },
    trailing: closure_7(allowPhone(allowEmail[7]).FormRow.Checkbox, { selected: allowEmail })
  };
  const FormRow3 = allowPhone(allowEmail[7]).FormRow;
  obj13 = { style: tmp.formText, text: intl8.string(allowPhone(allowEmail[8]).t.dI4d4S) };
  Label3 = allowPhone(allowEmail[7]).FormRow.Label;
  intl8 = allowPhone(allowEmail[8]).intl;
  obj14 = { variant: "text-sm/medium", color: "text-default", children: intl9.string(allowPhone(allowEmail[8]).t.ilGsHE) };
  Text2 = allowPhone(allowEmail[9]).Text;
  intl9 = allowPhone(allowEmail[8]).intl;
  items1[6] = closure_7(FormRow3, obj12);
  const children = closure_8(closure_2, obj);
  return closure_7(allowPhone(allowEmail[11]).ActionSheet, { startExpanded: true, children });
};
