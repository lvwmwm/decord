// Module ID: 15226
// Function ID: 15227
// Name: UserProfileWidgetRemoveGameButton
// Dependencies: [19, 502, 8825, 21, 8098, 5862, 575, 1113, 12549, 5149, 8833, 2]
// Exports: default

// Module 15226 (UserProfileWidgetRemoveGameButton)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import intl2 from "intl" /* 1113 */;
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 5149 */;
import TrashIcon2 from "TrashIcon" /* 5862 */;
import IconButton2 from "IconButton" /* 8098 */;
import Constants from "Constants" /* 8825 */;
import UserProfileAnalyticsUtils from "UserProfileAnalyticsUtils" /* 8833 */;
import WidgetUtils from "WidgetUtils" /* 12549 */;
import react from "react" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import size from "module_2" /* 2 */;

let closure_4 = Constants.TrackUserProfileEditActions;
const jsx = Fragment.jsx;
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileWidgetRemoveGameButton.tsx");

export default function UserProfileWidgetRemoveGameButton(gameName) {
  let gameId;
  let widgetEdited;
  ({ widgetType: require, gameId: importDefault, onRemove: dependencyMap } = gameName);
  gameName = gameName.gameName;
  const IconButton = IconButton2.IconButton;
  let obj2 = { size: "sm", color: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_TEXT_DEFAULT };
  const TrashIcon = TrashIcon2.TrashIcon;
  let intl = intl2.intl;
  return <IconButton size="sm" variant="secondary-overlay" icon={null} accessibilityLabel={intl.formatToPlainString(intl2.t.unLAkl, { gameName })} onPress={function handleRemove() {
    const obj = WidgetUtils;
    const result = obj.removePendingGameFromWidget(require, importDefault);
    const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
    const announce = AccessibilityAnnouncer.announce;
    const intl = intl2.intl;
    announce(intl.string(intl2.t["08HmMj"]));
    const obj2 = UserProfileAnalyticsUtils;
    const obj3 = { userId: AuthenticationStore.getId(), action: constants.GAME_REMOVED, widgetEdited: require, gameId: importDefault };
    const result1 = obj2.trackUserProfileEditAction(obj3);
    const tmp = importDefault;
    if (dependencyMap != null) {
      dependencyMap(tmp);
    }
  }} />;
};
