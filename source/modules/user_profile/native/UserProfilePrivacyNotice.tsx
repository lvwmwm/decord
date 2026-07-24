// Module ID: 12138
// Function ID: 95111
// Name: usePrivacyNoticeContentTypes
// Dependencies: [57, 31, 27, 653, 1345, 33, 4130, 689, 1282, 1212, 12139, 7705, 3803, 1334, 5802, 4126, 5796, 4086, 4660, 5119, 2]
// Exports: default, useIsPrivacyNoticeVisible

// Module 12138 (usePrivacyNoticeContentTypes)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { View } from "get ActivityIndicator";
import { UserSettingsSections } from "ME";
import { ContentDismissActionType } from "ContentDismissActionType";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_7;
let closure_8;
const require = arg1;
function usePrivacyNoticeContentTypes() {
  isInPrivateProfilesExperiment = isInPrivateProfilesExperiment(userIsTeen[10]).useIsInPrivateProfilesExperiment("UserProfilePrivacyNotice");
  const obj = isInPrivateProfilesExperiment(userIsTeen[10]);
  userIsTeen = isInPrivateProfilesExperiment(userIsTeen[11]).useUserIsTeen();
  const ProfileVisibility = isInPrivateProfilesExperiment(userIsTeen[12]).ProfileVisibility;
  const setting = ProfileVisibility.useSetting();
  let items = [isInPrivateProfilesExperiment, userIsTeen, setting];
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
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_FEEDBACK_INFO, borderWidth: 1, borderColor: require("_createForOfIteratorHelperLoose").colors.ICON_FEEDBACK_INFO, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, padding: require("_createForOfIteratorHelperLoose").space.PX_12, flexDirection: "row", alignItems: "flex-start", gap: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.icon = { flexShrink: 0, marginTop: 2 };
_createForOfIteratorHelperLoose.text = { flex: 1 };
_createForOfIteratorHelperLoose.closeButton = { flexShrink: 0 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("get ActivityIndicator").fileFinishedImporting("modules/user_profile/native/UserProfilePrivacyNotice.tsx");

export default function UserProfilePrivacyNotice() {
  const tmp = _createForOfIteratorHelperLoose();
  let obj = _require(5802);
  const tmp3 = callback(obj.useSelectedDismissibleContent(usePrivacyNoticeContentTypes()), 2);
  _require = tmp3[1];
  const ProfileVisibility = _require(3803).ProfileVisibility;
  const setting = ProfileVisibility.useSetting();
  callback = React.useCallback((children) => {
    let obj = {
      variant: "text-sm/normal",
      color: "text-link",
      onPress() {
        let obj = callback(outer2_1[16]);
        obj = { screen: outer2_5.DATA_AND_PRIVACY };
        return obj.openUserSettings(obj);
      },
      children
    };
    return outer1_7(callback(outer1_1[15]).Text, obj, arg1);
  }, []);
  if (tmp3[0] !== _require(1334).DismissibleContent.PRIVATE_PROFILE_INLINE_NOTICE) {
    return null;
  } else {
    if (_require(1282).ProfileVisibility.FRIENDS_ONLY === setting) {
      let dqQ7AN = _require(1212).t["0UBDvq"];
    } else if (_require(1282).ProfileVisibility.FRIENDS_AND_SMALL_GUILDS === setting) {
      dqQ7AN = _require(1212).t["9AvQO/"];
    } else {
      const FRIENDS_AND_ALL_GUILDS = _require(1282).ProfileVisibility.FRIENDS_AND_ALL_GUILDS;
      dqQ7AN = _require(1212).t.dqQ7AN;
    }
    obj = { style: tmp.container };
    obj = { style: tmp.icon, children: callback2(_require(4086).CircleInformationIcon, { size: "xs", color: "icon-feedback-info" }) };
    const items = [callback2(View, obj), , ];
    const obj1 = { style: tmp.text, variant: "text-sm/normal", color: "text-default" };
    const intl = _require(1212).intl;
    const obj2 = { privacySettingsLink: callback };
    obj1.children = intl.format(dqQ7AN, obj2);
    items[1] = callback2(_require(4126).Text, obj1);
    const obj3 = { accessibilityRole: "button" };
    const intl2 = _require(1212).intl;
    obj3.accessibilityLabel = intl2.string(_require(1212).t.WAI6xu);
    obj3.onPress = function onPress() {
      return callback(outer1_6.USER_DISMISS);
    };
    obj3.style = tmp.closeButton;
    obj3.children = callback2(_require(5119).XSmallIcon, { size: "xs", color: "icon-feedback-info" });
    items[2] = callback2(_require(4660).PressableOpacity, obj3);
    obj.children = items;
    return callback3(View, obj);
  }
  const tmp2 = usePrivacyNoticeContentTypes();
};
export const useIsPrivacyNoticeVisible = function useIsPrivacyNoticeVisible() {
  const tmp = usePrivacyNoticeContentTypes();
  return callback(require(5802) /* useSelectedDismissibleContent */.useSelectedDismissibleContent(tmp), 1)[0] === require(1334) /* DismissibleContent */.DismissibleContent.PRIVATE_PROFILE_INLINE_NOTICE;
};
