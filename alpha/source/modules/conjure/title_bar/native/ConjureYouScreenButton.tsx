// Module ID: 13676
// Function ID: 13677
// Name: ConjureYouScreenButton
// Dependencies: [19, 21, 4792, 575, 13677, 1503, 13683, 13686, 13688, 13684, 1113, 4089, 13690, 2]

// Module 13676 (ConjureYouScreenButton)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import Link from "Link" /* 1503 */;
import _modDef4089 from "module_4089" /* 4089 */;
import useConjureWandStatusDefault from "useConjureWandStatus" /* 13677 */;
import YouScreenNavIconDefault from "YouScreenNavIcon" /* 13683 */;
import getIconSize from "getIconSize" /* 13684 */;
import MagicWandIcon from "MagicWandIcon" /* 13686 */;
import ConjureWorkingWandDefault from "ConjureWorkingWand" /* 13688 */;
import openConjureProjectsSheetDefault from "openConjureProjectsSheet" /* 13690 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4792 */;
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
  return <tmp8 IconComponent={MagicWandIcon.MagicWandIcon} icon={tmp7Result} accessibilityLabel={accessibilityLabel} label={intl.string(_modDef4089.uk6jhJ)} onPress={openConjureProjectsSheetDefault} showRedDot={hasBadge} dotStyle={tmp.dot} />;
});
const result = size.fileFinishedImporting("modules/conjure/title_bar/native/ConjureYouScreenButton.tsx");

export default memoResult;
