// Module ID: 10518
// Function ID: 10519
// Name: ConjureYouScreenButton
// Dependencies: [19, 21, 5306, 575, 10519, 1503, 10525, 10528, 10530, 10526, 1113, 4131, 10532, 2]

// Module 10518 (ConjureYouScreenButton)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import Link from "Link" /* 1503 */;
import _modDef4131 from "module_4131" /* 4131 */;
import useConjureWandStatusDefault from "useConjureWandStatus" /* 10519 */;
import YouScreenNavIconDefault from "YouScreenNavIcon" /* 10525 */;
import getIconSize from "getIconSize" /* 10526 */;
import MagicWandIcon from "MagicWandIcon" /* 10528 */;
import ConjureWorkingWandDefault from "ConjureWorkingWand" /* 10530 */;
import openConjureProjectsSheetDefault from "openConjureProjectsSheet" /* 10532 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5306 */;
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
  const intl = tmp5(1113).intl;
  return <tmp8 IconComponent={MagicWandIcon.MagicWandIcon} icon={tmp7Result} accessibilityLabel={accessibilityLabel} label={intl.string(_modDef4131.uk6jhJ)} onPress={openConjureProjectsSheetDefault} showRedDot={hasBadge} dotStyle={tmp.dot} />;
});
const result = size.fileFinishedImporting("modules/conjure/title_bar/native/ConjureYouScreenButton.tsx");

export default memoResult;
