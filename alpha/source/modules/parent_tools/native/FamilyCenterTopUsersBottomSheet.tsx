// Module ID: 16121
// Function ID: 16122
// Name: FamilyCenterTopUsersBottomSheet
// Dependencies: [19, 1388, 21, 4823, 9045, 6956, 4879, 1187, 7464, 5414, 1113, 2723, 7259, 2]
// Exports: default

// Module 16121 (FamilyCenterTopUsersBottomSheet)
import intl2 from "intl" /* 1113 */;
import native from "native" /* 1187 */;
import _modDef2723 from "module_2723" /* 2723 */;
import UserUtilsDefault from "UserUtils" /* 4879 */;
import Text_Text from "Text/Text" /* 5414 */;
import TableRow2 from "TableRow" /* 6956 */;
import TableRowGroup2 from "TableRowGroup" /* 7259 */;
import ActionSheet2 from "ActionSheet" /* 7464 */;
import FamilyCenterUtils from "FamilyCenterUtils" /* 9045 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1388 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4823 */;
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
  const obj2 = { variant: "body-md/semibold", style: tmp.header, children: intl.string(_modDef2723.BxbvS7) };
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
