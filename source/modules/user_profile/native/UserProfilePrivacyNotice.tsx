// Module ID: 11996
// Function ID: 92698
// Name: usePrivacyNoticeContentTypes
// Dependencies: []
// Exports: default, useIsPrivacyNoticeVisible

// Module 11996 (usePrivacyNoticeContentTypes)
function usePrivacyNoticeContentTypes() {
  const isInPrivateProfilesExperiment = arg1(dependencyMap[10]).useIsInPrivateProfilesExperiment("UserProfilePrivacyNotice");
  const arg1 = isInPrivateProfilesExperiment;
  const obj = arg1(dependencyMap[10]);
  const userIsTeen = arg1(dependencyMap[11]).useUserIsTeen();
  const dependencyMap = userIsTeen;
  const ProfileVisibility = arg1(dependencyMap[12]).ProfileVisibility;
  const setting = ProfileVisibility.useSetting();
  let closure_2 = setting;
  const items = [isInPrivateProfilesExperiment, userIsTeen, setting];
  return React.useMemo(() => {
    if (isInPrivateProfilesExperiment) {
      if (userIsTeen) {
        if (setting !== isInPrivateProfilesExperiment(userIsTeen[8]).ProfileVisibility.FRIENDS_AND_ALL_GUILDS) {
          const items = [isInPrivateProfilesExperiment(userIsTeen[13]).DismissibleContent.PRIVATE_PROFILE_INLINE_NOTICE];
        }
        return [];
      }
    }
  }, items);
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
const UserSettingsSections = arg1(dependencyMap[3]).UserSettingsSections;
const ContentDismissActionType = arg1(dependencyMap[4]).ContentDismissActionType;
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[5]));
let obj = arg1(dependencyMap[6]);
obj = {};
obj = { backgroundColor: importDefault(dependencyMap[7]).colors.BACKGROUND_FEEDBACK_INFO, borderWidth: 1, borderColor: importDefault(dependencyMap[7]).colors.ICON_FEEDBACK_INFO, borderRadius: importDefault(dependencyMap[7]).radii.sm, padding: importDefault(dependencyMap[7]).space.PX_12, flexDirection: "row", alignItems: "flex-start", gap: importDefault(dependencyMap[7]).space.PX_8 };
obj.container = obj;
obj.icon = { fontSize: "0 0 4px 0 hsl(none 0% 0% / 0.08)", lineHeight: "drop-shadow(0 0 4px hsl(none 0% 0% / 0.08))" };
obj.text = { flex: 1 };
obj.closeButton = { flexShrink: 0 };
let closure_9 = obj.createStyles(obj);
const tmp2 = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[20]).fileFinishedImporting("modules/user_profile/native/UserProfilePrivacyNotice.tsx");

export default function UserProfilePrivacyNotice() {
  const tmp = callback5();
  let obj = callback(dependencyMap[14]);
  const tmp3 = callback2(obj.useSelectedDismissibleContent(usePrivacyNoticeContentTypes()), 2);
  let callback = tmp3[1];
  const ProfileVisibility = callback(dependencyMap[12]).ProfileVisibility;
  const setting = ProfileVisibility.useSetting();
  callback = React.useCallback((children) => {
    const obj = {
      cachedAt: true,
      edpbxy: true,
      onPress() {
        let obj = callback(closure_1[16]);
        obj = { screen: constants.DATA_AND_PRIVACY };
        return obj.openUserSettings(obj);
      },
      children
    };
    return callback2(callback(closure_1[15]).Text, obj, arg1);
  }, []);
  if (tmp3[0] !== callback(dependencyMap[13]).DismissibleContent.PRIVATE_PROFILE_INLINE_NOTICE) {
    return null;
  } else {
    if (callback(dependencyMap[8]).ProfileVisibility.FRIENDS_ONLY === setting) {
      let dqQ7AN = callback(dependencyMap[9]).t.0UBDvq;
    } else if (callback(dependencyMap[8]).ProfileVisibility.FRIENDS_AND_SMALL_GUILDS === setting) {
      dqQ7AN = callback(dependencyMap[9]).t.9AvQO/;
    } else {
      const FRIENDS_AND_ALL_GUILDS = callback(dependencyMap[8]).ProfileVisibility.FRIENDS_AND_ALL_GUILDS;
      dqQ7AN = callback(dependencyMap[9]).t.dqQ7AN;
    }
    obj = { style: tmp.container };
    obj = { style: tmp.icon, children: callback3(callback(dependencyMap[17]).CircleInformationIcon, {}) };
    const items = [callback3(View, obj), , ];
    const obj1 = { "Null": 1, "Null": "tail", alignItems: null, style: tmp.text };
    const intl = callback(dependencyMap[9]).intl;
    const obj2 = { privacySettingsLink: callback };
    obj1.children = intl.format(dqQ7AN, obj2);
    items[1] = callback3(callback(dependencyMap[15]).Text, obj1);
    const obj3 = { accessibilityRole: "button" };
    const intl2 = callback(dependencyMap[9]).intl;
    obj3.accessibilityLabel = intl2.string(callback(dependencyMap[9]).t.WAI6xu);
    obj3.onPress = function onPress() {
      return callback(constants.USER_DISMISS);
    };
    obj3.style = tmp.closeButton;
    obj3.children = callback3(callback(dependencyMap[19]).XSmallIcon, {});
    items[2] = callback3(callback(dependencyMap[18]).PressableOpacity, obj3);
    obj.children = items;
    return callback4(View, obj);
  }
  const tmp2 = usePrivacyNoticeContentTypes();
};
export const useIsPrivacyNoticeVisible = function useIsPrivacyNoticeVisible() {
  const tmp = usePrivacyNoticeContentTypes();
  return callback2(arg1(dependencyMap[14]).useSelectedDismissibleContent(tmp), 1)[0] === arg1(dependencyMap[13]).DismissibleContent.PRIVATE_PROFILE_INLINE_NOTICE;
};
