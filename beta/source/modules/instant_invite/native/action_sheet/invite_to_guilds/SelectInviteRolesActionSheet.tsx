// Module ID: 17627
// Function ID: 17628
// Name: SelectInviteRolesActionSheet
// Dependencies: [32, 19, 21, 4836, 10327, 6470, 4800, 12, 8053, 11316, 5435, 4832, 1115, 6570, 6618, 6476, 2]
// Exports: default

// Module 17627 (SelectInviteRolesActionSheet)
import _mod12 from "module_12" /* 12 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let set;

let hasOwnProperty;
let metroImportDefault;
let metroRequire;
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: metroImportDefault } = Fragment);
let closure_8 = createStyles.createStyles({ list: { flex: 1 } });
const result = size.fileFinishedImporting("modules/instant_invite/native/action_sheet/invite_to_guilds/SelectInviteRolesActionSheet.tsx");

export default function SelectInviteRolesActionSheet(assignableRoles) {
  let Text;
  let intl;
  let intl2;
  let items3;
  let obj2;
  let obj5;
  let tmp10;
  assignableRoles = assignableRoles.assignableRoles;
  const selectedRoleIds = assignableRoles.selectedRoleIds;
  const onSave = assignableRoles.onSave;
  let first;
  let items = [assignableRoles, selectedRoleIds];
  let tmp = closure_8();
  const memo = first.useMemo(() => {
    set = new Set(assignableRoles.map((id) => id.id));
    return selectedRoleIds.filter((item) => set.has(item));
  }, items);
  const tmp3 = memo(first.useState(() => {
    set = new Set(memo);
    return set;
  }), 2);
  first = tmp3[0];
  let closure_5 = tmp3[1];
  const tmp5 = selectedRoleIds(onSave[4])();
  const tmp6 = selectedRoleIds(onSave[5])();
  const callback = first.useCallback((arg0) => {
    let closure_0 = arg0;
    let tmp = closure_5((items) => {
      set = new Set(items);
      const tmp = closure_0;
      if (!set.delete(closure_0)) {
        set.add(tmp);
      }
      return set;
    });
  }, []);
  const items1 = [onSave, first, memo];
  const items2 = [assignableRoles, first, callback];
  const callback1 = first.useCallback(() => {
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet();
    const arr = Array.from(first);
    const sorted = arr.sort();
    const items = [...memo];
    const obj3 = _mod12;
    const tmp4 = !obj3.isEqual(sorted, items.sort());
    if (tmp4) {
      onSave(sorted);
    }
  }, items1);
  const callback2 = first.useCallback((arg0, arg1) => {
    let Checkbox;
    let id;
    let obj2;
    let obj3;
    assignableRoles = tmp;
    const obj = {
      label: closure_5(selectedRoleIds(onSave[9]), obj2),
      onPress() {
        return callback(id.id);
      },
      trailing: closure_5(Checkbox, obj3)
    };
    const FormRow = assignableRoles(onSave[8]).FormRow;
    obj2 = { role: assignableRoles[arg1], children: assignableRoles[arg1].name };
    obj3 = { selected: first.has(assignableRoles[arg1].id) };
    Checkbox = assignableRoles(onSave[8]).FormRow.Checkbox;
    const children = [closure_5(FormRow, obj), !tmp2 && closure_5(assignableRoles(onSave[8]).FormDivider, {})];
    arg1 !== assignableRoles.length - 1 && closure_5(assignableRoles(onSave[8]).FormDivider, {});
    return closure_1_7(callback, { children });
  }, items2);
  let obj = { onPress: callback1, accessibilityRole: "button", children: closure_5(Text, obj2) };
  const PressableOpacity = assignableRoles(onSave[10]).PressableOpacity;
  obj2 = { variant: "text-md/semibold", children: intl.string(assignableRoles(onSave[12]).t.i4jeWR) };
  Text = assignableRoles(onSave[11]).Text;
  intl = assignableRoles(onSave[12]).intl;
  let obj3 = { title: intl2.string(assignableRoles(onSave[12]).t["LPJmL/"]), trailing: tmp10 };
  tmp10 = closure_5(PressableOpacity, obj);
  const BottomSheetTitleHeader = assignableRoles(onSave[13]).BottomSheetTitleHeader;
  intl2 = assignableRoles(onSave[12]).intl;
  const obj4 = { scrollable: true, header: closure_5(BottomSheetTitleHeader, obj3), startExpanded: true, children: closure_5(selectedRoleIds(onSave[15]), obj5) };
  const ActionSheet = assignableRoles(onSave[14]).ActionSheet;
  obj5 = { inActionSheet: true, style: tmp.list, itemSize: tmp6, sections: items3, renderItem: callback2, placeholderConfig: tmp5, estimatedListSize: "windowSize", listId: "select-invite-roles", wrapChildren: true };
  items3 = [assignableRoles.length];
  return closure_5(ActionSheet, obj4);
};
