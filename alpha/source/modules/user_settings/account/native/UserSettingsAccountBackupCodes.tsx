// Module ID: 15028
// Function ID: 15029
// Name: UserSettingsAccountBackupCodes
// Dependencies: [19, 17, 14013, 21, 5092, 587, 558, 576, 6885, 4808, 6822, 6179, 1126, 4818, 504, 15019, 5088, 6264, 5377, 2]

// Module 15028 (UserSettingsAccountBackupCodes)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import ToastUtils from "ToastUtils" /* 4808 */;
import ClipboardUtils from "ClipboardUtils" /* 6885 */;
import MFAActionCreatorsDefault from "MFAActionCreators" /* 15019 */;
import react from "react" /* 19 */;
import MFAStore from "MFAStore" /* 14013 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5092 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let metroImportDefault;
let metroRequire;
let obj2;
const ScrollView = react_native.ScrollView;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let obj = { generateCode: obj2 };
obj2 = { color: nativeDefault.colors.TEXT_BRAND };
let closure_8 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? (function CodeRow(code) {
  let tmp4;
  let tmp6;
  let obj = code(576);
  const cResult = obj.c(8);
  code = code.code;
  const showCheckMark = code.showCheckMark;
  if (cResult[0] !== code) {
    const fn = function t() {
      const obj = ClipboardUtils;
      obj.copy(code.replace(/[^a-zA-Z0-9]/g, ""));
      const obj2 = ToastUtils;
      const result = obj2.presentCopiedToClipboard();
    };
    cResult[0] = code;
    cResult[1] = fn;
    tmp4 = fn;
  } else {
    tmp4 = cResult[1];
  }
  let tmp5;
  if (!showCheckMark) {
    tmp5 = tmp4;
  }
  if (cResult[2] !== showCheckMark) {
    let tmp7 = null;
    if (showCheckMark) {
      let obj2 = { color: nativeDefault.colors.TEXT_BRAND };
      const CheckmarkSmallIcon = tmp(6822).CheckmarkSmallIcon;
      tmp7 = closure_6(CheckmarkSmallIcon, obj2);
    }
    cResult[2] = showCheckMark;
    cResult[3] = tmp7;
    tmp6 = tmp7;
  } else {
    tmp6 = cResult[3];
  }
  if (cResult[4] === code) {
    if (cResult[5] === tmp5) {
      let tmp10;
      if (cResult[6] === tmp6) {
        tmp10 = cResult[7];
      }
      return tmp10;
    }
  }
  const tmp11 = closure_6(code(6179).TableRow, { onPress: tmp5, label: code, trailing: tmp6 });
  cResult[4] = code;
  cResult[5] = tmp5;
  cResult[6] = tmp6;
  cResult[7] = tmp11;
  tmp10 = tmp11;
}) : (function CodeRow(code) {
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
  const TableRow = code(6179).TableRow;
  const tmp3 = code;
  if (!showCheckMark) {
    tmp5 = callback;
  }
  let obj = { onPress: tmp5, label: code, trailing: tmp2Result };
  tmp2Result = null;
  if (showCheckMark) {
    let obj2 = { color: nativeDefault.colors.TEXT_BRAND };
    const CheckmarkSmallIcon = tmp3(6822).CheckmarkSmallIcon;
    tmp2Result = tmp2(CheckmarkSmallIcon, obj2);
  }
  return closure_6(TableRow, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function UserSettingsAccountBackupCodes(arg0) {
  let Stack;
  let TableRow;
  let Text;
  let arr;
  let headerLabel;
  let intl2;
  let intl3;
  let intl4;
  let items1;
  let items2;
  let items4;
  let obj6;
  let obj8;
  let obj9;
  let onGenerate;
  let tmp11;
  let tmp13;
  let tmp14;
  let tmp8;
  let tmp9;
  let unusedCodes;
  let usedCodes;
  let obj = items1(576);
  const cResult = obj.c(26);
  ({ onGenerate, headerLabel } = arg0);
  if (cResult[0] !== headerLabel) {
    let formatResult = headerLabel;
    if (undefined === headerLabel) {
      const intl = tmp(1126).intl;
      formatResult = intl.format(tmp(1126).t.OhmvYt, {});
    }
    cResult[0] = headerLabel;
    cResult[1] = formatResult;
    arr = formatResult;
  } else {
    arr = cResult[1];
  }
  const tmpResult = items1(4818);
  const token = tmpResult.useToken(items2(587).modules.mobile.TABLE_ROW_PADDING);
  const tmp7 = closure_8();
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [MFAStore];
    const fn = function v() {
      return MFAStore.getBackupCodes();
    };
    cResult[2] = items;
    cResult[3] = fn;
    tmp9 = fn;
    tmp8 = items;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  const tmpResult2 = items1(504);
  const stateFromStores = tmpResult2.useStateFromStores(tmp8, tmp9);
  if (cResult[4] !== stateFromStores) {
    items1 = [];
    items2 = [];
    const item = stateFromStores.forEach((consumed) => {
      let arr;
      if (consumed.consumed) {
        arr = items1.push(consumed);
      } else {
        arr = items2.push(consumed);
      }
      return arr;
    });
    const obj2 = { usedCodes: items1, unusedCodes: items2 };
    cResult[4] = stateFromStores;
    cResult[5] = obj2;
    tmp11 = obj2;
  } else {
    tmp11 = cResult[5];
  }
  ({ usedCodes, unusedCodes } = tmp11);
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    class I {
      constructor() {
        return () => {
          const obj = items2(closure_1_2[15]);
          obj.clearBackupCodes();
        };
      }
    }
    const items3 = [];
    cResult[6] = I;
    cResult[7] = items3;
    tmp14 = items3;
    tmp13 = I;
  } else {
    class I {
      constructor() {
        return () => {
          const obj = items2(closure_1_2[15]);
          obj.clearBackupCodes();
        };
      }
    }
    tmp14 = cResult[7];
  }
  const effect = react.useEffect(tmp13, tmp14);
  if (cResult[8] !== token) {
    class I {
      constructor() {
        return () => {
          const obj = items2(closure_1_2[15]);
          obj.clearBackupCodes();
        };
      }
    }
    tmp17[0] = token;
    tmp17[1] = items2(587).space.PX_16;
    cResult[8] = token;
    cResult[9] = tmp17;
  } else {
    class I {
      constructor() {
        return () => {
          const obj = items2(closure_1_2[15]);
          obj.clearBackupCodes();
        };
      }
    }
  }
  if (cResult[10] !== arr) {
    let tmp19;
    class I {
      constructor() {
        return () => {
          const obj = items2(closure_1_2[15]);
          obj.clearBackupCodes();
        };
      }
    }
    if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
      class F {
        constructor(children, arg1) {
          const obj = { variant: "text-sm/medium", children };
          return closure_1_6(items1(dependencyMap[16]).Text, obj, arg1);
        }
      }
      cResult[12] = F;
      tmp19 = F;
    } else {
      class F {
        constructor(children, arg1) {
          const obj = { variant: "text-sm/medium", children };
          return closure_1_6(items1(dependencyMap[16]).Text, obj, arg1);
        }
      }
    }
    const mapped = arr.map(tmp19);
    cResult[10] = arr;
    cResult[11] = mapped;
  } else {
    class F {
      constructor(children, arg1) {
        const obj = { variant: "text-sm/medium", children };
        return closure_1_6(items1(dependencyMap[16]).Text, obj, arg1);
      }
    }
  }
  if (cResult[13] !== unusedCodes) {
    class F {
      constructor(children, arg1) {
        const obj = { variant: "text-sm/medium", children };
        return closure_1_6(items1(dependencyMap[16]).Text, obj, arg1);
      }
    }
    let tmp22 = unusedCodes.length > 0;
    if (tmp22) {
      class F {
        constructor(children, arg1) {
          const obj = { variant: "text-sm/medium", children };
          return closure_1_6(items1(dependencyMap[16]).Text, obj, arg1);
        }
      }
      const obj3 = {
        title: intl2.string(items1(1126).t.zdzyFo),
        hasIcons: false,
        children: unusedCodes.map((code, index) => {
              const obj = { code: code.code, showCheckMark: false };
              return closure_1_6(closure_1_9, obj, index);
            })
      };
      const TableRowGroup = tmp(6264).TableRowGroup;
      intl2 = tmp(1126).intl;
      tmp22 = closure_6(TableRowGroup, obj3);
    }
    cResult[13] = unusedCodes;
    cResult[14] = tmp22;
  } else {
    class F {
      constructor(children, arg1) {
        const obj = { variant: "text-sm/medium", children };
        return closure_1_6(items1(dependencyMap[16]).Text, obj, arg1);
      }
    }
  }
  if (cResult[15] !== usedCodes) {
    class F {
      constructor(children, arg1) {
        const obj = { variant: "text-sm/medium", children };
        return closure_1_6(items1(dependencyMap[16]).Text, obj, arg1);
      }
    }
    let tmp24 = usedCodes.length > 0;
    if (tmp24) {
      class F {
        constructor(children, arg1) {
          const obj = { variant: "text-sm/medium", children };
          return closure_1_6(items1(dependencyMap[16]).Text, obj, arg1);
        }
      }
      const obj4 = {
        title: intl3.string(items1(1126).t.FkFLDN),
        hasIcons: false,
        children: usedCodes.map((code, index) => {
              const obj = { code: code.code, showCheckMark: true };
              return closure_1_6(closure_1_9, obj, index);
            })
      };
      const TableRowGroup2 = tmp(6264).TableRowGroup;
      intl3 = tmp(1126).intl;
      tmp24 = closure_6(TableRowGroup2, obj4);
    }
    cResult[15] = usedCodes;
    cResult[16] = tmp24;
  } else {
    class F {
      constructor(children, arg1) {
        const obj = { variant: "text-sm/medium", children };
        return closure_1_6(items1(dependencyMap[16]).Text, obj, arg1);
      }
    }
  }
  if (cResult[17] === onGenerate) {
    class F {
      constructor(children, arg1) {
        const obj = { variant: "text-sm/medium", children };
        return closure_1_6(items1(dependencyMap[16]).Text, obj, arg1);
      }
    }
    if (cResult[20] === tmp21) {
      class F {
        constructor(children, arg1) {
          const obj = { variant: "text-sm/medium", children };
          return closure_1_6(items1(dependencyMap[16]).Text, obj, arg1);
        }
      }
    }
    const obj5 = { children: closure_7(Stack, obj6) };
    obj6 = { spacing: items2(587).space.PX_24, style: tmp16, children: items4 };
    Stack = tmp(5377).Stack;
    items4 = [tmp18, tmp21, tmp23, tmp25];
    cResult[20] = tmp21;
    cResult[21] = tmp23;
    cResult[22] = tmp25;
    cResult[23] = tmp16;
    cResult[24] = tmp18;
    cResult[25] = closure_6(ScrollView, obj5);
    const tmp31 = closure_6(ScrollView, obj5);
  }
  let tmp26 = null !== onGenerate;
  if (tmp26) {
    class F {
      constructor(children, arg1) {
        const obj = { variant: "text-sm/medium", children };
        return closure_1_6(items1(dependencyMap[16]).Text, obj, arg1);
      }
    }
    const obj7 = { hasIcons: false, children: closure_6(TableRow, obj8) };
    const TableRowGroup3 = tmp(6264).TableRowGroup;
    obj8 = {
      label: closure_6(Text, obj9),
      onPress() {
          const verificationKey = MFAStore.getVerificationKey();
          const obj = items2(dependencyMap[15]);
          const result = obj.confirmViewBackupCodes(verificationKey, true);
        }
    };
    TableRow = tmp(6179).TableRow;
    obj9 = { variant: "text-md/semibold", style: tmp7.generateCode, children: intl4.string(items1(1126).t.RIThUu) };
    Text = tmp(5088).Text;
    intl4 = tmp(1126).intl;
    tmp26 = closure_6(TableRowGroup3, obj7);
  }
  cResult[17] = onGenerate;
  cResult[18] = tmp7;
  cResult[19] = tmp26;
}) : (function UserSettingsAccountBackupCodes(headerLabel) {
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
    const intl = stateFromStores(1126).intl;
    headerLabel = intl.format(stateFromStores(1126).t.OhmvYt, {});
  }
  stateFromStores = undefined;
  let obj = stateFromStores(4818);
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
    const obj = closure_1_1(closure_1_2[15]);
    obj.clearBackupCodes();
  }, []);
  const obj3 = { spacing: nativeDefault.space.PX_24, style: { paddingHorizontal: token, paddingTop: nativeDefault.space.PX_16 }, children: items2 };
  const Stack = stateFromStores(5377).Stack;
  items2 = [, , , ];
  ({ paddingHorizontal: token, paddingTop: nativeDefault.space.PX_16 });
  items2[0] = headerLabel.map((children, index) => {
    const obj = { variant: "text-sm/medium", children };
    return closure_1_6(stateFromStores(dependencyMap[16]).Text, obj, index);
  });
  let tmp10Result = unusedCodes.length > 0;
  const tmp11 = ScrollView;
  const tmp12 = closure_7;
  if (tmp10Result) {
    const obj5 = {
      title: intl2.string(stateFromStores(1126).t.zdzyFo),
      hasIcons: false,
      children: unusedCodes.map((code, index) => {
          const obj = { code: code.code, showCheckMark: false };
          return closure_1_6(closure_1_9, obj, index);
        })
    };
    const TableRowGroup = tmp3(6264).TableRowGroup;
    intl2 = tmp3(1126).intl;
    tmp10Result = tmp10(TableRowGroup, obj5);
  }
  items2[1] = tmp10Result;
  let tmp10Result3 = usedCodes.length > 0;
  if (tmp10Result3) {
    const obj6 = {
      title: intl3.string(stateFromStores(1126).t.FkFLDN),
      hasIcons: false,
      children: usedCodes.map((code, index) => {
          const obj = { code: code.code, showCheckMark: true };
          return closure_1_6(closure_1_9, obj, index);
        })
    };
    const TableRowGroup2 = tmp3(6264).TableRowGroup;
    intl3 = tmp3(1126).intl;
    tmp10Result3 = tmp10(TableRowGroup2, obj6);
  }
  items2[2] = tmp10Result3;
  let tmp10Result4 = null !== onGenerate;
  if (tmp10Result4) {
    const obj7 = { hasIcons: false, children: closure_6(TableRow, obj8) };
    const TableRowGroup3 = tmp3(6264).TableRowGroup;
    obj8 = {
      label: closure_6(Text, obj9),
      onPress() {
          const verificationKey = MFAStore.getVerificationKey();
          const obj = MFAActionCreatorsDefault;
          const result = obj.confirmViewBackupCodes(verificationKey, true);
        }
    };
    TableRow = tmp3(6179).TableRow;
    obj9 = { variant: "text-md/semibold", style: tmp6.generateCode, children: intl4.string(stateFromStores(1126).t.RIThUu) };
    Text = tmp3(5088).Text;
    intl4 = tmp3(1126).intl;
    tmp10Result4 = tmp10(TableRowGroup3, obj7);
  }
  items2[3] = tmp10Result4;
  const obj10 = { children: tmp12(Stack, obj3) };
  return closure_6(tmp11, obj10);
});
let result = size.fileFinishedImporting("modules/user_settings/account/native/UserSettingsAccountBackupCodes.tsx");

export default tmp3;
