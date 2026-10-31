// Module ID: 16694
// Function ID: 16695
// Name: BlockedUserRowV2
// Dependencies: [19, 1383, 21, 7488, 7326, 1113, 8750, 6975, 1187, 16695, 5634, 504, 2]
// Exports: default

// Module 16694 (BlockedUserRowV2)
import Fragment from "Fragment" /* 21 */;
import RelationshipActionCreatorsDefault from "RelationshipActionCreators" /* 7488 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8750 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1383 */;
import size from "module_2" /* 2 */;

function BlockedUserRow(userRecord) {
  let intl2;
  userRecord = userRecord.userRecord;
  let analyticsLocations;
  analyticsLocations = analyticsLocations(7326)().analyticsLocations;
  const intl = userRecord(1113).intl;
  const formatToPlainString = intl.formatToPlainString;
  let username = userRecord.globalName;
  const izBDZN = userRecord(1113).t.izBDZN;
  if (username == null) {
    username = userRecord.username;
  }
  function handleOpenProfile() {
    const obj = { userId: userRecord.id, sourceAnalyticsLocations: analyticsLocations };
    showUserProfileActionSheetDefault(obj);
  }
  const formatToPlainStringResult = formatToPlainString(izBDZN, { name: username });
  const TableRow = tmp2(6975).TableRow;
  let obj2 = { user: userRecord, guildId: "Array", size: tmp2(1187).AvatarSizes.REFRESH_MEDIUM_32 };
  const Avatar = tmp2(1187).Avatar;
  const items = [{ name: "activate" }, { name: "unblock", label: formatToPlainStringResult }];
  ({
    size: "sm",
    variant: "secondary",
    text: intl2.string(userRecord(1113).t["PR/xUz"]),
    accessibilityLabel: formatToPlainStringResult,
    onPress() {
      const id = userRecord.id;
      const obj = RelationshipActionCreatorsDefault;
      obj.unblockUser(id, { location: "blocked-users-list-mobile-v2" });
    }
  });
  const Button = tmp2(5634).Button;
  intl2 = tmp2(1113).intl;
  return <TableRow accessible={false} icon={null} label={null} onPress={handleOpenProfile} trailing={null} />;
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
