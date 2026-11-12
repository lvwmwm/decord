// Module ID: 16892
// Function ID: 16893
// Name: UserProfileDisplayNameStyleTileButton
// Dependencies: [19, 17, 5171, 8835, 21, 5170, 575, 504, 8841, 4995, 7076, 1113, 16893, 10923, 10924, 7080, 2]
// Exports: default

// Module 16892 (UserProfileDisplayNameStyleTileButton)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import ProfileCustomizationUtils from "ProfileCustomizationUtils" /* 8841 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5171 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 8835 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5170 */;
import size from "module_2" /* 2 */;

let metroImportDefault;
let metroRequire;
let obj2;
const View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let obj = { button: obj2, previewContainer: { flex: 1, minWidth: 0 } };
obj2 = { flexDirection: "row", alignItems: "center", padding: nativeDefault.space.PX_12, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_STRONG, borderRadius: nativeDefault.radii.md };
let closure_8 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileDisplayNameStyleTileButton.tsx");

export default function UserProfileDisplayNameStyleTileButton(user) {
  let displayName;
  let displayNameStyles;
  let intl;
  let intl2;
  let obj4;
  let obj5;
  let useReducedMotion;
  user = user.user;
  const onPress = user.onPress;
  let tmp = closure_8();
  let obj = user(504);
  const items = [UserProfileSettingsStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const displayNameStyles = UserProfileSettingsStore.getTryItOutChanges().tryItOutDisplayNameStyles;
    const pendingGlobalName = UserProfileSettingsStore.getPendingChanges().pendingGlobalName;
    const obj = ProfileCustomizationUtils;
    const obj2 = { pendingValue: pendingGlobalName, userValue: user.globalName };
    let displayName = obj.getProfilePreviewValue(obj2);
    const tmp = user;
    if (displayName == null) {
      displayName = tmp.username;
    }
    return { displayName, displayNameStyles };
  });
  ({ displayNameStyles, displayName } = stateFromStoresObject);
  let obj2 = user(504);
  const items1 = [AccessibilityStore];
  const stateFromStores = obj2.useStateFromStores(items1, () => useReducedMotion.useReducedMotion);
  const GifAutoPlay = user(4995).GifAutoPlay;
  const setting = GifAutoPlay.useSetting();
  const obj3 = { accessibilityRole: "button", accessibilityLabel: intl.string(user(1113).t.lsjENp), accessibilityValue: obj4, accessibilityHint: intl2.string(user(1113).t["4lAcxv"]), onPress, style: tmp.button, children: null };
  const PressableHighlight = user(7076).PressableHighlight;
  intl = user(1113).intl;
  obj4 = { text: obj5.getDisplayNameStyleAccessibleValue(displayNameStyles) };
  obj5 = user(16893);
  intl2 = user(1113).intl;
  const obj6 = { style: tmp.previewContainer, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: null };
  const obj7 = { userId: user.id, userName: displayName, pendingDisplayNameStyles: displayNameStyles, ignoreDisabledStylesSetting: true, effectDisplayType: null, variant: "heading-xl/semibold", defaultColor: "text-muted", lineClamp: 1 };
  const tmp7 = closure_7;
  const tmp9 = View;
  if (!stateFromStores) {
    let STATIC;
    if (setting) {
      STATIC = tmp2(10924).EffectDisplayType.ANIMATED;
    }
    obj7.effectDisplayType = STATIC;
    obj6.children = closure_6(tmp10, obj7);
    const items2 = [closure_6(tmp9, obj6), closure_6(user(7080).TableRowArrow, {})];
    obj3.children = items2;
    return tmp7(PressableHighlight, obj3);
  }
  STATIC = tmp2(10924).EffectDisplayType.STATIC;
};
