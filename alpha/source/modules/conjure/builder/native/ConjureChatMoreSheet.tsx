// Module ID: 12514
// Function ID: 12515
// Name: ConjureChatMoreSheet
// Dependencies: [19, 12053, 21, 5253, 7363, 6977, 6969, 10858, 10898, 12515, 7360, 1114, 3865, 7054, 2]
// Exports: default

// Module 12514 (ConjureChatMoreSheet)
import Fragment from "Fragment" /* 21 */;
import _modDef3865 from "module_3865" /* 3865 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import react from "react" /* 19 */;
import conjureDesignFeedbackStore from "conjureDesignFeedbackStore" /* 12053 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let hasOwnProperty;
function MoreRow(row) {
  row = row.row;
  if ("switch" === row.kind) {
    ({ label: obj3.label, subLabel: obj3.subLabel } = row);
    const TableSwitchRow = row(7363).TableSwitchRow;
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
    const TableRow = row(6969).TableRow;
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
  let obj = id(10858);
  const isConjureProjectMuted = obj.useIsConjureProjectMuted(id);
  const active = closure_5(id).active;
  const obj2 = id(10898);
  const conjureControlActive = obj2.useConjureControlActive(id);
  const obj3 = { muted: isConjureProjectMuted, annotate: tmp };
  const conjureChatMoreSections = id(12515).conjureChatMoreSections;
  id(12515);
  const merged1 = Object.assign(merged);
  if (canAnnotate) {
    tmp = { active, busy: conjureControlActive, onToggle };
    const obj4 = { active, busy: conjureControlActive, onToggle };
  }
  const result = conjureChatMoreSections(obj3);
  const ActionSheet = tmp3(7360).ActionSheet;
  const intl = tmp3(1114).intl;
  return <ActionSheet dismissAccessibilityLabel={intl.string(_modDef3865.OsD9T0)}>{result.map((arr) => {
    const TableRowGroup = id(dependencyMap[13]).TableRowGroup;
    return <TableRowGroup key={arg0[0].key} hasIcons>{arg0.map((row) => {
      const obj = { row };
      return closure_1_6(closure_1_8, obj, row.key);
    })}</TableRowGroup>;
  })}</ActionSheet>;
};
export const CONJURE_CHAT_MORE_SHEET_KEY = "ConjureChatMoreSheet";
