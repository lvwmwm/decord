// Module ID: 10213
// Function ID: 78852
// Name: InviteRolesDisplay
// Dependencies: [31, 27, 1910, 33, 4130, 566, 4126, 1212, 10214, 2]
// Exports: default

// Module 10213 (InviteRolesDisplay)
import "result";
import { View } from "get ActivityIndicator";
import closure_4 from "_createForOfIteratorHelperLoose";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
const require = arg1;
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
let closure_7 = _createForOfIteratorHelperLoose.createStyles({ container: { marginTop: 8 }, label: { marginBottom: 4 }, rolesRow: { flexDirection: "row", flexWrap: "wrap" } });
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/instant_invite/native/InviteRolesDisplay.tsx");

export default function InviteRolesDisplay(roleIds) {
  roleIds = roleIds.roleIds;
  const guildId = roleIds.guildId;
  const tmp = callback3();
  let obj = roleIds(566);
  const items = [closure_4];
  const items1 = [roleIds, guildId];
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
    const mapped = roleIds.map((arg0) => outer2_4.getRole(outer1_1, arg0));
    return mapped.filter((arg0) => null != arg0);
  }, items1);
  let tmp2 = null;
  if (0 !== stateFromStoresArray.length) {
    obj = { style: tmp.container };
    obj = { variant: "text-xs/semibold", color: "text-muted", style: tmp.label };
    const intl = roleIds(1212).intl;
    obj.children = intl.string(roleIds(1212).t.stcSfI);
    const items2 = [callback(roleIds(4126).Text, obj), ];
    const obj1 = { style: tmp.rolesRow, children: stateFromStoresArray.map((id) => outer1_5(guildId(outer1_2[8]), { role: id, guildId }, id.id)) };
    items2[1] = callback(View, obj1);
    obj.children = items2;
    tmp2 = callback2(View, obj);
  }
  return tmp2;
};
