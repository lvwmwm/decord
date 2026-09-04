// Module ID: 14822
// Function ID: 14823
// Name: UserRow
// Dependencies: [19, 1921, 21, 4481, 7526, 5560, 4325, 1296, 7138, 4477, 1233, 2368, 5642, 2]
// Exports: default

// Module 14822 (UserRow)
import noopAll from "noop" /* 19 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import Button from "Button" /* 1296 */;
import messagesProxyDefault from "messagesProxy" /* 2368 */;
import nameFromUserDefault from "nameFromUser" /* 4325 */;
import Text from "Text" /* 4477 */;
import TableRowInner from "TableRowInner" /* 5560 */;
import TableRowGroupTitle from "TableRowGroupTitle" /* 5642 */;
import ActionSheet from "ActionSheet" /* 7138 */;
import getEmptyActivityFormatter from "getEmptyActivityFormatter" /* 7526 */;
import closure_3 from "mergeGuildAvatar" /* 1921 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4481 */;

require = arg1;
function UserRow(userActivity) {
  userActivity = userActivity.userActivity;
  user = user.getUser(userActivity.user_id);
  if (null == user) {
    return null;
  } else {
    let obj = getEmptyActivityFormatter;
    const topUserOrGuildDescription = obj.getTopUserOrGuildDescription(userActivity.dms_sent, userActivity.call_count);
    obj = { label: null, subLabel: null, icon: null };
    obj[0] = nameFromUserDefault.getName(user);
    obj[1] = topUserOrGuildDescription;
    obj = { size: null, user: null, guildId: "Array" };
    obj[0] = Button.AvatarSizes.SMALL;
    obj[1] = user;
    obj[2] = callback(Button.Avatar, obj);
    return callback(TableRowInner.TableRow, obj);
  }
}
noopAll;
({ jsx: c4, jsxs: c5 } = jsxProd);
let closure_6 = createCacheKey.createStyles({ header: { textAlign: "center" } });
const result = require("set").fileFinishedImporting("modules/parent_tools/native/FamilyCenterTopUsersBottomSheet.tsx");

export default function FamilyCenterTopUsersBottomSheet(topUserActivities) {
  topUserActivities = topUserActivities.topUserActivities;
  let obj = { children: null };
  obj = { variant: "text-md/bold", style: callback3().header, children: null };
  const intl = getSystemLocale.intl;
  obj[2] = intl.string(messagesProxyDefault.BxbvS7);
  const items = [callback(Text.Text, obj), ];
  obj = { hasIcons: true, children: topUserActivities.map((userActivity) => callback(closure_7, { userActivity }, userActivity.user_id)) };
  items[1] = callback(TableRowGroupTitle.TableRowGroup, obj);
  obj[0] = items;
  return callback2(ActionSheet.ActionSheet, obj);
};
