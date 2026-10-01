// Module ID: 14240
// Function ID: 14241
// Name: UserSettingsAccountBackupCodes
// Dependencies: [19, 17, 13290, 21, 4836, 576, 6610, 4527, 5917, 6554, 1115, 4531, 504, 14241, 5279, 4832, 5999, 2]
// Exports: default

// Module 14240 (UserSettingsAccountBackupCodes)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import ToastUtils from "ToastUtils" /* 4527 */;
import ClipboardUtils from "ClipboardUtils" /* 6610 */;
import MFAActionCreatorsDefault from "MFAActionCreators" /* 14241 */;
import react from "react" /* 19 */;
import MFAStore from "MFAStore" /* 13290 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let metroImportDefault;
let metroRequire;
let obj2;
function CodeRow(code) {
  let tmp2Result;
  code = code.code;
  const showCheckMark = code.showCheckMark;
  const items = [code];
  const callback = react.useCallback(() => {
    const obj = ClipboardUtils;
    obj.copy(code.replace(/[^a-zA-Z0-9]/g, ""));
    const obj2 = ToastUtils;
    const result = obj2.presentCopiedToClipboard();
  }, items);
  let tmp5;
  const TableRow = code(5917).TableRow;
  const tmp3 = code;
  if (!showCheckMark) {
    tmp5 = callback;
  }
  let obj = { onPress: tmp5, label: code, trailing: tmp2Result };
  tmp2Result = null;
  if (showCheckMark) {
    let obj2 = { color: nativeDefault.colors.TEXT_BRAND };
    const CheckmarkSmallIcon = tmp3(6554).CheckmarkSmallIcon;
    tmp2Result = tmp2(CheckmarkSmallIcon, obj2);
  }
  return closure_6(TableRow, obj);
}
const ScrollView = react_native.ScrollView;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let obj = { generateCode: obj2 };
obj2 = { color: nativeDefault.colors.TEXT_BRAND };
let closure_8 = createStyles.createStyles(obj);
let result = size.fileFinishedImporting("modules/user_settings/account/native/UserSettingsAccountBackupCodes.tsx");

export default function UserSettingsAccountBackupCodes(headerLabel) {
  let TableRow;
  let Text;
  let intl2;
  let intl3;
  let intl4;
  let items2;
  let obj8;
  let obj9;
  let stateFromStores;
  let unusedCodes;
  let usedCodes;
  headerLabel = headerLabel.headerLabel;
  const onGenerate = headerLabel.onGenerate;
  if (headerLabel === undefined) {
    const intl = stateFromStores(1115).intl;
    headerLabel = intl.format(stateFromStores(1115).t.OhmvYt, {});
  }
  stateFromStores = undefined;
  let obj = stateFromStores(4531);
  const token = obj.useToken(nativeDefault.modules.mobile.TABLE_ROW_PADDING);
  const items = [MFAStore];
  const tmp6 = closure_8();
  const obj2 = stateFromStores(504);
  stateFromStores = obj2.useStateFromStores(items, () => MFAStore.getBackupCodes());
  const items1 = [stateFromStores];
  const memo = react.useMemo(() => {
    const usedCodes = [];
    const unusedCodes = [];
    const item = stateFromStores.forEach((consumed) => {
      let arr;
      if (consumed.consumed) {
        arr = usedCodes.push(consumed);
      } else {
        arr = unusedCodes.push(consumed);
      }
      return arr;
    });
    return { usedCodes, unusedCodes };
  }, items1);
  ({ usedCodes, unusedCodes } = memo);
  const effect = react.useEffect(() => () => {
    const obj = closure_1_1(closure_1_2[13]);
    obj.clearBackupCodes();
  }, []);
  const obj3 = { spacing: nativeDefault.space.PX_24, style: { paddingHorizontal: token, paddingTop: nativeDefault.space.PX_16 }, children: items2 };
  const Stack = stateFromStores(5279).Stack;
  items2 = [, , , ];
  ({ paddingHorizontal: token, paddingTop: nativeDefault.space.PX_16 });
  items2[0] = headerLabel.map((children, index) => {
    const obj = { variant: "text-sm/medium", children };
    return closure_1_6(stateFromStores(dependencyMap[15]).Text, obj, index);
  });
  let tmp10Result = unusedCodes.length > 0;
  const tmp11 = ScrollView;
  const tmp12 = closure_7;
  if (tmp10Result) {
    const obj5 = {
      title: intl2.string(stateFromStores(1115).t.zdzyFo),
      hasIcons: false,
      children: unusedCodes.map((code, index) => {
          const obj = { code: code.code, showCheckMark: false };
          return closure_1_6(CodeRow, obj, index);
        })
    };
    const TableRowGroup = tmp3(5999).TableRowGroup;
    intl2 = tmp3(1115).intl;
    tmp10Result = tmp10(TableRowGroup, obj5);
  }
  items2[1] = tmp10Result;
  let tmp10Result3 = usedCodes.length > 0;
  if (tmp10Result3) {
    const obj6 = {
      title: intl3.string(stateFromStores(1115).t.FkFLDN),
      hasIcons: false,
      children: usedCodes.map((code, index) => {
          const obj = { code: code.code, showCheckMark: true };
          return closure_1_6(CodeRow, obj, index);
        })
    };
    const TableRowGroup2 = tmp3(5999).TableRowGroup;
    intl3 = tmp3(1115).intl;
    tmp10Result3 = tmp10(TableRowGroup2, obj6);
  }
  items2[2] = tmp10Result3;
  let tmp10Result4 = null !== onGenerate;
  if (tmp10Result4) {
    const obj7 = { hasIcons: false, children: closure_6(TableRow, obj8) };
    const TableRowGroup3 = tmp3(5999).TableRowGroup;
    obj8 = {
      label: closure_6(Text, obj9),
      onPress() {
          const verificationKey = MFAStore.getVerificationKey();
          const obj = MFAActionCreatorsDefault;
          const result = obj.confirmViewBackupCodes(verificationKey, true);
        }
    };
    TableRow = tmp3(5917).TableRow;
    obj9 = { variant: "text-md/semibold", style: tmp6.generateCode, children: intl4.string(stateFromStores(1115).t.RIThUu) };
    Text = tmp3(4832).Text;
    intl4 = tmp3(1115).intl;
    tmp10Result4 = tmp10(TableRowGroup3, obj7);
  }
  items2[3] = tmp10Result4;
  const obj10 = { children: tmp12(Stack, obj3) };
  return closure_6(tmp11, obj10);
};
