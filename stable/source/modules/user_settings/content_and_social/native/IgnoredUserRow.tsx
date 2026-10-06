// Module ID: 14331
// Function ID: 14332
// Name: IgnoredUserRow
// Dependencies: [19, 1378, 21, 9207, 558, 576, 6584, 1189, 1127, 7628, 5282, 5916, 504, 2]

// Module 14331 (IgnoredUserRow)
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
  let tmp14;
  let tmp4;
  let tmp5;
  let tmp7;
  let obj = userRecord(576);
  const cResult = obj.c(20);
  userRecord = userRecord.userRecord;
  analyticsLocations = analyticsLocations(6584)().analyticsLocations;
  if (cResult[0] !== userRecord.id) {
    const fn = function s(nativeEvent) {
      if ("unignore" === nativeEvent.nativeEvent.actionName) {
        const id = userRecord.id;
        const obj = RelationshipActionCreatorsDefault;
        obj.unignoreUser(id, "ignored-users-list-mobile");
      }
    };
    cResult[0] = userRecord.id;
    cResult[1] = fn;
    tmp4 = fn;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] !== userRecord) {
    const avatarSource = userRecord.getAvatarSource(undefined);
    cResult[2] = userRecord;
    cResult[3] = avatarSource;
    tmp5 = avatarSource;
  } else {
    tmp5 = cResult[3];
  }
  if (cResult[4] !== tmp5) {
    const Avatar = tmp(1189).Avatar;
    const tmp9 = <Avatar source={tmp5} size={userRecord(1189).AvatarSizes.REFRESH_MEDIUM_32} />;
    cResult[4] = tmp5;
    cResult[5] = tmp9;
    tmp7 = tmp9;
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
    const obj3 = { name: "unignore", label: intl.string(userRecord(1127).t["8wXU9B"]) };
    intl = tmp(1127).intl;
    const items = [obj3];
    cResult[6] = items;
    tmp14 = items;
  } else {
    tmp14 = cResult[6];
  }
  if (cResult[7] === analyticsLocations) {
    let tmp15;
    let tmp16;
    let tmp18;
    if (cResult[8] === userRecord.id) {
      tmp15 = cResult[9];
    }
    const _Symbol = Symbol;
    if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
      const intl2 = tmp(1127).intl;
      const stringResult = intl2.string(userRecord(1127).t["3GZE6a"]);
      cResult[10] = stringResult;
      tmp16 = stringResult;
    } else {
      tmp16 = cResult[10];
    }
    if (cResult[11] !== userRecord.id) {
      const tmp20 = jsx(userRecord(5282).Button, {
        size: "sm",
        variant: "secondary",
        text: tmp16,
        onPress() {
              const id = userRecord.id;
              const obj = RelationshipActionCreatorsDefault;
              obj.unignoreUser(id, "ignored-users-list-mobile");
            }
      });
      cResult[11] = userRecord.id;
      cResult[12] = tmp20;
      tmp18 = tmp20;
    } else {
      tmp18 = cResult[12];
    }
    if (cResult[13] === tmp4) {
      if (cResult[14] === tmp7) {
        if (cResult[15] === tmp10) {
          if (cResult[16] === tmp12) {
            if (cResult[17] === tmp15) {
              let tmp21;
              if (cResult[18] === tmp18) {
                tmp21 = cResult[19];
              }
              return tmp21;
            }
          }
        }
      }
    }
    const tmp23 = jsx(userRecord(5916).TableRow, { icon: tmp7, label: tmp10, subLabel: tmp12, labelLineClamp: 1, subLabelLineClamp: 1, accessibilityRole: "button", accessibilityActions: tmp14, onAccessibilityAction: tmp4, onPress: tmp15, trailing: tmp18 });
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
    const obj = { userId: userRecord.id, sourceAnalyticsLocations: analyticsLocations };
    return showUserProfileActionSheetDefault(obj);
  };
  cResult[7] = analyticsLocations;
  cResult[8] = userRecord.id;
  cResult[9] = fn2;
  tmp15 = fn2;
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
      if ("unignore" === nativeEvent.nativeEvent.actionName) {
        const id = userRecord.id;
        const obj = RelationshipActionCreatorsDefault;
        obj.unignoreUser(id, "ignored-users-list-mobile");
      }
    },
    onPress() {
      const obj = { userId: userRecord.id, sourceAnalyticsLocations: analyticsLocations };
      return showUserProfileActionSheetDefault(obj);
    },
    trailing: tmp2(Button, obj4)
  };
  const TableRow = userRecord(5916).TableRow;
  ({ source: userRecord.getAvatarSource(undefined), size: userRecord(1189).AvatarSizes.REFRESH_MEDIUM_32 });
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
  const obj3 = { name: "unignore", label: intl.string(userRecord(1127).t["8wXU9B"]) };
  intl = tmp3(1127).intl;
  items = [obj3];
  obj4 = {
    size: "sm",
    variant: "secondary",
    text: intl2.string(userRecord(1127).t["3GZE6a"]),
    onPress() {
      const id = userRecord.id;
      const obj = RelationshipActionCreatorsDefault;
      obj.unignoreUser(id, "ignored-users-list-mobile");
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
const result = size.fileFinishedImporting("modules/user_settings/content_and_social/native/IgnoredUserRow.tsx");

export default tmp3;
