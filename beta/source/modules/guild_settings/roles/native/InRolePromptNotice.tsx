// Module ID: 17432
// Function ID: 17433
// Name: InRolePromptNotice
// Dependencies: [19, 17, 1074, 21, 4836, 576, 1385, 17433, 1177, 8905, 4832, 1115, 2]
// Exports: default

// Module 17432 (InRolePromptNotice)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import intl3 from "intl" /* 1115 */;
import FlagUtils from "FlagUtils" /* 1385 */;
import AssetRegistryDefault from "AssetRegistry" /* 8905 */;
import GuildSettingsUtils from "GuildSettingsUtils" /* 17433 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
const View = react_native.View;
const RoleFlags = Constants.RoleFlags;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { promptRow: obj2, promptText: obj3, icon: { height: 16, width: 16 } };
obj2 = { paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_4, flexDirection: "row", alignItems: "center" };
createStyles = createStyles.createStyles;
obj3 = { marginLeft: nativeDefault.space.PX_4 };
let closure_7 = createStyles(obj);
const result = size.fileFinishedImporting("modules/guild_settings/roles/native/InRolePromptNotice.tsx");

export default function InRolePromptNotice(role) {
  let intl;
  let intl2;
  role = role.role;
  const tmp = closure_7();
  let tmp4 = null;
  const obj = FlagUtils;
  if (obj.hasFlag(role.flags, RoleFlags.IN_PROMPT)) {
    let tmp6Result;
    const obj2 = { style: tmp.promptRow, children: null };
    const tmp2Result = GuildSettingsUtils;
    const isRolePowerfulResult = tmp2Result.isRolePowerful(role);
    const Icon = tmp2(1177).Icon;
    if (isRolePowerfulResult) {
      const obj3 = { style: tmp.icon, source: AssetRegistryDefault, color: nativeDefault.unsafe_rawColors.YELLOW_300 };
      const items = [hasOwnProperty(Icon, obj3), ];
      const obj4 = { style: tmp.promptText, variant: "text-sm/medium", children: intl2.string(intl3.t.YRbgXz) };
      const Text2 = tmp2(4832).Text;
      intl2 = tmp2(1115).intl;
      items[1] = hasOwnProperty(Text2, obj4);
      obj2.children = items;
      tmp6Result = tmp6(tmp7, obj2);
    } else {
      const obj5 = { style: tmp.icon, source: AssetRegistryDefault };
      const items1 = [hasOwnProperty(Icon, obj5), ];
      const obj6 = { style: tmp.promptText, variant: "text-sm/medium", children: intl.string(intl3.t.mqeO2v) };
      const Text = tmp2(4832).Text;
      intl = tmp2(1115).intl;
      items1[1] = hasOwnProperty(Text, obj6);
      obj2.children = items1;
      tmp6Result = tmp6(tmp7, obj2);
    }
    tmp4 = tmp6Result;
  }
  return tmp4;
};
