// Module ID: 9006
// Function ID: 70867
// Name: styles
// Dependencies: []
// Exports: default

// Module 9006 (styles)
let closure_4 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const Permissions = arg1(dependencyMap[2]).Permissions;
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = { selectorGroup: { st: "MESSAGE_REQUEST", backgroundColor: "POLL_CREATION_DURATION_ACTION_SHEET_KEY", borderWidth: "AGE_VERIFICATION_GET_STARTED_MODAL_KEY" } };
obj = { backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_BASE_LOWER, borderRadius: importDefault(dependencyMap[5]).radii.xs };
obj.select = obj;
const tmp2 = arg1(dependencyMap[3]);
obj.label = { color: importDefault(dependencyMap[5]).colors.TEXT_SUBTLE, fontWeight: "500" };
const obj1 = { color: importDefault(dependencyMap[5]).colors.TEXT_SUBTLE, fontWeight: "500" };
obj.error = { color: importDefault(dependencyMap[5]).unsafe_rawColors.RED_400 };
const styles = obj.createStyles(obj);
const obj2 = { color: importDefault(dependencyMap[5]).unsafe_rawColors.RED_400 };
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/oauth2/native/GuildSelector.tsx");

export default function GuildSelector(onGuildChange) {
  let error;
  let selectedGuildId;
  ({ error, selectedGuildId } = onGuildChange);
  const arg1 = selectedGuildId;
  onGuildChange = onGuildChange.onGuildChange;
  const importDefault = onGuildChange;
  const guilds = onGuildChange.guilds;
  const importAll = guilds;
  const tmp = styles();
  const items = [guilds, onGuildChange, selectedGuildId];
  const callback = React.useCallback(() => {
    let obj = onGuildChange(paths[6]);
    obj = {};
    const intl = selectedGuildId(paths[9]).intl;
    obj.title = intl.string(selectedGuildId(paths[9]).t.oM4E1A);
    const found = guilds.filter((permissions) => callback2(closure_3[10]).has(permissions.permissions, constants.MANAGE_GUILD));
    obj.items = found.map((label) => ({ label: label.name, value: label.id }));
    obj.onItemSelect = function onItemSelect(arg0) {
      callback(arg0);
      callback(closure_3[6]).hideActionSheet("GuildSelector");
    };
    let tmp2;
    if (null != selectedGuildId) {
      tmp2 = selectedGuildId;
    }
    obj.selectedItem = tmp2;
    obj.hasIcons = false;
    obj.openLazy(selectedGuildId(paths[8])(paths[7], paths.paths), "GuildSelector", obj);
  }, items);
  const found = guilds.find((id) => id.id === selectedGuildId);
  let obj = { style: tmp.selectorGroup };
  obj = { INTEGRATION_CREATE: "/assets/images/native/premium/illustrations", ConstraintReasonCode: 51 };
  const intl = arg1(dependencyMap[9]).intl;
  obj.children = intl.string(arg1(dependencyMap[9]).t.1DXFFd);
  const items1 = [callback(arg1(dependencyMap[11]).Text, obj), , , ];
  let tmp6 = null;
  if (null != error) {
    tmp6 = null;
    if ("" !== error) {
      obj = { style: tmp.error, children: error };
      tmp6 = callback(arg1(dependencyMap[12]).LegacyText, obj);
    }
  }
  items1[1] = tmp6;
  const obj1 = {};
  let name;
  if (null != found) {
    name = found.name;
  }
  if (null == name) {
    const intl2 = arg1(dependencyMap[9]).intl;
    name = intl2.string(arg1(dependencyMap[9]).t.oM4E1A);
  }
  obj1.label = name;
  obj1.disabled = onGuildChange.disabled;
  obj1.trailing = callback(arg1(dependencyMap[13]).FormRow.Arrow, {});
  obj1.DEPRECATED_style = tmp.select;
  obj1.onPress = callback;
  items1[2] = callback(arg1(dependencyMap[13]).FormRow, obj1);
  const obj2 = { style: tmp.label };
  const intl3 = arg1(dependencyMap[9]).intl;
  obj2.children = intl3.format(arg1(dependencyMap[9]).t.t9Jm9o, {});
  items1[3] = callback(arg1(dependencyMap[12]).LegacyText, obj2);
  obj.children = items1;
  return closure_8(View, obj);
};
export const useStyles = styles;
