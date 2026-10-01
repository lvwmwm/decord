// Module ID: 16027
// Function ID: 16028
// Name: YouBarICYMIButton
// Dependencies: [19, 14627, 21, 4836, 576, 16028, 16029, 12585, 4693, 1115, 2]

// Module 16027 (YouBarICYMIButton)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import intl2 from "intl" /* 1115 */;
import RootNavigationRef from "RootNavigationRef" /* 4693 */;
import FlashIcon2 from "FlashIcon" /* 12585 */;
import YouBarConstants from "YouBarConstants" /* 14627 */;
import useICYMITabBadgeDefault from "useICYMITabBadge" /* 16028 */;
import YouBarButtonDefault from "YouBarButton" /* 16029 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let obj2;
const YOU_BAR_BUTTON_ICON_SIZE = YouBarConstants.YOU_BAR_BUTTON_ICON_SIZE;
const jsx = Fragment.jsx;
let obj = { icon: { width: YOU_BAR_BUTTON_ICON_SIZE, height: YOU_BAR_BUTTON_ICON_SIZE }, badge: obj2 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
let closure_4 = createStyles.createStyles(obj);
const memoResult = react.memo(function YouBarICYMIButton(hasNameplate) {
  let str;
  hasNameplate = hasNameplate.hasNameplate;
  const tmp = closure_4();
  const showDot = useICYMITabBadgeDefault().showDot;
  let obj2 = { size: "custom", style: tmp.icon, color: str };
  str = undefined;
  YouBarButtonDefault;
  const FlashIcon = FlashIcon2.FlashIcon;
  if (hasNameplate) {
    str = "white";
  }
  const intl = tmp5(1115).intl;
  return <tmp4 hasNameplate={hasNameplate} icon={null} hasBadge={showDot} badgeStyle={tmp.badge} onPress={function onPress() {
    const obj = RootNavigationRef;
    const rootNavigationRef = obj.getRootNavigationRef();
    if (null != rootNavigationRef) {
      const obj2 = { screen: "icymi-screen", params: { inNestedNavigator: true } };
      rootNavigationRef.navigate("icymi", obj2);
    }
  }} accessibilityLabel={intl.string(intl2.t["jnXV/V"])} />;
});
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/you_bar/YouBarICYMIButton.tsx");

export default memoResult;
