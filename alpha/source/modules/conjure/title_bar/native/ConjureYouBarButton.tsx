// Module ID: 19213
// Function ID: 19214
// Name: ConjureYouBarButton
// Dependencies: [19, 17739, 21, 5310, 575, 15025, 15092, 1503, 19214, 15097, 14434, 15020, 2]

// Module 19213 (ConjureYouBarButton)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import Link from "Link" /* 1503 */;
import openConjureProjectsSheetDefault from "openConjureProjectsSheet" /* 15020 */;
import confirmConjureYouBarPinDefault from "confirmConjureYouBarPin" /* 15025 */;
import useConjureWandStatusDefault from "useConjureWandStatus" /* 15092 */;
import YouBarConstants from "YouBarConstants" /* 17739 */;
import YouBarButtonDefault from "YouBarButton" /* 19214 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5310 */;
import size from "module_2" /* 2 */;

let obj2;
let tmp5;
const MagicWandIcon2 = tmp5(14434);
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
    tmp7Result = tmp7(tmp2(15097), obj3);
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
