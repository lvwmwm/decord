// Module ID: 16746
// Function ID: 16747
// Name: FamilyCenterTopUsersBottomSheet
// Dependencies: [19, 1384, 21, 5009, 8364, 6969, 5063, 1188, 7360, 5619, 1114, 2537, 7054, 2]
// Exports: default

// Module 16746 (FamilyCenterTopUsersBottomSheet)
import intl2 from "intl" /* 1114 */;
import native from "native" /* 1188 */;
import _modDef2537 from "module_2537" /* 2537 */;
import UserUtilsDefault from "UserUtils" /* 5063 */;
import Text_Text from "Text/Text" /* 5619 */;
import TableRow2 from "TableRow" /* 6969 */;
import TableRowGroup2 from "TableRowGroup" /* 7054 */;
import ActionSheet2 from "ActionSheet" /* 7360 */;
import FamilyCenterUtils from "FamilyCenterUtils" /* 8364 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1384 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
function UserRow(userActivity) {
  let Avatar;
  let obj3;
  let obj4;
  userActivity = userActivity.userActivity;
  const user = UserStore.getUser(userActivity.user_id);
  if (null == user) {
    return null;
  } else {
    const obj = FamilyCenterUtils;
    const topUserOrGuildDescription = obj.getTopUserOrGuildDescription(userActivity.dms_sent, userActivity.call_count);
    const obj2 = { label: obj3.getName(user), subLabel: topUserOrGuildDescription, icon: React3(Avatar, obj4) };
    const TableRow = TableRow2.TableRow;
    obj3 = UserUtilsDefault;
    obj4 = { size: native.AvatarSizes.SMALL, user, guildId: "r" };
    Avatar = native.Avatar;
    return React3(TableRow, obj2);
  }
}
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let closure_6 = createStyles.createStyles({ header: { textAlign: "center" } });
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterTopUsersBottomSheet.tsx");

export default function FamilyCenterTopUsersBottomSheet(topUserActivities) {
  let intl;
  let items;
  topUserActivities = topUserActivities.topUserActivities;
  let obj = { children: items };
  const tmp = closure_6();
  const ActionSheet = ActionSheet2.ActionSheet;
  const obj2 = { variant: "text-md/bold", style: tmp.header, children: intl.string(_modDef2537.BxbvS7) };
  const Text = Text_Text.Text;
  intl = intl2.intl;
  items = [React3(Text, obj2), ];
  const obj3 = {
    hasIcons: true,
    children: topUserActivities.map((userActivity) => {
      const obj = { userActivity };
      return closure_1_4(UserRow, obj, userActivity.user_id);
    })
  };
  const TableRowGroup = TableRowGroup2.TableRowGroup;
  items[1] = React3(TableRowGroup, obj3);
  return hasOwnProperty(ActionSheet, obj);
};
