// Module ID: 14340
// Function ID: 14341
// Name: BlockedUserRowV2
// Dependencies: [19, 1372, 21, 9195, 6583, 5917, 1177, 1115, 7624, 5281, 504, 2]
// Exports: default

// Module 14340 (BlockedUserRowV2)
import Fragment from "Fragment" /* 21 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 7624 */;
import RelationshipActionCreatorsDefault from "RelationshipActionCreators" /* 9195 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1372 */;
import size from "module_2" /* 2 */;

function BlockedUserRow(userRecord) {
  let Button;
  let intl;
  let intl2;
  let items;
  let obj4;
  let tmp4;
  let tmp6;
  userRecord = userRecord.userRecord;
  let analyticsLocations;
  analyticsLocations = analyticsLocations(6583)().analyticsLocations;
  let obj = {
    icon: null,
    label: tmp4,
    subLabel: tmp6,
    labelLineClamp: 1,
    subLabelLineClamp: 1,
    accessibilityRole: "button",
    accessibilityActions: items,
    onAccessibilityAction(nativeEvent) {
      if ("unblock" === nativeEvent.nativeEvent.actionName) {
        const id = userRecord.id;
        const obj = RelationshipActionCreatorsDefault;
        obj.unblockUser(id, { location: "blocked-users-list-mobile-v2" });
      }
    },
    onPress() {
      const obj = { userId: userRecord.id, sourceAnalyticsLocations: analyticsLocations };
      return showUserProfileActionSheetDefault(obj);
    },
    trailing: tmp2(Button, obj4)
  };
  const TableRow = userRecord(5917).TableRow;
  ({ user: userRecord, guildId: "Array", size: userRecord(1177).AvatarSizes.REFRESH_MEDIUM_32 });
  const Avatar = userRecord(1177).Avatar;
  tmp4 = null != userRecord;
  if (tmp4) {
    let username = userRecord.globalName;
    if (username == null) {
      username = userRecord.username;
    }
    tmp4 = username;
  }
  let globalName;
  if (userRecord != null) {
    globalName = userRecord.globalName;
  }
  tmp6 = undefined;
  if (null != globalName) {
    let username1;
    if (userRecord != null) {
      username1 = userRecord.username;
    }
    tmp6 = username1;
  }
  const obj3 = { name: "unblock", label: intl.string(userRecord(1115).t.XyHpKH) };
  intl = tmp3(1115).intl;
  items = [obj3];
  obj4 = {
    size: "sm",
    variant: "secondary",
    text: intl2.string(userRecord(1115).t["PR/xUz"]),
    onPress() {
      const id = userRecord.id;
      const obj = RelationshipActionCreatorsDefault;
      obj.unblockUser(id, { location: "blocked-users-list-mobile-v2" });
    }
  };
  Button = tmp3(5281).Button;
  intl2 = tmp3(1115).intl;
  return jsx(TableRow, obj);
}
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/user_settings/content_and_social/native/BlockedUserRowV2.tsx");

export default function ConnectedBlockedUserRow(userId) {
  userId = userId.userId;
  const items = [UserStore];
  const obj = userId(504);
  const stateFromStores = obj.useStateFromStores(items, () => UserStore.getUser(userId));
  let tmp2 = null;
  if (null != stateFromStores) {
    tmp2 = <BlockedUserRow userRecord={stateFromStores} />;
  }
  return tmp2;
};
