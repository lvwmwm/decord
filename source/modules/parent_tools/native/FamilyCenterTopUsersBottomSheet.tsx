// Module ID: 14058
// Function ID: 14059
// Name: UserRow
// Dependencies: [19, 1903, 21, 4285, 6973, 5354, 4123, 1297, 5685, 4281, 1236, 2284, 5688, 2]
// Exports: default

// Module 14058 (UserRow)
import "noop";
import mergeGuildAvatar from "mergeGuildAvatar";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c4;
let c5;
const require = arg1;
function UserRow(userActivity) {
  userActivity = userActivity.userActivity;
  user = user.getUser(userActivity.user_id);
  if (null == user) {
    return null;
  } else {
    let obj = require(6973) /* getEmptyActivityFormatter */;
    const topUserOrGuildDescription = obj.getTopUserOrGuildDescription(userActivity.dms_sent, userActivity.call_count);
    obj = { label: null, subLabel: null, icon: null };
    obj[0] = importDefault(4123).getName(user);
    obj[1] = topUserOrGuildDescription;
    obj = { size: null, user: null, guildId: "Array" };
    obj[0] = require(1297) /* Button */.AvatarSizes.SMALL;
    obj[1] = user;
    obj[2] = callback(require(1297) /* Button */.Avatar, obj);
    return callback(require(5354) /* TableRowInner */.TableRow, obj);
  }
}
({ jsx: c4, jsxs: c5 } = jsxProd);
let closure_6 = createCacheKey.createStyles({ header: { textAlign: "center" } });
const result = require("jsxProd").fileFinishedImporting("modules/parent_tools/native/FamilyCenterTopUsersBottomSheet.tsx");

export default function FamilyCenterTopUsersBottomSheet(topUserActivities) {
  topUserActivities = topUserActivities.topUserActivities;
  let obj = { children: null };
  obj = { variant: "text-md/bold", style: callback3().header, children: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[2] = intl.string(importDefault(2284).BxbvS7);
  const items = [callback(require(4281) /* Text */.Text, obj), ];
  obj = { hasIcons: true, children: null };
  obj[1] = topUserActivities.map((userActivity) => callback(closure_7, { userActivity }, userActivity.user_id));
  items[1] = callback(require(5688) /* TableRowGroupTitle */.TableRowGroup, obj);
  obj[0] = items;
  return callback2(require(5685) /* ActionSheet */.ActionSheet, obj);
};
