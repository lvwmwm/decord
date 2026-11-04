// Module ID: 16958
// Function ID: 16959
// Name: IgnoredUserRow
// Dependencies: [5, 19, 1385, 21, 7628, 7462, 1113, 8891, 7116, 1187, 16955, 5768, 504, 8893, 2]
// Exports: default

// Module 16958 (IgnoredUserRow)
import Fragment from "Fragment" /* 21 */;
import RelationshipActionCreatorsDefault from "RelationshipActionCreators" /* 7628 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8891 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1385 */;
import size from "module_2" /* 2 */;

let c0, c1;

function IgnoredUserRow(userRecord) {
  let intl2;
  userRecord = userRecord.userRecord;
  let analyticsLocations;
  analyticsLocations = analyticsLocations(7462)().analyticsLocations;
  const intl = userRecord(1113).intl;
  const formatToPlainString = intl.formatToPlainString;
  let username = userRecord.globalName;
  const e3qAIz = userRecord(1113).t.e3qAIz;
  if (username == null) {
    username = userRecord.username;
  }
  function handleOpenProfile() {
    const obj = { userId: userRecord.id, sourceAnalyticsLocations: analyticsLocations };
    showUserProfileActionSheetDefault(obj);
  }
  const formatToPlainStringResult = formatToPlainString(e3qAIz, { name: username });
  const TableRow = tmp2(7116).TableRow;
  let obj2 = { source: userRecord.getAvatarSource(undefined), size: tmp2(1187).AvatarSizes.REFRESH_MEDIUM_32 };
  const Avatar = tmp2(1187).Avatar;
  const items = [{ name: "activate" }, { name: "unignore", label: formatToPlainStringResult }];
  ({
    size: "sm",
    variant: "secondary",
    text: intl2.string(userRecord(1113).t["3GZE6a"]),
    accessibilityLabel: formatToPlainStringResult,
    onPress() {
      const id = userRecord.id;
      const obj = RelationshipActionCreatorsDefault;
      obj.unignoreUser(id, "ignored-users-list-mobile");
    }
  });
  const Button = tmp2(5768).Button;
  intl2 = tmp2(1113).intl;
  return <TableRow accessible={false} icon={null} label={null} onPress={handleOpenProfile} trailing={null} />;
}
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/user_settings/content_and_social/native/IgnoredUserRow.tsx");

export default function ConnectedIgnoredUserRow(userId) {
  userId = userId.userId;
  let obj = userId(504);
  const items = [UserStore];
  const stateFromStores = obj.useStateFromStores(items, () => UserStore.getUser(userId));
  const items1 = [stateFromStores, userId];
  const effect = react.useEffect(() => {
    function loadUser() {
      return obj(...arguments);
    }
    let obj = function _loadUser() {
      obj = _asyncToGenerator(async (arg0, value) => {
        let obj2;
        if (c0 === 2) {
          c0 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp2 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj3 = { value, done: true };
            return obj3;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          let c2;
          try {
            c0 = 2;
            if (0 === c1) {
              if (arg0 === 1) {
                c0 = 3;
                throw value;
              } else if (arg0 === 2) {
                c0 = 3;
                const obj4 = { value, done: true };
                return obj4;
              } else {
                c2 = 1;
                c1 = 2;
                c0 = 1;
                const obj5 = { value: obj2.getUser(c0), done: false };
                obj2 = closure_2_0(closure_2_2[13]);
                return obj5;
              }
            } else if (1 === tmp3) {
              c2 = 0;
              c0 = 3;
              return { value: "HermesInternal", done: null };
            } else if (arg0 === 1) {
              c0 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 0;
              c0 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              c2 = 0;
              c0 = 3;
              return { value: "HermesInternal", done: null };
            }
          } catch (tmp7) {
            if (0 === c2) {
              c0 = 3;
              throw tmp7;
            } else {
              c1 = 1;
            }
          }
        }
      });
      return obj(...arguments);
    };
    if (null == stateFromStores) {
      loadUser();
    }
  }, items1);
  let tmp3 = null;
  if (null != stateFromStores) {
    tmp3 = <IgnoredUserRow userRecord={stateFromStores} />;
  }
  return tmp3;
};
