// Module ID: 10137
// Function ID: 10138
// Name: UserProfileAddGameCoverButton
// Dependencies: [19, 21, 4792, 10077, 575, 6911, 10082, 1113, 10138, 2]
// Exports: default

// Module 10137 (UserProfileAddGameCoverButton)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import UserProfileGameWidgetConstants from "UserProfileGameWidgetConstants" /* 10077 */;
import openUserProfileAddGameActionSheetDefault from "openUserProfileAddGameActionSheet" /* 10082 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4792 */;
import size from "module_2" /* 2 */;

let obj2;
const jsx = Fragment.jsx;
let obj = { button: obj2 };
obj2 = { aspectRatio: UserProfileGameWidgetConstants.GAME_COVER_ASPECT_RATIO, borderRadius: UserProfileGameWidgetConstants.GAME_COVER_BORDER_RADIUS, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, alignItems: "center", justifyContent: "center" };
let closure_4 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileAddGameCoverButton.tsx");

export default function UserProfileAddGameCoverButton(ref) {
  ref = ref.ref;
  const widgetType = ref.widgetType;
  const coverWidth = ref.coverWidth;
  const tmp = closure_4();
  const PressableOpacity = ref(6911).PressableOpacity;
  const intl = ref(1113).intl;
  const items = [tmp.button, { width: coverWidth }];
  ({ size: "md", color: widgetType(575).colors.ICON_MUTED });
  const PlusLargeIcon = ref(10138).PlusLargeIcon;
  return <PressableOpacity ref={ref} onPress={function onPress() {
    const obj = { widgetType, returnFocusRef: ref };
    return openUserProfileAddGameActionSheetDefault(obj);
  }} accessibilityRole="button" accessibilityLabel={intl.string(ref(1113).t.E3l3Zx)} style={items}>{null}</PressableOpacity>;
};
