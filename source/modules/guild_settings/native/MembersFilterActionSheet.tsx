// Module ID: 15184
// Function ID: 114507
// Name: MembersFilterActionSheet
// Dependencies: []
// Exports: default

// Module 15184 (MembersFilterActionSheet)
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
({ jsx: closure_8, jsxs: closure_9 } = arg1(dependencyMap[5]));
let obj = arg1(dependencyMap[6]);
obj = {};
obj = { borderRadius: importDefault(dependencyMap[7]).radii.lg };
obj.listView = obj;
obj.roleDot = { marginEnd: 4 };
obj.labelContainer = { flexDirection: "row" };
const tmp2 = arg1(dependencyMap[5]);
obj.label = { color: importDefault(dependencyMap[7]).colors.INTERACTIVE_TEXT_DEFAULT };
let closure_10 = obj.createStyles(obj);
const obj1 = { color: importDefault(dependencyMap[7]).colors.INTERACTIVE_TEXT_DEFAULT };
const result = arg1(dependencyMap[18]).fileFinishedImporting("modules/guild_settings/native/MembersFilterActionSheet.tsx");

export default function MembersFilterActionSheet(onFilterRoleId) {
  let selectedRoleId;
  ({ guild: closure_0, selectedRoleId } = onFilterRoleId);
  if (selectedRoleId === undefined) {
    selectedRoleId = props.getProps().selectedRoleId;
  }
  const importDefault = selectedRoleId;
  onFilterRoleId = onFilterRoleId.onFilterRoleId;
  const dependencyMap = onFilterRoleId;
  let React;
  let View;
  let closure_5;
  const tmp2 = callback2();
  React = tmp2;
  let obj = arg1(dependencyMap[8]);
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => sortedRoles.getSortedRoles(id.id));
  const mapped = stateFromStores.map((id) => {
    const merged = Object.assign(id);
    return { value: id.id };
  });
  mapped.unshift(mapped.splice(mapped.length - 1, 1)[0]);
  const items1 = [onFilterRoleId, selectedRoleId];
  const callback = React.useCallback((roleId) => {
    let obj = roleId;
    if (roleId !== selectedRoleId) {
      if (null != onFilterRoleId) {
        onFilterRoleId(obj);
      } else {
        const role = selectedRoleId(onFilterRoleId[9]).selectRole(obj);
        const obj2 = selectedRoleId(onFilterRoleId[9]);
      }
      obj = selectedRoleId(onFilterRoleId[10]);
      obj.hideActionSheet("MembersFilter");
    }
  }, items1);
  View = callback;
  let obj1 = arg1(dependencyMap[8]);
  const items2 = [closure_5];
  const stateFromStores1 = obj1.useStateFromStores(items2, () => stateFromStores1.roleStyle);
  closure_5 = stateFromStores1;
  const items3 = [callback, stateFromStores1, selectedRoleId, tmp2];
  const callback1 = React.useCallback((item) => {
    item = item.item;
    let obj = { value: item.id };
    obj = { style: tmp2.labelContainer };
    let tmp4 = "dot" === stateFromStores1;
    if (tmp4) {
      tmp4 = null != item.colorString;
    }
    if (tmp4) {
      obj = { containerStyles: tmp2.roleDot };
      ({ colorString: obj3.color, colorStrings: obj3.colors } = item);
      tmp4 = callback(item(onFilterRoleId[12]).RoleDot, obj);
    }
    const items = [tmp4, ];
    const obj1 = { variant: "text-md/medium" };
    const items1 = [closure_9.label, ];
    let tmp11 = null;
    if (null != item.colorString) {
      tmp11 = null;
      if ("username" === stateFromStores1) {
        const obj2 = { color: item.colorString };
        tmp11 = obj2;
      }
    }
    items1[1] = tmp11;
    obj1.style = items1;
    obj1.children = item.name;
    items[1] = callback(item(onFilterRoleId[13]).Text, obj1);
    obj.children = items;
    obj.label = closure_9(callback, obj);
    obj.legacyCompat_onPress = function legacyCompat_onPress() {
      return callback(item.id);
    };
    obj.legacyCompat_selected = item.id === selectedRoleId;
    return callback(item(onFilterRoleId[11]).TableRadioRow, obj);
  }, items3);
  obj = { scrollable: true };
  obj = {};
  const intl = arg1(dependencyMap[16]).intl;
  obj.title = intl.string(arg1(dependencyMap[16]).t.pEasFX);
  obj.header = callback(arg1(dependencyMap[15]).BottomSheetTitleHeader, obj);
  obj1 = {
    data: mapped,
    keyExtractor(id) {
      return id.id;
    },
    renderItem: callback1,
    contentContainerStyle: tmp2.listView,
    initialNumToRender: 10,
    removeClippedSubviews: false
  };
  obj.children = callback(arg1(dependencyMap[17]).BottomSheetFlatList, obj1);
  return callback(arg1(dependencyMap[14]).ActionSheet, obj);
};
