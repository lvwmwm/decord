// Module ID: 16116
// Function ID: 16117
// Name: BlockedUserRowV2
// Dependencies: [19, 1386, 21, 7740, 7520, 1112, 8067, 7045, 1186, 16117, 5511, 504, 2]
// Exports: default

// Module 16116 (BlockedUserRowV2)
import Fragment from "Fragment" /* 21 */;
import RelationshipActionCreatorsDefault from "RelationshipActionCreators" /* 7740 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8067 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1386 */;
import size from "module_2" /* 2 */;

function BlockedUserRow(userRecord) {
  let intl2;
  userRecord = userRecord.userRecord;
  let analyticsLocations;
  analyticsLocations = analyticsLocations(7520)().analyticsLocations;
  const intl = userRecord(1112).intl;
  const formatToPlainString = intl.formatToPlainString;
  let username = userRecord.globalName;
  const izBDZN = userRecord(1112).t.izBDZN;
  if (username == null) {
    username = userRecord.username;
  }
  function handleOpenProfile() {
    const obj = { userId: userRecord.id, sourceAnalyticsLocations: analyticsLocations };
    showUserProfileActionSheetDefault(obj);
  }
  const formatToPlainStringResult = formatToPlainString(izBDZN, { name: username });
  const TableRow = tmp2(7045).TableRow;
  let obj2 = { user: userRecord, guildId: "Array", size: tmp2(1186).AvatarSizes.REFRESH_MEDIUM_32 };
  const Avatar = tmp2(1186).Avatar;
  const items = [{ name: "activate" }, { name: "unblock", label: formatToPlainStringResult }];
  ({
    size: "sm",
    variant: "secondary",
    text: intl2.string(userRecord(1112).t["PR/xUz"]),
    accessibilityLabel: formatToPlainStringResult,
    onPress() {
      const id = userRecord.id;
      const obj = RelationshipActionCreatorsDefault;
      obj.unblockUser(id, { location: "blocked-users-list-mobile-v2" });
    }
  });
  const Button = tmp2(5511).Button;
  intl2 = tmp2(1112).intl;
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
