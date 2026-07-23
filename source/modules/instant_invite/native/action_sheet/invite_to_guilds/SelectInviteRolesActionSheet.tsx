// Module ID: 16493
// Function ID: 128535
// Name: SelectInviteRolesActionSheet
// Dependencies: [57, 31, 27, 4122, 33, 4130, 566, 8827, 8832, 4098, 22, 7495, 1273, 4126, 4660, 1212, 5186, 5500, 9244, 2]
// Exports: default

// Module 16493 (SelectInviteRolesActionSheet)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_7;
let closure_8;
let closure_9;
const require = arg1;
({ jsx: closure_7, jsxs: closure_8, Fragment: closure_9 } = jsxProd);
let closure_10 = _createForOfIteratorHelperLoose.createStyles({ list: { flex: 1 }, label: { flexDirection: "row", alignItems: "center" }, roleDot: { marginEnd: 8 } });
const result = require("get ActivityIndicator").fileFinishedImporting("modules/instant_invite/native/action_sheet/invite_to_guilds/SelectInviteRolesActionSheet.tsx");

export default function SelectInviteRolesActionSheet(assignableRoles) {
  assignableRoles = assignableRoles.assignableRoles;
  const selectedRoleIds = assignableRoles.selectedRoleIds;
  const onSave = assignableRoles.onSave;
  const tmp = callback2();
  let callback = tmp;
  let items = [assignableRoles, selectedRoleIds];
  memo = memo.useMemo(() => {
    set = new Set(set.map((id) => id.id));
    return selectedRoleIds.filter((arg0) => set.has(arg0));
  }, items);
  const tmp3 = callback(memo.useState(() => new Set(memo)), 2);
  const first = tmp3[0];
  let _isNativeReflectConstruct = tmp3[1];
  let obj = assignableRoles(onSave[6]);
  let items1 = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items1, () => lib.roleStyle);
  const tmp6 = selectedRoleIds(onSave[7])();
  callback = memo.useCallback((arg0) => {
    let closure_0 = arg0;
    lib((items) => {
      const set = new Set(items);
      if (!set.delete(closure_0)) {
        set.add(closure_0);
      }
      return set;
    });
  }, []);
  const items2 = [onSave, first, memo];
  const items3 = [assignableRoles, stateFromStores, first, tmp, callback];
  const callback1 = memo.useCallback(() => {
    selectedRoleIds(onSave[9]).hideActionSheet();
    const obj = selectedRoleIds(onSave[9]);
    const sorted = Array.from(first).sort();
    const arr = Array.from(first);
    const items = [...memo];
    if (!obj3.isEqual(sorted, items.sort())) {
      onSave(sorted);
    }
  }, items2);
  callback2 = memo.useCallback((arg0, arg1) => {
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
      return outer1_8(tmp.id);
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
    return callback(outer1_9, obj);
  }, items3);
  obj = { onPress: callback1, accessibilityRole: "button" };
  obj = { variant: "text-md/semibold" };
  const intl = assignableRoles(onSave[15]).intl;
  obj.children = intl.string(assignableRoles(onSave[15]).t.i4jeWR);
  obj.children = stateFromStores(assignableRoles(onSave[13]).Text, obj);
  let tmp7 = selectedRoleIds(onSave[8])();
  let obj1 = {};
  const intl2 = assignableRoles(onSave[15]).intl;
  obj1.title = intl2.string(assignableRoles(onSave[15]).t["LPJmL/"]);
  obj1.trailing = stateFromStores(assignableRoles(onSave[14]).PressableOpacity, obj);
  const tmp11 = stateFromStores(assignableRoles(onSave[14]).PressableOpacity, obj);
  let obj2 = { scrollable: true, header: stateFromStores(assignableRoles(onSave[16]).BottomSheetTitleHeader, obj1), startExpanded: true };
  const items4 = [assignableRoles.length];
  obj2.children = stateFromStores(selectedRoleIds(onSave[18]), { inActionSheet: true, style: tmp.list, itemSize: tmp7, sections: items4, renderItem: callback2, placeholderConfig: tmp6, estimatedListSize: "windowSize", listId: "select-invite-roles", wrapChildren: true });
  return stateFromStores(assignableRoles(onSave[17]).ActionSheet, obj2);
};
