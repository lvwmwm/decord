// Module ID: 13800
// Function ID: 105749
// Name: UserRow
// Dependencies: [31, 1849, 33, 4130, 6828, 5165, 3969, 1273, 5500, 4126, 1212, 2198, 5503, 2]
// Exports: default

// Module 13800 (UserRow)
import "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
const require = arg1;
function UserRow(userActivity) {
  userActivity = userActivity.userActivity;
  user = user.getUser(userActivity.user_id);
  if (null == user) {
    return null;
  } else {
    let obj = require(6828) /* getActivityTypeTextConfigs */;
    const topUserOrGuildDescription = obj.getTopUserOrGuildDescription(userActivity.dms_sent, userActivity.call_count);
    obj = { label: importDefault(3969).getName(user), subLabel: topUserOrGuildDescription };
    obj = { size: require(1273) /* Button */.AvatarSizes.SMALL, user, guildId: undefined };
    obj.icon = callback(require(1273) /* Button */.Avatar, obj);
    return callback(require(5165) /* TableRowInner */.TableRow, obj);
  }
}
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
let closure_6 = _createForOfIteratorHelperLoose.createStyles({ header: { textAlign: "center" } });
const result = require("jsxProd").fileFinishedImporting("modules/parent_tools/native/FamilyCenterTopUsersBottomSheet.tsx");

export default function FamilyCenterTopUsersBottomSheet(topUserActivities) {
  topUserActivities = topUserActivities.topUserActivities;
  let obj = {};
  obj = { variant: "text-md/bold", style: callback3().header };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.children = intl.string(importDefault(2198).BxbvS7);
  const items = [callback(require(4126) /* Text */.Text, obj), ];
  obj = { hasIcons: true, children: topUserActivities.map((userActivity) => outer1_4(outer1_7, { userActivity }, userActivity.user_id)) };
  items[1] = callback(require(5503) /* TableRowGroupTitle */.TableRowGroup, obj);
  obj.children = items;
  return callback2(require(5500) /* ActionSheet */.ActionSheet, obj);
};
