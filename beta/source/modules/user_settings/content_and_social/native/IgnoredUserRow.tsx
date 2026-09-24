// Module ID: 15084
// Function ID: 15085
// Name: IgnoredUserRow
// Dependencies: [19, 1376, 21, 10048, 558, 568, 7441, 1181, 1119, 8485, 5220, 5854, 504, 2]

// Module 15084 (IgnoredUserRow)
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8485 */;
import RelationshipActionCreatorsDefault from "RelationshipActionCreators" /* 10048 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1376 */;

const require = fn;
const jsx = fn(21).jsx;
let ReactCompilerGating = fn(558);
let closure_5 = ReactCompilerGating.isReactCompilerEnabled() ? ((userRecord) => {
  const cResult = userRecord(568).c(20);
  userRecord = userRecord.userRecord;
  analyticsLocations = analyticsLocations(7441)().analyticsLocations;
  if (cResult[0] !== userRecord.id) {
    const fn = function s(nativeEvent) {
      if ("unignore" === nativeEvent.nativeEvent.actionName) {
        RelationshipActionCreatorsDefault.unignoreUser(userRecord.id, "ignored-users-list-mobile");
      }
    };
    cResult[0] = userRecord.id;
    cResult[1] = fn;
    let tmp4 = fn;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] !== userRecord) {
    const avatarSource = userRecord.getAvatarSource(undefined);
    cResult[2] = userRecord;
    cResult[3] = avatarSource;
    let tmp5 = avatarSource;
  } else {
    tmp5 = cResult[3];
  }
  if (cResult[4] !== tmp5) {
    const obj2 = { source: tmp5, size: tmp(1181).AvatarSizes.REFRESH_MEDIUM_32 };
    const tmp9 = jsx(tmp(1181).Avatar, { source: tmp5, size: tmp(1181).AvatarSizes.REFRESH_MEDIUM_32 });
    cResult[4] = tmp5;
    cResult[5] = tmp9;
    let tmp7 = tmp9;
  } else {
    tmp7 = cResult[5];
  }
  let tmp10 = null != userRecord;
  if (tmp10) {
    let username = userRecord.globalName;
    if (username == null) {
      username = userRecord.username;
    }
    tmp10 = username;
  }
  let globalName;
  if (userRecord != null) {
    globalName = userRecord.globalName;
  }
  if (null != globalName) {
    let username1;
    if (userRecord != null) {
      username1 = userRecord.username;
    }
  }
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { name: "unignore", label: null };
    const intl = tmp(1119).intl;
    obj3.label = intl.string(tmp(1119).t["8wXU9B"]);
    const items = [obj3];
    cResult[6] = items;
    let tmp14 = items;
  } else {
    tmp14 = cResult[6];
  }
  if (cResult[7] === analyticsLocations) {
    if (cResult[8] === userRecord.id) {
      let tmp15 = cResult[9];
    }
    const _Symbol = Symbol;
    if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
      const intl2 = tmp(1119).intl;
      const stringResult = intl2.string(tmp(1119).t["3GZE6a"]);
      cResult[10] = stringResult;
      let tmp16 = stringResult;
    } else {
      tmp16 = cResult[10];
    }
    if (cResult[11] !== userRecord.id) {
      const obj4 = {
        size: "sm",
        variant: "secondary",
        text: tmp16,
        onPress() {
              RelationshipActionCreatorsDefault.unignoreUser(userRecord.id, "ignored-users-list-mobile");
            }
      };
      const tmp20 = jsx(tmp(5220).Button, {
        size: "sm",
        variant: "secondary",
        text: tmp16,
        onPress() {
              RelationshipActionCreatorsDefault.unignoreUser(userRecord.id, "ignored-users-list-mobile");
            }
      });
      cResult[11] = userRecord.id;
      cResult[12] = tmp20;
      let tmp18 = tmp20;
    } else {
      tmp18 = cResult[12];
    }
    if (cResult[13] === tmp4) {
      if (cResult[14] === tmp7) {
        if (cResult[15] === tmp10) {
          if (cResult[16] === tmp12) {
            if (cResult[17] === tmp15) {
              if (cResult[18] === tmp18) {
                let tmp21 = cResult[19];
              }
              return tmp21;
            }
          }
        }
      }
    }
    const obj5 = { icon: tmp7, label: tmp10, subLabel: tmp12, labelLineClamp: 1, subLabelLineClamp: 1, accessibilityRole: "button", accessibilityActions: tmp14, onAccessibilityAction: tmp4, onPress: tmp15, trailing: tmp18 };
    const tmp23 = jsx(tmp(5854).TableRow, { icon: tmp7, label: tmp10, subLabel: tmp12, labelLineClamp: 1, subLabelLineClamp: 1, accessibilityRole: "button", accessibilityActions: tmp14, onAccessibilityAction: tmp4, onPress: tmp15, trailing: tmp18 });
    cResult[13] = tmp4;
    cResult[14] = tmp7;
    cResult[15] = tmp10;
    cResult[16] = tmp12;
    cResult[17] = tmp15;
    cResult[18] = tmp18;
    cResult[19] = tmp23;
    tmp21 = tmp23;
  }
  const fn2 = function _() {
    return showUserProfileActionSheetDefault({ userId: userRecord.id, sourceAnalyticsLocations: analyticsLocations });
  };
  cResult[7] = analyticsLocations;
  cResult[8] = userRecord.id;
  cResult[9] = fn2;
  tmp15 = fn2;
}) : ((userRecord) => {
  userRecord = userRecord.userRecord;
  let analyticsLocations;
  analyticsLocations = analyticsLocations(7441)().analyticsLocations;
  const obj = { icon: jsx(userRecord(1181).Avatar, { source: userRecord.getAvatarSource(undefined), size: userRecord(1181).AvatarSizes.REFRESH_MEDIUM_32 }), label: null, subLabel: null, labelLineClamp: 1, subLabelLineClamp: 1, accessibilityRole: "button", accessibilityActions: null, onAccessibilityAction: null, onPress: null, trailing: null };
  let tmp4 = null != userRecord;
  if (tmp4) {
    let username = userRecord.globalName;
    if (username == null) {
      username = userRecord.username;
    }
    tmp4 = username;
  }
  obj.label = tmp4;
  let globalName;
  if (userRecord != null) {
    globalName = userRecord.globalName;
  }
  let tmp6;
  if (null != globalName) {
    let username1;
    if (userRecord != null) {
      username1 = userRecord.username;
    }
    tmp6 = username1;
  }
  obj.subLabel = tmp6;
  const obj3 = { name: "unignore", label: null };
  const intl = tmp3(1119).intl;
  obj3.label = intl.string(userRecord(1119).t["8wXU9B"]);
  const items = [obj3];
  obj.accessibilityActions = items;
  obj.onAccessibilityAction = function onAccessibilityAction(nativeEvent) {
    if ("unignore" === nativeEvent.nativeEvent.actionName) {
      RelationshipActionCreatorsDefault.unignoreUser(userRecord.id, "ignored-users-list-mobile");
    }
  };
  obj.onPress = function onPress() {
    return showUserProfileActionSheetDefault({ userId: userRecord.id, sourceAnalyticsLocations: analyticsLocations });
  };
  const obj4 = { size: "sm", variant: "secondary", text: null, onPress: null };
  const intl2 = tmp3(1119).intl;
  obj4.text = intl2.string(userRecord(1119).t["3GZE6a"]);
  obj4.onPress = function onPress() {
    RelationshipActionCreatorsDefault.unignoreUser(userRecord.id, "ignored-users-list-mobile");
  };
  obj.trailing = jsx(userRecord(5220).Button, { size: "sm", variant: "secondary", text: null, onPress: null });
  return jsx(userRecord(5854).TableRow, { icon: jsx(userRecord(1181).Avatar, { source: userRecord.getAvatarSource(undefined), size: userRecord(1181).AvatarSizes.REFRESH_MEDIUM_32 }), label: null, subLabel: null, labelLineClamp: 1, subLabelLineClamp: 1, accessibilityRole: "button", accessibilityActions: null, onAccessibilityAction: null, onPress: null, trailing: null });
});
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/content_and_social/native/IgnoredUserRow.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((userId) => {
  const cResult = userId(568).c(5);
  userId = userId.userId;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== userId) {
    const fn = function c() {
      return UserStore.getUser(userId);
    };
    cResult[1] = userId;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const obj = userId(568);
  const stateFromStores = userId(504).useStateFromStores(first, tmp6);
  if (null == stateFromStores) {
    return null;
  } else if (cResult[3] !== stateFromStores) {
    const obj2 = { userRecord: stateFromStores };
    const tmp11 = <closure_5 userRecord={stateFromStores} />;
    cResult[3] = stateFromStores;
    cResult[4] = tmp11;
  }
}) : ((userId) => {
  userId = userId.userId;
  const items = [UserStore];
  const stateFromStores = userId(504).useStateFromStores(items, () => UserStore.getUser(userId));
  let tmp2 = null;
  if (null != stateFromStores) {
    const obj2 = { userRecord: stateFromStores };
    tmp2 = <closure_5 userRecord={stateFromStores} />;
  }
  return tmp2;
});
