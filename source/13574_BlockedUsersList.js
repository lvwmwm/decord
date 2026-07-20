// Module ID: 13574
// Function ID: 102934
// Name: BlockedUsersList
// Dependencies: []
// Exports: default

// Module 13574 (BlockedUsersList)
function BlockedUsersList(userIds) {
  userIds = userIds.userIds;
  const tmp = callback3();
  importDefault(dependencyMap[6]);
  if (0 === userIds.length) {
    let obj = { Illustration: arg1(dependencyMap[9]).Blocked };
    const intl = arg1(dependencyMap[10]).intl;
    obj.body = intl.string(arg1(dependencyMap[10]).t.nnsFif);
    let tmp7 = callback(arg1(dependencyMap[8]).EmptyState, obj);
  } else {
    obj = { value: tmp3 };
    obj = { bottom: true, style: tmp.list };
    const obj1 = {};
    const obj2 = { Promise: 10, marginTop: null, flags: "flex-start", style: tmp.sectionLabelStyle };
    const intl2 = arg1(dependencyMap[10]).intl;
    const obj3 = { numberOfBlockedUsers: userIds.length };
    obj2.children = intl2.formatToPlainString(arg1(dependencyMap[10]).t.c+JVEB, obj3);
    const items = [callback(arg1(dependencyMap[12]).Text, obj2), ];
    const obj4 = { hasIcons: true, children: userIds.map((userId) => callback2(callback(closure_2[14]), { userId }, userId)) };
    const intl3 = arg1(dependencyMap[10]).intl;
    items[1] = callback(arg1(dependencyMap[13]).TableRowGroup, obj4, intl3.string(arg1(dependencyMap[10]).t.PFOUKW));
    obj1.children = items;
    obj.children = callback2(ScrollView, obj1);
    obj.children = callback(arg1(dependencyMap[11]).SafeAreaPaddingView, obj);
    tmp7 = callback(arg1(dependencyMap[6]).AnalyticsLocationProvider, obj);
  }
  return tmp7;
}
importAll(dependencyMap[0]);
const ScrollView = arg1(dependencyMap[1]).ScrollView;
let closure_4 = importDefault(dependencyMap[2]);
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = {};
obj = { flex: 1, paddingTop: importDefault(dependencyMap[5]).space.PX_8, paddingHorizontal: importDefault(dependencyMap[5]).space.PX_16 };
obj.list = obj;
const tmp3 = arg1(dependencyMap[3]);
obj.sectionLabelStyle = { marginTop: importDefault(dependencyMap[5]).space.PX_12, marginBottom: importDefault(dependencyMap[5]).space.PX_8 };
let closure_7 = obj.createStyles(obj);
const obj1 = { marginTop: importDefault(dependencyMap[5]).space.PX_12, marginBottom: importDefault(dependencyMap[5]).space.PX_8 };
const result = arg1(dependencyMap[16]).fileFinishedImporting("modules/user_settings/content_and_social/native/BlockedUsersListV2.tsx");

export default function ConnectedBlockedUsersList() {
  let obj = arg1(dependencyMap[15]);
  const items = [closure_4];
  obj = { userIds: obj.useStateFromStoresArray(items, () => blockedIDs.getBlockedIDs()) };
  return callback(BlockedUsersList, obj);
};
