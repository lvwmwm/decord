// Module ID: 18189
// Function ID: 18190
// Name: ConjureYouBarButton
// Dependencies: [19, 16690, 21, 5043, 575, 14291, 14275, 1502, 18190, 14284, 11495, 14286, 2]

// Module 18189 (ConjureYouBarButton)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import Link from "Link" /* 1502 */;
import useConjureWandStatusDefault from "useConjureWandStatus" /* 14275 */;
import openConjureProjectsSheetDefault from "openConjureProjectsSheet" /* 14286 */;
import confirmConjureYouBarPinDefault from "confirmConjureYouBarPin" /* 14291 */;
import YouBarConstants from "YouBarConstants" /* 16690 */;
import YouBarButtonDefault from "YouBarButton" /* 18190 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5043 */;
import size from "module_2" /* 2 */;

let obj2;
let tmp5;
const MagicWandIcon2 = tmp5(11495);
function confirmUnpin() {
  confirmConjureYouBarPinDefault(false);
}
const YOU_BAR_BUTTON_ICON_SIZE = YouBarConstants.YOU_BAR_BUTTON_ICON_SIZE;
const jsx = Fragment.jsx;
let obj = { icon: { width: YOU_BAR_BUTTON_ICON_SIZE, height: YOU_BAR_BUTTON_ICON_SIZE }, badge: obj2 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
let closure_5 = createStyles.createStyles(obj);
const memoResult = react.memo(function ConjureYouBarButton(hasNameplate) {
  let accessibilityLabel;
  let hasBadge;
  let str;
  let tmp7Result;
  let working;
  hasNameplate = hasNameplate.hasNameplate;
  const canUnpin = hasNameplate.canUnpin;
  const tmp = closure_5();
  ({ working, hasBadge, accessibilityLabel } = useConjureWandStatusDefault());
  useConjureWandStatusDefault();
  const obj = Link;
  const isFocused = obj.useIsFocused();
  YouBarButtonDefault;
  if (working) {
    const obj3 = { size: YOU_BAR_BUTTON_ICON_SIZE, paused: !isFocused };
    tmp7Result = tmp7(tmp2(14284), obj3);
  } else {
    const obj4 = { size: "custom", style: tmp.icon, color: str };
    str = undefined;
    const MagicWandIcon = MagicWandIcon2.MagicWandIcon;
    if (hasNameplate) {
      str = "white";
    }
    tmp7Result = tmp7(MagicWandIcon, obj4);
  }
  let tmp11;
  if (canUnpin) {
    tmp11 = confirmUnpin;
  }
  return <tmp8 hasNameplate={hasNameplate} icon={tmp7Result} hasBadge={hasBadge} badgeStyle={tmp.badge} onPress={openConjureProjectsSheetDefault} onLongPress={tmp11} accessibilityLabel={accessibilityLabel} />;
});
const result = size.fileFinishedImporting("modules/conjure/title_bar/native/ConjureYouBarButton.tsx");

export default memoResult;
