// Module ID: 16076
// Function ID: 16077
// Name: FamilyCenterTopUsersBottomSheet
// Dependencies: [19, 1386, 21, 4794, 9019, 6925, 4850, 1186, 7433, 5385, 1112, 2725, 7228, 2]
// Exports: default

// Module 16076 (FamilyCenterTopUsersBottomSheet)
import intl2 from "intl" /* 1112 */;
import native from "native" /* 1186 */;
import _modDef2725 from "module_2725" /* 2725 */;
import UserUtilsDefault from "UserUtils" /* 4850 */;
import Text_Text from "Text/Text" /* 5385 */;
import TableRow2 from "TableRow" /* 6925 */;
import TableRowGroup2 from "TableRowGroup" /* 7228 */;
import ActionSheet2 from "ActionSheet" /* 7433 */;
import FamilyCenterUtils from "FamilyCenterUtils" /* 9019 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1386 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4794 */;
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
    obj4 = { size: native.AvatarSizes.SMALL, user, guildId: "Array" };
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
  const obj2 = { variant: "body-md/semibold", style: tmp.header, children: intl.string(_modDef2725.BxbvS7) };
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
