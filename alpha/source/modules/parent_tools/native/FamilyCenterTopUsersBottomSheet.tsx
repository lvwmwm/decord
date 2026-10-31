// Module ID: 16788
// Function ID: 16789
// Name: FamilyCenterTopUsersBottomSheet
// Dependencies: [19, 1383, 21, 5014, 8372, 6975, 5068, 1187, 7366, 5624, 1113, 2538, 7060, 2]
// Exports: default

// Module 16788 (FamilyCenterTopUsersBottomSheet)
import intl2 from "intl" /* 1113 */;
import native from "native" /* 1187 */;
import _modDef2538 from "module_2538" /* 2538 */;
import UserUtilsDefault from "UserUtils" /* 5068 */;
import Text_Text from "Text/Text" /* 5624 */;
import TableRow2 from "TableRow" /* 6975 */;
import TableRowGroup2 from "TableRowGroup" /* 7060 */;
import ActionSheet2 from "ActionSheet" /* 7366 */;
import FamilyCenterUtils from "FamilyCenterUtils" /* 8372 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1383 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5014 */;
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
  const obj2 = { variant: "text-md/bold", style: tmp.header, children: intl.string(_modDef2538.BxbvS7) };
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
