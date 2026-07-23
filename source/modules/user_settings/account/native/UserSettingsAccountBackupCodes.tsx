// Module ID: 13646
// Function ID: 104797
// Name: CodeRow
// Dependencies: [31, 27, 12671, 33, 4130, 689, 5492, 3830, 5165, 5154, 1212, 3834, 566, 13647, 4541, 4126, 5503, 2]
// Exports: default

// Module 13646 (CodeRow)
import result from "result";
import { ScrollView } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_6;
let closure_7;
const require = arg1;
function CodeRow(code) {
  code = code.code;
  const showCheckMark = code.showCheckMark;
  const items = [code];
  const callback = React.useCallback(() => {
    code(outer1_2[6]).copy(code.replace(/[^a-zA-Z0-9]/g, ""));
    const obj = code(outer1_2[6]);
    const result = code(outer1_2[7]).presentCopiedToClipboard();
  }, items);
  let obj = {};
  let tmp3;
  if (!showCheckMark) {
    tmp3 = callback;
  }
  obj.onPress = tmp3;
  obj.label = code;
  let tmp4 = null;
  if (showCheckMark) {
    obj = { color: importDefault(689).colors.TEXT_BRAND };
    tmp4 = callback(code(5154).CheckmarkSmallIcon, obj);
  }
  obj.trailing = tmp4;
  return callback(code(5165).TableRow, obj);
}
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_BRAND };
_createForOfIteratorHelperLoose.generateCode = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/user_settings/account/native/UserSettingsAccountBackupCodes.tsx");

export default function UserSettingsAccountBackupCodes(headerLabel) {
  let unusedCodes;
  let usedCodes;
  headerLabel = headerLabel.headerLabel;
  if (headerLabel === undefined) {
    const intl = stateFromStores(1212).intl;
    headerLabel = intl.format(stateFromStores(1212).t.OhmvYt, {});
  }
  stateFromStores = undefined;
  let obj = stateFromStores(3834);
  const token = obj.useToken(importDefault(689).modules.mobile.TABLE_ROW_PADDING);
  let obj1 = stateFromStores(566);
  const items = [_isNativeReflectConstruct];
  stateFromStores = obj1.useStateFromStores(items, () => outer1_5.getBackupCodes());
  const items1 = [stateFromStores];
  const memo = React.useMemo(() => {
    const usedCodes = [];
    const unusedCodes = [];
    const item = usedCodes.forEach((consumed) => {
      if (consumed.consumed) {
        let arr = usedCodes.push(consumed);
      } else {
        arr = unusedCodes.push(consumed);
      }
      return arr;
    });
    return { usedCodes, unusedCodes };
  }, items1);
  ({ usedCodes, unusedCodes } = memo);
  const effect = React.useEffect(() => () => {
    outer2_1(outer2_2[13]).clearBackupCodes();
  }, []);
  obj = {};
  obj = { spacing: importDefault(689).space.PX_24 };
  obj1 = { paddingHorizontal: token, paddingTop: importDefault(689).space.PX_16 };
  obj.style = obj1;
  const items2 = [headerLabel.map((children) => outer1_6(stateFromStores(outer1_2[15]).Text, { variant: "text-sm/medium", children }, arg1)), , , ];
  let tmp11 = unusedCodes.length > 0;
  if (tmp11) {
    const obj2 = {};
    const intl2 = stateFromStores(1212).intl;
    obj2.title = intl2.string(stateFromStores(1212).t.zdzyFo);
    obj2.hasIcons = false;
    obj2.children = unusedCodes.map((code) => outer1_6(outer1_9, { code: code.code, showCheckMark: false }, arg1));
    tmp11 = callback(stateFromStores(5503).TableRowGroup, obj2);
  }
  items2[1] = tmp11;
  let tmp15 = usedCodes.length > 0;
  if (tmp15) {
    const obj3 = {};
    const intl3 = stateFromStores(1212).intl;
    obj3.title = intl3.string(stateFromStores(1212).t.FkFLDN);
    obj3.hasIcons = false;
    obj3.children = usedCodes.map((code) => outer1_6(outer1_9, { code: code.code, showCheckMark: true }, arg1));
    tmp15 = callback(stateFromStores(5503).TableRowGroup, obj3);
  }
  items2[2] = tmp15;
  let tmp19 = null !== headerLabel.onGenerate;
  if (tmp19) {
    const obj4 = { hasIcons: false };
    const obj5 = {};
    const obj6 = { variant: "text-md/semibold", style: tmp4.generateCode };
    const intl4 = stateFromStores(1212).intl;
    obj6.children = intl4.string(stateFromStores(1212).t.RIThUu);
    obj5.label = callback(stateFromStores(4126).Text, obj6);
    obj5.onPress = function onPress() {
      const verificationKey = outer1_5.getVerificationKey();
      const result = outer1_1(outer1_2[13]).confirmViewBackupCodes(verificationKey, true);
    };
    obj4.children = callback(stateFromStores(5165).TableRow, obj5);
    tmp19 = callback(stateFromStores(5503).TableRowGroup, obj4);
  }
  items2[3] = tmp19;
  obj.children = items2;
  obj.children = closure_7(stateFromStores(4541).Stack, obj);
  return callback(ScrollView, obj);
};
