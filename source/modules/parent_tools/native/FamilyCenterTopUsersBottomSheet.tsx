// Module ID: 13679
// Function ID: 103560
// Name: UserRow
// Dependencies: []
// Exports: default

// Module 13679 (UserRow)
function UserRow(userActivity) {
  userActivity = userActivity.userActivity;
  const user = user.getUser(userActivity.user_id);
  if (null == user) {
    return null;
  } else {
    let obj = arg1(dependencyMap[4]);
    const topUserOrGuildDescription = obj.getTopUserOrGuildDescription(userActivity.dms_sent, userActivity.call_count);
    obj = { label: importDefault(dependencyMap[6]).getName(user), subLabel: topUserOrGuildDescription };
    obj = { size: arg1(dependencyMap[7]).AvatarSizes.SMALL, user, guildId: undefined };
    obj.icon = callback(arg1(dependencyMap[7]).Avatar, obj);
    return callback(arg1(dependencyMap[5]).TableRow, obj);
  }
}
importAll(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[2]));
const tmp3 = arg1(dependencyMap[2]);
let closure_6 = arg1(dependencyMap[3]).createStyles({ header: { textAlign: "center" } });
const obj = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/parent_tools/native/FamilyCenterTopUsersBottomSheet.tsx");

export default function FamilyCenterTopUsersBottomSheet(topUserActivities) {
  topUserActivities = topUserActivities.topUserActivities;
  let obj = {};
  obj = { variant: "text-md/bold", style: callback3().header };
  const intl = arg1(dependencyMap[10]).intl;
  obj.children = intl.string(importDefault(dependencyMap[11]).BxbvS7);
  const items = [callback(arg1(dependencyMap[9]).Text, obj), ];
  obj = { hasIcons: true, children: topUserActivities.map((userActivity) => callback(closure_7, { userActivity }, userActivity.user_id)) };
  items[1] = callback(arg1(dependencyMap[12]).TableRowGroup, obj);
  obj.children = items;
  return callback2(arg1(dependencyMap[8]).ActionSheet, obj);
};
