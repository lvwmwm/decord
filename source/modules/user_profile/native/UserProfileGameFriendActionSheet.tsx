// Module ID: 11965
// Function ID: 92513
// Name: GameFriendApplicationRow
// Dependencies: []
// Exports: default

// Module 11965 (GameFriendApplicationRow)
function GameFriendApplicationRow(application) {
  application = application.application;
  const arg1 = application;
  const userId = application.userId;
  const importDefault = userId;
  const userDisplayName = application.userDisplayName;
  const dependencyMap = userDisplayName;
  const tmp = callback4();
  const items = [, , , ];
  ({ id: arr[0], name: arr[1] } = application);
  items[2] = userDisplayName;
  items[3] = userId;
  const callback = React.useCallback(() => {
    let obj = application(userDisplayName[9]);
    obj = { userDisplayName, userId, applicationId: application.id, gameName: application.name };
    const result = obj.confirmRemoveGameFriend(obj);
  }, items);
  let obj = { trailing: callback3(arg1(dependencyMap[11]).XSmallIcon, { flexDirection: true, alignItems: true }) };
  obj = { style: tmp.applicationNameWrapper };
  obj = { style: tmp.gameIcon, resizeMode: "contain" };
  const obj1 = {};
  const iconURL = application.getIconURL(32);
  let str = "";
  if (null != iconURL) {
    str = iconURL;
  }
  obj1.uri = str;
  obj.source = obj1;
  obj.disableColor = true;
  const items1 = [callback3(arg1(dependencyMap[12]).Icon, obj, application.id), ];
  const obj2 = { INTEGRATION_CREATE: 131072.00119209292, ConstraintReasonCode: -293983030121430100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, children: application.name };
  items1[1] = callback3(arg1(dependencyMap[13]).Text, obj2);
  obj.children = items1;
  obj.label = closure_11(closure_7, obj);
  obj.onPress = callback;
  return callback3(arg1(dependencyMap[10]).ActionSheetRow, obj, application.id);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importAll(dependencyMap[2]);
({ ActivityIndicator: closure_6, View: closure_7 } = arg1(dependencyMap[3]));
let closure_8 = importDefault(dependencyMap[4]);
const RelationshipTypes = arg1(dependencyMap[5]).RelationshipTypes;
const tmp2 = arg1(dependencyMap[3]);
({ jsx: closure_10, jsxs: closure_11 } = arg1(dependencyMap[6]));
let obj = arg1(dependencyMap[7]);
obj = { applicationNameWrapper: {} };
obj = { aze: "boolean", azj: "string", borderRadius: importDefault(dependencyMap[8]).radii.sm };
obj.gameIcon = obj;
let closure_12 = obj.createStyles(obj);
const tmp3 = arg1(dependencyMap[6]);
const result = arg1(dependencyMap[23]).fileFinishedImporting("modules/user_profile/native/UserProfileGameFriendActionSheet.tsx");

export default function UserProfileGameFriendActionSheet(user) {
  let channelId;
  let guildId;
  user = user.user;
  const arg1 = user;
  ({ guildId, channelId } = user);
  let obj = arg1(dependencyMap[14]);
  const gameFriendsForUser = obj.useGameFriendsForUser(user.id);
  const importDefault = gameFriendsForUser;
  const items = [gameFriendsForUser];
  const memo = React.useMemo(() => gameFriendsForUser.map((applicationId) => applicationId.applicationId), items);
  const dependencyMap = memo;
  let obj1 = importDefault(dependencyMap[16]);
  let callback = obj1.useName(guildId, channelId, user);
  let first = callback2(React.useState(() => {
    if (!closure_8.isFriend(user.id)) {
      if (!closure_8.isBlockedOrIgnored(user.id)) {
        const relationshipType = closure_8.getRelationshipType(user.id);
        let tmp7 = relationshipType !== constants.PENDING_OUTGOING;
        if (tmp7) {
          tmp7 = relationshipType !== constants.PENDING_INCOMING;
        }
        return tmp7;
      }
    }
    return false;
  }), 1)[0];
  const tmp4 = callback2(React.useState(false), 2);
  const callback2 = tmp4[1];
  const tmp5 = callback2(React.useState(false), 2);
  const React = tmp6;
  // CreateGeneratorClosureLongIndex (0x67)
  const items1 = [user.id];
  const items2 = [memo];
  callback = React.useCallback(callback(tmp6), items1);
  const effect = React.useEffect(() => {
    if (0 === memo.length) {
      gameFriendsForUser(memo[19]).hideActionSheet();
      const obj = gameFriendsForUser(memo[19]);
    }
  }, items2);
  obj = {};
  obj = {};
  const intl = arg1(dependencyMap[22]).intl;
  obj.title = intl.string(arg1(dependencyMap[22]).t.Uv/eTx);
  obj.header = callback3(arg1(dependencyMap[21]).BottomSheetTitleHeader, obj);
  obj1 = {};
  const intl2 = arg1(dependencyMap[22]).intl;
  obj1.title = intl2.string(arg1(dependencyMap[22]).t.YpCiMt);
  obj1.hasIcons = false;
  obj1.children = importDefault(dependencyMap[15])(memo).map((application) => {
    let tmp = null != application;
    if (tmp) {
      const obj = { application, userDisplayName: closure_3, userId: user.id };
      tmp = callback(closure_13, obj, application.id);
    }
    return tmp;
  });
  const items3 = [callback3(arg1(dependencyMap[10]).ActionSheetRow.Group, obj1), ];
  if (first) {
    const obj2 = {};
    const intl3 = arg1(dependencyMap[22]).intl;
    obj2.title = intl3.string(arg1(dependencyMap[22]).t.GbsGCp);
    obj2.hasIcons = false;
    const obj3 = {};
    const intl4 = arg1(dependencyMap[22]).intl;
    obj3.label = intl4.string(arg1(dependencyMap[22]).t.LAcY7m);
    const intl5 = arg1(dependencyMap[22]).intl;
    obj3.subLabel = intl5.string(arg1(dependencyMap[22]).t.YTvOUx);
    obj3.onPress = callback;
    obj3.disabled = tmp4[0];
    let tmp14 = null;
    if (tmp5[0]) {
      tmp14 = callback3(closure_6, {});
    }
    obj3.trailing = tmp14;
    obj2.children = callback3(arg1(dependencyMap[10]).ActionSheetRow, obj3);
    first = callback3(arg1(dependencyMap[10]).ActionSheetRow.Group, obj2);
    const tmp10 = callback3;
    const tmp13 = callback3;
  }
  items3[1] = first;
  obj.children = items3;
  return closure_11(arg1(dependencyMap[20]).ActionSheet, obj);
};
