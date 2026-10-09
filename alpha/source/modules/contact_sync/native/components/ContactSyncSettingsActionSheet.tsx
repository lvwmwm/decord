// Module ID: 12365
// Function ID: 12366
// Name: ContactSyncSettingsActionSheet
// Dependencies: [19, 17, 12355, 1085, 21, 5091, 587, 558, 576, 1126, 8563, 5087, 12358, 6892, 2]

// Module 12365 (ContactSyncSettingsActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import react from "react" /* 19 */;
import ContactSyncModalStore from "ContactSyncModalStore" /* 12355 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5091 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
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
const tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function ContactSyncSettingsActionSheet() {
  let allowEmail;
  let allowPhone;
  let formRow;
  let formText2;
  let intl5;
  let intl7;
  let tmp8;
  let tmp9;
  let obj = allowPhone(allowEmail[8]);
  const cResult = obj.c(59);
  const tmp4 = closure_9();
  const tmp5 = closure_6();
  allowPhone = tmp5.allowPhone;
  allowEmail = tmp5.allowEmail;
  let closure_2 = tmp6;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    function handleSetAllowSync(arg0) {
      closure_5(arg0);
    }
    cResult[0] = handleSetAllowSync;
    let first = handleSetAllowSync;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    function handleSetAllowPhone(arg0) {
      closure_4(arg0);
    }
    cResult[1] = handleSetAllowPhone;
    tmp8 = handleSetAllowPhone;
  } else {
    tmp8 = cResult[1];
  }
  let closure_4 = tmp8;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    function handleSetAllowEmail(dependencyMap) {
      first(dependencyMap);
    }
    cResult[2] = handleSetAllowEmail;
    tmp9 = handleSetAllowEmail;
  } else {
    tmp9 = cResult[2];
  }
  let closure_5 = tmp9;
  if (cResult[3] === tmp4.formRow) {
    let tmp10;
    let tmp11;
    let tmp13;
    let tmp17;
    let tmp16;
    if (cResult[4] === tmp4.syncRow) {
      tmp10 = cResult[5];
    }
    const _Symbol = Symbol;
    const formText = tmp4.formText;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = tmp(tmp2[9]).intl;
      const stringResult = intl.string(allowPhone(allowEmail[9]).t.a5QL24);
      cResult[6] = stringResult;
      tmp11 = stringResult;
    } else {
      tmp11 = cResult[6];
    }
    if (cResult[7] !== tmp4.formText) {
      const obj2 = { style: formText, text: tmp11 };
      const tmp15 = closure_7(allowPhone(allowEmail[10]).FormRow.Label, obj2);
      cResult[7] = tmp4.formText;
      cResult[8] = tmp15;
      tmp13 = tmp15;
    } else {
      tmp13 = cResult[8];
    }
    if (cResult[9] !== (allowPhone || allowEmail)) {
      const fn = function p() {
        return first(!closure_2);
      };
      const obj3 = { selected: allowPhone || allowEmail };
      const tmp19 = closure_7(allowPhone(allowEmail[10]).FormRow.Checkbox, obj3);
      cResult[9] = allowPhone || allowEmail;
      cResult[10] = fn;
      cResult[11] = tmp19;
      tmp17 = tmp19;
      tmp16 = fn;
    } else {
      tmp16 = cResult[10];
      tmp17 = cResult[11];
    }
    if (cResult[12] === tmp10) {
      if (cResult[13] === tmp13) {
        if (cResult[14] === tmp16) {
          let tmp23;
          let tmp28;
          let tmp33;
          let tmp41;
          let tmp43;
          let tmp46;
          let tmp50;
          const _Symbol2 = Symbol;
          const info = tmp4.info;
          if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
            const intl2 = tmp(tmp2[9]).intl;
            const stringResult1 = intl2.string(allowPhone(allowEmail[9]).t.pfjsB5);
            cResult[17] = stringResult1;
            tmp23 = stringResult1;
          } else {
            tmp23 = cResult[17];
          }
          if (cResult[18] !== tmp4.info) {
            const obj4 = { style: info, children: tmp23 };
            cResult[18] = tmp4.info;
            cResult[19] = closure_7(allowPhone(allowEmail[10]).FormText, obj4);
            const tmp27 = closure_7(allowPhone(allowEmail[10]).FormText, obj4);
          }
          const _Symbol3 = Symbol;
          const info2 = tmp4.info;
          if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
            const intl3 = tmp(tmp2[9]).intl;
            const stringResult2 = intl3.string(allowPhone(allowEmail[9]).t.cW1nr9);
            cResult[20] = stringResult2;
            tmp28 = stringResult2;
          } else {
            tmp28 = cResult[20];
          }
          if (cResult[21] !== tmp4.info) {
            const obj5 = { style: info2, children: tmp28 };
            cResult[21] = tmp4.info;
            cResult[22] = closure_7(allowPhone(allowEmail[10]).FormText, obj5);
            const tmp32 = closure_7(allowPhone(allowEmail[10]).FormText, obj5);
          }
          const _Symbol4 = Symbol;
          const info3 = tmp4.info;
          if (cResult[23] === Symbol.for("react.memo_cache_sentinel")) {
            const intl4 = tmp(tmp2[9]).intl;
            const obj6 = {
              learnMoreHook: function LearnMore(children, arg1) {
                          const obj = { onPress: allowPhone(allowEmail[12]).handleOpenLearnMoreLink, variant: "text-sm/medium", color: "text-link", children };
                          const Text = allowPhone(allowEmail[11]).Text;
                          return closure_1_7(Text, obj, arg1);
                        }
            };
            const formatResult = intl4.format(allowPhone(allowEmail[9]).t.eswIfi, obj6);
            cResult[23] = formatResult;
            tmp33 = formatResult;
          } else {
            tmp33 = cResult[23];
          }
          if (cResult[24] !== tmp4.info) {
            const obj7 = { style: info3, children: tmp33 };
            cResult[24] = tmp4.info;
            cResult[25] = closure_7(allowPhone(allowEmail[10]).FormText, obj7);
            const tmp37 = closure_7(allowPhone(allowEmail[10]).FormText, obj7);
          }
          const _Symbol5 = Symbol;
          if (cResult[26] === Symbol.for("react.memo_cache_sentinel")) {
            const obj8 = { title: intl5.string(allowPhone(allowEmail[9]).t["0t2wRW"]), thinTitle: true };
            const FormTitle = tmp(tmp2[10]).FormTitle;
            intl5 = tmp(tmp2[9]).intl;
            cResult[26] = closure_7(FormTitle, obj8);
            const tmp40 = closure_7(FormTitle, obj8);
          }
          const _Symbol6 = Symbol;
          ({ formRow, formText: formText2 } = tmp4);
          if (cResult[27] === Symbol.for("react.memo_cache_sentinel")) {
            const intl6 = tmp(tmp2[9]).intl;
            const stringResult3 = intl6.string(allowPhone(allowEmail[9]).t["eJnn0+"]);
            cResult[27] = stringResult3;
            tmp41 = stringResult3;
          } else {
            tmp41 = cResult[27];
          }
          if (cResult[28] !== tmp4.formText) {
            const obj9 = { style: formText2, text: tmp41 };
            const tmp45 = closure_7(allowPhone(allowEmail[10]).FormRow.Label, obj9);
            cResult[28] = tmp4.formText;
            cResult[29] = tmp45;
            tmp43 = tmp45;
          } else {
            tmp43 = cResult[29];
          }
          const _Symbol7 = Symbol;
          if (cResult[30] === Symbol.for("react.memo_cache_sentinel")) {
            const obj10 = { variant: "text-sm/medium", color: "text-default", children: intl7.string(allowPhone(allowEmail[9]).t.X7pIKN) };
            let Text = tmp(tmp2[11]).Text;
            intl7 = tmp(tmp2[9]).intl;
            const tmp48 = closure_7(Text, obj10);
            cResult[30] = tmp48;
            tmp46 = tmp48;
          } else {
            tmp46 = cResult[30];
          }
          if (cResult[31] !== allowPhone) {
            class J {
              constructor() {
                return closure_4(!allowPhone);
              }
            }
            const obj11 = { selected: allowPhone };
            const tmp52 = closure_7(allowPhone(allowEmail[10]).FormRow.Checkbox, obj11);
            cResult[31] = allowPhone;
            cResult[32] = J;
            cResult[33] = tmp52;
            tmp50 = tmp52;
          } else {
            class J {
              constructor() {
                return closure_4(!allowPhone);
              }
            }
            tmp50 = cResult[33];
          }
          if (cResult[34] === tmp4.formRow) {
            class J {
              constructor() {
                return closure_4(!allowPhone);
              }
            }
          }
          const obj12 = { DEPRECATED_style: formRow, label: tmp43, subLabel: tmp46, onPress: tmp49, trailing: tmp50 };
          cResult[34] = tmp4.formRow;
          cResult[35] = tmp43;
          cResult[36] = tmp49;
          cResult[37] = tmp50;
          cResult[38] = closure_7(allowPhone(allowEmail[10]).FormRow, obj12);
          const tmp55 = closure_7(allowPhone(allowEmail[10]).FormRow, obj12);
        }
      }
    }
    const obj13 = { DEPRECATED_style: tmp10, label: tmp13, onPress: tmp16, trailing: tmp17 };
    cResult[12] = tmp10;
    cResult[13] = tmp13;
    cResult[14] = tmp16;
    cResult[15] = tmp17;
    cResult[16] = closure_7(allowPhone(allowEmail[10]).FormRow, obj13);
    const tmp22 = closure_7(allowPhone(allowEmail[10]).FormRow, obj13);
  }
  const items = [, ];
  ({ formRow: arr[0], syncRow: arr[1] } = tmp4);
  cResult[3] = tmp4.formRow;
  cResult[4] = tmp4.syncRow;
  cResult[5] = items;
  tmp10 = items;
}) : (function ContactSyncSettingsActionSheet() {
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
    trailing: closure_7(allowPhone(allowEmail[10]).FormRow.Checkbox, { selected: allowPhone || allowEmail })
  };
  items = [, ];
  ({ formRow: arr[0], syncRow: arr[1] } = tmp);
  const FormRow = allowPhone(allowEmail[10]).FormRow;
  obj3 = { style: tmp.formText, text: intl.string(allowPhone(allowEmail[9]).t.a5QL24) };
  Label = allowPhone(allowEmail[10]).FormRow.Label;
  intl = allowPhone(allowEmail[9]).intl;
  items1 = [closure_7(FormRow, obj2), , , , , , ];
  const obj4 = { style: tmp.info, children: intl2.string(allowPhone(allowEmail[9]).t.pfjsB5) };
  const FormText = allowPhone(allowEmail[10]).FormText;
  intl2 = allowPhone(allowEmail[9]).intl;
  items1[1] = closure_7(FormText, obj4);
  const obj5 = { style: tmp.info, children: intl3.string(allowPhone(allowEmail[9]).t.cW1nr9) };
  const FormText2 = allowPhone(allowEmail[10]).FormText;
  intl3 = allowPhone(allowEmail[9]).intl;
  items1[2] = closure_7(FormText2, obj5);
  const obj6 = { style: tmp.info, children: intl4.format(allowPhone(allowEmail[9]).t.eswIfi, obj7) };
  const FormText3 = allowPhone(allowEmail[10]).FormText;
  intl4 = allowPhone(allowEmail[9]).intl;
  obj7 = {
    learnMoreHook: function LearnMore(children, arg1) {
      const obj = { onPress: allowPhone(allowEmail[12]).handleOpenLearnMoreLink, variant: "text-sm/medium", color: "text-link", children };
      const Text = allowPhone(allowEmail[11]).Text;
      return closure_1_7(Text, obj, arg1);
    }
  };
  items1[3] = closure_7(FormText3, obj6);
  const obj8 = { title: intl5.string(allowPhone(allowEmail[9]).t["0t2wRW"]), thinTitle: true };
  const FormTitle = allowPhone(allowEmail[10]).FormTitle;
  intl5 = allowPhone(allowEmail[9]).intl;
  items1[4] = closure_7(FormTitle, obj8);
  const obj9 = {
    DEPRECATED_style: tmp.formRow,
    label: closure_7(Label2, obj10),
    subLabel: closure_7(Text, obj11),
    onPress() {
      React3(!allowPhone);
    },
    trailing: closure_7(allowPhone(allowEmail[10]).FormRow.Checkbox, { selected: allowPhone })
  };
  const FormRow2 = allowPhone(allowEmail[10]).FormRow;
  obj10 = { style: tmp.formText, text: intl6.string(allowPhone(allowEmail[9]).t["eJnn0+"]) };
  Label2 = allowPhone(allowEmail[10]).FormRow.Label;
  intl6 = allowPhone(allowEmail[9]).intl;
  obj11 = { variant: "text-sm/medium", color: "text-default", children: intl7.string(allowPhone(allowEmail[9]).t.X7pIKN) };
  Text = allowPhone(allowEmail[11]).Text;
  intl7 = allowPhone(allowEmail[9]).intl;
  items1[5] = closure_7(FormRow2, obj9);
  const obj12 = {
    DEPRECATED_style: tmp.formRow,
    label: closure_7(Label3, obj13),
    subLabel: closure_7(Text2, obj14),
    onPress() {
      _false(!allowEmail);
    },
    trailing: closure_7(allowPhone(allowEmail[10]).FormRow.Checkbox, { selected: allowEmail })
  };
  const FormRow3 = allowPhone(allowEmail[10]).FormRow;
  obj13 = { style: tmp.formText, text: intl8.string(allowPhone(allowEmail[9]).t.dI4d4S) };
  Label3 = allowPhone(allowEmail[10]).FormRow.Label;
  intl8 = allowPhone(allowEmail[9]).intl;
  obj14 = { variant: "text-sm/medium", color: "text-default", children: intl9.string(allowPhone(allowEmail[9]).t.ilGsHE) };
  Text2 = allowPhone(allowEmail[11]).Text;
  intl9 = allowPhone(allowEmail[9]).intl;
  items1[6] = closure_7(FormRow3, obj12);
  const children = closure_8(closure_2, obj);
  return closure_7(allowPhone(allowEmail[13]).ActionSheet, { startExpanded: true, children });
});
const result = size.fileFinishedImporting("modules/contact_sync/native/components/ContactSyncSettingsActionSheet.tsx");

export default tmp6;
