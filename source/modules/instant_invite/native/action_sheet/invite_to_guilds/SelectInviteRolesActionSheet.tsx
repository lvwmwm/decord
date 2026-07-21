// Module ID: 16368
// Function ID: 126319
// Name: SelectInviteRolesActionSheet
// Dependencies: []
// Exports: default

// Module 16368 (SelectInviteRolesActionSheet)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
let closure_6 = importDefault(dependencyMap[3]);
({ jsx: closure_7, jsxs: closure_8, Fragment: closure_9 } = arg1(dependencyMap[4]));
const tmp2 = arg1(dependencyMap[4]);
let closure_10 = arg1(dependencyMap[5]).createStyles({ list: { flex: 1 }, label: { "Null": 7, "Null": 370 }, roleDot: { marginEnd: 8 } });
const obj = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[19]).fileFinishedImporting("modules/instant_invite/native/action_sheet/invite_to_guilds/SelectInviteRolesActionSheet.tsx");

export default function SelectInviteRolesActionSheet(assignableRoles) {
  assignableRoles = assignableRoles.assignableRoles;
  const arg1 = assignableRoles;
  const selectedRoleIds = assignableRoles.selectedRoleIds;
  const importDefault = selectedRoleIds;
  const onSave = assignableRoles.onSave;
  const dependencyMap = onSave;
  const tmp = callback2();
  let callback = tmp;
  const items = [assignableRoles, selectedRoleIds];
  const memo = React.useMemo(() => {
    const assignableRoles = new Set(assignableRoles.map((id) => id.id));
    return selectedRoleIds.filter((arg0) => set.has(arg0));
  }, items);
  const React = memo;
  const tmp3 = callback(React.useState(() => new Set(memo)), 2);
  const first = tmp3[0];
  const View = first;
  let closure_6 = tmp3[1];
  let obj = arg1(dependencyMap[6]);
  const items1 = [closure_6];
  const stateFromStores = obj.useStateFromStores(items1, () => lib.roleStyle);
  const tmp6 = importDefault(dependencyMap[7])();
  callback = React.useCallback((arg0) => {
    const assignableRoles = arg0;
    lib((items) => {
      const set = new Set(items);
      if (!set.delete(items)) {
        set.add(items);
      }
      return set;
    });
  }, []);
  const items2 = [onSave, first, memo];
  const items3 = [assignableRoles, stateFromStores, first, tmp, callback];
  const callback1 = React.useCallback(() => {
    selectedRoleIds(onSave[9]).hideActionSheet();
    const obj = selectedRoleIds(onSave[9]);
    const sorted = Array.from(first).sort();
    const arr = Array.from(first);
    const items = [...closure_4];
    if (!obj3.isEqual(sorted, items.sort())) {
      onSave(sorted);
    }
  }, items2);
  const callback2 = React.useCallback((arg0, arg1) => {
    const assignableRoles = tmp;
    let obj = {};
    obj = {};
    obj = { style: tmp.label };
    let tmp7 = "dot" === stateFromStores;
    if (tmp7) {
      tmp7 = null != tmp.colorString;
    }
    if (tmp7) {
      const obj1 = { containerStyles: tmp.roleDot };
      ({ colorString: obj4.color, colorStrings: obj4.colors } = tmp);
      obj1.background = false;
      tmp7 = stateFromStores(assignableRoles(onSave[12]).RoleDot, obj1);
    }
    const items = [tmp7, ];
    const obj2 = { variant: "text-md/medium" };
    let tmp14;
    if (null != assignableRoles[arg1].colorString) {
      if ("username" === stateFromStores) {
        const obj3 = { color: tmp.colorString };
        tmp14 = obj3;
      }
    }
    obj2.style = tmp14;
    obj2.children = assignableRoles[arg1].name;
    items[1] = stateFromStores(assignableRoles(onSave[13]).Text, obj2);
    obj.children = items;
    obj.label = callback(first, obj);
    obj.onPress = function onPress() {
      return callback(tmp.id);
    };
    const obj4 = { selected: first.has(assignableRoles[arg1].id) };
    obj.trailing = stateFromStores(assignableRoles(onSave[11]).FormRow.Checkbox, obj4);
    const items1 = [stateFromStores(assignableRoles(onSave[11]).FormRow, obj), ];
    let tmp16 = !tmp2;
    if (arg1 !== assignableRoles.length - 1) {
      tmp16 = stateFromStores(assignableRoles(onSave[11]).FormDivider, {});
    }
    items1[1] = tmp16;
    obj.children = items1;
    return callback(closure_9, obj);
  }, items3);
  obj = { onPress: callback1, accessibilityRole: "button" };
  obj = { variant: "text-md/semibold" };
  const intl = arg1(dependencyMap[15]).intl;
  obj.children = intl.string(arg1(dependencyMap[15]).t.i4jeWR);
  obj.children = stateFromStores(arg1(dependencyMap[13]).Text, obj);
  const tmp7 = importDefault(dependencyMap[8])();
  const obj1 = {};
  const intl2 = arg1(dependencyMap[15]).intl;
  obj1.title = intl2.string(arg1(dependencyMap[15]).t.LPJmL/);
  obj1.trailing = stateFromStores(arg1(dependencyMap[14]).PressableOpacity, obj);
  const tmp11 = stateFromStores(arg1(dependencyMap[14]).PressableOpacity, obj);
  const obj2 = { header: stateFromStores(arg1(dependencyMap[16]).BottomSheetTitleHeader, obj1) };
  const items4 = [assignableRoles.length];
  obj2.children = stateFromStores(importDefault(dependencyMap[18]), { inActionSheet: true, style: tmp.list, itemSize: tmp7, sections: items4, renderItem: callback2, placeholderConfig: tmp6, estimatedListSize: "windowSize", listId: "select-invite-roles", wrapChildren: true });
  return stateFromStores(arg1(dependencyMap[17]).ActionSheet, obj2);
};
