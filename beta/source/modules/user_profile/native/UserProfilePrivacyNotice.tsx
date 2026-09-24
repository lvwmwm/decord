// Module ID: 13424
// Function ID: 13425
// Name: UserProfilePrivacyNotice
// Dependencies: [32, 19, 17, 1078, 2042, 21, 4790, 580, 1190, 1119, 558, 568, 13425, 8952, 2023, 2031, 7664, 4786, 7658, 4744, 5878, 5373, 2]

// Module 13424 (UserProfilePrivacyNotice)
import c from "c" /* 568 */;
import nativeDefault from "native" /* 580 */;
import UserSettings from "UserSettings" /* 2023 */;
import useSelectedDismissibleContent from "useSelectedDismissibleContent" /* 7664 */;
import useUserIsTeen from "useUserIsTeen" /* 8952 */;
import PrivateProfilesExperiment from "PrivateProfilesExperiment" /* 13425 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const preloaded_user_settings = PRIVATE_PROFILE_INLINE_NOTICE(1190);
const dismissible_content = PRIVATE_PROFILE_INLINE_NOTICE(2031);
require = fn;
const View = fn(17).View;
const UserSettingsSections = fn(1078).UserSettingsSections;
const ContentDismissActionType = fn(2042).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4790);
let obj2 = { container: { backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_INFO, borderWidth: 1, borderColor: nativeDefault.colors.ICON_FEEDBACK_INFO, borderRadius: nativeDefault.radii.sm, padding: nativeDefault.space.PX_12, flexDirection: "row", alignItems: "flex-start", gap: nativeDefault.space.PX_8 }, icon: { flexShrink: 0, marginTop: 2 }, text: { flex: 1 }, closeButton: { flexShrink: 0 } };
let closure_9 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let PRIVATE_PROFILE_INLINE_NOTICE = require;
  let items = dependencyMap;
  const cResult = c.c(2);
  const isInPrivateProfilesExperiment = PrivateProfilesExperiment.useIsInPrivateProfilesExperiment("UserProfilePrivacyNotice");
  const userIsTeen = useUserIsTeen.useUserIsTeen();
  const ProfileVisibility = UserSettings.ProfileVisibility;
  if (isInPrivateProfilesExperiment) {
    if (userIsTeen) {
      if (tmp4 !== preloaded_user_settings.ProfileVisibility.FRIENDS_AND_ALL_GUILDS) {
        const _Symbol = Symbol;
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          PRIVATE_PROFILE_INLINE_NOTICE = dismissible_content.DismissibleContent.PRIVATE_PROFILE_INLINE_NOTICE;
          items = [PRIVATE_PROFILE_INLINE_NOTICE];
          cResult[0] = items;
          let first = items;
        } else {
          first = cResult[0];
        }
      }
    }
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [];
    cResult[1] = items1;
    let tmp5 = items1;
  } else {
    tmp5 = cResult[1];
  }
  return tmp5;
}) : (() => {
  isInPrivateProfilesExperiment = isInPrivateProfilesExperiment(userIsTeen[12]).useIsInPrivateProfilesExperiment("UserProfilePrivacyNotice");
  const obj = isInPrivateProfilesExperiment(userIsTeen[12]);
  userIsTeen = isInPrivateProfilesExperiment(userIsTeen[13]).useUserIsTeen();
  const ProfileVisibility = isInPrivateProfilesExperiment(userIsTeen[14]).ProfileVisibility;
  const setting = ProfileVisibility.useSetting();
  let items = [isInPrivateProfilesExperiment, userIsTeen, setting];
  return noop.useMemo(() => {
    if (isInPrivateProfilesExperiment) {
      if (userIsTeen) {
        if (setting !== preloaded_user_settings.ProfileVisibility.FRIENDS_AND_ALL_GUILDS) {
          const items = [dismissible_content.DismissibleContent.PRIVATE_PROFILE_INLINE_NOTICE];
        }
        return [];
      }
    }
  }, items);
});
fn(558);
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_INFO, borderWidth: 1, borderColor: nativeDefault.colors.ICON_FEEDBACK_INFO, borderRadius: nativeDefault.radii.sm, padding: nativeDefault.space.PX_12, flexDirection: "row", alignItems: "flex-start", gap: nativeDefault.space.PX_8 };
ReactCompilerGating = fn(558);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const tmp = closure_10();
  return _slicedToArray(useSelectedDismissibleContent.useSelectedDismissibleContent(tmp), 1)[0] === dismissible_content.DismissibleContent.PRIVATE_PROFILE_INLINE_NOTICE;
}) : (() => {
  const tmp = closure_10();
  return _slicedToArray(useSelectedDismissibleContent.useSelectedDismissibleContent(tmp), 1)[0] === dismissible_content.DismissibleContent.PRIVATE_PROFILE_INLINE_NOTICE;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfilePrivacyNotice.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = require("c").c(35);
  const tmp4 = closure_9();
  const obj = require("c");
  const tmp5 = closure_10();
  let num = 2;
  const tmp6 = _slicedToArray(require("useSelectedDismissibleContent").useSelectedDismissibleContent(tmp5), 2);
  _require = tmp7;
  const ProfileVisibility = require("UserSettings").ProfileVisibility;
  let str = ProfileVisibility.useSetting();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function n(children, arg1) {
      return closure_1_7(closure_0(dependencyMap[17]).Text, {
        variant: "text-sm/normal",
        color: "text-link",
        onPress() {
          return closure_1_0(closure_1_1[18]).openUserSettings({ screen: constants.DATA_AND_PRIVACY });
        },
        children
      }, arg1);
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  if (tmp6[0] !== require("dismissible_content").DismissibleContent.PRIVATE_PROFILE_INLINE_NOTICE) {
    return null;
  } else {
    if (cResult[1] === str) {
      if (cResult[2] === tmp4.container) {
        if (cResult[3] === tmp4.icon) {
          if (cResult[4] === tmp4.text) {
            if (cResult[16] === cResult[5]) {
              if (cResult[17] === tmp11) {
                if (cResult[18] === tmp12) {
                  if (cResult[19] === tmp13) {
                    if (cResult[20] === tmp14) {
                      let tmp29 = cResult[21];
                    }
                    const _Symbol2 = Symbol;
                    if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
                      const intl2 = tmp(1119).intl;
                      const stringResult = intl2.string(tmp(1119).t.WAI6xu);
                      cResult[22] = stringResult;
                      let tmp32 = stringResult;
                    } else {
                      tmp32 = cResult[22];
                    }
                    if (cResult[23] !== tmp7) {
                      class V {
                        constructor() {
                          return closure_0(ContentDismissActionType.USER_DISMISS);
                        }
                      }
                      cResult[23] = tmp7;
                      cResult[24] = V;
                    } else {
                      class V {
                        constructor() {
                          return closure_0(ContentDismissActionType.USER_DISMISS);
                        }
                      }
                    }
                    const _Symbol3 = Symbol;
                    if (cResult[25] === Symbol.for("react.memo_cache_sentinel")) {
                      class V {
                        constructor() {
                          return closure_0(ContentDismissActionType.USER_DISMISS);
                        }
                      }
                      const tmp36 = closure_7(tmp(5878).XSmallIcon, { size: "xs", color: "icon-feedback-info" });
                      cResult[25] = tmp36;
                      const tmp35 = tmp36;
                    } else {
                      class V {
                        constructor() {
                          return closure_0(ContentDismissActionType.USER_DISMISS);
                        }
                      }
                    }
                    if (cResult[26] === tmp4.closeButton) {
                      class V {
                        constructor() {
                          return closure_0(ContentDismissActionType.USER_DISMISS);
                        }
                      }
                      if (cResult[29] === tmp10) {
                        class V {
                          constructor() {
                            return closure_0(ContentDismissActionType.USER_DISMISS);
                          }
                        }
                      }
                      const obj3 = { style: tmp15, children: null };
                      const items = [tmp16, tmp29, tmp37];
                      obj3.children = items;
                      const tmp42 = closure_8(tmp10, obj3);
                      cResult[29] = tmp10;
                      cResult[30] = tmp37;
                      cResult[31] = tmp15;
                      cResult[32] = tmp16;
                      cResult[33] = tmp29;
                      cResult[34] = tmp42;
                    }
                    const obj4 = { accessibilityRole: "button", accessibilityLabel: tmp32, onPress: tmp34, style: tmp4.closeButton, children: tmp35 };
                    const tmp39 = closure_7(tmp(5373).PressableOpacity, obj4);
                    cResult[26] = tmp4.closeButton;
                    cResult[27] = tmp34;
                    cResult[28] = tmp39;
                  }
                }
              }
            }
            const obj5 = { style: cResult[7], variant: cResult[8], color: cResult[9], children: cResult[10] };
            const tmp31 = closure_7(cResult[5], obj5);
            cResult[16] = cResult[5];
            cResult[17] = cResult[7];
            cResult[18] = cResult[8];
            cResult[19] = cResult[9];
            cResult[20] = cResult[10];
            cResult[21] = tmp31;
            tmp29 = tmp31;
          }
        }
      }
    }
    if (tmp(1190).ProfileVisibility.FRIENDS_ONLY === str) {
      class V {
        constructor() {
          return closure_0(ContentDismissActionType.USER_DISMISS);
        }
      }
    } else {
      class V {
        constructor() {
          return closure_0(ContentDismissActionType.USER_DISMISS);
        }
      }
    }
    const container = tmp4.container;
    const _Symbol = Symbol;
    if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
      class V {
        constructor() {
          return closure_0(ContentDismissActionType.USER_DISMISS);
        }
      }
      const tmp19 = closure_7(tmp(4744).CircleInformationIcon, { size: "xs", color: "icon-feedback-info" });
      cResult[13] = tmp19;
      let str2 = tmp19;
    } else {
      class V {
        constructor() {
          return closure_0(ContentDismissActionType.USER_DISMISS);
        }
      }
    }
    if (cResult[14] !== tmp4.icon) {
      class V {
        constructor() {
          return closure_0(ContentDismissActionType.USER_DISMISS);
        }
      }
      const obj6 = { style: tmp4.icon, children: str2 };
      const tmp21 = closure_7(tmp18, obj6);
      cResult[14] = tmp4.icon;
      cResult[15] = tmp21;
    } else {
      class V {
        constructor() {
          return closure_0(ContentDismissActionType.USER_DISMISS);
        }
      }
    }
    const Text = tmp(4786).Text;
    const text = tmp4.text;
    const intl = tmp(1119).intl;
    const obj7 = { privacySettingsLink: first };
    const formatResult = intl.format(tmp17, obj7);
    cResult[1] = str;
    cResult[num] = tmp4.container;
    cResult[3] = tmp4.icon;
    cResult[4] = tmp4.text;
    cResult[5] = Text;
    cResult[6] = View;
    cResult[7] = text;
    str = "text-sm/normal";
    cResult[8] = "text-sm/normal";
    str2 = "text-default";
    cResult[9] = "text-default";
    cResult[10] = formatResult;
    cResult[11] = container;
    num = 12;
    cResult[12] = tmp20;
  }
}) : (() => {
  const tmp = closure_9();
  const tmp2 = closure_10();
  [tmp6, require] = useSelectedDismissibleContent.useSelectedDismissibleContent(tmp2);
  const ProfileVisibility = UserSettings.ProfileVisibility;
  const setting = ProfileVisibility.useSetting();
  const callback = noop.useCallback((children, arg1) => closure_1_7(require("Text/Text").Text, {
    variant: "text-sm/normal",
    color: "text-link",
    onPress() {
      return closure_1_0(closure_1_1[18]).openUserSettings({ screen: constants.DATA_AND_PRIVACY });
    },
    children
  }, arg1), []);
  if (tmp6 !== dismissible_content.DismissibleContent.PRIVATE_PROFILE_INLINE_NOTICE) {
    return null;
  } else {
    if (tmp3(1190).ProfileVisibility.FRIENDS_ONLY === setting) {
      let dqQ7AN = tmp3(1119).t["0UBDvq"];
    } else if (tmp3(1190).ProfileVisibility.FRIENDS_AND_SMALL_GUILDS === setting) {
      dqQ7AN = tmp3(1119).t["9AvQO/"];
    } else {
      const FRIENDS_AND_ALL_GUILDS = tmp3(1190).ProfileVisibility.FRIENDS_AND_ALL_GUILDS;
      dqQ7AN = tmp3(1119).t.dqQ7AN;
    }
    const obj2 = { style: tmp.container, children: null };
    const obj3 = { style: tmp.icon, children: closure_7(tmp3(4744).CircleInformationIcon, { size: "xs", color: "icon-feedback-info" }) };
    const items = [closure_7(View, obj3), , ];
    const obj4 = { style: tmp.text, variant: "text-sm/normal", color: "text-default", children: null };
    const intl = tmp3(1119).intl;
    const obj5 = { privacySettingsLink: callback };
    obj4.children = intl.format(dqQ7AN, obj5);
    items[1] = closure_7(tmp3(4786).Text, obj4);
    const obj6 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, style: null, children: null };
    const intl2 = tmp3(1119).intl;
    obj6.accessibilityLabel = intl2.string(tmp3(1119).t.WAI6xu);
    obj6.onPress = function onPress() {
      return _require(ContentDismissActionType.USER_DISMISS);
    };
    obj6.style = tmp.closeButton;
    obj6.children = closure_7(tmp3(5878).XSmallIcon, { size: "xs", color: "icon-feedback-info" });
    items[2] = closure_7(tmp3(5373).PressableOpacity, obj6);
    obj2.children = items;
    return closure_8(View, obj2);
  }
  const tmp5 = _slicedToArray(useSelectedDismissibleContent.useSelectedDismissibleContent(tmp2), 2);
});
export const useIsPrivacyNoticeVisible = tmp3;
