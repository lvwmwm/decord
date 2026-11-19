// Module ID: 18017
// Function ID: 18018
// Name: ConjureYouBarButton
// Dependencies: [19, 16532, 21, 4792, 575, 13695, 13677, 1503, 18018, 13688, 13686, 13690, 2]

// Module 18017 (ConjureYouBarButton)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import Link from "Link" /* 1503 */;
import useConjureWandStatusDefault from "useConjureWandStatus" /* 13677 */;
import openConjureProjectsSheetDefault from "openConjureProjectsSheet" /* 13690 */;
import confirmConjureYouBarPinDefault from "confirmConjureYouBarPin" /* 13695 */;
import YouBarConstants from "YouBarConstants" /* 16532 */;
import YouBarButtonDefault from "YouBarButton" /* 18018 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4792 */;
import size from "module_2" /* 2 */;

let obj2;
let tmp5;
const MagicWandIcon2 = tmp5(13686);
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
    tmp7Result = tmp7(tmp2(13688), obj3);
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
