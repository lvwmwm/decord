// Module ID: 20087
// Function ID: 20088
// Name: GuildSettingsModalIntegrationPermissionList
// Dependencies: [19, 21, 5043, 18809, 7186, 7247, 575, 6115, 5634, 18800, 6140, 2]
// Exports: default

// Module 20087 (GuildSettingsModalIntegrationPermissionList)
import nativeDefault from "native" /* 575 */;
import Text_Text from "Text/Text" /* 5634 */;
import Stack_Stack from "Stack/Stack" /* 6115 */;
import TableRowGroup from "TableRowGroup" /* 6140 */;
import getGuildPermissionNameDefault from "getGuildPermissionName" /* 18800 */;
import PermissionSpecUtilsDefault from "PermissionSpecUtils" /* 18809 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5043 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let importDefault;

let closure_4;
let hasOwnProperty;
class PermissionItems {
  constructor(guild) {
    let granted;
    let permissionName;
    let permissions;
    let tmp3;
    let tmp4;
    let tmp6;
    guild = guild.guild;
    ({ permissions, granted } = guild);
    let XSmallIcon;
    let ICON_FEEDBACK_CRITICAL;
    importDefault = closure_6();
    let items = [guild];
    let closure_2 = XSmallIcon.useMemo(() => {
      const obj = PermissionSpecUtilsDefault;
      return obj.getGuildPermissionSpecMap(guild);
    }, items);
    if (granted) {
      XSmallIcon = tmp(tmp2[4]).CheckmarkLargeIcon;
      tmp3 = tmp2;
      tmp4 = tmp;
    } else {
      XSmallIcon = tmp(tmp2[5]).XSmallIcon;
      tmp3 = tmp2;
      tmp4 = tmp;
    }
    const colors = require("native").colors;
    if (granted) {
      ICON_FEEDBACK_CRITICAL = colors.ICON_FEEDBACK_POSITIVE;
      tmp6 = tmp5;
    } else {
      ICON_FEEDBACK_CRITICAL = colors.ICON_FEEDBACK_CRITICAL;
      tmp6 = tmp5;
    }
    let obj = {
      spacing: tmp6(tmp3[6]).space.PX_12,
      children: permissions.map((item) => {
        let items;
        const obj = { direction: "horizontal", align: "center", spacing: nativeDefault.space.PX_8, children: items };
        const Stack = Stack_Stack.Stack;
        items = [, ];
        const obj2 = { size: "xs", color: ICON_FEEDBACK_CRITICAL };
        items[0] = React3(XSmallIcon, obj2);
        const obj3 = { variant: "body-md/normal", style: permissionName.permissionName, children: getGuildPermissionNameDefault(item, closure_2) };
        const Text = Text_Text.Text;
        items[1] = React3(Text, obj3);
        return hasOwnProperty(Stack, obj, item.toString());
      })
    };
    let Stack = tmp4(tmp3[7]).Stack;
    return ICON_FEEDBACK_CRITICAL(Stack, obj);
  }
}
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
const metroRequire = createStyles.createStyles({ permissionName: { flexShrink: 1 } });
const result = size.fileFinishedImporting("modules/guild_settings/integrations/native/GuildSettingsModalIntegrationPermissionList.tsx");

export default function GuildSettingsModalIntegrationPermissionList(permissions) {
  let items;
  permissions = permissions.permissions;
  let tmp4 = null;
  if (0 !== permissions.length) {
    const obj = { spacing: nativeDefault.space.PX_8, children: items };
    const Stack = Stack_Stack.Stack;
    const obj2 = { title: tmp };
    items = [React3(TableRowGroup.TableRowGroupTitle, obj2), ];
    const obj3 = { guild: tmp2, permissions, granted: tmp3 };
    items[1] = React3(PermissionItems, obj3);
    tmp4 = hasOwnProperty(Stack, obj);
  }
  return tmp4;
};
export { PermissionItems };
