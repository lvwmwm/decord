// Module ID: 15181
// Function ID: 114504
// Name: ApplicationStatusIcon
// Dependencies: []

// Module 15181 (ApplicationStatusIcon)
function ApplicationStatusIcon(status) {
  status = status.status;
  if (arg1(dependencyMap[5]).GuildJoinRequestApplicationStatuses.APPROVED === status) {
    let obj = { size: "sm", color: importDefault(dependencyMap[4]).colors.STATUS_POSITIVE_BACKGROUND, secondaryColor: importDefault(dependencyMap[4]).colors.STATUS_POSITIVE_TEXT };
    return callback(arg1(dependencyMap[6]).CircleCheckIcon, obj);
  } else if (arg1(dependencyMap[5]).GuildJoinRequestApplicationStatuses.REJECTED === status) {
    obj = { size: "sm", color: importDefault(dependencyMap[4]).colors.ICON_FEEDBACK_CRITICAL, secondaryColor: importDefault(dependencyMap[4]).colors.WHITE };
    return callback(arg1(dependencyMap[7]).CircleXIcon, obj);
  } else {
    return null;
  }
}
const importAllResult = importAll(dependencyMap[0]);
({ Pressable: closure_4, View: closure_5 } = arg1(dependencyMap[1]));
const tmp2 = arg1(dependencyMap[1]);
({ jsx: closure_6, jsxs: closure_7, Fragment: closure_8 } = arg1(dependencyMap[2]));
let obj1 = arg1(dependencyMap[3]);
let obj = { label: {} };
obj = { backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_SURFACE_HIGH, borderRadius: importDefault(dependencyMap[4]).radii.md };
obj.container = obj;
obj.row = { "Bool(false)": "<string:17265217>", "Bool(false)": "<string:1602048>", "Bool(false)": "<string:1572864>", "Bool(false)": "<string:1107361792>" };
obj1 = { bhk: false, bic: false, backgroundColor: importDefault(dependencyMap[4]).colors.BORDER_SUBTLE };
obj.divider = obj1;
let closure_9 = obj1.createStyles(obj);
const tmp3 = arg1(dependencyMap[2]);
const memoResult = importAllResult.memo((arg0) => {
  let guildId;
  let selectedJoinRequestId;
  let userId;
  ({ guildId, userId, selectedJoinRequestId } = arg0);
  const tmp = callback3();
  const arg1 = tmp;
  let obj = arg1(dependencyMap[8]);
  const otherGuildJoinRequestsForUser = obj.useOtherGuildJoinRequestsForUser({ guildId, userId, selectedJoinRequestId });
  let tmp2 = null;
  if (0 !== otherGuildJoinRequestsForUser.length) {
    obj = {};
    obj = { style: tmp.label };
    const intl = arg1(dependencyMap[10]).intl;
    obj.children = intl.string(arg1(dependencyMap[10]).t.hxa+G3);
    const items = [callback(arg1(dependencyMap[9]).Text, obj), ];
    const obj1 = {
      style: tmp.container,
      children: otherGuildJoinRequestsForUser.map((createdAt) => {
          let tmp = createdAt;
          let obj = {};
          let tmp2 = arg1 > 0;
          tmp = callback2;
          if (tmp2) {
            obj = { style: tmp.divider };
            tmp2 = callback(closure_5, obj);
          }
          const items = [tmp2, ];
          obj = {
            accessibilityRole: "button",
            style: tmp.row,
            onPress() {
              return callback(closure_2[11])(arg0);
            }
          };
          const obj1 = {};
          const obj5 = tmp(closure_2[12]);
          obj1.children = obj5.dateFormat(new Date(createdAt.createdAt), "LL");
          const items1 = [callback(tmp(closure_2[9]).Text, obj1), callback(closure_10, { status: createdAt.applicationStatus })];
          obj.children = items1;
          items[1] = callback2(closure_4, obj);
          obj.children = items;
          return tmp(React.Fragment, obj, createdAt.joinRequestId);
        })
    };
    items[1] = callback(closure_5, obj1);
    obj.children = items;
    tmp2 = callback2(closure_8, obj);
  }
  return tmp2;
});
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/guild_member_verification/native/components/JoinRequestOtherApplications.tsx");

export default memoResult;
