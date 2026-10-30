// Module ID: 14658
// Function ID: 14659
// Name: ConjureYouScreenButton
// Dependencies: [19, 21, 5009, 575, 14659, 1499, 14664, 12429, 14667, 14665, 1114, 3865, 14669, 2]

// Module 14658 (ConjureYouScreenButton)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import Link from "Link" /* 1499 */;
import _modDef3865 from "module_3865" /* 3865 */;
import MagicWandIcon from "MagicWandIcon" /* 12429 */;
import useConjureWandStatusDefault from "useConjureWandStatus" /* 14659 */;
import YouScreenNavIconDefault from "YouScreenNavIcon" /* 14664 */;
import getIconSize from "getIconSize" /* 14665 */;
import ConjureWorkingWandDefault from "ConjureWorkingWand" /* 14667 */;
import openConjureProjectsSheetDefault from "openConjureProjectsSheet" /* 14669 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let obj2;
const jsx = Fragment.jsx;
let obj = { dot: obj2 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
let closure_4 = createStyles.createStyles(obj);
const memoResult = react.memo(function ConjureYouScreenButton() {
  let accessibilityLabel;
  let hasBadge;
  let working;
  const tmp = closure_4();
  ({ working, hasBadge, accessibilityLabel } = useConjureWandStatusDefault());
  useConjureWandStatusDefault();
  const obj = Link;
  const isFocused = obj.useIsFocused();
  YouScreenNavIconDefault;
  let tmp7Result;
  if (working) {
    const obj3 = { size: getIconSize.ICON_SIZE.md, paused: !isFocused };
    const tmp2Result = ConjureWorkingWandDefault;
    tmp7Result = tmp7(tmp2Result, obj3);
  }
  const intl = tmp5(1114).intl;
  return <tmp8 IconComponent={MagicWandIcon.MagicWandIcon} icon={tmp7Result} accessibilityLabel={accessibilityLabel} label={intl.string(_modDef3865.uk6jhJ)} onPress={openConjureProjectsSheetDefault} showRedDot={hasBadge} dotStyle={tmp.dot} />;
});
const result = size.fileFinishedImporting("modules/conjure/title_bar/native/ConjureYouScreenButton.tsx");

export default memoResult;
