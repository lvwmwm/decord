// Module ID: 12668
// Function ID: 12669
// Name: UserProfilePrivacyNotice
// Dependencies: [32, 19, 17, 1086, 2048, 21, 4837, 588, 1198, 1127, 558, 576, 12669, 8101, 2027, 2035, 6807, 4833, 6801, 4788, 5940, 5436, 2]

// Module 12668 (UserProfilePrivacyNotice)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 588 */;
import Constants from "Constants" /* 1086 */;
import intl3 from "intl" /* 1127 */;
import preloaded_user_settings from "preloaded_user_settings" /* 1198 */;
import UserSettings from "UserSettings" /* 2027 */;
import dismissible_content from "dismissible_content" /* 2035 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2048 */;
import CircleInformationIcon from "CircleInformationIcon" /* 4788 */;
import XSmallIcon from "XSmallIcon" /* 5940 */;
import useSelectedDismissibleContent from "useSelectedDismissibleContent" /* 6807 */;
import useUserIsTeen from "useUserIsTeen" /* 8101 */;
import PrivateProfilesExperiment from "PrivateProfilesExperiment" /* 12669 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4837 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let metroImportAll;
let metroImportDefault;
let obj2;
const View = react_native.View;
const UserSettingsSections = Constants.UserSettingsSections;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let obj = { container: obj2, icon: { flexShrink: 0, marginTop: 2 }, text: { flex: 1 }, closeButton: { flexShrink: 0 } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_INFO, borderWidth: 1, borderColor: nativeDefault.colors.ICON_FEEDBACK_INFO, borderRadius: nativeDefault.radii.sm, padding: nativeDefault.space.PX_12, flexDirection: "row", alignItems: "flex-start", gap: nativeDefault.space.PX_8 };
let closure_9 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let tmp7;
  const obj = react2;
  const cResult = obj.c(2);
  const obj2 = PrivateProfilesExperiment;
  const isInPrivateProfilesExperiment = obj2.useIsInPrivateProfilesExperiment("UserProfilePrivacyNotice");
  const obj3 = useUserIsTeen;
  const userIsTeen = obj3.useUserIsTeen();
  const ProfileVisibility = UserSettings.ProfileVisibility;
  if (isInPrivateProfilesExperiment) {
    if (userIsTeen) {
      if (tmp6 !== preloaded_user_settings.ProfileVisibility.FRIENDS_AND_ALL_GUILDS) {
        let first;
        const _Symbol = Symbol;
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [dismissible_content.DismissibleContent.PRIVATE_PROFILE_INLINE_NOTICE];
          cResult[0] = items;
          first = items;
        } else {
          first = cResult[0];
        }
        tmp7 = first;
      }
      return tmp7;
    }
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [];
    cResult[1] = items1;
    tmp7 = items1;
  } else {
    tmp7 = cResult[1];
  }
}) : (() => {
  let isInPrivateProfilesExperiment;
  let userIsTeen;
  const obj = isInPrivateProfilesExperiment(userIsTeen[12]);
  isInPrivateProfilesExperiment = obj.useIsInPrivateProfilesExperiment("UserProfilePrivacyNotice");
  const obj2 = isInPrivateProfilesExperiment(userIsTeen[13]);
  userIsTeen = obj2.useUserIsTeen();
  const ProfileVisibility = isInPrivateProfilesExperiment(userIsTeen[14]).ProfileVisibility;
  const setting = ProfileVisibility.useSetting();
  let items = [isInPrivateProfilesExperiment, userIsTeen, setting];
  return react.useMemo(() => {
    const tmp = isInPrivateProfilesExperiment;
    if (tmp) {
      const tmp2 = userIsTeen;
      if (tmp2) {
        const tmp4 = require;
        if (setting !== preloaded_user_settings.ProfileVisibility.FRIENDS_AND_ALL_GUILDS) {
          const items = [tmp4(2035).DismissibleContent.PRIVATE_PROFILE_INLINE_NOTICE];
        }
        return [];
      }
    }
  }, items);
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const tmp = closure_10();
  const obj = useSelectedDismissibleContent;
  return _slicedToArray(obj.useSelectedDismissibleContent(tmp), 1)[0] === dismissible_content.DismissibleContent.PRIVATE_PROFILE_INLINE_NOTICE;
}) : (() => {
  const tmp = closure_10();
  const obj = useSelectedDismissibleContent;
  return _slicedToArray(obj.useSelectedDismissibleContent(tmp), 1)[0] === dismissible_content.DismissibleContent.PRIVATE_PROFILE_INLINE_NOTICE;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let closure_0;
  let first1;
  let items;
  let obj = require("react");
  const cResult = obj.c(35);
  const tmp4 = closure_9();
  const tmp5 = closure_10();
  let obj2 = require("useSelectedDismissibleContent");
  const tmp6 = _slicedToArray(obj2.useSelectedDismissibleContent(tmp5), 2);
  _require = tmp8;
  const first = tmp6[0];
  const ProfileVisibility = require("UserSettings").ProfileVisibility;
  const setting = ProfileVisibility.useSetting();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function n(children, arg1) {
      let obj = {
        variant: "text-sm/normal",
        color: "text-link",
        onPress() {
          const obj = closure_1_0(closure_1_1[18]);
          const obj2 = { screen: constants.DATA_AND_PRIVACY };
          return obj.openUserSettings(obj2);
        },
        children
      };
      return closure_1_7(closure_0(dependencyMap[17]).Text, obj, arg1);
    };
    cResult[0] = fn;
    first1 = fn;
  } else {
    first1 = cResult[0];
  }
  if (first !== require("dismissible_content").DismissibleContent.PRIVATE_PROFILE_INLINE_NOTICE) {
    return null;
  } else {
    let tmp19;
    if (cResult[1] === setting) {
      if (cResult[2] === tmp4.container) {
        if (cResult[3] === tmp4.icon) {
          let tmp11;
          let tmp12;
          let tmp13;
          let str;
          let str2;
          let tmp14;
          let tmp15;
          let tmp16;
          if (cResult[4] === tmp4.text) {
            tmp11 = cResult[5];
            tmp12 = cResult[6];
            tmp13 = cResult[7];
            str = cResult[8];
            str2 = cResult[9];
            tmp14 = cResult[10];
            tmp15 = cResult[11];
            tmp16 = cResult[12];
          }
          if (cResult[16] === tmp11) {
            if (cResult[17] === tmp13) {
              if (cResult[18] === str) {
                if (cResult[19] === str2) {
                  let tmp24;
                  let tmp27;
                  let tmp30;
                  if (cResult[20] === tmp14) {
                    tmp24 = cResult[21];
                  }
                  const _Symbol2 = Symbol;
                  if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
                    const intl2 = tmp(1127).intl;
                    const stringResult = intl2.string(require("intl").t.WAI6xu);
                    cResult[22] = stringResult;
                    tmp27 = stringResult;
                  } else {
                    tmp27 = cResult[22];
                  }
                  if (cResult[23] !== tmp6[1]) {
                    class V {
                      constructor() {
                        return closure_0(ContentDismissActionType.USER_DISMISS);
                      }
                    }
                    cResult[23] = tmp6[1];
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
                    const tmp31 = closure_7(require("XSmallIcon").XSmallIcon, { size: "xs", color: "icon-feedback-info" });
                    cResult[25] = tmp31;
                    tmp30 = tmp31;
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
                    if (cResult[29] === tmp12) {
                      class V {
                        constructor() {
                          return closure_0(ContentDismissActionType.USER_DISMISS);
                        }
                      }
                    }
                    const obj3 = { style: tmp15, children: items };
                    items = [tmp16, tmp24, tmp32];
                    cResult[29] = tmp12;
                    cResult[30] = tmp32;
                    cResult[31] = tmp15;
                    cResult[32] = tmp16;
                    cResult[33] = tmp24;
                    cResult[34] = closure_8(tmp12, obj3);
                    const tmp37 = closure_8(tmp12, obj3);
                  }
                  const obj4 = { accessibilityRole: "button", accessibilityLabel: tmp27, onPress: tmp29, style: tmp4.closeButton, children: tmp30 };
                  cResult[26] = tmp4.closeButton;
                  cResult[27] = tmp29;
                  cResult[28] = closure_7(require("Pressables").PressableOpacity, obj4);
                  const tmp34 = closure_7(require("Pressables").PressableOpacity, obj4);
                }
              }
            }
          }
          const obj5 = { style: tmp13, variant: str, color: str2, children: tmp14 };
          const tmp26 = closure_7(tmp11, obj5);
          cResult[16] = tmp11;
          cResult[17] = tmp13;
          cResult[18] = str;
          cResult[19] = str2;
          cResult[20] = tmp14;
          cResult[21] = tmp26;
          tmp24 = tmp26;
        }
      }
    }
    if (require("preloaded_user_settings").ProfileVisibility.FRIENDS_ONLY === setting) {
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
      const tmp20 = closure_7(require("CircleInformationIcon").CircleInformationIcon, { size: "xs", color: "icon-feedback-info" });
      cResult[13] = tmp20;
      tmp19 = tmp20;
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
      const obj6 = { style: tmp4.icon, children: tmp19 };
      cResult[14] = tmp4.icon;
      cResult[15] = closure_7(View, obj6);
      const tmp22 = closure_7(View, obj6);
    } else {
      class V {
        constructor() {
          return closure_0(ContentDismissActionType.USER_DISMISS);
        }
      }
    }
    const Text = tmp(4833).Text;
    const text = tmp4.text;
    const intl = tmp(1127).intl;
    const obj7 = { privacySettingsLink: first1 };
    const formatResult = intl.format(tmp17, obj7);
    cResult[1] = setting;
    cResult[2] = tmp4.container;
    cResult[3] = tmp4.icon;
    cResult[4] = tmp4.text;
    cResult[5] = Text;
    cResult[6] = View;
    cResult[7] = text;
    cResult[8] = "text-sm/normal";
    cResult[9] = "text-default";
    cResult[10] = formatResult;
    cResult[11] = container;
    cResult[12] = tmp21;
    tmp16 = tmp21;
    tmp15 = container;
    tmp14 = formatResult;
    str2 = "text-default";
    str = "text-sm/normal";
    tmp13 = text;
    tmp12 = tmp18;
    tmp11 = Text;
  }
}) : (() => {
  let intl;
  let intl2;
  let items;
  let obj5;
  let require;
  let tmp6;
  const tmp = closure_9();
  const tmp2 = closure_10();
  let obj = useSelectedDismissibleContent;
  [tmp6, require] = obj.useSelectedDismissibleContent(tmp2);
  _slicedToArray(obj.useSelectedDismissibleContent(tmp2), 2);
  const ProfileVisibility = UserSettings.ProfileVisibility;
  const setting = ProfileVisibility.useSetting();
  const callback = react.useCallback((children, arg1) => {
    let obj = {
      variant: "text-sm/normal",
      color: "text-link",
      onPress() {
        const obj = closure_1_0(closure_1_1[18]);
        const obj2 = { screen: constants.DATA_AND_PRIVACY };
        return obj.openUserSettings(obj2);
      },
      children
    };
    return closure_1_7(require("Text/Text").Text, obj, arg1);
  }, []);
  if (tmp6 !== dismissible_content.DismissibleContent.PRIVATE_PROFILE_INLINE_NOTICE) {
    return null;
  } else {
    let dqQ7AN;
    if (preloaded_user_settings.ProfileVisibility.FRIENDS_ONLY === setting) {
      dqQ7AN = tmp3(1127).t["0UBDvq"];
    } else if (preloaded_user_settings.ProfileVisibility.FRIENDS_AND_SMALL_GUILDS === setting) {
      dqQ7AN = tmp3(1127).t["9AvQO/"];
    } else {
      const FRIENDS_AND_ALL_GUILDS = tmp3(1198).ProfileVisibility.FRIENDS_AND_ALL_GUILDS;
      dqQ7AN = tmp3(1127).t.dqQ7AN;
    }
    let obj2 = { style: tmp.container, children: items };
    const obj3 = { style: tmp.icon, children: closure_7(CircleInformationIcon.CircleInformationIcon, { size: "xs", color: "icon-feedback-info" }) };
    items = [closure_7(View, obj3), , ];
    const obj4 = { style: tmp.text, variant: "text-sm/normal", color: "text-default", children: intl.format(dqQ7AN, obj5) };
    const Text = tmp3(4833).Text;
    intl = tmp3(1127).intl;
    obj5 = { privacySettingsLink: callback };
    items[1] = closure_7(Text, obj4);
    const obj6 = {
      accessibilityRole: "button",
      accessibilityLabel: intl2.string(intl3.t.WAI6xu),
      onPress() {
          return _require(ContentDismissActionType.USER_DISMISS);
        },
      style: tmp.closeButton,
      children: closure_7(XSmallIcon.XSmallIcon, { size: "xs", color: "icon-feedback-info" })
    };
    const PressableOpacity = tmp3(5436).PressableOpacity;
    intl2 = tmp3(1127).intl;
    items[2] = closure_7(PressableOpacity, obj6);
    return closure_8(View, obj2);
  }
});
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfilePrivacyNotice.tsx");

export default tmp4;
export const useIsPrivacyNoticeVisible = tmp3;
