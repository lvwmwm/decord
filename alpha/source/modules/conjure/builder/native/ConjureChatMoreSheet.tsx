// Module ID: 13302
// Function ID: 13303
// Name: ConjureChatMoreSheet
// Dependencies: [19, 5177, 5238, 1388, 13303, 21, 5552, 7954, 7455, 7443, 7332, 13142, 13206, 504, 1452, 13189, 13305, 7951, 1113, 4131, 7746, 2]
// Exports: default

// Module 13302 (ConjureChatMoreSheet)
import Fragment from "Fragment" /* 21 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5552 */;
import useConjureShareToServer from "useConjureShareToServer" /* 13189 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 5177 */;
import PermissionStore from "PermissionStore" /* 5238 */;
import UserStore from "UserStore" /* 1388 */;
import conjureDesignFeedbackStore from "conjureDesignFeedbackStore" /* 13303 */;
import size from "module_2" /* 2 */;

let metroImportAll;
let metroImportDefault;
let metroRequire;
function MoreRow(row) {
  row = row.row;
  if ("switch" === row.kind) {
    ({ label: obj3.label, subLabel: obj3.subLabel } = row);
    const TableSwitchRow = row(7954).TableSwitchRow;
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
    const TableRow = row(7443).TableRow;
    return <TableRow label={row.label} variant={str} icon={null} onPress={function onPress() {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet(ConjureChatMoreSheet_str);
      row.onPress();
    }} />;
  }
}
({ enterConjureDesignFeedback: metroRequire, exitConjureDesignFeedback: metroImportDefault, useConjureDesignFeedback: metroImportAll } = conjureDesignFeedbackStore);
const jsx = Fragment.jsx;
const ConjureChatMoreSheet_str = "ConjureChatMoreSheet";
let result = size.fileFinishedImporting("modules/conjure/builder/native/ConjureChatMoreSheet.tsx");

export default function ConjureChatMoreSheet(canAnnotate) {
  function onToggle(arg0) {
    let tmp4;
    const tmp = arg0;
    if (tmp) {
      tmp4 = metroRequire(id);
    } else {
      tmp4 = metroImportDefault(id);
    }
    return tmp4;
  }
  let tmp = null;
  canAnnotate = canAnnotate.canAnnotate;
  const merged = Object.assign(canAnnotate, Object.assign({ canAnnotate: 0 }));
  let removeTarget;
  const id = merged.project.id;
  let tmp4 = removeTarget;
  let obj = id(removeTarget[10]);
  const isConjureProjectMuted = obj.useIsConjureProjectMuted(id);
  const active = closure_8(id).active;
  const project = merged.project;
  const obj2 = id(removeTarget[11]);
  removeTarget = merged.removeTarget;
  const conjureControlActive = obj2.useConjureControlActive(id);
  const obj3 = id(removeTarget[12]);
  const conjureViewedRemoveTarget = obj3.useConjureViewedRemoveTarget(id, merged.guildId);
  const items = [UserStore, GuildStore, PermissionStore, ];
  const useStateFromStores = id(removeTarget[13]).useStateFromStores;
  id(removeTarget[13]);
  items[3] = id(removeTarget[14]).ApexExperimentStore;
  const items1 = [project, removeTarget];
  const stateFromStores = useStateFromStores(items, () => {
    const obj = useConjureShareToServer;
    return obj.canAddConjureProjectToAnotherServer(project, removeTarget, "ConjureChatMoreSheet");
  }, items1);
  const obj4 = { muted: isConjureProjectMuted, serverRemoveTarget: conjureViewedRemoveTarget, canAddToAnotherServer: stateFromStores, annotate: tmp };
  const conjureChatMoreSections = id(removeTarget[16]).conjureChatMoreSections;
  id(removeTarget[16]);
  const merged1 = Object.assign(merged);
  if (canAnnotate) {
    tmp = { active, busy: conjureControlActive, onToggle };
    const obj5 = { active, busy: conjureControlActive, onToggle };
  }
  const result = conjureChatMoreSections(obj4);
  const ActionSheet = tmp3(tmp4[17]).ActionSheet;
  const intl = tmp3(tmp4[18]).intl;
  return <ActionSheet dismissAccessibilityLabel={intl.string(project(tmp4[19]).OsD9T0)}>{result.map((arr) => {
    const TableRowGroup = id(removeTarget[20]).TableRowGroup;
    return <TableRowGroup key={arg0[0].key} hasIcons>{arg0.map((row) => {
      const obj = { row };
      return closure_1_9(closure_1_11, obj, row.key);
    })}</TableRowGroup>;
  })}</ActionSheet>;
};
export const CONJURE_CHAT_MORE_SHEET_KEY = "ConjureChatMoreSheet";
