// Module ID: 10174
// Function ID: 78608
// Name: InviteRolesDisplay
// Dependencies: []
// Exports: default

// Module 10174 (InviteRolesDisplay)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_4 = importDefault(dependencyMap[2]);
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[3]));
const tmp3 = arg1(dependencyMap[3]);
let closure_7 = arg1(dependencyMap[4]).createStyles({ container: { marginTop: 8 }, label: { marginBottom: 4 }, rolesRow: { -9223372036854775808: null, 7741: null } });
const obj = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/instant_invite/native/InviteRolesDisplay.tsx");

export default function InviteRolesDisplay(roleIds) {
  roleIds = roleIds.roleIds;
  const arg1 = roleIds;
  const guildId = roleIds.guildId;
  const importDefault = guildId;
  const tmp = callback3();
  let obj = arg1(dependencyMap[5]);
  const items = [closure_4];
  const items1 = [roleIds, guildId];
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
    const mapped = roleIds.map((arg0) => role.getRole(closure_1, arg0));
    return mapped.filter((arg0) => null != arg0);
  }, items1);
  let tmp2 = null;
  if (0 !== stateFromStoresArray.length) {
    obj = { style: tmp.container };
    obj = { hasMaxConnections: 15, isBoostOnlySubscription: "center", style: tmp.label };
    const intl = arg1(dependencyMap[7]).intl;
    obj.children = intl.string(arg1(dependencyMap[7]).t.stcSfI);
    const items2 = [callback(arg1(dependencyMap[6]).Text, obj), ];
    const obj1 = { style: tmp.rolesRow, children: stateFromStoresArray.map((id) => callback(guildId(closure_2[8]), { role: id, guildId }, id.id)) };
    items2[1] = callback(View, obj1);
    obj.children = items2;
    tmp2 = callback2(View, obj);
  }
  return tmp2;
};
