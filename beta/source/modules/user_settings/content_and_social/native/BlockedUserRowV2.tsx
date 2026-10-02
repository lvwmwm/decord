// Module ID: 14328
// Function ID: 14329
// Name: BlockedUserRowV2
// Dependencies: [19, 1378, 21, 9207, 558, 576, 6584, 1189, 1127, 7628, 5282, 5916, 504, 2]

// Module 14328 (BlockedUserRowV2)
import Fragment from "Fragment" /* 21 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 7628 */;
import RelationshipActionCreatorsDefault from "RelationshipActionCreators" /* 9207 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1378 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let userId, userRecord;

const jsx = Fragment.jsx;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_5 = ReactCompilerGating.isReactCompilerEnabled() ? ((userRecord) => {
  let analyticsLocations;
  let intl;
  let tmp12;
  let tmp4;
  let tmp5;
  let obj = userRecord(576);
  const cResult = obj.c(18);
  userRecord = userRecord.userRecord;
  analyticsLocations = analyticsLocations(6584)().analyticsLocations;
  if (cResult[0] !== userRecord.id) {
    const fn = function t(nativeEvent) {
      if ("unblock" === nativeEvent.nativeEvent.actionName) {
        const id = userRecord.id;
        const obj = RelationshipActionCreatorsDefault;
        obj.unblockUser(id, { location: "blocked-users-list-mobile-v2" });
      }
    };
    cResult[0] = userRecord.id;
    cResult[1] = fn;
    tmp4 = fn;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] !== userRecord) {
    const Avatar = tmp(1189).Avatar;
    const tmp7 = <Avatar user={userRecord} guildId="Array" size={userRecord(1189).AvatarSizes.REFRESH_MEDIUM_32} />;
    cResult[2] = userRecord;
    cResult[3] = tmp7;
    tmp5 = tmp7;
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
    const obj3 = { name: "unblock", label: intl.string(userRecord(1127).t.XyHpKH) };
    intl = tmp(1127).intl;
    const items = [obj3];
    cResult[4] = items;
    tmp12 = items;
  } else {
    tmp12 = cResult[4];
  }
  if (cResult[5] === analyticsLocations) {
    let tmp13;
    let tmp14;
    let tmp16;
    if (cResult[6] === userRecord.id) {
      tmp13 = cResult[7];
    }
    const _Symbol = Symbol;
    if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
      const intl2 = tmp(1127).intl;
      const stringResult = intl2.string(userRecord(1127).t["PR/xUz"]);
      cResult[8] = stringResult;
      tmp14 = stringResult;
    } else {
      tmp14 = cResult[8];
    }
    if (cResult[9] !== userRecord.id) {
      const tmp18 = jsx(userRecord(5282).Button, {
        size: "sm",
        variant: "secondary",
        text: tmp14,
        onPress() {
              const id = userRecord.id;
              const obj = RelationshipActionCreatorsDefault;
              obj.unblockUser(id, { location: "blocked-users-list-mobile-v2" });
            }
      });
      cResult[9] = userRecord.id;
      cResult[10] = tmp18;
      tmp16 = tmp18;
    } else {
      tmp16 = cResult[10];
    }
    if (cResult[11] === tmp4) {
      if (cResult[12] === tmp5) {
        if (cResult[13] === tmp8) {
          if (cResult[14] === tmp10) {
            if (cResult[15] === tmp13) {
              let tmp19;
              if (cResult[16] === tmp16) {
                tmp19 = cResult[17];
              }
              return tmp19;
            }
          }
        }
      }
    }
    const tmp21 = jsx(userRecord(5916).TableRow, { icon: tmp5, label: tmp8, subLabel: tmp10, labelLineClamp: 1, subLabelLineClamp: 1, accessibilityRole: "button", accessibilityActions: tmp12, onAccessibilityAction: tmp4, onPress: tmp13, trailing: tmp16 });
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
    const obj = { userId: userRecord.id, sourceAnalyticsLocations: analyticsLocations };
    return showUserProfileActionSheetDefault(obj);
  };
  cResult[5] = analyticsLocations;
  cResult[6] = userRecord.id;
  cResult[7] = fn2;
  tmp13 = fn2;
}) : ((userRecord) => {
  let Button;
  let intl;
  let intl2;
  let items;
  let obj4;
  let tmp4;
  let tmp6;
  userRecord = userRecord.userRecord;
  let analyticsLocations;
  analyticsLocations = analyticsLocations(6584)().analyticsLocations;
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
  const TableRow = userRecord(5916).TableRow;
  ({ user: userRecord, guildId: "Array", size: userRecord(1189).AvatarSizes.REFRESH_MEDIUM_32 });
  const Avatar = userRecord(1189).Avatar;
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
  const obj3 = { name: "unblock", label: intl.string(userRecord(1127).t.XyHpKH) };
  intl = tmp3(1127).intl;
  items = [obj3];
  obj4 = {
    size: "sm",
    variant: "secondary",
    text: intl2.string(userRecord(1127).t["PR/xUz"]),
    onPress() {
      const id = userRecord.id;
      const obj = RelationshipActionCreatorsDefault;
      obj.unblockUser(id, { location: "blocked-users-list-mobile-v2" });
    }
  };
  Button = tmp3(5282).Button;
  intl2 = tmp3(1127).intl;
  return jsx(TableRow, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((userId) => {
  let first;
  let tmp6;
  const obj = userId(576);
  const cResult = obj.c(5);
  const tmp = userId;
  userId = userId.userId;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== userId) {
    const fn = function c() {
      return UserStore.getUser(userId);
    };
    cResult[1] = userId;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
  let tmp8 = null;
  if (null != stateFromStores) {
    let tmp9;
    if (cResult[3] !== stateFromStores) {
      const tmp12 = <closure_5 userRecord={stateFromStores} />;
      cResult[3] = stateFromStores;
      cResult[4] = tmp12;
      tmp9 = tmp12;
    } else {
      tmp9 = cResult[4];
    }
    tmp8 = tmp9;
  }
  return tmp8;
}) : ((userId) => {
  userId = userId.userId;
  const items = [UserStore];
  const obj = userId(504);
  const stateFromStores = obj.useStateFromStores(items, () => UserStore.getUser(userId));
  let tmp2 = null;
  if (null != stateFromStores) {
    tmp2 = <closure_5 userRecord={stateFromStores} />;
  }
  return tmp2;
});
const result = size.fileFinishedImporting("modules/user_settings/content_and_social/native/BlockedUserRowV2.tsx");

export default tmp3;
