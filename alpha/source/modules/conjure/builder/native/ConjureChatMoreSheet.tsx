// Module ID: 12352
// Function ID: 12353
// Name: ConjureChatMoreSheet
// Dependencies: [109, 19, 11865, 21, 5247, 558, 576, 6971, 7355, 6963, 10835, 10875, 12353, 7358, 1125, 3864, 7047, 2]

// Module 12352 (ConjureChatMoreSheet)
import Fragment from "Fragment" /* 21 */;
import _modDef3864 from "module_3864" /* 3864 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5247 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import conjureDesignFeedbackStore from "conjureDesignFeedbackStore" /* 11865 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let closure_3 = ["canAnnotate"];
({ enterConjureDesignFeedback: hasOwnProperty, exitConjureDesignFeedback: metroRequire, useConjureDesignFeedback: metroImportDefault } = conjureDesignFeedbackStore);
const jsx = Fragment.jsx;
const ConjureChatMoreSheet_str = "ConjureChatMoreSheet";
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? (function MoreRow(row) {
  let iter;
  let tmp = iter;
  let obj = iter(576);
  const cResult = obj.c(21);
  iter = row.row;
  if ("switch" === iter.kind) {
    let tmp11;
    let tmp14;
    if (cResult[0] !== iter.IconComponent) {
      const tmp13 = jsx(tmp(6971).TableRowIcon, { IconComponent: iter.IconComponent });
      cResult[0] = iter.IconComponent;
      cResult[1] = tmp13;
      tmp11 = tmp13;
    } else {
      tmp11 = cResult[1];
    }
    if (cResult[2] !== iter) {
      const fn = function t(arg0) {
        const tmp = arg0 && true === iter.closesOnEnable;
        if (tmp) {
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet(ConjureChatMoreSheet_str);
        }
        iter.onValueChange(arg0);
      };
      cResult[2] = iter;
      cResult[3] = fn;
      tmp14 = fn;
    } else {
      tmp14 = cResult[3];
    }
    if (cResult[4] === iter.disabled) {
      if (cResult[5] === iter.label) {
        if (cResult[6] === iter.subLabel) {
          if (cResult[7] === iter.value) {
            if (cResult[8] === tmp11) {
              let tmp15;
              if (cResult[9] === tmp14) {
                tmp15 = cResult[10];
              }
              return tmp15;
            }
          }
        }
      }
    }
    ({ label: obj5.label, subLabel: obj5.subLabel } = iter);
    ({ value: obj5.value, disabled: obj5.disabled } = iter);
    const tmp17 = jsx(tmp(7355).TableSwitchRow, { label: null, subLabel: null, icon: tmp11, value: null, disabled: null, onValueChange: tmp14 });
    cResult[4] = iter.disabled;
    cResult[5] = iter.label;
    cResult[6] = iter.subLabel;
    cResult[7] = iter.value;
    cResult[8] = tmp11;
    cResult[9] = tmp14;
    cResult[10] = tmp17;
    tmp15 = tmp17;
  } else {
    let str = "default";
    if (true === iter.destructive) {
      str = "danger";
    }
    if (cResult[11] === iter.IconComponent) {
      let tmp4;
      if (cResult[12] === str) {
        tmp4 = cResult[13];
      }
      if (cResult[14] !== iter) {
        class C {
          constructor() {
            const obj = ActionSheetActionCreatorsDefault;
            obj.hideActionSheet(ConjureChatMoreSheet_str);
            iter.onPress();
          }
        }
        cResult[14] = iter;
        cResult[15] = C;
      } else {
        class C {
          constructor() {
            const obj = ActionSheetActionCreatorsDefault;
            obj.hideActionSheet(ConjureChatMoreSheet_str);
            iter.onPress();
          }
        }
      }
      if (cResult[16] === iter.label) {
        class C {
          constructor() {
            const obj = ActionSheetActionCreatorsDefault;
            obj.hideActionSheet(ConjureChatMoreSheet_str);
            iter.onPress();
          }
        }
      }
      cResult[16] = iter.label;
      cResult[17] = tmp4;
      cResult[18] = tmp7;
      cResult[19] = str;
      cResult[20] = jsx(tmp(6963).TableRow, { label: iter.label, variant: str, icon: tmp4, onPress: tmp7 });
      const tmp10 = jsx(tmp(6963).TableRow, { label: iter.label, variant: str, icon: tmp4, onPress: tmp7 });
    }
    const tmp6 = jsx(tmp(6971).TableRowIcon, { IconComponent: iter.IconComponent, variant: str });
    cResult[11] = iter.IconComponent;
    cResult[12] = str;
    cResult[13] = tmp6;
    tmp4 = tmp6;
  }
}) : (function MoreRow(row) {
  row = row.row;
  if ("switch" === row.kind) {
    ({ label: obj3.label, subLabel: obj3.subLabel } = row);
    const TableSwitchRow = row(7355).TableSwitchRow;
    ({ value: obj3.value, disabled: obj3.disabled } = row);
    return <TableSwitchRow label={null} subLabel={null} icon={null} value={null} disabled={null} onValueChange={function onValueChange(arg0) {
      const tmp = arg0 && true === row.closesOnEnable;
      if (tmp) {
        const obj = ActionSheetActionCreatorsDefault;
        obj.hideActionSheet(ConjureChatMoreSheet_str);
      }
      row.onValueChange(arg0);
    }} />;
  } else {
    let str = "default";
    if (true === row.destructive) {
      str = "danger";
    }
    let tmp = jsx;
    const TableRow = row(6963).TableRow;
    return <TableRow label={row.label} variant={str} icon={null} onPress={function onPress() {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet(ConjureChatMoreSheet_str);
      row.onPress();
    }} />;
  }
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureChatMoreSheet(canAnnotate) {
  let first;
  let id;
  let tmp13;
  let tmp9;
  function onToggle(arg0) {
    let tmp4;
    const tmp = arg0;
    if (tmp) {
      tmp4 = hasOwnProperty(id);
    } else {
      tmp4 = metroRequire(id);
    }
    return tmp4;
  }
  let tmp = id;
  let obj = id(576);
  const cResult = obj.c(6);
  canAnnotate = canAnnotate.canAnnotate;
  let tmp4 = _objectWithoutProperties(canAnnotate, closure_3);
  id = tmp4.project.id;
  const obj2 = id(10835);
  const isConjureProjectMuted = obj2.useIsConjureProjectMuted(id);
  const active = closure_7(id).active;
  const obj3 = id(10875);
  const conjureControlActive = obj3.useConjureControlActive(id);
  const obj4 = { muted: isConjureProjectMuted, annotate: tmp9 };
  const conjureChatMoreSections = id(12353).conjureChatMoreSections;
  id(12353);
  const merged = Object.assign(tmp4);
  tmp9 = null;
  if (canAnnotate) {
    tmp9 = { active, busy: conjureControlActive, onToggle };
    const obj5 = { active, busy: conjureControlActive, onToggle };
  }
  const result = conjureChatMoreSections(obj4);
  const ActionSheet = tmp(7358).ActionSheet;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1125).intl;
    const stringResult = intl.string(_modDef3864.OsD9T0);
    cResult[0] = stringResult;
    first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function h(arr) {
      const TableRowGroup = id(dependencyMap[16]).TableRowGroup;
      return <TableRowGroup key={arg0[0].key} hasIcons>{arg0.map((row) => {
        const obj = { row };
        return closure_1_8(closure_1_10, obj, row.key);
      })}</TableRowGroup>;
    };
    cResult[1] = fn;
    tmp13 = fn;
  } else {
    tmp13 = cResult[1];
  }
  const mapped = result.map(tmp13);
  if (cResult[2] === ActionSheet) {
    if (cResult[3] === first) {
      let tmp15;
      if (cResult[4] === mapped) {
        tmp15 = cResult[5];
      }
      return tmp15;
    }
  }
  const tmp16 = <ActionSheet dismissAccessibilityLabel={first}>{mapped}</ActionSheet>;
  cResult[2] = ActionSheet;
  cResult[3] = first;
  cResult[4] = mapped;
  cResult[5] = tmp16;
  tmp15 = tmp16;
}) : (function ConjureChatMoreSheet(canAnnotate) {
  function onToggle(arg0) {
    let tmp4;
    const tmp = arg0;
    if (tmp) {
      tmp4 = hasOwnProperty(id);
    } else {
      tmp4 = metroRequire(id);
    }
    return tmp4;
  }
  let tmp = null;
  canAnnotate = canAnnotate.canAnnotate;
  const merged = Object.assign(canAnnotate, Object.assign({ canAnnotate: 0 }));
  const id = merged.project.id;
  let tmp4 = dependencyMap;
  let obj = id(10835);
  const isConjureProjectMuted = obj.useIsConjureProjectMuted(id);
  const active = closure_7(id).active;
  const obj2 = id(10875);
  const conjureControlActive = obj2.useConjureControlActive(id);
  const obj3 = { muted: isConjureProjectMuted, annotate: tmp };
  const conjureChatMoreSections = id(12353).conjureChatMoreSections;
  id(12353);
  const merged1 = Object.assign(merged);
  if (canAnnotate) {
    tmp = { active, busy: conjureControlActive, onToggle };
    const obj4 = { active, busy: conjureControlActive, onToggle };
  }
  const result = conjureChatMoreSections(obj3);
  const ActionSheet = tmp3(7358).ActionSheet;
  const intl = tmp3(1125).intl;
  return <ActionSheet dismissAccessibilityLabel={intl.string(_modDef3864.OsD9T0)}>{result.map((arr) => {
    const TableRowGroup = id(dependencyMap[16]).TableRowGroup;
    return <TableRowGroup key={arg0[0].key} hasIcons>{arg0.map((row) => {
      const obj = { row };
      return closure_1_8(closure_1_10, obj, row.key);
    })}</TableRowGroup>;
  })}</ActionSheet>;
});
let result = size.fileFinishedImporting("modules/conjure/builder/native/ConjureChatMoreSheet.tsx");

export default tmp4;
export const CONJURE_CHAT_MORE_SHEET_KEY = "ConjureChatMoreSheet";
