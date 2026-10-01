// Module ID: 12666
// Function ID: 12667
// Name: UserProfilePrivacyNotice
// Dependencies: [32, 19, 17, 1074, 2042, 21, 4836, 576, 1186, 1115, 12667, 8104, 2021, 2029, 6806, 4832, 6800, 4787, 5435, 5992, 2]
// Exports: default, useIsPrivacyNoticeVisible

// Module 12666 (UserProfilePrivacyNotice)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import intl3 from "intl" /* 1115 */;
import preloaded_user_settings from "preloaded_user_settings" /* 1186 */;
import UserSettings from "UserSettings" /* 2021 */;
import dismissible_content from "dismissible_content" /* 2029 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2042 */;
import CircleInformationIcon from "CircleInformationIcon" /* 4787 */;
import Text_Text from "Text/Text" /* 4832 */;
import XSmallIcon from "XSmallIcon" /* 5992 */;
import useSelectedDismissibleContent from "useSelectedDismissibleContent" /* 6806 */;
import useUserIsTeen from "useUserIsTeen" /* 8104 */;
import PrivateProfilesExperiment from "PrivateProfilesExperiment" /* 12667 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

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
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfilePrivacyNotice.tsx");

export default function UserProfilePrivacyNotice() {
  let intl;
  let intl2;
  let items1;
  let obj7;
  let tmp9;
  const tmp = closure_9();
  let obj = PrivateProfilesExperiment;
  const isInPrivateProfilesExperiment = obj.useIsInPrivateProfilesExperiment("UserProfilePrivacyNotice");
  let obj2 = useUserIsTeen;
  const userIsTeen = obj2.useUserIsTeen();
  const ProfileVisibility = UserSettings.ProfileVisibility;
  const setting = ProfileVisibility.useSetting();
  const items = [isInPrivateProfilesExperiment, userIsTeen, setting];
  const memo = react.useMemo(() => {
    const tmp = isInPrivateProfilesExperiment;
    if (tmp) {
      const tmp2 = userIsTeen;
      if (tmp2) {
        const tmp4 = require;
        if (setting !== preloaded_user_settings.ProfileVisibility.FRIENDS_AND_ALL_GUILDS) {
          const items = [tmp4(2029).DismissibleContent.PRIVATE_PROFILE_INLINE_NOTICE];
        }
        return [];
      }
    }
  }, items);
  const obj3 = useSelectedDismissibleContent;
  [tmp9, require] = obj3.useSelectedDismissibleContent(memo);
  _slicedToArray(obj3.useSelectedDismissibleContent(memo), 2);
  const ProfileVisibility2 = UserSettings.ProfileVisibility;
  const setting1 = ProfileVisibility2.useSetting();
  const callback = react.useCallback((children, arg1) => {
    let obj = {
      variant: "text-sm/normal",
      color: "text-link",
      onPress() {
        const obj = closure_1_0(closure_1_1[16]);
        const obj2 = { screen: constants.DATA_AND_PRIVACY };
        return obj.openUserSettings(obj2);
      },
      children
    };
    return closure_1_7(Text_Text.Text, obj, arg1);
  }, []);
  if (tmp9 !== dismissible_content.DismissibleContent.PRIVATE_PROFILE_INLINE_NOTICE) {
    return null;
  } else {
    let dqQ7AN;
    if (preloaded_user_settings.ProfileVisibility.FRIENDS_ONLY === setting1) {
      dqQ7AN = tmp2(1115).t["0UBDvq"];
    } else if (preloaded_user_settings.ProfileVisibility.FRIENDS_AND_SMALL_GUILDS === setting1) {
      dqQ7AN = tmp2(1115).t["9AvQO/"];
    } else {
      const FRIENDS_AND_ALL_GUILDS = tmp2(1186).ProfileVisibility.FRIENDS_AND_ALL_GUILDS;
      dqQ7AN = tmp2(1115).t.dqQ7AN;
    }
    const obj4 = { style: tmp.container, children: items1 };
    const obj5 = { style: tmp.icon, children: closure_7(CircleInformationIcon.CircleInformationIcon, { size: "xs", color: "icon-feedback-info" }) };
    items1 = [closure_7(View, obj5), , ];
    const obj6 = { style: tmp.text, variant: "text-sm/normal", color: "text-default", children: intl.format(dqQ7AN, obj7) };
    const Text = tmp2(4832).Text;
    intl = tmp2(1115).intl;
    obj7 = { privacySettingsLink: callback };
    items1[1] = closure_7(Text, obj6);
    const obj8 = {
      accessibilityRole: "button",
      accessibilityLabel: intl2.string(intl3.t.WAI6xu),
      onPress() {
          return require(ContentDismissActionType.USER_DISMISS);
        },
      style: tmp.closeButton,
      children: closure_7(XSmallIcon.XSmallIcon, { size: "xs", color: "icon-feedback-info" })
    };
    const PressableOpacity = tmp2(5435).PressableOpacity;
    intl2 = tmp2(1115).intl;
    items1[2] = closure_7(PressableOpacity, obj8);
    return closure_8(View, obj4);
  }
};
export const useIsPrivacyNoticeVisible = function useIsPrivacyNoticeVisible() {
  let isInPrivateProfilesExperiment;
  let userIsTeen;
  const obj = isInPrivateProfilesExperiment(userIsTeen[10]);
  isInPrivateProfilesExperiment = obj.useIsInPrivateProfilesExperiment("UserProfilePrivacyNotice");
  const obj2 = isInPrivateProfilesExperiment(userIsTeen[11]);
  userIsTeen = obj2.useUserIsTeen();
  const ProfileVisibility = isInPrivateProfilesExperiment(userIsTeen[12]).ProfileVisibility;
  const setting = ProfileVisibility.useSetting();
  let items = [isInPrivateProfilesExperiment, userIsTeen, setting];
  const memo = react.useMemo(() => {
    const tmp = isInPrivateProfilesExperiment;
    if (tmp) {
      const tmp2 = userIsTeen;
      if (tmp2) {
        const tmp4 = require;
        if (setting !== preloaded_user_settings.ProfileVisibility.FRIENDS_AND_ALL_GUILDS) {
          const items = [tmp4(2029).DismissibleContent.PRIVATE_PROFILE_INLINE_NOTICE];
        }
        return [];
      }
    }
  }, items);
  const obj3 = isInPrivateProfilesExperiment(userIsTeen[14]);
  return setting(obj3.useSelectedDismissibleContent(memo), 1)[0] === isInPrivateProfilesExperiment(userIsTeen[13]).DismissibleContent.PRIVATE_PROFILE_INLINE_NOTICE;
};
