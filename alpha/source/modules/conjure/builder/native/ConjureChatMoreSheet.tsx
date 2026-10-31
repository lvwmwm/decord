// Module ID: 12549
// Function ID: 12550
// Name: ConjureChatMoreSheet
// Dependencies: [19, 12092, 21, 5258, 7369, 6983, 6975, 10878, 10923, 12550, 7366, 1113, 3868, 7060, 2]
// Exports: default

// Module 12549 (ConjureChatMoreSheet)
import Fragment from "Fragment" /* 21 */;
import _modDef3868 from "module_3868" /* 3868 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5258 */;
import react from "react" /* 19 */;
import conjureDesignFeedbackStore from "conjureDesignFeedbackStore" /* 12092 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let hasOwnProperty;
function MoreRow(row) {
  row = row.row;
  if ("switch" === row.kind) {
    ({ label: obj3.label, subLabel: obj3.subLabel } = row);
    const TableSwitchRow = row(7369).TableSwitchRow;
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
    const TableRow = row(6975).TableRow;
    return <TableRow label={row.label} variant={str} icon={null} onPress={function onPress() {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet(ConjureChatMoreSheet_str);
      row.onPress();
    }} />;
  }
}
({ enterConjureDesignFeedback: c3, exitConjureDesignFeedback: closure_4, useConjureDesignFeedback: hasOwnProperty } = conjureDesignFeedbackStore);
const jsx = Fragment.jsx;
const ConjureChatMoreSheet_str = "ConjureChatMoreSheet";
let result = size.fileFinishedImporting("modules/conjure/builder/native/ConjureChatMoreSheet.tsx");

export default function ConjureChatMoreSheet(canAnnotate) {
  function onToggle(arg0) {
    let tmp4;
    const tmp = arg0;
    if (tmp) {
      tmp4 = _false(id);
    } else {
      tmp4 = React3(id);
    }
    return tmp4;
  }
  let tmp = null;
  canAnnotate = canAnnotate.canAnnotate;
  const merged = Object.assign(canAnnotate, Object.assign({ canAnnotate: 0 }));
  const id = merged.project.id;
  let tmp4 = dependencyMap;
  let obj = id(10878);
  const isConjureProjectMuted = obj.useIsConjureProjectMuted(id);
  const active = closure_5(id).active;
  const obj2 = id(10923);
  const conjureControlActive = obj2.useConjureControlActive(id);
  const obj3 = { muted: isConjureProjectMuted, annotate: tmp };
  const conjureChatMoreSections = id(12550).conjureChatMoreSections;
  id(12550);
  const merged1 = Object.assign(merged);
  if (canAnnotate) {
    tmp = { active, busy: conjureControlActive, onToggle };
    const obj4 = { active, busy: conjureControlActive, onToggle };
  }
  const result = conjureChatMoreSections(obj3);
  const ActionSheet = tmp3(7366).ActionSheet;
  const intl = tmp3(1113).intl;
  return <ActionSheet dismissAccessibilityLabel={intl.string(_modDef3868.OsD9T0)}>{result.map((arr) => {
    const TableRowGroup = id(dependencyMap[13]).TableRowGroup;
    return <TableRowGroup key={arg0[0].key} hasIcons>{arg0.map((row) => {
      const obj = { row };
      return closure_1_6(closure_1_8, obj, row.key);
    })}</TableRowGroup>;
  })}</ActionSheet>;
};
export const CONJURE_CHAT_MORE_SHEET_KEY = "ConjureChatMoreSheet";
