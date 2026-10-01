// Module ID: 12636
// Function ID: 12637
// Name: UserProfileGameFriendActionSheet
// Dependencies: [5, 32, 19, 17, 4479, 1074, 21, 4836, 576, 12117, 6620, 5992, 1177, 4832, 12637, 6589, 4988, 9195, 4527, 4800, 6618, 6570, 1115, 2]
// Exports: default

// Module 12636 (UserProfileGameFriendActionSheet)
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import UserProfileAlertUtils from "UserProfileAlertUtils" /* 12117 */;
import _asyncToGenerator_mod from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import RelationshipStore from "RelationshipStore" /* 4479 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let _undefined;

let c10;
let metroImportDefault;
let metroRequire;
let size;
let unpackModuleId;
function GameFriendApplicationRow(application) {
  let items1;
  let obj2;
  let str;
  let tmp6;
  let tmp7;
  application = application.application;
  const userId = application.userId;
  const userDisplayName = application.userDisplayName;
  const tmp = closure_12();
  const items = [, , , ];
  ({ id: arr[0], name: arr[1] } = application);
  items[2] = userDisplayName;
  items[3] = userId;
  const callback = react.useCallback(() => {
    const obj = UserProfileAlertUtils;
    const obj2 = { userDisplayName, userId, applicationId: application.id, gameName: application.name };
    const result = obj.confirmRemoveGameFriend(obj2);
  }, items);
  let obj = { trailing: closure_10(application(userDisplayName[11]).XSmallIcon, { size: "md", color: "redesign-button-tertiary-text" }), label: tmp6(tmp7, obj2), onPress: callback };
  const ActionSheetRow = application(userDisplayName[10]).ActionSheetRow;
  obj2 = { style: tmp.applicationNameWrapper, children: items1 };
  const obj3 = { style: tmp.gameIcon, resizeMode: "contain", source: { uri: str }, disableColor: true };
  const Icon = application(userDisplayName[12]).Icon;
  str = application.getIconURL(32);
  const tmp4 = application;
  const tmp5 = userDisplayName;
  tmp6 = closure_11;
  tmp7 = closure_7;
  if (str == null) {
    str = "";
  }
  items1 = [closure_10(Icon, obj3, application.id), ];
  const obj4 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: application.name };
  items1[1] = closure_10(tmp4(tmp5[13]).Text, obj4);
  return closure_10(ActionSheetRow, obj, application.id);
}
let _asyncToGenerator = _asyncToGenerator_mod;
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
({ ActivityIndicator: metroRequire, View: metroImportDefault } = react_native);
const RelationshipTypes = Constants.RelationshipTypes;
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let obj = { applicationNameWrapper: { flexDirection: "row", justifyContent: "flex-start", alignItems: "center", gap: 12 }, gameIcon: size };
size = { width: 32, height: 32, borderRadius: nativeDefault.radii.sm };
let closure_12 = createStyles.createStyles(obj);
size = size_mod;
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileGameFriendActionSheet.tsx");

export default function UserProfileGameFriendActionSheet(user) {
  let ActionSheetRow;
  let BottomSheetTitleHeader;
  let c4;
  let channelId;
  let closure_5;
  let first1;
  let guildId;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let items3;
  let obj4;
  let obj7;
  let tmp13Result;
  let tmp7;
  let userDisplayName;
  user = user.user;
  let memo;
  _slicedToArray = undefined;
  react = undefined;
  let tmp = user;
  ({ guildId, channelId } = user);
  let obj = user(memo[14]);
  let gameFriendsForUser = obj.useGameFriendsForUser(user.id);
  const items = [gameFriendsForUser];
  memo = react.useMemo(() => gameFriendsForUser.map((applicationId) => applicationId.applicationId), items);
  const arr2 = gameFriendsForUser(memo[15])(memo);
  let obj2 = gameFriendsForUser(memo[16]);
  _asyncToGenerator = obj2.useName(guildId, channelId, user);
  let first = _slicedToArray(react.useState(() => {
    if (!RelationshipStore.isFriend(user.id)) {
      if (!RelationshipStore.isBlockedOrIgnored(user.id)) {
        const relationshipType = obj.getRelationshipType(tmp.id);
        return relationshipType !== RelationshipTypes.PENDING_OUTGOING && relationshipType !== RelationshipTypes.PENDING_INCOMING;
      }
    }
    return false;
  }), 1)[0];
  [tmp7, c4] = _slicedToArray(react.useState(false), 2);
  const tmp6 = _slicedToArray(react.useState(false), 2);
  [first1, react] = react.useState(false);
  const items1 = [user.id];
  const items2 = [memo];
  const callback = react.useCallback(_asyncToGenerator(async (arg0, value) => {
    let closure_0;
    let closure_2;
    let v2;
    let v3;
    if (_undefined === 2) {
      _undefined = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      let c3;
      try {
        _undefined = 2;
        if (0 === gameFriendsForUser) {
          if (arg0 === 1) {
            _undefined = 3;
            throw value;
          } else if (arg0 === 2) {
            _undefined = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            _undefined(true);
            closure_5(true);
            c3 = 2;
            const obj5 = { userId: user.id, context: { location: "User Profile Action Sheet" } };
            const obj3 = gameFriendsForUser(memo[17]);
            gameFriendsForUser = 3;
            _undefined = 1;
            const obj6 = { value: obj3.addRelationship(obj5), done: false };
            return obj6;
          }
        } else if (1 === gameFriendsForUser) {
          c3 = 0;
          closure_128_5(false);
          throw memo;
        } else {
          if (2 === gameFriendsForUser) {
            c3 = 1;
            closure_128_4(false);
          } else if (arg0 === 1) {
            _undefined = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            closure_128_5(false);
            _undefined = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else {
            const obj = tmp(memo[18]);
            const result = obj.presentAddedFriendToast();
            c3 = 1;
          }
          c3 = 0;
          closure_128_5(false);
          _undefined = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp30) {
        memo = tmp30;
        if (0 === c3) {
          _undefined = 3;
          throw tmp30;
        } else if (1 === tmp32) {
          gameFriendsForUser = 1;
        } else {
          gameFriendsForUser = 2;
        }
      }
    }
  }), items1);
  const effect = react.useEffect(() => {
    if (0 === memo.length) {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
    }
  }, items2);
  let obj3 = { header: closure_10(BottomSheetTitleHeader, obj4), children: items3 };
  const ActionSheet = user(memo[20]).ActionSheet;
  obj4 = { title: intl.string(user(memo[22]).t["Uv/eTx"]) };
  BottomSheetTitleHeader = user(memo[21]).BottomSheetTitleHeader;
  intl = user(memo[22]).intl;
  let obj5 = {
    title: intl2.string(user(memo[22]).t.YpCiMt),
    hasIcons: false,
    children: arr2.map((application) => {
      let tmp = null != application;
      if (tmp) {
        const obj = { application, userDisplayName, userId: user.id };
        tmp = authStore(GameFriendApplicationRow, obj, application.id);
      }
      return tmp;
    })
  };
  const Group = user(memo[10]).ActionSheetRow.Group;
  intl2 = user(memo[22]).intl;
  items3 = [closure_10(Group, obj5), ];
  const tmp12 = closure_11;
  if (first) {
    let obj6 = { title: intl3.string(tmp(tmp2[22]).t.GbsGCp), hasIcons: false, children: tmp13(ActionSheetRow, obj7) };
    const Group2 = tmp(tmp2[10]).ActionSheetRow.Group;
    intl3 = tmp(tmp2[22]).intl;
    obj7 = { label: intl4.string(tmp(tmp2[22]).t.LAcY7m), subLabel: intl5.string(tmp(tmp2[22]).t.YTvOUx), onPress: callback, disabled: tmp7, trailing: tmp13Result };
    ActionSheetRow = tmp(tmp2[10]).ActionSheetRow;
    intl4 = tmp(tmp2[22]).intl;
    intl5 = tmp(tmp2[22]).intl;
    tmp13Result = null;
    if (first1) {
      tmp13Result = tmp13(closure_6, {});
    }
    first = tmp13(Group2, obj6);
  }
  items3[1] = first;
  return tmp12(ActionSheet, obj3);
};
