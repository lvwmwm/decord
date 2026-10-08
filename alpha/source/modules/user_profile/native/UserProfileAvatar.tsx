// Module ID: 8357
// Function ID: 8358
// Name: UserProfileAvatar
// Dependencies: [109, 19, 17, 8283, 6891, 21, 558, 576, 8343, 8358, 8290, 8361, 1126, 2]

// Module 8357 (UserProfileAvatar)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import Constants from "Constants" /* 6891 */;
import Constants2 from "Constants" /* 8283 */;
import UserProfileSharedStylesDefault from "UserProfileSharedStyles" /* 8343 */;
import openUserProfileAvatarMediaViewerDefault from "openUserProfileAvatarMediaViewer" /* 8361 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let dependencyMap, importDefault, obj1, tmp;

let c10;
let closure_12;
let tmp10;
let unpackModuleId;
const HeaderAvatarDefault = tmp10(8358);
let closure_3 = ["backgroundColor", "size", "ref"];
let closure_4 = ["animate", "user", "guildId"];
const View = react_native.View;
const TrackUserProfileActions = Constants2.TrackUserProfileActions;
const AVATAR_SIZE_VARIANT = Constants.AVATAR_SIZE_VARIANT;
({ jsx: c10, Fragment: unpackModuleId, jsxs: closure_12 } = Fragment);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function UserProfileAvatar(arg0) {
  let backgroundColor;
  let items;
  let items2;
  let ref;
  let tmp12;
  let tmp3;
  let tmp4;
  let tmp5;
  let tmp6;
  const obj = react2;
  const cResult = obj.c(22);
  if (cResult[0] !== arg0) {
    ({ backgroundColor, size, ref } = arg0);
    const tmp9 = _objectWithoutProperties(arg0, closure_3);
    cResult[0] = arg0;
    cResult[1] = backgroundColor;
    cResult[2] = tmp9;
    cResult[3] = ref;
    cResult[4] = size;
    tmp6 = size;
    tmp5 = ref;
    tmp4 = tmp9;
    tmp3 = backgroundColor;
  } else {
    tmp3 = cResult[1];
    tmp4 = cResult[2];
    tmp5 = cResult[3];
    tmp6 = cResult[4];
  }
  if (undefined === tmp6) {
    tmp6 = AVATAR_SIZE_VARIANT;
  }
  const tmp11 = UserProfileSharedStylesDefault();
  if (cResult[5] !== tmp3) {
    const obj2 = { backgroundColor: tmp3 };
    cResult[5] = tmp3;
    cResult[6] = obj2;
    tmp12 = obj2;
  } else {
    tmp12 = cResult[6];
  }
  if (cResult[7] === tmp11.avatarBackground) {
    if (cResult[8] === tmp11.avatarPosition) {
      let tmp13;
      if (cResult[9] === tmp12) {
        tmp13 = cResult[10];
      }
      if (cResult[11] === tmp11.avatar) {
        let tmp15;
        if (cResult[12] === tmp11.avatarPosition) {
          tmp15 = cResult[13];
        }
        if (cResult[14] === tmp4) {
          if (cResult[15] === tmp5) {
            if (cResult[16] === tmp6) {
              let tmp16;
              if (cResult[17] === tmp15) {
                tmp16 = cResult[18];
              }
              if (cResult[19] === tmp13) {
                let tmp23;
                if (cResult[20] === tmp16) {
                  tmp23 = cResult[21];
                }
                return tmp23;
              }
              const obj3 = { children: items };
              items = [tmp13, tmp16];
              const tmp26 = closure_12(unpackModuleId, obj3);
              cResult[19] = tmp13;
              cResult[20] = tmp16;
              cResult[21] = tmp26;
              tmp23 = tmp26;
            }
          }
        }
        const obj4 = { ref: tmp5, style: tmp15, size: tmp6 };
        const tmp10Result = HeaderAvatarDefault;
        const merged = Object.assign(tmp4);
        const tmp22 = authStore(tmp10Result, obj4);
        cResult[14] = tmp4;
        cResult[15] = tmp5;
        cResult[16] = tmp6;
        cResult[17] = tmp15;
        cResult[18] = tmp22;
        tmp16 = tmp22;
      }
      const items1 = [, ];
      ({ avatar: arr2[0], avatarPosition: arr2[1] } = tmp11);
      cResult[11] = tmp11.avatar;
      cResult[12] = tmp11.avatarPosition;
      cResult[13] = items1;
      tmp15 = items1;
    }
  }
  const obj5 = { style: items2 };
  items2 = [, , ];
  ({ avatarBackground: arr[0], avatarPosition: arr[1] } = tmp11);
  items2[2] = tmp12;
  const tmp14 = authStore(View, obj5);
  cResult[7] = tmp11.avatarBackground;
  cResult[8] = tmp11.avatarPosition;
  cResult[9] = tmp12;
  cResult[10] = tmp14;
  tmp13 = tmp14;
}) : (function UserProfileAvatar(size) {
  let items;
  let items1;
  let items2;
  size = size.size;
  const backgroundColor = size.backgroundColor;
  if (size === undefined) {
    size = AVATAR_SIZE_VARIANT;
  }
  const ref = size.ref;
  const merged = Object.assign(size, Object.assign({ backgroundColor: 0, size: 0, ref: 0 }));
  const tmp2 = UserProfileSharedStylesDefault();
  const obj2 = { style: items };
  items = [, , ];
  const obj = { children: items1 };
  ({ avatarBackground: arr[0], avatarPosition: arr[1] } = tmp2);
  items[2] = { backgroundColor };
  items1 = [authStore(View, obj2), ];
  const obj3 = { ref, style: items2, size };
  items2 = [, ];
  ({ avatar: arr3[0], avatarPosition: arr3[1] } = tmp2);
  const tmp3 = HeaderAvatarDefault;
  const merged1 = Object.assign(merged);
  items1[1] = authStore(tmp3, obj3);
  return closure_12(unpackModuleId, obj);
});
let closure_13 = tmp3;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function OpenableUserProfileAvatar(guildId) {
  let _require;
  let animate;
  let obj2;
  let tmp5;
  let tmp6;
  let trackUserProfileAction;
  let user;
  let obj = require("react");
  const cResult = obj.c(23);
  if (cResult[0] !== guildId) {
    ({ animate, user } = guildId);
    importDefault = user;
    guildId = guildId.guildId;
    _require = guildId;
    const tmp9 = _objectWithoutProperties(guildId, trackUserProfileAction);
    cResult[0] = guildId;
    cResult[1] = guildId;
    cResult[2] = tmp9;
    cResult[3] = animate;
    cResult[4] = user;
    obj2 = user;
    tmp6 = animate;
    tmp5 = tmp9;
  } else {
    _require = cResult[1];
    tmp5 = cResult[2];
    tmp6 = cResult[3];
    importDefault = cResult[4];
  }
  dependencyMap = tmp10;
  const ref = react.useRef(null);
  const tmpResult = require("UserProfileAnalyticsContext");
  trackUserProfileAction = tmpResult.useUserProfileAnalyticsContext().trackUserProfileAction;
  if (cResult[5] === tmp4) {
    let tmp12;
    if (cResult[6] === obj2) {
      tmp12 = cResult[7];
    }
    if (cResult[8] === (undefined === tmp6 || tmp6)) {
      if (cResult[9] === tmp4) {
        if (cResult[10] === trackUserProfileAction) {
          let accessibilityLabel;
          class C {
            constructor() {
              obj = { action: TrackUserProfileActions.VIEW_AVATAR };
              tmp = trackUserProfileAction(obj);
              obj1 = { user: closure_1, guildId: closure_0, animate: closure_2, originViewOrOriginLayout: closure_3.current };
              tmp2 = closure_1(closure_2[11])(obj1);
              return;
            }
          }
          if (cResult[13] === tmp12) {
            let tmp16;
            if (cResult[14] === tmp5) {
              tmp16 = cResult[15];
            }
            if (cResult[16] === (undefined === tmp6 || tmp6)) {
              if (cResult[17] === tmp4) {
                if (cResult[18] === tmp5) {
                  if (cResult[19] === tmp15) {
                    if (cResult[20] === tmp16) {
                      let tmp17;
                      if (cResult[21] === obj2) {
                        tmp17 = cResult[22];
                      }
                      return tmp17;
                    }
                  }
                }
              }
            }
            class C {
              constructor() {
                obj = { action: TrackUserProfileActions.VIEW_AVATAR };
                tmp = trackUserProfileAction(obj);
                obj1 = { user: closure_1, guildId: closure_0, animate: closure_2, originViewOrOriginLayout: closure_3.current };
                tmp2 = closure_1(closure_2[11])(obj1);
                return;
              }
            }
            const obj3 = { ref, animate: undefined === tmp6 || tmp6, user: obj2, guildId: tmp4, onPress: tmp15, accessibilityLabel: tmp16 };
            const merged = Object.assign(tmp5);
            const tmp22 = closure_10(closure_13, obj3);
            cResult[16] = undefined === tmp6 || tmp6;
            cResult[17] = tmp4;
            cResult[18] = tmp5;
            cResult[19] = tmp15;
            cResult[20] = tmp16;
            cResult[21] = obj2;
            cResult[22] = tmp22;
            tmp17 = tmp22;
          }
          if (tmp12) {
            const string = tmp(1126).intl.string;
            class C {
              constructor() {
                obj = { action: TrackUserProfileActions.VIEW_AVATAR };
                tmp = trackUserProfileAction(obj);
                obj1 = { user: closure_1, guildId: closure_0, animate: closure_2, originViewOrOriginLayout: closure_3.current };
                tmp2 = closure_1(closure_2[11])(obj1);
                return;
              }
            }
          } else {
            accessibilityLabel = tmp5.accessibilityLabel;
          }
          cResult[13] = tmp12;
          cResult[14] = tmp5;
          cResult[15] = accessibilityLabel;
          tmp16 = accessibilityLabel;
        }
      }
    }
    class C {
      constructor() {
        obj = { action: TrackUserProfileActions.VIEW_AVATAR };
        tmp = trackUserProfileAction(obj);
        obj1 = { user: closure_1, guildId: closure_0, animate: closure_2, originViewOrOriginLayout: closure_3.current };
        tmp2 = closure_1(closure_2[11])(obj1);
        return;
      }
    }
    cResult[8] = undefined === tmp6 || tmp6;
    cResult[9] = tmp4;
    cResult[10] = trackUserProfileAction;
    cResult[11] = obj2;
    cResult[12] = C;
  }
  const tmp13 = null != obj2.avatar || obj2.hasAvatarForGuild(tmp4);
  cResult[5] = tmp4;
  cResult[6] = obj2;
  cResult[7] = tmp13;
  tmp12 = tmp13;
}) : (function OpenableUserProfileAvatar(animate) {
  let accessibilityLabel;
  let tmp10;
  let flag = animate.animate;
  if (flag === undefined) {
    flag = true;
  }
  const user = animate.user;
  guildId = animate.guildId;
  const merged = Object.assign(animate, Object.assign({ animate: 0, user: 0, guildId: 0 }));
  let obj = react;
  const ref = react.useRef(null);
  let obj2 = flag(guildId[10]);
  const trackUserProfileAction = obj2.useUserProfileAnalyticsContext().trackUserProfileAction;
  const tmp5 = null != user.avatar || user.hasAvatarForGuild(guildId);
  const items = [flag, guildId, trackUserProfileAction, user];
  const obj3 = { ref, animate: flag, user, guildId, onPress: tmp10, accessibilityLabel };
  const callback = obj.useCallback(() => {
    const obj = { action: TrackUserProfileActions.VIEW_AVATAR };
    trackUserProfileAction(obj);
    const obj2 = { user, guildId, animate: flag, originViewOrOriginLayout: ref.current };
    openUserProfileAvatarMediaViewerDefault(obj2);
  }, items);
  const merged1 = Object.assign(merged);
  tmp10 = undefined;
  const tmp7 = closure_10;
  const tmp8 = closure_13;
  if (tmp5) {
    tmp10 = callback;
  }
  if (tmp5) {
    const intl = tmp3(tmp4[12]).intl;
    accessibilityLabel = intl.string(tmp3(tmp4[12]).t.xB7MI3);
  } else {
    accessibilityLabel = merged.accessibilityLabel;
  }
  return tmp7(tmp8, obj3);
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileAvatar.tsx");

export default tmp3;
export const OpenableUserProfileAvatar = tmp4;
