// Module ID: 13532
// Function ID: 102641
// Name: CodeRow
// Dependencies: []
// Exports: default

// Module 13532 (CodeRow)
function CodeRow(code) {
  code = code.code;
  const arg1 = code;
  const showCheckMark = code.showCheckMark;
  const items = [code];
  const callback = React.useCallback(() => {
    code(closure_2[6]).copy(code.replace(/[^a-zA-Z0-9]/g, ""));
    const obj = code(closure_2[6]);
    const result = code(closure_2[7]).presentCopiedToClipboard();
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
    obj = { color: importDefault(dependencyMap[5]).colors.TEXT_BRAND };
    tmp4 = callback(arg1(dependencyMap[9]).CheckmarkSmallIcon, obj);
  }
  obj.trailing = tmp4;
  return callback(arg1(dependencyMap[8]).TableRow, obj);
}
let closure_3 = importAll(dependencyMap[0]);
const ScrollView = arg1(dependencyMap[1]).ScrollView;
let closure_5 = importDefault(dependencyMap[2]);
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = {};
obj = { color: importDefault(dependencyMap[5]).colors.TEXT_BRAND };
obj.generateCode = obj;
let closure_8 = obj.createStyles(obj);
const tmp2 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[17]).fileFinishedImporting("modules/user_settings/account/native/UserSettingsAccountBackupCodes.tsx");

export default function UserSettingsAccountBackupCodes(headerLabel) {
  let unusedCodes;
  let usedCodes;
  headerLabel = headerLabel.headerLabel;
  if (headerLabel === undefined) {
    const intl = arg1(dependencyMap[10]).intl;
    headerLabel = intl.format(arg1(dependencyMap[10]).t.OhmvYt, {});
  }
  let arg1;
  let obj = arg1(dependencyMap[11]);
  const token = obj.useToken(importDefault(dependencyMap[5]).modules.mobile.TABLE_ROW_PADDING);
  let obj1 = arg1(dependencyMap[12]);
  const items = [closure_5];
  const stateFromStores = obj1.useStateFromStores(items, () => store.getBackupCodes());
  arg1 = stateFromStores;
  const items1 = [stateFromStores];
  const memo = React.useMemo(() => {
    const usedCodes = [];
    const stateFromStores = usedCodes;
    const unusedCodes = [];
    const item = stateFromStores.forEach((consumed) => {
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
    callback(closure_2[13]).clearBackupCodes();
  }, []);
  obj = {};
  obj = { spacing: importDefault(dependencyMap[5]).space.PX_24 };
  obj1 = { paddingHorizontal: token, paddingTop: importDefault(dependencyMap[5]).space.PX_16 };
  obj.style = obj1;
  const items2 = [headerLabel.map((children) => callback2(stateFromStores(closure_2[15]).Text, { variant: "text-sm/medium", children }, arg1)), , , ];
  let tmp11 = unusedCodes.length > 0;
  if (tmp11) {
    const obj2 = {};
    const intl2 = arg1(dependencyMap[10]).intl;
    obj2.title = intl2.string(arg1(dependencyMap[10]).t.zdzyFo);
    obj2.hasIcons = false;
    obj2.children = unusedCodes.map((code) => callback2(closure_9, { code: code.code, showCheckMark: false }, arg1));
    tmp11 = callback(arg1(dependencyMap[16]).TableRowGroup, obj2);
  }
  items2[1] = tmp11;
  let tmp15 = usedCodes.length > 0;
  if (tmp15) {
    const obj3 = {};
    const intl3 = arg1(dependencyMap[10]).intl;
    obj3.title = intl3.string(arg1(dependencyMap[10]).t.FkFLDN);
    obj3.hasIcons = false;
    obj3.children = usedCodes.map((code) => callback2(closure_9, { code: code.code, showCheckMark: true }, arg1));
    tmp15 = callback(arg1(dependencyMap[16]).TableRowGroup, obj3);
  }
  items2[2] = tmp15;
  let tmp19 = null !== headerLabel.onGenerate;
  if (tmp19) {
    const obj4 = { hasIcons: false };
    const obj5 = {};
    const obj6 = { variant: "text-md/semibold", style: tmp4.generateCode };
    const intl4 = arg1(dependencyMap[10]).intl;
    obj6.children = intl4.string(arg1(dependencyMap[10]).t.RIThUu);
    obj5.label = callback(arg1(dependencyMap[15]).Text, obj6);
    obj5.onPress = function onPress() {
      const verificationKey = store.getVerificationKey();
      const result = callback(closure_2[13]).confirmViewBackupCodes(verificationKey, true);
    };
    obj4.children = callback(arg1(dependencyMap[8]).TableRow, obj5);
    tmp19 = callback(arg1(dependencyMap[16]).TableRowGroup, obj4);
  }
  items2[3] = tmp19;
  obj.children = items2;
  obj.children = closure_7(arg1(dependencyMap[14]).Stack, obj);
  return callback(ScrollView, obj);
};
