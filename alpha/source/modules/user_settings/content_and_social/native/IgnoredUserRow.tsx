// Module ID: 16656
// Function ID: 16657
// Name: IgnoredUserRow
// Dependencies: [19, 1384, 21, 7482, 7320, 1114, 8742, 6969, 1188, 16653, 5629, 504, 2]
// Exports: default

// Module 16656 (IgnoredUserRow)
import Fragment from "Fragment" /* 21 */;
import RelationshipActionCreatorsDefault from "RelationshipActionCreators" /* 7482 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8742 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1384 */;
import size from "module_2" /* 2 */;

function IgnoredUserRow(userRecord) {
  let intl2;
  userRecord = userRecord.userRecord;
  let analyticsLocations;
  analyticsLocations = analyticsLocations(7320)().analyticsLocations;
  const intl = userRecord(1114).intl;
  const formatToPlainString = intl.formatToPlainString;
  let username = userRecord.globalName;
  const e3qAIz = userRecord(1114).t.e3qAIz;
  if (username == null) {
    username = userRecord.username;
  }
  function handleOpenProfile() {
    const obj = { userId: userRecord.id, sourceAnalyticsLocations: analyticsLocations };
    showUserProfileActionSheetDefault(obj);
  }
  const formatToPlainStringResult = formatToPlainString(e3qAIz, { name: username });
  const TableRow = tmp2(6969).TableRow;
  let obj2 = { source: userRecord.getAvatarSource(undefined), size: tmp2(1188).AvatarSizes.REFRESH_MEDIUM_32 };
  const Avatar = tmp2(1188).Avatar;
  const items = [{ name: "activate" }, { name: "unignore", label: formatToPlainStringResult }];
  ({
    size: "sm",
    variant: "secondary",
    text: intl2.string(userRecord(1114).t["3GZE6a"]),
    accessibilityLabel: formatToPlainStringResult,
    onPress() {
      const id = userRecord.id;
      const obj = RelationshipActionCreatorsDefault;
      obj.unignoreUser(id, "ignored-users-list-mobile");
    }
  });
  const Button = tmp2(5629).Button;
  intl2 = tmp2(1114).intl;
  return <TableRow accessible={false} icon={null} label={null} onPress={handleOpenProfile} trailing={null} />;
}
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/user_settings/content_and_social/native/IgnoredUserRow.tsx");

export default function ConnectedIgnoredUserRow(userId) {
  userId = userId.userId;
  const items = [UserStore];
  const obj = userId(504);
  const stateFromStores = obj.useStateFromStores(items, () => UserStore.getUser(userId));
  let tmp2 = null;
  if (null != stateFromStores) {
    tmp2 = <IgnoredUserRow userRecord={stateFromStores} />;
  }
  return tmp2;
};
