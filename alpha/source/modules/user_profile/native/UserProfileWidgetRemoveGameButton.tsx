// Module ID: 10113
// Function ID: 10114
// Name: UserProfileWidgetRemoveGameButton
// Dependencies: [19, 502, 7950, 21, 7472, 5499, 575, 1113, 10094, 4801, 8017, 2]
// Exports: default

// Module 10113 (UserProfileWidgetRemoveGameButton)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import intl2 from "intl" /* 1113 */;
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 4801 */;
import TrashIcon2 from "TrashIcon" /* 5499 */;
import IconButton2 from "IconButton" /* 7472 */;
import Constants from "Constants" /* 7950 */;
import UserProfileAnalyticsUtils from "UserProfileAnalyticsUtils" /* 8017 */;
import WidgetUtils from "WidgetUtils" /* 10094 */;
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
