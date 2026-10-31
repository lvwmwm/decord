// Module ID: 12534
// Function ID: 12535
// Name: ConjureSaveBackupSheet
// Dependencies: [32, 19, 17, 21, 5014, 575, 12524, 12520, 5712, 1113, 3868, 5258, 7366, 7321, 6027, 5624, 12522, 7082, 5634, 2]
// Exports: default

// Module 12534 (ConjureSaveBackupSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import conjureDatabaseLock from "conjureDatabaseLock" /* 12524 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let metroImportDefault;
let metroRequire;
let obj2;
let react = react_mod;
const View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
const ConjureSaveBackupSheet_str = "ConjureSaveBackupSheet";
let obj = { content: obj2 };
obj2 = { paddingBottom: nativeDefault.space.PX_16 };
let closure_9 = createStyles.createStyles(obj);
let result = size.fileFinishedImporting("modules/conjure/history/native/ConjureSaveBackupSheet.tsx");

export default function ConjureSaveBackupSheet(projectId) {
  let BottomSheetTitleHeader;
  let Stack;
  let _undefined;
  let c4;
  let formatToPlainString;
  let intl;
  let intl3;
  let intl5;
  let obj2;
  let obj3;
  let obj5;
  let obj6;
  let obj8;
  let sXGNm5;
  let stringResult;
  let tmp14;
  let tmp15;
  let tmp6;
  projectId = projectId.projectId;
  const environment = projectId.environment;
  const onSaved = projectId.onSaved;
  let value;
  react = undefined;
  let tmp = closure_9();
  const tmp2 = value(react.useState(""), 2);
  value = tmp2[0];
  const tmp4 = tmp2[1];
  [tmp6, c4] = value(react.useState(false), 2);
  value(react.useState(false), 2);
  const tmp7 = value(react.useState(false), 2);
  let closure_5 = tmp7[1];
  const items = [environment, value, onSaved, projectId];
  const first1 = tmp7[0];
  const callback = react.useCallback(() => {
    const tmp = _undefined(true);
    closure_5(false);
    let obj = conjureDatabaseLock;
    const result = obj.withConjureDatabaseLock(projectId, () => {
      const obj = projectId(onSaved[7]);
      return obj.createDatabaseRestorePoint(closure_1_0, environment, closure_1_3);
    });
    const nextPromise = result.then(function(result) {
      if (null == result) {
        const _Error = Error;
        const self = this;
        const self2 = this;
        const error = new Error("database busy");
        throw error;
      }
    });
    nextPromise.then(() => {
      let intl;
      const obj = { text: intl.string(environment(onSaved[10]).OoHJfv) };
      const open = environment(onSaved[8]).open;
      environment(onSaved[8]);
      intl = projectId(onSaved[9]).intl;
      open("CONJURE_HISTORY_BACKUP_SAVED", obj);
      closure_1_2();
      const obj2 = environment(onSaved[11]);
      obj2.hideActionSheet(ConjureSaveBackupSheet_str);
    }, () => {
      _undefined(false);
      closure_1_5(true);
    });
  }, items);
  let obj = { startExpanded: true, keyboardShouldPersistTaps: "handled", header: closure_6(BottomSheetTitleHeader, obj2), children: closure_6(tmp14, obj3) };
  const ActionSheet = projectId(onSaved[12]).ActionSheet;
  obj2 = { title: intl.string(environment(onSaved[10]).qywOto) };
  BottomSheetTitleHeader = projectId(onSaved[13]).BottomSheetTitleHeader;
  intl = projectId(onSaved[9]).intl;
  obj3 = { style: tmp.content, children: tmp15(Stack, obj8) };
  Stack = projectId(onSaved[14]).Stack;
  const obj4 = { variant: "text-sm/normal", color: "text-muted", children: formatToPlainString(sXGNm5, obj5) };
  const Text = projectId(onSaved[15]).Text;
  const intl2 = projectId(onSaved[9]).intl;
  formatToPlainString = intl2.formatToPlainString;
  obj5 = { environment: obj6.historyEnvironmentLabel(environment) };
  sXGNm5 = environment(onSaved[10]).sXGNm5;
  obj6 = projectId(onSaved[16]);
  const items1 = [closure_6(Text, obj4), , ];
  const obj7 = { label: intl3.string(environment(onSaved[10]).WKmhsD), value, onChange: tmp4, maxLength: 200, disabled: tmp6, errorMessage: stringResult };
  const TextInput = projectId(onSaved[17]).TextInput;
  intl3 = projectId(onSaved[9]).intl;
  stringResult = undefined;
  tmp14 = closure_5;
  tmp15 = closure_7;
  if (first1) {
    const intl4 = tmp11(tmp12[9]).intl;
    stringResult = intl4.string(tmp13(tmp12[10]).TOxYEF);
  }
  obj8 = { spacing: 16, children: items1 };
  items1[1] = closure_6(TextInput, obj7);
  const obj9 = { variant: "primary", text: intl5.string(environment(onSaved[10])["5/xCdF"]), loading: tmp6, onPress: callback };
  const Button = tmp11(tmp12[18]).Button;
  intl5 = tmp11(tmp12[9]).intl;
  items1[2] = closure_6(Button, obj9);
  return closure_6(ActionSheet, obj);
};
export const CONJURE_SAVE_BACKUP_SHEET_KEY = "ConjureSaveBackupSheet";
