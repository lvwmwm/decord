// Module ID: 12061
// Function ID: 12062
// Name: UserProfileAddGameCoverButton
// Dependencies: [19, 21, 5243, 12048, 575, 7364, 12052, 1113, 10878, 2]
// Exports: default

// Module 12061 (UserProfileAddGameCoverButton)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import UserProfileGameWidgetConstants from "UserProfileGameWidgetConstants" /* 12048 */;
import openUserProfileAddGameActionSheetDefault from "openUserProfileAddGameActionSheet" /* 12052 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5243 */;
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
  const PressableOpacity = ref(7364).PressableOpacity;
  const intl = ref(1113).intl;
  const items = [tmp.button, { width: coverWidth }];
  ({ size: "md", color: widgetType(575).colors.ICON_MUTED });
  const PlusLargeIcon = ref(10878).PlusLargeIcon;
  return <PressableOpacity ref={ref} onPress={function onPress() {
    const obj = { widgetType, returnFocusRef: ref };
    return openUserProfileAddGameActionSheetDefault(obj);
  }} accessibilityRole="button" accessibilityLabel={intl.string(ref(1113).t.E3l3Zx)} style={items}>{null}</PressableOpacity>;
};
