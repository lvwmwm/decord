// Module ID: 18170
// Function ID: 18171
// Name: InRolePromptNotice
// Dependencies: [19, 17, 1074, 21, 4829, 576, 1385, 18171, 1177, 9796, 4825, 1115, 2]
// Exports: default

// Module 18170 (InRolePromptNotice)
import nativeDefault from "native" /* 576 */;
import _modDef9796 from "module_9796" /* 9796 */;
import noop from "module_19" /* 19 */;

const require = fn;
const View = fn(17).View;
const RoleFlags = fn(1074).RoleFlags;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4829);
let obj2 = { promptRow: { paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_4, flexDirection: "row", alignItems: "center" }, promptText: null, icon: null };
let obj3 = { paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_4, flexDirection: "row", alignItems: "center" };
obj2.promptText = { marginLeft: nativeDefault.space.PX_4 };
obj2.icon = { height: 16, width: 16 };
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/roles/native/InRolePromptNotice.tsx");

export default function InRolePromptNotice(role) {
  role = role.role;
  let string = closure_7();
  let stringResult = dependencyMap;
  if (!obj.hasFlag(role.flags, RoleFlags.IN_PROMPT)) {
    return null;
  } else {
    const obj2 = { style: string.promptRow, children: null };
    const tmpResult = tmp(18171);
    let Icon = tmp(1177).Icon;
    if (isRolePowerfulResult) {
      const obj3 = { style: string.icon, source: _modDef9796, color: nativeDefault.unsafe_rawColors.YELLOW_300 };
      const items = [tmp6(Icon, obj3), ];
      const obj4 = { style: string.promptText, variant: "text-sm/medium", children: null };
      const intl2 = tmp(1115).intl;
      string = intl2.string;
      stringResult = string(tmp(1115).t.YRbgXz);
      obj4.children = stringResult;
      Icon = tmp6(tmp(4825).Text, obj4);
      items[1] = Icon;
      obj2.children = items;
      let tmp4Result = tmp4(tmp5, obj2);
    } else {
      const obj5 = { style: string.icon, source: _modDef9796 };
      const items1 = [tmp6(Icon, obj5), ];
      const obj6 = { style: string.promptText, variant: "text-sm/medium", children: null };
      const intl = tmp(1115).intl;
      obj6.children = intl.string(tmp(1115).t.mqeO2v);
      items1[1] = tmp6(tmp(4825).Text, obj6);
      obj2.children = items1;
      tmp4Result = tmp4(tmp5, obj2);
    }
    isRolePowerfulResult = tmp(18171).isRolePowerful(role);
  }
};
