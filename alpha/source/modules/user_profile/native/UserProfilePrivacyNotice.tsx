// Module ID: 14987
// Function ID: 14988
// Name: UserProfilePrivacyNotice
// Dependencies: [32, 19, 17, 1072, 4860, 21, 5014, 575, 1196, 1113, 8368, 4839, 4847, 7569, 5624, 7563, 5735, 6980, 7054, 2]
// Exports: default, useIsPrivacyNoticeVisible

// Module 14987 (UserProfilePrivacyNotice)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import intl3 from "intl" /* 1113 */;
import preloaded_user_settings from "preloaded_user_settings" /* 1196 */;
import UserSettings from "UserSettings" /* 4839 */;
import dismissible_content from "dismissible_content" /* 4847 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 4860 */;
import Text_Text from "Text/Text" /* 5624 */;
import CircleInformationIcon from "CircleInformationIcon" /* 5735 */;
import XSmallIcon from "XSmallIcon" /* 7054 */;
import useSelectedDismissibleContent from "useSelectedDismissibleContent" /* 7569 */;
import useUserIsTeen from "useUserIsTeen" /* 8368 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5014 */;
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
  let obj6;
  let tmp8;
  const tmp = closure_9();
  let obj = useUserIsTeen;
  const userIsTeen = obj.useUserIsTeen();
  const ProfileVisibility = UserSettings.ProfileVisibility;
  const setting = ProfileVisibility.useSetting();
  const items = [userIsTeen, setting];
  const memo = react.useMemo(() => {
    const tmp = userIsTeen;
    if (tmp) {
      const tmp3 = require;
      if (setting !== preloaded_user_settings.ProfileVisibility.FRIENDS_AND_ALL_GUILDS) {
        const items = [tmp3(4847).DismissibleContent.PRIVATE_PROFILE_INLINE_NOTICE];
      }
      return [];
    }
  }, items);
  let obj2 = useSelectedDismissibleContent;
  [tmp8, require] = obj2.useSelectedDismissibleContent(memo);
  _slicedToArray(obj2.useSelectedDismissibleContent(memo), 2);
  const ProfileVisibility2 = UserSettings.ProfileVisibility;
  const setting1 = ProfileVisibility2.useSetting();
  const callback = react.useCallback((children, arg1) => {
    let obj = {
      variant: "text-sm/normal",
      color: "text-link",
      onPress() {
        const obj = closure_1_0(closure_1_1[15]);
        const obj2 = { screen: constants.DATA_AND_PRIVACY };
        return obj.openUserSettings(obj2);
      },
      children
    };
    return closure_1_7(Text_Text.Text, obj, arg1);
  }, []);
  if (tmp8 !== dismissible_content.DismissibleContent.PRIVATE_PROFILE_INLINE_NOTICE) {
    return null;
  } else {
    let dqQ7AN;
    if (preloaded_user_settings.ProfileVisibility.FRIENDS_ONLY === setting1) {
      dqQ7AN = tmp2(1113).t["0UBDvq"];
    } else if (preloaded_user_settings.ProfileVisibility.FRIENDS_AND_SMALL_GUILDS === setting1) {
      dqQ7AN = tmp2(1113).t["9AvQO/"];
    } else {
      const FRIENDS_AND_ALL_GUILDS = tmp2(1196).ProfileVisibility.FRIENDS_AND_ALL_GUILDS;
      dqQ7AN = tmp2(1113).t.dqQ7AN;
    }
    const obj3 = { style: tmp.container, children: items1 };
    const obj4 = { style: tmp.icon, children: closure_7(CircleInformationIcon.CircleInformationIcon, { size: "xs", color: "icon-feedback-info" }) };
    items1 = [closure_7(View, obj4), , ];
    const obj5 = { style: tmp.text, variant: "text-sm/normal", color: "text-default", children: intl.format(dqQ7AN, obj6) };
    const Text = tmp2(5624).Text;
    intl = tmp2(1113).intl;
    obj6 = { privacySettingsLink: callback };
    items1[1] = closure_7(Text, obj5);
    const obj7 = {
      accessibilityRole: "button",
      accessibilityLabel: intl2.string(intl3.t.WAI6xu),
      onPress() {
          return require(ContentDismissActionType.USER_DISMISS);
        },
      style: tmp.closeButton,
      children: closure_7(XSmallIcon.XSmallIcon, { size: "xs", color: "icon-feedback-info" })
    };
    const PressableOpacity = tmp2(6980).PressableOpacity;
    intl2 = tmp2(1113).intl;
    items1[2] = closure_7(PressableOpacity, obj7);
    return closure_8(View, obj3);
  }
};
export function useIsPrivacyNoticeVisible() {
  let setting;
  let userIsTeen;
  const obj = userIsTeen(setting[10]);
  userIsTeen = obj.useUserIsTeen();
  const ProfileVisibility = userIsTeen(setting[11]).ProfileVisibility;
  setting = ProfileVisibility.useSetting();
  let items = [userIsTeen, setting];
  const memo = react.useMemo(() => {
    const tmp = userIsTeen;
    if (tmp) {
      const tmp3 = require;
      if (setting !== preloaded_user_settings.ProfileVisibility.FRIENDS_AND_ALL_GUILDS) {
        const items = [tmp3(4847).DismissibleContent.PRIVATE_PROFILE_INLINE_NOTICE];
      }
      return [];
    }
  }, items);
  const obj2 = userIsTeen(setting[13]);
  return _slicedToArray(obj2.useSelectedDismissibleContent(memo), 1)[0] === userIsTeen(setting[12]).DismissibleContent.PRIVATE_PROFILE_INLINE_NOTICE;
}
