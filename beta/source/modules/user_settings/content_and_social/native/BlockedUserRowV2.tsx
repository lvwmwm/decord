// Module ID: 15081
// Function ID: 15082
// Name: BlockedUserRowV2
// Dependencies: [19, 1376, 21, 10048, 558, 568, 7441, 1181, 1119, 8485, 5220, 5854, 504, 2]

// Module 15081 (BlockedUserRowV2)
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8485 */;
import RelationshipActionCreatorsDefault from "RelationshipActionCreators" /* 10048 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1376 */;

const require = fn;
const jsx = fn(21).jsx;
let ReactCompilerGating = fn(558);
let closure_5 = ReactCompilerGating.isReactCompilerEnabled() ? ((userRecord) => {
  const cResult = userRecord(568).c(18);
  userRecord = userRecord.userRecord;
  analyticsLocations = analyticsLocations(7441)().analyticsLocations;
  if (cResult[0] !== userRecord.id) {
    const fn = function t(nativeEvent) {
      if ("unblock" === nativeEvent.nativeEvent.actionName) {
        RelationshipActionCreatorsDefault.unblockUser(userRecord.id, { location: "blocked-users-list-mobile-v2" });
      }
    };
    cResult[0] = userRecord.id;
    cResult[1] = fn;
    let tmp4 = fn;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] !== userRecord) {
    const obj2 = { user: userRecord, guildId: "Array", size: tmp(1181).AvatarSizes.REFRESH_MEDIUM_32 };
    const tmp7 = jsx(tmp(1181).Avatar, { user: userRecord, guildId: "Array", size: tmp(1181).AvatarSizes.REFRESH_MEDIUM_32 });
    cResult[2] = userRecord;
    cResult[3] = tmp7;
    let tmp5 = tmp7;
  } else {
    tmp5 = cResult[3];
  }
  let tmp8 = null != userRecord;
  if (tmp8) {
    let username = userRecord.globalName;
    if (username == null) {
      username = userRecord.username;
    }
    tmp8 = username;
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
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { name: "unblock", label: null };
    const intl = tmp(1119).intl;
    obj3.label = intl.string(tmp(1119).t.XyHpKH);
    const items = [obj3];
    cResult[4] = items;
    let tmp12 = items;
  } else {
    tmp12 = cResult[4];
  }
  if (cResult[5] === analyticsLocations) {
    if (cResult[6] === userRecord.id) {
      let tmp13 = cResult[7];
    }
    const _Symbol = Symbol;
    if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
      const intl2 = tmp(1119).intl;
      const stringResult = intl2.string(tmp(1119).t["PR/xUz"]);
      cResult[8] = stringResult;
      let tmp14 = stringResult;
    } else {
      tmp14 = cResult[8];
    }
    if (cResult[9] !== userRecord.id) {
      const obj4 = {
        size: "sm",
        variant: "secondary",
        text: tmp14,
        onPress() {
              RelationshipActionCreatorsDefault.unblockUser(userRecord.id, { location: "blocked-users-list-mobile-v2" });
            }
      };
      const tmp18 = jsx(tmp(5220).Button, {
        size: "sm",
        variant: "secondary",
        text: tmp14,
        onPress() {
              RelationshipActionCreatorsDefault.unblockUser(userRecord.id, { location: "blocked-users-list-mobile-v2" });
            }
      });
      cResult[9] = userRecord.id;
      cResult[10] = tmp18;
      let tmp16 = tmp18;
    } else {
      tmp16 = cResult[10];
    }
    if (cResult[11] === tmp4) {
      if (cResult[12] === tmp5) {
        if (cResult[13] === tmp8) {
          if (cResult[14] === tmp10) {
            if (cResult[15] === tmp13) {
              if (cResult[16] === tmp16) {
                let tmp19 = cResult[17];
              }
              return tmp19;
            }
          }
        }
      }
    }
    const obj5 = { icon: tmp5, label: tmp8, subLabel: tmp10, labelLineClamp: 1, subLabelLineClamp: 1, accessibilityRole: "button", accessibilityActions: tmp12, onAccessibilityAction: tmp4, onPress: tmp13, trailing: tmp16 };
    const tmp21 = jsx(tmp(5854).TableRow, { icon: tmp5, label: tmp8, subLabel: tmp10, labelLineClamp: 1, subLabelLineClamp: 1, accessibilityRole: "button", accessibilityActions: tmp12, onAccessibilityAction: tmp4, onPress: tmp13, trailing: tmp16 });
    cResult[11] = tmp4;
    cResult[12] = tmp5;
    cResult[13] = tmp8;
    cResult[14] = tmp10;
    cResult[15] = tmp13;
    cResult[16] = tmp16;
    cResult[17] = tmp21;
    tmp19 = tmp21;
  }
  const fn2 = function y() {
    return showUserProfileActionSheetDefault({ userId: userRecord.id, sourceAnalyticsLocations: analyticsLocations });
  };
  cResult[5] = analyticsLocations;
  cResult[6] = userRecord.id;
  cResult[7] = fn2;
  tmp13 = fn2;
}) : ((userRecord) => {
  userRecord = userRecord.userRecord;
  let analyticsLocations;
  analyticsLocations = analyticsLocations(7441)().analyticsLocations;
  const obj = { icon: null, label: null, subLabel: null, labelLineClamp: 1, subLabelLineClamp: 1, accessibilityRole: "button", accessibilityActions: null, onAccessibilityAction: null, onPress: null, trailing: null };
  const obj2 = { user: userRecord, guildId: "Array", size: userRecord(1181).AvatarSizes.REFRESH_MEDIUM_32 };
  obj.icon = jsx(userRecord(1181).Avatar, { user: userRecord, guildId: "Array", size: userRecord(1181).AvatarSizes.REFRESH_MEDIUM_32 });
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
  const obj3 = { name: "unblock", label: null };
  const intl = tmp3(1119).intl;
  obj3.label = intl.string(userRecord(1119).t.XyHpKH);
  const items = [obj3];
  obj.accessibilityActions = items;
  obj.onAccessibilityAction = function onAccessibilityAction(nativeEvent) {
    if ("unblock" === nativeEvent.nativeEvent.actionName) {
      RelationshipActionCreatorsDefault.unblockUser(userRecord.id, { location: "blocked-users-list-mobile-v2" });
    }
  };
  obj.onPress = function onPress() {
    return showUserProfileActionSheetDefault({ userId: userRecord.id, sourceAnalyticsLocations: analyticsLocations });
  };
  const obj4 = { size: "sm", variant: "secondary", text: null, onPress: null };
  const intl2 = tmp3(1119).intl;
  obj4.text = intl2.string(userRecord(1119).t["PR/xUz"]);
  obj4.onPress = function onPress() {
    RelationshipActionCreatorsDefault.unblockUser(userRecord.id, { location: "blocked-users-list-mobile-v2" });
  };
  obj.trailing = jsx(userRecord(5220).Button, { size: "sm", variant: "secondary", text: null, onPress: null });
  return jsx(userRecord(5854).TableRow, { icon: null, label: null, subLabel: null, labelLineClamp: 1, subLabelLineClamp: 1, accessibilityRole: "button", accessibilityActions: null, onAccessibilityAction: null, onPress: null, trailing: null });
});
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/content_and_social/native/BlockedUserRowV2.tsx");

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
