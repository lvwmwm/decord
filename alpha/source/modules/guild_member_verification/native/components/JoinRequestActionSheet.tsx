// Module ID: 16955
// Function ID: 16956
// Name: JoinRequestActionSheet
// Dependencies: [19, 17, 5080, 1404, 1390, 1085, 21, 5091, 558, 576, 504, 8294, 8278, 4811, 8337, 4992, 6874, 4779, 587, 1103, 8339, 6125, 2113, 8295, 6836, 1200, 8342, 1126, 16956, 6305, 6840, 4788, 2]

// Module 16955 (JoinRequestActionSheet)
import react_native from "react-native" /* 17 */;
import Constants from "Constants" /* 1085 */;
import isChangelogUserDefault from "isChangelogUser" /* 2113 */;
import GuildJoinRequestAnalyticUtils from "GuildJoinRequestAnalyticUtils" /* 6125 */;
import maybeFetchUserProfileDefault from "maybeFetchUserProfile" /* 8295 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5080 */;
import UserRecord from "UserRecord" /* 1404 */;
import UserStore from "UserStore" /* 1390 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5091 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let BottomSheet;

let c10;
let c9;
const View = react_native.View;
const EMPTY_STRING_SNOWFLAKE_ID = Constants.EMPTY_STRING_SNOWFLAKE_ID;
({ jsx: c9, jsxs: c10 } = Fragment);
let closure_11 = createStyles.createStyles({ container: { flex: 1 }, profileContainer: { position: "relative" }, noPadding: { paddingHorizontal: 0 } });
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function JoinRequestActionSheet(joinRequest) {
  let bottomSheetClose;
  let bottomSheetRef;
  let first;
  let primaryColor;
  let secondaryColor;
  let theme;
  let userId;
  let tmp = joinRequest;
  let obj = joinRequest(userId[9]);
  const cResult = obj.c(59);
  joinRequest = joinRequest.joinRequest;
  closure_11();
  let user = joinRequest.user;
  userId = joinRequest.userId;
  const guildId = joinRequest.guildId;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === user) {
    let tmp7;
    let tmp8;
    if (cResult[2] === userId) {
      tmp7 = cResult[3];
      tmp8 = cResult[4];
    }
    const tmpResult = tmp(userId[10]);
    const stateFromStores = tmpResult.useStateFromStores(first, tmp7, tmp8);
    let id;
    const tmp11 = user(userId[11]);
    if (user != null) {
      id = user.id;
    }
    if (id == null) {
      id = EMPTY_STRING_SNOWFLAKE_ID;
    }
    const tmp11Result = tmp11(id);
    const tmpResult8 = tmp(userId[12]);
    const bottomSheetRef1 = tmpResult8.useBottomSheetRef();
    ({ bottomSheetRef, bottomSheetClose } = bottomSheetRef1);
    guildId.useRef(null);
    const tmpResult9 = tmp(userId[13]);
    const sharedValue = tmpResult9.useSharedValue(0);
    const obj4 = guildId;
    if (cResult[5] !== sharedValue) {
      const fn2 = function b(nativeEvent) {
        const result = sharedValue.set(nativeEvent.nativeEvent.contentOffset.y);
      };
      cResult[5] = sharedValue;
      cResult[6] = fn2;
    }
    if (cResult[7] === tmp11Result) {
      let tmp19;
      let tmp22;
      let tmp21;
      let overlay;
      if (cResult[8] === stateFromStores) {
        tmp19 = cResult[9];
      }
      ({ theme, primaryColor, secondaryColor } = user(userId[14])(tmp19));
      const _Symbol = Symbol;
      user(userId[14])(tmp19);
      if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [sharedValue];
        class F {
          constructor() {
            return sharedValue.syncProfileThemeWithUserTheme;
          }
        }
        cResult[10] = items1;
        cResult[11] = F;
        tmp22 = F;
        tmp21 = items1;
      } else {
        tmp21 = cResult[10];
        tmp22 = cResult[11];
      }
      const tmpResult10 = tmp(userId[10]);
      const stateFromStores1 = tmpResult10.useStateFromStores(tmp21, tmp22);
      const tmp25 = user(userId[15])();
      const tmpResult11 = tmp(userId[16]);
      const profileThemeValues = tmpResult11.useProfileThemeValues(theme);
      const tmpResult12 = tmp(userId[17]);
      const token = tmpResult12.useToken(tmp10(tmp2[18]).colors.INTERACTIVE_TEXT_HOVER, theme);
      if (stateFromStores1) {
        let prop;
        if (profileThemeValues != null) {
          prop = profileThemeValues.overlaySyncedWithUserTheme;
        }
        overlay = prop;
      } else if (profileThemeValues != null) {
        overlay = profileThemeValues.overlay;
      }
      const tmpResult13 = tmp(userId[17]);
      const token1 = tmpResult13.useToken(tmp10(tmp2[18]).colors.MOBILE_ACTIONSHEET_GRADIENT_BACKGROUND_DEFAULT, tmp25);
      if (cResult[12] === token1) {
        if (cResult[13] === profileThemeValues) {
          if (cResult[14] === secondaryColor) {
            if (cResult[17] === guildId) {
              if (cResult[18] === joinRequest.applicationStatus) {
                let tmp34;
                let tmp35;
                if (cResult[19] === joinRequest.userId) {
                  tmp34 = cResult[20];
                  tmp35 = cResult[21];
                }
                const effect = obj4.useEffect(tmp35, tmp34);
                class Y {
                  constructor() {
                    const obj = GuildJoinRequestAnalyticUtils;
                    const obj2 = { guildId, applicationStatus: joinRequest.applicationStatus, applicationUserId: joinRequest.userId };
                    const result = obj.trackMemberApplicationViewed(obj2);
                  }
                }
                class Q {
                  constructor() {
                    let tmp = null == stateFromStores;
                    if (!tmp) {
                      tmp = obj.isNonUserBot() && !isChangelogUserDefault(obj.id);
                      const isNonUserBotResult = obj.isNonUserBot() && !isChangelogUserDefault(obj.id);
                    }
                    if (!tmp) {
                      const obj2 = { type: "action_sheet", withMutualGuilds: true, withMutualFriends: true, dispatchWait: true, guildId };
                      const tmp7 = maybeFetchUserProfileDefault;
                      tmp7(stateFromStores.id, stateFromStores.getAvatarURL(guildId, 80), obj2);
                    }
                  }
                }
                const items2 = [guildId, stateFromStores];
                cResult[22] = guildId;
                cResult[23] = stateFromStores;
                cResult[24] = Q;
                cResult[25] = items2;
              }
            }
            class Y {
              constructor() {
                const obj = GuildJoinRequestAnalyticUtils;
                const obj2 = { guildId, applicationStatus: joinRequest.applicationStatus, applicationUserId: joinRequest.userId };
                const result = obj.trackMemberApplicationViewed(obj2);
              }
            }
            class F {
              constructor() {
                return sharedValue.syncProfileThemeWithUserTheme;
              }
            }
            tmp36[0] = guildId;
            ({ applicationStatus: tmp36[1], userId: tmp36[2] } = joinRequest);
            cResult[17] = guildId;
            cResult[18] = joinRequest.applicationStatus;
            cResult[19] = joinRequest.userId;
            cResult[20] = tmp36;
            cResult[21] = Y;
            tmp35 = Y;
            tmp34 = tmp36;
          }
        }
      }
      let tmp32 = token1;
      if (null != secondaryColor) {
        tmp32 = token1;
        if (null != profileThemeValues) {
          tmp32 = token1;
          if (null != overlay) {
            const int2hex = tmp(tmp2[19]).int2hex;
            tmp(userId[19]);
            class Y {
              constructor() {
                const obj = GuildJoinRequestAnalyticUtils;
                const obj2 = { guildId, applicationStatus: joinRequest.applicationStatus, applicationUserId: joinRequest.userId };
                const result = obj.trackMemberApplicationViewed(obj2);
              }
            }
            class Q {
              constructor() {
                let tmp = null == stateFromStores;
                if (!tmp) {
                  tmp = obj.isNonUserBot() && !isChangelogUserDefault(obj.id);
                  const isNonUserBotResult = obj.isNonUserBot() && !isChangelogUserDefault(obj.id);
                }
                if (!tmp) {
                  const obj2 = { type: "action_sheet", withMutualGuilds: true, withMutualFriends: true, dispatchWait: true, guildId };
                  const tmp7 = maybeFetchUserProfileDefault;
                  tmp7(stateFromStores.id, stateFromStores.getAvatarURL(guildId, 80), obj2);
                }
              }
            }
          }
        }
      }
      cResult[12] = token1;
      cResult[13] = profileThemeValues;
      cResult[14] = secondaryColor;
      cResult[15] = overlay;
      cResult[16] = tmp32;
    }
    let obj2 = { user: stateFromStores, displayProfile: tmp11Result };
    cResult[7] = tmp11Result;
    cResult[8] = stateFromStores;
    cResult[9] = obj2;
    tmp19 = obj2;
  }
  const fn = function y() {
    user = UserStore.getUser(userId);
    if (null == user) {
      const self = this;
      const self2 = this;
      user = new UserRecord(user);
    }
    return user;
  };
  const items3 = [user, userId];
  cResult[1] = user;
  cResult[2] = userId;
  cResult[3] = fn;
  cResult[4] = items3;
  tmp8 = items3;
  tmp7 = fn;
}) : (function JoinRequestActionSheet(joinRequest) {
  let BottomSheet2;
  let EmptyState;
  let bottomSheetClose;
  let bottomSheetRef;
  let intl;
  let items6;
  let items7;
  let obj10;
  let obj11;
  let obj13;
  let obj4;
  let obj6;
  let obj9;
  let overlay;
  let primaryColor;
  let secondaryColor;
  let theme;
  let tmp26;
  joinRequest = joinRequest.joinRequest;
  let sharedValue;
  let tmp = closure_11();
  let user = joinRequest.user;
  const userId = joinRequest.userId;
  const guildId = joinRequest.guildId;
  let obj = joinRequest(userId[10]);
  const items = [UserStore];
  const items1 = [user, userId];
  const stateFromStores = obj.useStateFromStores(items, function() {
    user = UserStore.getUser(userId);
    if (null == user) {
      const self = this;
      const self2 = this;
      user = new UserRecord(user);
    }
    return user;
  }, items1);
  let id;
  const tmp6 = user(userId[11]);
  if (user != null) {
    id = user.id;
  }
  if (id == null) {
    id = EMPTY_STRING_SNOWFLAKE_ID;
  }
  const tmp6Result = tmp6(id);
  const tmp2Result = joinRequest(userId[12]);
  const bottomSheetRef1 = tmp2Result.useBottomSheetRef();
  ({ bottomSheetRef, bottomSheetClose } = bottomSheetRef1);
  const ref = guildId.useRef(null);
  const tmp2Result8 = joinRequest(userId[13]);
  sharedValue = tmp2Result8.useSharedValue(0);
  const items2 = [sharedValue];
  const callback = guildId.useCallback((nativeEvent) => {
    const result = sharedValue.set(nativeEvent.nativeEvent.contentOffset.y);
  }, items2);
  ({ theme, secondaryColor, primaryColor } = user(userId[14])({ user: stateFromStores, displayProfile: tmp6Result }));
  user(userId[14])({ user: stateFromStores, displayProfile: tmp6Result });
  const items3 = [sharedValue];
  const tmp2Result9 = joinRequest(userId[10]);
  const stateFromStores1 = tmp2Result9.useStateFromStores(items3, () => sharedValue.syncProfileThemeWithUserTheme);
  const tmp15 = user(userId[15])();
  const tmp2Result10 = joinRequest(userId[16]);
  const profileThemeValues = tmp2Result10.useProfileThemeValues(theme);
  const tmp2Result11 = joinRequest(userId[17]);
  const token = tmp2Result11.useToken(tmp5(tmp3[18]).colors.INTERACTIVE_TEXT_HOVER, theme);
  if (stateFromStores1) {
    let prop;
    if (profileThemeValues != null) {
      prop = profileThemeValues.overlaySyncedWithUserTheme;
    }
    overlay = prop;
  } else if (profileThemeValues != null) {
    overlay = profileThemeValues.overlay;
  }
  const tmp2Result12 = joinRequest(userId[17]);
  const token1 = tmp2Result12.useToken(tmp5(tmp3[18]).colors.MOBILE_ACTIONSHEET_GRADIENT_BACKGROUND_DEFAULT, tmp15);
  let int2hexResult = token1;
  if (null != secondaryColor) {
    int2hexResult = token1;
    if (null != profileThemeValues) {
      int2hexResult = token1;
      if (null != overlay) {
        const int2hex = tmp2(tmp3[19]).int2hex;
        joinRequest(userId[19]);
        const tmp2Result14 = joinRequest(userId[20]);
        int2hexResult = int2hex(tmp2Result14.calculateOverlayedColor(secondaryColor, overlay));
      }
    }
  }
  const items4 = [guildId, , ];
  ({ applicationStatus: arr5[1], userId: arr5[2] } = joinRequest);
  const effect = obj3.useEffect(() => {
    const obj = GuildJoinRequestAnalyticUtils;
    const obj2 = { guildId, applicationStatus: joinRequest.applicationStatus, applicationUserId: joinRequest.userId };
    const result = obj.trackMemberApplicationViewed(obj2);
  }, items4);
  const items5 = [guildId, stateFromStores];
  const effect1 = obj3.useEffect(() => {
    let tmp = null == stateFromStores;
    if (!tmp) {
      tmp = obj.isNonUserBot() && !isChangelogUserDefault(obj.id);
      const isNonUserBotResult = obj.isNonUserBot() && !isChangelogUserDefault(obj.id);
    }
    if (!tmp) {
      const obj2 = { type: "action_sheet", withMutualGuilds: true, withMutualFriends: true, dispatchWait: true, guildId };
      const tmp7 = maybeFetchUserProfileDefault;
      tmp7(stateFromStores.id, stateFromStores.getAvatarURL(guildId, 80), obj2);
    }
  }, items5);
  if (null == user) {
    let obj2 = { children: closure_9(EmptyState, obj4) };
    BottomSheet = tmp2(tmp3[24]).BottomSheet;
    obj4 = { style: { marginTop: 42 }, Illustration: joinRequest(userId[26]).NoResults, body: intl.string(joinRequest(userId[27]).t.eAn6z2) };
    EmptyState = tmp2(tmp3[25]).EmptyState;
    intl = tmp2(tmp3[27]).intl;
    tmp26 = closure_9(BottomSheet, obj2);
  } else {
    const obj5 = { theme, primaryColor, secondaryColor, children: closure_10(BottomSheet2, obj6) };
    const ThemeContextProvider = tmp2(tmp3[31]).ThemeContextProvider;
    obj6 = { ref: bottomSheetRef, handleDisabled: true, scrollable: true, startExpanded: true, contentStyles: tmp.noPadding, children: items7 };
    BottomSheet2 = tmp2(tmp3[24]).BottomSheet;
    const obj7 = { scrollsToTop: false, style: items6, ref, onScroll: callback, children: closure_9(stateFromStores, obj9) };
    items6 = [tmp.container, ];
    const obj8 = { backgroundColor: int2hexResult };
    items6[1] = obj8;
    obj9 = { children: closure_9(stateFromStores, obj10) };
    obj10 = { style: tmp.profileContainer, children: closure_9(user(userId[28]), obj11) };
    const BottomSheetScrollView = tmp2(tmp3[29]).BottomSheetScrollView;
    obj11 = { joinRequest, user: stateFromStores, displayProfile: tmp6Result };
    items7 = [closure_9(BottomSheetScrollView, obj7), ];
    const obj12 = { variant: "floating", tabStyle: obj13, onPress: bottomSheetClose };
    obj13 = { backgroundColor: token };
    items7[1] = closure_9(joinRequest(userId[30]).ActionSheetHeaderBar, obj12);
    tmp26 = closure_9(ThemeContextProvider, obj5);
  }
  return tmp26;
});
const memoResult = react.memo(tmp3);
let result = size.fileFinishedImporting("modules/guild_member_verification/native/components/JoinRequestActionSheet.tsx");

export default memoResult;
export const JoinRequestActionSheet = tmp3;
