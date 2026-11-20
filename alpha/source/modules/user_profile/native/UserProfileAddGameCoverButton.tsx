// Module ID: 10140
// Function ID: 10141
// Name: UserProfileAddGameCoverButton
// Dependencies: [19, 21, 4794, 10080, 575, 6910, 10085, 1112, 10141, 2]
// Exports: default

// Module 10140 (UserProfileAddGameCoverButton)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import UserProfileGameWidgetConstants from "UserProfileGameWidgetConstants" /* 10080 */;
import openUserProfileAddGameActionSheetDefault from "openUserProfileAddGameActionSheet" /* 10085 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4794 */;
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
  const PressableOpacity = ref(6910).PressableOpacity;
  const intl = ref(1112).intl;
  const items = [tmp.button, { width: coverWidth }];
  ({ size: "md", color: widgetType(575).colors.ICON_MUTED });
  const PlusLargeIcon = ref(10141).PlusLargeIcon;
  return <PressableOpacity ref={ref} onPress={function onPress() {
    const obj = { widgetType, returnFocusRef: ref };
    return openUserProfileAddGameActionSheetDefault(obj);
  }} accessibilityRole="button" accessibilityLabel={intl.string(ref(1112).t.E3l3Zx)} style={items}>{null}</PressableOpacity>;
};
